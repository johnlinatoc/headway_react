import { useMutation } from "@apollo/client";
import React, { useState } from "react";
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createLink({ variables: { url: inputLink, slug: inputSlug } });
        setInputLink("");
        setInputSlug("");
      }}
    >
      <label>Make your links shorter!</label>
      <input
        type="url"
        className={"form-contol"}
        placeholder="Add Link Here"
        value={inputLink}
        required
        onChange={(e) => {
          setInputLink(e.target.value);
        }}
      />
      <label>Add unique identifier (Optional)</label>
      <input
        type="text"
        className={"form-contol"}
        placeholder="ex: 1234"
        value={inputSlug}
        onChange={(e) => {
          setInputSlug(e.target.value);
        }}
      />
      <button type="submit" className={"btn btn-primary"}>
        Submit
      </button>
    </form>
  );
};

export default Form;
