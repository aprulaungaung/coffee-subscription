

function Footer(props){

    function goBackHome(){

      props.pass(false);
    }

    function setPlan(){
       
        // props.pass(true);
    }

    return <div className=" row footer-container">


    <div className="col-lg-4 brand-container" >
    
    <img className="bean1" src="../starter-code/assets/home/desktop/icon-coffee-bean.svg" alt="bean-img" />
    <img className="bean2" src="../starter-code/assets/home/desktop/icon-coffee-bean.svg" alt="bean-img" />
    <h3 className="brand-name footer-name">Coffeeroasters</h3>
  
    </div>
    
    <div className="col-lg-4 category">
     <div className="row item-window">
     <div className="col footage" onClick={goBackHome}>HOME</div>
  
     <div className="col footage">ABOUT US</div>
    
     <div className="col footage" onClick={setPlan}>CREATE YOUR PLAN</div>
           
     </div>
       
    </div>
    <div className="col-lg-4 social-media">
      <div className="row media-window">
      <div className="col facebook">
            <img className="media-icon" src="../starter-code/assets/shared/desktop/icon-facebook.svg" alt="media"></img>
        </div>
        <div className="col twitter">
        <img className="media-icon" src="../starter-code/assets/shared/desktop/icon-twitter.svg" alt="media"></img>
        </div>
        <div className="col inster">
        <img className="media-icon" src="../starter-code/assets/shared/desktop/icon-instagram.svg" alt="media"></img>
        </div>
      </div>
        
    </div>
    </div>
    
}


export default Footer;