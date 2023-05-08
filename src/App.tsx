import "./App.css";
import CategoryHeader from "./CategoryHeader";
import DarkModeToggler from "./DarkModeToggler";
import { details } from "./details";

function App() {
  const jobSummary = details.map((jobDetails) => {
    // TODO: actually summarize how much experience you have with each tech
    return <div key={jobDetails.id}>{jobDetails.name}</div>;
  });

  return (
    <div className="container-sm mx-auto h-full max-w-screen-lg p-5">
      <div className="flex justify-between">
        <CategoryHeader text="Personal & Contact Details"></CategoryHeader>
        <DarkModeToggler></DarkModeToggler>
      </div>
      <div className="py-5 text-stone-900 dark:text-sky-100">
        <p>
          <span className="inline-block w-36 font-semibold">First name:</span> Gergely
        </p>
        <p>
          <span className="inline-block w-36 font-semibold">Last name:</span> Kovacs
        </p>
        <p>
          <span className="inline-block w-36 font-semibold">Date of birth:</span> 1992. 04. 11.
        </p>
        <p>
          <span className="inline-block w-36 font-semibold">Nationality:</span> hungarian
        </p>
        <p>
          <span className="inline-block w-36 font-semibold">Highest degree:</span> Computer Science Engineering (BSc)
        </p>
        <p>
          <span className="inline-block w-36 font-semibold">Email:</span> gergely-kovacs@hotmail.com
        </p>
        <p>
          <span className="inline-block w-36 font-semibold">Phone:</span> +36 70 389 7606
        </p>
        {/* TODO: add website link */}
      </div>
      <CategoryHeader text="Experience"></CategoryHeader>
      <div className="py-5 text-stone-900 dark:text-sky-100">{jobSummary}</div>
    </div>
  );
}

export default App;
