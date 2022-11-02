import React, { useEffect, useState } from "react";
import Cards from "../card/Cards";
import "./MovieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en&page=2`
      ),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) =>
        setMovieList((oldArr) => [
          ...oldArr,
          ...data1.results,
          ...data2.results,
        ])
      );
    // fetch(
    //   `https://api.themoviedb.org/3/movie/${
    //     type ? type : "popular"
    //   }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=2`
    // )
    //   .then((res) => res.json())
    //   .then((data) => setMovieList(data.results));
  };

  const newArr = movieList.splice(0, 24);
  // .filter(
  //   (prop) =>
  //     prop.original_language !== "ja" &&
  //     prop.original_language !== "ko" &&
  //     prop.original_language !== "de"
  // );

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {newArr.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
      <div onClick={() => console.log(newArr)}>Test</div>
    </div>
  );
};

export default MovieList;
