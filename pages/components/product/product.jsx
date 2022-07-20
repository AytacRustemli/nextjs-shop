import { Card,CardMedia,CardContent,Typography,CardActions, Button} from "@mui/material";
import React from "react";
import Link from 'next/link'



function Product({result}) {
  
  // console.log(result);


  return (
    <div>
      <div className="container">
        <div className="row">
          {
            result &&
            result.map(e => ( 
            <div className="col-lg-3 my-5" key={e.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={e.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {e.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {e.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Link href={`product/${e.id}`}>Share</Link>
                  </Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  let data =  await fetch("https://fakestoreapi.com/products")
  let result = await data.json()

  return { props : { result } }
}

export default Product
