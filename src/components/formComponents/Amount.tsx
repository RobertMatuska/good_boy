import React from "react";
import '../../App.css';

const Amount: React.FC = () => {

    return <>
    <div className="amountButton">
        <p className="Text">Suma, ktorú chcete pripísať</p>
        <div className='e-btn-group'>
        <span >
            <input type="radio" id="five" name="value" value="five"/>
            <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="five">5€</label>
        </span>
        <span>
            <input type="radio" id="ten" name="value" value="ten"/>
            <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="ten">10€</label>
        </span>
        <span >
            <input type="radio" id="twenty" name="value" value="twenty"/>
            <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="twenty">20€</label>
        </span>
        <span >
            <input type="radio" id="thirty" name="value" value="thirty"/>
            <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="thirty">30€</label>
        </span>
        <span >
            <input type="radio" id="fifty" name="value" value="fifty"/>
            <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="fifty">50€</label>
        </span>
        <span >
            <input type="radio" id="hundred" name="value" value="hundred"/>
            <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="hundred">100€</label>
        </span>
        <span >
        <input type="radio" id="custom" name="value" value="custom"/>
            <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="custom">___ €</label>
        </span>
        </div>
    </div>
    </>
}

export default Amount;