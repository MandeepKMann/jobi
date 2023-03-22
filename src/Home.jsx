import HomeHeader from "./HomeHeader"
import Categories from "./Categories"
import Experts from "./Experts";
import About from "./About";
import HomeCarousels from "./HomeCarousels";
import Collaboration from "./Collaboration";
import Guides from "./Guides";
import JobMatch from "./JobMatch";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <main>
                <Categories />
                <Experts />
                <About />
                <HomeCarousels />
                <Collaboration />
                <Guides />
                <JobMatch />
            </main>
            <Footer />
        </>
    )
}

export default Home;