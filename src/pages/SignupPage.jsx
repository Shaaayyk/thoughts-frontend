import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import usersUtil from '../utils/users.js'
import ErrorMessage from '../components/ErrorMessage.jsx'

export default function SignupPage({setUser}) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const [error, setError] = useState('')

  const navigate = useNavigate();

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await usersUtil.signup(form)
      setUser(usersUtil.getUser())
      navigate('/')
    } catch (error) {
      console.log(error)
      setError('Error!!')
    }
  }
  
  return (
    <>
      <div>SignupPage</div>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <input
          type="text"
          name='firstName'
          placeholder='First name'
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name='lastName'
          placeholder='Last name'
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name='email'
          placeholder='Email'
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name='password'
          placeholder='Password'
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name='passwordConfirm'
          placeholder='Confirm password'
          onChange={handleChange}
          required
        />
        <button type='submit'>Signup</button>
        <p>Already have an account? <Link to='/login'>Log in here</Link></p>
        {error ? <ErrorMessage error={error} /> : null}
      </form>
    </>
  )
}
