import { urlFor } from './sanity';
import './HomeCarousels.scss';
import { useState } from 'react';

const HomeCarousels = ({talent, review}) => {

    const [talentSlide, setTalentSlide] = useState(0);
    const [reviewSlide, setReviewSlide] = useState(0);

    const slideLeft = (currentSlide, setCurrentSlide, maxClicks) => {
        if (currentSlide === 0) {
            setCurrentSlide(maxClicks - 1)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const slideRight = (currentSlide, setCurrentSlide, maxClicks, array) => {
        if (currentSlide === (array.length - 1)) {
            setCurrentSlide(0)
        } else if (currentSlide === (maxClicks - 1)){
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }

    console.log(reviewSlide)

    return (
        <>
            <section className="talentSection wrapper">
                <div className="talentTitle">
                    <h2>Find the best talent on jobi.</h2>
                    <div className="talentButtons">
                        <button className="carouselArrowLeft" tabIndex="1" onClick={() => slideLeft(talentSlide, setTalentSlide, 4)}>&#8592;</button>
                        <button className="carouselArrowRight" tabIndex="1" onClick={() => slideRight(talentSlide, setTalentSlide, 4, talent)}>&#8594;</button>
                    </div>
                </div>
                <div className="talentCarousel">
                    <div className="talentInner">
                        {talent.map((person) => {
                            return (
                                <div key={person._id} className="talentCard"                                 style={{ transform: `translateX(-${talentSlide * 148}%)` }}>
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
                <div className="reviewTitle">
                    <h2>Trusted by leading startups.</h2>
                    <div className="talentButtons">
                        <button className="carouselArrowLeft" tabIndex="1" onClick={() => slideLeft(reviewSlide, setReviewSlide, 4)}>&#8592;</button>
                        <button className="carouselArrowRight" tabIndex="1" onClick={() => slideRight(reviewSlide, setReviewSlide, 4, review)}>&#8594;</button>
                    </div>
                </div>

                <div className="reviewCarousel">
                    <div className="reviewInner">
                        {review.map((company) => {
                            return (
                                <div 
                                    key={company._id}
                                    className="reviewCard"
                                    style={{ transform: `translateX(-${reviewSlide * 105.35}%)` }}
                                >
                                    <div className="companyLogo">
                                        <img src={urlFor(company.logo)} alt={`a picture of ${company.company} logo`} />
                                    </div>
                                    <h3>{company.review}</h3>
                                    <p><span>{company.name},</span> {company.role}</p>
                                    <div className="rating">
                                        <p>{company.rating}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="partnerLogos">
                    {/* images for partner logos */}
                </div>
            </section>
        </>
    )
}

export default HomeCarousels;