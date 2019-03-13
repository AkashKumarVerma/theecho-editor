import Api from '@/services/api.service'

const getDraftSkeleton = async (id) => {
  const response = await Api.get(`/drafts/skeleton/${id}`)

  if (response.data.status === 'OK') {
    return response.data.value
  } else {
    return Promise.reject(response.data.error)
  }
}

const saveDraft = async (payload) => {
  const response = await Api.post('/drafts', payload)

  if (response.data.status === 'OK') {
    console.log(response)
  }
}

const getDraft = async (id) => {
  const response = await Api.get(`/drafts/${id}`)
  
  if (response.data.status === 'OK') {
    return response.data.value.draft
  } else {
    return Promise.reject(response.data.error)
  }
}

export default {
  getDraftSkeleton,
  saveDraft,
  getDraft
}