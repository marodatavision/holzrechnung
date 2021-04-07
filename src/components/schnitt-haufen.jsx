import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button, Grid} from '@material-ui/core';
import Schnitt from './schnitt';
import _ from 'lodash'

const SchnittHaufen = (props) => {

    const [schnitthaufen, setSchnitthaufen] = useState([]);

    const addItem = (index, value) => {
        const schtt = schnitthaufen.map((haufen, i) => i === index ? value : haufen);
        setSchnitthaufen(schtt);
    }

    const deleteItem = (index) => {
        const schtt = schnitthaufen.filter((v, i) => i !== index);
        console.log(schtt)
        setSchnitthaufen(schtt)
    }

    useEffect(() => {
        props.setPreise(schnitthaufen);
    }, [JSON.stringify(schnitthaufen)])

    return (
        <div>
            <Grid container spacing={1}>
                {
                    schnitthaufen.map((value, row) => {
                        return(<Schnitt key={row} sh={value ? value[1] : null} rowNum={row} addItem={addItem} deleteItem={deleteItem}/>)
                    })
                }
            </Grid>
            <Button className="mt-3" variant="contained" onClick={() => {
                setSchnitthaufen([...schnitthaufen, ""])
                }}><AddIcon /> Hinzufügen</Button>
        </div>
       
    )
}

export default SchnittHaufen;