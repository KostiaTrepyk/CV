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
	private rainSettings: {
		/** @description In degrees @example 10 */
		angle: number;

		/** @example 0x666666 */
		color: THREE.ColorRepresentation;

		/** @example 1 */
		countPer100Pixels: number;
		/** @example 0.01 */
		speed: number;
	};

	constructor(options: {
		size: { x: number; y: number };
		canvas: HTMLCanvasElement;
		rainSettings: RainAnimation["rainSettings"];
	}) {
		const { size, canvas, rainSettings: raindrop } = options;

		this.rainSettings = raindrop;
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
		this.maxPosition = this.camera.getViewSize(
			this.cameraPositionZ,
			new THREE.Vector2()
		);
		this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
		this.raindrops = [];
	}

	public init = (): void => {
		// Set renderer
		this.renderer.setSize(this.size.x, this.size.y);
		// this.renderer.setClearColor(0x000000, 0); // transparent background
		this.renderer.setAnimationLoop(this.animate);

		// Set camera
		this.camera.position.z = this.cameraPositionZ;
		this.camera.aspect = window.innerWidth / window.innerHeight;

		// Re-creating raindrops based on new sizes
		this.raindropsCount = this.calculateRaindropCount();
		this.rebuildRaindrops();
	};

	private animate = (): void => {
		for (let i = 0; i < this.raindrops.length; i++) {
			const raindrop = this.raindrops[i];

			// Calculation of directions
			const calculateDirections = (
				angle: number
			): {
				xDirection: number;
				yDirection: number;
			} => {
				const radians = this.degreesToRadians(angle);
				return {
					xDirection: Math.sin(radians),
					yDirection: Math.cos(radians),
				};
			};

			const { xDirection, yDirection } = calculateDirections(
				this.rainSettings.angle
			);

			raindrop.position.y -= Math.abs(yDirection * this.rainSettings.speed);
			raindrop.position.x -= xDirection * this.rainSettings.speed;

			// Reset the raindrop position when it reaches the bottom
			if (raindrop.position.y < -this.maxPosition.y / 2) {
				const { x, y } = this.getRandomPosition();
				raindrop.position.x = x;
				raindrop.position.y = y;
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
		this.maxPosition = this.camera.getViewSize(
			this.cameraPositionZ,
			new THREE.Vector2()
		);

		this.rebuildRaindrops();
	};

	private createRaindrop(): THREE.Mesh<
		THREE.PlaneGeometry,
		THREE.MeshBasicMaterial,
		THREE.Object3DEventMap
	> {
		const geometry = new THREE.PlaneGeometry(0.003, 0.015);
		const material = new THREE.MeshBasicMaterial({
			color: this.rainSettings.color,
		});
		const raindrop = new THREE.Mesh(geometry, material);
		return raindrop;
	}

	private rebuildRaindrops = (): void => {
		if (this.raindrops.length > this.raindropsCount) {
			// Remove excess raindrops
			while (this.raindrops.length > this.raindropsCount) {
				const raindrop = this.raindrops.pop();
				if (raindrop) this.scene.remove(raindrop);
			}
		} else {
			// Add new raindrops if needed
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
		const x = this.maxPosition.x * Math.random() - this.maxPosition.x / 2;
		const y = this.maxPosition.y * Math.random() - this.maxPosition.y / 2;
		return { x: x, y: y };
	};

	private getRandomPosition = (): { x: number; y: number } => {
		const x = this.maxPosition.x * Math.random() - this.maxPosition.x / 2;
		const y = this.maxPosition.y / 2;
		return { x: x, y: y };
	};

	private degreesToRadians = (degrees: number): number => {
		return (degrees * Math.PI) / 180;
	};

	private calculateRaindropCount = (): number => {
		return Math.round(this.size.x / 100) * this.rainSettings.countPer100Pixels;
	};
}
