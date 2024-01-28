import { Link } from "react-router-dom";
import DefaultImg from "../assets/NoImage.png";

const ItemMovie = ({ id, title, type, year, poster }) => {
  let image = poster === "N/A" ? DefaultImg : poster;
  return (
    <Link to={`/movie/${id}`} style={{color: 'inherit', textDecoration: 'inherit'}}>
      <article>
        <div
          className="item-movie"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="info">
            <h4> {title} </h4>
            <p className="row-info">
              <span>{type}</span>
              <span>{year}</span>
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ItemMovie;
