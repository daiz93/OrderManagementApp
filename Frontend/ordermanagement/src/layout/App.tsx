import React from 'react';

import './Style.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CustomerDashboard from '../features/customers/customersDashboards/CustomersDashboard';
const client = new ApolloClient({
  cache:new InMemoryCache ({
    typePolicies : {}
    
  }),
  uri:"http://localhost:5243/graphql/"
})

function App() {
  return (
     <ApolloProvider client  ={client}>
      <CustomerDashboard />
     </ApolloProvider>
  );
}

export default App;
