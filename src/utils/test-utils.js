import { mount } from '@vue/test-utils'
import { render as tlRender } from '@testing-library/vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

function customRender(ui, options) {
  return tlRender(ui, { global: {plugins: [VueQueryPlugin]}, ...options })
}
function customMount(ui, options) {
  return mount(ui, { global: {plugins: [VueQueryPlugin]}, ...options })
}

export { customRender as render, customMount as mount }