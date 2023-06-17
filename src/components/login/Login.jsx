import React, { useState } from 'react'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { BsEye } from 'react-icons/bs'
import './login.scss'
import logo from '../../assets/logo.svg'
import { Autocomplete } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <article className='login'>
      <form className='login__form'>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        {/* <Autocomplete /> */}

        <h4>Hi, Welcome Back</h4>
        <small>Enter your credentials to continue</small>
        <label className='login__form__user'>
          Username
          <input type="text" placeholder='Type your username' />
        </label>
        {!showPassword ? <section className='login__form__pwd'>
          <label>
            Password
            <input type="password" placeholder='Type your password' />
          </label>
          <BsFillEyeSlashFill onClick={() => togglePassword()} className='eye' />
        </section> :
          <section className='login__form__pwd'>
            <label>
              Password
              <input type="text" placeholder='Type your password' />
            </label>
            <BsEye onClick={() => togglePassword()} className='eye' />


          </section>}

        <strong>Forgot Password?</strong>

        <button onClick={() => navigate('/')}>Sign In</button>
      </form>


    </article>
  )
}

export default Login