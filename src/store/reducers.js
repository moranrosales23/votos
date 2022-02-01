import { ADD_VOTE, LOAD_CANDIDATES, UPDATE_FILTER } from "./types";
const initialState = {
  candidates: [],
  filter: { radio: "total", total: false, select: 1 },
  totalVotes: 0,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_VOTE:
      const candidates = state.candidates.map((candidate) => {
        if (candidate.id === action.payload.id) {
          state.totalVotes++;
          return action.payload;
        }
        return candidate;
      });
      return {
        ...state,
        candidates,
      };
    case LOAD_CANDIDATES:
      state.totalVotes = action.payload.reduce((pre, candidate) => {
        return pre + candidate.votes;
      }, 0);
      return {
        ...state,
        candidates: action.payload,
      };
    case UPDATE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
