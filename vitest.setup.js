import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'

import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import handlers from '@/mocks/handlers'
import { cleanup } from '@testing-library/vue'

expect.extend(matchers)

const server = setupServer(...handlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => {
  // Clean tests before run new test
  cleanup()
  server.resetHandlers()
})

export { server }
