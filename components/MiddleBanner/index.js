import Image from 'next/image';

import useWidth from '../../hooks/useWidth';
import {
  bgMiddle,
  middleBannerContainer,
  mockupImage,
} from '../../styles/index.module.css';

const MiddleBanner = () => {
  const windowWith = useWidth();
  if (windowWith === 0) null;

  let src;
  if (windowWith <= 767) {
    src = '/images/bg_middle_s.jpg';
  } else {
    src = '/images/bg_middle.jpg';
  }
  return (
    <div className={middleBannerContainer}>
      <div className={bgMiddle}>
        <Image alt="Background" src={src} layout="fill" quality={100} />
      </div>
      <div className="container relative h-full lg:flex lg:items-center">
        <div className="relative text-center mt-10 pt-8 md:text-left lg:flex lg:flex-col lg:mt-0 lg:pt-0 lg:pl-8">
          <h1
            className="inline-block font-montserrat font-semibold text-26 text-center 
          p-4 max-w-sm text-white w-full mx-auto sm:max-w-29 sm:text-24 md:text-left 
          md:max-w-32 md:text-26 lg:font-sans lg:mx-0 lg:text-40 lg:font-bold lg:max-w-lg 
          lg:leading-tight xl:text-55 xl:max-w-40"
          >
            Encuentra a alguien de confianza, que entienda tus necesidades y con
            quien te lleves bien
          </h1>
          <p
            className="inline-block font-sans font-normal text-15 text-center max-w-xs text-white w-full mx-auto 
          md:text-left md:max-w-21 md:px-4 md:text-20 lg:mx-0 lg:max-w-md xl:text-24 xl:max-w-35"
          >
            Nuestra tecnología te muestra aquellos perfiles que son más afines a
            lo que necesitas.
          </p>
        </div>
      </div>
      <div className={`${mockupImage} absolute`}>
        <Image
          alt="Background"
          src="/images/mockup3.png"
          width={1124}
          height={1244}
          layout="responsive"
          quality={100}
        />
      </div>
    </div>
  );
};

export default MiddleBanner;
