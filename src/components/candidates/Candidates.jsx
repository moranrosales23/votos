import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandidates, updateVotes } from "../../store/actions";
import "./Candidates.css";

export default function Candidates() {
  const dispatch = useDispatch();
  const { candidates } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch]);

  function addVotes(id, votes) {
    dispatch(updateVotes(id, votes));
  }

  return (
    <div>
      {candidates.map(({ name, id, votes }) => (
        <button
          type="button"
          className="button"
          key={id}
          onClick={() => addVotes(id, votes)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
