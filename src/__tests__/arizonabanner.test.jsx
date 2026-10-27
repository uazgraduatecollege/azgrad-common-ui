import React from 'react'
import { render, screen } from '@testing-library/react'
import { ArizonaBanner } from '../index'

it.each([
  [undefined, 'text-bg-blue arizona-header'],
  ['blue', 'text-bg-blue arizona-header'],
  ['red', 'text-bg-red arizona-header'],
  ['unknown', 'text-bg-blue arizona-header']
])('uses the expected class for the %s variant', (variant, className) => {
  render(<ArizonaBanner variant={variant} />)

  expect(screen.getByRole('banner')).toHaveClass(...className.split(' '))
})

it('renders the Arizona wordmark link', () => {
  render(<ArizonaBanner />)

  const link = screen.getByRole('link', { name: 'The University of Arizona Wordmark Line Logo White' })
  expect(link).toHaveAttribute('href', 'http://www.arizona.edu')
  expect(link).toHaveAttribute('title', 'The University of Arizona homepage')
  expect(screen.getByRole('banner')).toHaveAttribute('id', 'header_arizona')
})
