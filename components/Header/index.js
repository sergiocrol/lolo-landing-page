import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useCycle, useAnimation } from "framer-motion";

import Logo from '../Icons/Logo';
import BurgerMenu from '../Icons/BurgerMenu';
import LogoName from '../Icons/LogoName';

import useWidth from '../../hooks/useWidth';
import useHeight from '../../hooks/useHeight';

import {
  logo,
  logoName,
  burger,
  navContainer,
  navContainerScrolled,
  burgerScrolled,
} from '../../styles/index.module.css';

const Header = () => {
  const controls = useAnimation();
  const controlList = useAnimation();
  const containerRef = useRef(null);
  const height = useHeight();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const viewportWidth = useWidth();
  const [scrolled, setScrolled] = useState(false);
  let listener = null;

  if (isOpen) {
    controls.start({
      clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
      backgroundColor: '#FFFFFF',
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    })
    controlList.start(i => ({
      opacity: 1,
      y: 10,
      transition: { delay: i * 0.3 },
    }))
  } else {
    controls.start({
      clipPath: "circle(15px at 100% -15px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }).then(() => {
      controls.start({
        backgroundColor: '#FFFFFF00'
      })
    })

    controlList.start(i => ({
      opacity: 0,
      y: 0,
      transition: { duration: 0.2 },
    }))
  }

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
            scrolled || isOpen ? logoName : null
          } flex align-middle w-12 ml-1 lg:w-16`}
        >
          <LogoName style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
      <div className="hidden lg:flex text-white opacity-70 text-24 min-w-29 justify-between">
        <Link href="#como-funciona" passHref>
          <a className="opacity-50 hover:opacity-100">Cómo funciona</a>
        </Link>
        <Link href="#por-que-lolo" passHref>
          <a className="opacity-50 hover:opacity-100">
            Por qué Lolo
          </a>
        </Link>
        <Link href="#servicios" passHref>
          <a className="opacity-50 hover:opacity-100">Servicios</a>
        </Link>
      </div>
      <motion.nav
        initial={false}
        custom={height}
        ref={containerRef} 
        className={`lg:hidden`}
      >
        <div
          className={`${burger} ${scrolled || isOpen  ? burgerScrolled : null} z-50 lg:hidden`}
          onClick={() => toggleOpen()}
        >
          <BurgerMenu isOpen={isOpen} />
        </div>
        <motion.div className="absolute top-0 right-0 bottom-0 w-full h-screen" style={{ zIndex: -999 }} animate={controls}>
          <div className="flex flex-col w-full h-90 items-center justify-center">
            <motion.div custom={0} animate={controlList} className="mt-10 opacity-0">
              <Link href="#como-funciona" passHref>
                <a className="text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100" onClick={() => toggleOpen()}>Cómo funciona</a>
              </Link>
            </motion.div>
            <motion.div custom={1} animate={controlList} className="mt-10 opacity-0">
              <Link href="#por-que-lolo" passHref>
                <a className="text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100" onClick={() => toggleOpen()}>
                  Por qué Lolo
                </a>
              </Link>
            </motion.div>
            <motion.div custom={2} animate={controlList} className="mt-10 opacity-0 mb-10">
              <Link href="#servicios" passHref>
                <a className="text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100" onClick={() => toggleOpen()}>Servicios</a>
              </Link>  
            </motion.div>    
          </div>
          <motion.div custom={3} animate={controlList} className="lg:hidden text-center relative" style={{bottom: '8%'}}>
            <a className="text-orange">Español</a>
            <p className="text-orange opacity-50 inline-block mx-1"> • </p>
            <a className="text-orange opacity-50">Català</a>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Header;
