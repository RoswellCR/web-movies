import React,{useState} from 'react';
import {useForm} from 'react-hook-form';

const FormHook = () => { 

    const{ register, handleSubmit, formState:{errors} } = useForm();

    const{ dato, setDato } = useState(); 

    const onSubmit= (data, e) => { 
        setDato(dato)
        console.log(data)
        e.target.reset()
    }

    return(
    
        <div>
            <h1>FormularioHook</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <input 
                name="titulo"
                className="form-control my-2"
                placeholder="ingrese titulo"
                {   ...register("titulo",{
                        required:{
                            value: true,
                            message: 'titulo requerido'
                        },
                        maxLength:{
                            value:8,
                            message: 'No mas de 10 caracteres'
                        },
                        minLength: { 
                            value:2,
                            message: 'Debes poner titulo completo'
                        },
                        pattern: {
                            value:/^[A-Za-z]+$/i,
                            message:'ingrese solo letras'}
                    })
                }
                />
                <span className="text-white text-small d-block mb-2">
                   {errors?.titulo && errors.titulo.message }
                </span>
                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    ) 
}

export default FormHook;