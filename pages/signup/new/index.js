import { useState } from 'react';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';

import LogoName from '../../../components/Icons/LogoName';
import Logo from '../../../components/Icons/Logo';
import LogoNameSignup from '../../../components/Icons/LogoNameSignup';
import LogoSignup from '../../../components/Icons/LogoSignup';
import CarerIcon from '../../../components/Icons/Carer';
import UserIcon from '../../../components/Icons/User';
import WorkerSignupForm from '../../../components/Forms/WorkerSignupForm';
import UserSignupForm from '../../../components/Forms/UserSignupForm';
import Check from '../../../components/Icons/Check';
import useScript from '../../../hooks/useScript';

import { signupContainer, logoMobile, logoNameMobile, signupWorkerShadow, signupUserShadow } from '../../../styles/signup.module.css';
import { userTypeButtonContainer, userTypeButtonText, userTypeIcon, userTypeButtonActive } from '../../../styles/components.module.css';

const USER = 'user';
const CARER = 'carer';
const recaptchaUrl = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`;

const SignUp = () => {
  const { formatMessage: f } = useIntl();
  const recaptchaStatus = useScript('recaptcha-key', recaptchaUrl);
  const [userType, setUserType] = useState(CARER);
  const [message, setMessage] = useState('');
  const [confirmationPage, setConfirmationPage] = useState(false);

  const changeUserType = (type) => {
    setUserType(type);
  }

  const showMessage = (message) => {
    if(message.keyword) {
      setMessage(message.keyword);
    } else {
      setMessage('connectionError');
    }
  }

  const showConfirmationPage = () => {
    setConfirmationPage(true);
  }

  return (
    <div className={`bg-yellow`}>
      <div className="flex">
        <div className={`hidden md:grid md:w-1/3 md:bg-white md:relative md:max-w-lg h-screen z-20`}>
          {
          userType === CARER
          ? <div className={`${signupContainer} ${signupWorkerShadow} w-full py-16 bg-blueSignup text-blueDarkSignup shadow-xl flex flex-col items-center h-full`}>
              <Link href="/">
                <a className="flex mb-20 w-full ml-20">
                  <div className="hidden md:flex">
                    <LogoSignup rectangle='#375672' line='#E5858F' width={49} height={48}/>
                    <LogoNameSignup line='#375672' className={`ml-1`} width={60} height={50}/>
                  </div>
                </a>
              </Link>
              <div className="" style={{maxWidth: '80%'}}>
                <Image
                  src="/static/images/carer_signup.png"
                  width={317}
                  height={357}
                  quality={100}
                />
              </div>
              <div className="flex flex-col justify-center items-center mt-24 mb-12">
                <h1 className="font-montserrat font-extrabold tracking-normal text-22 md:text-22 lg:text-30 xl:text-36 text-left w-5/6">{f({ id: 'signupWorkerPanelTitle' })}</h1>
                <h2 className="text-17 md:text-17 lg:text-22 xl:text-26 w-5/6 lg:pr-10">{f({ id: 'signupWorkerPanelSubtitle' })}</h2>
              </div>
            </div>
          : <div className={`${signupContainer} ${signupUserShadow} w-full py-16 bg-redSignup text-redDarkSignup shadow-xl flex flex-col items-center h-full`}>
          <Link href="/">
            <a className="flex mb-20 w-full ml-20">
              <div className="hidden md:flex">
                <LogoSignup rectangle='#6b4748' line='#E5858F' width={49} height={48}/>
                <LogoNameSignup line='#6b4748' className={`ml-1`} width={60} height={50}/>
              </div>
            </a>
          </Link>
          <div className="" style={{maxWidth: '80%'}}>
            <Image
              src="/static/images/user_signup.png"
              width={317}
              height={357}
              quality={100}
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-24 mb-12">
            <h1 className="font-montserrat font-extrabold tracking-normal text-22 md:text-22 lg:text-30 xl:text-36 text-left w-5/6">{f({ id: 'signupUserPanelTitle' })}</h1>
            <h2 className="text-17 md:text-17 lg:text-22 xl:text-26 w-5/6 lg:pr-10">{f({ id: 'signupUserPanelSubtitle' })}</h2>
          </div>
        </div>
          }
        </div>
        {
          confirmationPage
          ? <div className="my-0 mx-auto flex flex-col items-center justify-center">
              <div className={`flex items-center h-24 justify-between md:hidden w-5/6`}>
                <div className="flex items-center">
                  <Logo className={`${logoMobile}`} width={39} height={38}/>
                  <LogoName className={`ml-1 ${logoNameMobile}`} width={50} height={40}/>
                </div>
              </div>
              <div className="px-6 flex flex-col items-center relative pt-24 pb-10 bg-white max-w-32 mt-24 mx-4 rounded-xl shadow-md">
                <div className="w-32 h-32 absolute top-0 transform -translate-y-1/2">
                  <Check selectedIndex={1}/>
                </div>
                <div className="text-center">
                  <h1 className="text-center font-montserrat font-bold text-24 text-orange md:text-30">{f({ id: 'signupFormSuccessTitle' })}</h1>
                  <p className="mt-5 text-gray sm:mx-16 md:text-20">{f({ id: 'signupFormSuccessText' })} <br/> 
                     <a className="text-orange text-17 mt-3 inline-block md:text-24" href="mailto:support@milolo.es"> support@milolo.es</a>
                  </p>
                </div>
              </div>
              <Link href="/">
                <a className="bg-orange text-white cursor-pointer rounded-md h-12 w-full max-w-17 font-montserrat text-20 mt-8 text-center flex items-center justify-center my-0 mx-auto">
                  {f({ id: 'signupFormSuccessButton' })}
                </a>
              </Link>
          </div>
          : <div className={`flex-1 bg-yellow relative z-10`}>
          {message 
            ? <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded absolute top-0 w-full md:text-center" role="alert">
              <strong className="font-bold mr-3">Ooops!</strong>
              <span className="block sm:inline text-13">{f({ id: message })}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setMessage('')}>
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
            </div> 
            : null}
            <div className='w-10/12 max-w-30 my-0 mx-auto md:mt-20'>
              <div className={`flex items-center h-24 justify-between md:hidden`}>
                <div className="flex items-center w-1/2">
                  <Logo className={`${logoMobile}`} width={39} height={38}/>
                  <LogoName className={`ml-1 ${logoNameMobile}`} width={50} height={40}/>
                </div>
                <span className="hidden">accede</span>
              </div>
              <div className="mb-6">
                <h1 className="text-orange font-montserrat font-bold text-22 tracking-wide md:text-4xl">{f({ id: 'signupFormTitle' })}</h1>
                <h2 className="text-gray tracking-tight max-w-21 md:text-22 md:max-w-26">{f({ id: 'signupFormSubtitle' })}</h2>
              </div>
              <div className="md:mb-10">
                <span className="text-orange font-montserrat font-bold md:text-22">{f({ id: 'signupFormTypeTitle' })}</span>
                <div className="flex">
                  <div className={`${userTypeButtonContainer} ${userType === CARER ? userTypeButtonActive : null }`} onClick={() => changeUserType(CARER)}>
                    <UserIcon className={`${userTypeIcon} ${userType === CARER ? userTypeButtonActive : null }`} />
                    <span className={`${userTypeButtonText} ${userType === CARER ? userTypeButtonActive : null }`}>{f({ id: 'signupFormWorkerButton' })}</span>
                  </div>
                  <div className={`${userTypeButtonContainer} ${userType === USER ? userTypeButtonActive : null }`} onClick={() => changeUserType(USER)}>
                    <CarerIcon className={`${userTypeIcon} ${userType === USER ? userTypeButtonActive : null }`} />
                    <span className={`${userTypeButtonText} ${userType === USER ? userTypeButtonActive : null }`}>{f({ id: 'signupFormUserButton' })}</span>
                  </div>
                </div>
              </div>
              {
                userType === CARER
                ? <WorkerSignupForm showMessage={showMessage} showConfirmationPage={showConfirmationPage} />
                : <UserSignupForm />
              }
              { recaptchaStatus === "ready"
                ? <div className="text-13 text-gray mb-12">{f({ id: 'signupFormCaptcha' })}
                  <a className="text-orange" href="https://policies.google.com/privacy"> {f({ id: 'signupFormCaptchaPrivacity' })} </a> {f({ id: 'signupFormCaptchaConnection' })} 
                  <a className="text-orange" href="https://policies.google.com/terms"> {f({ id: 'signupFormCaptchaTerms' })} </a>
                </div>
                : null
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default SignUp;