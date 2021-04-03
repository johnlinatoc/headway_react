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
      console.error(err);
    }
  };

  const renderLinks = () =>
    props.links.map((link, index) => {
      return (
        <div className="flex justify-between items-center mt-4" key={index}>
          <textarea
            id={`link-${index}`}
            readOnly
            className="w-4/5 my-auto leading-4 py-2"
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
            className={"btn-secondary w-1/5 h-3/5 my-auto ml-1 rounded"}
            onClick={(e) => {
              copyText(index);
            }}
          >
            Copy
          </button>
        </div>
      );
    });

  return (
    <div className="p-4 flex-col flex bg-gray-100 max-w-xl mx-auto">
      <h2 className="font-bold text-xl">Shortened Links</h2>
      {renderLinks().length > 0 ? (
        <div className="flex flex-col-reverse">{renderLinks()}</div>
      ) : (
        <p className="mt-2">No links shortened yet!</p>
      )}
    </div>
  );
};

export default ResultsContainer;
