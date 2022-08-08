import React from 'react';
import PropTypes from 'prop-types';
//import playIcon from  '../assets/statics/play-icon.png'
//import plusIcon from  '../assets/statics/plus-icon.png'
import styles from '../assets/styles/components/MovieCard.module.css'
import { Link } from "react-router-dom";
import placeHolder from "../assets/statics/placeHolder.png";

const MovieCard = ( { movie }) => { 
  const imgURL= movie.poster_path ? "https://www.themoviedb.org/t/p/w220_and_h330_face"+ movie.poster_path 
  : placeHolder ;
  // const imgURL = "https://image.tmbd.org/t/p/w500" + movie.poster_path;
  //const movieDest= {...movie};
  
  return (
    <div className={styles.MovieCard}>
      <Link to={"/movies/"+ movie.id}>  
      <img width={230} height={345} className={styles.MovieImage} src={imgURL} alt={movie.title}  />
      </Link> 
      <p className={styles.MovieTitle}>{movie.title}</p>
    </div>
  )
    
  };

MovieCard.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,

}

export default MovieCard;