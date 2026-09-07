import { motion } from 'framer-motion';

export function Scene12() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-[10vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute top-[6vw] left-[8vw] right-[8vw] flex justify-between text-[1.2vw] uppercase tracking-[0.15em] text-[#F1A28C]">
        <span className="font-semibold">12 / The invitation</span>
        <span>Charity Hustle</span>
      </div>

      <motion.h2
        className="font-display text-[6.5vw] leading-[1] text-white tracking-[-0.02em] mb-[2vw]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        There is a place for your good
      </motion.h2>

      <motion.p
        className="font-display text-[3.5vw] text-[#F1A28C] italic mb-[3vw]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        Charity Hustle
      </motion.p>

      <motion.div
        className="max-w-[70vw] mx-auto text-[1.8vw] text-white/80 leading-[1.5] space-y-[1.5vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
      >
        <p>A gentle nudge from ‘I want to help’ to ‘I know what I can do next.’</p>
        <p>Explore the website. Imagine the partnerships. Start one useful ripple.</p>
      </motion.div>
    </motion.div>
  );
}
