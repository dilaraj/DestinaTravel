import logo from '/images/destinaLogo.svg';
import './Header.css';

export default function Header() {
    return (
        <div className='headerContainer'>
            <img src={logo} alt='Destina Logo' className='logo'/>
            <div className="headerText">Destina.</div>
        </div>
    )
}
