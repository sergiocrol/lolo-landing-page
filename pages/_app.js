import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import AOS from 'aos';
import '../styles/tailwind.css';
import '../styles/aos.css';

import Header from '../components/Header';

import { html } from '../styles/index.module.css';

import messagesES from '../public/static/locales/es/common.json';
import messagesCA from '../public/static/locales/ca/common.json';

const messages = {
  es: messagesES,
  ca: messagesCA,
};

function MyApp({ Component, pageProps }) {
  const { locale, pathname } = useRouter();

  useEffect(() => {
    AOS.init({
      offset: 100,
      easing: 'ease-in-out',
      once: true
    });
    AOS.refreshHard();
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
          {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link> */}
        </Head>
        { pathname.includes('signup') ? null : <Header /> }
        <Component {...pageProps} key={pathname} />
      </div>
    </IntlProvider>
  );
}

export default MyApp;
