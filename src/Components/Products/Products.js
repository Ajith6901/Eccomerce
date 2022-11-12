import React from "react";
import Grid from '@material-ui/core';
import Product_Comp from "../Product_Comp/Product_Comp";
const products =[
    {id:1,name :"Shoes",description:"Running shoes",price:"$5"},
    {id:2,name :"Laptop",description:"Good Laptop",price:"$51"}
];
function Products() {
  return (
    <main>
        
        <Grid container justify ="center" spacing ={4}>

            { products.map((product)=>{
                <Grid item key={product.id} xs ={12} sm ={6} md={4} lg={3}>
                    <Product_Component
                    product={product}
                    />
                </Grid>
            })}


        </Grid>
        
    </main>
  )
}

export default Products