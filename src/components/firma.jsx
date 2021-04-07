import { Grid, TextField } from '@material-ui/core';
import React from 'react';

const Firma = (props) => {

    const firmaChange = (e) => {
        props.setFirma({...props.firma, firma: e.target.value});
    }

    const firmenzusatzChange = (e) => {
        props.setFirma({...props.firma, firmenzusatz: e.target.value});
    }

    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs>
                <TextField onChange={firmaChange} id="firma" label="Firma (Optional)" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField onChange={firmenzusatzChange} id="firmenzusatz" label="Firmazusatz (Optional)" variant="outlined" />
            </Grid>
        </Grid>
    );
}

export default Firma;