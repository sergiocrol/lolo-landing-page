import { motion, useCycle, useAnimation, useMotionValue, useTransform } from "framer-motion";

const tickVariants = {
  checked: { pathLength: 0 },
  unchecked: { pathLength: 1 }
};

function BurgerMenu({ isOpen }) {
  const controls = useAnimation();
  const opacity = useAnimation();

  if(isOpen) {
    controls.start({
      pathLength: 0,
      transition: { duration: 0.1 }
    })
    opacity.start({
        pathLength: 0
    }).then(() => {
      opacity.start({
        strokeOpacity: 0
      })
    })
  }else{
    controls.start({
      pathLength: 1,
      strokeOpacity: .64,
      transition: { duration: 0.1 }
    })
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
      fill="none"
      viewBox="0 0 24 17"
    >
      <motion.path
        stroke="#fff"
        strokeLinecap="round"
        strokeOpacity="0.64"
        strokeWidth="3"
        d="M22.5 1.5L1.5 1.5"
        // animate={controls}
        initial={{pathLength: 1, strokeOpacity: .64}}
      ></motion.path>
      <motion.path
        stroke="#fff"
        strokeLinecap="round"
        strokeOpacity="0.64"
        strokeWidth="3"
        d="M1.5 8.5L14.5 8.5"
        // animate={opacity}
        initial={{pathLength: 1}}
      ></motion.path>
      <motion.path
        stroke="#fff"
        strokeLinecap="round"
        strokeOpacity="0.64"
        strokeWidth="3"
        d="M22.5 15.5L9.499 15.5"
        // animate={controls}
        initial={{pathLength: 1}}
      ></motion.path>
      <motion.path
        stroke="#fff"
        strokeLinecap="round"
        strokeOpacity="0.64"
        strokeWidth="3"
        d="M22.5 8.5L19.5 8.5"
        // animate={controls}
        initial={{pathLength: 1}}
      ></motion.path>
      <motion.path
        stroke="#fff"
        strokeLinecap="round"
        strokeOpacity="0.64"
        strokeWidth="3"
        d="M1.5 15.5L4.5 15.5"
        // animate={opacity}
        initial={{pathLength: 1}}
      ></motion.path>
    </svg>
  );
}

export default BurgerMenu;
