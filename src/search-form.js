/* eslint-disable react/react-in-jsx-scope */

export function SearchForm () {
  const searchAction = process.env.SEARCH_URI || 'https://grad.arizona.edu/search'

  return (
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
  )
}
