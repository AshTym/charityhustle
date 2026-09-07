import { motion } from 'framer-motion';

export function Scene5() {
  const base = import.meta.env.BASE_URL;

  return (
    <motion.div
      className="absolute inset-0 z-10 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-[55%] flex flex-col justify-center px-[8vw]">
        <div className="absolute top-[6vw] left-[8vw] text-[1.2vw] uppercase tracking-[0.15em] text-accent font-semibold">
          05 / Idea anatomy
        </div>

        <motion.h2
          className="font-display text-[4.5vw] leading-[1.05] text-primary mb-[3vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Not generic inspiration.<br />A practical next step.
        </motion.h2>

        <motion.p
          className="text-[1.8vw] text-primary/70 mb-[2vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Every Charity Hustle idea includes:
        </motion.p>

        <div className="grid grid-cols-2 gap-y-[1.5vw] gap-x-[2vw] text-[1.6vw] text-primary">
          {[
            "01 — The concept",
            "02 — The first step",
            "03 — Why it fits",
            "04 — The impact it could have",
            "05 — How it could grow"
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`border-t border-primary/20 pt-[1vw] ${i === 4 ? 'col-span-2 text-accent border-accent' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="w-[45%] h-full relative overflow-hidden"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-light)] to-transparent z-10 w-[20%]" />
        <img 
          src={`${base}charity-hustle-home.jpg`} 
          alt="Charity Hustle UI" 
          className="w-full h-full object-cover object-right opacity-90"
        />
      </motion.div>
    </motion.div>
  );
}
