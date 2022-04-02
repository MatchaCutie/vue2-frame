import http from '@/config/http'
console.log(http);

export const getData = params => {
  return http.get('/data', params)
}
