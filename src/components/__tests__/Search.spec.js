import { describe, it, expect } from 'vitest'

import { render } from '@/utils/test-utils.js'
import Search from '@/components/Search.vue'
import { screen } from '@testing-library/vue'

describe('Search', () => {
  it('renders properly', async () => {
    render(Search)
    const searchElement = await screen.findByPlaceholderText('Search')
    expect(searchElement).toBeInTheDocument()
  })
})
