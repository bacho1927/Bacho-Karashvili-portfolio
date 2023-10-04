import { useRef, useState, useEffect } from "react";

export default function Reveal() {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const elementRef = useRef(null);

    const handleScroll = () => {
        if (elementRef.current) {
            const elementPosition = elementRef.current.getBoundingClientRect().top;


            if (elementPosition <= window.innerHeight - 250) {
                setShouldAnimate(true);
                window.removeEventListener('scroll', handleScroll);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { elementRef, shouldAnimate }
}