import './App.css';
import Anrede from './components/anrede';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import video from './components/cutting_wood.mp4';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Firma from './components/firma';
import Name from './components/name';
import Adresse from './components/addresse';
import Steuern from './components/steuern';
import { Button, Grid, makeStyles, Modal, TextField } from '@material-ui/core';
import SchnittHaufen from './components/schnitt-haufen';
import Lohn from './components/lohn';
import {PDFDownloadLink} from '@react-pdf/renderer';
import MyDocument from './pdf/MyDocument';
import reactDom from 'react-dom';

const crypto = require('crypto');

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MyDoc = (props) => (
  <div>
    <div className="container card">
        <div className="card-header"><h4>Rechnung erfolgreich generiert</h4></div>
        <div className="card-body">
          <p>Hier kannst du deine Rechnung herunterladen</p>
          <PDFDownloadLink document={
            <MyDocument anrede={props.anrede}
            firma={props.firma}
            name={props.name}
            adresse={props.adresse}
            steuern={props.steuern}
            preise={props.preise}
            lohn={props.lohn}/>
            } fileName={`rechnung_${Date.now()}.pdf`}>
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : window.open(url, "_self")
                  
              }
          </PDFDownloadLink>
      </div>
    </div>
  </div>
);

function App() {

  const classes = useStyles();

  const [anrede, setAnrede] = useState("");
  const [firma, setFirma] = useState({});
  const [name, setName] = useState({});
  const [adresse, setAdresse] = useState({});
  const [steuern, setSteuern] = useState({steuer: 0, rabatt: 0});
  const [preise, setPreise] = useState([""]);
  const [lohn, setLohn] = useState({stundenlohn: 50, festmeterpreis: 50});
  const [invoice, setInvoice] = useState(false);
  const [login, setLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
      if(invoice){
        
        reactDom.render(<MyDoc anrede={anrede}
        firma={firma}
        name={name}
        adresse={adresse}
        steuern={steuern}
        preise={preise}
        lohn={lohn}
        />, document.getElementById('root'));
      }
    })

  const onSubmit = (e) => {
    e.preventDefault();
    setInvoice(true);
  }

  const checkPwd = (e) => {
    const hashPwd = crypto.createHash('sha256').update(password).digest('hex');
    if (hashPwd === "40993ef13b6ff202ddf4468f03bd76b9c6a12e517d205e6dcc1b8413bd85576e"){
      setLogin(true)
      setShowLoginForm(false);
      setUsername("");
      setPassword("");
    }
    else {
      alert("Falsches Passwort!")
    }
  }

  const handleKeyPress = (e) => {
    if(e.charCode === 13){
      checkPwd();
    }
  }

  return (
    <div className="App"> 
      <div className="">
        <Navbar showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}/>
      </div>
      <video autoPlay muted loop id="myVideo" >
        <source src={video} type="video/mp4"/>
      </video>
      <div className="container">
      <Modal
        open={showLoginForm}
        onClose={() => setShowLoginForm(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
        <TextField required onChange={(e) => setUsername(e.target.value)} value={username} id="username" label="Benutzername" variant="outlined" />
        <TextField onKeyPress={handleKeyPress} type="password" required onChange={(e) => setPassword(e.target.value)} value={password} id="password" label="Passwort" variant="outlined" />
        <Button onClick={checkPwd} color="primary" variant="contained">einloggen</Button>
        </div>
      </Modal>
        <div className="card">
          <div className="card-header board-header">
            {
              !login
              ? <h4>Willkommen bei Holzrechnung</h4>
              : <h4>Hallo {username}! Das ist dein Rechnungsprogramm <ThumbUpIcon/></h4>
            }
          </div>
          <div className="card-body">
            {
              !login
              ? <p>Hier kannst du deine Holzrechnungen schreiben.</p>
              : <form onSubmit={onSubmit}>
              <h4>Kundendaten</h4>
              <hr/>
              <Grid container spacing={1}>
                <Firma setFirma={setFirma} firma={firma}/>
                <Anrede anrede={anrede} setAnrede={setAnrede} />
                <Name setName={setName} name={name}/>
                <Adresse setAdresse={setAdresse} adresse={adresse}/>
                <Steuern setSteuern={setSteuern} steuern={steuern}/>
                <Lohn setLohn={setLohn} lohn={lohn}/>
              </Grid>
              <hr/>
              <h4>Leistungen</h4>
              <hr/>
              <SchnittHaufen setPreise={setPreise} preise={preise}/>
              <hr/>
              <Button type="submit" color="primary" variant="contained">Rechnung erstellen</Button>
            </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
