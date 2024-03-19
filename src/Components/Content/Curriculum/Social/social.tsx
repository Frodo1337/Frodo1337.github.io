import "../../../../Commons/Css/container.scss";
import "./social.scss";

const Social = (props: { icon: string, url: string, alt: string }) => {
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            <img src={props.icon} className="social-img" alt={props.alt}/>
        </a>
    );
}

export default Social;