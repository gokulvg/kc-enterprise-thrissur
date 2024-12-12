import React, { useEffect, useState } from 'react'
import { AddIcon, Box, Grid, GridItem, Heading, useDisclosure } from "@chakra-ui/icons"
import ModalComponent from './shared/ModalComponent'
import ItemCard from './shared/ItemCard'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { supabase } from '../supabase'
import { useSupeAuthStateChange } from './hooks/useSupeBaseAuthChange'


const Category = () => {

    const [categoryData, setCategoryData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [searchCategory,setSearchCategory] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {session} = useSupeAuthStateChange()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {        
        try{          
            getCategory()
        }catch(err){
            toast.error(err)
        }
        // return ( ) =>unsubscribe()
    }, [])

    const getCategory = async () => {  
        const {data,error} = await supabase.from('category').select('*') .order('id', { ascending: false });             
        if(data){
            setCategoryData(data)
            setSearchData(data)
        }
    }

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

            <Box className='flex justify-center items-center flex-col gap-6 bg-slate-50 pt-10'>
                <Heading size='lg' >Search by Category</Heading>

                <div className='flex flex-col md:flex-row gap-5 justify-between w-full px-6 items-center '>

                <Box className={`p-3  w-full md:w-fit text-center  rounded-lg cursor-pointer ${session?.user?.email ==='gokulvg47@gmail.com'&& 'bg-slate-300'}  ` }onClick={onOpen}>
         
                    {
                    session?.user?.email ==='gokulvg47@gmail.com' && <> <AddIcon boxSize={5} /> <span className='ml-3'>Add Category</span>
                    </>
            
                    }
                </Box>
                <input type='text' className='px-4 py-5 w-80' value={searchCategory} onChange={(e)=>setSearchCategory(e.target.value)} placeholder='Search by category' />
                </div>

                <Grid  gap="6" className='grid grid-cols-2 md:grid-cols-4 pb-6'>
                    {searchData?.map(data => <ItemCard isEdit={false} key={data.id} name={data.name} id={data.id} imageUrl={data.imageUrl} width='30%' height='30%' onClickHandler={onClickHandler} />)}
                    {searchData?.length==0 &&<>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                        <div className='w-72 h-80 bg-slate-300 rounded-md animate-pulse'></div>
                    
                    </> }

                </Grid>
            </Box >
            {isOpen && <ModalComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} getCategory={getCategory} />
            }
        </>
    )
}

export default Category 