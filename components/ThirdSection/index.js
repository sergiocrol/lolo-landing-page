import { useState } from 'react';
import ServiceBox from './ServiceBox';

import RectangleRed from '../Icons/shapes/RectangleRed';
import CircleBlue from '../Icons/shapes/CircleBlue';
import StickYellow from '../Icons/shapes/StickYellow';
import {
  rectangleShapeThird,
  circleShapeThird,
  stickShapeThird,
} from '../../styles/index.module.css';

const ThirdSection = () => {
  const [selectedCard, setSelectedCard] = useState('diurno');

  return (
    <div className="container mt-32 px-8 xl:mt-48 relative">
      <div className={`${rectangleShapeThird} absolute`}>
        <RectangleRed style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={`${circleShapeThird} absolute`}>
        <CircleBlue style={{ width: '100%', height: 'auto' }} />
      </div>
      <div className={`${stickShapeThird} absolute`}>
        <StickYellow style={{ width: '100%', height: 'auto' }} />
      </div>
      <h1
        className={`w-full font-montserrat font-extrabold text-30 text-left max-w-sm text-blue opacity-70 leading-tight sm:max-w-md sm:text-40 lg:text-70 lg:max-w-3xl`}
      >
        Conoce nuestros servicios:
      </h1>
      <div className={`container flex flex-col`}>
        <div className={`flex flex-col items-center px-4`}>
          <h2
            className={`w-full font-sans font-black text-24 text-center mt-10 max-w-15 text-orange leading-snug sm:text-26 sm:max-w-lg md:text-32 md:max-w-2xl md:mt-20 lg:text-50 lg:max-w-full lg:mt-32 xl:text-60`}
          >
            Tus seres queridos en las mejores manos
          </h2>
          <p
            className={`w-full font-sans font-normal text-17 max-w-12 text-center mt-2 text-gray leading-snug sm:text-20 sm:max-w-26 md:max-w-2xl lg:font-bold xl:text-24 xl:max-w-3xl`}
          >
            Ayudamos a las personas mayores con sus tareas en el día a día
          </p>
        </div>
        <div
          className={`flex flex-col mt-10 md:items-center lg:justify-center lg:flex-row lg:mt-20`}
        >
          <ServiceBox
            title="Cuidado diurno"
            body="Incluye, siempre que se desee o se necesite, ayuda en actividades
                  rutinarias, cuidado personal, cocinar, impieza, acompañamiento,
                  recados, actividades de desarrollo motriz y cognitivo."
            image="diurno"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <ServiceBox
            title="Cuidado nocturno"
            body="Incluye, siempre que se desee o se necesite, ayuda en actividades
                  rutinarias, cuidado personal, cocinar, impieza, acompañamiento,
                  recados, actividades de desarrollo motriz y cognitivo."
            image="nocturno"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <ServiceBox
            title="Cuidado 24 horas"
            body="Incluye, siempre que se desee o se necesite, ayuda en actividades
                  rutinarias, cuidado personal, cocinar, impieza, acompañamiento,
                  recados, actividades de desarrollo motriz y cognitivo."
            image="allDay"
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <ServiceBox
            title="Limpieza"
            body="Elige el pack de limpieza completa o configura con los servicios que quieras, adaptándolo a tus necesidades."
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
