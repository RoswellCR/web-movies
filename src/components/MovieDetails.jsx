import React from 'react';
import { useState, useEffect } from 'react';
//import movie from './JSONfiles/movie.json';
import styles from "../assets/styles/components/MovieDetails.module.css";
import { useParams } from 'react-router';
import { get } from './Utils/httpClient';
import Spinner from './Spinner';
import placeHolder from "../assets/statics/placeHolder.png"

const MovieDetails=()=>{
    
    //const imgURL = "https://image.tmbd.org/t/p/w500" + movie.poster_path;
    
    const {movieID} = useParams();
    const [movie, setMovie]= useState(null);
    const [isLoading, setIsLoading] = useState(true);

        
    useEffect(() => {
        setIsLoading(true);
        get("/movie/"+ movieID)
        .then((data)=>{
            setMovie(data);
            setIsLoading(false);
        })
        }, [movieID]);

    if(isLoading){
        return <Spinner/>;
    }
    
     if(!movie){
        return null;
    }
    
    const imgURL= movie.poster_path ? "https://www.themoviedb.org/t/p/w220_and_h330_face"+ movie.poster_path 
    : placeHolder;
    return(
        <div className={styles.MovieDetails}>
            <img className={styles.col +" "+ styles.MovieImage} src={imgURL} alt={movie.title} />
            <div className={styles.col}>
                <p className={styles.MovieLetter +" "+ styles.FirstItem}><strong>Título: {movie.title}</strong></p>
                <p className={styles.MovieLetter}>
                    {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p className={styles.MovieLetter}>Reseña: {movie.overview}</p>
            </div>
        </div>
    );
}

export default MovieDetails;