import React from 'react';
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
    console.log(props);  

    const{ register, handleSubmit, formState:{errors}, setValue } = useForm({
      defaultValues: props.currentUser
    });


    setValue('name',props.currentUser.name);
    setValue('username',props.currentUser.username);

    const onSubmit= (data,e) =>{
      data.id=props.currentUser.id;
      props.updateUser(props.currentUser.id,data)  
      console.log(data)
        
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
      <button>Edit user</button>
    </form>
  );
};

export default EditUserForm;
