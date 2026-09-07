import { motion } from 'framer-motion';

export function ContinuousLayers({ currentScene }: { currentScene: number }) {
  const isTealBg = currentScene === 5 || currentScene === 11;
  const isImageTealBg = currentScene === 1 || currentScene === 8;
  const isCreamBg = !isTealBg && !isImageTealBg;

  // Background color interpolation
  const bgColor = isTealBg || isImageTealBg ? 'var(--color-primary)' : 'var(--color-bg-light)';

  return (
    <>
      <motion.div
        className="absolute inset-0 z-0"
        initial={false}
        animate={{ backgroundColor: bgColor }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Abstract floating circles for depth */}
      <motion.div
        className="absolute z-0 rounded-full bg-accent opacity-[0.03]"
        initial={false}
        animate={{
          width: currentScene % 2 === 0 ? '40vw' : '50vw',
          height: currentScene % 2 === 0 ? '40vw' : '50vw',
          top: currentScene % 3 === 0 ? '-10vw' : '20vw',
          left: currentScene % 2 === 0 ? '-10vw' : '60vw',
          scale: currentScene === 11 ? 2 : 1,
        }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute z-0 rounded-full border-[2px] border-primary opacity-[0.05]"
        initial={false}
        animate={{
          width: currentScene % 2 === 1 ? '60vw' : '30vw',
          height: currentScene % 2 === 1 ? '60vw' : '30vw',
          bottom: currentScene % 3 === 1 ? '-10vw' : '10vw',
          right: currentScene % 2 === 1 ? '-20vw' : '40vw',
          rotate: currentScene * 45,
        }}
        transition={{ duration: 5, ease: 'linear' }}
      />
    </>
  );
}
