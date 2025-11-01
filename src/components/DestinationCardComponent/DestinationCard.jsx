import './DestinationCard.css';
import FrontCard from "./FrontCardComponent/FrontCard";
import { destinations } from "../../data/destination";
import BackCard from './BackCardComponent/BackCard';

export default function DestinationCard() {
    return (
        <>
            <div className="destinationCard-container">
                {destinations.map(dest => 
                    <>
                    <div className="destinationCard-front">
                        <FrontCard
                            image={dest.image}
                            city={dest.name}
                            country={dest.country}
                            cost={dest.cost}
                            type={dest.type}
                        />
                    </div>
                    <div className="destinationCard-back">
                        <BackCard
                            image={dest.image}
                            city={dest.name}
                            country={dest.country}
                            price={dest.cost}
                            description={dest.description}
                            type={dest.type}
                        />
                    </div>
                    </>
                )}
            </div>
            
        </>
    )
}