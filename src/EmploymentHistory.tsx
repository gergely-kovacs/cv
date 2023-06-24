import { groupBy } from 'lodash';
import { Component, For } from 'solid-js';
import CategoryHeader from './CategoryHeader';
import { employers, employmentPeriods, projects } from './details';

const EmploymentHistory: Component = () => {
    const projectsGroupedByEmploymentPeriod = groupBy(projects, 'employmentPeriodId');

    // TODO: styling
    return (
        <>
            <CategoryHeader text="Employment history" />
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-400">
                <For each={Object.entries(projectsGroupedByEmploymentPeriod)}>
                    {([employmentPeriodId, projects]) => {
                        const employmentPeriod = employmentPeriods.find(
                            (period) => period.id === Number(employmentPeriodId)
                        );
                        const employer = employers.find(
                            (employer) => employer.id === Number(employmentPeriod?.employerId)
                        );

                        return (
                            <>
                                {/* TODO; make employer name smaller or category header bigger */}
                                <h2 class="text-2xl text-gray-700 dark:text-neutral-300">{employer?.name}</h2>
                                <h3>
                                    <For each={employmentPeriod?.positions}>
                                        {(position, index) => {
                                            return index === employmentPeriod?.positions.length - 1
                                                ? position
                                                : position + ', ';
                                        }}
                                    </For>
                                </h3>
                                <h3>
                                    {employmentPeriod?.startDate.toLocaleDateString() +
                                        ' - ' +
                                        employmentPeriod?.endDate.toLocaleDateString()}
                                </h3>

                                <For each={projects}>
                                    {(project) => {
                                        return (
                                            <>
                                                <h4>{project.name}</h4>

                                                <div>{project.goal}</div>

                                                {/* TODO: map technologies to comma separated text */}
                                                <div>{project.technologies}</div>

                                                {/* TODO: map tasks to comma separated text */}
                                                <div>{project.tasks}</div>

                                                <div>{project.duration_months + ' months'}</div>
                                            </>
                                        );
                                    }}
                                </For>
                            </>
                        );
                    }}
                </For>
            </div>
        </>
    );
};

export default EmploymentHistory;
