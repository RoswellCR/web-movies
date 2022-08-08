import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
    
    const{ register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit= (data,e) =>{
        console.log(data)
        props.addUser(data)
        e.target.reset()
        
    }
    return (
    
    <form onSubmit={handleSubmit(onSubmit)} action="">
      <label htmlFor=""> Name </label>
      <input type="text" name="name" 
        {   ...register("name",{
            required:{
                value: true,
                message: 'nombre requerido'
            },
             })
         }
        />
        <span className="text-white text-small d-block mb-2">
        {errors?.name && errors.name.message }
        </span>
        
      <label htmlFor="">Username</label>
      <input type="text" name="username" 
            {   ...register("username",{
                required:{
                    value: true,
                    message: 'username requerido'
                },
                 })
             }
      />
      <span className="text-white text-small d-block mb-2">
        {errors?.username && errors.username.message }
        </span>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
