import './NavMenu.scss';
import Logo from './assets/homeAssets/logo.png';
import Scribble from './assets/homeAssets/scribble.png';
import Category from './assets/homeAssets/category.png';

const NavMenu = () => {
    return (
        <nav>
            <div className="navFlex wrapper">
                <div className="navLeft">
                    <div className="logo">
                        <img src={Logo} alt="" />
                        <h2>jobi</h2>
                    </div>
                    <button className='category'>
                        <img src={Category} alt="" />
                        Category
                    </button>
                    <ul className="navLinks">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Explore</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Pages</a></li>
                    </ul>
                </div>
                <div className="scribble">
                    <img src={Scribble} alt="" />
                </div>
                <div className="navRight">
                    <ul>
                        <li><a href="#">Post Job</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Hire Top Talents</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavMenu;