import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddAdmin = () => {
    const navigate = useNavigate()
    return (
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off" className='form'>
            <div className='form__labels'>
                <TextField
                    required
                    id="outlined-required"
                    label="ID"
                    defaultValue=""
                    type='number'
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    defaultValue=""
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    defaultValue=""
                />

            </div>
            <div className='form__buttons'>
                <Button color='secondary' variant='outlined' onClick={() => navigate(-1)}>Cancel</Button>
                <Button color='primary' variant='outlined' onClick={() => navigate(-1)}>Save</Button>

            </div>


        </Box>
    )
}

export default AddAdmin