import React from "react";
import { useSelector } from "react-redux";
import "./VotesPerCandidate.css";

export default function VotesPerCanditate() {
  const { filter, candidates, totalVotes } = useSelector((state) => state);

  return (
    <div className="votes">
      <ul>
        {candidates
          .filter(
            (candidate) =>
              filter.total || (!filter.total && candidate.id === filter.select)
          )
          .map(({ id, name, votes }) => (
            <li key={id}>
              {name} ={" "}
              {filter.radio === "percentage"
                ? ((votes * 100) / totalVotes).toFixed(2) + "%"
                : votes + " votos"}
            </li>
          ))}
      </ul>
    </div>
  );
}
