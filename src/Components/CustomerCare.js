import React from "react";
import './css/app.css'

function CustomerCare() {
    return (
        <div className="container" >
            <div style={{textAlign:"center"}} >
            <p style={{fontWeight: "bold"}}><span style={{color: "green"}} class="material-symbols-outlined">contact_support </span>Call us On: +254 72033 6009</p>
            <p style={{fontWeight: "bold"}}><span style={{color: "brown"}} class="material-symbols-outlined">alternate_email</span>Email Us On: deliciousard@gmail.com</p>
            <p style={{fontWeight: "bold"}} ><span style={{color: "blue"}} class="material-symbols-outlined">sms</span>SMS line: +254 72033 6009</p>
            </div>

            <div className="location">
            <p style={{fontWeight: "bold", textAlign: "center"}}><span style={{color: "red"}} class="material-symbols-outlined">location_on</span>Location</p>
            <div style={{ fontStyle: "italic", textAlign:"center"}} >
                <p>-Tom Mboya Street,</p>
                <p>-Deliciosard Building,</p>
                <p>-Floor Number 20,</p>
                <p>-Nairobi-Kenya,</p>
            </div>
            </div>
        </div>
    )
}

export default CustomerCare;