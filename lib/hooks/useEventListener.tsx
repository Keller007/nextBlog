import { useEffect, useState } from "react";
export const useEventListener = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const eventListener = () => {
      if (window.scrollY > 0 && window.scrollY < 50)
        setScrollTop(window.scrollY);
      if (window.scrollY === 0) setScrollTop(0);
    };
    window.addEventListener("scroll", eventListener);
    return () => window.removeEventListener(`scroll`, eventListener);
  }, []);

  return scrollTop;
};
