import { useState, useRef, useEffect } from 'react';

import { box } from '../../styles/components.module.css';
import {
  serviceImage,
  serviceBox,
  active,
} from '../../styles/index.module.css';
import {
  Diurno,
  Nocturno,
  Limpieza,
  AllDay,
  DiurnoRight,
  NocturnoRight,
  LimpiezaRight,
  AllDayRight,
} from './images';

import useHeight from '../../hooks/useHeight';
import useWidth from '../../hooks/useWidth';

const ServiceBox = ({ title, body, image, selectedCard, setSelectedCard }) => {
  const [inViewport, setInViewport] = useState(true);
  const outerRef = useRef(null);
  const viewportHeight = useHeight();
  const viewportWidth = useWidth();

  const isSmall = () => viewportWidth < 1024;

  const components = {
    diurno: isSmall() ? DiurnoRight : Diurno,
    nocturno: isSmall() ? NocturnoRight : Nocturno,
    limpieza: isSmall() ? LimpiezaRight : Limpieza,
    allDay: isSmall() ? AllDayRight : AllDay,
  };
  const Component = components[image] || DiurnoRight;

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

  return (
    <div
      ref={outerRef}
      id="outer-box"
      className={`${box} ${serviceBox} ${
        selectedCard === image ? active : null
      } flex w-full rounded-10 min-h-15 relative my-2 overflow-hidden lg:mx-2 lg:min-h-34 lg:min-w-14 lg:max-w-17 ${
        inViewport ? 'opacity-100' : 'opacity-70 lg:opacity-100'
      }`}
      onMouseEnter={() => setSelectedCard(image)}
    >
      <div
        className={`m-4 max-w-13 sm:max-w-md lg:max-w-full lg:text-center lg:mt-10 lg:flex lg:flex-col lg:items-center`}
      >
        <h3
          className={`inline-block text-left font-black text-24 sm:text-30 lg:text-center lg:text-26 xl:text-30 lg:max-w-8 lg:leading-tight lg:h-20 lg:flex lg:items-center ${
            inViewport ? 'text-blue lg:text-violet' : 'text-violet'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-left font-normal text-15 sm:text-20 text-gray mt-2 lg:text-center lg:text-17 xl:text-20`}
        >
          {body}
        </p>
      </div>
      <div className={`${serviceImage} absolute`}>
        <Component inViewport={inViewport} />
      </div>
    </div>
  );
};

export default ServiceBox;
