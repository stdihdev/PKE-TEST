import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type DeletePantsByIdVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeletePantsById = (
  { __typename: 'Mutation' }
  & Pick<Types.Mutation, 'deletePantsById'>
);


export const DeletePantsByIdDocument = gql`
    mutation DeletePantsById($id: ID!) {
  deletePantsById(id: $id)
}
    `;
export type DeletePantsByIdMutationFn = Apollo.MutationFunction<DeletePantsById, DeletePantsByIdVariables>;

/**
 * __useDeletePantsById__
 *
 * To run a mutation, you first call `useDeletePantsById` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePantsById` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePantsById, { data, loading, error }] = useDeletePantsById({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePantsById(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePantsById, DeletePantsByIdVariables>) {
        return ApolloReactHooks.useMutation<DeletePantsById, DeletePantsByIdVariables>(DeletePantsByIdDocument, baseOptions);
      }
export type DeletePantsByIdHookResult = ReturnType<typeof useDeletePantsById>;
export type DeletePantsByIdMutationResult = Apollo.MutationResult<DeletePantsById>;
export type DeletePantsByIdMutationOptions = Apollo.BaseMutationOptions<DeletePantsById, DeletePantsByIdVariables>;