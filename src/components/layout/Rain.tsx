import { Box } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { RainAnimation } from "threejs-animations/rain";

interface RainProps extends React.PropsWithChildren {}

const Rain: React.FC<RainProps> = ({ children }) => {
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
		<>
			<Box
				component="canvas"
				ref={rainCanvasRef}
				sx={{ position: "absolute", top: 0, left: 0 }}
				aria-hidden
			/>
			{children}
		</>
	);
};

export default Rain;
