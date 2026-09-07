import { motion } from 'framer-motion';

export function Scene10() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col justify-center px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-5vw' }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[6vw] left-[8vw] right-[8vw] flex justify-between text-[1.2vw] uppercase tracking-[0.15em]">
        <span className="text-accent font-semibold">10 / Future potential</span>
        <span className="text-primary/60">Built to complement—not replace—community expertise.</span>
      </div>

      <motion.h2
        className="font-display text-[4.8vw] leading-[1.05] text-primary mb-[6vw]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        One product. Multiple sector possibilities.
      </motion.h2>

      <div className="flex justify-between items-end h-[35vh]">
        {[
          { text: "Campaign-specific idea generators", style: "bg-primary text-white" },
          { text: "Partner and employer engagement", style: "border-[2px] border-primary/20 text-primary" },
          { text: "White-labelled charity experiences", style: "bg-primary/10 text-primary" },
          { text: "Curated local opportunity pathways", style: "border-[2px] border-accent text-primary" },
          { text: "Aggregate insight into causes and skills", style: "bg-accent text-white" }
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`w-[18%] rounded-t-[5vw] px-[1.5vw] pt-[3vw] pb-[2vw] h-full flex flex-col justify-start text-center text-[1.4vw] leading-[1.3] font-medium ${item.style}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100%', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
