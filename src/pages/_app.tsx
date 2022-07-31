import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useApolloClient } from "contexts";
import { AppProps } from "next/app";
import "@paljs/admin/style.css";

function App({ Component, pageProps }: AppProps) {
  const client = useApolloClient(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
