import React from 'react';

function LogoFooter({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      fill="#fff"
      viewBox="0 0 58 58"
      style={style}
    >
      <path
        fill="#fff"
        fillOpacity="0.5"
        d="M24.05 4.95a7 7 0 019.9 0l19.1 19.1a7 7 0 010 9.9l-19.1 19.1a7 7 0 01-9.9 0l-19.1-19.1a7 7 0 010-9.9l19.1-19.1z"
      ></path>
      <g filter="url(#filter0_i)">
        <circle cx="29.182" cy="29.182" r="11.305" fill="#1B153F"></circle>
        <circle
          cx="28.96"
          cy="29.404"
          r="5.763"
          fill="#fff"
          fillOpacity="0.5"
        ></circle>
      </g>
      <g filter="url(#filter1_d)">
        <path
          fill="#E8E3E4"
          d="M25.085 11.039h7.629v36.283h-7.629V11.039z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_i"
          width="22.609"
          height="26.609"
          x="17.877"
          y="17.877"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow"></feBlend>
        </filter>
        <filter
          id="filter1_d"
          width="11.628"
          height="40.283"
          x="23.085"
          y="11.039"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default LogoFooter;
