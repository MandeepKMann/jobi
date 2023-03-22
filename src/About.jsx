import './About.scss'
import PersonIcon from './assets/homeAssets/personIcon.png';
import ProfileIcon from './assets/homeAssets/profileIcon.png';
import PencilIcon from './assets/homeAssets/pencilIcon.png';
import DashedArrow from './assets/homeAssets/dashedArrow.png';

const About = () => {
    return (
        <section className="about">
            <div className="aboutFlex wrapper">
                <h2>How Does it Work?</h2>
                <img src="" alt="" />
                <ul>
                    <li>
                        <img src={PersonIcon} alt="" />
                        <h5>Create Account</h5>
                        <p>It's very easy to open an account and start your journey.</p>
                    </li>
                    <li>
                        <img src={DashedArrow} alt="" />
                    </li>
                    <li>
                        <img src={ProfileIcon} alt="" />
                        <h5>Complete Your Profile</h5>
                        <p>Complete your profile to get the attention of a client.</p>
                    </li>
                    <li>
                        <img src={DashedArrow} alt="" />
                    </li>
                    <li>
                        <img src={PencilIcon} alt="" />
                        <h5>Apply or Hire</h5>
                        <p>Apply and get your preferred jobs!</p>
                    </li>
                </ul>
                <img src="" alt="" />
            </div>
        </section>
    )
}

export default About;