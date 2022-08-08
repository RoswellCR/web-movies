import Categories from "./Categories";
import FavoriteList from "./FavoriteList";
import Titulo from "./Titulo";
import MoviesGrid from "./MoviesGrid";
import { useQuery } from "../hooks/useQuery";
import {useDebounce} from "../hooks/useDebounce";

export const  LandingPage =()=> {
    
    const query= useQuery();
    const search=query.get("search");

    const debouncedSearch= useDebounce(search, 500);

    return (
        <div>
            {/* <Categories title="Mi Lista">
                <FavoriteList/>
              </Categories> */}

              {/* *Trabajar aqui* */}
              <Titulo title="Videos Guardados"/>
              <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
        </div>
        
    );
};