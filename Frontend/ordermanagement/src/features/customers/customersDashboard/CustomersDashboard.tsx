import React from "react";
import { Customer, useGetCustomersQuery } from "../../../graphql/generated/schema";
import {Grid, Typography } from "@mui/material";
import CustomerList from "./CustomerList";
 
 


export default function CustomersDashboard() {
    const { data:customersData, loading, error } = useGetCustomersQuery();

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


    const customers = customersData?.customers as Customer[];
    return (
        <div>
           
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <Typography component='div' variant ='h2' display='block' gutterBottom align='center'>  
                     Customers List 
                    </Typography>

                </Grid>

                <Grid item xs={12}>
                    <CustomerList customers={customers}/>
                </Grid>
            </Grid>
        </div>
    );
}