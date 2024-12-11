import { useEffect, useState } from "react"
import { supabase } from "../../supabase";

export const useSupeAuthStateChange = ( ) =>{
    const [session,setSession ] =useState(null);

    useEffect(() => {
        console.log("first")
        supabase.auth.getSession().then(({ data: { session } }) => {
            // console.log(session)
          setSession(session);
        });
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            // console.log(session)
          setSession(session);
        });
        return () => subscription.unsubscribe();
      }, []);
      	// console.log(session)
      return {session}
}