import React, { useState } from 'react';
 
import { Order, Customer } from '../../graphql/generated/schema';
import OmGrid from '../../Components/elements/OmGrid';
interface OrderListProps{

    orders: Order[]
}


export default function OrdersList({orders}: OrderListProps){
    const [columnDefs] = useState([

        {
            field:'id',        
           width:50
           
        },
        {
            field:'customerId',
            width:50
           
        },
        {
            field:'orderDate',
            
           
        },
        {
            field:'description',
            
        },
        {
            field:'totalAmaount',

        },
        {
            field:'depositAmount',

        },
        {
            field:'otherNote',

        },
        {
            field:'customer',
            cellRenderer: function (params:any)
            {
                const customer = params.value as Customer;
                return customer.firstName
                +', ' + customer.lastName
                +', ' + customer.contactNumber
             ;               
            }
          
        },

        {
            field:'customer',
            
            headerName:'Address',
            cellRenderer: function (params:any)
            {
                const customer = params.value as Customer;
                return customer.adress?.adressLine1
                +', ' + customer.adress?.adressLine2             ;               
            }
          
        }


    ]);

    return (
        <OmGrid rowData={orders} columnDefs={columnDefs} />
    );
 
}