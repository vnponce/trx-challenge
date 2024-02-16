import { describe, it, expect } from 'vitest'

import { render } from '@/utils/test-utils.js'
import Search from '@/components/Search.vue'
import { screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

describe('Search', () => {
  it('renders properly', async () => {
    render(Search)
    const searchElement = await screen.findByPlaceholderText('Search')
    expect(searchElement).toBeInTheDocument()
    const clearButton = screen.queryByText('Clear')
    expect(clearButton).not.toBeInTheDocument()
  })

  it('show clear button user start typing', async () => {
    render(Search)
    const user = userEvent.setup()
    const searchElement = await screen.findByPlaceholderText('Search')
    user.type(searchElement, 'test')
    const clearButton = await screen.findByRole('button', { name: /Clear/i })
    expect(clearButton).toBeInTheDocument()
  })
})
