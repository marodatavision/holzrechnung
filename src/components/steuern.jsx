import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import addressConfig from '../pdf/address.config';

const Steuern = (props) => {

    const steuerChange = (e) => {
        props.setSteuern({...props.steuern, steuer: e.target.value});
    }

    const rabattChange = (e) => {
        props.setSteuern({...props.steuern, rabatt: e.target.value});
    }

    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs>
                <TextField disabled={addressConfig.kleinunternehmer ? true : false} required onChange={steuerChange} value={props.steuern.steuer} id="steuer" type="number" label="Mehrwertsteuer in %" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField required onChange={rabattChange} value={props.steuern.rabatt} id="rabatt" type="number" label="Rabatt in %" variant="outlined" />
            </Grid>
        </Grid>
    )
}

export default Steuern;