import { useEffect } from 'react';
import { carDetails } from '../../Constants';
import './Trending.css';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Trending = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='trending section'>
            <div className="secContainer container">
                <div className="secHeading flex" data-aos="fade-up">
                    <h3 className="secTitle">Trending Near You</h3>
                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">
                    {carDetails.map((item, i) => (
                        <div className="singleCar grid" data-aos="fade-up" key={i}>
                            <div className="imgDiv">
                                <img src={item.image} alt="car" />
                            </div>
                            <h5 className="carTitle">
                                {item.title}
                            </h5>
                            <div className="price_seller flex">
                                <span>
                                    <h4>Fuel Range</h4>
                                    <h5>{item.fuelConsumption}</h5>
                                </span>
                                <span>
                                    <h4>Top Speed</h4>
                                    <h5>{item.topSpeed}</h5>
                                </span>
                                <span>
                                    <h4>Acceleration</h4>
                                    <h5>{item.acceleration}</h5>
                                </span>
                            </div>

                            {/* <span className="awd">{item.awd}</span> */}
                            <div className="price_seller flex">
                                <span className="price">{item.price}</span>
                                <span className="seller">Read More</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Trending;
