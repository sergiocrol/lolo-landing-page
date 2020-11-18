import { useState, useEffect } from 'react';

import Logo from '../Icons/Logo';
import BurgerMenu from '../Icons/BurgerMenu';
import LogoName from '../Icons/LogoName';

import useWidth from '../../hooks/useWidth';

import {
  logo,
  logoName,
  burger,
  navContainer,
  navContainerScrolled,
  burgerScrolled,
} from '../../styles/index.module.css';

const Header = () => {
  const viewportWidth = useWidth();
  const [scrolled, setScrolled] = useState(false);
  let listener = null;

  useEffect(() => {
    if (viewportWidth > 0) {
      listener = document.addEventListener('scroll', (e) => {
        const scrolledSize = document.scrollingElement.scrollTop;
        scrolledSize >= 20 && viewportWidth < 1024
          ? setScrolled(true)
          : setScrolled(false);
      });
      return () => document.removeEventListener('scroll', listener);
    }
  }, [scrolled, viewportWidth]);

  return (
    <div
      className={`${navContainer} ${
        scrolled ? navContainerScrolled : null
      } fixed top-0 w-screen flex justify-between items-center px-8 py-2 lg:bg-transparent lg:shadow-none lg:flex lg:container lg:absolute lg:max-w-full lg:justify-around lg:h-24 lg:mt-4 lg:px-12 xl:px-0`}
    >
      <div className="flex align-middle">
        <div className={`${logo} w-3`}>
          <Logo />
        </div>
        <div
          className={`${
            scrolled ? logoName : null
          } flex align-middle w-12 ml-1 lg:w-16`}
        >
          <LogoName style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
      <div className="hidden lg:flex text-white opacity-70 text-24 min-w-29 justify-between">
        <a className="opacity-100 underline">Cómo funciona</a>
        <a className="opacity-50">Por qué Lolo</a>
        <a className="opacity-50">Servicios</a>
      </div>
      <div
        className={`${burger} ${scrolled ? burgerScrolled : null} lg:hidden`}
      >
        <BurgerMenu />
      </div>
    </div>
  );
};

export default Header;
