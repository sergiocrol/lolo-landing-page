import { motion } from 'framer-motion';
import { useIntl } from 'react-intl';

function BurgerMenu({ isOpen }) {
  const { formatMessage: f } = useIntl();
  const variantsRight = {
    open: {
      pathLength: [1, 0],
      strokeOpacity: [1, 1],
      transition: { duration: 0.2 },
    },
    closed: {
      pathLength: [0, 1],
      strokeOpacity: [1, 1],
      transition: { duration: 0.2 },
    },
  };

  const variantsLeft = {
    open: {
      pathLength: [1, 0],
      strokeOpacity: [1, 0],
      transition: { duration: 0.2 },
    },
    closed: {
      pathLength: [0, 1],
      strokeOpacity: [0, 1],
      transition: { duration: 0.2 },
    },
  };

  const variantsTitle = {
    open: {
      opacity: [0, 1],
      x: [-10, 0],
      transition: { duration: 0.3, delay: 0.2 },
    },
    closed: {
      opacity: [1, 0],
      x: [0, -10],
      transition: { duration: 0.1 },
    },
  };

  return (
    <div style={{ position: 'relative' }}>
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
          animate={isOpen ? 'open' : 'closed'}
          variants={variantsRight}
          initial={{ pathLength: 1, strokeOpacity: 0.64 }}
        ></motion.path>
        <motion.path
          stroke="#fff"
          strokeLinecap="round"
          strokeOpacity="0.64"
          strokeWidth="3"
          d="M1.5 8.5L14.5 8.5"
          animate={isOpen ? 'open' : 'closed'}
          variants={variantsLeft}
          initial={{ pathLength: 1 }}
        ></motion.path>
        <motion.path
          stroke="#fff"
          strokeLinecap="round"
          strokeOpacity="0.64"
          strokeWidth="3"
          d="M22.5 15.5L9.499 15.5"
          animate={isOpen ? 'open' : 'closed'}
          variants={variantsRight}
          initial={{ pathLength: 1 }}
        ></motion.path>
        <motion.path
          stroke="#fff"
          strokeLinecap="round"
          strokeOpacity="0.64"
          strokeWidth="3"
          d="M22.5 8.5L19.5 8.5"
          animate={isOpen ? 'open' : 'closed'}
          variants={variantsRight}
          initial={{ pathLength: 1 }}
        ></motion.path>
        <motion.path
          stroke="#fff"
          strokeLinecap="round"
          strokeOpacity="0.64"
          strokeWidth="3"
          d="M1.5 15.5L4.5 15.5"
          animate={isOpen ? 'open' : 'closed'}
          variants={variantsLeft}
          initial={{ pathLength: 1 }}
        ></motion.path>
      </svg>
      <motion.div
        style={{
          opacity: 0,
          position: 'absolute',
          top: -10,
          left: -45,
          fontSize: 22,
          color: 'darkgray',
        }}
        animate={isOpen ? 'open' : 'closed'}
        variants={variantsTitle}
        initial={{ opacity: 0 }}
      >
        {f({ id: 'navClose' })}
      </motion.div>
    </div>
  );
}

export default BurgerMenu;
