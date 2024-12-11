import { collection, doc, documentId, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore"
// import { db } from "../../constants/firebase"
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { toast } from "react-toastify";



export const useGetCategoryName = (id) => {
    const [categoryName, setCategoryName] = useState("")
    // useEffect(() => {
    //     try {
    //         const getCategoryName = async () => {
    //             const docRef = doc(db, "category", id);
    //             const docSnap = await getDoc(docRef);
    //             // console.log(docSnap.data());
    //             setCategoryName(docSnap.data())
    //         };

    //         getCategoryName();
    //     } catch (error) {
    //         toast.error(error)
    //     }

    // }, [])
    return categoryName
}

// export const useGetProductData = (id) =>{
//     const [productData,setProductData] = useState({});
//     useEffect(()=>{
//         let unsubscribe;
//         try{
//             const getData = async() =>{
//                 const docRef = doc(db,"products",id);
//                 const queryData = query(docRef);
//                 unsubscribe = onSnapshot(queryData,(querySnapshot)=>{
//                     let productData = querySnapshot.docs.map((data)=>data.data())
//                     // let productData = querySnapshot.forEach(data=>console.log(data.data()))
//                     console.log(productData)
//                     // setProductData(querySnapshot)                
//                 })
//                 // const docSnap = await getDoc(docRef);
//             };
//             getData()
//         }catch(error){
//             toast.error(error)
//         }
//     },[])
//     return productData
// }
export const useGetProductData = (id) => {
    const [productData, setProductData] = useState({});
  
    // useEffect(() => {
    //   let unsubscribe;
    //   try {
    //     const docRef = doc(db, "products", id);
    //     unsubscribe = onSnapshot(docRef, (querySnapshot) => {
    //       setProductData(querySnapshot.data());
    //     });
    //   } catch (error) {
    //     toast.error(error);
    //   } finally {
    //     // Cleanup function (optional)
    //     unsubscribe && unsubscribe();
    //   }
  
    //   return unsubscribe;
    // }, [id]);
    // console.log(productData)
    return productData;
  };



