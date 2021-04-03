import { useQuery, useMutation, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import ResultsContainer from "./components/ResultsContainer";
import { GET_ALL_LINKS } from "./graphQL/getAllLinksQuery";
import "./styles.css";

const CREATE_LINK = gql`
  mutation CreateLink($slug: String, $url: String!) {
    createLink(slug: $slug, url: $url) {
      slug
      url
    }
  }
`;

export default function App() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_LINKS);
  const [allLinks, setAllLinks] = useState([]);

  const [inputLink, setInputLink] = useState("");
  const [inputSlug, setInputSlug] = useState("");

  useEffect(() => {
    return !loading && !error && setAllLinks(data.allLinks);
  }, [data, loading, error]);

  const [
    createLink,
    { loading: mutationLoading, error: mutationError }
  ] = useMutation(CREATE_LINK, {
    onCompleted({ createLink }) {
      if (createLink) {
        alert("link added!");
        refetch();
        setInputLink("");
        setInputSlug("");
      }
    }
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
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
      <ResultsContainer links={allLinks} />
    </div>
  );
}
