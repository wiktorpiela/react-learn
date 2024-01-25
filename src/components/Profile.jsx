import React, { useEffect, useState, useRef, useMemo, useContext } from 'react'
import { TextField, Grid, Typography, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useImmerReducer } from 'use-immer';
import StateContext from '../context/StateContext'

const myStyle = {
    width: '75%',
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
        }
    };

    function ReducerFunction(draft, action) {

        switch (action.type) {
            case 'catchUserProfileInfo':
                draft.userProfile.agencyName = action.profileObject.agency_name
                draft.userProfile.phoneNumber = action.profileObject.phone_number
                break

            default:
            // pass
        }

    }

    const [state, dispatch] = useImmerReducer(ReducerFunction, initialState);

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
        <div>
            this is the profile page
        </div>
    )
}

export default Profile
