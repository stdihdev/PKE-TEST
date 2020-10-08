import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type All_pantsVariables = Types.Exact<{ [key: string]: never; }>;


export type All_pants = (
  { __typename: 'Query' }
  & { all_pants?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Pants' }
    & Pick<Types.Pants, 'id' | 'name' | 'color' | 'W' | 'L'>
  )>>> }
);


export const All_pantsDocument = gql`
    query All_pants {
  all_pants {
    id
    name
    color
    W
    L
  }
}
    `;

/**
 * __useAll_pants__
 *
 * To run a query within a React component, call `useAll_pants` and pass it any options that fit your needs.
 * When your component renders, `useAll_pants` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAll_pants({
 *   variables: {
 *   },
 * });
 */
export function useAll_pants(baseOptions?: ApolloReactHooks.QueryHookOptions<All_pants, All_pantsVariables>) {
        return ApolloReactHooks.useQuery<All_pants, All_pantsVariables>(All_pantsDocument, baseOptions);
      }
export function useAll_pantsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<All_pants, All_pantsVariables>) {
          return ApolloReactHooks.useLazyQuery<All_pants, All_pantsVariables>(All_pantsDocument, baseOptions);
        }
export type All_pantsHookResult = ReturnType<typeof useAll_pants>;
export type All_pantsLazyQueryHookResult = ReturnType<typeof useAll_pantsLazyQuery>;
export type All_pantsQueryResult = Apollo.QueryResult<All_pants, All_pantsVariables>;