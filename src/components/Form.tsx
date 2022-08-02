import { Button } from "@mantine/core";
import React, { useState } from "react";
import Amount from "./formComponents/Amount";
import DropDownList from "./formComponents/DropDownList";
import MainButtons from "./formComponents/MainButtons";
import PersonalForm from "./PersonalForm";
import Summar from "./Summar";

const Form: React.FC = () => {

    // const for typ contribution
    const [shelterContributionButton,setShelterContributionButton] = useState(false)
    const [foundationContributionButton,setFoundationContributionButton] = useState(false)
    const [first,setFirst] = useState(Boolean)   // first = vybraná podpora pre útulok
    const [second,setSecond] = useState(Boolean)  // second = vybraná podpora pre nadáciu
    const [mainButton, setMainButton] = useState(String)

    const handleChangeShelterButton = (data:any) => {

        if(data !== null) {
        setFirst(true)
        setSecond(false)
        setMainButton(data);
        }
    }
  
    const handleChangeFundationButton = () => {
        setFirst(false)
        setSecond(true)
    }

    // const for selected shelter
    const [selectedShelter, setSelectedShelter] = useState("")  // selectedShelter = vybraný útulok

    const handleSelectedShelter = (shelter:string) => {
        setSelectedShelter(shelter)
    }

    //const for amount

    const [amount, setAmount] = useState(String) // amount = vybraná suma podpory

    const handleAmountValue = (data:string) => {
        setAmount(data)
    }

    // const for PersonalForm

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleInputName = (name:string) => {
        setName(name)
    }
    const handleInputSurname = (surname:string) => {
        setSurname(surname)
    }
    const handleInputEmail = (email:string) => {
        setEmail(email)
    }
    const handleInputPhoneNumber = (phoneNumber:string) => {
        setPhoneNumber(phoneNumber)
    }

    const [page, setPage] = useState(0);

const conditionalComponent = () => {
    switch (page) {
      case 0:
        return <>

        <h1 className='title'>Vyberte si možnosť, ako chcete pomôcť</h1>
        <MainButtons onChangeShelterButton={handleChangeShelterButton} onChangeFoundationButton={handleChangeFundationButton} shelterContributionButton={shelterContributionButton} foundationContributionButton={foundationContributionButton}/> 
        <DropDownList foundationButton={second} onSelectedShelter={handleSelectedShelter}/>
        <Amount onAmountValue={handleAmountValue}/>
       </>
      case 1:
        return <>
        <h1 className='title'>Potrebujeme od Vás zopár informácii</h1>
        <PersonalForm name={name} surname={surname} email={email} phoneNumber={phoneNumber} onInputPhoneNumber={handleInputPhoneNumber} onInputEmail={handleInputEmail} onInputSurname={handleInputSurname} onInputName={handleInputName}/>
        </>
        case 2:
            return <>
            <h1 className='title'>Skontrolujte si zadané údaje</h1>
            <Summar amount={amount} selectedShelter={selectedShelter} mainButton={mainButton} name={name} surname={surname} email={email} phoneNumber={phoneNumber}/>
            </>
    }
  }

    const handleSubmitNext = () => {
        setPage(page + 1);
        if(page ===1) {
        }
    }

    const handleSubmitPrevius = () => {
        if(page > 0) {
        setPage(page-1);
        }
    }

    return <>    
            {conditionalComponent()}
            <Button className={ page === 1 || page === 2? "previusButton" : "previusButtonHide"  } onClick={handleSubmitPrevius}>  { page === 1 || page === 2? "Späť" : ""  } </Button>
            <Button className="submitButton" onClick={handleSubmitNext}>  { page === 0 || page === 1 ? "Pokračovať" : "Odoslať formulár" } </Button>
       
    </>
}

export default Form;



