import React, { useEffect, useState, useRef, useMemo, useContext } from 'react'
import { TextField, Grid, Typography, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useImmerReducer } from 'use-immer';
import StateContext from '../context/StateContext'

const myStyle = {
    width: '50%',
    margin: '4rem auto',
    border: '5px solid black',
    padding: '3rem'
}

const lonInBtnStyle = {
    backgroundColor: 'green',
    color: 'white',
    fontSize: '1.1rem',
    '&:hover': {
        backgroundColor: 'blue',
    }
}

const picturesBtn = {
    backgroundColor: 'blue',
    color: 'white',
    border: '1px solid black',
    fontSize: '0.9rem',
    margin: '0 10rem',
    '&:hover': {
        backgroundColor: 'blue',
    }
}

function Profile() {

    const navigate = useNavigate();
    const GlobalState = useContext(StateContext)

    const initialState = {
        userProfile: {
            agencyName: '',
            phoneNumber: '',
        },
        agencyNameValue: '',
        phoneNumberValue: '',
        bioValue: '',
        uploadedPicture: [],
        profilePictureValue: '',

    };

    function ReducerFunction(draft, action) {

        switch (action.type) {
            case 'catchUserProfileInfo':
                draft.userProfile.agencyName = action.profileObject.agency_name
                draft.userProfile.phoneNumber = action.profileObject.phone_number
                break

            case 'catchAgencyNameChange':
                draft.agencyNameValue = action.agencyNameChosen
                break

            case 'catchPhoneNumberChange':
                draft.phoneNumberValue = action.phoneNumberChosen
                break

            case 'catchBioChange':
                draft.bioValue = action.bioChosen
                break

            case 'catchUploadedPictureChange':
                draft.uplodadedPictureValue = action.uplodadedPictureChosen
                break

            case 'catchProfilePictureChange':
                draft.profilePictureValue = action.profilePictureChosen
                break

            default:
            // pass
        }

    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

    //use effect to catch uploaded picture

    useEffect(()=>{
        if(state.uploadedPicture[0]){
            dispatch({type: 'catchProfilePictureChange', profilePictureChosen: state.uplodadedPicture[0]})
        }
    },[state.uploadedPicture[0]])

    useEffect(() => {
        async function GetProfileInfo() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/accounts/profile-details/${GlobalState.userId}`);
                dispatch({ type: 'catchUserProfileInfo', profileObject: response.data })
                console.log(response.data)
            } catch (e) {
                console.log(e.reposnse)
            }
        }
        GetProfileInfo();

    }, [])

    return (
        <div style={myStyle}>

            <Typography variant='h5' style={{ textAlign: 'center', marginTop: '1rem' }}>
                Welcome <span style={{ color: 'green', fontWeight: 'bolder' }}>{GlobalState.userUsername}</span>, please submit this form below to update your profile
            </Typography>

            <form>
                <Grid item container style={{ marginTop: '1rem' }} justifyContent={'center'}>
                    <Typography variant='h4' style={{ textTransform: 'uppercase' }}>MY profile</Typography>
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField
                        id="agencyName"
                        label="Agency Name*"
                        variant="outlined"
                        fullWidth
                        value={state.agencyNameValue}
                        onChange={(e) => dispatch({ type: 'catchAgencyNameChange', agencyNameChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField
                        id="phoneNumber"
                        label="Phone Number*"
                        variant="outlined"
                        fullWidth
                        value={state.phoneNumberValue}
                        onChange={(e) => dispatch({ type: 'catchPhoneNumberChange', phoneNumberChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem' }}>
                    <TextField
                        id="bio"
                        label="Bio"
                        variant="outlined"
                        multiline
                        rows={6}
                        fullWidth
                        value={state.bioValue}
                        onChange={(e) => dispatch({ type: 'catchBioChange', bioChosen: e.target.value })} />
                </Grid>

                <Grid item container style={{ marginTop: '1rem', marginLeft: "auto", marginRight: 'auto' }} xs={8}>
                    <Button variant='contained' fullWidth type='submit' sx={picturesBtn} component='label'> PROFILE PICTURE
                        <input
                            type='file'
                            multiple
                            accept='image/png, image/gif, image/jpeg'
                            hidden
                            onChange={(e) => dispatch({ type: 'catchUploadedPictureChange', pictureChosen: e.target.files })} />
                    </Button>
                </Grid>
                
                <Grid item container>
                    <ul>
                        {state.profilePictureValue ? <li>{state.profilePictureValue.name}</li> : ''}
                    </ul>
                </Grid>

                <Grid item container style={{ marginTop: '1rem', marginLeft: "auto", marginRight: 'auto' }} xs={8}>
                    <Button variant='contained' fullWidth type='submit' sx={lonInBtnStyle}>UPDATE</Button>
                </Grid>
            </form>

        </div>

    )
}

export default Profile
