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

const blurSliderValues = [
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

const MedianBlur = () => {
    const classes = useStyles();
    const { vlOriginalImage, setVlOriginalImage, vlResultImage, setVlResultImage } = useContext(AppContext);
    const [value, setValue] = useState(3);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleChangeCommitted = (e) => {
        let data = {
            "imageBase64": vlOriginalImage,
            "kernelSize": value
        }
        axios.post('http://127.0.0.1:5001/visionlab/filter/medianBlur', data)
            .then(response => {
                setVlResultImage("data:image/jpg;base64," + response.data.resultImage)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <div className={classes.formContainer}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant='p' gutterBottom>Median BLur</Typography>
                    </Grid>
                    <Grid>
                        <hr/>
                    </Grid>
                    <Grid container>
                        <Grid item xs={3} sm={3} md={3}>
                            <Typography variant='p' gutterBottom>Kernel Size</Typography>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8}>
                            <Slider
                                aria-label="Always visible"
                                defaultValue={15}
                                min={1}
                                max={51}
                                // getAriaValueText={valuetext}
                                step={2}
                                marks={blurSliderValues}
                                valueLabelDisplay="auto"
                                onChange={handleChange}
                                onChangeCommitted={handleChangeCommitted}
                            />
                        </Grid>
                        <Grid item xs={1} sm={1} md={1}>
                            <Typography>
                                {value}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default MedianBlur;