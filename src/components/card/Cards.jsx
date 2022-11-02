import React, { useEffect, useState, useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Cards.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import { ToastContainer, toast } from "react-toastify";
import yuh from "../../img/yuh.png";
import "react-toastify/dist/ReactToastify.css";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  const notifyWatched = () => toast("Successfully watched");
  const notifyWatchList = () => toast("Successfully Watch List");

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards_img"
              // src={`https://image.tmdb.org/t/p/original${
              //   movie ? movie.poster_path : ""
              // }`}
              src={
                movie
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : { yuh }
              }
            />
            <div className="cards_overlay">
              <div className="cards_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="cards_runtime">
                {/* {movie?movie.relase_date:""} */}
                <span className="card_rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
                {/* <div className="card_description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div> */}
                <div className="controls">
                  <button
                    className="btn watchList"
                    disabled={watchlistDisabled}
                    onClick={(e) => {
                      addMovieToWatchlist(movie);
                      e.preventDefault();
                      notifyWatchList();
                    }}
                  >
                    Add to Watchlist
                  </button>

                  <button
                    className="btn watched"
                    disabled={watchedDisabled}
                    onClick={(e) => {
                      addMovieToWatched(movie);
                      e.preventDefault();
                      notifyWatched();
                    }}
                  >
                    Add to Watched
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;
