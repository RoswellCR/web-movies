import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import { useState,useEffect } from "react";
import { useQuery } from "../hooks/useQuery";
import { get } from "./Utils/httpClient";
import Spinner from "./Spinner";

export default function FavoriteList(){
    
  const [movies, setMovies]= useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search= query.get("search");

  useEffect(()=>{
    setIsLoading(true);
    const searchURL = search ? "/search/movie?query=" + search
    :"/discover/movie";
    get(searchURL)
    .then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    //console.log(movies);
    });
  },[search]);

  if(isLoading){
    return <Spinner/>;
  }
  
//   if(search===""){
//     return( <h1>Resultado de la busqueda</h1>
//   );    }

    else return (
        <Carousel >
             {movies.map(movie => 
                 <CarouselItem key={movie.id}   movie={movie} />
                )}     
        </Carousel>
    );
}