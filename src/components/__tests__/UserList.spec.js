import { describe, it, expect } from 'vitest'

import { mount } from '@/utils/test-utils.js'
import UserList from '@/components/UserList.vue'

describe('User List', () => {
  it('renders properly', () => {
    const users = [{ id: 1, name: 'John Doe', email: 'john@test.com' }]
    const wrapper = mount(UserList, { props: { users } })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('john@test.com')
  })
})
