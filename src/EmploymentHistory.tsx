import { groupBy, isNil } from 'lodash';
import { Component, For } from 'solid-js';
import CategoryHeader from './CategoryHeader';
import './EmploymentHistory.css';
import { EmploymentPeroid, employers, employmentPeriods, projects } from './details';

const EmploymentHistory: Component = () => {
    const projectsGroupedByEmploymentPeriod = groupBy(projects, 'employmentPeriodId');

    return (
        <>
            <div class="mt-8">
                <CategoryHeader text="Employment history" />
            </div>
            <div class="mt-4 mb-8 text-gray-800 dark:text-neutral-300">
                <For
                    each={Object.entries(projectsGroupedByEmploymentPeriod).sort(
                        ([employmentPeriodId], [otherEmploymentPeriodId]) =>
                            Number(otherEmploymentPeriodId) - Number(employmentPeriodId),
                    )}
                >
                    {([employmentPeriodId, projects]) => {
                        const employmentPeriod = employmentPeriods.find(
                            (period) => period.id === Number(employmentPeriodId),
                        ) as EmploymentPeroid;
                        const employer = employers.find(
                            (employer) => employer.id === Number(employmentPeriod.employerId),
                        );

                        return (
                            <div class="employment-period mb-8">
                                <div
                                    class="employment-period-details relative cursor-pointer ps-4 pb-4"
                                    onClick={(event) =>
                                        event.currentTarget.parentElement?.classList.toggle('collapsed')
                                    }
                                >
                                    <h2 class="flex text-xl font-semibold text-gray-700 dark:text-neutral-200">
                                        {employer?.name}
                                        <span class="chevron ml-auto">&#708;</span>
                                    </h2>

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
                                            ((employmentPeriod.endDate &&
                                                employmentPeriod.endDate.toLocaleDateString()) ||
                                                'present')}
                                    </div>
                                </div>

                                <div class="projects">
                                    <For each={projects}>
                                        {(project) => {
                                            return (
                                                <div class="project-details relative border-l-2 border-gray-600 ps-7 pb-4 dark:border-gray-400 print:border-none">
                                                    <h4 class="text-lg font-semibold text-gray-700 dark:text-neutral-200">
                                                        {project.name}
                                                    </h4>

                                                    <div class="font-semibold">{project.goal}</div>

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

                                                    <div class="italic">
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

                                                    {!isNil(project.duration_months) && (
                                                        <div>{project.duration_months + ' month(s)'}</div>
                                                    )}
                                                </div>
                                            );
                                        }}
                                    </For>
                                </div>
                            </div>
                        );
                    }}
                </For>
            </div>
        </>
    );
};

export default EmploymentHistory;
