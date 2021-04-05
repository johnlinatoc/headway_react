import React from "react";
import Link from "./Link";

const LinksContainer = (props) => {
  const renderLinks = () =>
    props.links.map((link, index) => {
      return <Link index={index} link={link.url} />;
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

export default LinksContainer;
