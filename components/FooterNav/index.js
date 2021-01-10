import Link from 'next/link';
import { useIntl } from 'react-intl';

import LogoFooter from '../Icons/LogoFooter';

import { footerNav } from '../../styles/index.module.css';

const FooterNav = () => {
  const { formatMessage: f, locale } = useIntl();
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
              <Link href="/" passHref>
                <a className="opacity-50 hover:opacity-100">
                  {f({ id: 'navLinkHome' })}
                </a>
              </Link>
              <p className="text-transparentWhite md:mx-1 inline-block"> • </p>
              <Link href="#como-funciona" passHref>
                <a className="opacity-50 hover:opacity-100">
                  {f({ id: 'navLinkOne' })}
                </a>
              </Link>
            </div>
            <p className="text-transparentWhite hidden md:inline-block md:mx-1">
              {' '}
              •{' '}
            </p>
            <div className="md:flex">
              <Link href="#como-funciona" passHref>
                <a className="opacity-50 hover:opacity-100">
                  {f({ id: 'navLinkTwo' })}
                </a>
              </Link>
              <p className="text-transparentWhite md:mx-1 inline-block"> • </p>
              <Link href="#como-funciona" passHref>
                <a className="opacity-50 hover:opacity-100">
                  {f({ id: 'navLinkThree' })}
                </a>
              </Link>
            </div>
          </div>
          <div className="w-px bg-transparentWhite h-10 md:hidden" />
          <div className="md:hidden">
            <Link href="/" locale="es">
              <a
                className={`${
                  locale === 'es' ? 'text-white' : 'text-transparentWhite'
                } cursor-pointer hover:underline`}
              >
                Español
              </a>
            </Link>
            <p className="text-transparentWhite inline-block"> • </p>
            <Link href="/" locale="ca">
              <a
                className={`${
                  locale === 'ca' ? 'text-white' : 'text-transparentWhite'
                } cursor-pointer hover:underline`}
              >
                Català
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
