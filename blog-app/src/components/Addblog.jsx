import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInterceptor';

const Addblog = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    imageurl: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async () => {
    if (location.state!=null) {
      axiosInstance.put("/api/blogs/updateblog/"+location.state.val._id,form).then((res)=>{
        alert(res.data);
        navigate('/blogs')
      })
    }
    else{
      try {
        const response = await axiosInstance.post('/api/blogs/addblog', form);
        alert(response.data);
        setForm({ title: '', description: '', imageurl: '' }); 
      } catch (error) {
        alert('Failed to add the blog. Please try again.');
        console.error(error);
      }
    }
    
  };

  //useEffect -used when you want to display values when the page loads
  //useLocation -to access data passed in nav
  useEffect(()=>{
    if (location.state!=null) {

      setForm({...form,title: location.state.val.title, 
        description: location.state.val.description,
        imageurl: location.state.val.imageurl})

    } else {
      setForm({...form,title: '', 
        description: '',
        imageurl: ''})
    }
  },[])

  return (
    <div style={{ margin: '8%' }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            name="imageurl"
            value={form.imageurl}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 12 }}>
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Add Blog
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Addblog;
