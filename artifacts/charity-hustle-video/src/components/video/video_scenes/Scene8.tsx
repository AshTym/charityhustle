import { motion } from 'framer-motion';

export function Scene8() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: '-5vw' }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[6vw] left-[8vw] text-[1.2vw] uppercase tracking-[0.15em] text-accent font-semibold">
        08 / Country-aware
      </div>

      <div className="w-[45%] pr-[4vw]">
        <motion.h2
          className="font-display text-[5vw] leading-[1.05] text-primary mb-[2vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Local context matters
        </motion.h2>
        <motion.p
          className="text-[2vw] text-primary/80 mb-[2vw]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Five country-aware directories:
        </motion.p>
        <motion.p
          className="text-[1.6vw] text-accent font-medium leading-[1.4] max-w-[80%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Cause filters include food security and First Nations & Indigenous organisations.
        </motion.p>
      </div>

      <div className="w-[55%] grid grid-cols-2 gap-[1.5vw]">
        {[
          { text: "Australia", style: "bg-primary text-white border border-primary" },
          { text: "New Zealand", style: "border border-primary/20 text-primary" },
          { text: "United Kingdom", style: "border border-primary/20 text-primary" },
          { text: "United States", style: "bg-primary/10 text-primary border border-transparent" },
          { text: "Canada", style: "col-span-2 bg-accent text-white border border-accent" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-[1.5vw] py-[2vw] px-[2.5vw] text-[2vw] font-medium flex items-center ${item.style}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.15, type: 'spring' }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
