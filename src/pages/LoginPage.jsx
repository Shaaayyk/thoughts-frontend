import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import ErrorMessage from '../components/ErrorMessage.jsx'
import usersUtil from '../utils/users.js'

export default function LoginPage({setUser}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
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
      await usersUtil.login(form)
      setUser(usersUtil.getUser())
      navigate('/')
    } catch (error) {
      console.log(error)
      setError('Error!!')
    }
  }

  return (
    <>
      <div>LoginPage</div>
      <form onSubmit={handleSubmit} autoComplete='off'>
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
        <button type='submit'>Signup</button>
        <p>New to the site? <Link to='/signup'>Sign up here</Link></p>
        {error ? <ErrorMessage error={error} /> : null}
      </form>
    </>
  )
}
