import React from "react";


import MessageBox from "./MessageBox";
import Button from "./Button";
import Menu from "./Menu";
import WhyChoose from "./WhyChoose";
import Card from "./Card";
import WorkSystem from "./WorkSystem";
import Footer from "./Footer";

function Home(props){

    

    return <div className="home">
    
    <div className="row display-container">
        <div className="col display-window"></div>
    </div>
     
   
    <div className="message-container">
    <MessageBox 
        letterHead = "Great coffee made simple."
        expression = "Start your mornings with the world’s best coffees. Try our expertly curated artisan 
  coffees from our best roasters delivered directly to your door, at your schedule."
    />
    </div>
    
    <Button pass={props.set}/>
    <Menu />
    <WhyChoose 
        title= "Why choose us ?"
        detail ="A large part of our role is choosing which particular coffees will be featured 
  in our range. This means working closely with the best coffee growers to give 
  you a more impactful experience on every level."
        />
      
  <div className="card-container">
  <div className ="row">
   <Card 
    img="../starter-code/assets/home/desktop/beanIcon.svg"
    littleHead = "Best quality"
    line = "Discover an endless variety of the world’s best artisan coffee from each of our roasters."
   />
   <Card 
    img = "../starter-code/assets/home/desktop/icon-gift.svg"
    littleHead="Exclusive benefits"
    line = "Special offers and swag when you subscribe, including 30% off your first shipment."
   />
   <Card 
    img="../starter-code/assets/home/desktop/icon-truck.svg"
    littleHead="Free shipping"
    line="We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."
   />
  </div>
  </div>
    
    <WorkSystem />
    <div className="system-button">
        <Button pass={props.set}/>
    </div>
    <Footer />

    </div>
}


export default Home;

