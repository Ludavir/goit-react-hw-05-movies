import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getTrending } from 'API/API';
import './Home.css';

const Home = () => {
  const [results, setResults] = useState();
  const location = useLocation();
  useEffect(() => {
    getTrending().then(response => {
      const data = response.results;
      setResults(
        data.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })
      );
    });
  }, [location]);
  return (
    <>
      <h1 className="title">Trending today</h1>
      <ul className="list-movies">{results}</ul>
    </>
  );
};
export default Home;
