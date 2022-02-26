import React from "react";
import { useEffect, useState } from "react";
import PhotoList from '../photos.json';
import './ImageContainer.css';

const ImageContainer = () => {

    const [selectedList, setSelectedList] = useState([]);

    useEffect(() => {
        console.log(selectedList);
    }, [selectedList]);

    const selectImage = async (element) => {
        element.classList.add('selected')
        setSelectedList([...selectedList, Number(element.alt)])
    }

    const unSelectImage = (element) => {
        element.classList.remove('selected')
        setSelectedList(selectedList.filter(each => each !== Number(element.alt)))
    }

    const toggleSelect = (e) => {
        const element = e.target;
        console.log(element)
        if (element.classList.contains('selected')) {
            unSelectImage(element)
        }
        else {
            selectImage(element)
        }
    }

    return (
        <div className="grid-container">
            {
                PhotoList.map((photo) =>
                    <div
                        className="image-wrapper"
                        style={{ position: "relative" }}
                    >
                        <span
                            className="image-count"
                            style={{
                                position: "absolute",
                                padding: "5px",
                                color: "red",
                                fontWeight: "bolder",
                                zIndex: "2"
                            }}
                        >
                            {
                                (selectedList.indexOf(photo.id) !== -1) ? selectedList.indexOf(photo.id) + 1 : null
                            }
                        </span>
                        <img
                            className="grid-image"
                            key={photo.id}
                            src={photo.url}
                            alt={photo.id}
                            height='193'
                            onClick={toggleSelect}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default ImageContainer;