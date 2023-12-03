import React, { useState } from 'react';
import { Adress, Customer } from '../../../graphql/generated/schema';
import OmGrid from '../../../Components/elements/OmGrid';
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


   

    return (
        <OmGrid rowData={customers} columnDefs={columnDefs} />
   );
 
}