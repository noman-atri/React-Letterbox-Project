interface MovieCardProps {
  // Define any props if needed in the future
  imageUrl: string;
  title: string;
  description: string;
}

function MovieCard({ imageUrl, title, description }: MovieCardProps) {
  const onClickFavorite = () => {
    console.log(`Favorited movie: ${title}`);
  };

  return (
    <div className="card" style={{ width: "18rem", border: "2px solid grey" }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onClickFavorite}
        >
          ❤️
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
