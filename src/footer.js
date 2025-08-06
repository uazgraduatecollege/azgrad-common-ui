import { Logo } from './logo'
import { SearchForm } from './search-form'
import links from './footer-links.json'
import './style.css'

export function Footer () {
  const linksColumn1 = links.columns[0].map((next, i) => {
    return (
      <li key={i}>
        <a href={next.url} className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{next.text}</a>
      </li>
    )
  })

  const linksColumn2 = links.columns[1].map((next, i) => {
    return (
      <li key={i}>
        <a href={next.url} className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">{next.text}</a>
      </li>
    )
  })

  const year = new Date().getFullYear()
  return (
    <footer id="footer" className="footer py-3 text-bg-warm-gray text-center">
      <div className="container py-4">
        <div className="row align-top">
          <div className="col-sm-3 text-left">
            <a href="https://grad.arizona.edu/">
              <Logo
                className="img-fluid center-block"
                variant="full-blue"
              />
            </a>
          </div>

          <div className="col-sm-3 text-center">
            <ul className="list-unstyled">
              {linksColumn1}
            </ul>
          </div>

          <div className="col-sm-3 text-center">
            <ul className="list-unstyled">
              {linksColumn2}
            </ul>
          </div>

          <div className="col-sm-3 text-end">
            <SearchForm />

            <ul className="list-inline mt-3">
              <li className="d-inline-block fs-3 p-1">
                <a
                  href="https://www.instagram.com/uagradcollege"
                  className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  <i className="az-icon-instagram"></i>
                  <span className="visually-hidden-focusable">Instagram</span>
                </a>
              </li>
              <li className="d-inline-block fs-3 p-1">
                <a
                  href="https://www.linkedin.com/school/university-of-arizona-graduate-college/"
                  className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  <i className="az-icon-linkedin"></i>
                  <span className="visually-hidden-focusable">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="row text-center">
          <div className="col-12">
            <i>
              We respectfully acknowledge <a href="https://www.arizona.edu/university-arizona-land-acknowledgment" target="_blank" rel="noreferrer" className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">the University of Arizona is on the land and territories of Indigenous peoples</a>.
              Today, Arizona is home to 22 federally recognized tribes, with Tucson being home to the O’odham and the Yaqui.
              The University strives to build sustainable relationships with sovereign Native Nations and Indigenous communities through education offerings, partnerships, and community service.
            </i>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-6 text-start align-bottom">
            © {year} Arizona Board of Regents on behalf of the University of Arizona
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
