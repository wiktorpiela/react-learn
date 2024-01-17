import React, { useEffect, useState } from 'react'
import { TextField, Grid, Typography, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useImmerReducer } from 'use-immer';

const myStyle = {
    width: '50%',
    margin: '4rem auto',
    border: '5px solid black',
    padding: '3rem'
}

const regBtnStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontSize: '1.1rem',
    '&:hover': {
        backgroundColor: 'blue',
    }
}

function AddProperty() {

    const navigate = useNavigate();

    const initialState = {
        titleValue: '',
        listingTypeValue: '',
        descriptionValue: '',
        areaValue: '',
        boroughValue: '',
        latitudeValue: '',
        longitudeValue: '',
        propertyStatusValue: '',
        priceValue: '',
        rentalFrequencyValue: '',
        roomsValue: '',
        furnishedValue: false,
        poolValue: false,
        elevatorValue: false,
        cctvValue: false,
        parkingValue: false,
        pic1Value: '',
        pic2Value: '',
        pic3Value: '',
        pic4Value: '',
        pic5Value: '',
    };

    function ReducerFunction(draft, action) {

        switch (action.type) {
            case 'catchTitleChange':
                draft.titleValue = action.titleChosen;
                break;

            case 'catchListingTypeChange':
                draft.listingTypeValue = action.listingTypeChosen;
                break;

            case 'catchDescriptionChange':
                draft.descriptionValue = action.descriptionChosen;
                break;

            case 'catchAreaChange':
                draft.areaValue = action.areaChosen;
                break;

            case 'catchBoroughChange':
                draft.boroughValue = action.boroughChosen;
                break;

            case 'catchLatitudeChange':
                draft.latitudeValue = action.latitudeValue;
                break;

            case 'catchLongitudeChange':
                draft.longituteValue = action.longituteValue;
                break;

            case 'catchPropertyStatusChange':
                draft.propertyStatusValue = action.propertyStatusChosen;
                break;

            case 'catchPriceChange':
                draft.priceValue = action.priceChosen;
                break;

            case 'catchRentalFrequencyChange':
                draft.rentalFrequencyValue = action.rentalFrequencyChosen;
                break;

            case 'catchRoomsChange':
                draft.roomsValue = action.roomsChosen;
                break;

            case 'catchFurnishedChange':
                draft.furnishedValue = action.furnishedChosen;
                break;

            case 'catchPoolChange':
                draft.poolValue = action.poolChosen;
                break;

            case 'catchElevatorChange':
                draft.elevatorValue = action.elevatorChosen;
                break;

            case 'catchCctvChange':
                draft.cctvValue = action.cctvChosen;
                break;

            case 'catchParkingChange':
                draft.parkingValue = action.parkingChosen;
                break;

            case 'catchPic1Change':
                draft.pic1Value = action.pic1Value;
                break;

            case 'catchPic2Change':
                draft.pic2Value = action.pic2Value;
                break;

            case 'catchPic3Change':
                draft.pic3Value = action.pic3Value;
                break;

            case 'catchPic4Change':
                draft.pic4Value = action.pic4Value;
                break;

            case 'catchPic5Change':
                draft.pic5Value = action.pic5Value;
                break;

            default:
            // pass
        }

    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

    function FormSubmit(e) {
        e.preventDefault();
        console.log('the form has been submitted')
        // dispatch({ type: 'changeSendRequest' })
        console.log(state.sendRequest)
    }

    return (
        <div style={myStyle}>
            <form onSubmit={FormSubmit}>
                <Grid item container style={{ marginTop: '1rem' }} justifyContent={'center'}>
                    <Typography variant='h4' style={{ textTransform: 'uppercase' }}>SUBMIT A PROPERTY</Typography>
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="title" label="Title" variant="standard" fullWidth value={state.titleValue} onChange={(e) => dispatch({ type: 'catchTitleChange', titleChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="listingType" label="Listing Type" variant="standard" fullWidth value={state.listingTypeValue} onChange={(e) => dispatch({ type: 'catchListingTypeChange', listingTypeChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="description" label="Description" variant="standard" fullWidth value={state.descriptionValue} onChange={(e) => dispatch({ type: 'catchDescriptionChange', descriptionChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="area" label="Area" variant="standard" fullWidth value={state.areaValue} onChange={(e) => dispatch({ type: 'catchAreaChange', areaChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="borough" label="Borough" variant="standard" fullWidth value={state.boroughValue} onChange={(e) => dispatch({ type: 'catchBoroughChange', boroughChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="propertyStatus" label="Property Status" variant="standard" fullWidth value={state.propertyStatusValue} onChange={(e) => dispatch({ type: 'catchPropertyStatusChange', propertyStatusChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="price" label="Price" variant="standard" fullWidth value={state.priceValue} onChange={(e) => dispatch({ type: 'catchPriceChange', priceChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="rentalFrequency" label="Rental Frequency" variant="standard" fullWidth value={state.rentalFrequencyValue} onChange={(e) => dispatch({ type: 'catchRentalFrequencyChange', rentalFrequencyChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField id="rooms" label="Rooms" variant="standard" fullWidth value={state.roomsValue} onChange={(e) => dispatch({ type: 'catchRoomsChange', roomsChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <FormControlLabel
                        control={<Checkbox checked={state.furnishedValue}
                            onChange={(e) => dispatch({ type: 'catchFurnishedChange', furnishedChosen: e.target.checked })} />}
                        label="Furnished" />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <FormControlLabel
                        control={<Checkbox checked={state.poolValue}
                            onChange={(e) => dispatch({ type: 'catchPoolChange', poolChosen: e.target.checked })} />}
                        label="Pool" />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <FormControlLabel
                        control={<Checkbox checked={state.elevatorValue}
                            onChange={(e) => dispatch({ type: 'catchElevatorChange', elevatorChosen: e.target.checked })} />}
                        label="Elevator" />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <FormControlLabel
                        control={<Checkbox checked={state.cctvValue}
                            onChange={(e) => dispatch({ type: 'catchCctvChange', cctvChosen: e.target.checked })} />}
                        label="Cctv" />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <FormControlLabel
                        control={<Checkbox checked={state.parkingValue}
                            onChange={(e) => dispatch({ type: 'catchParkingChange', parkingChosen: e.target.checked })} />}
                        label="Parking" />
                </Grid>



                <Grid item container style={{ marginTop: '1rem', marginLeft: "auto", marginRight: 'auto' }} xs={8}>
                    <Button variant='contained' fullWidth type='submit' sx={regBtnStyle}>SUBMIT</Button>
                </Grid>

            </form>


        </div>
    )
}

export default AddProperty