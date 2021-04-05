import React from "react";

const Link = (props) => {
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

  return (
    <div className="flex justify-between items-center mt-4" key={props.index}>
      <textarea
        id={`link-${props.index}`}
        readOnly
        className="w-4/5 my-auto leading-4 py-2"
        style={{
          resize: "none",
          border: "none",
          outline: "none",
          background: "transparent"
        }}
      >
        {props.link}
      </textarea>
      <button
        className={"btn-secondary w-1/5 h-3/5 my-auto ml-1 rounded"}
        onClick={(e) => {
          copyText(props.index);
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default Link;
