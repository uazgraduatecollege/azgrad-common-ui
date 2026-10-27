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

it('renders a GET search form with a named input and submit button', () => {
  render(<SearchForm />)

  const input = screen.getByRole('textbox', { name: 'Search all GRAD websites' })
  const form = input.closest('form')

  expect(form.getAttribute('method')).toEqual(expect.stringMatching(/^get$/i))
  expect(input).toHaveAttribute('name', 'q')
  expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  expect(screen.getByText('search')).toBeInTheDocument()
})

it('does not change the search value on focus and blur', () => {
  render(<SearchForm />)

  const input = screen.getByRole('textbox', { name: 'Search all GRAD websites' })
  fireEvent.change(input, { target: { value: 'graduate programs' } })
  fireEvent.focus(input)
  fireEvent.blur(input)

  expect(input).toHaveValue('graduate programs')
})
