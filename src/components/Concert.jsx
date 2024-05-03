import { Link } from "react-router-dom"

export default function Concert({ concert}) {
    
    // const id = concert.url.split('/') [4]
    return (
        <div>
            <Link to={`concerts/${concert.id}`}>
                <h2>{concert.lineup}</h2>
                <img src={concert.flyerUrl} alt="flyer"/>
                <h2>{concert.date}</h2>
                <h2>{concert.venue}</h2>
                <h2>{concert.price}</h2>
            </Link>
        </div>
    )
}