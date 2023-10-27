import { IPost } from '@/types/post'
import { api } from './api'

export const getAll = async (): Promise<IPost[]> => {
  const res = await api.get('/posts')
  if (!res) {
    return []
  } else {
    return res.data
  }
}

export const getById = async (
  id: string | string[] | undefined,
): Promise<IPost> => {
  const res = await api.get(`/posts?id=eq.${id}&select=*`)
  if (!res) {
    return {}
  } else {
    return res.data[0]
  }
}
