import React from "react";
import Amount from "./formComponents/Amount";
import DropDownList from "./formComponents/DropDownList";
import MainButtons from "./formComponents/MainButtons";

const Form: React.FC = () => {

    return <>    
        <form>
            <MainButtons /> 
            <DropDownList />
            <Amount />
            <input className="submitButton" type="submit" value="Pokračovať" />
        </form>
    </>
}

export default Form;