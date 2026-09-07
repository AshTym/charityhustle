import { motion } from 'framer-motion';

export function Scene11() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[6vw] left-[8vw] text-[1.2vw] uppercase tracking-[0.15em] text-accent font-semibold">
        11 / Trust
      </div>

      <div className="w-[45%] pr-[4vw]">
        <motion.h2
          className="font-display text-[4.8vw] leading-[1.05] text-primary mb-[3vw]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Responsible foundations for growth
        </motion.h2>
        <motion.p
          className="font-display text-[2.5vw] text-accent italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Trust should scale with the product.
        </motion.p>
      </div>

      <div className="w-[55%] grid grid-cols-2 gap-y-[1.5vw] gap-x-[1.5vw]">
        {[
          { text: "Persistent, shareable idea records", style: "bg-primary text-white" },
          { text: "Anonymous generation quotas", style: "border-[2px] border-primary/20 text-primary" },
          { text: "Database-backed concurrency controls", style: "border-[2px] border-primary/20 text-primary" },
          { text: "Sanitised user-facing failures", style: "bg-primary/10 text-primary border-[2px] border-transparent" },
          { text: "Privacy-conscious custom analytics", style: "border-[2px] border-accent text-primary" },
          { text: "No questionnaire free text sent to analytics", style: "bg-accent text-white" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-[1vw] p-[1.5vw] text-[1.4vw] font-medium leading-[1.3] flex items-center min-h-[6vw] ${item.style}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.1, type: 'spring' }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
