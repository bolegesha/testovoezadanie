import React, { useState, useEffect } from 'react';
import style from './style/MainPage.module.css';
import Navbar from "../../Components/Navbar/Navbar";
import FSection from "../../Components/FirstSection/FSection";
import Footer from "../../Components/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";
import CardBlock from "../../Components/CardBlock/CardBlock";

import carousel1 from '../../assets/photo/carousel1.jpeg';
import carousel2 from '../../assets/photo/carousel2.jpeg';
import carousel3 from '../../assets/photo/carousel3.jpeg';
import carousel4 from '../../assets/photo/carousel4.jpeg';
import carousel5 from '../../assets/photo/carousel5.jpeg';

const images = [carousel1, carousel2, carousel3, carousel4, carousel5];

const MainPage = () => {
    const [cardCount, setCardCount] = useState(12);


    useEffect(() => {
        const updateCardCount = () => {
            if (window.innerWidth <= 768) {
                setCardCount(4);
            } else {
                setCardCount(12);
            }
        };

        updateCardCount();
        window.addEventListener('resize', updateCardCount);

        return () => {
            window.removeEventListener('resize', updateCardCount);
        };
    }, []);

    return (
        <>
            <div className={style.container}>
                <Navbar/>
                <FSection/>
                <div className={style.cardblock}>
                    <div className={style.header}>Новые релизы: Будьте первыми в тренде</div>
                    <CardBlock count={cardCount}/>
                    <div className={style.btn}>
                        <button className={style.btn_txt}>Смотреть больше</button>
                    </div>
                </div>

                <div className={style.header}>
                    <p className={style.headerText}>Откройте визуальный мир приложений</p>
                </div>
                <Carousel images={images}/>
                <Footer/>
            </div>
        </>
    );
};

export default MainPage;
