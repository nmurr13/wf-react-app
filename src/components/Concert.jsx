import { Link } from "react-router-dom"

export default function Concert({ concert}) {
    
    return (
        <div>
            <Link to={`${concert.id}`}>
                <h2>{concert.lineup}</h2>
                <img src={concert.flyerUrl} alt="flyer"/>
                <h2>{concert.date}</h2>
                <h2>{concert.venue}</h2>
                <h2>{concert.price}</h2>
            </Link>
        </div>
    )
}