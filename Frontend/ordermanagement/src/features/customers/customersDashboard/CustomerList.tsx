import React, { useMemo, useState } from 'react';
import { Adress, Customer } from '../../../graphql/generated/schema';
import {AgGridReact} from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
interface CustomerListProps{

    customers: Customer []
}


export default function CustomerList({customers}: CustomerListProps){
    const [columnDefs] = useState([

        {
            field:'id',
        
           
        },
        {
            field:'firstName',
      
           
        },
        {
            field:'lastName',
            
           
        },
        {
            field:'contactNumber',
            
        },
        {
            field:'email',
            
          
           
        },
        {
            field:'adress',
            cellRenderer: function (params:any)
            {
                const adress = params.value as Adress;
                return adress.adressLine1==null?adress.adressLine1:''
                +', ' + adress.adressLine2
                +', ' + adress.city
                +', ' + adress.state
                +', ' + adress.country  ;               
                    

            }
          
           
        }


    ]);


    const defaultColDef = useMemo(() => ({

        sortable: true,
        filter: true,
        resizable: true
    }), []);


    return (
        <div  className='ag-theme-alpine' style={{height:'98vh', width:'100%'}}>
            <AgGridReact
                rowData = {customers}
                columnDefs = {columnDefs}
                defaultColDef={defaultColDef}

            /> 
        </div>
    );
 
}