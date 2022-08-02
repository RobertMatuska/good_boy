import React, { ChangeEvent, useState } from "react";

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

    const [error, setError] = useState("");
    const [message, setMessage] = useState('');

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const {phoneNumber, name, surname, email, onInputEmail, onInputSurname, onInputName, onInputPhoneNumber} = props

    const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputName(e.target.value)
    }
    const handleInputSurname = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputSurname(e.target.value)
    }
    const handleInputEmail = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isValidEmail(e.target.value)) {
            setError('Email is invalid');
          } else {
            setError("");
          }
          setMessage(e.target.value);
        props.onInputEmail(e.target.value)
    }
    const handleInputPhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputPhoneNumber(e.target.value)
    }

    return <>
        <form >
            <label className="personalFormText">O vás</label>
            <input className="inputPersonalFieldName" type="text" placeholder="Meno" value={name} onChange={handleInputName} min={6}></input>
            <input className="inputPersonalFieldSurname" type="text" placeholder="Priezvisko" value={surname} onChange={handleInputSurname} ></input>
            <div>
            <input className="inputPersonalFieldEmail" type="text" placeholder="Email" value={email} onChange={handleInputEmail}></input>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
            </div>
            <input className="inputPersonalFieldPhone" id="phone" name="phone" placeholder="Telefónne číslo" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" value={phoneNumber} onChange={handleInputPhoneNumber} required></input>
        </form>
    </>
}
export default PersonalForm;