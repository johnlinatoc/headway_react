import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { CREATE_LINK } from "../graphQL/queries";

const Form = (props) => {
  const [inputLink, setInputLink] = useState("");
  const [inputSlug, setInputSlug] = useState("");
  const [createLink] = useMutation(CREATE_LINK, {
    onCompleted({ createLink }) {
      if (createLink) {
        alert("Link added!");
        props.refetch();
        setInputLink("");
        setInputSlug("");
      }
    }
  });

  useEffect(() => {
    props.refetch();
  }, [props]);

  return (
    <form
      className={
        "flex flex-col pt-10 px-4 pb-4 bg-blue-900 md:flex-row justify-between"
      }
      onSubmit={(e) => {
        e.preventDefault();
        createLink({ variables: { url: inputLink, slug: inputSlug } });
        setInputLink("");
        setInputSlug("");
      }}
    >
      <div className="flex flex-col md:flex-row  md:w-9/12 md:items-center">
        <input
          type="url"
          className={
            "form-contol mb-2 h-10 md:mt-2 md:w-full rounded text-center"
          }
          placeholder="Make your links shorter"
          value={inputLink}
          required
          onChange={(e) => {
            setInputLink(e.target.value);
          }}
        />
        <input
          type="text"
          className={"form-contol h-10 md:ml-6 md:w-full rounded text-center"}
          placeholder="(Optional) Add unique code"
          value={inputSlug}
          onChange={(e) => {
            setInputSlug(e.target.value);
          }}
        />
      </div>
      <button type="submit" className={"btn btn-primary mt-4 md:mb-6 md:w-1/5"}>
        Shorten URL
      </button>
    </form>
  );
};

export default Form;
