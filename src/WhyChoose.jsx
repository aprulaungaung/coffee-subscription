

function WhyChoose(props){

    return <div className="why-choose-container">

        <div className="why-choose">

            <h1 className="choose">{props.title}</h1>

            <p className="reason">{props.detail}</p>
            
        </div>
    </div>
}

export default WhyChoose;