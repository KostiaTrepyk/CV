import {
    Children,
    forwardRef,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import Slide from "./Slide/Slide";

import styles from "./carousel.module.css";

interface CarouselProps extends React.PropsWithChildren {
    /** @default false */
    autoplay?: boolean;

    /** @default 7000 */
    autoplaySpeed?: number;

    /** @default false */
    disabled?: boolean;

    /** @default 2000 */
    duration?: number;

    /** @default white */
    color?: string;
}

const Carousel = memo(
    forwardRef<HTMLDivElement, CarouselProps>(
        (
            {
                autoplay = false,
                autoplaySpeed = 7_000,
                disabled = false,
                duration = 2000,
                color = "#fff",
                children,
            },
            ref
        ) => {
            const count = Children.count(children);
            const [current, setCurrent] = useState<number>(0);
            const [next, setNext] = useState<number>(1);
            const [isDisabled, setIsdisabled] = useState<boolean>(disabled);

            const interval = useRef<NodeJS.Timer>();

            const nextSlide = useCallback(() => {
                setCurrent((prev) => {
                    if (count === prev + 1) return 0;
                    return prev + 1;
                });
                setNext((prev) => {
                    if (count === prev + 1) return 0;
                    return prev + 1;
                });

                setIsdisabled(true);
            }, [count]);

            useEffect(() => {
                if (autoplay) {
                    interval.current = setInterval(nextSlide, autoplaySpeed);

                    return () => {
                        clearInterval(interval.current);
                    };
                }
            }, [nextSlide, autoplaySpeed, autoplay]);

            useEffect(() => {
                if (!disabled) {
                    let controller: NodeJS.Timeout;

                    if (isDisabled) {
                        controller = setTimeout(() => {
                            setIsdisabled(false);
                        }, duration);
                    }

                    return () => {
                        clearTimeout(controller);
                    };
                }
            }, [isDisabled, disabled, duration]);

            function slideClickHandler() {
                if (isDisabled) return;

                if (autoplay) {
                    clearInterval(interval.current);
                    interval.current = setInterval(nextSlide, autoplaySpeed);
                }

                nextSlide();
            }

            function indicatorClickHandler(index: number) {
                if (index < 0 || index >= count) return;
                if (isDisabled) return;

                clearInterval(interval.current);
                interval.current = setInterval(nextSlide, 5_000);

                setNext(index + 1 === count ? 0 : index + 1);
                setCurrent(index);

                setIsdisabled(true);
            }

            return (
                <div
                    className={styles.carousel}
                    ref={ref}
                    /* ??? */
                    style={{ "--color": color } as any}
                >
                    <div className={styles.currentSlide}>
                        {Children.map(children, (child, index) => (
                            <Slide
                                duration={duration}
                                active={index === current}
                            >
                                {child}
                            </Slide>
                        ))}
                    </div>

                    <div
                        className={styles.nextSlide}
                        onClick={slideClickHandler}
                        data-disabled={isDisabled}
                    >
                        {Children.map(children, (child, index) => (
                            <Slide
                                duration={duration}
                                active={index === next}
                            >
                                {child}
                            </Slide>
                        ))}
                    </div>

                    <div className={styles.indicators}>
                        {/* FIX!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                        {Children.map(children, (_, index) => (
                            <button
                                className={styles.indicator}
                                onClick={() => indicatorClickHandler(index)}
                                data-active={index === current}
                                data-disabled={isDisabled}
                            ></button>
                        ))}
                    </div>
                </div>
            );
        }
    )
);

export default Carousel;
