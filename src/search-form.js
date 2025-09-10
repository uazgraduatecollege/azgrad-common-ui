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
        <button className="btn btn-sm btn-red pb-0" type="submit" id="search-button">
          <span className="material-symbols-rounded">
            search
          </span>
        </button>
      </div>
    </form>
  )
}
