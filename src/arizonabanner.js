/* eslint-disable react/react-in-jsx-scope */
import './style.css'

export function ArizonaBanner () {
  return (
    <header className="bg-red arizona-header" id="header_arizona">
      <div className="container">
        <div className="row">
          <a
            className="arizona-logo"
            href="http://www.arizona.edu"
            title="The University of Arizona homepage">
            <img
              className="arizona-line-logo"
              alt="The University of Arizona Wordmark Line Logo White"
              src="https://cdn.digital.arizona.edu/logos/v1.0.0/ua_wordmark_line_logo_white_rgb.min.svg"/>
          </a>
        </div>
      </div>
    </header>
  )
}
