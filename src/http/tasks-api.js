import api from './api'

const resource = '/tasks'

// All Tasks
export const allTasks = () => api.get(resource)

// create Tasks
export const createTask = (task) => api.post(resource, task)

//  Update Task
export const updateTask = (id, task) => api.put(`${resource}/${id}`, task)

// Delete Task
export const deleteTask = (id) => api.delete(`${resource}/${id}`)

// Completed Task
export const completedTask = (id, task) => api.put(`${resource}/${id}/complete`, task)