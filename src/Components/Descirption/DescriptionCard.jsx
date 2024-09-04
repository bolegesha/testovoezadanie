import React from 'react';
import InfiniteCarousel from '../Carousel/Carousel';
import style from './style/DecsiptionCard.module.css';

import carousel from "../../assets/photo/cardPhoto.jpeg";
import carousel2 from '../../assets/photo/carousel4.jpeg';

const images = [carousel, carousel2, carousel, carousel2, carousel];

const DescriptionCard = () => {
  return (
    <div className={style.container}>
      <div className={style.carouselSection}>
        <InfiniteCarousel images={images} />
      </div>
       <div className={style.images}>
                    <img src={carousel} alt="image1" />
                    <img src={carousel} alt="image2" />
                    <img src={carousel} alt="image3" />
                    <img src={carousel} alt="image4" />
                    <img src={carousel} alt="image5" />
                </div>
      <div className={style.text_block}>
        <h1>MindWave - помогает вам найти внутренний баланс и сосредоточенность в повседневной жизни</h1>
        <p className={style.price}>620 900 ₸</p>
        <h2>Преимущества:</h2>
        <ol>
          <li>Разнообразие медитаций – широкий выбор медитаций для разных целей: расслабление, улучшение концентрации, снижение стресса</li>
          <li>Персонализированные программы – адаптированные медитации под ваши потребности и уровень опыта</li>
          <li>Трекер прогресса – отслеживайте свое развитие и достигайте новых высот в практике медитации.</li>
          <li>Удобный интерфейс – интуитивно понятное управление, которое позволяет легко находить и использовать нужные функции.</li>
          <li>Оффлайн-доступ – занимайтесь медитацией в любое время и в любом месте, даже без интернета.</li>
        </ol>
        <div className={style.btn}>
          <button className={style.btn_txt}>Купить в один клик</button>
        </div>
        <h2 className={style.o_header}>Описание:</h2>
        <p className={style.opisanie}>MindWave — MindWave — это приложение, созданное для тех, кто стремится к внутреннему покою и ясности мышления. Оно предлагает разнообразные медитации, которые помогут вам улучшить концентрацию, снизить уровень стресса и достичь гармонии в повседневной жизни.</p>
        <p className={style.opisanie}>Независимо от вашего опыта в медитации, MindWave адаптируется под ваши нужды, предлагая персонализированные программы и рекомендации. Удобный интерфейс позволяет легко находить нужные сеансы, а трекер прогресса помогает следить за вашими достижениями.</p>
        <p className={style.opisanie}>Приложение также поддерживает оффлайн-доступ, чтобы вы могли медитировать в любом месте и в любое время. MindWave — ваш надёжный спутник на пути к улучшению качества жизни и обретению внутреннего баланса.</p>
      </div>
    </div>
  );
};

export default DescriptionCard;
