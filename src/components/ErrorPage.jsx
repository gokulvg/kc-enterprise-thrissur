import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
  return (<div className='flex flex-col justify-center text-xl  text-red-400 content-center flex-wrap w-screen h-screen'>
  <h2>OOPS !!!!!!</h2>
  <h3>Something Happened</h3>
  <h3>{error?.statusText || error?.message}</h3>  
  </div>
  )
}

export default ErrorPage