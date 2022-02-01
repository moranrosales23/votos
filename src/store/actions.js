import { getCandidates, updateVote } from "../lib/services";
import { ADD_VOTE, LOAD_CANDIDATES, UPDATE_FILTER } from "./types";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const addVote = (candidate) => ({
  type: ADD_VOTE,
  payload: candidate,
});

const loadCandidates = (candidates) => ({
  type: LOAD_CANDIDATES,
  payload: candidates,
});

export const changeFilter = (filter) => ({
  type: UPDATE_FILTER,
  payload: filter,
});

export const fetchCandidates = () => async (dispatch) => {
  try {
    MySwal.showLoading();
    const candidates = await getCandidates();
    dispatch(loadCandidates(candidates));
    MySwal.close();
  } catch (err) {
    MySwal.fire({ icon: "error", title: "Error", text: err.error });
  }
};

export const updateVotes = (id, votes) => async (dispatch) => {
  try {
    MySwal.showLoading();
    const update = await updateVote(id, votes);
    dispatch(addVote(update));
    MySwal.close();
  } catch (err) {
    MySwal.fire({ icon: "error", title: "Error", text: err.error });
  }
};
