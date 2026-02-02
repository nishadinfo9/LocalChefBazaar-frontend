import React, { memo } from "react";

const SortSelect = memo(({ sortVal, sortHandler }) => {
  return (
    <select
      onChange={(e) => sortHandler(e.target.value)}
      value={sortVal}
      className="select select-neutral"
    >
      <option disabled={true}>Sort By Price</option>
      <option value={"asce"}>Low To High</option>
      <option value={"dsc"}>High To Low</option>
    </select>
  );
});

export default SortSelect;
