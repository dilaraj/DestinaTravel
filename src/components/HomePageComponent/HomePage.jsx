import React, { useRef} from 'react';
import './HomePage.css';

// Components
import Featured from '../FeaturedComponents/Featured';
import FilterBar from '../FilterBarComponents/FilterBar';
import DestinationCard from '../DestinationCardComponent/DestinationCard';
import Footer from '../FooterComponent/Footer';

export default function HomePage() {
    const targetRef = useRef(null);
    const handleScroll = () => {
        targetRef.current?.scrollIntoView({behavior: 'smooth'});
    };
    
    return (
        <div className='homePage-container'>
            <div className="homePage-featured"><Featured handleScroll={handleScroll}/></div>
            <div className="homePage-body" ref={targetRef}>
                <div className="homePage-filterBar"><FilterBar /></div>
                <div className="homePage-destinations"><DestinationCard /></div>
            </div>
            <div className="homePage-footer"><Footer/></div>
        </div>
    )
}