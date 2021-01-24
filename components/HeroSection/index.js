import Image from 'next/image';
import { useIntl } from 'react-intl';

import Circle from '../Icons/shapes/Circle';
import Rectangle from '../Icons/shapes/Rectangle';
import Stick from '../Icons/shapes/Stick';
import StickYellow from '../Icons/shapes/StickYellow';

import useWidth from '../../hooks/useWidth';
import {
  bgWrap,
  wave,
  heroContainer,
  heroImageContainer,
  heroImage,
  heroText,
  circleShapeHero,
  rectangleShapeHero,
  rectangleRedShapeHero,
  stickShapeHero,
} from '../../styles/index.module.css';
import { btn, btnSm } from '../../styles/components.module.css';

const HeroSection = () => {
  const { formatMessage: f } = useIntl();
  const windowWith = useWidth();
  if (windowWith === 0) null;

  let src;
  let heroImageSize;
  if (windowWith <= 640) {
    src = '/static/images/bg_s.jpg';
    heroImageSize = 360;
  } else if (windowWith <= 767) {
    src = '/static/images/bg_m.jpg';
    heroImageSize = 450;
  } else if (windowWith <= 1024) {
    src = '/static/images/bg_l.jpg';
    heroImageSize = 550;
  } else {
    src = '/static/images/bg_l.jpg';
    heroImageSize = 600;
  }

  return (
    <div className={heroContainer}>
      <div className={bgWrap}>
        <Image alt="Background" src={src} layout="fill" quality={100} />
        {/* <div className={`${circleShapeHero} absolute hidden lg:inline-block`}>
          <Circle
            style={{ filter: 'blur(4px)', width: '100%', height: 'auto' }}
          />
        </div>
        <div
          className={`${rectangleShapeHero} absolute hidden lg:inline-block`}
        >
          <Rectangle
            style={{ filter: 'blur(3px)', width: '100%', height: 'auto' }}
          />
        </div>
        <div className={`${stickShapeHero} absolute hidden lg:inline-block`}>
          <Stick
            style={{ filter: 'blur(4px)', width: '100%', height: 'auto' }}
          />
        </div>
        <div
          className={`${rectangleRedShapeHero} absolute hidden lg:inline-block`}
        >
          <StickYellow
            style={{ filter: 'blur(4px)', width: '100%', height: 'auto' }}
          />
        </div> */}
        <div className={wave}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            {/* <defs>
              <pattern
                id="pattern-image"
                x="0"
                y="0"
                width="150"
                height="150"
                patternUnits="userSpaceOnUse"
              >
                <image
                  href="/static/images/paper_pattern.png"
                  x="0"
                  y="0"
                  width="150"
                  height="150"
                  opacity="0.3"
                />
                <animateTransform
                  attributeType="xml"
                  attributeName="patternTransform"
                  type="translate"
                  begin="0"
                  dur="8s"
                  repeatCount="indefinite"
                  // values="0 0;-500 -1000;1500 500;700 -2500;-500 2500;-1500 1000;1500 0;0 1500;300 3500;-1000 1000;0 0"
                  values="0 0;-250 -500;750 250;350 -1250;-250 1250;-750 500;750 0;0 750;150 1750;-500 500;0 0"
                  // values="0 0;-125 -250;375 125;175 -625;-125 625;-375 250;375 0;0 375;75 875;-250 250;0 0"
                  keyTimes="0;0.1;0.2;0.3;0.4;0.5;0.6;0.7;0.8;0.9;1"
                />
              </pattern>
            </defs> */}
            <path
              fill="#FCF6E8"
              d="M-0.56,124.83 C205.41,-179.11 260.15,188.97 499.43,136.67 L500.00,150.00 L-0.56,151.47 Z"
            ></path>
            {/* <path
              fill="url(#pattern-image)"
              d="M-0.56,124.83 C205.41,-179.11 260.15,188.97 499.43,136.67 L500.00,150.00 L-0.56,151.47 Z"
              id="ggg"
            ></path> */}
          </svg>
        </div>
      </div>
      <div className="container h-full">
        <div
          className={`${heroText} text-center text-white opacity-90 flex-col pt-24 lg:mr-12 lg:pt-40 xl:mr-0`}
        >
          <h1 className="inline-block text-26 font-bold font-montserrat w-4/5 leading-tight">
            {f({ id: 'heroTitle' })}
            {/* Encuentra a quién cuide de tus mayores tal y como tú lo harías */}
          </h1>
          <h2 className="inline-block text-20 font-medium w-3/5 pt-6">
            {f({ id: 'heroSubtitle' })}
            {/* Lolo es la plataforma que te ayuda a conectar con profesionales del
            cuidado de personas mayores. */}
          </h2>
          <div className={`${btn} ${btnSm} text-17 inline-block z-10 mt-8`}>
            {f({ id: 'heroCTA' })}
            {/* Encuentra a tu profesional */}
          </div>
        </div>
        <div className={heroImageContainer}>
          <Image
            className={heroImage}
            alt="Hero image"
            src="/static/images/hero_image.png"
            width={heroImageSize}
            height={heroImageSize}
            layout="fixed"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
