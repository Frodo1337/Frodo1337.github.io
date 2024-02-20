import Menu from "./Menu/menu";
import "../../Commons/Css/container.scss";
import "./header.scss";

const Header = (props: { text: any }) => {
    return (
        <div className="vertical-flex-container">
            <div className="vertical-flex-child menu-items">
                <Menu text={props.text.menu}/>
            </div>
        </div>
    );
}

export default Header;