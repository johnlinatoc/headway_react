import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import ResultsContainer from "./components/ResultsContainer";
import { GET_ALL_LINKS } from "./graphQL/getAllLinksQuery";
import "./styles.css";

export default function App() {
  const { loading, error, data } = useQuery(GET_ALL_LINKS);
  const [allLinks, setAllLinks] = useState([]);

  useEffect(() => {
    return !loading && !error && setAllLinks(data.allLinks);
  }, [data, loading, error]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ResultsContainer links={allLinks} />
    </div>
  );
}
