import styles from "./MovieCard.module.scss";

export const MovieCard = ({ id, img, title, rating, year }) => {

  const goToMovie = () => {
    window.location = "/movie/" + id;
  }

  return (
    <div
      className={styles.MovieCard}
      onClick={goToMovie}
    >
      <div className={styles.MovieCard__image}>
        <img src={img} alt="Movie Poster"/>
      </div>
      <div className={styles.MovieCard__title}>{title}</div>
      <div className={styles.MovieCard__additional}>
        <p className={styles.MovieCard__rating}>{rating}</p>
        <p className={styles.MovieCard__year}>{year}</p>
      </div>
    </div>
  )
}

export default MovieCard;