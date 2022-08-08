import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from  '../assets/statics/play-icon.png'
import plusIcon from  '../assets/statics/plus-icon.png'



const CarouselItem = ( { movie }) => { 
  const imgURL= "https://www.themoviedb.org/t/p/w220_and_h330_face"+movie.poster_path;
  //const imgURL = "https://image.tmbd.org/t/p/w300"+ movie.poster_path;
  const movieDest= {...movie};
  
  return (
    <div className="carousel-item">
    <img className="carousel-item__img" src={imgURL} alt={movie.title}  />
    <div className="carousel-item__details">
      <div>
        <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
        <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/> 
      </div>
      <p className="carousel-item__details--title">{movie.title}</p>
      <p className="carousel-item__details--subtitle">
         {`${movieDest.release_date}   ${movieDest.vote_average} `} 
      </p>

    </div>
  </div>
  )
    
  };

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,

}

export default CarouselItem;