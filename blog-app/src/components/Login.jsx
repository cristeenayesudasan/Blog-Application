import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [form,setForm] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();
  function capvalue(){
    // console.log(form);
    axios.post('/api/users/login',form).then((res)=>{
      alert(res.data.message);
      if(res.data.token){
        sessionStorage.setItem('logintoken',res.data.token);
        navigate('/blogs');
      }
      else{
        navigate('/');
      }
      
    }).catch((error) => {
      alert('Invalid login');
    })
  }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'style={{color: 'purple'}}>BlogApp Login</Typography><br></br><br></br>
        <TextField label='Email' variant='outlined' name="email" onChange={(e)=>{
          setForm({...form,email:e.target.value})
        }}></TextField><br></br><br></br>
        <TextField label='Password' variant='outlined'name="password" type="password" onChange={(e)=>{
          setForm({...form,password:e.target.value})
        }}></TextField>
        <br></br><br></br>
        <Button color="secondary" variant='contained' onClick={capvalue}>Login</Button>
        <div>
            <Link to={'/signup'} style={{color: 'purple'}}>New user? Please Register here</Link>
        </div>
    </div>
  )
}

export default Login