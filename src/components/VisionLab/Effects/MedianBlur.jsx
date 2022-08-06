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
        axios.post('http://0.0.0.0:8006/visionlab/medianBlur/', data)
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
                    <Grid>
                        <Typography variant='p' gutterBottom>median blur kernel size</Typography>
                    </Grid>
                    <Grid item xs={10} sm={10} md={10}>
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
                    <Grid item>
                        <Typography>

                            {value}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default MedianBlur;