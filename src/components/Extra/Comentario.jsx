import React,{Fragment} from  "react";

const Comentario = ({sujeto}) =>{ 
    
    return(
        
        <Fragment>
            <h1 className="container">Comentarios</h1>
            <div className="media">
                <img src={sujeto.urlImagen} alt="avatar" className="mr-3"/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
    );
}

export default Comentario;