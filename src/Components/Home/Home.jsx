import { useEffect } from 'react';
import './Home.css';
import homeImg from '../../Assets/images/home.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = (props) => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='home'>
            <div className="secContainer">
                <div className="homeText" data-aos="fade-up">
                    <span className="homeSpan">Drive your dream</span>
                    <h1 className="homeTitle">
                        Audi R8 V10 Spyder
                    </h1>
                    <h5 className="homeSubTitle">Engine 5204 cc || BHP 602.0 Bhp || Dimensions: 4,429 mm L x 1,940 mm W x 1,242 mm H</h5>
                    <h5 className="homeSubTitle"></h5>
                    <div className="btns flex">
                        <button className="btn" data-aos="fade-right" onClick={props.onClick}>Click for More Details</button>
                        <button className="btn" data-aos="fade-left">Book for Test Drive</button>
                    </div>
                </div>
                <div className="homeImage" data-aos="fade-down-right">
                    <img src={homeImg} alt="home" />
                </div>
            </div>
        </div>
    );
}

export default Home;
