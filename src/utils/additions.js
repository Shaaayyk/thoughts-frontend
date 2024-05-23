import api from './apiConfig.js'

async function createAddition(thoughtId, addition) {
  try {
    const response = await api.post(`/thoughts/${thoughtId}/additions`, addition)
    return response.data.thought
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateAddition(additionId, addition) {
  try {
    const response = await api.put(`/additions/${additionId}`, addition)
    return response.data.thought
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteAddition(additionId) {
  try {
    const response = await api.delete(`/additions/${additionId}`)
    return response.data.thought
  } catch (error) {
    throw new Error(error.message);
  }
}

export default {
  createAddition,
  updateAddition,
  deleteAddition,
}