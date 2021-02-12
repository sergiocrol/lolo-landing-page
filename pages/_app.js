import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import '../styles/tailwind.css';
import '../styles/animations.css';

import Header from '../components/Header';
import CookieConsent from '../components/CookieConsent';

import { html } from '../styles/index.module.css';

import messagesES from '../public/static/locales/es/common.json';
import messagesCA from '../public/static/locales/ca/common.json';

const messages = {
  es: messagesES,
  ca: messagesCA,
};

function MyApp({ Component, pageProps }) {
  const { locale, pathname } = useRouter();
  const [isCookieMessageShown, setIsCookieMessageShown] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    console.log(cookieConsent)
    cookieConsent ? setIsCookieMessageShown(true) : setIsCookieMessageShown(false);
  }, []);

  return (
  <IntlProvider
      locale={locale}
      defaultLocale="es"
      messages={messages[locale]}
    >
      <div className={`${html} relative overflow-hidden`}>
        <Head>
          <meta
            name="description"
            content="Encuentra con Lolo a quien cuide de tus mayores tal y como tú lo harías"
          />
          <title>Lolo</title>
        </Head>
        { pathname !== '/' ? null : <Header /> }
        <Component {...pageProps} key={pathname} />
        {!isCookieMessageShown ? <CookieConsent /> : null}
      </div>
    </IntlProvider>
  );
}

export default MyApp;
