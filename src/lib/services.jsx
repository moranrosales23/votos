export const getCandidates = () =>
  fetch(process.env.REACT_APP_API).then((res) => res.json());

export const updateVote = (id, votes) => {
  return fetch(`${process.env.REACT_APP_API}${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votes: votes + 1 }),
  }).then((res) => res.json());
};
