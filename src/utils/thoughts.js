import api from './apiConfig.js'

async function getThoughts() {
  try {
    const response = await api.get('/thoughts')
    return response.data.thoughts
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getThoughtById(thoughtId) {
  try {
    const response = await api.get(`/thoughts/${thoughtId}`)
    return response.data.thought
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addThought(thought) {
  try {
    const response = await api.post('/thoughts', thought)
    return response.data.thought
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateThought(thoughtId, thought) {
  try {
    const response = await api.put(`/thoughts/${thoughtId}`, thought)
    return response.data.thought
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteThought(thoughtId) {
  try {
    const response = await api.delete(`/thoughts/${thoughtId}`)
    return response.data.thought
  } catch (error) {
    throw new Error(error.message);
  }
}

export default {
  getThoughts,
  getThoughtById,
  addThought,
  updateThought,
  deleteThought,
}