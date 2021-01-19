import { useState } from 'react';
import Image from 'next/image';

import LogoName from '../../../components/Icons/LogoName';
import Logo from '../../../components/Icons/Logo';
import CarerIcon from '../../../components/Icons/Carer';
import UserIcon from '../../../components/Icons/User';
import WorkerSignupForm from '../../../components/Forms/WorkerSignupForm';

import { signupContainer, logoMobile, logoNameMobile } from '../../../styles/signup.module.css';
import { userTypeButtonContainer, userTypeButtonText, userTypeIcon, userTypeButtonActive } from '../../../styles/components.module.css';

const USER = 'user';
const CARER = 'carer';

const SignUp = () => {
  const [userType, setUserType] = useState(CARER);

  const changeUserType = (type) => {
    setUserType(type);
  }

  return (
    <div className={`bg-white`}>
      <div className="flex w-screen h-screen">
        <div className={`hidden md:flex md:w-1/3 md:bg-white md:relative`}>
          {/* <div className={`${signupBg} absolute`}>
            <Image
              src="/static/images/step3.png"
              width={400}
              height={400}
              quality={100}
            />
          </div> */}
          <div className={`${signupContainer} w-full h-screen bg-white shadow-xl`}>hola</div>
        </div>
        <div className={`flex-1 bg-yellow`}>
          <div className='w-10/12 max-w-30 my-0 mx-auto'>
            <div className={`flex items-center h-32 justify-between`}>
              <div className="flex items-center w-1/2">
                <Logo className={`${logoNameMobile}`} width={39} height={38}/>
                <LogoName className={`ml-1 ${logoMobile}`} width={50} height={40}/>
              </div>
              <span>accede</span>
            </div>
            <div className="mb-6">
              <h1 className="text-orange font-montserrat font-bold text-22 tracking-wide">Háblanos sobre ti</h1>
              <h2 className="text-gray tracking-tight max-w-21">Cuéntanos más sobre ti para que podamos personalizar tu experiencia.</h2>
            </div>
            <div className="">
              <span className="text-orange font-montserrat font-bold">Estás buscando,</span>
              <div className="flex">
                <div className={`${userTypeButtonContainer} ${userType === CARER ? userTypeButtonActive : null }`} onClick={() => changeUserType(CARER)}>
                  <UserIcon className={`${userTypeIcon} ${userType === CARER ? userTypeButtonActive : null }`} />
                  <span className={`${userTypeButtonText} ${userType === CARER ? userTypeButtonActive : null }`}>Clientes</span>
                </div>
                <div className={`${userTypeButtonContainer} ${userType === USER ? userTypeButtonActive : null }`} onClick={() => changeUserType(USER)}>
                  <CarerIcon className={`${userTypeIcon} ${userType === USER ? userTypeButtonActive : null }`} />
                  <span className={`${userTypeButtonText} ${userType === USER ? userTypeButtonActive : null }`}>Cuidadores</span>
                </div>
              </div>
            </div>
            <WorkerSignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;