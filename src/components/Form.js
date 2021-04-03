import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { CREATE_LINK } from "../graphQL/queries";

const Form = (props) => {
  const [inputLink, setInputLink] = useState("");
  const [inputSlug, setInputSlug] = useState("");
  const [
    createLink,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(CREATE_LINK, {
    onCompleted({ createLink }) {
      if (createLink) {
        alert("link added!");
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
      className={"flex flex-col p-4 bg-blue-900"}
      onSubmit={(e) => {
        e.preventDefault();
        createLink({ variables: { url: inputLink, slug: inputSlug } });
        setInputLink("");
        setInputSlug("");
      }}
    >
      <input
        type="url"
        className={"form-contol mt-4 h-10 rounded text-center"}
        placeholder="Make your links shorter"
        value={inputLink}
        required
        onChange={(e) => {
          setInputLink(e.target.value);
        }}
      />
      <input
        type="text"
        className={"form-contol mt-2 h-10 rounded text-center"}
        placeholder="(Optional) Add unique code"
        value={inputSlug}
        onChange={(e) => {
          setInputSlug(e.target.value);
        }}
      />
      <button type="submit" className={"btn btn-primary mt-4 mb-2"}>
        Shorten URL
      </button>
    </form>
  );
};

export default Form;
