import './Experts.scss';
import Block1 from './assets/homeAssets/block1.jpg';
import Block2 from './assets/homeAssets/block2.jpg';
import Block3 from './assets/homeAssets/block3.jpg';
import Dots from './assets/homeAssets/dots.png';

const Experts = () => {
    return (
        <section className="talentedExperts wrapper">
            <div className="expertsCollage">
                <div className="collageTop">
                    <div className="blockContainer1">
                        <img src={Block1} alt="" />
                    </div>
                    <div className="dotsContainer">
                        <img src={Dots} alt="" />
                    </div>
                </div>
                <div className="collageBottom">
                    <div className="blockContainer2">
                        <img src={Block2} alt="" />
                    </div>
                    <div className="blockContainer3">
                        <img src={Block3} alt="" />
                    </div>
                </div>
            </div>
            <div className="expertsText">
                <h2>Get over 50,000+ talented experts in jobi.</h2>
                <p>Fully hybrid workforce management tools are yours to use, as well as access to our top 1% of talent.</p>
                <ul>
                    <li>Seamless Searchin</li>
                    <li>Get top 3% experts for your project</li>
                    <li>Protected payment systems</li>
                </ul>
                <button>Post a Job</button>
            </div>
        </section>
    )
}

export default Experts;