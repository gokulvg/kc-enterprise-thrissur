import { supabase } from "./supabase"

export const signInSupabase = async(email,password ) =>{
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      return {data,error}
}

export const signOutSupabase = async( ) =>{
    let {data,error} = await supabase.auth.signOut();

    console.log(data,error)
}

