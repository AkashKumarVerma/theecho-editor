import ApiService from '@/services/api.service'

const login = async (credentials) => {
  const requestData = {
    email: credentials.email,
    password: credentials.password
  }

  const response = await ApiService.post('/users/login', requestData)

  if(response.data.status === "SUCCESS") {
    return response.data
  } else {
    return Promise.reject(response.error)
  }
}

export default {
  login
}