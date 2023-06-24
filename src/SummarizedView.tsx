import ExperienceSummary from './ExperienceSummary';
import NavHeader from './NavHeader';
import PersonalDetails from './PersonalDetails';
import PreviousClients from './PreviousClients';
import PreviousEmployers from './PreviousEmployers';

function SummarizedView() {
    return (
        <div class="container-sm mx-auto h-full max-w-screen-md p-5">
            <NavHeader />
            <PersonalDetails />
            <ExperienceSummary />
            <PreviousEmployers />
            <PreviousClients />
        </div>
    );
}

export default SummarizedView;
