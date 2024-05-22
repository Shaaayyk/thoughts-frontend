import { useState, useEffect } from 'react'

import thoughtsUtil from '../utils/thoughts.js'
import ErrorMessage from '../components/ErrorMessage.jsx'

export default function FeedPage({ user }) {
  const [thoughts, setThoughts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function getThoughts() {
      try {
        const response = await thoughtsUtil.getThoughts()
        setThoughts(response)
      } catch (error) {
        setError('Error!!')
      }
    }
    getThoughts()
  }, [])

  return (
    <>
      <div>FeedPage</div>
      {error ? <ErrorMessage error={error} /> : null}
      {
        thoughts.length ?
          thoughts.map(thought => (
            <div key={thought._id}></div>
          ))
          :
          <p>Add a thought?</p>
      }
    </>
  )
}
