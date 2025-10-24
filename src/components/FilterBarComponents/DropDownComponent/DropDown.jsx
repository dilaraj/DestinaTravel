import './DropDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function DropDown({ listName, listItems }) {
    const dropDownItems = listItems.map((item, index) => <li className="dropDown-listItem" key={index}>{item}</li>)
    return (
        <div className='dropDown-container'>
            <div className="dropDown-label">{listName}</div>
            <div className="dropDown-box">
                
                {dropDownItems}
                <FontAwesomeIcon icon={faCaretDown} style={{ color: '#108981', cursor: 'pointer'}}/>
            </div>
        </div>
    );
}