function StarRating({ rating }) {
  const stars = Array.from({ length: rating }, (_, index) => (
    <img
      alt="Star"
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
  ));
  return <div className="star-wrapper">{stars}</div>;
}

export default StarRating;
