import CategoryHeader from "./CategoryHeader";

function PersonalDetails() {
  return (
    <>
      <div className="mt-8">
        <CategoryHeader text="Personal & Contact Details"></CategoryHeader>
      </div>
      <div className="mt-4 mb-8 text-gray-800 dark:text-neutral-400">
        <p>
          <span className="inline-block w-64 font-semibold">First name:</span>Gergely
        </p>
        <p>
          <span className="inline-block w-64 font-semibold">Last name:</span>Kovacs
        </p>
        <p>
          <span className="inline-block w-64 font-semibold">Date of birth:</span>1992. 04. 11.
        </p>
        <p>
          <span className="inline-block w-64 font-semibold">Nationality:</span>hungarian
        </p>
        <p>
          <span className="inline-block w-64 font-semibold">Highest degree:</span>Computer Science Engineering (BSc)
        </p>
        <p>
          <span className="inline-block w-64 font-semibold">Email:</span>gergely-kovacs@hotmail.com
        </p>
        <p>
          <span className="inline-block w-64 font-semibold">Phone:</span>+36 70 389 7606
        </p>
        {/* TODO: add website link, add github account link */}
      </div>
    </>
  );
}

export default PersonalDetails;
