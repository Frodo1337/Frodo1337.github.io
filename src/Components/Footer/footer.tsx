import Social from "../Content/Curriculum/Social/social";
import Language from "./Language/language";
import ThemeSelector from "./Theme/themeSelector";
import LinkedInLogo from "../../Resources/Images/Social/linkedin.webp";
import GithubLogo from "../../Resources/Images/Social/github.webp";
import "./footer.scss";

const Footer = (props: { changeLanguage: any }) => {
    return (
        <div className="horizontal-flex-container footer footer-options">
            <div className="vertical-flex-container">
                <div className="vertical-flex-child">
                    <div className="footer-item footer-item-options">
                        {false ?? <><ThemeSelector/><br/></>}
                        <Language changeLanguage={props.changeLanguage}/>
                    </div>
                </div>
                <div className="vertical-flex-child">
                    <div className="footer-item footer-item-social">
                        <Social icon={GithubLogo} url={"https://github.com/Frodo1337"} alt={"github"}/>
                        <Social icon={LinkedInLogo} url={"https://www.linkedin.com/in/matheus-siqueira-44b68316b/"} alt={"linkedin"}/>
                    </div>    
                </div>
            </div>
        </div> 
    )
}

export default Footer;