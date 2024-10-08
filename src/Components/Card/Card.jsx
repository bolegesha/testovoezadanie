import React from "react";
import style from  "./style/Card.module.css";

const Card = ({ title, description, price, image }) => {
  return (
    <>
        <div className={style.container}>
            <div className={style.card}>
              <div className={style.card_image}>
                <img src={image} alt={title} />
              </div>
              <div className={style.card_content}>
                <h2>{title}</h2>
                <p className={style.desc}>{description}</p>
                <p className={style.price}>{price}</p>
              </div>
              <div className={style.card_action}>
                <button>Посмотреть подробнее</button>
              </div>
            </div>
        </div>
    </>
  );
};

export default Card;
