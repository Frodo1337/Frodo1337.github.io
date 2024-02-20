import { Link } from "react-router-dom";
import "../../../Commons/Css/container.scss";
import "./menu.scss";

const MenuItem = (props: { text: string, link: string }) => {
    return (
        <div className="horizontal-flex-child header-child">
            <Link to={props.link}>
                <div className="underlined-item">
                    <span>
                        {props.text}
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default MenuItem;