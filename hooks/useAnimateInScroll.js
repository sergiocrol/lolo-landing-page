import { useEffect, useState } from 'react';

import useHeight from '../hooks/useHeight';

const useAnimateInScroll = (outerRef) => {
  const [inViewport, setInViewport] = useState(false);
  const viewportHeight = useHeight();

  useEffect(() => {
    if (viewportHeight > 0) {
      const height =
        viewportHeight / 4 -
        (outerRef.current?.clientHeight);
      const rootMargin = `${height * -1}px 0px ${height * -1}px 0px`;
      const options = {
        rootMargin,
        threshold: [0],
      };

      const onChange = (entries) => {
        entries.forEach((entry) => {
          if (entry.target === outerRef.current) {
            if (entry.isIntersecting) {
              setInViewport(true);
            } else {
              setInViewport(false);
            }
          }
        });
      };
      const observer = new IntersectionObserver(onChange, options);
      observer.observe(outerRef.current);
    }
  }, [viewportHeight]);

  return inViewport;
}

export default useAnimateInScroll;