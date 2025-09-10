/* eslint-disable react/react-in-jsx-scope */
import { createRoot } from 'react-dom/client'

/**
 * Although this example app includes the local module,
 * a real client app would include from the npm dependency.
 *
 * Eg.
 * import { ArizonaBanner, Footer, Logo } from 'uazgraduatecollege/azgrad-common-ui'
 */
import { ArizonaBanner, Footer, Logo } from '../index'

const header = document.getElementById('header-container')
const headerRoot = createRoot(header)
headerRoot.render(<ArizonaBanner />)

const logo = document.getElementById('logo-container')
const logoRoot = createRoot(logo)
logoRoot.render(<Logo variant="blue" className="img-fluid" />)

const footer = document.getElementById('footer-container')
const footerRoot = createRoot(footer)
footerRoot.render(<Footer />)
