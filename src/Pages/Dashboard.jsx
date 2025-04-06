import '../Department.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import Products from "./Products";
import { Grid } from "@mui/material";


function Dashboard (){
    const[products,setUsers]=useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log("API Response:", res.data);
            setUsers(res.data); 
          })
          .catch(error => console.error("Error fetching users:", error));
    },[])
    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {products.map((item, index) => (
                    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }} >
                        <Products item={item}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )

}
export default Dashboard