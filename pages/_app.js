import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/tailwind.css';

import Header from '../components/Header';

import { html } from '../styles/index.module.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className={`${html} relative overflow-hidden`}>
      <Head>
        <meta
          name="description"
          content="Encuentra con Lolo a quien cuide de tus mayores tal y como tú lo harías"
        />
        <html lang="es-ES" />
        <title>Lolo</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
