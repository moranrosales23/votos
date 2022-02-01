const baseUrl = "http://localhost:8080/candidates";
export const getCandidates = () => fetch(baseUrl).then((res) => res.json());

export const updateVote = (id, votes) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ votes: votes + 1 }),
  }).then((res) => res.json());
};
