import React, { useEffect, useState } from 'react'
import { AddIcon, Box, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/icons"
import ModalComponent from './shared/ModalComponent'
import ItemCard from './shared/ItemCard'
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore'
// import { db } from '../constants/firebase'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { supabase } from '../supabase'
// import useFirebaseAuthStateChange from './hooks/useFirebaseAuthStateChange'

const Category = () => {

    const [categoryData, setCategoryData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [searchCategory,setSearchCategory] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [isLoggedIn, setIsLoggedIn,role] = useFirebaseAuthStateChange()
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        // let unsubscribe;
        try{
            const getCategory = async () => {  
                const {data,error} = await supabase.from('category').select('*');             
                if(data){
                    setCategoryData(data)
                    setSearchData(data)
                }
            }
            getCategory()
        }catch(err){
            toast.error(err)
        }
        // return ( ) =>unsubscribe()
    }, [])

   useEffect(()=>{  
        const data =  categoryData?.filter(data=>data?.name?.toLowerCase().includes(searchCategory.toLocaleLowerCase()))    
        setSearchData(data)  
   },[searchCategory])

    const onClickHandler = (props) => {      
        const pathName = location.pathname        
        if(!pathName.includes("category")){
            navigate(`category/${props?.id}`)
            return
        }
        navigate(`${props?.id}`)

    }

    return (
        <>

            <Box className='flex justify-center items-center flex-col gap-6'>
                <Heading size='lg' >Search by Category</Heading>

                <div className='flex justify-between w-full px-6 items-center '>

                {/* <Box className={`p-3  w-fit rounded-lg cursor-pointer ${role ==='admin'&& 'bg-slate-300'}  ` }onClick={onOpen}> */}
                <Box className={`p-3  w-fit rounded-lg cursor-pointer  ` }onClick={onOpen}>
                    {
                    // role==="admin" && <> <AddIcon boxSize={5} /> <span className='ml-3'>Add Category</span>
                    // </>
                    'Add'
                    }
                </Box>
                <input type='text' className='px-4 py-5 w-80' value={searchCategory} onChange={(e)=>setSearchCategory(e.target.value)} placeholder='Search by category' />
                </div>

                <Grid templateColumns="repeat(4, 1fr)" gap="6">
                    {searchData?.map(data => <ItemCard isEdit={false} key={data.id} name={data.name} id={data.id} imageUrl={data.imageUrl} width='30%' height='30%' onClickHandler={onClickHandler} />)}
                    {searchData?.length==0 &&<>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                    
                    </> }

                </Grid>
            </Box >
            {isOpen && <ModalComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            }
        </>
    )
}

export default Category 