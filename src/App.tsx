import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18next/config';

import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { about, contacts } from './constants';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={about} element={<About />} />
                <Route path={contacts} element={<Contacts />} />
            </Route>
        </Routes>
    );
}

export default App;
