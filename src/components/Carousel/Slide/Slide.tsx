import { forwardRef } from "react";
import { type Variants, motion, cubicBezier } from "framer-motion";

import styles from "./slide.module.css";

const slideVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 1,
        zIndex: 0,
    },

    current: {
        opacity: [0, 1],
        scale: [0.8, 1],
        zIndex: 1,
    },
};

interface SlideProps extends React.PropsWithChildren {
    active?: boolean;
    duration?: number;
}

const Slide = forwardRef<HTMLDivElement, SlideProps>(
    ({ active = false, duration = 2000, children }, ref) => {
        return (
            <motion.div
                className={styles.slide}
                initial={active ? "current" : "initial"}
                animate={active ? "current" : "initial"}
                variants={slideVariants}
                transition={{
                    duration: duration / 1000,
                    ease: cubicBezier(0.77, 0.21, 0.21, 0.73),
                }}
                ref={ref}
            >
                {children}
            </motion.div>
        );
    }
);

export default Slide;
