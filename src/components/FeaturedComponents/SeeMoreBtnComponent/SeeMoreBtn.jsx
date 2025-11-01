import React, {useRef} from 'react';
import './SeeMoreBtn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function SeeMoreBtn({ scrollToTarget }) {

    return (
        <>
            <div className="btnContainer" onClick={scrollToTarget}>
                <FontAwesomeIcon icon={faCaretDown} className='arrow-down'/>
            </div>
        </>
    )
}