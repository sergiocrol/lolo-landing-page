import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import useAnimateInScroll from '../../hooks/useAnimateInScroll';

import { box, btn } from '../../styles/components.module.css';
import {
  boxFirstSection,
  pattern,
  blockContainer,
  blockContainerFooter,
  boxContainerFirstSection,
  titleText,
  bodyText,
  boxFooter,
  boxShadowDark
} from '../../styles/index.module.css';

const StepBlock = ({
  image,
  title,
  body,
  button,
  left,
  marginBottom,
  isFooter,
  buttonUrl
}) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);
  const inViewport = useAnimateInScroll(ref);

  useEffect(() => {
    if(inViewport) setAnimate(true);
  }, [inViewport]);

  const styles = {
    blockContainer: `${blockContainer} flex flex-col-reverse items-center lg:flex-row w-full xl:px-16 
      ${marginBottom || 'mb-16'} lg:mb-12 
      ${left ? 'lg:flex-row-reverse' : 'flex'} 
      ${isFooter ? `${blockContainerFooter} xl:mb-24` : 'px-12 xl:mb-48'}`,
    title: `inline-block font-sans font-black text-center tracking-wider leading-tight w-full md:text-40
      ${
        isFooter
          ? `text-white text-24 lg:text-40 xl:text-50 lg:max-w-full lg:w-full 
            ${left ? 'lg:text-right' : 'lg:text-left'}`
          : `text-orange text-26 lg:text-50 xl:text-60 ${
              marginBottom ? 'lg:w-73 lg:max-w-30' : 'lg:w-2/3'
            } ${titleText} lg:text-left`
      }`,
    body: `inline-block font-sans py-2 text-center font-medium w-full xl:text-24 lg:py-6
      ${
        isFooter
          ? `text-white text-17 max-w-xs md:max-w-lg lg:max-w-xl md:text-20 lg:font-normal lg:w-10/12 
            ${left ? 'lg:text-right' : 'lg:text-left'}`
          : `text-gray text-20 lg:font-black  ${
              marginBottom ? 'lg:w-73 lg:max-w-30' : 'lg:w-2/3'
            } ${bodyText} lg:text-left`
      }`,
  };
  
  return (
    <div className={styles.blockContainer}>
      {button ? (
        <div
          className={`w-full lg:w-3/5 text-center lg:text-left block lg:hidden z-50 ${
            isFooter ? 'mt-4' : 'mt-8'
          }`}
        >
          {/* <Link href="/signup/new" passHref={true}> */}
            <a href={buttonUrl ? buttonUrl : process.env.NEXT_PUBLIC_MAMACOCO_URL}>
              <div className={`${btn} bg-blue inline-block`}>{button}</div>
            </a>
          {/* </Link> */}
        </div>
      ) : null}
      <div
        className={`${boxContainerFirstSection} w-full h-full relative max-w-xs lg:max-w-sm`}
      >
        <div
          ref={ref}
          data-aos={!isFooter ? left ? 'fade-down-left' : 'fade-down-right' : ''}
          data-aos-easing="ease-in-out"
          data-aos-timing
          data-aos-anchor-placement="top-right"
          className={`${boxFirstSection} ${box} ${animate ? "animate" : ""} ${
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
          ref={ref}
          data-aos={!isFooter ? left ? 'fade-up-right' : 'fade-up-left' : ''}
          data-aos-easing="ease-in-out"
          data-aos-timing
          data-aos-anchor-placement="top-bottom"
          className={`${pattern} ${animate ? "animate" : ""} ${
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
          isFooter
            ? left
              ? 'mb-10 lg:pr-8 lg:items-end'
              : 'mb-10 lg:pl-8 lg:items-start'
            : left
            ? 'mb-20 lg:items-start'
            : 'mb-20 lg:items-end'
        } lg:mb-0`}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>{body}</p>
        {button ? (
          <div
            className={`w-full lg:w-3/5 text-center ${
              isFooter && left ? 'lg:text-right' : 'lg:text-left'
            } hidden lg:block`}
          >
            {/* <Link href="/signup/new" passHref={true}> */}
              <a 
                className={`${btn} ${boxShadowDark} bg-blue inline-block cursor-pointer`} 
                href={buttonUrl ? buttonUrl : process.env.NEXT_PUBLIC_MAMACOCO_URL}
              >
                {button}
              </a>
            {/* </Link> */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StepBlock;
