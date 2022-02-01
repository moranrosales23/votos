import React from "react";
import { useSelector } from "react-redux";
import "./TotalVotes.css";

export default function TotalVotes() {
  const { totalVotes } = useSelector((state) => state);

  return (
    <div className="votos-total">
      Votos Totales: <strong>{totalVotes}</strong>
    </div>
  );
}
