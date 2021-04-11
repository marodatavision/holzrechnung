import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const Schnitt = (props) => {

    const [pauschal, setPauschal] = useState(null);

    const handleChange = (e) => {
        setPauschal(e.target.value);
        props.addItem(props.rowNum, [e.target.value, props.sh]);
    }

    const handlePreisChange = (e) => {
        props.addItem(props.rowNum, [pauschal, e.target.value]);
    }
 
    return (
        
        <Grid container item xs={12} spacing={3}>
            <Grid item xs>
                <FormControl variant="outlined" >
                    <InputLabel id="schnitt">Art</InputLabel>
                    <Select
                        labelId="schnitt"
                        id="demo-simple-select-outlined"
                        value={pauschal}
                        onChange={handleChange}
                        label="Age"
                        style={{width: '160%'}}
                        required
                        >
                        <MenuItem value="">
                        <em>--Bitte Auswählen</em>
                        </MenuItem>
                        <MenuItem value="pauschal">Pauschale</MenuItem>
                        <MenuItem value="Festmeter">Festmeter</MenuItem>
                        <MenuItem value="Arbeitsstunden">Arbeitsstunden</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs>
                <TextField onChange={handlePreisChange} step={0.01} id="menge" type="number" label={pauschal === "Pauschal" ? "Preis" : "Menge"} variant="outlined" />
            </Grid>
            <Grid item xs={1}>
                <Button onClick={() => props.deleteItem(props.rowNum)}><RemoveCircleOutlineIcon  style={{color: 'red'}}/></Button>
            </Grid>
        </Grid>
    )
}

export default Schnitt;