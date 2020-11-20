import { useRef, useState, useLayoutEffect } from 'react';
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from 'framer-motion';

const rand = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (+max - +min) + +min);
};

const ParallaxItem = ({ children, className }) => {
  const { scrollYProgress } = useViewportScroll();
  const ref = useRef();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const springConfig = {
    damping: 80,
    stiffness: 80,
    mass: rand(1, 1.5),
  };

  useLayoutEffect(() => {
    if (!ref.current) return null;

    const onResize = () => {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTop = rect.top + scrollTop;
      setStart(offsetTop / document.body.clientHeight);
      setEnd((offsetTop + rect.height) / document.body.clientHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, [ref]);

  const y = useSpring(
    useTransform(scrollYProgress, [start, end], [0, rand(0, -80)]),
    springConfig
  );

  return (
    <div className={className}>
      <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxItem;
