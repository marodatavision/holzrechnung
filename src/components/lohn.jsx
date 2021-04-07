import { Grid, TextField } from '@material-ui/core';
import React from 'react';

const Lohn = (props) => {

    const stundenlohnChange = (e) => {
        props.setLohn({...props.lohn, stundenlohn: e.target.value});
    }

    const festmeterpreisChange = (e) => {
        props.setFestmeterpreis({...props.lohn, festmeterpreis: e.target.value});
    }

    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs>
                <TextField required onChange={stundenlohnChange} value={props.lohn.stundenlohn} type="number" id="stundenlohn" label="Stundenlohn in €" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField required onChange={festmeterpreisChange} value={props.lohn.festmeterpreis} type="number" id="festmeterpreis" label="Festmeterpreis in €" variant="outlined" />
            </Grid>
        </Grid>
    )
}

export default Lohn;