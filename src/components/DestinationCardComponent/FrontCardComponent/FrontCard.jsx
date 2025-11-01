import './FrontCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faMosque, faCompass } from '@fortawesome/free-solid-svg-icons';

function TravelIcon({ iconType }) {
    if (iconType === 'Culture') {
        return <FontAwesomeIcon icon={faMosque} style={{color: '#108981'}}/>
    } else if (iconType === 'Adventure') {
        return <FontAwesomeIcon icon={faCompass} style={{color: '#108981'}}/>
    } else if (iconType === 'Relaxation') {
        return <FontAwesomeIcon icon={faUmbrellaBeach} style={{color: '#108981'}}/>
    } 
}

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
                        <TravelIcon iconType={type}/>
                    </div>
                </div>
            </div>
        </div>
    )
}