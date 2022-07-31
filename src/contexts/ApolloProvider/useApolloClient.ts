import React from "react";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const uri = "http://localhost:8000";

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri,
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    ssrMode: typeof window === "undefined",
  });
};

let apolloClient: any;

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export const useApolloClient = (initialState: any) => {
  return React.useMemo(() => initializeApollo(initialState), [initialState]);
};
