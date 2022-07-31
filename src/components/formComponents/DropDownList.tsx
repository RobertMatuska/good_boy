import React, { useState } from "react";
import '../../App.css';
import axios from "axios";


const DropDownList: React.FC = () => {

const [shelter, setShelter] = useState([])

const handleShelter = () => {
    axios.get(`https://frontend-assignment-api.goodrequest.dev/api/v1/shelters`
    ).then(response => {
        setShelter(response.data.shelters) 
    })
}

    return <>
        <div className="dropDownList">
            <p className="Text">O projekte</p>
            <select className="selectDropDown dropdownMenu" name="cars" id="cars" onClick={handleShelter}>
            <option className="Text">Útulok</option>
                {shelter.map(({ id, name }) => (
                <option key={id}>{name}</option>
                ))} 
            </select>
        </div>
    </>
}

export default DropDownList;


