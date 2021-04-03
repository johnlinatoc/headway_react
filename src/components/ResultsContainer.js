import React, { useRef } from "react";

const ResultsContainer = (props) => {
  const linkInput = useRef(null);

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
        <>
          <textarea
            ref={linkInput}
            id={`link-${index}`}
            readonly
            disabled
            style={{ resize: "none" }}
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
        </>
      );
    });

  return <div>{renderLinks()}</div>;
};

export default ResultsContainer;
