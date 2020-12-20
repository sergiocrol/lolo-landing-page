import { useAnimation } from 'framer-motion';

function isInViewport(inViewport, type) {
  let allDayImage = 0;
  const controls = useAnimation();
  const sphereAnimation = useAnimation();

  if (type === 'allDay') allDayImage++;
  if (allDayImage === 2) allDayImage = 0;

  const limpieza = {
    opacity: 1,
    right: 70,
    filter: 'blur(1px)',
    transition: { duration: 0.2, ease: 'easeInOut', type: 'spring' },
  };

  const nocturno = {
    opacity: 1,
    right: 45,
    filter: 'blur(1px)',
    transition: { duration: 0.2, ease: 'easeInOut' },
  };

  const diurno = {
    opacity: 1,
    right: 30,
    filter: 'blur(1px)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  };

  const allDay = {
    opacity: 1,
    right: 25,
    filter: 'blur(2px)',
    transition: { duration: 0.2, ease: 'easeInOut' },
  };

  const sphere = {
    diurno,
    nocturno,
    allDay,
    limpieza,
  };

  if (inViewport) {
    controls.start({
      fillOpacity: 1,
      strokeOpacity: 1,
      transition: { duration: 0.5 },
    });
    const anim = async () => {
      await sphereAnimation.start({
        ...sphere[type],
      });
      return await sphereAnimation.start({
        y: [5, 0, 5],
        transition: { repeat: Infinity, duration: 2 },
      });
    };
    anim();
  } else {
    controls.start({
      fillOpacity: 0,
      strokeOpacity: 1,
      transition: { duration: 0.5 },
    });
    sphereAnimation.start({
      opacity: 0,
      right: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    });
  }

  return { controls, sphereAnimation };
}

export default isInViewport;
