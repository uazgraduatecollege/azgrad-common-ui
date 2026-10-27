import React from 'react'
import { render, screen } from '@testing-library/react'
import { Logo, GradLockupBlue, GradLockupFullBlue, GradLockupFullWhite } from '../index'

it('renders the default blue logo with default metadata', () => {
  render(<Logo />)

  const image = screen.getByRole('img', { name: 'Graduate College Logo' })
  expect(image).toHaveAttribute('src', GradLockupBlue)
  expect(image).toHaveAttribute('title', 'University of Arizona Graduate College')
})

it.each([
  ['blue', GradLockupBlue],
  ['full-blue', GradLockupFullBlue],
  ['full-white', GradLockupFullWhite],
  ['unknown', GradLockupBlue]
])('renders the %s variant', (variant, source) => {
  render(<Logo variant={variant} />)

  expect(screen.getByRole('img')).toHaveAttribute('src', source)
})

it('applies custom image props', () => {
  render(<Logo className='custom-logo' alt='Custom logo' title='Custom title' />)

  const image = screen.getByRole('img', { name: 'Custom logo' })
  expect(image).toHaveClass('custom-logo')
  expect(image).toHaveAttribute('title', 'Custom title')
})
