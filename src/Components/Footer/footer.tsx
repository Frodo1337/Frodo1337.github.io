import Language from "./Language/language";
import ThemeSelector from "./Theme/themeSelector";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="horizontal-flex-container footer footer-options">
            <div className="vertical-flex-container">
                <div className="vertical-flex-child">
                    <div className="options">
                        <ThemeSelector/>
                        <br/>
                        <Language/>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Footer;