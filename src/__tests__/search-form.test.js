import { fireEvent, render, screen } from '@testing-library/react'
import { SearchForm } from '../index'

it('clears and restores the search placeholder on focus and blur', () => {
  render(<SearchForm />)

  const input = screen.getByRole('textbox', { name: 'Search all GRAD websites' })

  expect(input.getAttribute('placeholder')).toBe('Search all GRAD websites')

  fireEvent.focus(input)
  expect(input.getAttribute('placeholder')).toBe('')

  fireEvent.blur(input)
  expect(input.getAttribute('placeholder')).toBe('Search all GRAD websites')
})
