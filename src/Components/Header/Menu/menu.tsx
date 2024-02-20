import MenuItem from "./menuItem";
import "../../../Commons/Css/container.scss";
import "./menu.scss";

const Menu = (props: { text: any }) => {
    return (
        <div className="horizontal-flex-container">
            <MenuItem text={props.text.curriculum} link="curriculum"/>
            <MenuItem text={props.text.portfolium} link="portfolium"/>
        </div>
    );
}

export default Menu;