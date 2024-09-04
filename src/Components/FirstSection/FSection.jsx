import React from 'react';
import style from './style/FSection.module.css';

const FSection = () => {
    return (
        <div className={style.container}>
            <div className={style.background}>
                <div className={style.text_block}>
                    <div className={style.head_txt}>Популярные приложения: Ваш выбор среди лучших</div>
                    <div className={style.sec_txt}>Откройте для себя самые востребованные мобильные приложения, которые уже завоевали признание миллионов пользователей. Здесь собраны лидеры по загрузкам и отзывам, которые помогут вам эффективно решать задачи, развлекаться или повышать продуктивность.</div>
                </div>
                <div className={style.btn_section}>
                    <div className={style.btn}>
                        <p className={style.btn_txt}>Начать использовать</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FSection;
