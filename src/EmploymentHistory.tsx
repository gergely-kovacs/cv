import { groupBy } from 'lodash';
import { Component, For } from 'solid-js';
import CategoryHeader from './CategoryHeader';
import './EmploymentHistory.css';
import { EmploymentPeroid, employers, employmentPeriods, projects } from './details';

const EmploymentHistory: Component = () => {
    const projectsGroupedByEmploymentPeriod = groupBy(projects, 'employmentPeriodId');

    return (
        <>
            <CategoryHeader text="Employment history" />
            <div class="mb-8 mt-4 text-gray-800 dark:text-neutral-400">
                <For
                    each={Object.entries(projectsGroupedByEmploymentPeriod).sort(
                        ([employmentPeriodId], [otherEmploymentPeriodId]) =>
                            Number(otherEmploymentPeriodId) - Number(employmentPeriodId)
                    )}
                >
                    {([employmentPeriodId, projects]) => {
                        const employmentPeriod = employmentPeriods.find(
                            (period) => period.id === Number(employmentPeriodId)
                        ) as EmploymentPeroid;
                        const employer = employers.find(
                            (employer) => employer.id === Number(employmentPeriod.employerId)
                        );

                        return (
                            <div class="mb-8">
                                <div class="employment-period-details relative pb-4 ps-3">
                                    <h2 class="text-xl text-gray-700 dark:text-neutral-300">{employer?.name}</h2>

                                    <For each={employmentPeriod.positions}>
                                        {(position, index) => {
                                            return (
                                                <div>
                                                    {index() === employmentPeriod.positions.length - 1
                                                        ? position
                                                        : position + ', '}
                                                </div>
                                            );
                                        }}
                                    </For>

                                    <div class="text-sm italic">
                                        {employmentPeriod.startDate.toLocaleDateString() +
                                            ' - ' +
                                            employmentPeriod.endDate.toLocaleDateString()}
                                    </div>
                                </div>

                                {/* FIXME: the last project should only have the bofder half-way down */}
                                <For each={projects}>
                                    {(project) => {
                                        return (
                                            <div class="pb-4 ps-6 border-l-2 border-gray-600 dark:border-gray-400">
                                                <h4 class="text-lg text-gray-700 dark:text-neutral-300">
                                                    {project.name}
                                                </h4>

                                                <div>{project.goal}</div>

                                                <div>
                                                    <For each={project.technologies}>
                                                        {(technology, index) => {
                                                            return (
                                                                <span>
                                                                    {index() === project.technologies.length - 1
                                                                        ? technology
                                                                        : technology + ', '}
                                                                </span>
                                                            );
                                                        }}
                                                    </For>
                                                </div>

                                                <div>
                                                    <For each={project.tasks}>
                                                        {(task, index) => {
                                                            return (
                                                                <span>
                                                                    {index() === project.tasks.length - 1
                                                                        ? task
                                                                        : task + ', '}
                                                                </span>
                                                            );
                                                        }}
                                                    </For>
                                                </div>

                                                <div>{project.duration_months + ' months'}</div>
                                            </div>
                                        );
                                    }}
                                </For>
                            </div>
                        );
                    }}
                </For>
            </div>
        </>
    );
};

export default EmploymentHistory;
