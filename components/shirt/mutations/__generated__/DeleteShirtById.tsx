import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type DeleteShirtByIdVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteShirtById = (
  { __typename: 'Mutation' }
  & Pick<Types.Mutation, 'deleteShirtById'>
);


export const DeleteShirtByIdDocument = gql`
    mutation DeleteShirtById($id: ID!) {
  deleteShirtById(id: $id)
}
    `;
export type DeleteShirtByIdMutationFn = Apollo.MutationFunction<DeleteShirtById, DeleteShirtByIdVariables>;

/**
 * __useDeleteShirtById__
 *
 * To run a mutation, you first call `useDeleteShirtById` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShirtById` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteShirtById, { data, loading, error }] = useDeleteShirtById({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteShirtById(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteShirtById, DeleteShirtByIdVariables>) {
        return ApolloReactHooks.useMutation<DeleteShirtById, DeleteShirtByIdVariables>(DeleteShirtByIdDocument, baseOptions);
      }
export type DeleteShirtByIdHookResult = ReturnType<typeof useDeleteShirtById>;
export type DeleteShirtByIdMutationResult = Apollo.MutationResult<DeleteShirtById>;
export type DeleteShirtByIdMutationOptions = Apollo.BaseMutationOptions<DeleteShirtById, DeleteShirtByIdVariables>;