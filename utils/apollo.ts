import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors != null) {
    graphQLErrors.forEach(({ message }) =>
      console.log("[GraphQL error]: Message: " + String(message.toUpperCase()))
    );
  }
  if (networkError != null) {
    console.log("[Network error]: " + String(networkError.message));
  }
});

const httpLink = new HttpLink({
  uri: process.env.HYGRAPH_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
  };
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache(),
  });
});
