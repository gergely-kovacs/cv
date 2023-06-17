import { For } from 'solid-js';
import CategoryHeader from './CategoryHeader';
import { employers } from './details';

function PreviousEmployers() {
    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Previous Employers" />
            </div>
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-400">
                <For each={employers}>
                    {(employer, index) => {
                        return (
                            <span>
                                <a class="font-semibold" href={employer.website} target="_blank">
                                    {employer.name}
                                </a>
                                {index() < employers.length - 1 ? ', ' : ''}
                            </span>
                        );
                    }}
                </For>
            </div>
        </>
    );
}

export default PreviousEmployers;
