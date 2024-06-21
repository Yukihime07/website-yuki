import { v4 as uuidv4 } from "uuid";
import { gallery } from "../data";
import './Gallery.css';
import { useState } from "react";
import Modal from "../components/Modal";

export default function Gallery(){
    const [selectedImage, setSelectedImage] =  useState({img:null, name: null});


    const handleSelectImg = (img, name) => {
        setSelectedImage({img, name});
    };

    const closeModal = () =>{
        setSelectedImage({img: null, name: null});
    };
    return (
        <>
            <h1>Gallery</h1>
            
            <div className="gallery-container">
            
                {gallery.map((galleryItem) => 
                    (
                    <div key={uuidv4()} className="gallery-item">
                    <img src={galleryItem.img} onClick={()=>handleSelectImg(galleryItem.img, galleryItem.name)} alt={galleryItem.name}/>
                    <p>{galleryItem.name}</p>
                </div>
                    )
                )}
                <Modal show={selectedImage.img !== null} imageUrl={selectedImage.img} imageName={selectedImage.name}  onClose={closeModal}/>
            </div>
        </>
    )
}