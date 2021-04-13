const MovieDetails = ({
  match: {
    params: { id },
  },
  history: { push },
  location: { state },
}) => {
  return (
    <div className="movie-details">
      <h2>Movie Details: {id}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque modi
        debitis fugit possimus delectus, molestiae doloribus, voluptates beatae
        quae accusamus praesentium repellendus porro a. Reprehenderit tenetur
        officiis id illum molestiae!
      </p>

      <button
        onClick={() =>
          push({
            pathname: '/MovieSearch',
            search: `?query=${state.query}`,
          })
        }
      >
        Go Back
      </button>
    </div>
  );
};

export default MovieDetails;
