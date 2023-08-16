import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Context } from '../../Context/Context';
import { Link } from 'react-router-dom';



const SignIn = () => {
  const {onSubmit, loginError} = useContext(Context)
  const { register, handleSubmit } = useForm();
  

 
  return (
    <>
    <h1 className='text-2xl text-black font-black mb-4'>Login</h1>
  <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>  
  <label htmlFor='email'>Email:</label>
          <input
            className='border border-black rounded-lg w-80 h-10 mb-4 p-2'
            placeholder='maxiliriafullstack@gmail.com'
            type='email'
            id='email'
            {...register('email', { required: true })}
          />
          <label htmlFor='password'>Password:</label>
          <input
            className='border border-black rounded-lg w-80 h-10 mb-4 p-2'
            placeholder='Maxi123456@'
            type='password'
            id='password'
            {...register('password', { required: true })}
          />
          <button className='border border-black rounded-lg w-80 h-10 bg-black text-white ' type='submit'>Login</button>
  </form>
  <p className='mt-4'>
    <span>If you don`t have a registered account, go to <Link to='/register' className='text-blue-500'>Register</Link>.</span>
  </p>
  {loginError ? <p style={{ color: "red" }}>{loginError}</p> : null}
    </>
  )
}

export default SignIn