import { motion } from 'framer-motion';

export function Scene4() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col justify-center px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[6vw] left-[8vw] text-[1.2vw] uppercase tracking-[0.15em] text-accent font-semibold">
        04 / The AI mix
      </div>

      <motion.h2
        className="font-display text-[4.5vw] leading-[1.05] text-primary w-[75%] mb-[6vw]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        AI turns intention into six grounded starting points
      </motion.h2>

      <div className="flex items-center justify-between w-full">
        {[
          {
            title: "NOTICE",
            desc: "Understand context",
            style: "border border-primary/20 bg-primary/5 text-primary",
            titleStyle: "text-accent"
          },
          {
            title: "MIX",
            desc: "Combine cause, capability and capacity",
            style: "bg-primary text-white text-center",
            titleStyle: "text-accent"
          },
          {
            title: "GO",
            desc: "Generate six distinct ideas",
            style: "border border-accent text-primary",
            titleStyle: "text-accent"
          },
          {
            title: "",
            desc: "Make the first move feel possible",
            style: "bg-accent text-white",
            titleStyle: ""
          }
        ].map((step, i) => (
          <motion.div
            key={i}
            className={`w-[21%] h-[18vw] rounded-[2vw] p-[2vw] flex flex-col justify-center ${step.style} ${i === 1 ? 'items-center' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 + i * 0.2, type: 'spring', stiffness: 120 }}
          >
            {step.title && (
              <div className={`text-[1vw] tracking-[0.15em] font-semibold mb-[1vw] ${step.titleStyle}`}>
                {step.title}
              </div>
            )}
            <p className="text-[1.8vw] leading-[1.3] font-medium">{step.desc}</p>
          </motion.div>
        ))}

        {/* Arrows */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`arrow-${i}`}
            className="absolute text-accent text-[2.5vw]"
            style={{ left: `${13 + i * 23.5}vw`, bottom: '22vw' }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
          >
            →
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
