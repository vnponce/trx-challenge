import { HttpResponse, http } from 'msw'
export default [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz'
      }
    ])
  })
]
