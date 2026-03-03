import { useEffect, useRef, useState } from "react";

const useInView = ({ rootMargin = "0px", threshold = 0 } = {}) => {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { root: null, rootMargin, threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [rootMargin, threshold]);

    return { ref, isInView };
};

export default useInView;
