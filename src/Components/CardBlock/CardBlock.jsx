import React from "react";
import Card from "../Card/Card";
import { cardsData } from "../../anotherData/cardsData";
import style from "./style/CardBlock.module.css";

const CardBlock = ({ count }) => {
  const cardsToDisplay = cardsData.slice(0, count);

  return (
    <div className={style.card_container}>
      {cardsToDisplay.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          price={card.price}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardBlock;
