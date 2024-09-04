import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import CardBlock from "../Components/CardBlock/CardBlock";
import DescriptionCard from "../Components/Descirption/DescriptionCard";
import style from "./MainPage/style/MainPage.module.css";

const Description = () => {
    return (
       <>
           <Navbar/>
           <DescriptionCard/>
           <div className={style.cardblock}>
                <div className={style.header}>Ваш идеальный выбор</div>
                <CardBlock count={4}/>
                <div className={style.btn}>
                    <button className={style.btn_txt}>Смотреть больше</button>
                </div>
           </div>
           <Footer/>
       </>
    );
};

export default Description;