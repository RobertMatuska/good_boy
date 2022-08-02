import React, { ChangeEvent } from "react";
import  slovakFlag  from "../assets/img/slovakia.png";

interface Props {
    name:string,
    surname:string,
    email: string,
    phoneNumber:string,
    onInputPhoneNumber: (phoneNumber:string) => void,
    onInputName: (name:string) => void,
    onInputSurname: (surname:string) => void,
    onInputEmail: (email:string) => void,
}

const PersonalForm: React.FC<Props> = (props) => {

    const {phoneNumber, name, surname, email, onInputEmail, onInputSurname, onInputName, onInputPhoneNumber} = props

    const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputName(e.target.value)
    }
    const handleInputSurname = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputSurname(e.target.value)
    }
    const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputEmail(e.target.value)
    }
    const handleInputPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputPhoneNumber(e.target.value)
    }

    return <>
        <form >
            <label className="personalFormText">O vás</label>
            <div className="inputPersonalFieldName">Meno <br />
                <input className="inputPersonalFieldInput" type="text" placeholder="Zadajte Vaše meno" value={name} onChange={handleInputName}></input>
            </div>
            <div className="inputPersonalFieldSurname">Priezvisko <br />
                <input className="inputPersonalFieldInput" type="text" placeholder="Zadajte Vaše priezvisko" value={surname} onChange={handleInputSurname} ></input>
            </div>
            <div className="inputPersonalFieldEmail">E-mailová adresa <br />
            <input className="inputPersonalFieldInput" type="text" placeholder="Zadajte Váš e-mail" value={email} onChange={handleInputEmail}></input>
            </div>
            <div className="inputPersonalFieldPhone">Telefónne číslo <br />  <img className="slovakFlag" src={slovakFlag} alt="Logo" />
            <input className="inputPersonalFieldInput" id="phone" name="phone" placeholder="+421" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phoneNumber} onChange={handleInputPhoneNumber} required></input>
            </div>
        </form>
    </>
}
export default PersonalForm;