import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { Footer } from '../index'
import footerLinks from '../footer-links.json'

const linkGroups = [
  footerLinks.essentialLinks,
  footerLinks.informationFor,
  footerLinks.topics,
  footerLinks.resources,
  footerLinks.socialMedia
].flat(2)

it('renders the footer navigation from the configured links', () => {
  render(<Footer />)

  expect(screen.getByRole('contentinfo')).toHaveAttribute('id', 'footer')
  for (const link of linkGroups) {
    expect(screen.getByRole('link', { name: link.text })).toHaveAttribute('href', link.url)
  }
})

it('renders the footer sections and search form', () => {
  render(<Footer />)

  for (const heading of ['Information For', 'Topics', 'Resources', 'Connect']) {
    expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
  }

  expect(screen.getByRole('textbox', { name: 'Search all GRAD websites' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'Graduate College Logo' })).toBeInTheDocument()
})

it('applies configured icon classes to social links', () => {
  render(<Footer />)

  const connect = screen.getByRole('heading', { name: 'Connect' }).parentElement
  for (const link of footerLinks.socialMedia.flat()) {
    expect(within(connect).getByRole('link', { name: link.text })).toHaveClass(link.icon)
  }
})

it('renders the current year and required privacy links', () => {
  render(<Footer />)

  expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Arizona Board of Regents`))).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'University Information Security & Privacy' })).toHaveAttribute('rel', 'external')
  expect(screen.getByRole('link', { name: 'Annual Security Report' })).toHaveAttribute('rel', 'external')
})
