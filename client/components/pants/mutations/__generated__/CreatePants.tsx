import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type CreatePantsVariables = Types.Exact<{
  L: Types.Scalars['Int'];
  W: Types.Scalars['Int'];
  color: Types.Scalars['String'];
  name?: Types.Maybe<Types.Scalars['String']>;
}>;


export type CreatePants = (
  { __typename: 'Mutation' }
  & { createPants?: Types.Maybe<(
    { __typename: 'Pants' }
    & Pick<Types.Pants, 'id' | 'name' | 'color' | 'W' | 'L'>
  )> }
);


export const CreatePantsDocument = gql`
    mutation CreatePants($L: Int!, $W: Int!, $color: String!, $name: String) {
  createPants(L: $L, W: $W, color: $color, name: $name) {
    id
    name
    color
    W
    L
  }
}
    `;
export type CreatePantsMutationFn = Apollo.MutationFunction<CreatePants, CreatePantsVariables>;

/**
 * __useCreatePants__
 *
 * To run a mutation, you first call `useCreatePants` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePants` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPants, { data, loading, error }] = useCreatePants({
 *   variables: {
 *      L: // value for 'L'
 *      W: // value for 'W'
 *      color: // value for 'color'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreatePants(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePants, CreatePantsVariables>) {
        return ApolloReactHooks.useMutation<CreatePants, CreatePantsVariables>(CreatePantsDocument, baseOptions);
      }
export type CreatePantsHookResult = ReturnType<typeof useCreatePants>;
export type CreatePantsMutationResult = Apollo.MutationResult<CreatePants>;
export type CreatePantsMutationOptions = Apollo.BaseMutationOptions<CreatePants, CreatePantsVariables>;