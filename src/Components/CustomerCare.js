import React from "react";
import './css/app.css'

const CustomerCare = () => {
    return (
        <div className="container">
            <div style={{textAlign:"center", padding: "20px"}} >
                <h3>Contact Us</h3>
                <div className="contact-methods">
                    <div className="contact-method">
                        <i className="material-icons-outlined" style={{color: "green"}}>contact_support</i>
                        <p>Call us On: +254 72033 6009</p>
                    </div>
                    <div className="contact-method">
                        <i className="material-icons-outlined" style={{color: "brown"}}>alternate_email</i>
                        <p>Email Us On: deliciousard@gmail.com</p>
                    </div>
                    <div className="contact-method">
                        <i className="material-icons-outlined" style={{color: "blue"}}>sms</i>
                        <p>SMS line: +254 72033 6009</p>
                    </div>
                </div>
            </div>

            <div className="location">
                <h3 style={{textAlign: "center"}}>Location</h3>
                <div className="address" style={{ fontStyle: "italic", textAlign:"center"}} >
                    <ul style={{listStyleType:'none'}}>
                        <li>Tom Mboya Street,</li>
                        <li>Deliciousard Building,</li>
                        <li>Floor Number 20,</li>
                        <li>Nairobi-Kenya</li>
                    </ul>
                   
                </div>
            </div>
        </div>
    )
}


export default CustomerCare;