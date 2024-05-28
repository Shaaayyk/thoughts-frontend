import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import AdditionForm from '../components/AdditionForm.jsx'
import ErrorMessage from '../components/ErrorMessage.jsx'
import thoughtsUtil from '../utils/thoughts.js'

export default function ThoughtPage({ user }) {
  const [thought, setThought] = useState({})
  const [error, setError] = useState('')

  const { id } = useParams()

  useEffect(() => {
    async function getThought(thoughtId) {
      try {
        const response = await thoughtsUtil.getThoughtById(thoughtId)
        setThought(response)
      } catch (error) {
        setError('Error!!')
      }
    }
    getThought(id)
  }, [id])

  return (
    <>
      <div>ThoughtPage</div>
      {error ? <ErrorMessage error={error} /> : null}
      {
        thought._id ?
          <>
            <h1>{ thought.title }</h1>
          </>
          : null
      }
    </>
    
  )
}