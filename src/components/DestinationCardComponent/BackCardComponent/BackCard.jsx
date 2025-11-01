import './BackCard.css';
import TravelIcon from '../TravelIconComponent/TravelIcon';

export default function BackCard({ image, city, country, price, description, type}) {
    return (
        <div className="backCard-container" style={{backgroundImage: `url(${image})`}}>
            <div className="backCard-locationInfo">
                <div className="backCard-city">{city},</div>
                <div className="backCard-country">{country}</div>
                <div className="line"></div>
                <div className="backCard-cost">{price}</div>
            </div>
            <div className="backCard-description">{description}</div>
            <div className="backCard-travelType">
                <div className="backCard-travelTypeText">{type}</div>
                <TravelIcon iconType={type} color='#FFFFFF' />
            </div>

        </div>
    )
}