import React from "react";

const ResultsContainer = (props) => {
  const renderLinks = () =>
    props.links.map((link) => {
      return <p>{link.url}</p>;
    });

  return <div>{renderLinks()}</div>;
};

export default ResultsContainer;
