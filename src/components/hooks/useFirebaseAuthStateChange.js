import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react"
import { auth, db } from "../../constants/firebase";
import { doc, getDoc } from "firebase/firestore";


const useFirebaseAuthStateChange = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role,setRole] = useState("")

    onAuthStateChanged(auth, async user => {
        
        if (user && !isLoggedIn) {
            console.log(isLoggedIn)
            const docRef = doc(db,"users",user.uid);
            const docSnap = await getDoc(docRef)            
            if(docSnap.exists){
                const roleData = await docSnap.data().role;                
                if(roleData){
                    if(localStorage.getItem("isLogged")){
                        console.log("islogged set")
                        localStorage.setItem("isLogged",true)
                        setRole(roleData)
                        setIsLoggedIn(true)   
                    }
                }
                // console.log(roleData)
            }

        } else {
            if (isLoggedIn && !user) {
                console.log("logout")
                localStorage.setItem("isLogged",false)
                
                setIsLoggedIn(false)
                setRole(null)
            }
        }
        // console.log(isLoggedIn)
    })
    console.log(isLoggedIn)
    return [isLoggedIn, setIsLoggedIn,role]
}

export default useFirebaseAuthStateChange

export const useUserRole = () => {
    onAuthStateChanged(auth, async user => {
        console.log("third")
        if (user) {

            console.log(user)
            const docRef = doc(db,"users",user.uid);
            const docSnap = await getDoc(docRef)
            console.log(docSnap.data().role)
        }
    })

    // const getCategoryName = async () => {
    //     const docRef = doc(db, "category", id);
    //     const docSnap = await getDoc(docRef);
    //     // console.log(docSnap.data());
    //     setCategoryName(docSnap.data())
    // };
}