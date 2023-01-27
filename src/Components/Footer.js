import React from 'react';
import './css/footer.css'
import {  NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-skyblue py-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white text-uppercase">Follow Developer(s) </h5>
                    <ul className="list-unstyled">
                        <li>
                            <span><a href='https://github.com/RemmyKyalo' target='_blank'>Kyalo</a></span>
                        </li>
                        <li>
                            <span><a href='https://github.com/antonyosebe' target='_blank'>Antony Osebe</a></span>
                        </li><li>
                            <span><a href='https://github.com/volta1234' target='_blank'>Calvince Ogwel</a></span>
                        </li><li>
                            <span><a  href='https://github.com/kefahwambai' target='_blank'>Kefah Wambai</a></span>
                        </li>
                        
                    </ul>
                    
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white text-uppercase">Customer Service</h5>
                    <ul className="list-unstyled">
                        <li>
                            <NavLink to="/customercare" className="text-white">Contact us</NavLink>
                        </li>
                        
                    </ul>
                </div>
               
               
            </div>
        <div className="text-center py-3">
    <p className="text-white">Copyright &copy; Deliciousard 2022</p>
</div>
</div>
</footer>


    );
}

export default Footer;