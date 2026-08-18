import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchForm } from '../index'

it('clears and restores the search placeholder on focus and blur', () => {
  render(<SearchForm />)

  const form = screen.getByRole('textbox', { name: 'Search all GRAD websites' }).closest('form')
  const input = screen.getByRole('textbox', { name: 'Search all GRAD websites' })

  expect(form).toHaveAttribute('action', 'https://grad.arizona.edu/search')
  expect(input.getAttribute('placeholder')).toBe('Search all GRAD websites')

  fireEvent.focus(input)
  expect(input.getAttribute('placeholder')).toBe('')

  fireEvent.blur(input)
  expect(input.getAttribute('placeholder')).toBe('Search all GRAD websites')
})
