import React, { useEffect } from 'react'
// import useFirebaseAuthStateChange from '../hooks/useFirebaseAuthStateChange'
import ErrorPage from '../ErrorPage';
import Login from '../Login';
import Home from '../Home';
import { useSupeAuthStateChange } from '../hooks/useSupeBaseAuthChange';

const SecureRoute = ({children}) => {
const {session} = useSupeAuthStateChange()

  return <>

   {session? <div>    
    {children}</div>:<Home />}
  
  </>
  
}

export default SecureRoute