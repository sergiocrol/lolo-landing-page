import { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { useIntl } from 'react-intl';

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
  const { formatMessage: f } = useIntl();
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
          title={f({ id: 'secondSectionFirstCardTitle' })}
          body={f({ id: 'secondSectionFirstCardSubtitle' })}
          icon={<Check selectedIndex={selectedIndex} />}
        />
        <Card
          key={1}
          title={f({ id: 'secondSectionSecondCardTitle' })}
          body={f({ id: 'secondSectionSecondCardSubtitle' })}
          icon={<People selectedIndex={selectedIndex} />}
        />
        <Card
          key={2}
          title={f({ id: 'secondSectionThirdCardTitle' })}
          body={f({ id: 'secondSectionThirdCardSubtitle' })}
          icon={<Clock selectedIndex={selectedIndex} />}
        />
        <Card
          key={3}
          title={f({ id: 'secondSectionFourthCardTitle' })}
          body={f({ id: 'secondSectionFourthCardSubtitle' })}
          icon={<Phone selectedIndex={selectedIndex} />}
        />
      </div>
      <div className="flex justify-end mr-6 mt-1">
        <div className={`${dot} ${selectedIndex === 0 ? selectedDot : ''}`} />
        <div className={`${dot} ${selectedIndex === 1 ? selectedDot : ''}`} />
        <div className={`${dot} ${selectedIndex === 2 ? selectedDot : ''}`} />
        <div className={`${dot} ${selectedIndex === 3 ? selectedDot : ''}`} />
      </div>
    </div>
  );
};

export default CardsCarousel;
