import React from "react";

function SelectionPackage(props){

    var optionSummary = props.option;
    
    return <div className="selection-container">

    <div className="final-selection">

    <p className="order">ORDER SUMMARY</p>

   <h6 className="detail-expression">

   “I drink coffee {optionSummary[0]} with a {optionSummary[1]} type of bean. {optionSummary[2]} ground ala {optionSummary[3]} , 

  sent to me {optionSummary[4]} .”
  
  </h6>

    </div>

    </div>
}


export default SelectionPackage;