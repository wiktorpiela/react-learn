import React, { useState } from 'react'
import { Button, Typography, Grid } from '@mui/material';
import { blue } from '@mui/material/colors';
import CustomCard from './CustomCard';


function Home() {
  const [btnColor, setBtnColor] = useState("error");

  return (
    <Grid container spacing={2}>
  <Grid item xs={8}>
    <CustomCard/>
  </Grid>
  <Grid item xs={4}>
  <CustomCard/>
  </Grid>
  <Grid item xs={4}>
  <CustomCard/>
  </Grid>
  <Grid item xs={8}>
  <CustomCard/>
  </Grid>
</Grid>
  )
}

export default Home
