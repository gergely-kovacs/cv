import { For } from 'solid-js';
import CategoryHeader from './CategoryHeader';
import Gear from './assets/icons/gear-fill.svg';
import { projects } from './details';

export interface ExperienceSummaryParams {
    optionsDialog: HTMLDialogElement | undefined;
    selectedTechnologies: string[];
}

function ExperienceSummary(props: ExperienceSummaryParams) {
    const MONTHS_IN_A_YEAR = 12;

    const jobSummary = projects.reduce(
        (summary, jobDetails) => {
            jobDetails.technologies.forEach((tech) => {
                if (summary[tech]) {
                    summary[tech] += jobDetails.duration_months;
                    return;
                }
                summary[tech] = jobDetails.duration_months;
            });
            return summary;
        },
        {} as Record<string, number>,
    );

    function convertToYearsAndMonths(months: number): { years: number; months: number } {
        const years = Math.floor(months / MONTHS_IN_A_YEAR);
        const remainderMonths = months % MONTHS_IN_A_YEAR;
        return {
            years: years,
            months: remainderMonths,
        };
    }

    function mapMonthsToYearsAndMonths(value: number) {
        const { years, months } = convertToYearsAndMonths(value);

        if (value >= MONTHS_IN_A_YEAR && months > 0) {
            return (
                <div>
                    {years + ' years'}, {months + ' months'}
                </div>
            );
        } else if (value >= MONTHS_IN_A_YEAR) {
            return <div>{years + ' years'}</div>;
        } else {
            return <div>{value + ' months'}</div>;
        }
    }

    return (
        <>
            <CategoryHeader text="Experience">
                <button
                    type="button"
                    onClick={() => {
                        props.optionsDialog?.showModal();
                    }}
                >
                    <Gear />
                </button>
            </CategoryHeader>
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-300">
                <For each={Object.entries(jobSummary).filter(([key]) => props.selectedTechnologies.includes(key))}>
                    {([key, value]) => {
                        return (
                            // TODO: consider colouring by row to make it easier to read
                            <div class="flex flex-wrap justify-between">
                                <div class="font-semibold">{key}:</div>
                                {mapMonthsToYearsAndMonths(value)}
                            </div>
                        );
                    }}
                </For>
            </div>
        </>
    );
}

export default ExperienceSummary;
