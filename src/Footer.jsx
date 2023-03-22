import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footerTop wrapper">
                <div className="footerTitle">
                    <h3>Most complete job portal.</h3>
                    <p>Signup and start today!</p>
                </div>
                <div className="footerButtons">
                    <button>Looking for a Job?</button>
                    <button>Post a Job</button>
                </div>
            </div>

            <div className="footerMiddle wrapper">
                <div className='footerMiddleFlex'>
                    <div>
                        <img src="" alt="" />
                        <h5>jobi</h5>
                    </div>
                    <div className="footerLists">
                        <ul>
                            <p>Products</p>
                            <li><a href="">Take the tour</a></li>
                            <li><a href="">Live chat</a></li>
                            <li><a href="">Self-service</a></li>
                            <li><a href="">Mobile</a></li>
                            <li><a href="">Collaboration</a></li>
                            <li><a href="">Reviews</a></li>
                        </ul>
                        <ul>
                            <p>Links</p>
                            <li><a href="">Pricing</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                        <ul>
                            <p>Legal</p>
                            <li><a href="">Terms of use</a></li>
                            <li><a href="">Terms and conditions</a></li>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Cookie policy</a></li>
                        </ul>
                    </div>
                    <div className="newsletter">
                        <h6>Newsletter</h6>
                        <p>Join and get important news regularly</p>
                        <form action="#">
                            <label htmlFor=""></label>
                            <input type="text" />
                            <button>Send</button>
                        </form>
                        <p>We only send interesting and relevent emails.</p>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="terms">
                    <p>Privacy & Terms.</p>
                    <p>Contact Us</p>
                </div>
                <p className="copyRight">Copyright @2022 jobi inc.</p>
                <ul className="footerBottomLinks">
                    <li><a href=""><img src="" alt="" /></a></li>
                    <li><a href=""><img src="" alt="" /></a></li>
                    <li><a href=""><img src="" alt="" /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;