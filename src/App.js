import "./App.css";
import Candidates from "./components/candidates/Candidates";
import Filters from "./components/filter/Filters";
import TotalVotes from "./components/total/TotalVotes";

import VotesPerCanditate from "./components/votes/VotesPerCanditate";

function App() {
  return (
    <div className="layout">
      <div>
        <Candidates />
      </div>
      <div className="content">
        <Filters />
        <div>
          <TotalVotes />
          <VotesPerCanditate />
        </div>
      </div>
    </div>
  );
}

export default App;
