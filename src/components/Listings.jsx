import { Grid, AppBar, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import houseIconPng from './assets/Mapicons/house.png'
import apartmentIconPng from './assets/Mapicons/apartment.png'
import officeIconPng from './assets/Mapicons/office.png'
import img1 from './assets/image1.jpg'


function Listings() {

  const houseIcon = new Icon({
    iconUrl: houseIconPng,
    iconSize: [40, 40],
  })

  const apartmentIcon = new Icon({
    iconUrl: apartmentIconPng,
    iconSize: [40, 40],
  })

  const officeIcon = new Icon({
    iconUrl: officeIconPng,
    iconSize: [40, 40],
  })

  const [latitude, setLatitude] = useState(51.505)
  const [longitude, setLongitude] = useState(-0.09)

  function GoEast(){
    setLatitude(51.46567014039476)
    setLongitude(0.25961735)
  }

  function GoCenter(){
    setLatitude(51.505)
    setLongitude(-0.09)
  }

  return (

    <Grid container>

      <Grid item xs={4}>
        <Button onClick={GoEast}>Go east</Button>
        <Button onClick={GoCenter}>Go center</Button>
      </Grid>

      <Grid item xs={8}>
        <AppBar position='sticky'>
          <div style={{ height: '100vh' }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[latitude, longitude]} icon={houseIcon}>
                <Popup>
                 <Typography variant='h5'>a title</Typography>
                 <img src={img1} alt="pic" style={{height: '14rem', width:'18rem'}}/>
                 <Typography variant='body1'>this is some text below the title</Typography>
                 <Button variant='contained' fullWidth>a link</Button>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </AppBar>
      </Grid>
    </Grid>






  )
}

export default Listings
