import React, { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../../../appcontext';
import { makeStyles } from "@material-ui/core/styles";
import Slider from '@mui/material/Slider';
import Typography from "@mui/material/Typography";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    formContainer: {
        margin: 5,
        padding: 5,
        border: ' 2px solid blue',
    }
})

const kernelRadiusSliderValues = [
    {
        "value": 1,
        "label": "1"
    },
    {
        "value": 25,
        "label": "25"
    },
    {
        "value": 51,
        "label": "51"
    },
];

const sigmaColorSLiderValues = [
    {
        "value": 1,
        "label": "1"
    },
    {
        "value": 25,
        "label": "25"
    },
    {
        "value": 51,
        "label": "51"
    },
];

const sigmaSpaceSliderValues = [
    {
        "value": 1,
        "label": "1"
    },
    {
        "value": 25,
        "label": "25"
    },
    {
        "value": 51,
        "label": "51"
    },
];





const AveragingBlur = () => {
    const classes = useStyles();
    const { vlOriginalImage, setVlOriginalImage, vlResultImage, setVlResultImage } = useContext(AppContext);
    const [value1, setValue1] = useState(3);
    const [value2, setValue2] = useState(3);
    const [value3, setValue3] = useState(3);

    const handleChangeVal1 = (e) => {
        setValue1(e.target.value);
    };

    const handleChangeVal2 = (e) => {
        setValue2(e.target.value);
    };

    const handleChangeVal3 = (e) => {
        setValue3(e.target.value);
    };
    
    const handleChangeCommitted = (e) => {
        let data = {
            "imageBase64": vlOriginalImage,
            "kernelRadius": value1,
            "sigmaColor": value2,
            "sigmaSpace": value3,
        }
        axios.post('http://127.0.0.1:5001/visionlab/filter/bilateral', data)
            .then(response => {
                console.log(response.data)
                setVlResultImage("data:image/jpg;base64," + response.data.resultImage)
            })
            .catch(error => {
                console.log(error);
            });
    }


    // krad=10, sColor=35, sSpace=25,
    return (
        <>

            <div className={classes.formContainer}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant='p' gutterBottom>Bilateral Filter</Typography>
                    </Grid>
                    <Grid>
                        <hr />
                    </Grid>
                    <Grid container>
                        <Grid item xs={3} sm={3} md={3}>
                            <Typography variant='p' gutterBottom>Kernel Radius</Typography>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <Slider
                                aria-label="Always visible"
                                defaultValue={15}
                                min={1}
                                max={51}
                                // getAriaValueText={valuetext}
                                step={2}
                                marks={kernelRadiusSliderValues}
                                valueLabelDisplay="auto"
                                onChange={handleChangeVal1}
                                onChangeCommitted={handleChangeCommitted}
                            />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <Typography>
                                {value1}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3} sm={3} md={3}>
                            <Typography variant='p' gutterBottom>Sigma Color</Typography>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <Slider
                                aria-label="Always visible"
                                defaultValue={15}
                                min={1}
                                max={51}
                                // getAriaValueText={valuetext}
                                step={2}
                                marks={kernelRadiusSliderValues}
                                valueLabelDisplay="auto"
                                onChange={handleChangeVal2}
                                onChangeCommitted={handleChangeCommitted}
                            />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <Typography>
                                {value2}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3} sm={3} md={3}>
                            <Typography variant='p' gutterBottom>Sigma Space</Typography>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <Slider
                                aria-label="Always visible"
                                defaultValue={15}
                                min={1}
                                max={51}
                                // getAriaValueText={valuetext}
                                step={2}
                                marks={kernelRadiusSliderValues}
                                valueLabelDisplay="auto"
                                onChange={handleChangeVal3}
                                onChangeCommitted={handleChangeCommitted}
                            />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <Typography>
                                {value3}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default AveragingBlur;