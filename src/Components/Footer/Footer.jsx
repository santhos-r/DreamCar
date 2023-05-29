import { useEffect } from 'react';

import './Footer.css';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='footer'>
            <div className="footerContainer container">
                <div className="footerMenuDiv grid">
                    <div className="singleGrid" data-aos="fade-up">
                        <span className="footerTitle">About</span>
                        <ul className="footerList grid">
                            <li className="footerLink">How it works</li>
                            <li className="footerLink">Careers</li>
                        </ul>
                    </div>

                    <div className="singleGrid" data-aos="fade-up">
                        <span className="footerTitle">Become Seller</span>
                        <ul className="footerList grid">
                            <li className="footerLink">Add Vehicles</li>
                            <li className="footerLink">Resource Center</li>
                        </ul>
                    </div>

                    <div className="singleGrid" data-aos="fade-up">
                        <span className="footerTitle">Support</span>
                        <ul className="footerList grid">
                            <li className="footerLink">Help Center</li>
                            <li className="footerLink">Garages</li>
                        </ul>
                    </div>

                    <div className="singleGrid" data-aos="fade-up">
                        <span className="footerTitle">About</span>
                        <ul className="footerList grid">
                            <li className="footerLink">How it works</li>
                            <li className="footerLink">Careers</li>
                        </ul>
                    </div>
                </div>

                <div className="lowerSection grid">
                    <span>2023. All Rights Reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
