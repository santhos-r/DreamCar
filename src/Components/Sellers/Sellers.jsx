import { useEffect } from 'react';

import './Sellers.css';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { sellerDetails } from '../../Constants';

const Sellers = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='sellers section'>
            <div className="secContainer container">
                <div className="secHeading grid" data-aos="fade-down">
                    <h3 className="secTitle">Our Top 4 selling brands</h3>
                </div>
                <div className="sellersContainer grid">

                    {sellerDetails.map((item, i) => (
                        <div className="singleSeller flex" data-aos="fade-up" key={i}>
                            <div className="imgDiv flex">
                                <img src={item.image} alt="seller" className='img' />
                            </div>
                            <div className="info">
                                <h4 className="name">{item.name}</h4>
                                <p>{item.details}</p>
                                <h5>{item.priceRange}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sellers;
