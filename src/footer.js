import { Logo } from './logo'
import { SearchForm } from './search-form'
import footerLinks from './footer-links.json'
import './style.css'

export function Footer () {
  const essentialLinks = footerLinks.essentialLinks.map((linkObj) => {
    return linkObj.map((link, i) => {
      return (
        <li key={i} className="nav-item">
          <a href={link.url} className="bg-transparent nav-link">{link.text}</a>
        </li>
      )
    })
  })

  const informationForLinks = footerLinks.informationFor.map((linkObj) => {
    return linkObj.map((link, i) => {
      return (
        <li key={i} className="d-flex px-0 mb-1 mb-md-2 nav-item">
          <a href={link.url} className="bg-transparent nav-link">{link.text}</a>
        </li>
      )
    })
  })

  const topicsLinks = footerLinks.topics.map((linkObj) => {
    return linkObj.map((link, i) => {
      return (
        <li key={i} className="d-flex px-0 mb-1 mb-md-2 nav-item">
          <a href={link.url} className="bg-transparent nav-link">{link.text}</a>
        </li>
      )
    })
  })

  const resourcesLinks = footerLinks.resources.map((linkObj) => {
    return linkObj.map((link, i) => {
      return (
        <li key={i} className="d-flex px-0 mb-1 mb-md-2 nav-item">
          <a href={link.url} className="bg-transparent nav-link">{link.text}</a>
        </li>
      )
    })
  })

  const socialMediaLinks = footerLinks.socialMedia.map((linkObj) => {
    return linkObj.map((link, i) => {
      return (
        <li key={i} className="d-flex px-0 mb-1 mb-md-2 nav-item">
          <a href={link.url} className={link.icon + ' icon-link bg-transparent nav-link'}>{link.text}</a>
        </li>
      )
    })
  })

  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="footer py-3 text-bg-warm-gray">
      <div className="container py-4">
        <div className="row align-top d-flex justify-content-between">
          <div className="col-12 col-sm-5 col-md-4 col-lg-4">
            <a href="https://grad.arizona.edu/">
              <Logo
                className="img-fluid"
                variant="full-blue"
              />
            </a>
          </div>
          <div className="col-12 col-sm-7 col-md-8 col-lg-8">
            <div className="row d-flex justify-content-center justify-content-sm-end">
              <div className="col-md-6">
                <SearchForm />
              </div>
              <div className="col-12">
                <ul className="nav-utility d-flex justify-content-center justify-content-sm-end clearfix nav">
                  {essentialLinks}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col">
            <div className="row">
              <nav role="navigation" aria-labelledby="block-az-barrio-footer-menu-info-menu" id="block-az-barrio-footer-menu-info" className="col-12 col-sm-6 col-md-3">
                <h2 className="h6 mt-md-3 text-uppercase" id="block-az-barrio-footer-menu-info-menu">Information For</h2>
                <ul className="nav flex-column nav-utility clearfix">
                  {informationForLinks}
                </ul>
              </nav>
              <nav role="navigation" aria-labelledby="block-az-barrio-footer-menu-info-menu" id="block-az-barrio-footer-menu-info" className="col-12 col-sm-6 col-md-5">
                <h2 className="h6 mt-md-3 text-uppercase" id="block-az-barrio-footer-menu-info-menu">Topics</h2>
                <ul className="split-md-2-col nav flex-column nav-utility clearfix">
                  {topicsLinks}
                </ul>
              </nav>
              <nav role="navigation" aria-labelledby="block-az-barrio-footer-menu-info-menu" id="block-az-barrio-footer-menu-info" className="col-12 col-sm-6 col-md-2">
                <h2 className="h6 mt-md-3 text-uppercase" id="block-az-barrio-footer-menu-info-menu">Resources</h2>
                <ul className="nav flex-column nav-utility clearfix">
                  {resourcesLinks}
                </ul>
              </nav>
              <nav role="navigation" aria-labelledby="block-az-barrio-footer-menu-social-media-menu" id="block-az-barrio-footer-menu-social-media" className="col-12 col-sm-6 col-md-2">
                <h2 className="h6 mt-md-3 text-uppercase" id="block-az-barrio-footer-menu-social-media-menu">Connect</h2>
                <ul className="nav flex-column nav-utility clearfix">
                  {socialMediaLinks}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center fw-light">
            <em>
              We respectfully acknowledge <a href="https://www.arizona.edu/university-arizona-land-acknowledgment" target="_blank" rel="noreferrer" className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">the University of Arizona is on the land and territories of Indigenous peoples</a>.
              Today, Arizona is home to 22 federally recognized tribes, with Tucson being home to the O’odham and the Yaqui.
              The University strives to build sustainable relationships with sovereign Native Nations and Indigenous communities through education offerings, partnerships, and community service.
            </em>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-6 text-start align-bottom">
            © {year} Arizona Board of Regents on behalf of <a href="https://www.arizona.edu/">The University of Arizona</a>
          </div>
          <div className="col-6 text-end">
            <a className="ua-privacy link-underline link-underline-opacity-0 link-underline-opacity-75-hover" rel="external" href="https://www.arizona.edu/information-security-privacy">University Information Security &amp; Privacy</a>
            <br />
            <a className="ua-privacy link-underline link-underline-opacity-0 link-underline-opacity-75-hover" rel="external" href="https://clery.arizona.edu/asr">Annual Security Report</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
