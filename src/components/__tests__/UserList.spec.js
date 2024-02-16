import { describe, it, expect } from 'vitest'

import { render } from '@/utils/test-utils.js'
import UserList from '@/components/UserList.vue'
import { screen } from '@testing-library/vue'

describe('User List', () => {
  it('renders properly', async () => {
    const users = [{ id: 1, name: 'John Doe', email: 'john@traxporta.com' }]
    render(UserList, { props: { users } })

    const nameElement = await screen.findByText(/John Doe/i)
    expect(nameElement).toBeInTheDocument()
    const emailElement = await screen.findByText(/john@traxporta.com/i)
    expect(emailElement).toBeInTheDocument()
  })

  it('renders properly when receives an empty array', async () => {
    const users = []
    render(UserList, { props: { users } })

    const emptyElement = await screen.findByText(/No items to match/i)
    expect(emptyElement).toBeInTheDocument()
  })
})
