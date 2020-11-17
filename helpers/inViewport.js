import { useAnimation } from 'framer-motion';

function isInViewport(inViewport) {
  const controls = useAnimation();

  if (inViewport) {
    controls.start({
      fillOpacity: 1,
      strokeOpacity: 1,
      transition: { duration: 0.5 },
    });
  } else {
    controls.start({
      fillOpacity: 0,
      strokeOpacity: 1,
      transition: { duration: 0.5 },
    });
  }

  return controls;
}

export default isInViewport;
