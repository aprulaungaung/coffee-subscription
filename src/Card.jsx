
function Card(props){

    return <div className="col-lg-4 card">
    <div className="row">
    <div className="card-logo">
    <img className= "icon" src={props.img} alt="bean"/>
    </div>
    <div className="card-body card-main">
        <h6 className="small-title">{props.littleHead}</h6>
        <p className="info">{props.line}</p>
    </div>
    </div>
    
 </div>
        
    
}

export default Card;