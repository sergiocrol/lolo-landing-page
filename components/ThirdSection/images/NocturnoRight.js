import { motion } from 'framer-motion';

import isInViewport from '../../../helpers/inViewport';

function NocturnoRight({ inViewport }) {
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
          fill="url(#paint5_linear)"
          stroke="url(#paint6_linear)"
          strokeOpacity="0.8"
          d="M260.814-278.654c-26.344-44.871-34.908-125.192-35.897-159.743H385.71l13.647 1410.32H276.24c16.119-14.658 50.908-59.859 61.114-123.397 12.756-79.423-63.19-124.744-76.54-218.526-13.35-93.782 56.07-92.436 76.54-188.013 20.47-95.577-20.47-190.705-35.897-261.154-15.427-70.448-16.613-104.102 6.823-230.192 23.437-126.09-14.536-173.205-47.466-229.295z"
        />
        <motion.path
          animate={controls}
          fillOpacity="0"
          fill="url(#paint7_linear)"
          stroke="url(#paint8_linear)"
          strokeOpacity="0.4"
          d="M245.09 867.227c-26.344 45.542-34.908 127.064-35.897 162.133h160.794l13.646-1431.411H260.517c16.119 14.877 50.908 60.754 61.113 125.242 12.757 80.611-63.19 126.609-76.54 221.794-13.35 95.184 56.07 93.818 76.54 190.824 20.47 97.006-20.47 193.557-35.897 265.059-15.426 71.502-16.613 105.66 6.824 233.635 23.436 127.975-14.537 175.795-47.467 232.724z"
        />
        <path
          stroke="url(#paint9_linear)"
          strokeOpacity="0.1"
          d="M260.814-516.654c-26.344-44.871-34.908-125.192-35.897-159.743H385.71l13.647 1410.32H276.24c16.119-14.658 50.908-59.859 61.114-123.397 12.756-79.423-63.19-124.744-76.54-218.526-13.35-93.782 56.07-92.436 76.54-188.013 20.47-95.577-20.47-190.705-35.897-261.154-15.427-70.448-16.613-104.102 6.823-230.192 23.437-126.09-14.536-173.205-47.466-229.295z"
        ></path>
        <path
          stroke="url(#paint10_linear)"
          strokeOpacity="0.1"
          d="M245.09 629.227c-26.344 45.542-34.908 127.064-35.897 162.132h160.794l13.646-1431.41H260.517c16.119 14.877 50.908 60.754 61.113 125.242 12.757 80.611-63.19 126.609-76.54 221.794-13.35 95.184 56.07 93.818 76.54 190.824C342.1-5.185 311.427 91.366 296 162.868c-15.427 71.502-16.613 105.66 6.823 233.635 23.437 127.975-24.803 175.795-57.733 232.724z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint5_linear"
          x1="224.917"
          x2="399.357"
          y1="266.763"
          y2="266.763"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.222" stopColor="#F44E77"></stop>
          <stop offset="0.984" stopColor="#2C2C60"></stop>
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="256.66"
          x2="449.179"
          y1="581.539"
          y2="-251.027"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44E77"></stop>
          <stop offset="0.911" stopColor="#2C2C60" stopOpacity="0.74"></stop>
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="226.697"
          x2="364.292"
          y1="23.782"
          y2="40.776"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5C6DBC"></stop>
          <stop offset="1" stopColor="#9861A1" stopOpacity="0.78"></stop>
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="303.237"
          x2="210.66"
          y1="783.91"
          y2="-263.744"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.219" stopColor="#2C2C60"></stop>
          <stop offset="1" stopColor="#F44E77" stopOpacity="0.67"></stop>
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="256.66"
          x2="449.179"
          y1="343.539"
          y2="-489.027"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F44E77"></stop>
          <stop offset="0.911" stopColor="#2C2C60" stopOpacity="0.74"></stop>
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="303.237"
          x2="210.66"
          y1="545.91"
          y2="-501.744"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.219" stopColor="#2C2C60"></stop>
          <stop offset="1" stopColor="#F44E77" stopOpacity="0.67"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default NocturnoRight;
