import { Route, Router, Routes } from '@solidjs/router';
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';

import SummarizedView from './SummarizedView';
import './index.css';

const DetailedView = lazy(() => import('./DetailedView'));
const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
    );
}

if (root) {
    render(
        () => (
            <Router>
                <Routes>
                    <Route path="/cv/" component={SummarizedView} />
                    <Route path="/cv/details" component={DetailedView} />
                </Routes>
            </Router>
        ),
        root
    );
}
