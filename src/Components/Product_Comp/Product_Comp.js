import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconBotton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';



function Product_Comp({product}) {
  return (
    <Card className='classes.root'>
        <CardMedia className={classes.media}
        image=''
        title={product.name}
        />
        <CardContent>

            <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
                {product.name}
            </Typography>
            <Typography variant="h5" >
                {product.price}
            </Typography>    
            </div>
            <Typography variant="h2"
            color= "textSecondary" >
                {product.description}
            </Typography>    

        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconBotton arial-label="Add to Cart">
            <AddShoppingCart/>
            </IconBotton> 
        </CardActions>

    </Card>
  )
}

export default Product_Comp