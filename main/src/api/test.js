import http from '@/config/http'

export const getData = params => {
  return http.get('/data', params)
}
