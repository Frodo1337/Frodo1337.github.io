import { useState } from "react";
import LanguageEnum from "../../../../Commons/Enums/locationEnum";
import TextEnum from "../../../../Commons/Enums/textEnum";
import loadLocation from "../../../../Commons/Utils/Location/location";
const parse = require("html-react-parser").default;

const PersonalData = (props: { language: LanguageEnum, section: TextEnum, display: boolean }) => {
    const [display, setDisplay] = useState(props.display);
    const locations = loadLocation(props.language, props.section);

    return (
        <div>
            <span>
                <b>
                    {parse(locations.title)}
                </b>
            </span>
            <br/>
            <span>
                {display ? parse(locations.content) : <span onClick={() => setDisplay(true)}>[{locations.displayText}]</span> }
            </span>
        </div>
    );
}

export default PersonalData;