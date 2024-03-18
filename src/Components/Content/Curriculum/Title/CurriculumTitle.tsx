import loadLocation from "../../../../Commons/Utils/Location/location";
import LanguageEnum from "../../../../Commons/Enums/locationEnum";
import TextEnum from "../../../../Commons/Enums/textEnum";

const CurriculumTitle = (props: { language: LanguageEnum, section: TextEnum }) => {
    const locations = loadLocation(props.language, props.section);

    return (
        <div>
            <h3>
                {locations.name}
            </h3>
            <span>
                {locations.degree}
            </span>
        </div>
        
    )
}

export default CurriculumTitle;