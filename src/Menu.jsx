
function Menu(){
    return <div className="menu-container">
     <h1 className="collection">Our Collection</h1>
    <div className="row menu-package">
   
        <div className="col-lg-3 item">
            <div className="coffee">
             <img className="image" src="../starter-code/assets/home/desktop/image-gran-espresso.png" alt="sample-pic"/>
            </div>
            <div className="right-square">
            <h5 className="sub-title">Gran Espresso</h5>
            <p className="description">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
            </div>
            
        </div>
        <div className="col-lg-3 item">
        <div className="coffee">
        <img className="image" src="../starter-code/assets/home/desktop/image-planalto.png" alt="sample-pic"/>      
        </div>
        <div className="right-square">
        <h5 className="sub-title">Planalto</h5>
            <p className="description">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
        </div>
        
        </div>
        <div className="col-lg-3 item">
        <div className="coffee">
        <img className="image" src="../starter-code/assets/home/desktop/image-piccollo.png" alt="sample-pic"/>      
                </div>
                <div className="right-square">
                <h5 className="sub-title">Piccollo</h5>
                    <p className="description">Mild and smooth blend featuring notes of toasted almond and dried cherry</p>
                </div>
                
        </div>
        <div className="col-lg-3 item">
        <div className="coffee">
        <img className="image" src="../starter-code/assets/home/desktop/image-danche.png" alt="sample-pic"/>    
                </div>
                <div className="right-square">
                <h5 className="sub-title"> Danche</h5>
                    <p className="description">Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
                </div>
               
        </div>
    </div>

    </div>
}

export default Menu;