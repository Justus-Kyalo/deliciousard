import React from 'react';

function Footer() {
    return (
        <footer class="bg-dark py-3">
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
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#">Shipping Information</a>
                            </li>
                            <li>
                                <a href="#">Return Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-white text-uppercase">Account</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a href="#">Order History</a>
                            </li>
                            <li>
                                <a href="#">Wishlist</a>
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