import Vector from "../../assets/img/Vector.png"
import Paw from "../../assets/img/Paw.png"

interface Props {
    onChangeShelterButton: (data:Boolean) => void;
    onChangeFoundationButton: (data:Boolean) => void;
    shelterContributionButton:Boolean;
    foundationContributionButton:Boolean;
}

const MainButtons: React.FC<Props> = (props) => {

    const {shelterContributionButton, foundationContributionButton} = props

    const handleClickFirst = () => {
        props.onChangeShelterButton(shelterContributionButton);
    }
    const handleClickSecond = () => {
        props.onChangeFoundationButton(foundationContributionButton);
    }

    return <>
     <div className="mainButtons">
       <div className='e-btn-group'>
            <input  type="radio" id="shelter" name="fee" value="shelter" onClick={handleClickFirst} />
            <label className="e-btn firstMainButton " htmlFor="shelter">
                <div className="elipsa">
                    <img className='firstButtonImg' src={Vector} alt="Peňaženka" />;
                </div>
                <div className="firstButtonText">
                    Chcem finančne prispieť konkrétnemu útulku
                </div></label>
            <input type="radio" id="foundation" name="fee" value="foundation" onClick={handleClickSecond} />
            <label className="e-btn secondMainButton" htmlFor="foundation">
                <div className="elipsa">
                    <img className='firstButtonImg' src={Paw} alt="Labka" />;
                </div>
                <div className="firstButtonText">
                    Chcem finančne prispieť celej nadácii
                </div>
            </label> 
        </div>
     </div>   
    </>
}

export default MainButtons;