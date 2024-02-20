import LinkedInLogo from "../../../../Resources/Images/Social/linkedin.webp";
import GithubLogo from "../../../../Resources/Images/Social/github.webp";
import "../../../../Commons/Css/container.scss";
import "./social.scss";

const Social = () => {
    return (
        <div className="horizontal-flex-container social">
            <div className="horizontal-flex-child">
                <a href="https://github.com/Frodo1337" target="_blank" rel="noreferrer">
                    <img src={GithubLogo} className="social-img" alt="GitHub"/>
                </a>
                <a href="https://www.linkedin.com/in/matheus-siqueira-44b68316b/" target="_blank" rel="noreferrer">
                    <img src={LinkedInLogo} className="social-img" alt="LinkedIn"/>
                </a>
            </div>
        </div>
    );
}

export default Social;