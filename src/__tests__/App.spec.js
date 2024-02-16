import { vi, describe, it, expect } from 'vitest'

import { render } from '@/utils/test-utils.js'
import App from '@/App.vue'
import UserList from '@/components/UserList.vue'
import { screen } from '@testing-library/vue'

describe('App', () => {
  it('renders properly', async () => {
    // This is to avoid the actual rendering of the UserList component because maybe it is too complex
    const UserListSpy = vi.spyOn(UserList, 'render')
    render(App)

    // This is to show that a simple component is rendered
    await screen.findByPlaceholderText('Search')

    await screen.findByText('Name')
    const [UserListLastCalledProps] = UserListSpy.mock.lastCall
    expect(UserListLastCalledProps.users).toEqual([
      { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' }
    ])
  })

  it.todo('search by name', async () => {})

  it.todo('search by email', async () => {})
})
