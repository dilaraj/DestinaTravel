import FeaturedLocation from "./FeaturedLocationComponent/FeaturedLocation";

export default function Featured({ handleScroll }) {
    return (
        <section>
            <FeaturedLocation handleScroll={handleScroll}/>
        </section>
    )
}