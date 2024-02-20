import LanguageEnum from "../../Enums/locationEnum";
import PortugueseLocation from "../../../Resources/Locations/portuguese.json";
import EnglishLocation from "../../../Resources/Locations/english.json";

const loadLocation = (language: LanguageEnum) : any => {
    switch (language) {
        case LanguageEnum.Portuguese:
            return PortugueseLocation;
        case LanguageEnum.English:
            return EnglishLocation;
        default:
            return PortugueseLocation;
    }
};

export default loadLocation;