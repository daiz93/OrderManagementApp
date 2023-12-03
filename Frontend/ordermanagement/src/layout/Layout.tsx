import { Outlet } from "react-router-dom";
import React from 'react';
import NavBar from "./nav/NavBar";
import  Container  from "@mui/material/Container";

export default function Layout () {
    return (

        <>
            <NavBar/>
            <Container sx={{p:'3rem', width:'100%'}} >
                <Outlet/>
            </Container>
             
        </>
    );
}