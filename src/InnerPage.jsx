import React, {useState} from "react";

import Pinion from "./Pinion";
import Chain from "./Chain";
import MessageBox from "./MessageBox";
import SelectionPackage from "./SelectionPackage";
import Button from "./Button";
import Footer from "./Footer";


function InnerPage(props){

  // set count to change the option depending on user preferences
  const[count, setCount] = useState(1);

  // set state to accumalate the option selected by user in an array
  const[selection, setSelection] = useState([]);

  function handleClick(){

    setCount(count + 1);
    
  }

  var myStyle = {
    color: "#227C70"
   
  }

  function createPlan(mySelection){

   setSelection(prevValue =>{

    return [

      ...prevValue, mySelection

    ];
   })
   console.log(selection);
  }

  // return section ////////////////////////////////////////////////////////


   return <div className="inner-container">

  <div className="row inner-div">
  <div className="col inner-screen"></div>

  </div>

  <div className="row gear-container">

   <Chain />
 <div className="col-md-4 pinion-box">
 <Pinion 
        number="01"
        how = "Pick your coffee"
        do = "Select from our evolving range of artisan coffees. Our beans are ethically 
  sourced and we pay fair prices for them. There are new coffees in all profiles 
  every month for you to try out. "
       pass = {props.isCreate}
    />

 </div>
    
 <div className="col-md-4 pinion-box">
 <Pinion 
        number= "02"
        how = "Choose the frequency"
        do = " Customize your order frequency, quantity, even your roast style and grind type. 
  Pause, skip or cancel your subscription with no commitment through our online portal.
"
        pass = {props.isCreate}
    />

 </div>
   
 <div className="col-md-4 pinion-box">
 <Pinion 
        number = "03"
        how = "Receive and enjoy!"
        do = "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
  world-class coffees curated to provide a distinct tasting experience.
"
      pass = {props.isCreate}
    />

 </div>

  </div>

  <div className="option-box">

    <div className="row mainContainer">

      <div className="col-md-3">

        <div className="option-bundle">

          <h5 className="srNo" style={count === 1 ? myStyle : null}>01</h5>

         
          <h5 className="option">Preferences</h5>

          
        </div>

        <div className="option-bundle">

        <h5 className="srNo" style={count === 2 ? myStyle : null}>02</h5>

          <h5 className="option">Bean type</h5>

        </div>

        <div className="option-bundle">

        <h5 className="srNo" style={count === 3 ? myStyle : null}>03</h5>

          <h5 className="option">Quantity</h5>

        </div>

        <div className="option-bundle">

        <h5 className="srNo" style={count === 4 ? myStyle : null}>04</h5>

          <h5 className="option">Grind option</h5>

        </div>

        <div className="option-bundle">

        <h5 className="srNo" style={count === 5 ? myStyle : null}>05</h5>

          <h5 className="option">Deliveries</h5>

        </div>

      </div>

      <div className="col-md-9 right-window">

        <div className="row innerPocket-container">
       
        <div className="section-head">

        {count === 1 ?<h4 className="section-title">How do you drink your coffee?</h4> : null}

        {count === 2 ?<h4 className="section-title"> What type of coffee?</h4>: null}

        {count === 3 ?<h4 className="section-title">How much would you like?</h4>: null}

        {count === 4 ?<h4 className="section-title">Want us to grind them?</h4>: null}

        {count === 5 ?<h4 className="section-title">  How often should we deliver?</h4>: null}

        {count > 5 ? setCount(1): null}

        <div className="arrow" onClick={handleClick}>

          <img src="../starter-code/assets/plan/desktop/icon-arrow.svg" alt="arrow-icon" />

        </div>
        

        </div>
       
        <div className="col-md-4 inner-col">

        <div className="inner-pocket">

     {count === 1 ? 

      <MessageBox 
       letterHead=" Capsule"
       expression="Compatible with Nespresso systems and similar brewers"
       option={props.isCreate}
       set = {createPlan}
       shift = {handleClick}
       />


     : null}
     {count === 2 ? 
      <MessageBox 
       letterHead="  Single origin"
       expression="Distinct, high quality coffee from a specific family-owned farm"
       option={props.isCreate}
       set = {createPlan}
       shift = {handleClick}
       />
     : null}

     {count === 3 ? 
      <MessageBox 
       letterHead="250g  "
       expression=" Perfect for the solo drinker. Yields about 12 delicious cups. "
       option={props.isCreate}
       set = {createPlan}
       shift = {handleClick}
       />
     : null}

     {count === 4 ? 
      <MessageBox 
       letterHead="  Wholebean"
       expression="  Best choice if you cherish the full sensory experience "
       option={props.isCreate}
       set = {createPlan}
       shift = {handleClick}
       />
     : null}

     {count === 5 ? 
      <MessageBox 
       letterHead="  Every week "
       expression=" $14.00 per shipment. Includes free first-class shipping. "
       option={props.isCreate}
       set = {createPlan}
       shift = {handleClick}
       />
     : null}
      
        </div>

      </div>

      <div className="col-md-4 inner-col">

      <div className="inner-pocket">

      {count === 1 ? 
        <MessageBox 
        letterHead = "Filter"
        expression = "For pour over or drip methods like Aeropress, Chemex, and V60"
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
      />
      : null}

      {count === 2 ? 
        <MessageBox 
        letterHead = " Decaf"
        expression = " Just like regular coffee, except the caffeine has been removed"
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
      />
      : null}

      {count === 3 ? 
        <MessageBox 
        letterHead = " 500g "
        expression = "Perfect option for a couple. Yields about 40 delectable cups. "
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
      />
      : null}

      {count === 4 ? 
        <MessageBox 
        letterHead = "   Filter "
        expression = " For drip or pour-over coffee methods such as V60 or Aeropress"
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
      />
      : null}

      {count === 5 ? 
        <MessageBox 
        letterHead = "  Every 2 weeks "
        expression = "$17.25 per shipment. Includes free priority shipping. "
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
      />
      : null}
      
      </div>

      </div>

      <div className="col-md-4 inner-col">

      <div className="inner-pocket">

      {count === 1 ? 
        <MessageBox 
        letterHead = " Espresso"
        expression = " Dense and finely ground beans for an intense, flavorful experience"
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
        />
      : null}

      {count === 2 ? 
        <MessageBox 
        letterHead = "Blended "
        expression = " Combination of two or three dark roasted beans of organic coffees"
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
        />
      : null}

      {count === 3 ? 
        <MessageBox 
        letterHead = "  1000g"
        expression = " Perfect for offices and events. Yields about 90 delightful cups. "
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
        />
      : null}

      {count === 4 ? 
        <MessageBox 
        letterHead = "Cafetiére "
        expression = " Course ground beans specially suited for french press coffee"
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
        />
      : null}

      {count === 5 ? 
        <MessageBox 
        letterHead = "Every month"
        expression = " $22.50 per shipment. Includes free priority shipping."
        option={props.isCreate}
        set = {createPlan}
        shift = {handleClick}
        />
      : null}
      
      </div>

      </div>

      </div>

      </div>
      
    </div>

  </div>
    
    <div className="summary">

    <SelectionPackage option = {selection}/>

    </div>

    <div className="button-receiver">

     <Button plan={props.isCreate}/>

    </div>

    <div className="footWare">

   <Footer pass={props.change}/>
   
    </div>

    </div>
}

export default InnerPage;