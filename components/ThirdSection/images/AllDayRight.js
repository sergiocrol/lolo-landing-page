import { motion } from 'framer-motion';

import isInViewport from '../../../helpers/inViewport';

function AllDayRight({ inViewport }) {
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
        width="357"
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
          fill="url(#paint11_linear)"
          stroke="url(#paint12_linear)"
          strokeOpacity="0.51"
          d="M245.09 607.868C218.746 653.411 210.182 734.933 209.193 770h160.794l13.647-1431.41H260.517c16.119 14.878 50.908 60.754 61.113 125.243 12.757 80.611-63.19 126.609-76.54 221.793-13.35 95.185 56.07 93.819 76.54 190.825 20.47 97.006-20.47 193.557-35.897 265.059-15.426 71.502-16.613 105.659 6.824 233.634C315.993 503.12 278.02 550.94 245.09 607.868z"
        />
        <motion.path
          animate={controls}
          fillOpacity="0"
          fill="url(#paint13_linear)"
          stroke="url(#paint14_linear)"
          strokeOpacity="0.8"
          d="M260.813-538.013c-26.344-44.871-34.908-125.192-35.897-159.743h160.793l13.647 1410.32H276.239c16.119-14.658 50.908-59.859 61.114-123.397 12.756-79.423-63.19-124.744-76.54-218.526-13.35-93.782 56.07-92.436 76.54-188.013 20.47-95.576-20.47-190.705-35.897-261.153-15.427-70.449-16.613-104.103 6.823-230.193 23.437-126.089-14.536-173.205-47.466-229.295z"
        />
        <path
          stroke="url(#paint15_linear)"
          strokeOpacity="0.1"
          d="M256.363-385.303c-26.344-45.543-34.907-127.065-35.896-162.133H381.26l13.647 1431.41H271.79c16.119-14.877 50.908-60.754 61.113-125.242 12.757-80.611-63.19-126.609-76.54-221.794-13.35-95.184 56.07-93.818 76.54-190.824 20.471-97.006-20.47-193.557-35.896-265.06C281.58 9.554 280.393-24.603 303.83-152.58c23.437-127.975-14.536-175.795-47.467-232.723z"
        ></path>
        <path
          stroke="url(#paint16_linear)"
          strokeOpacity="0.1"
          d="M260.813 610.257C234.469 655.129 225.905 735.449 224.916 770h160.793l13.647-1410.32H276.239c16.119 14.658 50.908 59.859 61.114 123.398 12.756 79.423-63.19 124.743-76.54 218.525-13.35 93.782 56.07 92.436 76.54 188.013 20.47 95.577-20.47 190.705-35.897 261.154-15.427 70.448-16.613 104.102 6.823 230.192 23.437 126.09-14.536 173.205-47.466 229.295z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint11_linear"
          x1="222.84"
          x2="388.124"
          y1="121.154"
          y2="69.576"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.152" stopColor="#2C2C60"></stop>
          <stop offset="0.797" stopColor="#9960A0"></stop>
        </linearGradient>
        <linearGradient
          id="paint12_linear"
          x1="303.237"
          x2="210.66"
          y1="524.552"
          y2="-523.103"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.219" stopColor="#2C2C60"></stop>
          <stop offset="1" stopColor="#F44E77" stopOpacity="0.67"></stop>
        </linearGradient>
        <linearGradient
          id="paint13_linear"
          x1="224.916"
          x2="399.356"
          y1="7.404"
          y2="7.404"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.422" stopColor="#F44E77"></stop>
          <stop offset="0.939" stopColor="#2C2C60"></stop>
        </linearGradient>
        <linearGradient
          id="paint14_linear"
          x1="256.659"
          x2="449.178"
          y1="322.18"
          y2="-510.386"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44E77"></stop>
          <stop offset="0.911" stopColor="#2C2C60" stopOpacity="0.74"></stop>
        </linearGradient>
        <linearGradient
          id="paint15_linear"
          x1="314.51"
          x2="221.934"
          y1="-301.987"
          y2="745.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.219" stopColor="#2C2C60"></stop>
          <stop offset="1" stopColor="#F44E77" stopOpacity="0.67"></stop>
        </linearGradient>
        <linearGradient
          id="paint16_linear"
          x1="256.659"
          x2="449.178"
          y1="-249.935"
          y2="582.63"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44E77"></stop>
          <stop offset="0.911" stopColor="#2C2C60" stopOpacity="0.74"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default AllDayRight;
