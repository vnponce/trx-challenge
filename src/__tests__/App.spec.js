import { vi, describe, it, expect } from 'vitest'

import { render } from '@/utils/test-utils.js'
import App from '@/App.vue'
import UserList from '@/components/UserList.vue'
import { screen } from '@testing-library/vue'

describe('App', () => {
  // it('renders properly', async () => {
  //   const wrapper = mount(App, { global: {plugins: [VueQueryPlugin]} })
  //   // expect(wrapper.findComponent(Search).exists()).toBe(true)
  //   await vi.waitUntil(() => document.querySelector('#user-list'))
  //   console.log(wrapper.html())
  //   expect(wrapper.findComponent(UserList).exists()).toBe(true)
  //   expect(wrapper.findComponent(UserList).props().users).toEqual([{ id: 1, name: 'John Doe', email: 'john@traxporta.com'}])
  // })

  it('renders properly', async () => {
    const UserListSpy = vi.spyOn(UserList, 'render')
    render(App)
    await vi.waitUntil(() => document.querySelector('#user-list'))
    screen.getByText('Name')
    expect(UserListSpy.mock.calls[0][0].users).toEqual([{ id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz' }])
  })

})
