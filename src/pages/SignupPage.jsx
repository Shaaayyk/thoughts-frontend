import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userUtil from '../utils/user.js'

export default function SignupPage({setUser}) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

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
      await userUtil.signup(form)
      setUser(userUtil.getUser())
      navigate('/')
    } catch (error) {
      
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
      </form>
    </>
  )
}
