import { FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

const Anrede = (props) => {

    const handleChange = (e) => {
        props.setAnrede(e.target.value);
    }

    return(
        <Grid container item xs={12}>
            <Grid item xs={3}>
                <FormControl variant="outlined" >
                    <InputLabel id="demo-simple-select-outlined-label">Anrede</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={props.anrede}
                        onChange={handleChange}
                        label="Age"
                        style={{width: '160%'}}
                        required
                        >
                        <MenuItem value="">
                        <em>--Bitte Auswählen</em>
                        </MenuItem>
                        <MenuItem value="Herr">Herr</MenuItem>
                        <MenuItem value="Frau">Frau</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}

export default Anrede;