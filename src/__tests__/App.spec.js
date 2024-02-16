import { vi, describe, it, expect } from 'vitest'

import { render } from '@/utils/test-utils.js'
import App from '@/App.vue'
import UserList from '@/components/UserList.vue'
import { screen } from '@testing-library/vue'
import { users } from '@/mocks/handlers.js'
import userEvent from '@testing-library/user-event'

describe('App', () => {
  it('renders properly', async () => {
    // This is to avoid the actual rendering of the UserList component because maybe it is too complex
    const UserListSpy = vi.spyOn(UserList, 'render')
    render(App)

    // This is to show that a simple component is rendered
    await screen.findByLabelText('Search')

    await screen.findByText('Name')
    const [UserListLastCalledProps] = UserListSpy.mock.lastCall
    expect(UserListLastCalledProps.users).toEqual(users)
  })

  it('search by name', async () => {
    const user = userEvent.setup()

    render(App)

    const searchElement = await screen.findByLabelText('Search')
    await user.type(searchElement, 'Doe')

    const leanneUser = screen.queryByText(/Leanne/i)
    expect(leanneUser).not.toBeInTheDocument()

    const johnDoeUser = await screen.findByText(/John Doe/i)
    expect(johnDoeUser).toBeInTheDocument()
    const janeDoeUser = await screen.findByText(/Jane Doe/i)
    expect(janeDoeUser).toBeInTheDocument()
  })

  it('search by email', async () => {
    const user = userEvent.setup()

    render(App)

    const searchElement = await screen.findByLabelText('Search')
    await user.type(searchElement, 'traxporta')

    const leanneUser = screen.queryByText(/Leanne/i)
    expect(leanneUser).not.toBeInTheDocument()

    const johnDoeUser = await screen.findByText(/John Doe/i)
    expect(johnDoeUser).toBeInTheDocument()
    const janeDoeUser = await screen.findByText(/Jane Doe/i)
    expect(janeDoeUser).toBeInTheDocument()
  })

  it('shows all items when the users click the `clear` button', async () => {
    const user = userEvent.setup()

    render(App)

    // having Leanne
    const leanneUser = await screen.findByText(/Leanne/i)
    expect(leanneUser).toBeInTheDocument()

    const searchElement = await screen.findByLabelText('Search')
    await user.type(searchElement, 'traxporta')

    // not having Leanne
    const leanneUserHidden = screen.queryByText(/Leanne/i)
    expect(leanneUserHidden).not.toBeInTheDocument()

    const clearButton = await screen.findByRole('button', { name: /clear/i })
    await user.click(clearButton)

    // having Leanne back
    const leanneUserBack = await screen.findByText(/Leanne/i)
    expect(leanneUserBack).toBeInTheDocument()
  })
})
