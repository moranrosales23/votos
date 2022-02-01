import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/actions";
import "./Filters.css";

export default function Filters() {
  const dispatch = useDispatch();
  const { filter, candidates } = useSelector((state) => state);

  function changeFilters($event) {
    if ($event.target === undefined) return;
    let filt = { ...filter };
    let value = !isNaN($event.target.value)
      ? parseInt($event.target.value)
      : $event.target.value;
    if ($event.target.name === "total") value = !filt.total;
    filt[$event.target.name] = value;
    dispatch(changeFilter(filt));
  }
  return (
    <div className="radio">
      <h3 className="ver">Ver</h3>
      <label htmlFor="percentage">
        <input
          type="radio"
          name="radio"
          id="percentage"
          value="percentage"
          checked={filter.radio === "percentage"}
          onChange={changeFilters}
        />
        %
      </label>

      <label htmlFor="total">
        <input
          type="radio"
          name="radio"
          id="total"
          value="total"
          checked={filter.radio === "total"}
          onChange={changeFilters}
        />
        Total
      </label>
      <label htmlFor="todos" className="todos">
        <input
          type="checkbox"
          name="total"
          id="todos"
          checked={filter.total}
          onChange={changeFilters}
        />
        Todos
      </label>
      {!filter.total && (
        <select name="select" value={filter.select} onChange={changeFilters}>
          {candidates.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
