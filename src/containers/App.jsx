import React, { useEffect, useState  } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';
//import movies from '../components/JSONfiles/movies.json';
import MoviesGrid from '../components/MoviesGrid';
import MovieCard from '../components/MovieCard';
import Titulo from '../components/Titulo';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useQuery } from '../hooks/useQuery';
import Contacto from '../components/Contacto';
import MovieDetails  from '../components/MovieDetails'
import ErrorNotFound from '../components/ErrorNotFound';
import { get } from '../components/Utils/httpClient';
import Spinner from '../components/Spinner';
import FavoriteList from '../components/FavoriteList';
import { LandingPage } from '../components/LandingPage';
//import About from '../components/Extra/About'; 
// Ver API en https://www.themoviedb.org/settings/api
//const API = 'http://localhost:3000/initialState/';
 

const App = () => {
  //const initialState = useInitialState(API);
  
  return (
    <div className="App">
      
     
        <Header />
        <Search />

      
         <Switch>
          
          <Route exact path="/contacto">
            <Contacto />
          </Route>
          
          <Route exact path="/movies/:movieID">
            <MovieDetails />
          </Route>
          
          <Route exact path="/">
              <LandingPage/>
          </Route>
          
          <Route path="/">
            <ErrorNotFound />
          </Route>

        </Switch>
      

       <Footer />
    </div>
  );
};

export default App;


// {/*
//           <Categories title="Tendencias Favoritas">
//         <Carousel>
//           {initialState.trends.map( (item) => (
            
//             <CarouselItem key={item.id} {...item} />
//           )) }
//         </Carousel>
//       </Categories>

//       <Categories title="Videos Guardados">
//         <Carousel>
//           {initialState.originals.map( (item) => (
//             <CarouselItem key={ item.id} {...item}/>
//           ) )}
          
//         </Carousel>
//       </Categories>
//         */}