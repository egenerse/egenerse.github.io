import React from "react";

export const SearchBar = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type={"checkbox"} /> Only Show Prices in Stock
        </p>
      </form>
    </div>
  );
};
