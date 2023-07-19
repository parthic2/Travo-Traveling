import { useEffect } from 'react';

const useScrollAnimationLogic = (leftTargetClass, rightTargetClass, animateColumns) => {
  useEffect(() => {
    const handleScroll = () => {
      const leftColumn = document.querySelector(leftTargetClass);
      const rightColumn = document.querySelector(rightTargetClass);

      if (isInView(leftColumn)) {
        leftColumn.classList.add('animate-left');
      }

      if (isInView(rightColumn)) {
        rightColumn.classList.add('animate-right');
      }
    };

    const isInView = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight;
    };

    animateColumns(); // Call the animateColumns function once to apply initial animations

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animateColumns, leftTargetClass, rightTargetClass]);
};

export default useScrollAnimationLogic;