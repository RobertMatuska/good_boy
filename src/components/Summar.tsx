import React, { ChangeEvent } from "react";

interface Props {
    amount:string;
    selectedShelter:string;
    mainButton:String;
    name:string,
    surname:string,
    email: string,
    phoneNumber:string,
    onCheckBox: (status:boolean) => void,
}

const Summar: React.FC<Props> = (props) => {

    const {selectedShelter, amount, mainButton,phoneNumber, name, surname, email, onCheckBox} = props;

    const checkboxState = (e: ChangeEvent<HTMLInputElement>) => {
        props.onCheckBox(e.target.checked)
    }

    return <>
    <p>
        <div className="summarTitleText">Akou formou chcem prispieť</div>
        <div >{mainButton}</div>
    </p>
    <p>
        <div className="summarTitleText">Najviac mi záleži na útulku</div>
        <div>{selectedShelter}</div>
    </p>
    <p>
        <div className="summarTitleText">Suma, ktorú chcete prispieť</div>
        <div>{amount} €</div>
    </p>
    <p>
        <div className="summarTitleText">Meno a priezvisko</div>
        <div>{name + " " + surname}</div>
    </p>
    <p>
        <div className="summarTitleText">E-mailová adresa</div>
        <div>{email}</div>
    </p>
    <p>
        <div className="summarTitleText">Telefónne číslo</div>
        <div>{phoneNumber}</div>
    </p>
    <div>
        <input type="checkbox" className="checkbox" id="súhlas" name="suhlas"   onChange={checkboxState} value="Súhlasim so spracovaním mojích osobných údajov" />
        <span className="checkboxTextHeight">
            <label className="checkBoxText"> Súhlasim so spracovaním mojích osobných údajov</label>
        </span>
    </div>
    </>
}
export default Summar