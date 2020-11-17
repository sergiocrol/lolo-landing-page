import Image from 'next/image';

import {
  boxFirstSection,
  pattern,
  blockContainer,
  blockContainerFooter,
  boxContainerFirstSection,
  titleText,
  bodyText,
  boxFooter,
} from '../../styles/index.module.css';
import { box, btn } from '../../styles/components.module.css';

const StepBlock = ({
  image,
  title,
  body,
  button,
  left,
  marginBottom,
  isFooter,
}) => {
  return (
    <div
      className={`${blockContainer} ${
        isFooter ? blockContainerFooter : null
      } flex flex-col-reverse items-center lg:flex-row w-full ${
        isFooter ? 'px-4' : 'px-12'
      } xl:px-16 ${marginBottom || 'mb-16'} lg:mb-12 ${
        isFooter ? 'xl:mb-24' : 'xl:mb-48'
      } ${left ? 'lg:flex-row-reverse' : 'flex'}`}
    >
      {button ? (
        <div
          className={`w-full lg:w-3/5 text-center lg:text-left block lg:hidden z-50 ${
            isFooter ? 'mt-4' : 'mt-8'
          }`}
        >
          <div className={`${btn} bg-blue inline-block`}>{button}</div>
        </div>
      ) : null}
      <div
        className={`${boxContainerFirstSection} w-full h-full relative max-w-xs lg:max-w-sm`}
      >
        <div
          className={`${boxFirstSection} ${box} ${
            isFooter ? boxFooter : null
          } rounded-40 absolute z-10 top-0 ${
            left ? 'right-0 rounded-bl-none' : 'left-0 rounded-br-none'
          }`}
        >
          <div className="absolute bottom-0">
            <Image
              alt="Configura tu servicio"
              src={image}
              width={390}
              height={533}
              layout="responsive"
              quality={100}
            />
          </div>
        </div>
        <div
          className={`${pattern} ${
            isFooter ? 'hidden' : 'absolute'
          } z-0 bottom-0 right-0  ${left ? 'left-0' : 'right-0'}`}
        >
          <Image
            alt="Configura tu servicio"
            src="/static/images/pattern.png"
            layout="fill"
            quality={100}
          />
        </div>
      </div>
      <div
        className={`flex flex-col w-full items-center z-10 ${
          isFooter ? (left ? 'mb-10 lg:pr-8' : 'mb-10 lg:pl-8') : 'mb-20'
        } lg:mb-0 ${
          left
            ? isFooter
              ? 'lg:items-end'
              : 'lg:items-start'
            : isFooter
            ? 'lg:items-start'
            : 'lg:items-end'
        }`}
      >
        <h2
          className={`inline-block font-sans font-black ${
            isFooter ? 'text-white' : 'text-orange'
          } tracking-wider text-center leading-tight ${
            isFooter ? 'text-24' : 'text-26'
          } w-full md:text-40 ${
            isFooter ? 'lg:text-40 xl:text-50' : 'lg:text-50 xl:text-60'
          } ${isFooter ? null : 'lg:w-2/3'} ${
            isFooter && left ? 'lg:text-right' : 'lg:text-left'
          } ${isFooter ? 'lg:max-w-full lg:w-full' : titleText}`}
        >
          {title}
        </h2>
        <p
          className={`inline-block font-sans ${
            isFooter ? 'text-white' : 'text-gray'
          } py-2 text-center font-medium ${
            isFooter
              ? 'text-17 max-w-xs md:max-w-lg lg:max-w-xl md:text-20'
              : 'text-20'
          } w-full ${isFooter ? 'lg:font-normal' : 'lg:font-black'} ${
            isFooter ? 'lg:w-10/12' : 'lg:w-2/3'
          } xl:text-24 lg:py-6 ${
            isFooter && left ? 'lg:text-right' : 'lg:text-left'
          } ${isFooter ? null : bodyText}`}
        >
          {body}
        </p>
        {button ? (
          <div
            className={`w-full lg:w-3/5 text-center ${
              isFooter && left ? 'lg:text-right' : 'lg:text-left'
            } hidden lg:block`}
          >
            <div className={`${btn} bg-blue inline-block`}>{button}</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StepBlock;
