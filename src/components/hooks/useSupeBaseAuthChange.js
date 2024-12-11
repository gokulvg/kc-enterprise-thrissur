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

      return {session}
}

export const useGetCategoryData = (id ) =>{
  const [categoryData,setData] = useState();
  useEffect(()=>{
    getCategoryData(id)
  },[])

  const getCategoryData = async (id) =>{
    const {data,error} = await supabase.from('category').select('name').eq('id',id)
    setData(data)
  }
  return {categoryData}
}