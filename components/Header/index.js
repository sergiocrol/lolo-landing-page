import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useIntl } from 'react-intl';

import Logo from '../Icons/Logo';
import BurgerMenu from '../Icons/BurgerMenu';
import LogoName from '../Icons/LogoName';
import Arrow from '../Icons/Arrow';

import useWidth from '../../hooks/useWidth';
import useHeight from '../../hooks/useHeight';

import {
  logo,
  logoName,
  logoNameClosed,
  burger,
  burgerScrolled,
  navContainer,
  navContainerScrolled,
  btnLogin,
  btnLoginMobile,
  loginArrow,
} from '../../styles/index.module.css';
import { btn, btnSm } from '../../styles/components.module.css';

const Header = () => {
  const { formatMessage: f, locale } = useIntl();
  const controls = useAnimation();
  const controlList = useAnimation();
  const containerRef = useRef(null);
  const height = useHeight();
  // const [isOpen, toggleOpen] = useCycle(null, true);
  const [isOpen, setIsOpen] = useState(null);
  const viewportWidth = useWidth();
  const [scrolled, setScrolled] = useState(false);
  let listener = null;

  if (isOpen) {
    controls.start({
      clipPath: `circle(${height * 2 + 200}px at 100% 0px)`,
      backgroundColor: '#FFFFFF',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    });
    controlList.start((i) => ({
      opacity: 1,
      y: 10,
      transition: { delay: i * 0.3 },
    }));
  } else {
    controls
      .start({
        clipPath: 'circle(15px at 100% -15px)',
        transition: {
          delay: 0.5,
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      })
      .then(() => {
        controls.start({
          backgroundColor: '#FFFFFF00',
        });
      })
      .then(() => setIsOpen(null));

    controlList.start((i) => ({
      opacity: 0,
      y: 0,
      transition: { duration: 0.2 },
    }));
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

  const toggleOpen = () => {
    setIsOpen(isOpen === null || !isOpen ? true : scrolled ? null : false);
  };

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
          className={`
          ${
            isOpen === null
              ? scrolled
                ? logoName
                : null
              : isOpen
              ? logoName
              : logoNameClosed
          }
           flex align-middle w-12 ml-1 lg:w-16`}
        >
          <LogoName style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
      {/* Nav desktop version */}
      <div className="hidden lg:flex text-white opacity-70 text-24 min-w-29 justify-between">
        <Link href="#como-funciona" passHref>
          <a className="opacity-50 hover:opacity-100">
            {f({ id: 'navLinkOne' })}
          </a>
        </Link>
        <Link href="#por-que-lolo" passHref>
          <a className="opacity-50 hover:opacity-100">
            {f({ id: 'navLinkTwo' })}
          </a>
        </Link>
        <Link href="#servicios" passHref>
          <a className="opacity-50 hover:opacity-100">
            {f({ id: 'navLinkThree' })}
          </a>
        </Link>
      </div>
      <div className="hidden lg:flex">
        <div className={`flex items-center pr-4`}>
          <Link href="/" locale="es">
            <a
              className={`${
                locale === 'es' ? 'text-white' : 'text-transparentWhite'
              } cursor-pointer hover:underline`}
            >
              Esp
            </a>
          </Link>
          <p className="text-transparentWhite mx-1 inline-block"> • </p>
          <Link href="/" locale="ca">
            <a
              className={`${
                locale === 'ca' ? 'text-white' : 'text-transparentWhite'
              } cursor-pointer hover:underline`}
            >
              Cat
            </a>
          </Link>
        </div>
        <Link href="/signup">
          <div
            className={`${btn} ${btnSm} ${btnLogin} text-17 inline-block z-10 cursor-pointer justify-center`}
          >
            <span className="mr-2">{f({ id: 'headerLogin' })}</span>
            <Arrow className={`${loginArrow} mt-1`} />
          </div>
        </Link>
      </div>
      {/* Nav mobile version */}
      <motion.nav
        initial={false}
        custom={height}
        ref={containerRef}
        className={`lg:hidden`}
      >
        <div
          className={`${burger} 
          ${
            isOpen === null
              ? scrolled
                ? burgerScrolled
                : null
              : burgerScrolled
          }
           z-50 lg:hidden`}
          onClick={() => toggleOpen()}
        >
          <BurgerMenu isOpen={isOpen} />
        </div>
        <motion.div
          className="absolute top-0 right-0 bottom-0 w-full h-screen"
          style={{ zIndex: -999 }}
          animate={controls}
        >
          <div className="flex flex-col w-full h-80 items-center justify-center">
            <motion.div
              custom={0}
              animate={controlList}
              className="mt-10 opacity-0"
            >
              <Link href="#como-funciona" passHref>
                <a
                  className="text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100"
                  onClick={() => toggleOpen()}
                >
                  {f({ id: 'navLinkOne' })}
                </a>
              </Link>
            </motion.div>
            <motion.div
              custom={1}
              animate={controlList}
              className="mt-10 opacity-0"
            >
              <Link href="#por-que-lolo" passHref>
                <a
                  className="text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100"
                  onClick={() => toggleOpen()}
                >
                  {f({ id: 'navLinkTwo' })}
                </a>
              </Link>
            </motion.div>
            <motion.div
              custom={2}
              animate={controlList}
              className="mt-10 opacity-0 mb-10"
            >
              <Link href="#servicios" passHref>
                <a
                  className="text-orange text-32 md:text-40 font-montserrat font-bold hover:opacity-100"
                  onClick={() => toggleOpen()}
                >
                  {f({ id: 'navLinkThree' })}
                </a>
              </Link>
            </motion.div>
          </div>
          <motion.div
            custom={3}
            animate={controlList}
            className="lg:hidden text-center relative"
            style={{ bottom: '8%' }}
          >
            <div className="justify-center">
              <div
                className={`${btnLoginMobile} flex z-10 cursor-pointer justify-center max-w-8 my-0 mx-auto`}
              >
                <span className="mr-2 font-montserrat text-orange text-24">
                  {f({ id: 'headerLogin' })}
                </span>
                <Arrow className={loginArrow} />
              </div>
              <span className="w-8 text-gray opacity-70">______________</span>
              <div className="mt-4 w-auto">
                <Link href="/" locale="es">
                  <a
                    className={`text-orange ${
                      locale === 'es' ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    Español
                  </a>
                </Link>
                <p className="text-orange opacity-50 inline-block mx-1"> • </p>
                <Link href="/" locale="ca">
                  <a
                    className={`text-orange ${
                      locale === 'ca' ? 'opacity-100' : 'opacity-50'
                    }`}
                  >
                    Català
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Header;
