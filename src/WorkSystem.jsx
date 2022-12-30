import React from "react";
import Chain from "./Chain";
import Pinion from "./Pinion";

function WorkSystem(props){

    return <div className="system-box">

    <h6 className="how">How it work</h6>

     <Chain />

    <div className="row step1-container">
    <div className="col-sm-12 col-md-4 col-lg-4 setp1-box">
    <Pinion 
        number="01"
        how = "Pick your coffee"
        do = "Select from our evolving range of artisan coffees. Our beans are ethically 
  sourced and we pay fair prices for them. There are new coffees in all profiles 
  every month for you to try out. "
    />

    </div>
    
<div className="col-sm-12 col-md-4 col-lg-4 setp1-box">

<Pinion 
        number= "02"
        how = "Choose the frequency"
        do = " Customize your order frequency, quantity, even your roast style and grind type. 
  Pause, skip or cancel your subscription with no commitment through our online portal.
"
    />
</div>
    
<div className="col-sm-12 col-md-4 col-lg-4 setp1-box">
<Pinion 
        number = "03"
        how = "Receive and enjoy!"
        do = "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
  world-class coffees curated to provide a distinct tasting experience.
"
    />

</div>
    
    </div>
   </div>
    
}


export default WorkSystem;