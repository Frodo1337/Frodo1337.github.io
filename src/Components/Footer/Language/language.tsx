import BrasilFlag from "../../../Resources/Images/Languages/brasilFlag.webp";
import UsaFlag from "../../../Resources/Images/Languages/usaFlag.webp";
import "../../../Commons/Css/container.scss";
import "./language.scss";
import LanguageEnum from "../../../Commons/Enums/locationEnum";

const Language = (props: { changeLanguage: any }) => {
    return (
        <div className="horizontal-flex-container">
            <div className="horizontal-container-child ">
                <img src={BrasilFlag} 
                     className="language-img" 
                     alt="Português"
                     onClick={() => props.changeLanguage(LanguageEnum.Portuguese)}/>
            </div>
            <div className="horizontal-container-child">
                <img src={UsaFlag} 
                     className="language-img" 
                     alt="English"
                     onClick={() => props.changeLanguage(LanguageEnum.English)}/>
            </div>
        </div>
    );
}

export default Language;