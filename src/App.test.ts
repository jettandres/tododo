import { render, screen } from '@testing-library/svelte'

import App from './App.svelte'

test('should display TODO title', () => {
  render(App)
  const title = screen.getByText('Todo Today')
  expect(title).toBeInTheDocument()
})
