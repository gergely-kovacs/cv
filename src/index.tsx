import { HashRouter, Route, RouteSectionProps } from '@solidjs/router';
import { lazy } from 'solid-js';
import { render } from 'solid-js/web';

import SummarizedView from './SummarizedView';
import './index.css';

const DetailedView = lazy(() => import('./DetailedView'));
const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

const App = (props: RouteSectionProps<unknown>) => <>{props.children}</>;

if (root) {
    render(
        () => (
            <HashRouter root={App}>
                <Route path="/" component={SummarizedView} />
                <Route path="/details" component={DetailedView} />
            </HashRouter>
        ),
        root,
    );
}
