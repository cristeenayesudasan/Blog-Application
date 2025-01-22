import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const Home = () => {
    
    const [cardData,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() =>{
        axiosInstance.get('/api/blogs').then((res) =>{
            setData(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    function update_data(val){
        navigate('/addblog',{state:{val}})
        //state is a keyword
    }

    const delete_data = (id) => {
        axiosInstance.delete(`/api/blogs/deleteblog/${id}`)
          .then(() => {
            setData(cardData.filter((item) => item._id !== id)); // Update the UI after deletion
            alert("Blog deleted successfully");
            navigate('/blogs'); // Navigate back to the Home page
          })
          .catch((err) => {
            console.log(err);
            alert("Failed to delete blog");
          });
      };
  return (
    <div style={{margin:'5%'}}>
        <Grid container spacing={2}>
            {cardData.map((row) => (
            <Grid size={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                alt="food"
                height="140"
                image= {row.imageurl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {row.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {row.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color='warning' variant='contained'onClick={(()=>{
                        update_data(row);
                    })}>Update</Button>
                    <Button size="small" color='error' variant='contained' onClick={() => delete_data(row._id)}>Delete</Button>
                </CardActions>
            </Card>
            </Grid>
            ))}
        </Grid>
        
    </div>
  )
}

export default Home