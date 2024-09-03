import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import FSection from "../Components/FirstSection/FSection";
import Footer from "../Components/Footer/Footer";
import Carousel from "../Components/Carousel/Carousel";
import CardBlock from "../Components/CardBlock/CardBlock";


const MainPage = () => {
    return (
        <>
            <Navbar/>
            <FSection/>
            <CardBlock count={12}/>
            <Carousel/>
            <Footer/>
        </>
    );
};

export default MainPage;