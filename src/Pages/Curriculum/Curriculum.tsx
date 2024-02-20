import CurriculumTitle from "../../Components/Content/Curriculum/Title/CurriculumTitle";

import "../../Commons/Css/container.scss";
import "../../Commons/Css/theme.scss";
import Social from "../../Components/Content/Curriculum/Social/social";
import CurriculumPersonalData from "../../Components/Content/Curriculum/PersonalData/CurriculumPersonalData";

import "./curriculum.scss";
import CurriculumInfo from "../../Components/Content/Curriculum/Info/CurriculumInfo";

const Curriculum = () => {
    return (
        <div className="curriculum-grid themed-content">
            <div className="curriculum-grid-title">
                <div className="curriculum-title">
                    <CurriculumTitle/>
                </div>
            </div>
            <div className="">
                <div className="curriculum-personal-data">
                    <CurriculumPersonalData/>
                </div>
            </div>
            <div className="curriculum-grid-text">
                <div className="">
                    <CurriculumInfo/>
                </div>
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