import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, BoxProps } from "@mui/material";

import { RainAnimation } from "threejs-animations/rain";

interface RainProps extends BoxProps<"canvas"> {}

const Rain: React.FC<RainProps> = (props) => {
	const location = useLocation();

	const [isAdded, setAdded] = useState<boolean>(false);
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

	useEffect(() => {
		window.addEventListener("resize", resize);
		return () => {
			window.removeEventListener("resize", resize);
		};
	}, [resize]);

	useEffect(() => {
		resize();
	}, [location.pathname, resize]);

	useEffect(() => {
		if (rainCanvasRef.current && isAdded === false) {
			setAdded(true);
			const canvas = rainCanvasRef.current;

			const size = getCurrentBodySize();
			const rainSettings: RainAnimation["rainSettings"] = {
				angle: 10,
				color: 0x666666,
				countPer100Pixels: 1,
				speed: 0.01,
			};

			rainInstanceRef.current = new RainAnimation({
				canvas,
				size,
				rainSettings,
			});
			rainInstanceRef.current.init();
		}
	}, [isAdded, getCurrentBodySize]);

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
