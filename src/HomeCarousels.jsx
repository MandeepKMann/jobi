import { urlFor } from './sanity';
import './HomeCarousels.scss';
import { useState } from 'react';

const HomeCarousels = ({talent}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const displayWindow = 4;

    const slideLeft = () => {
        if (currentSlide === 0) {
            setCurrentSlide(displayWindow - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const slideRight = () => {
        if (currentSlide === (talent.length - 1)) {
            setCurrentSlide(0)
        } else if (currentSlide === (displayWindow - 1)){
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }


    return (
        <>
            <section className="talentSection wrapper">
                <div className="talentTitle">
                    <h2>Find the best talent on jobi.</h2>
                    <div className="talentButtons">
                        <button className="carouselArrowLeft" tabIndex="1" onClick={slideLeft}>&#8592;</button>
                        <button className="carouselArrowRight" tabIndex="1" onClick={slideRight}>&#8594;</button>
                    </div>
                </div>
                <div className="talentCarousel">
                    <div className="talentInner">
                        {talent.map((person) => {
                            return (
                                <div key={person._id} className="talentCard"                                 style={{ width: `calc(100% / ${displayWindow})`,transform: `translateX(-${currentSlide * 148}%)` }}>
                                    <div className="talentImg">
                                        <img src={urlFor(person.portrait)} alt={`a picture of ${person.name}`} />
                                    </div>
                                    <div className="talentInfo">
                                        <h5>{person.name}</h5>
                                        <p>{person.role}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="reviewSection wrapper">
                <h2>Trusted by leading startups.</h2>


                <div className="partnerLogos">
                    {/* images for partner logos */}
                </div>
            </section>
        </>
    )
}

export default HomeCarousels;