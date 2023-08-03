import { useState, useEffect } from 'react';

const useScrollNavbar = () => {
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
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

    return { navbarVisible };
};

export default useScrollNavbar;