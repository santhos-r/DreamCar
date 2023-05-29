import { useState, useEffect } from 'react';
import './Auction.css';
import { auctionDetails } from '../../Constants';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Auction = () => {
    const [activeId, setActiveId] = useState();

    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='auction section'>
            <div className="secContainer container">
                <div className="secHeading flex" data-aos="fade-up">
                    <h3 className="secTitle">Active Auctions</h3>
                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">
                    {auctionDetails.map((item) => (
                        <div className={`singleCar grid ${activeId === item.id ? " singleCarActive" : ""}`} key={item.id} data-aos="fade-up">
                            <div className="imgDiv">
                                <img src={item.image} alt="car" />
                            </div>
                            <h5 className="carTitle">{item.title}</h5>
                            <span className="miles">{item.miles}</span>
                            <span className="awd">{item.awd}</span>

                            <div className="price_buyBtn flex">
                                <span className="price">{item.price}</span>
                                <span className="buyBtn">Buy Now</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Auction;
