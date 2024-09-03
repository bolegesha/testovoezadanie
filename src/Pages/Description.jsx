import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import CardBlock from "../Components/CardBlock/CardBlock";

const Description = () => {
    return (
       <>
           <Navbar/>
           <CardBlock count={4}/>
           <Footer/>
       </>
    );
};

export default Description;