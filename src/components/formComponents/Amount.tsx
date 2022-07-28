import React from "react";
import '../../App.css';

const Amount: React.FC = () => {

    return <>
    <div className="amountButton">
        <p className="Text">Suma, ktorú chcete pripísať</p>
        <span >
            <button className="singleAmountrButton"><span className="singleAmountValue">5€</span></button>
        </span>
        <span >
            <button className="singleAmountrButton"><span className="singleAmountValue">10€</span></button>
        </span>
        <span >
            <button className="singleAmountrButton"><div className="singleAmountValue">20€</div></button>
        </span>
        <span >
            <button className="singleAmountrButton"><div className="singleAmountValue">30€</div></button>
        </span>
        <span >
            <button className="singleAmountrButton"><div className="singleAmountValue">50€</div></button>
        </span>
        <span >
            <button className="singleAmountrButton"><div className="singleAmountValue">100€</div></button>
        </span>
        <span >
            <button className="singleAmountrButton"><span className="singleAmountValue"><input className="inputButton"></input><label>€</label></span></button>
        </span>
    </div>
    </>
}

export default Amount;