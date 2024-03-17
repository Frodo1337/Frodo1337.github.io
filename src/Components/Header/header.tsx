import Menu from "./Menu/menu";
import "../../Commons/Css/container.scss";
import "./header.scss";
import TextEnum from "../../Commons/Enums/textEnum";
import LanguageEnum from "../../Commons/Enums/locationEnum";
import loadLocation from "../../Commons/Utils/Location/location";

const Header = (props: { language: LanguageEnum, text: TextEnum }) => {
    const locations = loadLocation(props.language, props.text);

    return (
        <div className="vertical-flex-container">
            <div className="vertical-flex-child menu-items">
                <Menu text={locations.menu}/>
            </div>
        </div>
    );
}

export default Header;