
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import DefaultImg from "../assets/NoImage.png"

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useFetch(`?i=${id}`);
  console.log(data);
  const { Poster, Title, Year, Country, Director, Released, Runtime } = data;
  let image = Poster === "N/A" ? DefaultImg : Poster;


  return (
    <>
      {!isLoading ? (
        <div className="single-movie">
          <img src={image} alt={Title} />
          <div className="single-infor">
            <h2> {Title} </h2>
            <p>
              Country<strong>{Country}</strong>
            </p>
            <p>
              Director<strong>{Director}</strong>
            </p>
            <p>
              Released<strong>{Released}</strong>
            </p>
            <p>
              Runtime<strong>{Runtime}</strong>
            </p>
            <p>
              Year<strong>{Year}</strong>
            </p>
          </div>
        </div>
      ) :
      <div className="loading">
      </div>}
    </>
  );
};

export default SingleMovie;
