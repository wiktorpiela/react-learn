import { Grid, AppBar, Typography, Button, Card, CardHeader, CardMedia, CardContent, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline, Polygon } from 'react-leaflet'
import { Icon } from 'leaflet'
import houseIconPng from './assets/Mapicons/house.png'
import apartmentIconPng from './assets/Mapicons/apartment.png'
import officeIconPng from './assets/Mapicons/office.png'
import img1 from './assets/image1.jpg'

import myListings from './assets/Data/Dummydata';

import polygonOne from './Shape'
import axios from 'axios'


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

  function GoEast() {
    setLatitude(51.46567014039476)
    setLongitude(0.25961735)
  }

  function GoCenter() {
    setLatitude(51.505)
    setLongitude(-0.09)
  }

  const polyOne = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]

  const [allListings, setAllListings] = useState([])
  const [dataLoading, seDataLoading] = useState(true)

  useEffect(() => {
    const source = axios.CancelToken.source()
    async function getAllListings() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/listing-list/', {cancelToken: source.token})
        setAllListings(response.data);
        seDataLoading(false)

      } catch (error) {
        console.log(error)
      }
    }
    getAllListings();
    return ()=>{
      source.cancel()
    }
  }, [])

  if (dataLoading === false) {
    console.log(allListings[0].location)
  }

  if (dataLoading) {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{height: '100vh'}}
      >
        <CircularProgress />
      </Grid>

    )
  }

  return (

    <Grid container>

      <Grid item xs={4}>
        {allListings.map((listing) => {
          return (
            <Card key={listing.id}
              sx={{
                margin: '0.5rem',
                border: '1px solid black'
              }}>
              <CardHeader
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={listing.title}
              />
              <CardMedia
                component="img"
                image={listing.picture1}
                alt={listing.title}
                sx={{
                  paddingRight: '1rem',
                  paddingLeft: '1rem',
                  height: '20rem',
                  width: '30rem'
                }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {listing.description.substring(0, 150)}
                </Typography>

                {listing.property_status === "Sale" ? (<Typography
                  sx={{
                    textAlign: 'center',
                    backgroundColor: 'green',
                    zIndex: '1000',
                    color: 'white',
                    padding: '5px'
                  }}>{listing.listing_type}: ${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Typography>) : (<Typography
                  sx={{
                    textAlign: 'center',
                    backgroundColor: 'green',
                    zIndex: '1000',
                    color: 'white',
                    padding: '5px'
                  }}>{listing.listing_type}: ${listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}/{listing.rental_frequency}
                </Typography>)}


              </CardContent>




              {/* <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions> */}
            </Card>
          )
        })}
      </Grid>

      <Grid item xs={8} style={{ marginTop: '0.5rem' }}>
        <AppBar position='sticky'>
          <div style={{ height: '100vh' }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />



              {allListings.map((listing) => {

                function IconDisplay() {
                  if (listing.listing_type === 'House') {
                    return houseIcon
                  } else if (listing.listing_type === 'Apartment') {
                    return apartmentIcon
                  } else {
                    return officeIcon
                  }
                }


                return (
                  <Marker
                    key={listing.id}
                    icon={IconDisplay()}
                    position={[listing.latitude, listing.longitude]}>

                    <Popup>
                      <Typography variant='h5'>{listing.title}</Typography>
                      <img src={listing.picture1} alt="pic" style={{ height: '14rem', width: '18rem' }} />
                      <Typography variant='body1'>
                        {listing.description.substring(0, 150)}...
                      </Typography>
                      <Button variant='contained' fullWidth>Details</Button>
                    </Popup>

                  </Marker>
                )
              })}



              {/* <Marker position={[latitude, longitude]} icon={houseIcon}>
                <Popup>
                 <Typography variant='h5'>a title</Typography>
                 <img src={img1} alt="pic" style={{height: '14rem', width:'18rem'}}/>
                 <Typography variant='body1'>this is some text below the title</Typography>
                 <Button variant='contained' fullWidth>a link</Button>
                </Popup>
              </Marker> */}

            </MapContainer>
          </div>
        </AppBar>
      </Grid>
    </Grid>






  )
}

export default Listings
