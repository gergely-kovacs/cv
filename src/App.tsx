import "./App.css";
import ExperienceSummary from "./ExperienceSummary";
import NavHeader from "./NavHeader";
import PersonalDetails from "./PersonalDetails";
import PreviousClients from "./PreviousClients";
import PreviousEmployers from "./PreviousEmployers";

function App() {
  return (
    <div className="container-sm mx-auto h-full max-w-screen-md p-5">
      <NavHeader></NavHeader>
      <PersonalDetails></PersonalDetails>
      <ExperienceSummary></ExperienceSummary>
      <PreviousEmployers></PreviousEmployers>
      <PreviousClients></PreviousClients>
    </div>
  );
}

export default App;
