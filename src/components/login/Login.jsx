import React, { useState } from 'react'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { BsEye } from 'react-icons/bs'
import './login.scss'
import logo from '../../assets/logo.svg'
import { Autocomplete } from '@mui/material'


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <article className='login'>
      <form>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <Autocomplete />

        <h3>Hi, Welcome Back</h3>
        <small>Enter your credentials to continue</small>
        <label>
          Username
          <input type="text" placeholder='Type your username' />
        </label>
        {!showPassword ? <section>
          <label>
            Password
            <input type="password" placeholder='Type your password' />
          </label>
          <BsFillEyeSlashFill onClick={() => togglePassword()} />
        </section> :
          <section>
            <label>
              Password
              <input type="text" placeholder='Type your password' />
            </label>
            <BsEye onClick={() => togglePassword()} />


          </section>}

        <strong>Forgot Password?</strong>

        <button>Sign In</button>
      </form>


    </article>
  )
}

export default Login