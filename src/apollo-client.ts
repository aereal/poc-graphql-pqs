import { ApolloClient, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      uri: process.env.NEXT_PUBLIC_API_ENDPOINT ?? "",
      cache: new InMemoryCache(),
    })
);
