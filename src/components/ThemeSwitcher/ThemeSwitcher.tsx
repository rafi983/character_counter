import useTheme from '@/hooks/useTheme';
import iconMoon from '/assets/icon-moon.svg';
import iconSun from '/assets/icon-sun.svg';
import { AnimatePresence, motion } from 'motion/react';
import { animationVariant } from '@/lib/animation';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      className="flex size-11 flex-col items-center justify-center overflow-hidden rounded-lg bg-counter-neutral-400 dark:bg-counter-neutral-700"
      onClick={handleTheme}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme && (
          <motion.img
            key={theme}
            {...animationVariant(0.25)}
            src={theme === 'light' ? iconMoon : iconSun}
            alt="icon"
          />
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeSwitcher;
