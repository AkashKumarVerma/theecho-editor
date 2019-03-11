import ApiService from '@/services/api.service'

const login = async (credentials) => {
  const requestData = {
    email: credentials.email,
    password: credentials.password
  }

  return ApiService.post('/users/login', requestData)
    .then((res) => {
      if (res.data.status === 'OK') { return res.data.value.user }
      return Promise.reject(res.data.error)
    }).catch((err) => {
      return Promise.reject(res.data.error)
    })
}


const register = async (credentials) => {
  const { email, password, username } = credentials

  if (email && password && username) {

    const response = await ApiService.post('/users', credentials)

    if(response.data.status === 'OK') {
      return response.data.value
    } else {
      return Promise.reject(response.data.error)
    }
  }
}

export default {
  login,
  register
}