import { For, Setter } from 'solid-js';
import { projects } from './details';

export interface ExperienceOptionsParams {
    ref: HTMLDialogElement | ((el: HTMLDialogElement) => void) | undefined;
    optionsDialog: HTMLDialogElement | undefined;
    selectedTechnologies: string[];
    setTechnologies: Setter<string[]>;
}

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
        <dialog
            ref={props.ref}
            class="m-auto max-w-(--breakpoint-sm) bg-stone-100 px-6 py-4 backdrop:bg-gray-700/50 dark:bg-gray-900"
        >
            <h2 class="text-xl text-zinc-800 dark:text-neutral-200">
                Please, select the technologies you wish to see!
            </h2>

            <hr class="mt-2 mb-6" />

            <form
                class="text-gray-800 dark:text-neutral-300"
                method="dialog"
                onSubmit={updateSelectedTechnologies}
                ref={technologyForm}
            >
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    <For each={technologies}>
                        {(technology) => (
                            <label class="flex cursor-pointer items-center">
                                <input
                                    class="mr-2"
                                    type="checkbox"
                                    name={technology}
                                    value={technology}
                                    checked={props.selectedTechnologies.includes(technology)}
                                />
                                <span>{technology}</span>
                            </label>
                        )}
                    </For>
                </div>

                <hr class="mt-6 mb-2" />

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
