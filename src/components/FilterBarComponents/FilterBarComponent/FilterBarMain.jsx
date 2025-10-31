import './FilterBarMain.css';
import DropDown from '../DropDownComponent/DropDown';
import MultiSelect from '../MultiSelectComponent/MultiSelect';

export default function FilterBarMain() {
    const listItems = ['Middle East & North Africa'];
    const travelValues = ['Adventure', 'Cultural', 'Relaxation'];
    const budgetValues = ['$-$$', '$$-$$$', '$$$>'];

    return(
        <>
            <div className="filterBar-header">Customise Your <span>Destina</span></div>
            <div className="filterBar-container">
                <DropDown listName="Continent" listItems={listItems}/>
                <MultiSelect label='Travel Mood' btnValues={travelValues}/>
                <MultiSelect label='Stay Within' btnValues={budgetValues}/>
            </div>
        </>
    )
}