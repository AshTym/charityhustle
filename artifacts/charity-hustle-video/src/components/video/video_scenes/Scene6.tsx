import { motion } from 'framer-motion';

export function Scene6() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col justify-center px-[8vw] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[6vw] left-[8vw] right-[8vw] flex justify-between text-[1.2vw] uppercase tracking-[0.15em]">
        <span className="text-[#F1A28C] font-semibold">06 / Responsible AI</span>
        <span className="text-white/60">Human agency stays at the centre.</span>
      </div>

      <div className="flex items-center w-full justify-between mt-[4vw]">
        <div className="w-[45%]">
          <motion.h2
            className="font-display text-[5.5vw] leading-[1.05] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            AI that guides—without taking over
          </motion.h2>
        </div>

        <div className="w-[45%] flex flex-col gap-[2vw]">
          {[
            "Server-side AI generation",
            "Structured outputs, not open-ended chat",
            "Prompt-injection controls",
            "Global title and concept deduplication",
            "Clear failures instead of fabricated fallbacks"
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`border-b border-white/20 pb-[1.5vw] text-[1.8vw] font-medium ${i === 4 ? 'text-[#F1A28C] border-[#F1A28C]/30' : ''}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: 'easeOut' }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
