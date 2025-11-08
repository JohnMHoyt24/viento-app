import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

// Using global Jest types (describe, it, expect) - no imports needed
// This works better with @testing-library/jest-dom types

describe('App', () => {
  it('renders the app title', () => {
    render(<App />)
    const heading = screen.getByText('Vite + React')
    expect(heading).toBeInTheDocument()
  })

  it('increments count when button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent('count is 0')
    
    await user.click(button)
    expect(button).toHaveTextContent('count is 1')
    
    await user.click(button)
    expect(button).toHaveTextContent('count is 2')
  })

  it('renders the Vite logo link', () => {
    render(<App />)
    const viteLink = screen.getByRole('link', { name: /vite logo/i })
    expect(viteLink).toBeInTheDocument()
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev')
  })
})

