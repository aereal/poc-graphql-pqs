import * as Types from '../types.gen';

export type GetCharactersQueryVariables = Types.Exact<{
  first: Types.Scalars['UnsignedInt']['input'];
}>;


export type GetCharactersQuery = { __typename?: 'Query', characters: { __typename?: 'CharacterConnection', pageInfo: { __typename?: 'PageInfo', hasNext: boolean }, nodes: Array<{ __typename?: 'Character', name: string, element: Types.Element }> } };
