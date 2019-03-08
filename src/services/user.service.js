import ApiService from '@/services/api.service'

const login = async (credentials) => {
  const requestData = {
    email: credentials.email,
    password: credentials.password
  }

  const response = await ApiService.post('/users/login', requestData)
  console.log('Login Response', response)
  if(response.data.user) {
    return response.data.user
  } else {
    return Promise.reject(response.data.error)
  }
}

const register = async (credentials) => {
  const { email, password, username } = credentials

  if (email && password && username) {

    const response = await ApiService.post('/users', credentials)

    if(response.data.status === 'ok') {
      return response.data.user
    } else {
      return Promise.reject({
        error: 'Registration Failed',
        message: response.data.err
      })
    }
  }
}

export default {
  login,
  register
}