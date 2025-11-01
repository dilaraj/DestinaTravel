import './FrontCard.css';
import TravelIcon from '../TravelIconComponent/TravelIcon';

export default function FrontCard({ image, city, country, cost, type }) {
    return (
        <div className="frontCard-container">
            <img src={image} alt={city} className="frontCard-img" />
            <div className="frontCard-info">
                <div className="frontCard-city">{city}</div>
                <div className="frontCard-country">{country}</div>
                <div className="line"></div>
                <div className="frontCard-extraInfo">
                    <div className="frontCard-priceRange">{cost}</div>
                    <div className="frontCard-type">
                        <TravelIcon iconType={type} color='#108981'/>
                    </div>
                </div>
            </div>
        </div>
    )
}