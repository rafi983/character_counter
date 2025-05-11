import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import logoDark from '/assets/logo-dark-theme.svg';
import logoLight from '/assets/logo-light-theme.svg';
import useTheme from '@/hooks/useTheme';

const Header = () => {
  const { theme } = useTheme();
  return (
    <nav className="flex items-center justify-between">
      <img src={theme === 'light' ? logoLight : logoDark} alt="logo" />
      <ThemeSwitcher />
    </nav>
  );
};

export default Header;
