import React from 'react';
import style from './style/Footer.module.css'
import Logo from "../../assets/photo/black_logo.png";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.background}>
                <div className={style.container}>
                    <div className={style.left_side}>
                        <div className={style.logo}>
                          <a href="#" >
                              <img src={Logo} alt="Logo" />
                            </a>
                        </div>

                        <div className={style.text_section}>
                            <div className={style.main_txt}>
                                Мы — команда экспертов, создающих стильные и функциональные решения для вашего бизнеса. В нашем интернет-магазине вы найдете тщательно отобранные товары, которые помогут вам выделиться и добиться успеха. Мы стремимся предложить вам лучшее, объединяя качество и инновации в каждом продукте
                            </div>
                            <div className={style.copyright_mark}>
                                © Copyright MINIMALIX
                            </div>

                            <div className={style.bottom_txt}>
                                <p>Политика конфидециальности</p>
                                <p>Публичная оферта</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.right_side}>
                        <form className={style.form}>
                          <div className={style.formGroup}>
                            <div className={style.inputContainer}>
                              <label htmlFor="name">Ваше имя</label>
                              <input type="text" id="name" placeholder="Александр" />
                            </div>
                            <div className={style.inputContainer}>
                              <label htmlFor="email">Email</label>
                              <input type="email" id="email" placeholder="urban.sphere@mail.com" />
                            </div>
                          </div>

                          <div className={style.inputContainer}>
                            <label htmlFor="question">Ваш вопрос</label>
                            <input type="text" id="question" placeholder="Напиши свой вопрос" />
                          </div>

                          <button type="submit" className={style.submitBtn}>Отправить</button>

                          <div className={style.checkboxContainer}>
                            <input type="checkbox" id="agreement" />
                            <label htmlFor="agreement">Согласие с политикой обработки данных</label>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;