
function Navbar(props){

    function setHome(){

     props.navigate(false);

    }

    function setPlan(){

        props.navigate(true);
    }

    return <div className="navbar-container ">

    <nav className="navbar navbar-expand-lg bg-body-tertiary">

    <div className="container-fluid">

    <div className="navbar-brand" >

    <div className="nvBrand">

    <img className="icon1" src="../starter-code/assets/home/desktop/icon-coffee-bean.svg" alt="bean-img" />

    <img className="icon2" src="../starter-code/assets/home/desktop/icon-coffee-bean.svg" alt="bean-img" />

    <h3 className="brand-name">Coffeeroasters</h3>

    </div>

    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sub-menu">

    <span className="navbar-toggler-icon"></span>

    </button>

    <div className="collapse navbar-collapse" id="sub-menu">

    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

    <li className="nav-item">

       <div className="nav-link active" onClick={setHome}>HOME</div>
         
    </li>

    <li className="nav-item">

        <div className="nav-link active">ABOUT US</div>
         
    </li>

    <li className="nav-item">

    <div className="nav-link active" onClick={setPlan}>CREATE YOUR PLAN</div>
          
    </li>

    </ul>

    </div>

    </div>
    
    </nav>

    </div>
}

export default Navbar;