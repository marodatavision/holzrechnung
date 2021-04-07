import { Grid, TextField } from '@material-ui/core';
import React from 'react';

const Adresse = (props) => {

    const adresseChange = (e) => {
        props.setAdresse({...props.adresse, adresse: e.target.value});
    }

    const plzChange = (e) => {
        props.setAdresse({...props.adresse, zip: e.target.value});
    }

    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs>
                <TextField onChange={adresseChange} id="adresse" label="Straße und Hausnummer" variant="outlined" />
            </Grid>
            <Grid item xs>
                <TextField onChange={plzChange} id="plz" label="PLZ und Wohnort" variant="outlined" />
            </Grid>
        </Grid>
    )
}

export default Adresse;