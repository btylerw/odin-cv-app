import { useState } from "react";
import './styles/GenInfo.css'

function GenInfo() {
    return (
        <div className="gen-info">
            <h1>Personal Information</h1>
            <p>First Name</p>
            <input type="text" placeholder="Tyler"/>
            <p>Last Name</p>
            <input type="text" placeholder="Brown"/>
            <p>Job Title</p>
            <input type="text" placeholder="Software Developer"/>
            <p>Phone Number</p>
            <input type="text" placeholder="888-555-5555"/>
            <p>Email</p>
            <input type="text" placeholder="brown.tyler.w@gmail.com"/>
        </div>
    );
}

export default GenInfo;