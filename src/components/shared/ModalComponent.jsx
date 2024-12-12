import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Box,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Timestamp } from 'firebase/firestore/lite';
import { db, storage } from '../../constants/firebase';
import {
    getDownloadURL,
    ref,
    uploadBytes,
} from "firebase/storage";
import { toast } from 'react-toastify';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';

import SpinnerLoader from './SpinnerLoader';
import { supabase } from '../../supabase';



const ModalComponent = (data) => {
    const { isOpen, onOpen, onClose,getCategory } = data;
    const [category, setCategory] = useState({
        name: "",

    })
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)
    const types = ["image/png", "image/jpeg"];

    const onImageChangeHandler = (e) => {
        let selectedImage = e.target.files[0];
        console.log(selectedImage.type)
        if (selectedImage && types.includes(selectedImage.type)) {
            setImage(selectedImage)
        }
    }

    const onFormSubmitHandler = async (e) => {
        e.preventDefault();
        if (category.name == "" || image == "") {
            toast.error("Please enter Category name and Image");
            return
        }
        setLoading(true)
        try{
            const fileName = Date.now().toString();
            const fileExt = image.name.split(".").pop();
            console.log(fileName)
            const {data,error} = await supabase.storage.from('category')
                                    .upload(`${fileName}`,image,{contentType:image.type,upsert:false})
            console.log(data)
            const imageUrl = `https://mrnoghoibmzdqtlhtwkk.supabase.co/storage/v1/object/public/${data?.fullPath}`
            if(error){
                console.log(error)
                setLoading(false)
            }else{
                const {data,error} =await supabase.from('category')
                                    .insert([{name:category.name,imageUrl:imageUrl}])
                if(!error){
                    setLoading(false)
                    toast.success("Category Added")
                    // getCategory()
                    onClose()
                }                    
            }                    

        }catch(err){
            toast.error(err)
        }


    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <Box position="relative">
                    <ModalHeader>New Category</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {loading && <SpinnerLoader />}
                        <form onSubmit={onFormSubmitHandler}>
                            <FormControl isRequired={true}>
                                <FormLabel>Category Name</FormLabel>
                                <Input type='text' placeholder='eg:Bed' value={category.name} onChange={e => setCategory(cat => {
                                    return {
                                        ...cat, name: e.target.value
                                    }
                                })} />
                            </FormControl>
                            <FormControl isRequired={true}>
                                <FormLabel>Category Photo</FormLabel>
                                <Input type='file' accept='image/png,image/jpeg' className='pb-1' onChange={onImageChangeHandler} />
                            </FormControl>
                        </form>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} type='submit' onClick={onFormSubmitHandler}>
                            Add New Category
                        </Button>
                        <Button variant='ghost' onClick={() => onClose()}>Cancel</Button>
                    </ModalFooter>
                </Box>
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent