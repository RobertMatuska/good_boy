import React from "react";
import Vector from "../../assets/img/Vector.png"
import Paw from "../../assets/img/Paw.png"

const MainButtons: React.FC = () => {


    return <>
        <div className="mainButtons">
            <button className="firstMainButton">
                <div className="elipsa">
                    <img className='firstButtonImg' src={Vector} alt="Peňaženka" />;
                </div>
           <div className="firstButtonText">
           Chcem finančne prispieť konkrétnemu útulku
           </div>
           </button>
            <button className="secondMainButton">
            <div className="elipsa">
                    <img className='firstButtonImg' src={Paw} alt="Labka" />;
                </div>
           <div className="firstButtonText">
           Chcem finančne prispieť celej nadácii
           </div>
            </button>
        </div>
    </>
}

export default MainButtons;