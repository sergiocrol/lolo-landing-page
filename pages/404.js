import Image from 'next/image';
import Link from 'next/link';

import LogoName from '../components/Icons/LogoName';
import LogoNameSignup from '../components/Icons/LogoNameSignup';
import LogoAlt from '../components/Icons/LogoAlt';
import LogoNew from '../components/Icons/LogoNew';

export default function Custom404() {
  return (
    <div className="w-screen h-screen bg-yellow z-50 flex flex-col justify-center items-center">
      <div className="flex w-full justify-center md:justify-start md:ml-20 mt-6 absolute top-0 ">
        <Link href="/">
          <a>
            <div className="flex w-24 md:w-48">
              {/* <LogoAlt heart='#375672' door='#E5858F' width={49} height={48} /> */}
              <LogoNew color='#375672' width={42} height={41} />
              <LogoNameSignup line='#375672' className={`ml-1`} width={60} height={50}/>
            </div>
          </a>
        </Link>
      </div>
      <div className="w-11/12 max-w-53 h-80 max-h-36 bg-white opacity-75 rounded-lg shadow-md flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <div className="ml-12 mr-12 md:mr-0 flex flex-col items-center md:items-start mt-10 md:mt-0">
            <h1 className="text-redDarkSignup text-20 md:text-32 font-montserrat text-center md:text-left">Página no encontrada</h1>
            <p className="text-gray opacity-75 font-bold text-17 md:text-22 text-center md:text-left">Por favor, vuelva a la página principal</p>
            <Link href="/">
              <a>
                <div className="bg-orange text-white cursor-pointer rounded-md flex justify-center items-center h-12 w-40 md:w-48 font-montserrat text-20 disabled:opacity-50 disabled:cursor-not-allowed mt-3 md:mt-7">Volver</div>
              </a>
            </Link>
          </div>
        </div>
        <div className="wfull md:w-1/2 my-auto">
          <div className="mx-auto my-auto min-w-21 max-w-60 md:max-w-full">
            <Image 
              width={2048}
              height={2048}
              src="/static/images/404.png"
              layout="responsive"
              quality={50}
              className="max-w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};