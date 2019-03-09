import ApiService from '@/services/api.service'

const login = async (credentials) => {
  const requestData = {
    email: credentials.email,
    password: credentials.password
  }

  return ApiService.post('/users/login', requestData)
    .then((res) => {
      if (res.data.status === 'success') { return res.data.value }
      return Promise.reject(res.data.error)
    }).catch((err) => {
      return Promise.reject(err)
    })
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