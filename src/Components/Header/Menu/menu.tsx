import MenuItem from "./menuItem";
import "../../../Commons/Css/container.scss";
import "./menu.scss";

const Menu = (props: { section: any }) => {
    return (
        <div className="horizontal-flex-container">
            <MenuItem text={props.section.curriculum} link="curriculum"/>
            <MenuItem text={props.section.portfolium} link="portfolium"/>
        </div>
    );
}

export default Menu;