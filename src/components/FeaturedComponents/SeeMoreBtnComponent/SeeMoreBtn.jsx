import './SeeMoreBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function SeeMoreBtn() {
    return (
        <>
            <div className="btnContainer">
                <FontAwesomeIcon icon={faCaretDown} className='arrow-down'/>
            </div>
        </>
    )
}