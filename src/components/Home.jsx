import { Button, Typography } from '@mui/material';
import city from './assets/Prison_Break_205.webp'

function Home() {

  const cityImg = {
    width: '100%',
    height: '92vh'
  }

  const overlatText = {
    position: 'absolute',
    zIndex: '100',
    top: '100px',
    left: '20px',
    textAlign: 'center'
  }

  const homeBtn = {
    fontSize: '3.5rem',
    borderRadius: '15px',
    backgroundColor: 'green',
    marginTop: '2rem',
    boxShadow: '3px 3px 3px white'
  }

  return (
    <>
      <div style={{position: 'relative'}}>
        <img src={city} alt="pic" style={cityImg}/>
        <div style={overlatText}>
          <Typography variant='h1' sx={{color:'white', fontWeight:'bolder', textTransform:'uppercase', userSelect:'none'}}>
            Find your <span style={{color:'green'}}>next property</span> on the LBPREP website 
          </Typography>
          <Button variant='contained' sx={homeBtn}>SEE ALL PROPERTIES</Button>
        </div>
      </div>
    </>
  )
}

export default Home
