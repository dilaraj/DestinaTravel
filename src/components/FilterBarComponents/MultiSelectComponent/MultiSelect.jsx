import { useState } from 'react';

import './MultiSelect.css';

export default function MultiSelect({ label, btnValues }) {
    const [selectedValue, setSelectedValue] = useState();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const mapBtnValues = btnValues.map((item, index) => {
        return (
            <label key={index} htmlFor={item}>
                <input
                    type="radio"
                    name={label}
                    id={item}
                    value={item}
                    className="multiSelect-btn"
                    checked={selectedValue === item}
                    onChange={handleChange}
                />
                <span className="multiSelect-btnText">{item}</span>
            </label>
        );
    })
    return (
        <div className='multiSelect-container'>
            <div className="multiSelect-label">{label}</div>
            <div className="multiSelect-btnContainer">
                <form>
                    {mapBtnValues}
                </form>
            </div>
        </div>
    );
}