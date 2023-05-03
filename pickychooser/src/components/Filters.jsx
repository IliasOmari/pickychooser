import React from "react";
import Button from "react-bootstrap/Button";
import "./filters.modules.css";

const Filters = () => {
  return (
    <>
      <div className="filterbuttons">
        <Button variant="secondary">All</Button>
        <Button variant="secondary">Alcoholic</Button>
        <Button variant="secondary">Non-alcoholic</Button>
      </div>
    </>
  );
};

export default Filters;
