
function Button(props){

    var setPlan = props.plan;

    return <div className="button-container">

        <button className="create" type="button" onClick={props.pass}>{setPlan ?"Create my plan!" :"Create your plan"}</button>
        
    </div>
}

export default Button;