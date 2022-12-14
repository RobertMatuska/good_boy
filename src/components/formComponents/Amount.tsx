import React, { ChangeEvent } from "react";
import '../../App.css';

interface Props {
    onAmountValue: (data:string) => void;
}

const Amount: React.FC<Props> = (props) => {

    const handleAmountClick = (e: ChangeEvent<HTMLInputElement>) => {
        props.onAmountValue(e.target.value)
    } 
    
    return <>
        <div className="amountButton">
            <p className="Text">Suma, ktorú chcete pripísať</p>
            <div className='e-btn-group'>
                <span >
                    <input type="radio" id="five" name="value" value="5" onChange={handleAmountClick} />
                    <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="five">5€</label>
                </span>
                <span>
                    <input type="radio" id="ten" name="value" value="10" onChange={handleAmountClick}/>
                    <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="ten">10€</label>
                </span>
                <span >
                    <input type="radio" id="twenty" name="value" value="20" onChange={handleAmountClick}/>
                    <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="twenty">20€</label>
                </span>
                <span >
                    <input type="radio" id="thirty" name="value" value="30" onChange={handleAmountClick}/>
                    <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="thirty">30€</label>
                </span>
                <span >
                    <input type="radio" id="fifty" name="value" value="50" onChange={handleAmountClick}/>
                    <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="fifty">50€</label>
                </span>
                <span >
                    <input type="radio" id="hundred" name="value" value="100" onChange={handleAmountClick}/>
                    <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="hundred">100€</label>
                </span>
                <span >
                <input type="radio" id="custom"  name="value" value="custom" onChange={handleAmountClick}/>
                    <label className="e-btn singleAmountrButton singleAmountValue" htmlFor="custom">___ €</label>
                </span>
            </div>
        </div>
    </>
}

export default Amount;