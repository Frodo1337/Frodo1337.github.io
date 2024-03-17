import LanguageEnum from "../../Enums/locationEnum";
import TextEnum from "../../Enums/textEnum";
import MenuText from "../../../Resources/Locations/menu.json";

const loadLocation = (language: LanguageEnum, text: TextEnum) : any => {
    const languageKey = language == LanguageEnum.Portuguese ? "portuguese" : "english";

    switch (text) {
        case TextEnum.Menu:
            return MenuText[languageKey];
    }
};

export default loadLocation;