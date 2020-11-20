import { motion } from 'framer-motion';

import isInViewport from '../../../helpers/inViewport';

function DiurnoRight({ inViewport }) {
  const { controls } = isInViewport(inViewport);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="361"
      height="265"
      fill="none"
      viewBox="0 0 361 265"
    >
      <mask
        id="mask0"
        width="356"
        height="245"
        x="-5"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M5 0C-.523 0-5 4.477-5 10v225c0 5.523 4.477 10 10 10h336c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10H5z"
        ></path>
      </mask>
      <g strokeWidth="2" mask="url(#mask0)">
        <motion.path
          animate={controls}
          fillOpacity="0"
          fill="url(#paint0_linear)"
          stroke="url(#paint1_linear)"
          strokeOpacity="0.4"
          d="M245.09 1126.59c-26.344 45.54-34.908 127.06-35.897 162.13h160.794l13.646-1431.412H260.517c16.119 14.877 50.908 60.754 61.113 125.242 12.757 80.611-63.19 126.609-76.54 221.794-13.35 95.184 56.07 93.818 76.54 190.824 20.47 97.006-20.47 193.557-35.897 265.059-15.426 71.502-16.613 105.659 6.824 233.635 23.436 127.978-14.537 175.798-47.467 232.728z"
        />
        <motion.path
          animate={controls}
          fillOpacity="0"
          fill="url(#paint2_linear)"
          stroke="url(#paint3_linear)"
          strokeOpacity="0.8"
          d="M260.814-19.295c-26.344-44.872-34.908-125.193-35.897-159.744H385.71l13.647 1410.319H276.24c16.119-14.66 50.908-59.86 61.114-123.4 12.756-79.42-63.19-124.739-76.54-218.521-13.35-93.782 56.07-92.436 76.54-188.013 20.47-95.577-20.47-190.705-35.897-261.154C286.03 369.743 284.844 336.089 308.28 210c23.437-126.09-14.536-173.206-47.466-229.295z"
        />

        <path
          stroke="url(#paint4_linear)"
          strokeOpacity="0.1"
          d="M286.03-26.33c-26.344-45.542-34.907-127.064-35.896-162.132h160.793l13.647 1431.412H301.457c16.119-14.88 50.908-60.76 61.113-125.24 12.757-80.62-63.19-126.613-76.54-221.798-13.35-95.184 56.07-93.818 76.54-190.824 20.47-97.006-20.47-193.557-35.896-265.059-15.427-71.502-16.614-105.659 6.823-233.635C356.934 78.419 318.96 30.599 286.03-26.329z"
        ></path>
        <path
          stroke="#4C7CCC"
          strokeOpacity="0.1"
          d="M266.449 1186.86c-26.344 44.87-34.907 125.19-35.896 159.74h160.793L404.993-63.719H281.876c16.119 14.659 50.908 59.86 61.113 123.398 12.757 79.423-63.19 124.743-76.54 218.525-13.35 93.783 56.07 92.436 76.54 188.013 20.47 95.577-20.47 190.705-35.896 261.154-15.427 70.449-16.614 104.103 6.823 230.193 23.437 126.086-14.537 173.206-47.467 229.296z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="209.193"
          x2="395.5"
          y1="573.013"
          y2="573.209"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.135" stopColor="#4E70C3"></stop>
          <stop offset="1" stopColor="#F44E77"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="303.237"
          x2="210.66"
          y1="1043.27"
          y2="-4.385"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.219" stopColor="#2C2C60"></stop>
          <stop offset="1" stopColor="#F44E77" stopOpacity="0.67"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="192.877"
          x2="500.313"
          y1="-57.436"
          y2="76.337"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.282" stopColor="#F44E77"></stop>
          <stop offset="0.934" stopColor="#2C2C60"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="214.237"
          x2="490.595"
          y1="808.589"
          y2="36.578"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.719" stopColor="#2C2C60" stopOpacity="0.74"></stop>
          <stop offset="1" stopColor="#F44E77"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="344.177"
          x2="251.601"
          y1="56.987"
          y2="1104.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.219" stopColor="#2C2C60"></stop>
          <stop offset="1" stopColor="#F44E77" stopOpacity="0.67"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default DiurnoRight;
