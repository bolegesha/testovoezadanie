import React, { useState } from 'react';
import style from './style/Navbar.module.css';
import WhatsAppIcon from '../../assets/icons/whatsapp.png';
import TelegramIcon from '../../assets/icons/telegram.png';
import Logo from '../../assets/photo/logo.png';
import MenuIcon from '../../assets/icons/burgerMenu.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <div className={style.burgerMenu} onClick={toggleMenu}>
          <img src={MenuIcon} alt="Menu" />
        </div>

        <div className={style.logo}>
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        <nav className={`${style.nav_links} ${menuOpen ? style.menuOpen : ''}`}>
          <a href='/description'>Популярные приложения</a>
          <a href='/description'>Новые релизы</a>
          <a href='/description'>Для бизнеса</a>
          <a href='/description'>Инструменты и утилиты</a>
        </nav>

        <div className={`${style.contact_info} ${menuOpen ? style.menuOpen : ''}`}>
          <a href="/" className={style.about_us}>О нас</a>
          <div className={style.contact_icon_wtsp}>
            <a href="/" className={style.icon}>
              <img src={WhatsAppIcon} alt="WhatsApp" />
            </a>
          </div>
          <div className={style.contact_icon_tlgrm}>
            <a href="/" className={style.icon}>
              <img src={TelegramIcon} alt="Telegram" />
            </a>
          </div>
          <div className={style.phone_number}>
            +7 (728) 549-3021
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={style.menuOpen}>
          <ul className={style.modalNav}>
            <li><a href='/description'>Популярные приложения</a></li>
            <li><a href='/description'>Новые релизы</a></li>
            <li><a href='/description'>Для бизнеса</a></li>
            <li><a href='/description'>Инструменты и утилиты</a></li>
            <li><a href="/">О нас</a></li>
          </ul>
          <div className={style.contact_info}>
            <div className={style.contact_icon_wtsp}>
              <a href="/" className={style.icon}>
                <img src={WhatsAppIcon} alt="WhatsApp" />
              </a>
            </div>
            <div className={style.contact_icon_tlgrm}>
              <a href="/" className={style.icon}>
                <img src={TelegramIcon} alt="Telegram" />
              </a>
            </div>
            <div className={style.phone_number}>
              +7 (728) 549-3021
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
