import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
// import { db, storage } from '../../constants/firebase';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import SpinnerLoader from './SpinnerLoader';
import { supabase } from '../../supabase';

const ModelAddItem = (data) => {
    const { isOpen, onOpen, onClose,categoryId ,isEdit,name,price,imageUrl, id} = data;
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
                console.log("started")
                const docRef = doc(db,"products",id)
                console.log(categoryId)
            //    const editProduct= await setDoc(docRef,{
            //        categoryId:categoryId,
            //         name:product.name,
            //         price:product.price,
            //         imageUrl:product.imageUrl,
            //     })
                console.log(editProduct)
                toast.success("product data updated")
                setIsLoading(false)
                onClose()
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
         
            // const imageRef = ref(storage, `products/${productImage.name}`);
    
            // const uploadProduct = 
            // uploadBytes(imageRef, productImage).then(data => getDownloadURL(data.ref)).then(async url => {
            //     const docRef = await addDoc(collection(db, "products"), { ...product, imageUrl: url,categoryId:categoryId })
            //     console.log("document uploade ", docRef.id);
            //     toast.success("Product Added")
            //     setIsLoading(false)
            //     onClose()
            //     setProduct({
            //         name: "",
            //         price: "",
            //         imageUrl: ""
            //     })
            // }).catch(err => {
            //     toast.error(err);
            //     setIsLoading(false)
            // })
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
                    toast.success("Product Added")
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
                    <ModalHeader>{isEdit?'Edit Product':'Add New Product'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    {isLoading && <SpinnerLoader />}
                        <form className='flex gap-8 flex-col'>
                            <FormControl isRequired={true}>
                                <FormLabel>Product Name</FormLabel>
                                <Input type='text' placeholder='short description' value={product.name} onChange={(e) => setProduct(data => { return { ...data, name: e.target.value } })} />
                            </FormControl>
                            <FormControl isRequired={true}>
                                <FormLabel>Price</FormLabel>
                                <Input type='text' placeholder='product price' value={product.price} onChange={(e) => setProduct(data => { return { ...data, price: e.target.value } })} />
                            </FormControl>
                            <FormControl isRequired={true}>
                                <FormLabel>Product Image</FormLabel>
                                <Input type='file' accept='image/png,image/jpeg' className='pb-1' onChange={(e) => setProductImage(e.target.files[0])} />
                            </FormControl>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type='submit' onClick={onFormSubmitHandler}>
                            {isEdit?'Update':'Add New Product'}
                        </Button>
                        <Button variant='ghost' onClick={() => onClose()}>Cancel</Button>
                    </ModalFooter>
                </Box>
            </ModalContent>
        </Modal>

    )
}

export default ModelAddItem