import { motion } from 'framer-motion';

export function Scene9() {
  const base = import.meta.env.BASE_URL;

  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col justify-center items-end px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, x: '-5%' }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 6, ease: 'easeOut' }}
      >
        <img 
          src={`${base}community-skills.jpg`} 
          alt="Community Skills" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/95 via-primary/80 to-primary/30" />
      </motion.div>

      <div className="relative z-10 w-[55%]">
        <motion.div
          className="text-[#F1A28C] font-semibold tracking-[0.15em] uppercase text-[1.2vw] mb-[2vw]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          09 / Charity value
        </motion.div>

        <motion.h2
          className="font-display text-[4.8vw] leading-[1.05] text-white mb-[2.5vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          A new doorway into charity participation
        </motion.h2>

        <motion.p
          className="text-[2vw] text-[#F1A28C] font-medium mb-[2vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Potential value for charities:
        </motion.p>

        <div className="flex flex-col gap-[1vw] text-white/90 text-[1.6vw] leading-[1.4]">
          {[
            '— Reach people who do not identify as traditional volunteers',
            '— Surface skills-based and micro-volunteering pathways',
            '— Help supporters arrive with a clearer first offer',
            '— Turn spare capacity into useful local action'
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + i * 0.2, ease: 'easeOut' }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
