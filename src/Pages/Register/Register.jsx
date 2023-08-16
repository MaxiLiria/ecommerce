import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/Context";



const Register = () => {
    
    const {submit} = useContext(Context)
    const { register, handleSubmit, formState: {errors} } = useForm();
  return (
    <>
    <h1 className='text-2xl text-black font-black mb-4'>Register</h1>
  <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center'>  
  <label htmlFor='email'>Email:</label>
          <input
            className='border border-black rounded-lg w-80 h-10 mb-4 p-2'
            placeholder='maxiliriafullstack@gmail.com'
            type='email'
            id='email'
            {...register("email", {
            required: "Email is required", // Mensaje de error personalizado para campo requerido
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format", // Mensaje de error personalizado para patrón de email incorrecto
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>} 
          <label htmlFor='password'>Password:</label>
          <input
            className='border border-black rounded-lg w-80 h-10 mb-4 p-2'
            placeholder='Maxi123456@'
            type='password'
            id='password'
            {...register("password", {
            required: "Password is required", // Mensaje de error personalizado para campo requerido
            pattern: {
              value: /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
              message: "Invalid password format", // Mensaje de error personalizado para patrón de contraseña incorrecto
            },
          })}
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>} 
          <button className='border border-black rounded-lg w-80 h-10 bg-black text-white ' type='submit'>Register</button>
  </form>
    </>
  )
}

export default Register