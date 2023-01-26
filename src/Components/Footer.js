import React from 'react';
import './css/footer.css'
import { Link, NavLink } from "react-router-dom";

function Footer() {
    return (
        <footer class="bg-skyblue py-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white text-uppercase">About Us</h5>
                        <p class="text-white">Your one stop Grocery store</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white text-uppercase">Customer Service</h5>
                        <ul class="list-unstyled">
                            <li>
                                <NavLink to="/customercare"><span className="others p-4">Contact us</span></NavLink>
                            </li>
                            
                        </ul>
                    </div>
                   
                   
                </div>
            <div class="text-center py-3">
        <p>Copyright &copy; Deliciousard 2022</p>
    </div>
  </div>
</footer>

    );
}

export default Footer;