import CurriculumPersonalData from "../../Components/Content/Curriculum/PersonalData/CurriculumPersonalData";
import CurriculumInfo from "../../Components/Content/Curriculum/Info/CurriculumInfo";
import LanguageEnum from "../../Commons/Enums/locationEnum";
import TextEnum from "../../Commons/Enums/textEnum";
import PictureOfMe from "../../Resources/Images/Me/me.jpg";
import "./curriculum.scss";

const Curriculum = (props: { language: LanguageEnum }) => {
    return (
        <div className="curriculum-grid themed-content">
            <div className="curriculum-wrapper">
                <div className="curriculum-grid-item about-me">
                    <div className="curriculum-grid-info">
                        <div className="curriculum-about-me-grid">
                            <div className="curriculum-about-me-grid-img-item"> 
                                <img src={PictureOfMe} alt="pictures of you, pictures of me, hung upon your wall for the world to see"/>
                            </div>
                            <div>
                                <CurriculumPersonalData language={props.language} section={TextEnum.PersonalDataName} display={true}/>
                                <CurriculumPersonalData language={props.language} section={TextEnum.PersonalDataBirthDate} display={true}/>
                                <CurriculumPersonalData language={props.language} section={TextEnum.PersonalDataEmail} display={false}/>
                            </div>
                            <div className="curriculum-about-me-grid-item">
                                <CurriculumInfo language={props.language} section={TextEnum.CurriculumAboutMe}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className= "curriculum-grid-item">
                    <div>
                        <CurriculumInfo language={props.language} section={TextEnum.CurriculumGoals}/>
                        <CurriculumInfo language={props.language} section={TextEnum.CurriculumEducation}/>
                        <CurriculumInfo language={props.language} section={TextEnum.CurriculumWorkExperience}/>
                        <CurriculumInfo language={props.language} section={TextEnum.CurriculumFreelances}/>
                        <CurriculumInfo language={props.language} section={TextEnum.CurriculumSkils}/>
                        <CurriculumInfo language={props.language} section={TextEnum.CurriculumExtracurricularActivities}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
//<img src={PictureOfMe} className="picture-of-me" alt="pictures of you, pictures of me, hung upon your wall for the world to see"/>  style={{backgroundImage: `url(${PictureOfMe}`}}
export default Curriculum;