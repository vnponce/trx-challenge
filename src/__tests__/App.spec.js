import { vi, describe, it, expect } from 'vitest'

import { render, mount } from '@/utils/test-utils.js'
import App from '@/App.vue'
import UserList from '@/components/UserList.vue'
import { screen } from '@testing-library/vue'

describe('App', () => {
  // it('renders properly', async () => {
  //   const wrapper = mount(App)
  //   // expect(wrapper.findComponent(Search).exists()).toBe(true)
  //   console.log(wrapper.html())
  //   expect(wrapper.findComponent(UserList).exists()).toBe(true)
  //   expect(wrapper.findComponent(UserList).props().users).toEqual([{ id: 1, name: 'John Doe', email: 'john@traxporta.com'}])
  // })

  it('renders properly', async () => {
    const wrapper = render(App)
    // expect(wrapper.findComponent(Search).exists()).toBe(true)
    console.log(wrapper.html())
    await vi.waitUntil(() => document.querySelector('#user-list'))
    console.log(wrapper.html())
    screen.getByText('Name')
    screen.getByText(/Leanne Graham/i)
    // expect(wrapper.findComponent(UserList).exists()).toBe(true)
    // expect(wrapper.findComponent(UserList).props().users).toEqual([{ id: 1, name: 'John Doe', email: 'john@traxporta.com'}])
  })

})
