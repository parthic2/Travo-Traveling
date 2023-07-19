import { useEffect, useState } from 'react';

const useScroll = () => {
    const [navbarVisible, setNavbarVisible] = useState(true);

    useEffect(() => {
        let prevScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY) {
                setNavbarVisible(false); // Scrolling down, hide the navbar
            } else {
                setNavbarVisible(true); // Scrolling up, show the navbar
            }

            prevScrollY = currentScrollY;
        };

        const isDesktop = window.matchMedia('(min-width: 768px)').matches;

        if (isDesktop) {
            window.addEventListener('scroll', handleScroll);
        }

        // Clean up the event listener when the component unmounts
        return () => {
            if (isDesktop) {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return navbarVisible;
};

export default useScroll;