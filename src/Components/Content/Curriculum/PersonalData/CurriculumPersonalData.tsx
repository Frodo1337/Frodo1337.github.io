import PictureOfMe from "../../../../Resources/Images/Me/me.jpg";
import "../../../../Commons/Css/container.scss";
import "./personalData.scss";

const PersonalData = () => {
    return (
        <div className="vertical-flex-container">
            <div className="vertical-flex-child picture-div">
                <center>
                    <img src={PictureOfMe} className="picture-of-me"/>
                </center>
            </div>
            <div className="vertical-flex-child personal-data-text-div">
                <center>
                    <h4>
                        Dados Pessoais
                    </h4>
                </center>
                <ul>
                    <li>
                        <b>
                            Nome
                        </b>
                    </li>
                    <li>
                        Matheus Wilhelm Siqueira
                    </li>
                    <li>
                        <b>
                            Data de Nascimento
                        </b>
                    </li>
                    <li>
                        30/08/1998
                    </li>
                    <li>
                        <b>
                            E-mail
                        </b>
                    </li>
                    <li>
                        siqueirawm@hotmail.com
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PersonalData;