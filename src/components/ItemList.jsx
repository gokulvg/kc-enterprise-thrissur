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
import { useGetCategoryData, useSupeAuthStateChange } from './hooks/useSupeBaseAuthChange'

const ItemList = () => {
    const { categoryId } = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [products,setProducts] = useState([])
    const [searchData, setSearchData] = useState([])
    const [searchItem,setSearchItem] = useState("")
    const navigate = useNavigate()  
    const {session} = useSupeAuthStateChange()
    const {categoryData}=useGetCategoryData(categoryId)
    
    useEffect(()=>{
        try{        
        getProducts()

        }catch(err){
            toast.error(err)
        } 
    },[])

    const getProducts =async ( ) =>{  
        const {data,error} = await supabase.from('products').select().eq('categoryId',categoryId);             
        if(data){          
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
            {categoryData && <Heading size='lg' >{categoryData[0]?.name}</Heading>  }          
              <div className='flex flex-col md:flex-row justify-between w-full gap-5 px-6 items-center '>
            <Box className={`p-3  w-full md:w-fit  text-center rounded-lg cursor-pointer ${session?.user?.email ==='gokulvg47@gmail.com'&& 'bg-slate-300'}  ` }onClick={onOpen}>
                {session?.user?.email ==='gokulvg47@gmail.com' && <> <AddIcon boxSize={5} /> <span className='ml-3'>Add Item</span></>}
            </Box>           
            
            <input type='text' className='px-4 py-5 w-80' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder='Search by item' />
            </div>
            <Box className='flex justify-center items-center flex-wrap gap-10'>
            <Grid className='grid grid-cols-2 md:grid-cols-4 pb-6' gap="6">

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
            </Box>

            {isOpen && <ModelAddItem isOpen={isOpen} onOpen={onOpen} onClose={onClose} categoryId={categoryId}/>}
        </Box>
    )
}

export default ItemList