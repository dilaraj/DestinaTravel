import './DestinationCard.css';
import FrontCard from "./FrontCardComponent/FrontCard";
import { destinations } from "../../data/destination";

export default function DestinationCard() {
    return (
        <>
            <div className="destinationCard-container">
                {destinations.map(dest => 
                    <FrontCard
                        image={dest.image}
                        city={dest.name}
                        country={dest.country}
                        cost={dest.cost}
                        type={dest.type}
                    />
                )}
            </div>
        </>
    )
}