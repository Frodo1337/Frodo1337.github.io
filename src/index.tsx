import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';

import loadLocation from './Commons/Utils/Location/location';
import LanguageEnum from './Commons/Enums/locationEnum';

import "./index.scss";
import "./Commons/Css/theme.scss";
import "./Commons/Css/container.scss";

import Curriculum from './Pages/Curriculum';
import Footer from './Components/Footer/footer';

const location = loadLocation(LanguageEnum.Portuguese);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <main>
        <header>
          <Header text={location.header}/>
        </header>
        <article>
          <Routes>
            <Route path="/" element={<Curriculum/>}/>
            <Route path="curriculum" element={<Curriculum/>}/>
            <Route path="*" element={<div>not found</div>}/>
          </Routes>
        </article>
        <footer className="themed-menu">
          <Footer/>
        </footer>
      </main>
    </HashRouter>
  </React.StrictMode>
);
