import { render as tlRender } from '@testing-library/vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

function customRender(ui, options) {
  return tlRender(ui, { global: { plugins: [VueQueryPlugin] }, ...options })
}

export { customRender as render }
