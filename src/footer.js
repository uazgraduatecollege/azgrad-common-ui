/* eslint-disable react/react-in-jsx-scope */
import { Logo } from './logo'
import './style.css'

export function Footer () {
  const searchAction = process.env.SEARCH_URI || 'https://grad.arizona.edu/search'

  return (
    <footer id="footer" className="footer py-3 bg-warm-gray text-center">
      <div className="container py-4">
        <div className="row">
          <div className="col-3 text-left">
            <a href="https://grad.arizona.edu/">
              <Logo
                className="img-fluid center-block"
                variant="full-blue"
              />
            </a>
          </div>

          <div className="col-3 text-center">
            <ul className="list-unstyled">
              <li>
                <a href="https://grad.arizona.edu/catalog">Graduate Catalog</a>
              </li>
              <li>
                <a href="https://grad.arizona.edu/admissions">Graduate Admissions</a>
              </li>
              <li>
                <a href="https://grad.arizona.edu/gsas">Graduate Student Academic Services</a>
              </li>
              <li>
                <a href="https://grad.arizona.edu/funding">Funding Resources</a>
              </li>
              <li>
                <a href="https://grad.arizona.edu/general/policies">Policies</a>
              </li>
            </ul>
          </div>

          <div className="col-3 text-center">
            <ul className="list-unstyled">
              <li>
                <a href="https://gradcenter.arizona.edu">The Graduate Center</a>
              </li>
              <li>
                <a href="https://apply.grad.arizona.edu">GradApp (Future Students)</a>
              </li>
              <li>
                <a href="https://grad.arizona.edu/gradpath">GradPath (Current Students)</a>
              </li>
              <li>
                <a href="https://grad.arizona.edu/tools/directory">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="col-3 text-right">
            <form method="GET" action={ `${searchAction}` }>
              <div className="input-group">
                <input
                  name="q"
                  className="form-control"
                  type="text"
                  aria-label="Search all GRAD websites"
                  aria-describedby="search-button"
                  placeholder="Search all GRAD websites"
                  onFocus={ () => { this.placeholder = '' }}
                  onBlur={ () => { this.placeholder = 'Search all GRAD websites' }}
                />
                <button className="btn btn-sm btn-red" type="submit" id="search-button">
                  <i className="fas fa-search" aria-hidden="true"></i>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>

            <ul className="list-inline mt-3">
              <li className="d-inline-block text-size-h3 p-1">
                <a href="https://www.facebook.com/UAGradCollege">
                  <i className="fab fa-facebook-square"></i>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li className="d-inline-block text-size-h3 p-1">
                <a href="https://twitter.com/uagradcollege">
                  <i className="fab fa-twitter-square"></i>
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li className="d-inline-block text-size-h3 p-1">
                <a href="https://instagram.com/uagradcat">
                  <i className="fab fa-instagram-square"></i>
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
