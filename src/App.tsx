import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18next/config';
import { lazy, Suspense } from 'react';

import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { About } from './pages/About';
// import { Menu } from './pages/Menu';
import { about, menu } from './constants';

// const Home = lazy(() =>
//     import('./pages/Home').then(({ Home }) => ({ default: Home })),
// );
// const Layout = lazy(() =>
//     import('./components/Layout').then(({ Layout }) => ({ default: Layout })),
// );
const Menu = lazy(() =>
    import('./pages/Menu').then(({ Menu }) => ({ default: Menu })),
);
// const About = lazy(() =>
//     import('./pages/About').then(({ About }) => ({ default: About })),
// );

function App() {
    return (
        // <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={menu} element={<Menu />} />
                <Route path={about} element={<About />} />
            </Route>
        </Routes>
        // </Suspense>
    );
}

export default App;
