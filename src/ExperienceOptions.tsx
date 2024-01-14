import { For, Setter } from 'solid-js';
import { projects } from './details';

export interface ExperienceOptionsParams {
    ref: HTMLDialogElement | ((el: HTMLDialogElement) => void) | undefined;
    optionsDialog: HTMLDialogElement | undefined;
    selectedTechnologies: string[];
    setTechnologies: Setter<string[]>;
}

// TODO: styling
// TODO: make sure the 'Dialog element is not connected' error is due to hot reloading
function ExperienceOptions(props: ExperienceOptionsParams) {
    const technologies = [...new Set<string>(projects.flatMap((project) => project.technologies))];

    let technologyForm: HTMLFormElement | undefined;

    function updateSelectedTechnologies() {
        const formData = new FormData(technologyForm);
        const newTechnologies = Object.values(Object.fromEntries(formData));
        props.setTechnologies(newTechnologies as string[]);
    }

    // FIXME: reset form state on close
    function closeDialog() {
        props.optionsDialog?.close();
    }

    // TODO: implement a search field that highlights labels on match
    return (
        <dialog ref={props.ref} class="max-w-screen-sm px-6 py-4">
            <h2 class="text-xl">Please, select the technologies you wish to see!</h2>
            <hr class="mb-6 mt-2" />
            <form method="dialog" onSubmit={updateSelectedTechnologies} ref={technologyForm}>
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    <For each={technologies}>
                        {(technology) => (
                            <label class="label flex items-center">
                                <div>
                                    <input
                                        class="mr-2"
                                        type="checkbox"
                                        name={technology}
                                        value={technology}
                                        checked={props.selectedTechnologies.includes(technology)}
                                    />
                                </div>
                                <div>{technology}</div>
                            </label>
                        )}
                    </For>
                </div>
                <hr class="mb-2 mt-6" />
                <div class="flex justify-between">
                    <button type="button" class="mx-2" onClick={closeDialog}>
                        Cancel
                    </button>
                    <button type="submit" class="mx-2">
                        Save
                    </button>
                </div>
            </form>
        </dialog>
    );
}

export default ExperienceOptions;
