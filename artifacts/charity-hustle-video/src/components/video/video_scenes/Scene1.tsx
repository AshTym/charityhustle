import { motion } from 'framer-motion';

export function Scene1() {
  const base = import.meta.env.BASE_URL;
  
  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-[55%] pr-[5vw] flex flex-col justify-center">
        <motion.div
          className="text-accent font-semibold tracking-[0.15em] uppercase text-[1.2vw] mb-[2vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          A practical guide to doing good
        </motion.div>
        
        <motion.h1
          className="font-display text-[6vw] leading-[1.05] text-primary mb-[2vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Charity Hustle
        </motion.h1>
        
        <motion.p
          className="text-[2vw] text-primary/80 leading-[1.4] max-w-[45vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Turn the things people already care about—and the skills they already have—into practical community action.
        </motion.p>
      </div>

      <div className="w-[45%] flex justify-center items-center relative">
        <motion.div
          className="w-[32vw] h-[32vw] rounded-full border border-primary/20 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="w-[28vw] h-[28vw] rounded-full overflow-hidden shadow-2xl"
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(100% at 50% 50%)' }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img 
              src={`${base}charity-hustle-home.jpg`} 
              alt="Charity Hustle"
              className="w-full h-full object-cover object-left"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-[4vw] left-[8vw] right-[8vw] flex items-center justify-between text-primary/40 uppercase tracking-[0.1em] text-[1vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span>Small actions. Real ripples.</span>
        <div className="h-px bg-primary/20 flex-1 mx-[2vw]" />
        <span>AI for practical community action</span>
      </motion.div>
    </motion.div>
  );
}
