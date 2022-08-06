import React, {useContext} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import ControllerForm from './ControllerForm';
import AppContext from '../../appcontext';
import NavBar from '../NavBar/NavBar';

import './VisionLab.css';



const EffectContainer = (props) => {
    const { vlEffects } = useContext(AppContext);
    return (
        <div>
            {props.effects}
        </div>

    );
}

const VisionLab = () => {
    const { vlEffects, vlOriginalImage, vlResultImage} = useContext(AppContext);
    return (
        <>
            <NavBar />
            <Container maxWidth="xl">
                <Grid container justify="center" spacing={1}>
                    <Grid justify="center" item xs={5} sm={5} md={5}>
                        <img src={vlOriginalImage} alt="" />
                    </Grid>
                    <Grid item xs={5} sm={5} md={5}>
                        <img src={vlResultImage} alt="" />
                    </Grid>
                    <Grid item xs={2} sm={2} md={2}>
                        <Stack>
                            <ControllerForm/>
                        </Stack>
                        <Stack>
                            <EffectContainer effects={vlEffects} />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default VisionLab;