import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrellaBeach, faMosque, faCompass } from '@fortawesome/free-solid-svg-icons';

export default function TravelIcon({ iconType, color }) {
    if (iconType === 'Culture') {
        return <FontAwesomeIcon icon={faMosque} style={{color: {color}}}/>
    } else if (iconType === 'Adventure') {
        return <FontAwesomeIcon icon={faCompass} style={{color: {color}}}/>
    } else if (iconType === 'Relaxation') {
        return <FontAwesomeIcon icon={faUmbrellaBeach} style={{color: {color}}}/>
    } 
}