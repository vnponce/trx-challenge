import { vi, describe, it, expect } from 'vitest'

import { render } from '@/utils/test-utils.js'
import App from '@/App.vue'
import UserList from '@/components/UserList.vue'
import { screen } from '@testing-library/vue'

describe('App', () => {
  it('renders properly', async () => {
    const UserListSpy = vi.spyOn(UserList, 'render')
    render(App)
    await screen.findByText('Name')
    expect(UserListSpy.mock.calls[0][0].users).toEqual([{ id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' }])
  })
})
