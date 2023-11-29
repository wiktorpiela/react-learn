import React from 'react'
import{ useState } from 'react'
import { Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

function CustomCard() {
    const [btnColor, setBtnColor] = useState("error");
  return (
    <div style={{width:'50%', border:'2px solid black', padding:'15px'}}>
        <Typography variant='h4'>This is first line of text in this lesson</Typography>
        <Typography variant='body1'>This is first line of text in this lesson</Typography>

        <Button 
          variant="contained" 
          color={btnColor} 
          onClick={()=>setBtnColor("success")} 
          size='medium'
          sx={{width:'100%'}}>
          Text
        </Button>
    </div>
  )
}

export default CustomCard
