import CurriculumTitle from "../../Components/Content/Curriculum/Title/CurriculumTitle";
import Social from "../../Components/Content/Curriculum/Social/social";
import CurriculumPersonalData from "../../Components/Content/Curriculum/PersonalData/CurriculumPersonalData";
import CurriculumInfo from "../../Components/Content/Curriculum/Info/CurriculumInfo";
import LanguageEnum from "../../Commons/Enums/locationEnum";
import TextEnum from "../../Commons/Enums/textEnum";
import PictureOfMe from "../../Resources/Images/Me/me.jpg";
import "./curriculum.scss";
import "../../Commons/Css/container.scss";
import "../../Commons/Css/theme.scss";

const Curriculum = (props: { language: LanguageEnum }) => {
    return (
        <div className="curriculum-grid themed-content">
            <div className="curriculum-grid-title">
                <div className="curriculum-title">
                    <CurriculumTitle language={props.language} section={TextEnum.CurriculumHeader}/>
                </div>
            </div>
            <div className="">
                <div className="vertical-flex-child picture-div">
                    <center>
                        <img src={PictureOfMe} className="picture-of-me" alt="pictures of you, pictures of me, hung upon your wall for the world to see"/>
                    </center>
                </div>
                <div className="vertical-flex-child">
                    <CurriculumPersonalData language={props.language} section={TextEnum.PersonalDataName} display={true}/>
                    <CurriculumPersonalData language={props.language} section={TextEnum.PersonalDataBirthDate} display={true}/>
                    <CurriculumPersonalData language={props.language} section={TextEnum.PersonalDataEmail} display={false}/>
                </div>
            </div>
            <div className="curriculum-grid-info">
                <CurriculumInfo language={props.language} section={TextEnum.CurriculumAboutMe}/>
                <CurriculumInfo language={props.language} section={TextEnum.CurriculumGoals}/>
                <CurriculumInfo language={props.language} section={TextEnum.CurriculumEducation}/>
                <CurriculumInfo language={props.language} section={TextEnum.CurriculumWorkExperience}/>
                <CurriculumInfo language={props.language} section={TextEnum.CurriculumFreelances}/>
            </div>
            <div className="curriculum-grid-social">
                <div className="">
                    <Social/>
                </div>
            </div>
        </div>
    );
}

export default Curriculum;