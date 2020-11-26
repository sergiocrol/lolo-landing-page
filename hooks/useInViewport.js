import { useEffect, useState } from 'react';

import useHeight from '../hooks/useHeight';

const useInViewport = (outerRef) => {
  const [inViewport, setInViewport] = useState(true);
  const viewportHeight = useHeight();

  useEffect(() => {
    if (viewportHeight > 0) {
      const height =
        viewportHeight / 2 -
        (outerRef.current?.clientHeight || viewportHeight - 10) / 2;
      const rootMargin = `${height * -1}px 0px ${height * -1}px 0px`;
      const options = {
        rootMargin,
        threshold: [0.5],
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

export default useInViewport;