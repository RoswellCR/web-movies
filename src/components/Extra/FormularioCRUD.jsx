import React, { useState, Fragment } from "react";
import { useForm } from "react-hook-form";

const FormularioCRUD = () => {
  const [entrada, setEntrada] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data,e) => {
    setEntrada([...entrada, data]);
    e.target.reset();
  };

  return (
    <div className="container mt-3">
      <h1>Fill this form out</h1>
      <form className="row" action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Pon tu nombre mama webo"
            type="text"
            name="nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "Nombre requerido",
              },
              patern: {
                value: /^[A-Za-z]+$/i,
                message: "ingrese solo letras",
              },
            })}
          />

          {errors.nombre && (
            <span className="text-white text-small d-block mb-2">
              {errors.nombre.message}
            </span>
          )}
        </div>
        <div className="col-md-3">
          <input
            className="form-control"
            placeholder="Pon tu apellido anormal"
            type="text"
            name="apellidos"
            {...register("apellidos", {
              required: {
                value: true,
                message: "Apellido requerido",
              },
              patern: {
                value: /^[A-Za-z]+$/i,
                message: "ingrese solo letras",
              },
            })}
          />
          {errors.apellidos && (
            <span className="text-white text-small d-block mb-2">
              {errors.apellidos.message}
            </span>
          )}
        </div>
        <div className="col-md-3">
          <button className="btn btn-primary" type="submit">
            Envialo mijo
          </button>
        </div>
      </form>
      <ul className="mt-2">
                {
                    entrada.map((item, index) =>
                        <li key={index}>
                            {item.nombre} - {item.apellidos}
                        </li>
                    )
                }
            </ul>
    </div>
  );
};

export default FormularioCRUD;
