import { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

import Card from './Card';
import Check from '../../components/Icons/Check';
import People from '../../components/Icons/People';
import Clock from '../../components/Icons/Clock';
import Phone from '../../components/Icons/Phone';

import {
  carouselContainer,
  dot,
  selectedDot,
} from '../../styles/index.module.css';

const CardsCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    containScroll: 'trimSnaps',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
  }, [embla, onSelect]);

  return (
    <div
      ref={viewportRef}
      className={`${carouselContainer} mt-20 overflow-hidden z-50 md:mt-12`}
    >
      <div className="flex pt-12 xl:pt-16">
        <Card
          key={0}
          title="Calidad"
          body="Los perfiles de nuestros profesionales están verificados y se respaldan con las opiniones de otros usuarios."
          icon={<Check selectedIndex={selectedIndex} />}
        />
        <Card
          key={1}
          title="Elección"
          body="Nuestra plataforma te ofrece opciones. Tú eliges."
          icon={<People selectedIndex={selectedIndex}  />}
        />
        <Card
          key={2}
          title="Flexibilidad y rapidez"
          body="Configura tu servicio a medida, encuentra a tu profesional y reserva en cuestión de minutos."
          icon={<Clock selectedIndex={selectedIndex}  />}
        />
        <Card
          key={3}
          title="Comunicación"
          body="Te proporcionamos la tecnología para poder gestionar la relación con tu cuidador. Y en el futuro, iremos más allá."
          icon={<Phone selectedIndex={selectedIndex}  />}
        />
      </div>
      <div className="flex justify-end mr-6 mt-1">
        <div className={`${dot} ${selectedIndex === 0 ? selectedDot : null}`} />
        <div className={`${dot} ${selectedIndex === 1 ? selectedDot : null}`} />
        <div className={`${dot} ${selectedIndex === 2 ? selectedDot : null}`} />
        <div className={`${dot} ${selectedIndex === 3 ? selectedDot : null}`} />
      </div>
    </div>
  );
};

export default CardsCarousel;
