import { describe, it, expect } from 'vitest'

import { mount, render } from '@/utils/test-utils.js'
import UserList from '@/components/UserList.vue'
import Search from '@/components/Search.vue'
import { screen } from '@testing-library/vue'

describe('Search', () => {
  it('renders properly', async () => {
    const wrapper = render(Search)
    await screen.findByPlaceholderText('Search');
  })
})
