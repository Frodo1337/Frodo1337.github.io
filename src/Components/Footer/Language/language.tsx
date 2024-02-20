import BrasilFlag from "../../../Resources/Images/Languages/brasilFlag.webp";
import UsaFlag from "../../../Resources/Images/Languages/usaFlag.webp";
import "../../../Commons/Css/container.scss";
import "./language.scss";

const Language = () => {
    return (
        <div className="horizontal-flex-container">
            <div className="horizontal-container-child ">
                <img src={BrasilFlag} className="language-img" alt="Português"/>
            </div>
            <div className="horizontal-container-child">
                <img src={UsaFlag} className="language-img" alt="English"/>
            </div>
        </div>
    );
}

export default Language;