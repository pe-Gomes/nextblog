import { api } from './api'

export const getAll = async () => {
  const res = await api.get('/posts')
  if (!res) {
    return []
  } else {
    return res.data
  }
}
