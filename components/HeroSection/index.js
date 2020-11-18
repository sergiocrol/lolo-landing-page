import Image from 'next/image';

import useWidth from '../../hooks/useWidth';
import {
  bgWrap,
  wave,
  heroContainer,
  heroImageContainer,
  heroImage,
  heroText,
} from '../../styles/index.module.css';
import { btn } from '../../styles/components.module.css';

const HeroSection = () => {
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
        <div className={wave}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path
              fill="#FCF6E8"
              d="M-0.56,124.83 C205.41,-179.11 260.15,188.97 499.43,136.67 L500.00,150.00 L-0.56,151.47 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="container h-full">
        <div
          className={`${heroText} text-center text-white opacity-90 flex-col pt-24 lg:mr-12 lg:pt-32 xl:mr-0`}
        >
          <h1 className="inline-block text-26 font-bold font-montserrat w-4/5 leading-tight">
            Encuentra a quién cuide de tus mayores tal y como tú lo harías
          </h1>
          <h2 className="inline-block text-20 font-medium w-3/5 pt-6">
            Lolo es la plataforma que te ayuda a conectar con profesionales del
            cuidado de personas mayores.
          </h2>
          <div className={`${btn} text-17 bg-blue mt-8 inline-block`}>
            Encuentra a tu profesional
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
