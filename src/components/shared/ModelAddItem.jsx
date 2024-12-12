import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import SpinnerLoader from './SpinnerLoader';
import { supabase } from '../../supabase';

const ModelAddItem = (data) => {
    const { isOpen, onOpen, onClose,categoryId ,isEdit,name,price,imageUrl, id, getProducts} = data;
    const [product, setProduct] = useState({
        name: "",
        price: "",
        imageUrl: ""
    })
    const [productImage, setProductImage] = useState();
    const [isLoading, setIsLoading] = useState(false)
    
useEffect(()=>{
    setProduct({
        name:name || "",
        price:price || "",
        imageUrl:imageUrl || ""
    })   
},[])
    

    const onFormSubmitHandler =async (e) => {
        e.preventDefault();
        setIsLoading(true)
        if(isEdit){
            try{
                const {error} = await supabase.from('products').update([{categoryId:categoryId,
                    name:product.name,
                    price:product.price,
                    imageUrl:product.imageUrl,}]).eq('id',id)
                if(!error){                    
                    toast.success("Item data updated")
                    setIsLoading(false)
                    getProducts()
                    onClose()
                }
            }catch(err){
                toast.error(err)
                setIsLoading(false)
                onClose()
            }
        }else{
            if (product.name == "" || product.price == "" || !productImage) {
                toast.error("Please add all the data")
                return
            }        
    
            console.log(productImage)
            const fileName = Date.now().toString();
            const fileExt = productImage.name.split(".").pop();
            const {data,error} = await supabase.storage.from('products')
                                    .upload(`${fileName}`,productImage,{contentType:productImage.type,upsert:false})            
            const imageUrl = `https://mrnoghoibmzdqtlhtwkk.supabase.co/storage/v1/object/public/${data?.fullPath}`
            

            if(error){
                setIsLoading(false);
                toast.error(err);
            }   else{
                const {data,error} =await supabase.from('products')
                                    .insert([{...product, imageUrl: imageUrl,categoryId:categoryId}])
                if(error){
                    setIsLoading(false);
                    toast.error(err);
                } else{
                    getProducts()
                    toast.success("Item Added")
                    setIsLoading(false)
                    onClose()                    
                }                   
            }                     

        }
        // console.log(imageRef)

    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent>
                <Box position='relative'>
                    <ModalHeader>{isEdit?'EDIT ITEM':'ADD NEW ITEM'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {isLoading && <SpinnerLoader />}
                        <form className='flex gap-8 flex-col'>
                            <FormControl isRequired={true}>
                                {/* <FormLabel>Item Name</FormLabel> */}
                                <FormLabel> NAME</FormLabel>
                                <Input type='text' placeholder='short description' value={product.name} onChange={(e) => setProduct(data => { return { ...data, name: e.target.value } })} />
                            </FormControl>
                            <FormControl isRequired={true}>
                                <FormLabel>PRICE</FormLabel>
                                <Input type='text' placeholder='Item price' value={product.price} onChange={(e) => setProduct(data => { return { ...data, price: e.target.value } })} />
                            </FormControl>
                            <FormControl isRequired={true}>
                                <FormLabel>IMAGE</FormLabel>
                                <Input type='file' accept='image/png,image/jpeg' className='pb-1' onChange={(e) => setProductImage(e.target.files[0])} />
                            </FormControl>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type='submit' onClick={onFormSubmitHandler}>
                            {isEdit?'UPDATE ITEM':'ADD NEW ITEM'}
                        </Button>
                        <Button variant='ghost' onClick={() => onClose()}>CANCEL</Button>
                    </ModalFooter>
                </Box>
            </ModalContent>
        </Modal>

    )
}

export default ModelAddItem