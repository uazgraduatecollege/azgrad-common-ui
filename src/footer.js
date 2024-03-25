import { Logo } from './logo'
import { SearchForm } from './search-form'
import links from './footer-links.json'
import './style.css'

export function Footer () {
  const linksColumn1 = links.columns[0].map((next, i) => {
    return (
      <li key={i}>
        <a href={next.url}>{next.text}</a>
      </li>
    )
  })

  const linksColumn2 = links.columns[1].map((next, i) => {
    return (
      <li key={i}>
        <a href={next.url}>{next.text}</a>
      </li>
    )
  })

  return (
    <footer id="footer" className="footer py-3 bg-warm-gray text-center">
      <div className="container py-4">
        <div className="row">
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

          <div className="col-sm-3 text-right">
            <SearchForm />

            <ul className="list-inline mt-3">
              <li className="d-inline-block text-size-h3 p-1">
                <a href="https://www.facebook.com/UAGradCollege">
                  <i className="az-icon-facebook"></i>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li className="d-inline-block text-size-h3 p-1">
                <a href="https://twitter.com/uagradcollege">
                  <i className="az-icon-twitter"></i>
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li className="d-inline-block text-size-h3 p-1">
                <a href="https://instagram.com/uagradcat">
                  <i className="az-icon-instagram"></i>
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="row text-center">
          <div className="col-12">
            <i>We respectfully acknowledge the University of Arizona is on the land and territories of Indigenous peoples. Today, Arizona is home to 22 federally recognized tribes, with Tucson being home to the O’odham and the Yaqui. Committed to diversity and inclusion, the University strives to build sustainable relationships with sovereign Native Nations and Indigenous communities through education offerings, partnerships, and community service.</i>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-6 text-left align-bottom">
            © 2022 Arizona Board of Regents on behalf of the University of Arizona
          </div>
          <div className="col-6 text-right">
            <a className="ua-privacy" rel="external" href="https://grad.arizona.edu/equity">Arizona&#39;s Commitment to Equity</a>
            <br />
            <a className="ua-privacy" rel="external" href="https://www.arizona.edu/information-security-privacy">University Information Security &amp; Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
