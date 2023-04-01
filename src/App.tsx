import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18next/config';

import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { about, menu } from './constants';
import { Menu } from './pages/Menu';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={menu} element={<Menu />} />
                <Route path={about} element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;
