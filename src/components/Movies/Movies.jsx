import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { searchMovies } from 'API/API';
import './Movies.css';
const Movies = () => {
  const location = useLocation();
  const [search, setSearch] = useState();
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const elements = items?.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));
  useEffect(() => {
    searchMovies(query).then(({ results }) => {
      setItems(results);
    });
  }, [searchParams, query, setItems]);
  return (
    <>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();
          setSearchParams({ query: search });
        }}
      >
        <input
          className="input-search"
          onChange={({ target }) => {
            setSearch(target.value);
            setSearchParams({ query: target.value });
          }}
          type="text"
          name="search"
          placeholder='Movie name'
        />
        <button type="submit" className="button-4">
          Search
        </button>
      </form>
      <ul>{elements}</ul>
    </>
  );
};
export default Movies;
