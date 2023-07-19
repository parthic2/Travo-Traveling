import { useEffect, useRef } from 'react';

const useScrollAnimationTrends = () => {
    const animatedElements = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const elementsInView = animatedElements.current.filter((element) => {
                // Check if the element exists before accessing its properties
                if (!element) return false;
                
                const top = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                return top < windowHeight;
            });

            elementsInView.forEach((element) => {
                element.classList.add('animate');
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const registerElement = (element) => {
        animatedElements.current.push(element);
    };

    return registerElement;
};

export default useScrollAnimationTrends;