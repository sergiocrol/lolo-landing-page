import * as React from "react"

function CleaningIcon({color, ...rest}) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        opacity={0.3}
        d="M7.095 7.39h-1.29a2.114 2.114 0 011.828-1.063A2.12 2.12 0 019.751 8.38l-2.656-.992zM4.09 14.826V9.868H2.675v4.959H4.09zm10.555-1.013a.714.714 0 00-.638-.397h-3.79a3.53 3.53 0 01-1.119-.184l-1.685-.56.446-1.345 1.686.56c.22.07 1.629.105 1.629.105a.63.63 0 00-.404-.588L6.65 9.869h-1.14v3.882l4.936 1.367 4.2-1.303z"
        fill={color}
      />
      <path
        d="M12.584 4.202l.446.97.97.446-.97.447-.446.97-.446-.97-.97-.447.97-.446.446-.97zm2.132 6.375a1.42 1.42 0 001.417-1.417c0-.78-1.417-2.833-1.417-2.833S13.3 8.38 13.3 9.16c0 .78.637 1.417 1.416 1.417zM8.341 4.98V3.493h1.417c.404 0 .779.12 1.098.32l1.013-1.014a3.47 3.47 0 00-2.111-.722H5.862v1.416h1.062v1.495a3.559 3.559 0 00-2.656 2.401h1.53a2.134 2.134 0 011.835-1.062A2.12 2.12 0 019.75 8.38l1.424.531v-.46A3.542 3.542 0 008.34 4.98zm7.792 9.137v.709l-5.667 1.77-4.958-1.374v1.02h-4.25V8.452h5.645l4.364 1.629a2.047 2.047 0 011.324 1.912h1.417c1.176 0 2.125.95 2.125 2.125zm-12.042.709V9.868H2.674v4.959h1.417zm10.554-1.013a.714.714 0 00-.637-.397h-3.79a3.53 3.53 0 01-1.119-.184l-1.686-.56.446-1.345 1.686.56c.22.07 1.63.105 1.63.105a.63.63 0 00-.404-.588L6.648 9.869h-1.14v3.882l4.937 1.367 4.2-1.303z"
        fill={color}
      />
    </svg>
  )
}

export default CleaningIcon