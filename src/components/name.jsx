import { Grid, TextField } from '@material-ui/core';
import React from 'react';

const Name = (props) => {

    const vornameChange = (e) => {
        props.setName({...props.name, vorname: e.target.value});
    }

    const nachnameChange = (e) => {
        props.setName({...props.name, nachname: e.target.value});
    }

    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs>
                <TextField required onChange={vornameChange} id="vorname" label="Vorname" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField required onChange={nachnameChange} id="nachname" label="Nachname" variant="outlined" />
            </Grid>
        </Grid>
    )
}

export default Name;