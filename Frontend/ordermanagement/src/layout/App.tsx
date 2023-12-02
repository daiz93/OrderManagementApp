import React from 'react';

import './Style.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CustomerDashboard from '../features/customers/customersDashboards/CustomersDashboard';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
 
import HomePage  from '../features/home/HomePage';
import Layout from './Layout';

const client = new ApolloClient({
  cache:new InMemoryCache ({
    typePolicies : {}
    
  }),
  uri:process.env.REACT_APP_API_SCHEMA_URL
})

function App() {
  return (
     <ApolloProvider client  ={client}>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
          <Route  index element={<HomePage/>}></Route>
          <Route  path='customer' element={<CustomerDashboard />}></Route>
        </Routes>
      </BrowserRouter>
      
     
     </ApolloProvider>
  );
}

export default App;
