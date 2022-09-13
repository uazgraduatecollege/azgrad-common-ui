/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { GradLockupBlue, GradLockupFullBlue, GradLockupFullWhite } from "./img/images"

export function Logo (props) {
  let logo = ''

  switch (props.variant) {
    case 'full-blue':
      logo = GradLockupFullBlue
      break

    case 'full-white':
      logo = GradLockupFullWhite
      break

    case 'blue':
    default:
      logo = GradLockupBlue
  }

  return (
    <img
      className={props.className || ''}
      alt={props.alt || 'Graduate College Logo'}
      title={props.title || 'University of Arizona Graduate College'}
      src={logo}
    />
  )
}
