import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetCategoryName } from './hooks/useGetData'
import { Box, Grid, Heading, useDisclosure } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import ModelAddItem from './shared/ModelAddItem'
import {  getDoc, getDocs, onSnapshot } from 'firebase/firestore'
// import { db } from '../constants/firebase'
import { collection, query, where } from "firebase/firestore";
import ItemCard from './shared/ItemCard'
import { data } from 'autoprefixer'
import { toast } from 'react-toastify'
import { supabase } from '../supabase'
// import useFirebaseAuthStateChange from './hooks/useFirebaseAuthStateChange'

const ItemList = () => {
    const { categoryId } = useParams()
    // const categoryData = useGetCategoryName(categoryId)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [products,setProducts] = useState([])
    const [searchData, setSearchData] = useState([])
    const [searchItem,setSearchItem] = useState("")
    const navigate = useNavigate()
    // const [isLoggedIn, setIsLoggedIn,role] = useFirebaseAuthStateChange()

    useEffect(()=>{
    //     let unsubscribe;
        try{        
        getProducts()

        }catch(err){
            toast.error(err)
        } 
    },[])

    const getProducts =async ( ) =>{  
        const {data,error} = await supabase.from('products').select().eq('categoryId',categoryId);             
        if(data){
            console.log(data)
            setProducts(data)
            setSearchData(data)
        }
    }

    useEffect(()=>{  
        const data =  products?.filter(data=>data?.name?.toLowerCase().includes(searchItem.toLocaleLowerCase()))    
        setSearchData(data)  
   },[searchItem])


    const onProductClickHandler = (props ) =>{
        console.log(props)
        navigate(`product/${props.id}`,{state:{id:props.id,name:props.name,imageUrl:props.imageUrl,price:props.price,catId:categoryId}})

    }

    
    return (
        <Box className='flex flex-col justify-center items-center gap-5'>
            {/* <Heading size='lg' >{categoryData?.name}</Heading>       */}
            <Heading size='lg' >Name</Heading>      
              <div className='flex justify-between w-full px-6 items-center '>
            {/* <Box className={`p-3  w-fit rounded-lg cursor-pointer ${role ==='admin'&& 'bg-slate-300'}  ` }onClick={onOpen}>
                {role==="admin" && <> <AddIcon boxSize={5} /> <span className='ml-3'>Add Item</span></>}
            </Box> */}
            <AddIcon boxSize={5} /> <span className='ml-3' onClick={onOpen}>Add Item</span>
            
            <input type='text' className='px-4 py-5 w-80' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder='Search by item' />
            </div>
            {/* <Box className='flex justify-center items-center flex-wrap gap-10'> */}
            <Grid templateColumns="repeat(4, 1fr)" gap="6">

                {searchData?.map(data=>{
                    return <ItemCard width='25%' height='25%' key = {data.id} imageUrl={data.imageUrl}
                    id={data.id} categoryId={data.categoryId} name={data.name} price={data.price} onClickHandler={onProductClickHandler}/>
                })}
                   {searchData?.length==0 &&<>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                    
                    </> }
                </Grid>
            {/* </Box> */}

            {isOpen && <ModelAddItem isOpen={isOpen} onOpen={onOpen} onClose={onClose} categoryId={categoryId}/>}
        </Box>
    )
}

export default ItemList