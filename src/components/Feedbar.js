

import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'

import {React, useEffect, useState} from 'react'


const Feedbar = () => {

const [mylistData, setListData] = useState([]);


  useEffect(()=>{
    (async ()=>{
      
      fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          setListData(result.products);
         
          console.log(result.products.length);
           
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          

        }
      )
      
    } )();
    },[]
    
    );

 
  return (

   
    <Box  flex={4}sx={{display:{ xs:"block"}}} 
    top="0" 
    right="0"
    display="block"
    text-align="center ">
      
{mylistData.map(post=>(
        
        <Card sx={{m:0.5}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:" red" }} aria-label="recipe">
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={post.title}
         
        />
        <CardMedia
          component="img"
          height="20%"
          image={post.thumbnail}
          alt="products"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />

          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          
          
        </CardActions>
       
      </Card>
      
       ))}
       
  </Box>
  )
}

export default Feedbar
