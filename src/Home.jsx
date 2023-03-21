import HomeHeader from "./HomeHeader"
import Categories from "./Categories"
import Experts from "./Experts";
import About from "./About";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <main>
                <Categories />
                <Experts />
                <About />
            </main>
        </>
    )
}

export default Home;