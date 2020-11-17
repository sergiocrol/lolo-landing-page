import { motion } from 'framer-motion';

import isInViewport from '../../../helpers/inViewport';

function LimpiezaRight({ inViewport }) {
  const controls = isInViewport(inViewport);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="362"
      height="265"
      fill="none"
      viewBox="0 0 362 265"
    >
      <mask
        id="mask0"
        width="357"
        height="245"
        x="-5"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          d="M5 0C-.523 0-5 4.477-5 10v225c0 5.523 4.477 10 10 10h336.275c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10H5z"
        ></path>
      </mask>
      <g strokeWidth="2" mask="url(#mask0)">
        <motion.path
          animate={controls}
          fillOpacity="0"
          fill="url(#paint17_linear)"
          stroke="url(#paint18_linear)"
          strokeOpacity="0.8"
          d="M261.019-797.372c-26.364-44.871-34.935-125.192-35.924-159.743h160.917l13.657 1410.32H276.458c16.131-14.658 50.947-59.859 61.16-123.397 12.767-79.423-63.239-124.744-76.599-218.526-13.36-93.782 56.113-92.436 76.599-188.013 20.486-95.577-20.486-190.705-35.924-261.154-15.439-70.448-16.626-104.102 6.828-230.192 23.455-126.09-14.547-173.205-47.503-229.295z"
        />
        <motion.path
          animate={controls}
          fillOpacity="0"
          fill="url(#paint19_linear)"
          stroke="url(#paint20_linear)"
          strokeOpacity="0.4"
          d="M245.284 348.509c-26.365 45.543-34.935 127.064-35.925 162.132h160.918l13.657-1431.41H260.722c16.132 14.877 50.948 60.754 61.161 125.243 12.767 80.61-63.239 126.609-76.599 221.793-13.36 95.184 56.113 93.818 76.599 190.824 20.486 97.006-20.486 193.557-35.924 265.059-15.439 71.503-16.627 105.66 6.828 233.635s-14.548 175.795-47.503 232.724z"
        />
        <path
          stroke="url(#paint21_linear)"
          strokeOpacity="0.1"
          d="M285.365 172.756C259 217.628 250.43 297.949 249.44 332.5h160.918l13.657-1410.32H300.803c16.132 14.66 50.948 59.86 61.161 123.397 12.767 79.423-63.239 124.744-76.599 218.526-13.36 93.782 56.113 92.436 76.599 188.012 20.486 95.577-20.486 190.706-35.924 261.154-15.439 70.449-16.627 104.103 6.828 230.193 23.455 126.09-14.548 173.205-47.503 229.294z"
        ></path>
        <path
          stroke="url(#paint22_linear)"
          strokeOpacity="0.1"
          d="M269.629-973.124c-26.365-45.546-34.935-127.066-35.925-162.136h160.918l13.657 1431.414H285.067c16.131-14.877 50.947-60.754 61.161-125.243 12.766-80.61-63.239-126.609-76.6-221.793-13.36-95.185 56.114-93.818 76.6-190.825 20.485-97.006-20.486-193.556-35.925-265.059-15.438-71.502-16.626-105.659 6.829-233.634 23.455-127.976-14.548-175.795-47.503-232.724z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint17_linear"
          x1="225.095"
          x2="399.669"
          y1="-251.955"
          y2="-251.955"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.222" stopColor="#F44E77"></stop>
          <stop offset="0.984" stopColor="#2C2C60"></stop>
        </linearGradient>
        <linearGradient
          id="paint18_linear"
          x1="256.863"
          x2="449.247"
          y1="62.821"
          y2="-769.81"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44E77"></stop>
          <stop offset="0.911" stopColor="#2C2C60" stopOpacity="0.74"></stop>
        </linearGradient>
        <linearGradient
          id="paint19_linear"
          x1="209.359"
          x2="395.81"
          y1="-205.064"
          y2="-204.868"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.417" stopColor="#2C2C60" stopOpacity="0.92"></stop>
          <stop offset="1" stopColor="#F44E77"></stop>
        </linearGradient>
        <linearGradient
          id="paint20_linear"
          x1="303.475"
          x2="210.969"
          y1="265.192"
          y2="-782.475"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.219" stopColor="#2C2C60"></stop>
          <stop offset="1" stopColor="#F44E77" stopOpacity="0.67"></stop>
        </linearGradient>
        <linearGradient
          id="paint21_linear"
          x1="281.208"
          x2="473.593"
          y1="-687.436"
          y2="145.195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44E77"></stop>
          <stop offset="0.911" stopColor="#2C2C60" stopOpacity="0.74"></stop>
        </linearGradient>
        <linearGradient
          id="paint22_linear"
          x1="327.82"
          x2="235.314"
          y1="-889.808"
          y2="157.859"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.219" stopColor="#2C2C60"></stop>
          <stop offset="1" stopColor="#F44E77" stopOpacity="0.67"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LimpiezaRight;
