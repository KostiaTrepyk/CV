import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Box, BoxProps } from "@mui/material";

import { RainAnimation } from "threejs-animations/rain";

interface RainProps extends BoxProps<"canvas"> {}

const Rain: React.FC<RainProps> = (props) => {
	const location = useLocation();
	const rainCanvasRef = useRef<HTMLCanvasElement>(null);
	const rainInstanceRef = useRef<RainAnimation>();

	const getCurrentBodySize = useCallback((): { x: number; y: number } => {
		return {
			x: document.body.clientWidth - 1, // -1 to avoid x-axis scrolling
			y: document.body.clientHeight,
		};
	}, []);

	const resize = useCallback(() => {
		if (!rainInstanceRef.current) return;
		const newSize = getCurrentBodySize();
		rainInstanceRef.current.resize(newSize);
	}, [getCurrentBodySize]);

	// Отслеживаем изменение размера окна
	useEffect(() => {
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, [resize]);

	// Вызываем resize при смене маршрута
	useEffect(() => {
		resize();
	}, [location.pathname, resize]);

	// Инициализация Three.js
	useEffect(() => {
		if (!rainCanvasRef.current) return;

		const canvas = rainCanvasRef.current;
		const size = getCurrentBodySize();

		const rainSettings: RainAnimation["rainSettings"] = {
			angle: 10,
			color: 0x666666,
			countPer100Pixels: 1,
			speed: 0.01,
		};

		// Создаем инстанс
		const instance = new RainAnimation({
			canvas,
			size,
			rainSettings,
		});

		rainInstanceRef.current = instance;
		instance.init();

		// Очистка при размонтировании
		return () => {
			instance.destroy();
			rainInstanceRef.current = undefined;
		};
	}, [getCurrentBodySize]);

	return (
		<Box
			aria-hidden
			{...props}
			sx={{
				position: "absolute",
				top: 0,
				left: 0,
				pointerEvents: "none",
				...props.sx,
			}}
			component="canvas"
			ref={rainCanvasRef}
		/>
	);
};

export default Rain;
