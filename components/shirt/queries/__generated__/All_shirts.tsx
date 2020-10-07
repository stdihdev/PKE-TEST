import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type All_shirtsVariables = Types.Exact<{ [key: string]: never; }>;


export type All_shirts = (
  { __typename: 'Query' }
  & { all_shirts?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Shirt' }
    & Pick<Types.Shirt, 'id' | 'name' | 'color' | 'size'>
  )>>> }
);


export const All_shirtsDocument = gql`
    query All_shirts {
  all_shirts {
    id
    name
    color
    size
  }
}
    `;

/**
 * __useAll_shirts__
 *
 * To run a query within a React component, call `useAll_shirts` and pass it any options that fit your needs.
 * When your component renders, `useAll_shirts` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAll_shirts({
 *   variables: {
 *   },
 * });
 */
export function useAll_shirts(baseOptions?: ApolloReactHooks.QueryHookOptions<All_shirts, All_shirtsVariables>) {
        return ApolloReactHooks.useQuery<All_shirts, All_shirtsVariables>(All_shirtsDocument, baseOptions);
      }
export function useAll_shirtsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<All_shirts, All_shirtsVariables>) {
          return ApolloReactHooks.useLazyQuery<All_shirts, All_shirtsVariables>(All_shirtsDocument, baseOptions);
        }
export type All_shirtsHookResult = ReturnType<typeof useAll_shirts>;
export type All_shirtsLazyQueryHookResult = ReturnType<typeof useAll_shirtsLazyQuery>;
export type All_shirtsQueryResult = Apollo.QueryResult<All_shirts, All_shirtsVariables>;