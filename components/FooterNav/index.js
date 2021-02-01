import Link from 'next/link';
import { useIntl } from 'react-intl';

import LogoFooter from '../Icons/LogoFooter';
import LogoFooterAlt from '../Icons/LogoFooterAlt';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import Twitter from '../Icons/Twitter';
import Linkedin from '../Icons/Linkedin';
import PhoneContact from '../Icons/PhoneContact';
import EmailContact from '../Icons/EmailContact';

import { footerNav } from '../../styles/index.module.css';

const FooterNav = () => {
  const { formatMessage: f, locale } = useIntl();
  return (
    <div className={`${footerNav} absolute bottom-0 container`}>
      <div className="flex justify-center max-w-md container px-6 md:max-w-full md:justify-between">
        <div className="flex justify-around mb-4 w-full md:max-w-21">
          <a className="flex text-white items-center opacity-75 hover:opacity-100 cursor-pointer">
            <PhoneContact height={18} className="md:h-8" />
            <span className="opacity-50 text-13 md:text-15 ml-2">+34 392 3929 210</span>
          </a>
          <a className="flex text-white items-center opacity-75 hover:opacity-100 cursor-pointer">
            <EmailContact height={17} className="md:h-8 md:ml-6" />
            <span className="opacity-50 text-13 md:text-15 ml-2">support@milolo.es</span>
          </a>
        </div>
        <div className="hidden md:flex md:w-23 md:justify-between md:pr-6 md:mb-4">
          <div>
            <a className="flex items-center cursor-pointer opacity-50 hover:opacity-100">
              <Facebook height={24}/>
              <span className="text-white opacity-50 text-20 ml-4">Facebook</span>
            </a>
            <a className="flex items-center cursor-pointer opacity-50 hover:opacity-100">
              <Instagram height={24}/>
              <span className="text-white opacity-50 text-20 ml-4">Instagram</span>
            </a>
          </div>
          <div>
            <a className="flex items-center cursor-pointer opacity-50 hover:opacity-100">
              <Twitter height={24}/>
              <span className="text-white opacity-50 text-20 ml-4">Twitter</span>
            </a>
            <a className="flex items-center cursor-pointer opacity-50 hover:opacity-100">
              <Linkedin height={24}/>
              <span className="text-white opacity-50 text-20 ml-4">Linkedin</span>
            </a>
          </div>
        </div>
      </div>
      <div className={`flex justify-center flex-col-reverse container px-6 mb-10 max-w-md md:flex-row md:max-w-full md:justify-between`}>
        <div className={`flex items-center justify-center md:justify-start`}>
          <div className={`w-10 opacity-75`}>
            {/* <LogoFooter style={{ width: '100%' }} /> */}
            <LogoFooterAlt style={{ width: '70%', height: 'auto' }} />
          </div>
          <p className={`text-white text-opacity-50 text-13 md:text-15`}>
            Copyrights © 2021 All Rights Reserved by Lolo.
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
            <div>
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
            <div className="flex justify-between mt-1">
              <a>
                <Facebook />
              </a>
              <a>
                <Instagram />
              </a>
              <a>
                <Twitter />
              </a>
              <a>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
