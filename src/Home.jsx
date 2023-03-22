import HomeHeader from "./HomeHeader"
import Categories from "./Categories"
import Experts from "./Experts";
import About from "./About";
import HomeCarousels from "./HomeCarousels";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <main>
                <Categories />
                <Experts />
                <About />
                <HomeCarousels />
            </main>
        </>
    )
}

export default Home;