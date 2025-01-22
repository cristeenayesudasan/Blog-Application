import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div style={{margin:'8%'}}>
        <Grid container spacing={2}>
            <Grid  size={{ xs: 6, md: 6 }}>
                <TextField fullWidth label='Name' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
                <TextField fullWidth label='Email' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
                <TextField fullWidth label='Password' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
                <TextField fullWidth label='Phone Number' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
                <TextField fullWidth multiline rows={4} label='Address' variant='outlined'></TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
                <Button color="secondary" variant='contained'>Register</Button>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
                <Link to={'/'} style={{color: 'purple'}}>Already Registered? Login here</Link>
            </Grid>
        </Grid>
    </div>
  )
}

export default Signup