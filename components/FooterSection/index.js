import Image from 'next/image';

import StepBlock from '../FirstSection/StepBlock';
import useWidth from '../../hooks/useWidth';
import FooterNav from '../FooterNav';

import { footerContainer, bgFooter } from '../../styles/index.module.css';

const FooterSection = () => {
  const windowWith = useWidth();
  if (windowWith === 0) null;

  let src;
  if (windowWith <= 767) {
    src = '/images/ft_s.jpg';
  } else {
    src = '/images/ft_l.jpg';
  }

  return (
    <div className={`${footerContainer} mt-32 relative`}>
      <div className={`${bgFooter}`}>
        <Image alt="Footer Background" src={src} layout="fill" quality={100} />
      </div>
      <div className="md:px-12 md:pt-16 xl:pt-32 xl:px-32">
        <StepBlock
          image="/images/footer1.png"
          left={false}
          title="Pruébanos sin compromiso"
          body="Estamos tan seguros de que te enamorarás de nuestro servicio que la primera vez que reserves te regalamos una hora gratis."
          button="Encuentra a tu profesional"
          isFooter
          marginBottom="mb-16"
        />
        <StepBlock
          image="/images/footer2.png"
          left={true}
          title="¿Quieres trabajar como cuidador?"
          body="Somos la plataforma que te pone en contacto con familias que buscan a alguien como tú. Regístrate, recibe ofertas y selecciona las que te interesen."
          button="Regístrate como cuidador"
          isFooter
        />
      </div>
      <FooterNav />
    </div>
  );
};

export default FooterSection;
