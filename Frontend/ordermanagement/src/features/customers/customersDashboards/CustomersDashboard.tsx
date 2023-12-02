import React from "react";
import { useGetCustomersQuery } from "../../../graphql/generated/schema";

export default function CustomerDashboard(){
    const{ data: customersData, loading, error} = useGetCustomersQuery();
    if (loading){
        return <div>
            Loadding ...
        </div>
    }
    if (error){
        return <div>
            Error ...
        </div>
    }
    return (
        <div>
            <h2>Customers Dashboard</h2>
            <ul>
                {
                    customersData?.customers?.map(customer => (
                        <li key={customer?.id}>{customer?.firstName}</li>
                    ))
                }
            </ul>
        </div>
    );
}