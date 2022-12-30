

function Pinion(props){

    var receive = props.pass;

    var customStyle = {

        color: "#fff"
    }

    return <div className="setp1">

    <h1 className="number">{props.number}</h1>

     <h5 className="howTo" style={receive ? customStyle : null}>{props.how}</h5>
     
     <p className="doIt" style={receive ? customStyle : null}>{props.do}</p>
 </div>  

    }
    
    
    
        
            


export default Pinion;