import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import ResultsContainer from "./components/ResultsContainer";
import { GET_ALL_LINKS } from "./graphQL/queries";
import "./styles.css";

export default function App() {
  const { loading, error, data, refetch } = useQuery(GET_ALL_LINKS);
  const [allLinks, setAllLinks] = useState([]);

  useEffect(() => {
    return !loading && !error && setAllLinks(data.allLinks);
  }, [data, loading, error]);

  if (loading) return <p>Loading ...</p>;
  if (error) return `Error! ${error}`;

  return (
    <div className="App bg-gray-100 min-h-screen xl:max-w-screen-xl mx-auto">
      <Form refetch={refetch} />
      <ResultsContainer links={allLinks} />
    </div>
  );
}
