import "./styles.css";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
  useQuery
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://87hxc.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query {
        allLinks {
          url
        }
      }
    `
  })
  .then((result) => console.log(result));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </ApolloProvider>
  );
}
