import ApiService from '@/services/api.service'


const getArticleById = async (id) => {
  const response = await Api.Service.get('/articles', id)

  if (response.data.status === 'OK') {
    return response.value.draft
  } else {
    return Promise.reject(response.data.error)
  }
}

// Services related to drafts.
// 
// TODO: Move to seperate service file.
const getDrafts = async (requiredDrafts) => {
  const response = await ApiService.get('/drafts', requiredDrafts)

  if (response.data.status === 'OK') {
    return response.data.value
  }

  return Promise.reject( response.data.error )
}

const getDraftById = async (id) => {
  const response = await ApiService.post('/drafts/draft', {id})
  if (response.data.status === 'OK') {
    return response.data.value.draft
  } else {
    return Promise.reject(response.data.error)
  }
}


const saveDraft = async (payload) => {
  const response = await ApiService.post('/drafts', payload)

  if(response.data.status === 'OK') {
    return response.value
  } else {
    return Promise.reject(response.data.error)
  }
}

export default {
  getDrafts,
  getDraftById,
  saveDraft
}