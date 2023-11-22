import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    delay?: number;
    speed?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
    text,
    delay = 0,
    /** Increasing slowes animation */
    speed = 0.055,
}) => {
    return (
        <span>
            {text.split("").map((character, characterIndex) => {
                if (character === " ") {
                    return (
                        <span
                            key={characterIndex}
                            style={{ display: "inline" }}
                        >
                            {" "}
                        </span>
                    );
                }
                return (
                    <motion.span
                        key={characterIndex}
                        style={{
                            display: "inline-block",
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: speed * 5,
                            delay: speed * characterIndex + delay,
                        }}
                    >
                        {character}
                    </motion.span>
                );
            })}
        </span>
    );
};

export default AnimatedText;
