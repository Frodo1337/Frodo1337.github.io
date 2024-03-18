import LanguageEnum from "../../Enums/locationEnum";
import TextEnum from "../../Enums/textEnum";
import MenuText from "../../../Resources/Locations/menu.json";
import PersonalData from "../../../Resources/Locations/personalData.json";
import Curriculum from "../../../Resources/Locations/curriculum.json";

const loadLocation = (language: LanguageEnum, section: TextEnum) : any => {
    const languageKey = language === LanguageEnum.Portuguese ? "portuguese" : "english";

    switch (section) {
        case TextEnum.Menu:
            return MenuText[languageKey];
        case TextEnum.PersonalDataName:
            return PersonalData[languageKey].personalDataName;
        case TextEnum.PersonalDataBirthDate:
            return PersonalData[languageKey].personalBirthDate;
        case TextEnum.PersonalDataEmail:
            return PersonalData[languageKey].personalDataEmail;
        case TextEnum.CurriculumHeader:
            return Curriculum[languageKey].curriculumHeader;
        case TextEnum.CurriculumAboutMe:
            return Curriculum[languageKey].curriculumAboutMe;
        case TextEnum.CurriculumGoals:
            return Curriculum[languageKey].curriculumGoals;
        case TextEnum.CurriculumEducation:
            return Curriculum[languageKey].curriculumEducation;
        case TextEnum.CurriculumWorkExperience:
            return Curriculum[languageKey].curriculumWorkExperience;
        case TextEnum.CurriculumFreelances:
            return Curriculum[languageKey].curriculumFreelances;
        default:
            return { "title": "not found", "content": "not found" };
    }
};

export default loadLocation;