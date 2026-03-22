const Card = (props) => {
    console.log(props.company);
    return (
        <div className="card">
            <div className="top">
                <div className="img">
                    <img src={props.logo}></img>
                </div>
                <div className="save">Save</div>
            </div>
            <div className="mid">
                <div className="name">
                    <h4>{props.company}</h4>
                    <h6>{props.dateposted}</h6>
                </div>
                <p>{props.position}</p>
                <div className="needs">
                    <h6>{props.tag1}</h6>
                    <h6>{props.tag2}</h6>
                </div>
            </div>
            <div className="bottom">
                <div className="salary">
                    <h3>{props.pay}</h3>
                    <h6>{props.location}</h6>
                </div>
                <div className="apply">Apply now</div>
            </div>
        </div>
    )
}

export default Card;