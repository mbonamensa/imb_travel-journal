import { FaMapMarkerAlt } from "react-icons/fa";

function Card(props) {
    return (
        <div className="card">
            <div className="card--img">
                <img src={props.card.image}/>
            </div>
            <div className="card--details">
                <div className="card--location">
                    <div className="card--location-name">
                        <FaMapMarkerAlt className="icon"/>
                        <p>{props.card.location}</p>
                    </div>
                    <a href={props.card.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className="card--location-details">
                    <h2>{props.card.title}</h2>
                    <h4>{props.card.startDate} - {props.card.endDate}</h4>
                    <p>
                        {props.card.description}
                    </p>
                </div>
               
                
            </div>            
        </div>
    )

}

export default Card