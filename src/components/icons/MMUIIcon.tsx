import { motion } from "framer-motion";
import { memo, forwardRef } from "react";
import { SVGIconProps } from "./types";

const MMUIIcon = memo(
    forwardRef<SVGSVGElement, SVGIconProps>((svgProps, ref) => {
        return (
            <svg
                {...svgProps}
                ref={ref}
                viewBox="0 -26 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
            >
                <motion.polygon
                    initial={{ pathLength: 0, fill: "#0000" }}
                    animate={{ pathLength: 1, fill: "#00B0FF" }}
                    transition={{ duration: 3 }}
                    stroke="#00B0FF"
                    fill="#00B0FF"
                    points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
                ></motion.polygon>

                <motion.polygon
                    initial={{ pathLength: 0, fill: "#0000" }}
                    animate={{ pathLength: 1, fill: "#0081CB" }}
                    transition={{ duration: 3 }}
                    stroke="#0081CB"
                    fill="#0081CB"
                    points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
                ></motion.polygon>

                <motion.polygon
                    initial={{ pathLength: 0, fill: "#0000" }}
                    animate={{ pathLength: 1, fill: "#00B0FF" }}
                    transition={{ duration: 3 }}
                    stroke="#00B0FF"
                    fill="#00B0FF"
                    points="96 129.322667 96 166.272 160 203.221333 160 166.272"
                ></motion.polygon>

                <motion.path
                    initial={{ pathLength: 0, fill: "#0000" }}
                    animate={{ pathLength: 1, fill: "#0081CB" }}
                    transition={{ duration: 3 }}
                    stroke="#0081CB"
                    fill="#0081CB"
                    d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z"
                ></motion.path>
            </svg>
        );
    })
);

export default MMUIIcon;
