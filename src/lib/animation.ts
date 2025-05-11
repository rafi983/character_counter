export const animationVariant = (duration: number) => ({
  initial: { y: '-100%', opacity: 0 },
  animate: {
    y: '0%',
    opacity: 1
  },
  transition: {
    type: 'spring',
    bounce: 0,
    duration
  },
  exit: {
    y: '100%',
    opacity: 0
  }
});
