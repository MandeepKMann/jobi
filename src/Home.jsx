import NavMenu from "./NavMenu.jsx";
import SearchBar from "./SearchBar.jsx"
import './Home.scss';

const Home = () => {
    return (
        <header>
            <NavMenu />
            <div className="wrapper">
                <h1>Find & Hire<br/><span className="headingSpan1">Top 3% of experts</span><br/><span className="headingSpan2">on jobi.</span></h1>
                <p>We deliver blazing fast and striking work solutions</p>
            </div>

            <SearchBar />
        </header>
    )
}

export default Home;