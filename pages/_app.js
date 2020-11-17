import Head from 'next/head';
import '../styles/tailwind.css';

import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className={`relative`}>
      <Head>
        <meta
          name="description"
          content="Encuentra con Lolo a quien cuide de tus mayores tal y como tú lo harías"
        />
        <html lang="es-ES" />
        <title>TheProject</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
