import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import AppContext from '../../appcontext';
import AveragingBlur from './Effects/AveragingBlur';
import MedianBlur from './Effects/MedianBlur';
import GaussianBlur from './Effects/GaussianBlur';
import BilateralFilter from './Effects/BilateralFilter'
import Dilation from './Effects/Dilation'
import Erodion from './Effects/Erodion'

const ControllerForm = () => {
    const { vlEffects, setVlEffects, setVlOriginalImage } = useContext(AppContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const uploadImage = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0]) //convert to base64 ?
        reader.onload = () => {
            console.log(reader.result)
            setVlOriginalImage(reader.result)
        }
    };

    const deleteVLEffects = () => {
        setVlEffects([]);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (e) => {
        console.log(e.target.innerText);
        if (e.target.innerText == "Averaging Blur") {
            const newEffects = [<AveragingBlur key={Math.random()} />, ...vlEffects];
            setVlEffects(newEffects);
        };
        if (e.target.innerText == "Median Blur") {
            const newEffects = [<MedianBlur key={Math.random()} />, ...vlEffects];
            setVlEffects(newEffects);
        };
        if (e.target.innerText == "Gaussian Blur") {
            const newEffects = [<GaussianBlur key={Math.random()} />, ...vlEffects];
            setVlEffects(newEffects);
        };
        if (e.target.innerText == "Bilateral Filter") {
            const newEffects = [<BilateralFilter key={Math.random()} />, ...vlEffects];
            setVlEffects(newEffects);
        };
        if (e.target.innerText == "Dilation") {
            const newEffects = [<Dilation key={Math.random()} />, ...vlEffects];
            setVlEffects(newEffects);
        };
        if (e.target.innerText == "Erodion") {
            const newEffects = [<Erodion key={Math.random()} />, ...vlEffects];
            setVlEffects(newEffects);
        };
        setAnchorEl(null);
        console.log(vlEffects);
    };

    return (
        <div>
            <Stack direction="row">
                <input
                    accept="image/*"
                    className="load-image"
                    id="contained-button-file"
                    // multiple
                    type="file"
                    onChange={uploadImage}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" > Upload </Button>
                </label>
                <Button variant="contained" onClick={deleteVLEffects}> Reset </Button>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant="contained"
                >
                    Add
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem value="averagingBlur" onClick={handleClose}>Averaging Blur</MenuItem>
                    <MenuItem onClick={handleClose}>Median Blur</MenuItem>
                    <MenuItem onClick={handleClose}>Gaussian Blur</MenuItem>
                    <MenuItem onClick={handleClose}>Bilateral Filter</MenuItem>
                    <MenuItem onClick={handleClose}>Dilation</MenuItem>
                    <MenuItem onClick={handleClose}>Erodion</MenuItem>
                    <Divider />
                </Menu>
            </Stack>
        </div>
    );
};

export default ControllerForm;
