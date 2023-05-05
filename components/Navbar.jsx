'use client';

import { motion } from "framer-motion";

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0" />
    <div className={`${styles.innerWidth} container mx-auto flex justify-center px-10`}>
      <div className="flex justify-center">
        <div className="flex justify-center h-20">
          <img
            src="/vector.png"
            alt="logo"
            className="object-contain max-w-full sm:h-20 sm:w-20 h-14 w-14 mr-1 sm:mr-4"
          />
          <span className="blue_gradient pt-5s font-bold text-4xl sm:text-6xl leading-tight" style={{ lineHeight: "1.2" }}>
            Kamalogue
          </span>
        </div>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
