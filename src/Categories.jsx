import './Categories.scss'

import Fireworks from './assets/homeAssets/fireworks.png'
import Pencil from './assets/homeAssets/pencil.png'
import Dev from './assets/homeAssets/dev.png'
import Marketing from './assets/homeAssets/marketing.png'
import Telemarketing from './assets/homeAssets/telemarketing.png'
import Editing from './assets/homeAssets/editing.png'
import Accounting from './assets/homeAssets/accounting.png'

const Categories = () => {
    return (
        <section className="demandingCategories">
            <div className="categoriesText wrapper">
                <div className="categoriesLeft">
                    <h3>Most Demanding Categories.</h3>
                    <div className="fireworks">
                        <img src={Fireworks} alt="" />
                    </div>
                </div>
                <div className="categoriesRight">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam corrupti tenetur sit similique dolorum nobis.</p>
                    <a href="">Explore all fields &gt;</a>
                </div>
            </div>
            <div className="categoriesLinks wrapper">
                <ul>
                    <li>
                        <a href="">
                            <img src={Pencil} alt="" />
                            <h4>UI/UX Design</h4>
                            <p>12k+ Jobs</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={Dev} alt="" />
                            <h4>Development</h4>
                            <p>8k+ Jobs</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={Marketing} alt="" />
                            <h4>Marketing</h4>
                            <p>12k+ Jobs</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={Telemarketing} alt="" />
                            <h4>Telemarketing</h4>
                            <p>3k+ Jobs</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={Editing} alt="" />
                            <h4>Editing</h4>
                            <p>12k+ Jobs</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src={Accounting} alt="" />
                            <h4>Accounting</h4>
                            <p>17k+ Jobs</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Categories;