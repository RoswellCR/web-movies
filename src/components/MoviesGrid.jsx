import React, { useEffect } from 'react';
import styles from "../assets/styles/components/MoviesGrid.module.css";
import MovieCard from './MovieCard';
import { useState } from 'react';
import { get } from './Utils/httpClient';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import Empty from './Empty';

export default function  MoviesGrid ({search}) {
   
    const [movies, setMovies] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    
    useEffect(()=>{
        setisLoading(true);
        const searchURL= search ? "/search/movie?query=" + search + "&page=" + page
        : "/discover/movie?page="+ page;
        get(searchURL).then((data)=>{
            setMovies((prevMovies)=> prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages); 
            setisLoading(false);
        })
    },[search, page] );

    if(!isLoading &&  movies.length===0){
        return <Empty/>;
    }
    
   return( 
        <InfiniteScroll 
        dataLength={movies.length} //This is important field to render the next data
        hasMore={hasMore}
        next={()=>setPage((prevPage)=> prevPage + 1) } //Actualizo estado a partir del estado anterior a traves de funcion, 
                                                     //no se debe utilizar el estado pq este se actualiza de 
        loader={<Spinner/>}                               //manera asincrona     
           
        >
            <section className={styles.MoviesGrid} >
                {movies.map(movie => 
                            <MovieCard key={movie.id}   movie={movie} />
                        )};
            </section>
        </InfiniteScroll>
            
    );
};
