import loadLocation from "../../../../Commons/Utils/Location/location";
import LanguageEnum from "../../../../Commons/Enums/locationEnum";
import TextEnum from "../../../../Commons/Enums/textEnum";
const parse = require("html-react-parser").default;

const CurriculumInfo = (props: { language: LanguageEnum, section: TextEnum } ) => {
    const locations = loadLocation(props.language, props.section);

    return (
        <div>
            <h3>
                {parse(locations.title)}
            </h3>
            <span>
                {parse(locations.content)}
            </span>
        </div>
    );
}

export default CurriculumInfo;