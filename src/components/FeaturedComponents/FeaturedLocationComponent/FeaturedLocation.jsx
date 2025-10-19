import {destinations} from '../../../data/destination';
import Header from '../HeaderComponent/Header';
import SeeMoreBtn from '../SeeMoreBtnComponent/SeeMoreBtn';
import './FeaturedLocation.css';


export default function FeaturedLocation() {
    // Selecting Random Featured Location 
    const randomID = destinations[Math.floor(Math.random() * destinations.length)];

    return (
        <>
            <div className="featuredLocationContainer" style={{backgroundImage: `url(${randomID.image})`}}>
                <div className="imageCover">
                    <div className="headerContainer"><Header/></div>
                    <div className="textContainer">
                        <div className="randomLocation-name">
                            <div className="randomLocation-nameBox">
                                <div className="randomLocation-city">{randomID.name},</div>
                                <div className="randomLocation-country">{randomID.country}</div>
                            </div>
                            <div className="randomLocation-cost">{randomID.cost}</div>
                        </div>
                        <div className="randomDescription">
                            {randomID.description}
                        </div>
                    </div>
                    <div className="seeMore-Container"><SeeMoreBtn /></div>
                </div>
            </div>
        </>
    )
}