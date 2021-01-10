import { useRef } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useIntl } from 'react-intl';

import StepBlock from './StepBlock';
import Rectangle from '../Icons/shapes/Rectangle';
import Circle from '../Icons/shapes/Circle';
import Stick from '../Icons/shapes/Stick';
import ParallaxItem from '../ParallaxItem/index';

import useInViewport from '../../hooks/useInViewport';

import {
  rectangleShapeFirst,
  circleShapeFirst,
  stickShapeFirst,
} from '../../styles/index.module.css';

const FirstSection = () => {
  const { formatMessage: f } = useIntl();
  const ref = useRef(null);
  const inViewport = useInViewport(ref);
  const controls = useAnimation();

  if (inViewport) {
    controls.start({
      color: '#f38b81',
      opacity: 1,
      transition: { ease: 'easeOut', duration: 0.5 },
    });
  } else {
    controls.start({
      color: '#2D2D5B',
      opacity: 0.7,
      transition: { ease: 'easeOut', duration: 0.5 },
    });
  }

  return (
    <div id="como-funciona" ref={ref} className="container relative">
      <ParallaxItem className={`${rectangleShapeFirst} absolute`}>
        <Rectangle style={{ width: '100%', height: 'auto' }} />
      </ParallaxItem>
      <ParallaxItem className={`${circleShapeFirst} absolute`}>
        <Circle style={{ width: '100%', height: 'auto' }} />
      </ParallaxItem>
      <ParallaxItem className={`${stickShapeFirst} absolute`}>
        <Stick style={{ width: '100%', height: 'auto' }} />
      </ParallaxItem>
      <h1 className="text-blue font-montserrat font-extrabold leading-tight text-30 text-left w-11/12 mx-auto mb-10 mt-16 max-w-xs md:max-w-2xl md:text-40 md:mb-20 md:ml-0 md:text-left lg:text-left lg:text-70 lg:mx-0 lg:max-w-52 md:px-12 lg:mt-0">
        <div className="inline opacity-70 mr-2 md:mr-2 lg:mr-4">
          {f({ id: 'firstSectionTitleFirst' })}
        </div>
        <motion.div animate={controls} className="inline-block opacity-70">
          {f({ id: 'firstSectionTitleKeyWord' })}
        </motion.div>
        <div className="inline opacity-70 ml-2 lg:ml-4">
          {f({ id: 'firstSectionTitleSecond' })}
        </div>
      </h1>
      <StepBlock
        image="/static/images/step1.png"
        left={true}
        title={f({ id: 'firstSectionFirstStepTitle' })}
        body={f({ id: 'firstSectionFirstStepSubtitle' })}
        button={f({ id: 'firstSectionCTA' })}
      />
      <StepBlock
        image="/static/images/step2.png"
        left={false}
        title={f({ id: 'firstSectionSecondStepTitle' })}
        body={f({ id: 'firstSectionSecondStepSubtitle' })}
        marginBottom="mb-10"
      />
      <StepBlock
        image="/static/images/step3.png"
        left={true}
        title={f({ id: 'firstSectionThirdStepTitle' })}
        body={f({ id: 'firstSectionThirdStepSubtitle' })}
      />
    </div>
  );
};

export default FirstSection;
