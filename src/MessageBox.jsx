import React from "react";


function MessageBox(props){

    var plan = props.option;

    var colorOnTheFly ={color: "#227C70"};

    function handleClick(){
     var selection =<span style={colorOnTheFly}> {props.letterHead} </span>;
    
     props.set(selection);

     props.shift();

    }

    return <div className="message-package" onClick={plan ? handleClick : null}>
    {plan ? <h5 className="tier2">{props.letterHead}</h5> : <h1 className="tier1">{props.letterHead}</h1>}
    {plan? <p className="detail1 detail">{props.expression}</p> : <p className="content">{props.expression}</p>}
    
</div>
        
  
}

export default MessageBox;