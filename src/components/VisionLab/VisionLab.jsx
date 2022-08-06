import React, { useState, useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";
// import ReactDOM from "react-dom/client";
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import './VisionLab.css';
import AppContext from '../../appcontext';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Switch from '@mui/material/Switch';
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
                setResultImage("data:image/jpg;base64," + response.data.resultImage)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <NavBar />
            <Container>

                <Grid container justify="center" spacing={1}>
                    <Grid justify="center" item xs={6} sm={6} md={6}>
                        <img src={originalImage} alt="" />
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <img src={resultImage} alt="" />
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container spacing={2}>
                            <Grid item xs={1}>
                                <input
                                    accept="image/*"
                                    className="load-image"
                                    id="contained-button-file"
                                    // multiple
                                    type="file"
                                    onChange={uploadImage}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="contained" component="span" >
                                        Upload
                                    </Button>
                                </label>
                                <Typography variant='h6'> Gray</Typography>
                                <Switch name="gilad" />
                                <Typography variant='h6'> Cascade</Typography>
                                <Switch name="gilad" />

                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='h6'> Biluring</Typography>
                                <hr />
                                <Typography variant='p' gutterBottom>Averaging blur kernel size</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                                <Typography variant='p' gutterBottom>Median blur kernel size</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                                <Typography variant='p' gutterBottom>Gaussian blur kernel size</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='h6'> Bilateral Filtering</Typography>
                                <hr />
                                <Typography variant='p' gutterBottom>Kernel radius</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                                <Typography variant='p' gutterBottom>Sigma color value</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                                <Typography variant='p' gutterBottom>Sigma space value</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='h6'> Dilation</Typography>
                                <hr />
                                <Typography variant='p' gutterBottom>Kernel size</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                                <Typography variant='p' gutterBottom>Iterations</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='h6'> Erosion</Typography>
                                <hr />
                                <Typography variant='p' gutterBottom>Kernel size</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                                <Typography variant='p' gutterBottom>Iterations</Typography>
                                <Slider
                                    aria-label="Always visible"
                                    defaultValue={15}
                                    min={1}
                                    max={51}
                                    // getAriaValueText={valuetext}
                                    step={2}
                                    // marks={marks}
                                    valueLabelDisplay="auto"
                                    onChange={applyBlur}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='h6'> Edge Detection</Typography>
                                <hr/>
                                <Switch name="gilad" />
                                <Typography variant='p'> Canny</Typography>
                                <br/>
                                <Switch name="gilad" />
                                <Typography variant='p'> Laplacian</Typography>
                                <br/>
                                <Switch name="gilad" />
                                <Typography variant='p'> Sobel</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default VisionLab;