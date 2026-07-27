import * as THREE from "three";

export class RainAnimation {
	private size: { x: number; y: number };
	private raindropsCount: number;
	private scene: THREE.Scene;
	private cameraPositionZ: number;
	private camera: THREE.PerspectiveCamera;
	private maxPosition: THREE.Vector2;
	private renderer: THREE.WebGLRenderer;
	private raindrops: THREE.Mesh[];

	// 1. Оптимизация: Общие геометрия и материал для всех капель (DRY и память)
	private sharedGeometry: THREE.PlaneGeometry;
	private sharedMaterial: THREE.MeshBasicMaterial;

	// 2. Оптимизация: Кэширование направлений, чтобы не считать их каждый кадр
	private cachedDirections: { x: number; y: number } = { x: 0, y: 0 };

	private rainSettings: {
		angle: number;
		color: THREE.ColorRepresentation;
		countPer100Pixels: number;
		speed: number;
	};

	constructor(options: {
		size: { x: number; y: number };
		canvas: HTMLCanvasElement;
		rainSettings: RainAnimation["rainSettings"];
	}) {
		const { size, canvas, rainSettings } = options;

		this.rainSettings = rainSettings;
		this.size = size;
		this.raindropsCount = this.calculateRaindropCount();
		this.cameraPositionZ = 1;
		this.camera = new THREE.PerspectiveCamera(
			90,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		this.scene = new THREE.Scene();
		this.maxPosition = this.camera.getViewSize(this.cameraPositionZ, new THREE.Vector2());
		this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		this.raindrops = [];

		// Инициализируем геометрию и материал ОДИН раз
		this.sharedGeometry = new THREE.PlaneGeometry(0.003, 0.015);
		this.sharedMaterial = new THREE.MeshBasicMaterial({
			color: this.rainSettings.color,
		});

		this.updateDirections();
	}

	public init = (): void => {
		this.renderer.setSize(this.size.x, this.size.y);
		this.renderer.setAnimationLoop(this.animate);

		this.camera.position.z = this.cameraPositionZ;
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.raindropsCount = this.calculateRaindropCount();
		this.rebuildRaindrops();
	};

	public destroy = (): void => {
		this.renderer.setAnimationLoop(null);
		this.renderer.dispose();

		// Обязательная очистка геометрии и материалов для предотвращения memory leak
		this.sharedGeometry.dispose();
		this.sharedMaterial.dispose();

		this.raindrops.forEach((drop) => this.scene.remove(drop));
		this.raindrops = [];
	};

	private updateDirections = (): void => {
		const radians = this.degreesToRadians(this.rainSettings.angle);
		this.cachedDirections = {
			x: Math.sin(radians),
			y: Math.cos(radians),
		};
	};

	private animate = (): void => {
		const { x: xDir, y: yDir } = this.cachedDirections;
		const xStep = xDir * this.rainSettings.speed;
		const yStep = Math.abs(yDir * this.rainSettings.speed);
		const resetYThreshold = -this.maxPosition.y / 2;

		for (let i = 0; i < this.raindrops.length; i++) {
			const raindrop = this.raindrops[i];

			raindrop.position.y -= yStep;
			raindrop.position.x -= xStep;

			if (raindrop.position.y < resetYThreshold) {
				const { x, y } = this.getRandomPosition();
				raindrop.position.set(x, y, 0);
			}
		}

		this.renderer.render(this.scene, this.camera);
	};

	public resize = (size: { x: number; y: number }): void => {
		this.size = size;
		this.renderer.setSize(this.size.x, this.size.y, true);

		this.raindropsCount = this.calculateRaindropCount();
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.maxPosition = this.camera.getViewSize(this.cameraPositionZ, new THREE.Vector2());

		this.rebuildRaindrops();
	};

	private createRaindrop(): THREE.Mesh {
		// Используем инстансы вместо создания новых
		return new THREE.Mesh(this.sharedGeometry, this.sharedMaterial);
	}

	private rebuildRaindrops = (): void => {
		if (this.raindrops.length > this.raindropsCount) {
			while (this.raindrops.length > this.raindropsCount) {
				const raindrop = this.raindrops.pop();
				if (raindrop) this.scene.remove(raindrop);
			}
		} else {
			while (this.raindrops.length < this.raindropsCount) {
				const raindrop = this.createRaindrop();
				const { x, y } = this.getRandomStartPosition();
				raindrop.rotateZ(-THREE.MathUtils.degToRad(this.rainSettings.angle));
				raindrop.position.set(x, y, 0);
				this.raindrops.push(raindrop);
				this.scene.add(raindrop);
			}
		}
	};

	private getRandomStartPosition = (): { x: number; y: number } => {
		return {
			x: this.maxPosition.x * Math.random() - this.maxPosition.x / 2,
			y: this.maxPosition.y * Math.random() - this.maxPosition.y / 2,
		};
	};

	private getRandomPosition = (): { x: number; y: number } => {
		return {
			x: this.maxPosition.x * Math.random() - this.maxPosition.x / 2,
			y: this.maxPosition.y / 2,
		};
	};

	private degreesToRadians = (degrees: number): number => {
		return (degrees * Math.PI) / 180;
	};

	private calculateRaindropCount = (): number => {
		return Math.round(this.size.x / 100) * this.rainSettings.countPer100Pixels;
	};
}
