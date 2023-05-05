'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About Kamalogue" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[18px] text-center text-grey-700"
      >
        <span className="font-extrabold blue_gradient">Kamalogue</span> , the ultimate destination for curious minds who love exploring new ideas and discovering new perspectives on a wide range of topics.  With our unique{' '}
        <span className="font-extrabold text-black">
        AI blog summarization
        </span>{' '}
        you can quickly understand the key points of any article without reading the entire post.Our platform features a wide range of articles on health, sports, entertainment, technology, history, and more. With Kamalogue, you can step into a world of endless possibilities and {' '}
        <span className="font-extrabold text-black">
 explore
        </span>{' '} new horizons without ever leaving your chair. So why wait? {' '}
        <span className="font-extrabold text-black">Join</span> us on Kamalogue to stay up-to-date with the latest news and trends in the world of blogging.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;