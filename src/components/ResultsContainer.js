import React from "react";

const ResultsContainer = (props) => {
  const copyText = (id) => {
    const copyTextarea = document.querySelector(`#link-${id}`);
    copyTextarea.focus();
    copyTextarea.select();

    try {
      const successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      alert("Copying text command was " + msg);
    } catch (err) {
      alert("Oops, unable to copy");
    }
  };

  const renderLinks = () =>
    props.links.map((link, index) => {
      return (
        <div>
          <textarea
            id={`link-${index}`}
            readonly
            disabled
            style={{
              resize: "none",
              border: "none",
              outline: "none",
              background: "transparent"
            }}
          >
            {link.url}
          </textarea>
          <button
            className={"btn-secondary"}
            onClick={(e) => {
              copyText(index);
            }}
          >
            Copy
          </button>
        </div>
      );
    });

  return <div>{renderLinks()}</div>;
};

export default ResultsContainer;
