import React from "react";

const SearchButton = (props) => {
  return (
    <div className="container text-center">
      <button
        className="btn btn-primary mt-5 mb-5 pt-3 pb-3 text-lg"
        style={{ background: "#98da1f" }}
        onClick={props.handleSubmit}
      >
        Sort By First Name
      </button>
    </div>
  );
};

export default SearchButton