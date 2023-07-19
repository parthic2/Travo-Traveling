import { useEffect, useState } from 'react';

const useScrollAnimation = (targetClass) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const animatedElement = document.querySelector(targetClass);
      const elementPosition = animatedElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        setFadeIn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetClass]);

  return fadeIn;
};

export default useScrollAnimation;
