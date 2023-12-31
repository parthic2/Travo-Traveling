import { useState, useEffect } from 'react';

const useScroll = () => {
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [navbarColor, setNavbarColor] = useState("");
    const [textColor, setTextColor] = useState("");

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            const isAtTop = currentScrollY === 0;

            if (isAtTop) {
                setNavbarColor("white");
                setTextColor("black");
            } else if (currentScrollY > prevScrollY) {
                setNavbarVisible(false);
                setNavbarColor("white");
                setTextColor("black");
            } else {
                setNavbarVisible(true);
                setNavbarColor("white");
                setTextColor("black");
            }

            prevScrollY = currentScrollY;
        };

        const isDesktop = window.matchMedia('(min-width: 768px)').matches;

        if (isDesktop) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (isDesktop) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return { navbarVisible, navbarColor, textColor };
};

export default useScroll;