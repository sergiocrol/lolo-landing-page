import Link from 'next/link';
import { useIntl } from 'react-intl';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import LogoFooter from '../Icons/LogoFooter';
import LogoFooterAlt from '../Icons/LogoFooterAlt';
import LogoFooterNew from '../Icons/LogoFooterNew';
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
        <div className="hidden md:flex justify-start mb-4 w-full md:max-w-21">
          {/* <a className="flex text-white items-center opacity-75 hover:opacity-100 cursor-pointer">
            <PhoneContact height={18} className="md:h-8" />
            <span className="opacity-50 text-13 md:text-15 ml-2">+34 392 3929 210</span>
          </a> */}
          <a className="flex text-white items-center opacity-75 hover:opacity-100 cursor-pointer" href="mailto:info@milolo.es">
            <EmailContact height={17} className="md:h-8 md:ml-1" />
            <span className="opacity-50 text-13 md:text-15 ml-2">info@milolo.es</span>
          </a>
        </div>
        <div className="hidden md:flex md:w-23 md:justify-between md:pr-6 md:mb-4">
          {/* <div> */}
            <a className="flex items-center cursor-pointer opacity-50 hover:opacity-100"  href="https://www.facebook.com/Lolo-173616454346033/">
              <Facebook height={24}/>
              <span className="text-white opacity-50 text-20 ml-4">Facebook</span>
            </a>
            <a className="flex items-center cursor-pointer opacity-50 hover:opacity-100" href="https://www.instagram.com/app.lolo/">
              <Instagram height={24}/>
              <span className="text-white opacity-50 text-20 ml-4">Instagram</span>
            </a>
          {/* </div> */}
          {/* <div  className="hidden">
            <a className="flex items-center cursor-pointer opacity-50 hover:opacity-100">
              <Twitter height={24}/>
              <span className="text-white opacity-50 text-20 ml-4">Twitter</span>
            </a>
            <a className="flex items-center cursor-pointer opacity-50 hover:opacity-100">
              <Linkedin height={24}/>
              <span className="text-white opacity-50 text-20 ml-4">Linkedin</span>
            </a>
          </div> */}
        </div>
      </div>
      <div className={`flex justify-center flex-col-reverse container px-6 mb-10 max-w-md md:flex-row md:max-w-full md:justify-between`}>
        <div className={`flex items-center justify-center md:justify-start`}>
          <div className={`w-8 opacity-75`}>
            {/* <LogoFooter style={{ width: '100%' }} /> */}
            {/* <LogoFooterAlt style={{ width: '70%', height: 'auto' }} /> */}
            <LogoFooterNew style={{ width: '70%', height: 'auto' }} />
          </div>
          <p className={`text-white text-opacity-50 text-13 md:text-15`}>
            Copyrights © 2021 All Rights Reserved by Lolo.
          </p>
        </div>
        <div className="flex items-center justify-evenly text-white text-opacity-70 mb-4 md:min-w-24 md:mb-0">
          <div className="md:flex">
            <div className="md:flex">
              {/* <Link href="/" passHref> */}
                <AnchorLink className="opacity-50 hover:opacity-100" href="#inicio">
                  {f({ id: 'navLinkHome' })}
                </AnchorLink>
              {/* </Link> */}
              <p className="text-transparentWhite md:mx-1 inline-block"> • </p>
              {/* <Link href="#como-funciona" passHref> */}
                <AnchorLink className="opacity-50 hover:opacity-100" href="#como-funciona">
                  {f({ id: 'navLinkOne' })}
                </AnchorLink>
              {/* </Link> */}
            </div>
            <p className="text-transparentWhite hidden md:inline-block md:mx-1">
              {' '}
              •{' '}
            </p>
            <div className="md:flex">
              {/* <Link href="#como-funciona" passHref> */}
                <AnchorLink className="opacity-50 hover:opacity-100" href="#por-que-lolo">
                  {f({ id: 'navLinkTwo' })}
                </AnchorLink>
              {/* </Link> */}
              <p className="text-transparentWhite md:mx-1 inline-block"> • </p>
              {/* <Link href="#como-funciona" passHref> */}
                <AnchorLink className="opacity-50 hover:opacity-100" href="#servicios">
                  {f({ id: 'navLinkThree' })}
                </AnchorLink>
              {/* </Link> */}
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
            <div className="flex justify-around mt-1">
              <a href="https://www.facebook.com/Lolo-173616454346033/">
              <Facebook /> 
                {/*<Facebook /> <span className="text-xs">facebook</span> */}
              </a>
              <a href="https://www.instagram.com/app.lolo/">
              <Instagram /> 
                {/* <Instagram /> <span className="text-xs">instagram</span> */}
              </a>
              <a href="mailto:info@milolo.es">
                <EmailContact height={17} className="md:h-8 md:ml-6" />
              </a>
              {/* <a>
                <Twitter />
              </a>
              <a>
                <Linkedin />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
