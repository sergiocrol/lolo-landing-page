import { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntl } from 'react-intl';

import ServiceBox from './ServiceBox';
import RectangleRed from '../Icons/shapes/RectangleRed';
import CircleBlue from '../Icons/shapes/CircleBlue';
import StickYellow from '../Icons/shapes/StickYellow';
import ParallaxItem from '../ParallaxItem/index';

import useInViewport from '../../hooks/useInViewport';

import {
  rectangleShapeThird,
  circleShapeThird,
  stickShapeThird,
} from '../../styles/index.module.css';

const ThirdSection = () => {
  const { formatMessage: f } = useIntl();
  const [selectedCard, setSelectedCard] = useState('diurno');
  const controls = useAnimation();
  const smile = useAnimation();
  const ref = useRef(null);
  const inViewport = useInViewport(ref);

  if (inViewport) {
    controls.start({
      x: 10,
      transition: { ease: 'linear', duration: 0.3 },
    });
    smile.start({
      display: 'inline-block',
      color: '#FF8B81',
      transition: { ease: 'linear', delay: 0.3, duration: 0.3 },
    });
  } else {
    controls.start({
      x: 0,
      transition: { ease: 'linear', duration: 0.3 },
    });
    smile.start({
      display: 'none',
      color: '#FF8B8100',
      transition: { ease: 'linear', delay: 0.3, duration: 0.3 },
    });
  }

  return (
    <div
      id="servicios"
      ref={ref}
      className="container mt-32 px-8 xl:mt-48 relative"
    >
      <ParallaxItem className={`${rectangleShapeThird} absolute`}>
        <RectangleRed style={{ width: '100%', height: 'auto' }} />
      </ParallaxItem>
      <ParallaxItem className={`${circleShapeThird} absolute`}>
        <CircleBlue style={{ width: '100%', height: 'auto' }} />
      </ParallaxItem>
      <ParallaxItem className={`${stickShapeThird} absolute`}>
        <StickYellow style={{ width: '100%', height: 'auto' }} />
      </ParallaxItem>
      <h1
        className={`w-full font-montserrat font-extrabold text-30 text-left max-w-sm text-blue leading-tight sm:max-w-md sm:text-40 lg:text-70 lg:max-w-3xl`}
      >
        <div className="inline opacity-70">
          {f({ id: 'thirdSectionTitle' })}
        </div>
        <motion.div animate={controls} className="inline-block opacity-70">
          :
          <motion.div
            animate={smile}
            className="hidden text-transparent font-sans opacity-100 text-26 sm:text-40 lg:text-60"
          >
            )
          </motion.div>
        </motion.div>
      </h1>
      <div className={`container flex flex-col`}>
        <div className={`flex flex-col items-center px-4`}>
          <h2
            className={`w-full font-sans font-black text-24 text-center mt-10 max-w-15 text-orange leading-snug sm:text-26 sm:max-w-lg md:text-32 md:max-w-2xl md:mt-20 lg:text-50 lg:max-w-full lg:mt-32 xl:text-60`}
          >
            {f({ id: 'thirdSectionSubtitle' })}
          </h2>
          <p
            className={`w-full font-sans font-normal text-17 max-w-12 text-center mt-2 text-gray leading-snug sm:text-20 sm:max-w-26 md:max-w-2xl lg:font-bold xl:text-24 xl:max-w-3xl`}
          >
            {f({ id: 'thirdSectionSecondSubtitle' })}
          </p>
        </div>
        <div
          className={`flex flex-col mt-10 md:items-center lg:justify-center lg:flex-row lg:mt-20`}
        >
          <ServiceBox
            title={f({ id: 'thirdSectionFirstCardTitle' })}
            body={f({ id: 'thirdSectionFirstCardText' })}
            image="diurno"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <ServiceBox
            title={f({ id: 'thirdSectionSecondCardTitle' })}
            body={f({ id: 'thirdSectionSecondCardText' })}
            image="nocturno"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <ServiceBox
            title={f({ id: 'thirdSectionThirdCardTitle' })}
            body={f({ id: 'thirdSectionThirdCardText' })}
            image="allDay"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <ServiceBox
            title={f({ id: 'thirdSectionFourthCardTitle' })}
            body={f({ id: 'thirdSectionFourthCardText' })}
            image="limpieza"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
