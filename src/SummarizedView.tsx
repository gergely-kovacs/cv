import { createSignal, onMount } from 'solid-js';
import ExperienceOptions from './ExperienceOptions';
import ExperienceSummary from './ExperienceSummary';
import NavHeader from './NavHeader';
import PersonalDetails from './PersonalDetails';
import PreviousClients from './PreviousClients';
import PreviousEmployers from './PreviousEmployers';
import { CORE_TECHNOLOGIES } from './details';

function SummarizedView() {
    let dialog: HTMLDialogElement | undefined;
    const [dialogRef, setDialogRef] = createSignal<HTMLDialogElement | undefined>(undefined);

    const [technologies, setTechnologies] = createSignal<string[]>(CORE_TECHNOLOGIES);

    onMount(() => {
        setDialogRef(dialog);
    });

    return (
        <div class="container-sm mx-auto h-full max-w-screen-md p-5">
            <NavHeader />
            <PersonalDetails />
            <ExperienceSummary optionsDialog={dialogRef()} selectedTechnologies={technologies()} />
            <ExperienceOptions
                ref={dialog}
                optionsDialog={dialogRef()}
                selectedTechnologies={technologies()}
                setTechnologies={setTechnologies}
            />
            <PreviousEmployers />
            <PreviousClients />
        </div>
    );
}

export default SummarizedView;
