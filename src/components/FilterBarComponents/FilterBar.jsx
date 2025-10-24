import DropDown from "./DropDownComponent/DropDown";

export default function FilterBar() {
    const listItems = ['Middle East & North Africa'];

    return (
        <DropDown listName="Continent" listItems={listItems}/>
    )
}