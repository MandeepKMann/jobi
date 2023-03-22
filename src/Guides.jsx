import './Guides.scss';

const Guides = () => {
    return (
        <section className="guides">
            <div className="title wrapper">
                <h2>Jobi Guides</h2>
                <button>Explore More</button>
            </div>
            <div className="guidePosts wrapper">
                <ul>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <p>Developer, Code</p>
                        <p>Print, puclishing key visual layout mockups.</p>
                        <p>By <span>Rashed Kabir</span></p>
                    </li>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <p>Design, Art</p>
                        <p>Designer's checklist for every UX/UI project.</p>
                        <p>By <span>Julie Margot</span></p>
                    </li>
                    <li>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <p>Solution, Work</p>
                        <p>Make a more productive work flow in just a few steps.</p>
                        <p>By <span>Jubayer Al Hasan</span></p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Guides;