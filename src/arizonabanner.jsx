import React from 'react'
import './style.css'

export function ArizonaBanner (props) {
  let headerClassName = ''

  switch (props.variant) {
    case 'red':
      headerClassName = 'text-bg-red arizona-header'
      break

    case 'blue':
    default:
      headerClassName = 'text-bg-blue arizona-header'
  }

  return (
    <header className={ headerClassName } id='header_arizona'>
      <div className='container'>
        <div className='row'>
          <a
            className='arizona-logo'
            href='http://www.arizona.edu'
            title='The University of Arizona homepage'
          >
            <img
              className='arizona-line-logo'
              alt='The University of Arizona Wordmark Line Logo'
              src='https://cdn.digital.arizona.edu/logos/v1.0.0/ua_wordmark_line_logo_white_rgb.min.svg'
            />
          </a>
        </div>
      </div>
    </header>
  )
}
