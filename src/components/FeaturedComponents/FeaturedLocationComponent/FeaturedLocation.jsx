import {destinations} from '../../../data/destination';
import './FeaturedLocation.css';


export default function FeaturedLocation() {
    // Selecting Random Featured Location 
    const max = destinations.length;
    const randomID = destinations[Math.floor(Math.random() * destinations.length)];

    return (
        <>
            <div className="featuredLocationContainer" style={{backgroundImage: `url(${randomID.image})`}}>
                <div className="imageCover">
                    <div className="textContainer">
                        
                    </div>
                </div>
            </div>
        </>
    )
}