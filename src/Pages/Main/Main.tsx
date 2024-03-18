import { Route, Routes } from "react-router-dom";
import Header from "../../Components/Header/header";
import Curriculum from "../Curriculum";
import Footer from "../../Components/Footer/footer";
import LanguageEnum from "../../Commons/Enums/locationEnum";
import "./main.scss";
import { useState } from "react";
import TextEnum from "../../Commons/Enums/textEnum";

const Main = () => {
    const [location, setLocation] = useState(LanguageEnum.Portuguese);

    return (
        <main>
            <header>
                <Header language={location} section={TextEnum.Menu}/>
            </header>
            <article>
                <Routes>
                    <Route path="/" element={<Curriculum language={location}/>}/>
                    <Route path="curriculum" element={<Curriculum language={location}/>}/>
                    <Route path="*" element={<div>not found</div>}/>
                </Routes>
            </article>
            <footer className="themed-menu">
                <Footer changeLanguage={setLocation}/>
            </footer>
      </main>
    );
}

export default Main;