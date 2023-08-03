import { useEffect, useState } from 'react';

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    let observerRef = ref.current; // Store the ref.current in a variable

    if (observerRef) {
      observer.observe(observerRef);
    }

    return () => {
      if (observerRef) {
        observer.unobserve(observerRef);
      }
    };
  }, [ref]);

  return isIntersecting;
};

export default useOnScreen;
