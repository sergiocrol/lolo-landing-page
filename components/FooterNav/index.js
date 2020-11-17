import LogoFooter from '../Icons/LogoFooter';

import { footerNav } from '../../styles/index.module.css';

const FooterNav = () => {
  return (
    <div className={`${footerNav} absolute bottom-0 container`}>
      <div
        className={`flex justify-center flex-col-reverse container px-6 mb-10 max-w-md md:flex-row md:max-w-full md:justify-between`}
      >
        <div className={`flex items-center justify-center md:justify-start`}>
          <div className={`w-12 mr-3`}>
            <LogoFooter style={{ width: '100%' }} />
          </div>
          <p className={`text-white text-opacity-70 text-13`}>
            Copyrights © 2020 All Rights Reserved by Lolo.
          </p>
        </div>
        <div className="flex items-center justify-evenly text-white text-opacity-70 mb-4 md:min-w-24 md:mb-0">
          <div className="md:flex">
            <div className="md:flex">
              <a>Home</a>
              <el className="text-transparentWhite md:mx-1"> • </el>
              <a>Cómo funciona</a>
            </div>
            <p className="text-transparentWhite hidden md:inline-block md:mx-1">
              {' '}
              •{' '}
            </p>
            <div className="md:flex">
              <a>Por qué Lolo</a>
              <el className="text-transparentWhite md:mx-1"> • </el>
              <a>Servicios</a>
            </div>
          </div>
          <div className="w-px bg-transparentWhite h-10 md:hidden" />
          <div className="md:hidden">
            <a>Español</a>
            <el className="text-transparentWhite"> • </el>
            <a>Català</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
