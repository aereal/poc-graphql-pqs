import gql from "graphql-tag";
import { getClient } from "../../src/apollo-client";
import { GetCharactersQuery } from "./page.gen";

const getCharactersQuery = gql`
  query GetCharacters($first: UnsignedInt!) {
    characters(first: $first) {
      pageInfo {
        hasNext
      }
      nodes {
        name
        element
      }
    }
  }
`;

const Page = async () => {
  const { loading, error, data } = await getClient().query<GetCharactersQuery>({
    query: getCharactersQuery,
    variables: { first: 10 },
  });
  return (
    <main className="flex min-w-max min-h-screen flex-col items-center justify-between p-24">
      {loading ? (
        <p>loading ...</p>
      ) : error !== undefined ? (
        <p>Error: {error.message}</p>
      ) : data !== undefined ? (
        <div>
          {data.characters.nodes.map((character) => (
            <div key={character.name}>
              {character.name} ({character.element})
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
};

export default Page;
