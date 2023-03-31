import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18next/config';

import { Home } from './pages/Home';
import { Layout } from './components/Layout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    );
}

export default App;
