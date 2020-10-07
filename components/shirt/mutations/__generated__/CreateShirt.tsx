import * as Types from '../../../__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type CreateShirtVariables = Types.Exact<{
  color: Types.ShirtColorType;
  name?: Types.Maybe<Types.Scalars['String']>;
  size: Types.Scalars['Int'];
}>;


export type CreateShirt = (
  { __typename: 'Mutation' }
  & { createShirt?: Types.Maybe<(
    { __typename: 'Shirt' }
    & Pick<Types.Shirt, 'id' | 'name' | 'color' | 'size'>
  )> }
);


export const CreateShirtDocument = gql`
    mutation CreateShirt($color: ShirtColorType!, $name: String, $size: Int!) {
  createShirt(name: $name, color: $color, size: $size) {
    id
    name
    color
    size
  }
}
    `;
export type CreateShirtMutationFn = Apollo.MutationFunction<CreateShirt, CreateShirtVariables>;

/**
 * __useCreateShirt__
 *
 * To run a mutation, you first call `useCreateShirt` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShirt` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShirt, { data, loading, error }] = useCreateShirt({
 *   variables: {
 *      color: // value for 'color'
 *      name: // value for 'name'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useCreateShirt(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateShirt, CreateShirtVariables>) {
        return ApolloReactHooks.useMutation<CreateShirt, CreateShirtVariables>(CreateShirtDocument, baseOptions);
      }
export type CreateShirtHookResult = ReturnType<typeof useCreateShirt>;
export type CreateShirtMutationResult = Apollo.MutationResult<CreateShirt>;
export type CreateShirtMutationOptions = Apollo.BaseMutationOptions<CreateShirt, CreateShirtVariables>;