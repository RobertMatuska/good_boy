import React from "react";
import '../../App.css';

const DropDownList: React.FC = () => {

    return <>
    <div className="dropDownList">
        <p className="Text">O projekte</p>
        <select className="selectDropDown dropdownMenu" name="cars" id="cars">
            <option value="default" selected className="bold"><div >Útulok</div> </option>
            <option value="saab">Bratislava</option>
            <option value="mercedes">Martin</option>
            <option value="audi">Košice</option>
        </select>
       
    </div>
    </>
}

export default DropDownList;