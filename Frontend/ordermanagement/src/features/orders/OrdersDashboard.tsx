import React from 'react';
import { Order, useGetordersQuery } from '../../graphql/generated/schema';
import { Grid, Typography } from '@mui/material';
import OrderList from './OrdersList';
export default function OrdersDashboard(){
    const { data:ordersData, loading, error } = useGetordersQuery();

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


    const orders = ordersData?.orders as Order[];
    return (
        <div>
           
            <Grid container spacing={12}>
                <Grid item xs={12}>
                    <Typography component='div' variant ='h2' display='block' gutterBottom align='center'>  
                     Orders List 
                    </Typography>

                </Grid>

                <Grid item xs={12}>
                    <OrderList orders={orders}/>
                </Grid>
            </Grid>
        </div>
    );
}
