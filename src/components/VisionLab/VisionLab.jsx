import React, { useState, useContext } from 'react';
// import ReactDOM from "react-dom/client";
import axios from 'axios';

import NavBar from '../NavBar/NavBar';
import './VisionLab.css';
import AppContext from '../../appcontext';

const VisionLab = () => {
    const { originalImage, setOriginalImage, resultImage, setResultImage } = useContext(AppContext);

    const uploadImage = (e) => {
        // setOriginalImage(URL.createObjectURL(e.target.files[0]))
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0]) //convert to base64 ?
        reader.onload = () => {
            console.log(reader.result)
            setOriginalImage(reader.result)
        }
    }

    const applyBlur = (e) => {
        let data = {
            "imageBase64": originalImage,
            "kernelSize": e.target.value
        }
        axios.post('http://0.0.0.0:8006/visionlab/', data)
            .then(response => {
                setResultImage("data:image/jpg;base64," +response.data.resultImage)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <NavBar />
            <div className='visionlab-container'>
                <div className="images-container">
                    <div className="images-child">
                        <h1 className='images-child-title'>Original Image</h1>
                        <div className="left">
                            <img className='images-child-image' src={originalImage} alt="" />
                        </div>
                    </div>
                    <div className="images-child">
                        <h1 className='images-child-title'>Result Image</h1>
                        <div className="right">
                            <img className='images-child-image' src={resultImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className='vision-lab-form'>
                    <input type="file" onChange={uploadImage} />
                    <label >Median Blur Kernel Size</label>
                    <input
                        type="range"
                        id="vol"
                        name="vol"
                        min="1"
                        max="50"
                        step="2"
                        onChange={applyBlur}
                    />
                </div>
            </div>
        </>
    );
};

export default VisionLab;