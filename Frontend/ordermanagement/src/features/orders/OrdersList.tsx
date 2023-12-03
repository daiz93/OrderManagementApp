import React, { useMemo, useState } from 'react';
 
import {AgGridReact} from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Order, Adress, Customer } from '../../graphql/generated/schema';
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


    const defaultColDef = useMemo(() => ({

        sortable: true,
        filter: true,
        resizable: true,
        
    }), []);


    return (
        <div  className='ag-theme-alpine' style={{height:'98vh', width:'100%'}}>
            <AgGridReact
                rowData = {orders}
                columnDefs = {columnDefs}
                defaultColDef={defaultColDef}

            /> 
        </div>
    );
 
}