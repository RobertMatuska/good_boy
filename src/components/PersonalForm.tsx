import React, { ChangeEvent,useState } from "react";
import  slovakFlag  from "../assets/img/slovakia.png";
import validator from "validator";

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

    const [validationName, setvalidationName] = useState("");
    const validateName = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputName(e.target.value)
        var name = e.target.value;
        if (name.length >1 && name.length < 20) {
            setvalidationName("");
        } else {
            setvalidationName("Zadaj prosím správne meno");
        }
    }

    const [validationSurname, setvalidationSurname] = useState("");
    const validateSurname = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputSurname(e.target.value)
        var email = e.target.value;
        if (email.length >1 && email.length < 30) {
            setvalidationSurname("");
        } else {
            setvalidationSurname("Zadaj prosím správne priezvisko");
        }
    }

    const [validationEmail, setValidationEmail] = useState("");
    const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputEmail(e.target.value)
        var email = e.target.value;
        if (validator.isEmail(email)) {
            setValidationEmail("");
        } else {
            setValidationEmail("Zadaj prosím platný email");
        }
    }

    const [validationPhoneNumber, setValidationPhoneNumber] = useState("");
    const validatePhone = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputPhoneNumber(e.target.value)
        var phoneNumber = e.target.value;
        if (validator.isMobilePhone(phoneNumber)) {
            setValidationPhoneNumber("");
        } else {
            setValidationPhoneNumber("Zadaj prosím platný mobil");
        }
    }

    return <>
        <form >
            <label className="personalFormText">O vás</label>
            <div className="inputPersonalFieldName">Meno <br />
                <input className="inputPersonalFieldInput" maxLength={20} minLength={2} type="text" placeholder="Zadajte Vaše meno" value={name} onChange={validateName}></input>
                <span className="validationMsg">{validationName}</span>
            </div>
            <div className="inputPersonalFieldSurname">Priezvisko* <br />
                <input className="inputPersonalFieldInput" maxLength={20} minLength={2} type="text" placeholder="Zadajte Vaše priezvisko" value={surname} onChange={validateSurname} ></input>
                <span className="validationMsg">{validationSurname}</span>
            </div>
            <div className="inputPersonalFieldEmail">E-mailová adresa* <br />
                <input className="inputPersonalFieldInput" type="text" placeholder="Zadajte Váš e-mail" value={email} onChange={validateEmail}></input> 
                <span className="validationMsg">{validationEmail}</span>
            </div>
            <div className="inputPersonalFieldPhone">Telefónne číslo* <br />  <img className="slovakFlag" src={slovakFlag} alt="Logo" />
                <input className="inputPersonalFieldInput" id="phone" name="phone" placeholder="+421" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phoneNumber} onChange={validatePhone} required></input>
                <span className="validationMsg">{validationPhoneNumber}</span>
            </div>
        </form>
    </>
}
export default PersonalForm;