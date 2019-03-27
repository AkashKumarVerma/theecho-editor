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
    return response.data.value
  } else {
    return Promise.reject(response.data.error)
  }
}

const updateDraft = async (payload) => {
  const response = await Api.put('/drafts', payload)

  if (response.data.status === 'OK') {
    return response.data.value
  } else {
    return Promise.reject(response.data.erros)
  }
}


const submitDraft = async (payload) => {
  const response = await Api.post('/drafts/submit', payload)
	console.log('TCL: submitDraft -> response', response)

  if (response.data.status === 'OK') {
    return response.data.value
  } else {
    return Promise.reject(response.data.erros)
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
  getDraft,
  updateDraft,
  submitDraft
}