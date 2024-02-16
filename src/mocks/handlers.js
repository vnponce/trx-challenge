import { HttpResponse, http } from 'msw'
export const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@traxporta.com'
  },
  {
    id: 3,
    name: 'Jane Doe',
    email: 'jane.doe@traxporta.com'
  }
]

export default [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(users)
  })
]
