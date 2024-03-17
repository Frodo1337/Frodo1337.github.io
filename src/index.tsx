import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import "./index.scss";
import "./Commons/Css/theme.scss";
import "./Commons/Css/container.scss";

import Main from './Pages/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Main/>
    </HashRouter>
  </React.StrictMode>
);
