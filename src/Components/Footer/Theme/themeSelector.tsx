import { useState } from "react";
import ThemeEnum from "../../../Commons/Enums/themeEnum";
import "../../../Commons/Css/container.scss";
import "./themeSelector.scss";

const ThemeSelector = () => {
    const [currentTheme, setTheme] = useState<ThemeEnum>(ThemeEnum.Light);

    const selectOption = (theme: ThemeEnum) => {
        if (currentTheme === ThemeEnum.Light && theme === ThemeEnum.Light)  {
            setTheme(ThemeEnum.Dark);
        }
        else if (currentTheme === ThemeEnum.Dark && theme === ThemeEnum.Dark)  {
            setTheme(ThemeEnum.Light);
        }
        else {
            setTheme(theme);
        }
    }
    
    return (
        <div className="horizontal-flex-container selector">
            <div className="horizontal-flex-child selector-option" onClick={() => selectOption(ThemeEnum.Light)}>
                {
                    currentTheme === ThemeEnum.Light 
                    ? <span style={{color: "green"}}>☼</span> 
                    : <span>☼</span>
                }
            </div>
            <div className="horizontal-flex-child selector-option" onClick={() => selectOption(ThemeEnum.Dark)}>
                {
                    currentTheme === ThemeEnum.Dark 
                    ? <span style={{color: "green"}}>☽</span> 
                    : <span>☽</span>
                }
            </div>
        </div>
    );
}

export default ThemeSelector;