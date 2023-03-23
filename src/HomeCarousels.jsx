import { urlFor } from './sanity';

const HomeCarousels = ({talent}) => {

    return (
        <>
            <section className="talentCarousel wrapper">
                <h2>Find the best talent on jobi.</h2>
                {/* Map through talent data for carousel */}
            </section>

            <section className="reviewCarousel wrapper">
                <h2>Trusted by leading startups.</h2>
                    {talent.map((person) => {
                        return (
                            <div key={person._id}>
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
                <div className="partnerLogos">
                    {/* images for partner logos */}
                </div>
            </section>
        </>
    )
}

export default HomeCarousels;