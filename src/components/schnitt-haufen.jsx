import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button, Grid} from '@material-ui/core';
import Schnitt from './schnitt';

const SchnittHaufen = (props) => {

    const addItem = (index, value) => {
        const schtt = props.preise.map((haufen, i) => i === index ? value : haufen);
        props.setPreise(schtt);
    }

    const deleteItem = (index) => {
        const schtt = props.preise.filter((v, i) => i !== index);
        console.log(schtt)
        props.setPreise(schtt)
    }

    return (
        <div>
            <Grid container spacing={1}>
                {
                    props.preise.map((value, row) => {
                        return(<Schnitt key={row} sh={value ? value[1] : null} rowNum={row} addItem={addItem} deleteItem={deleteItem}/>)
                    })
                }
            </Grid>
            <Button className="mt-3" variant="contained" onClick={() => {
                props.setPreise([...props.preise, ""])
                }}><AddIcon /> Hinzufügen</Button>
        </div>
       
    )
}

export default SchnittHaufen;