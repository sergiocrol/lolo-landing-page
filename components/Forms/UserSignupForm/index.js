import { useState } from "react";

import Form from "../Form";
import FormInput from "../FormInput";
import Spinner from "../../Spinner";
import { useIntl } from "react-intl";
import useModal from "../../../hooks/useModal";
import Modal from "../../Modals/Modal";
import ModalUserInfo from "../../Modals/ModalUserInfo";
// import validateCaptcha from '../../../helpers/recaptcha';
import { userInfoRequest } from "../../../services";

import {
  formInput,
  textArea,
  scrollCustom,
} from "../../../styles/components.module.css";

const UserSignupForm = ({ showMessage, showConfirmationPage }) => {
  const { formatMessage: f } = useIntl();
  const { isShowing, toggle } = useModal();
  const [disabled, setDisabled] = useState(true);
  const [back, setBack] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(0);

  let clickChild = null;

  const validateCaptcha = () => {
    return new Promise((res, rej) => {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY, { action: "submit" })
          .then((token) => {
            return res(token);
          })
          .catch((error) => {
            return res(error);
          });
      });
    });
  };

  const onSignUpClick = async (data) => {
    const { name, email, request } = data;
    setLoading(true);
    try {
      const token = await validateCaptcha();
      const response = await userInfoRequest({
        name,
        email,
        request,
        ["g-recaptcha-response"]: token,
      });
      setLoading(false);
      messageLogic(response);
    } catch (error) {
      setLoading(false);
      messageLogic(error);
    }
  };

  const messageLogic = (mssg) => {
    if (mssg.success) {
      showConfirmationPage();
    } else {
      showMessage(mssg);
    }
  };

  const textAreaLabel = () => {
    return (
      <div className="flex">
        <span>{f({ id: "signupFormUserText" })}</span>
        {/* <span onClick={toggle}>
          <svg className="fill-current h-5 w-5 text-red-300 hover:fill-current hover:text-orange ml-2 inline-block cursor-pointer mb-1" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 0.66C7.75006 0.66 0.658356 7.7517 0.658356 16.5C0.658139 18.5804 1.06775 20.6405 1.86379 22.5626C2.65983 24.4847 3.82671 26.2311 5.29778 27.7022C6.76886 29.1733 8.51532 30.3402 10.4374 31.1362C12.3595 31.9323 14.4196 32.3419 16.5 32.3416C25.2467 32.3416 32.34 25.25 32.34 16.5C32.34 7.7517 25.2467 0.66 16.5 0.66V0.66ZM17.9784 6.3789C19.5228 6.3789 19.9766 7.27485 19.9766 8.2995C19.9766 9.57825 18.9536 10.7613 17.2062 10.7613C15.7443 10.7613 15.048 10.027 15.0909 8.811C15.0909 7.78635 15.9473 6.3789 17.9784 6.3789V6.3789ZM14.0217 25.9875C12.9657 25.9875 12.1952 25.3457 12.9327 22.5324L14.1422 17.5411C14.3517 16.7425 14.3864 16.4225 14.1422 16.4225C13.827 16.4225 12.4559 16.9735 11.6474 17.518L11.121 16.6551C13.6868 14.5118 16.637 13.2544 17.8992 13.2544C18.9552 13.2544 19.1301 14.5019 18.6038 16.4225L17.2178 21.6695C16.9719 22.5968 17.0775 22.9169 17.3234 22.9169C17.6402 22.9169 18.6764 22.5341 19.6961 21.7305L20.2934 22.5324C17.7969 25.0272 15.0761 25.9875 14.0217 25.9875Z"/>
          </svg>
        </span> */}
        <span className="flex flex-1 text-right text-13 justify-end items-end pr-2 pb-1">
          <span
            className={
              limit < 150 || limit > 1000 ? "text-red-400" : "text-green-500"
            }
          >
            {limit}
          </span>
          /1000
        </span>
      </div>
    );
  };

  const onChange = (e) => {
    setLimit(e.target.value.length);
  };

  return (
    <div className="mt-6 relative">
      {/* <Modal isShowing={isShowing} hide={toggle} component={<ModalUserInfo />} /> */}
      <Form
        onSubmit={onSignUpClick}
        onChange={onChange}
        onDisabled={(isValid) => setDisabled(isValid)}
        setVal={() => {}}
        setClick={(click) => (clickChild = click)}
        back={back}
      >
        <FormInput
          name="name"
          label={f({ id: "signupFormWorkerName" })}
          rules={{ required: f({ id: "signupFormFieldError" }) }}
          className={`${formInput}`}
        />
        <FormInput
          name="email"
          label={f({ id: "signupFormWorkerEmail" })}
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Formato de email incorrecto",
            },
          }}
          className={`${formInput}`}
        />
        <FormInput
          name="request"
          label={textAreaLabel()}
          rules={{
            required: f({ id: "signupFormFieldError" }),
            minLength: {
              value: 150,
              message: f({ id: "signupFormFieldMinLength" }),
            },
            maxLength: {
              value: 1000,
              message: f({ id: "signupFormFieldMaxLength" }),
            },
          }}
          className={`${formInput} ${textArea} ${scrollCustom}`}
          placeholder={f({ id: "signupFormUserTextPlaceholder" })}
          onChange={(e) => onChange(e)}
          isTextArea
        />
        {loading ? (
          <div className="absolute bottom-0 z-50 w-full">
            <Spinner
              name="spinner"
              className="left-1/2 transform -translate-x-1/2"
            />
          </div>
        ) : (
          <div></div>
        )}
        <FormInput
          type="submit"
          name="button"
          value={loading ? '': f({ id: 'signupFormWorkerSendButton' })} 
          hidden={false}
          className="bg-orange text-white cursor-pointer rounded-md h-12 w-full font-montserrat text-20 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disabled || loading}
        />
      </Form>
    </div>
  );
};

export default UserSignupForm;
