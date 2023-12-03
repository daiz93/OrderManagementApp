import React from 'react';

import './Style.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
 
import HomePage  from '../features/home/HomePage';
import Layout from './Layout';
import './Style.css';
import CustomersDashboard from '../features/customers/customersDashboard/CustomersDashboard';
import OrdersDashboard from '../features/orders/OrdersDashboard';

 
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
          <Route path='/' element={<Layout/>}> 
          <Route  index element={<HomePage/>}/>
          <Route path="customers" element={<CustomersDashboard />} />
          <Route path="orders" element={<OrdersDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
     
     </ApolloProvider>
  );
}

export default App;
