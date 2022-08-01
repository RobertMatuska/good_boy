import React, { useState } from "react";
import Amount from "./formComponents/Amount";
import DropDownList from "./formComponents/DropDownList";
import MainButtons from "./formComponents/MainButtons";
import PersonalForm from "./PersonalForm";

const Form: React.FC = () => {

    // const for typ contribution
    const [shelterContributionButton,setShelterContributionButton] = useState(false)
    const [foundationContributionButton,setFoundationContributionButton] = useState(false)

    const [first,setFirst] = useState(Boolean)   // first = vybraná podpora pre útulok
    const [second,setSecond] = useState(Boolean)  // second = vybraná podpora pre nadáciu

    const handleChangeShelterButton = () => {
        setFirst(true)
        setSecond(false)
        console.log("first, second",first, second)
    }

    const handleChangeFundationButton = () => {
        setFirst(false)
        setSecond(true)
        console.log("first, second",first, second)
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

    // const for continue button

    const handleInput = () => {
        <PersonalForm />
    }


    return <>    
        <form>
            <MainButtons onChangeShelterButton={handleChangeShelterButton} onChangeFoundationButton={handleChangeFundationButton} shelterContributionButton={shelterContributionButton} foundationContributionButton={foundationContributionButton}/> 
            <DropDownList foundationButton={second} onSelectedShelter={handleSelectedShelter}/>
            <Amount onAmountValue={handleAmountValue}/>
            <input className="submitButton" type="submit" value="Pokračovať" onChange={handleInput}/>
        </form>
    </>
}

export default Form;