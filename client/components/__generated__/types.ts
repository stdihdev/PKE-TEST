export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  all_shirts?: Maybe<Array<Maybe<Shirt>>>;
  all_pants?: Maybe<Array<Maybe<Pants>>>;
};

export type Shirt = {
  __typename?: 'Shirt';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  color: ShirtColorType;
  size: Scalars['Int'];
};

export enum ShirtColorType {
  White = 'WHITE',
  Grey = 'GREY',
  Blue = 'BLUE'
}

export type Pants = {
  __typename?: 'Pants';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  W: Scalars['Int'];
  L: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createShirt?: Maybe<Shirt>;
  deleteShirtById?: Maybe<Scalars['Int']>;
  createPants?: Maybe<Pants>;
  deletePantsById?: Maybe<Scalars['Int']>;
};


export type MutationCreateShirtArgs = {
  name?: Maybe<Scalars['String']>;
  color: ShirtColorType;
  size: Scalars['Int'];
};


export type MutationDeleteShirtByIdArgs = {
  id: Scalars['ID'];
};


export type MutationCreatePantsArgs = {
  name?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  W: Scalars['Int'];
  L: Scalars['Int'];
};


export type MutationDeletePantsByIdArgs = {
  id: Scalars['ID'];
};
