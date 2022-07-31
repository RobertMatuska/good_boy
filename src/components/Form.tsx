import React, { useState } from "react";
import Amount from "./formComponents/Amount";
import DropDownList from "./formComponents/DropDownList";
import MainButtons from "./formComponents/MainButtons";

const Form: React.FC = () => {

    const [shelterContributionButton,setShelterContributionButton] = useState(false)
    const [foundationContributionButton,setFoundationContributionButton] = useState(false)

    const [first,setFirst] = useState(Boolean);
    const [second,setSecond] = useState(Boolean)

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


    return <>    
        <form>
            <MainButtons onChangeShelterButton={handleChangeShelterButton} onChangeFoundationButton={handleChangeFundationButton} shelterContributionButton={shelterContributionButton} foundationContributionButton={foundationContributionButton}/> 
            <DropDownList foundationButton={second}/>
            <Amount />
            <input className="submitButton" type="submit" value="Pokračovať" />
        </form>
    </>
}

export default Form;