import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ApolloProvider, ApolloClient, createNetworkInterface} from "react-apollo";
import "./index.css";
import netlifyIdentity from "netlify-identity-widget";
import registerServiceWorker from "./registerServiceWorker";

netlifyIdentity.init();

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: `${process.env.graphcoolEndpoint}`}),
  dataIdFromObject: o => o.id,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);

registerServiceWorker();
