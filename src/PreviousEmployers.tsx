import CategoryHeader from "./CategoryHeader";
import { employers } from "./details";

function PreviousEmployers() {
  function createLinksToEmployers() {
    return employers.map((employer, index) => {
      return (
        <span key={employer.id}>
          <a className="font-semibold" href={employer.website} target="_blank">
            {employer.name}
          </a>
          {index < employers.length - 1 ? ", " : ""}
        </span>
      );
    });
  }

  return (
    <>
      <div className="mt-8">
        <CategoryHeader text="Previous Employers"></CategoryHeader>
      </div>
      <div className="mb-8 mt-4 text-gray-800 dark:text-neutral-400">{createLinksToEmployers()}</div>
    </>
  );
}

export default PreviousEmployers;
