import { motion } from 'framer-motion';

export function Scene3() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: '-5vw' }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[6vw] left-[8vw] right-[8vw] flex justify-between text-[1.2vw] uppercase tracking-[0.15em]">
        <span className="text-accent font-semibold">03 / Personal context</span>
        <span className="text-primary/40">Charity Hustle</span>
      </div>

      <div className="w-[45%] pr-[4vw]">
        <motion.h2
          className="font-display text-[5vw] leading-[1.05] text-primary mb-[2vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Start with the life people actually have
        </motion.h2>
        <motion.p
          className="text-[2vw] text-accent font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          No perfect plan required.
        </motion.p>
      </div>

      <div className="w-[55%] grid grid-cols-2 gap-[1.5vw]">
        {[
          { text: "Causes they care about", style: "border border-primary/20 text-primary" },
          { text: "Skills they can offer", style: "bg-primary text-white" },
          { text: "Time they can give", style: "bg-primary/10 text-primary" },
          { text: "Ways of working", style: "border border-accent text-primary" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-full h-[12vw] flex items-center justify-center text-center px-[2vw] text-[1.6vw] leading-[1.3] ${item.style}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.15, type: 'spring', stiffness: 100 }}
          >
            {item.text}
          </motion.div>
        ))}
        
        <motion.div
          className="col-span-2 rounded-full h-[8vw] bg-accent text-white flex items-center justify-center text-[1.6vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, type: 'spring', stiffness: 100 }}
        >
          Optional context for a more personal fit
        </motion.div>
      </div>
    </motion.div>
  );
}
