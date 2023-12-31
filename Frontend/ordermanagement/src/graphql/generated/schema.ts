import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
};

export type Adress = {
  __typename?: 'Adress';
  adressLine1?: Maybe<Scalars['String']>;
  adressLine2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customerId: Scalars['Int'];
  id: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
};

export type AdressFilterInput = {
  adressLine1?: InputMaybe<StringOperationFilterInput>;
  adressLine2?: InputMaybe<StringOperationFilterInput>;
  and?: InputMaybe<Array<AdressFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  customerId?: InputMaybe<ComparableInt32OperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  or?: InputMaybe<Array<AdressFilterInput>>;
  state?: InputMaybe<StringOperationFilterInput>;
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableDecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']>;
  gt?: InputMaybe<Scalars['Decimal']>;
  gte?: InputMaybe<Scalars['Decimal']>;
  in?: InputMaybe<Array<Scalars['Decimal']>>;
  lt?: InputMaybe<Scalars['Decimal']>;
  lte?: InputMaybe<Scalars['Decimal']>;
  neq?: InputMaybe<Scalars['Decimal']>;
  ngt?: InputMaybe<Scalars['Decimal']>;
  ngte?: InputMaybe<Scalars['Decimal']>;
  nin?: InputMaybe<Array<Scalars['Decimal']>>;
  nlt?: InputMaybe<Scalars['Decimal']>;
  nlte?: InputMaybe<Scalars['Decimal']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type Customer = {
  __typename?: 'Customer';
  adress?: Maybe<Adress>;
  contactNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Maybe<Order>>>;
};

export type CustomerFilterInput = {
  adress?: InputMaybe<AdressFilterInput>;
  and?: InputMaybe<Array<CustomerFilterInput>>;
  contactNumber?: InputMaybe<StringOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CustomerFilterInput>>;
  orders?: InputMaybe<ListFilterInputTypeOfOrderFilterInput>;
};

export type ListFilterInputTypeOfOrderFilterInput = {
  all?: InputMaybe<OrderFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<OrderFilterInput>;
  some?: InputMaybe<OrderFilterInput>;
};

export type Order = {
  __typename?: 'Order';
  customer?: Maybe<Customer>;
  customerId: Scalars['Int'];
  depositAmount: Scalars['Decimal'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  isDelivery: Scalars['Boolean'];
  orderDate: Scalars['DateTime'];
  otherNote?: Maybe<Scalars['String']>;
  status: Status;
  totalAmaount: Scalars['Decimal'];
};

export type OrderFilterInput = {
  and?: InputMaybe<Array<OrderFilterInput>>;
  customer?: InputMaybe<CustomerFilterInput>;
  customerId?: InputMaybe<ComparableInt32OperationFilterInput>;
  depositAmount?: InputMaybe<ComparableDecimalOperationFilterInput>;
  description?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  isDeleted?: InputMaybe<BooleanOperationFilterInput>;
  isDelivery?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<OrderFilterInput>>;
  orderDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  otherNote?: InputMaybe<StringOperationFilterInput>;
  status?: InputMaybe<StatusOperationFilterInput>;
  totalAmaount?: InputMaybe<ComparableDecimalOperationFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  customers?: Maybe<Array<Maybe<Customer>>>;
  orders?: Maybe<Array<Maybe<Order>>>;
};


export type QueryCustomersArgs = {
  where?: InputMaybe<CustomerFilterInput>;
};


export type QueryOrdersArgs = {
  where?: InputMaybe<OrderFilterInput>;
};

export enum Status {
  Completed = 'COMPLETED',
  Draft = 'DRAFT',
  Pending = 'PENDING',
  Shipped = 'SHIPPED'
}

export type StatusOperationFilterInput = {
  eq?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  neq?: InputMaybe<Status>;
  nin?: InputMaybe<Array<Status>>;
};

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type GetCustomersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCustomersQuery = { __typename?: 'Query', customers?: Array<{ __typename?: 'Customer', id: number, firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null, adress?: { __typename?: 'Adress', city?: string | null, adressLine1?: string | null, adressLine2?: string | null, state?: string | null, country?: string | null } | null, orders?: Array<{ __typename?: 'Order', orderDate: any, description?: string | null, totalAmaount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNote?: string | null } | null> | null } | null> | null };

export type GetordersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetordersQuery = { __typename?: 'Query', orders?: Array<{ __typename?: 'Order', id: number, customerId: number, orderDate: any, description?: string | null, totalAmaount: any, depositAmount: any, isDelivery: boolean, status: Status, otherNote?: string | null, isDeleted: boolean, customer?: { __typename?: 'Customer', firstName?: string | null, lastName?: string | null, contactNumber?: string | null, email?: string | null, adress?: { __typename?: 'Adress', adressLine1?: string | null, adressLine2?: string | null, city?: string | null, state?: string | null, country?: string | null } | null } | null } | null> | null };


export const GetCustomersDocument = gql`
    query GetCustomers {
  customers {
    id
    firstName
    lastName
    contactNumber
    email
    adress {
      city
      adressLine1
      adressLine2
      state
      country
    }
    orders {
      orderDate
      description
      totalAmaount
      depositAmount
      isDelivery
      status
      otherNote
    }
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions?: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetordersDocument = gql`
    query Getorders {
  orders {
    id
    customerId
    customer {
      firstName
      lastName
      contactNumber
      email
      adress {
        adressLine1
        adressLine2
        city
        state
        country
      }
    }
    orderDate
    description
    totalAmaount
    depositAmount
    isDelivery
    status
    otherNote
    isDeleted
  }
}
    `;

/**
 * __useGetordersQuery__
 *
 * To run a query within a React component, call `useGetordersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetordersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetordersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetordersQuery(baseOptions?: Apollo.QueryHookOptions<GetordersQuery, GetordersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetordersQuery, GetordersQueryVariables>(GetordersDocument, options);
      }
export function useGetordersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetordersQuery, GetordersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetordersQuery, GetordersQueryVariables>(GetordersDocument, options);
        }
export type GetordersQueryHookResult = ReturnType<typeof useGetordersQuery>;
export type GetordersLazyQueryHookResult = ReturnType<typeof useGetordersLazyQuery>;
export type GetordersQueryResult = Apollo.QueryResult<GetordersQuery, GetordersQueryVariables>;