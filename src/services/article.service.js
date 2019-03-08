import ApiService from '@/services/api.service'

const saveArticle = async (payload) => {
  const response = await ApiService.post('/articles', payload)

  if (!response.error) {
    return response.data
  } else {
    return Promise.reject(response.error)
  }
}

export default {
  saveArticle
}