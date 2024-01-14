import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { generatePersistedQueryIdsFromManifest } from "@apollo/persisted-query-lists";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_API_ENDPOINT ?? "",
});

const pqsLink = createPersistedQueryLink(
  generatePersistedQueryIdsFromManifest({
    loadManifest: () => import("../pqs-manifest.json"),
  })
);

export const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      link: pqsLink.concat(httpLink),
      cache: new InMemoryCache(),
    })
);
