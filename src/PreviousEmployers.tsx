import { For } from 'solid-js';
import CategoryHeader from './CategoryHeader';
import { employers } from './details';

function PreviousEmployers() {
    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Past Employers" />
            </div>
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-300">
                <For each={employers}>
                    {(employer, index) => {
                        return (
                            <div>
                                <a class="font-semibold" href={employer.website} target="_blank">
                                    {employer.name}
                                </a>
                                {index() < employers.length - 1 ? ', ' : ''}
                            </div>
                        );
                    }}
                </For>
            </div>
        </>
    );
}

export default PreviousEmployers;
