import NavMenu from "./NavMenu.jsx";
import SearchBar from "./SearchBar.jsx"
import './Home.scss';
import HeaderRectangle from './assets/homeAssets/headerRectangle.png';
import HeaderImage from './assets/homeAssets/HeaderImage.jpg'

const Home = () => {
    return (
        <header>
            <NavMenu />
            <div className="headerContent wrapper">
                <div className="headerLeft">
                    <h1>Find & Hire<br/><span className="headingSpan1">Top 3% of experts</span><br/><span className="headingSpan2">on jobi.</span></h1>
                    <p>We deliver blazing fast and striking work solutions</p>
                </div>
                {/* <div className="headerRight">
                    <div className="headerRectangleContainer">
                        <img className="headerRectangle" src={HeaderRectangle} alt="" />
                    </div>
                    <div className="headerImageContainer">
                        <img className="headerImage" src={HeaderImage} alt="" />
                    </div>
                </div> */}

            </div>
            <SearchBar />
        </header>
    )
}

export default Home;
