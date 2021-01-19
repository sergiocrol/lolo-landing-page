import React from 'react';

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="36"
      fill="none"
      viewBox="0 0 37 36"
      {...props}
    >
      <path
        fill="#3E3E64"
        d="M16.093 2.108a3.046 3.046 0 014.27 0L34.32 15.892a2.955 2.955 0 010 4.216L20.362 33.892a3.046 3.046 0 01-4.27 0L2.135 20.108a2.955 2.955 0 010-4.216L16.093 2.108z"
      ></path>
      <g filter="url(#filter56_i)">
        <ellipse
          cx="18.342"
          cy="18.113"
          fill="#E5E5E5"
          rx="7.105"
          ry="7.017"
        ></ellipse>
        <ellipse
          cx="18.203"
          cy="18.25"
          fill="#515151"
          rx="3.622"
          ry="3.577"
        ></ellipse>
      </g>
      <g filter="url(#filter57_d)">
        <path fill="#E5858F" d="M15.768 6.852h4.794v22.52h-4.794V6.852z"></path>
      </g>
      <defs>
        <filter
          id="filter56_i"
          width="14.211"
          height="18.033"
          x="11.236"
          y="11.096"
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
          id="filter57_d"
          width="8.795"
          height="26.521"
          x="13.768"
          y="6.852"
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
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
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

export default Logo;
