import { motion } from 'framer-motion';

export function Scene7() {
  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col justify-center px-[8vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-[6vw] left-[8vw] right-[8vw] flex justify-between text-[1.2vw] uppercase tracking-[0.15em]">
        <span className="text-accent font-semibold">07 / Action pathway</span>
        <span className="text-primary/40">Charity Hustle</span>
      </div>

      <motion.h2
        className="font-display text-[4.8vw] leading-[1.05] text-primary mb-[6vw]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        From an idea to an action pathway
      </motion.h2>

      <div className="flex items-center justify-between w-full">
        {[
          {
            title: "GENERATE",
            desc: "Keep the ideas that feel right",
            style: "bg-primary text-white border border-primary",
          },
          {
            title: "SAVE",
            desc: "Copy a first step",
            style: "border border-primary text-primary",
          },
          {
            title: "SHARE",
            desc: "Share a permanent idea link",
            style: "bg-accent text-white border border-accent",
          },
          {
            title: "CONNECT",
            desc: "Find relevant organisations",
            style: "border border-accent text-accent",
          }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center w-[20%] relative">
            <motion.div
              className={`w-[11vw] h-[11vw] rounded-full flex items-center justify-center text-[1.6vw] font-semibold mb-[2vw] z-10 ${step.style}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.2, type: 'spring' }}
            >
              {step.title}
            </motion.div>
            <motion.p
              className="text-[1.6vw] leading-[1.3] text-primary font-medium px-[1vw]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.2 }}
            >
              {step.desc}
            </motion.p>

            {i < 3 && (
              <motion.div
                className="absolute top-[5.5vw] -right-[12vw] w-[14vw] h-[2px] bg-accent/30 z-0 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
