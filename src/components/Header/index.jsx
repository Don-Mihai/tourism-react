import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path/to/logo.png" alt="Logo" />
        <span className="header__title">Название</span>
      </div>

      <nav className="header__menu">
        <a href="/">Главная</a>
        <a href="/about">О нас</a>
        <a href="/hotels">Контакты</a>
        <a href="/profile">Профиль</a>
      </nav>

      <div className="header__user">
        <img src="/path/to/avatar.png" alt="User Avatar" className="header__avatar" />
      </div>
    </header>
  );
};

export default Header;
