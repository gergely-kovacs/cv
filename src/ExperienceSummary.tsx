import CategoryHeader from './CategoryHeader';
import { CORE_TECHNOLOGIES, projects } from './details';

// TODO: add a cog icon with a modal where you can configure which technologies are shown
function ExperienceSummary() {
    const MONTHS_IN_A_YEAR = 12;

    const jobSummary = projects.reduce((summary, jobDetails) => {
        jobDetails.technologies.forEach((tech) => {
            if (summary[tech]) {
                summary[tech] += jobDetails.duration_months;
                return;
            }
            summary[tech] = jobDetails.duration_months;
        });
        return summary;
    }, {} as Record<string, number>);

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

    const experienceSummary = Object.entries(jobSummary)
        .filter(([key]) => {
            return CORE_TECHNOLOGIES.includes(key);
        })
        .map(([key, value]) => {
            return (
                // TODO: consider colouring by row to make it easier to read
                <div class="flex flex-wrap justify-between">
                    <div class="font-semibold">{key}:</div>
                    {mapMonthsToYearsAndMonths(value)}
                </div>
            );
        });

    return (
        <>
            <CategoryHeader text="Experience" />
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-300">{experienceSummary}</div>
        </>
    );
}

export default ExperienceSummary;
