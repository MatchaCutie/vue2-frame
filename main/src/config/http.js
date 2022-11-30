import axios from 'axios'
import QS from 'qs'

const instance = axios.create({
  timeout: 60000,
  headers: {
    Accept: 'application/json',
  }
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  console.log(config)
  // 处理参数
  let url = config.url
  if (config.method === 'get' && config.params) {
    let parts = []
    let keys = Object.keys(config.params)
    for (let key of keys) {
      let values = []
      // 处理数组
      if (Array.isArray(config.params[key])) {
        values = config.params[key]
        key += '[]'
      } else {
        values = [config.params[key]]
      }
      values.forEach(val => {
        if (val !== null && val !== undefined && val !== '') {
          parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(val))
        }
      })
    }
    let serializedParams = parts.join('&')
    if (serializedParams) {
      url += (url.includes('?') ? '&' : '?') + serializedParams
    }
    config.params = {}
  }
  config.url = url
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use((response) => {
  return response.data
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 跳转登陆页
        // window.vm.router.push('/login')
        break
      case 403:
        // 跳转无权限
        // window.vm.router.push('/forbidden')
        break
      case 404:
        // 跳转404
        // window.vm.router.push('/notFound')
        break
      case 500:
        // window.vm.router.push('/serverError')
        window.vm.$message.error('服务器错误')
        break
      default:
        break
    }
  }
  return Promise.reject(error.response)
})

// 封装请求
const getFn = (url, data, config = {}) => {
  let params = { params: data, ...config }
  return instance.get(url, params).catch(handleError)
}

const postFn = (url, data, config = {}) => {
  return instance.post(url, data, config).catch(handleError)
}

const postJson = (url, data) => {
  let str = QS.stringify(data)
  return instance.post(url, str).catch(handleError)
}

const deleteFn = (url, data) => {
  return instance.delete(url, data).catch(handleError)
}

const patchFn = (url, data) => {
  return instance.patch(url, data).catch(handleError)
}

function handleError (error) {
  return Promise.reject(error)
}

export default {
  get: getFn,
  post: postFn,
  postJson: postJson,
  delete: deleteFn,
  patch: patchFn
}
