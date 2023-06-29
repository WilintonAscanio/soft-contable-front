import React, { useState } from 'react'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { BsEye } from 'react-icons/bs'
import './login.scss'
import logo from '../../assets/logo.svg'
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <article className='login'>
      <form className='login__form'>
        <figure>
          <img src={logo} alt="logo" />
        </figure>

        <h4>Hi, Welcome Back</h4>
        <small>Enter your credentials to continue</small>

        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <BsFillEyeSlashFill /> : <BsEye />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>



        <strong>Forgot Password?</strong>

        <button className='login__form__button' onClick={() => navigate('/')}>Sign In</button>
      </form>


    </article>
  )
}

export default Login