import CategoryHeader from "./CategoryHeader";
import { CORE_TECHNOLOGIES, details } from "./details";

function ExperienceSummary() {
  const MONTHS_IN_A_YEAR = 12;

  const jobSummary = details.reduce((summary, jobDetails) => {
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
        <span>
          {years + " years"}, {months + " months"}
        </span>
      );
    } else if (value >= MONTHS_IN_A_YEAR) {
      return <span>{years + " years"}</span>;
    } else {
      return <span>{value + " months"}</span>;
    }
  }

  const experienceSummary = Object.entries(jobSummary)
    .filter(([key]) => {
      return CORE_TECHNOLOGIES.includes(key);
    })
    .map(([key, value]) => {
      return (
        <div key={key}>
          <span className="inline-block w-64 font-semibold">{key}:</span>
          {mapMonthsToYearsAndMonths(value)}
        </div>
      );
    });

  return (
    <>
      <CategoryHeader text="Experience"></CategoryHeader>
      <div className="mt-4 mb-8 text-gray-800 dark:text-neutral-400">{experienceSummary}</div>
    </>
  );
}

export default ExperienceSummary;
