import { motion } from 'framer-motion';

export function Scene2() {
  const base = import.meta.env.BASE_URL;

  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col justify-center px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: 'easeOut' }}
      >
        <img 
          src={`${base}clarity-path.jpg`} 
          alt="Clarity" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </motion.div>

      <div className="relative z-10 w-[70%]">
        <motion.div
          className="text-accent font-semibold tracking-[0.15em] uppercase text-[1.2vw] mb-[2vw]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          02 / The Barrier
        </motion.div>

        <motion.h2
          className="font-display text-[5vw] leading-[1.05] text-white mb-[1.5vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Good intentions often stop at one question
        </motion.h2>

        <motion.div
          className="font-display text-[4vw] text-accent mb-[3vw]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Where do I start?
        </motion.div>

        <div className="flex flex-col gap-[1vw] text-white/80 text-[1.8vw] leading-[1.4]">
          {[
            '— People want to contribute',
            '— Time, confidence and clarity get in the way',
            '— Generic volunteering lists rarely feel personal'
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + i * 0.2, ease: 'easeOut' }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
