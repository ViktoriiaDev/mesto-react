import headerLogo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" alt='Логотип' href="#" src={headerLogo} />
    </header>
  );
}

export default Header