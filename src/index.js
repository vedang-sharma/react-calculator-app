import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppVersion1 from './AppVersion1';
import AppVersion2 from './AppVersion2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* Toggle between versions */}
    {/* <AppVersion1 /> */}
    <AppVersion2 />
  </BrowserRouter>
);
