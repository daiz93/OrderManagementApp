import React from "react";
import { Customer, useGetCustomersQuery } from "../../../graphql/generated/schema";
import {Grid, Typography } from "@mui/material";
import CustomerList from "./CustomerList";
import OmLoading from "../../../Components/elements/OmLoadding";
import OmAlert from "../../../Components/elements/OmAlert";
 
 


export default function CustomersDashboard() {
    const { data:customersData, loading, error } = useGetCustomersQuery();

    if (loading){
        return  <OmLoading/>
        
    }
    if (error){
        return  <OmAlert message="Could not load data." />
    }
    if (!customersData){
        return  <OmAlert message="No data to load." />
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