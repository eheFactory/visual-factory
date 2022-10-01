import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import axios from 'axios';

import Sketch from 'react-p5';
import NavBar from '../NavBar/NavBar';
import './SurrealArtist.css';

var 

const ControllerForm = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        // ???
    }

    function loadImage(e) {
        let imgFile = e.target.files[0]
        setImageFile(URL.createObjectURL(imgFile));
        var reader = new FileReader();
        reader.onloadend = function () {
            let base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

            setImageBase64(base64String)
        }
        reader.readAsDataURL(imgFile)
        ReactDOM.createRoot(document.getElementById('sketcher')).render()
    }

    function drawImage() {
        let fourierUrl = "http://0.0.0.0:8006/img/fourier/"
        console.log(" image  base64 : ", imageBase64)
        console.log(" image  file : ", imageFile)
        console.log(" num of input samples : ", numOfInputSamples)
        console.log(" num of circles : ", numOfCircles)
        const data = {
            "imageBase64": imageBase64,
            "numOfInputSamples": numOfInputSamples,
            "numOfCircles": numOfCircles
        }
        
        axios(fourierUrl,{
                method: 'post',
                data :data
            }
        )
    }

    return (
        <>
            <div className='header'>
                <h1>Surreal Engine</h1>
            </div>

            <div className='mainimg'>
                <img src="render.svg" alt="original rendering image" />
            </div>

            <div id='sketcher'>

            </div>

            <div id='footer' className='footer'>
                <p>Powered by eheFactory</p>
            </div>
        </>

    )
}

const MsFourier = (props) => {

    return (
        <>
            <NavBar />
            <ControllerForm />
            <div className='float-container'>
                <div className="float-child-left">
                    <img className='mainimg' src="" />
                </div>

                <div className="float-child-right">
                    <div id='sketcher'></div>
                </div>
            </div>
        </>
    );
};

export default MsFourier;