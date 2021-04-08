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
import { Button, Grid } from '@material-ui/core';
import SchnittHaufen from './components/schnitt-haufen';
import Lohn from './components/lohn';
import { PDFViewer} from '@react-pdf/renderer';
import MyDocument from './pdf/MyDocument';
import reactDom from 'react-dom';

const MyDoc = (props) => (
  <div>
    <PDFViewer width="100%" height="900px">
      <MyDocument anrede={props.anrede}
      firma={props.firma}
      name={props.name}
      adresse={props.adresse}
      steuern={props.steuern}
      preise={props.preise}
      lohn={props.lohn}/>
    </PDFViewer>
  </div>
);

function App() {

  const [anrede, setAnrede] = useState("");
  const [firma, setFirma] = useState({});
  const [name, setName] = useState({});
  const [adresse, setAdresse] = useState({});
  const [steuern, setSteuern] = useState({steuer: 19, rabatt: 0});
  const [preise, setPreise] = useState([]);
  const [lohn, setLohn] = useState({stundenlohn: 50, festmeterpreis: 50});
  const [invoice, setInvoice] = useState(false);

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

  return (
    <div className="App">
      <div className="">
        <Navbar />
      </div>
      <video autoPlay muted loop id="myVideo" >
        <source src={video} type="video/mp4"/>
      </video>
      <div className="container">
        <div className="card">
          <div className="card-header board-header">
            <h4>Hallo Stephan! Das ist dein Rechnungsprogramm <ThumbUpIcon/></h4>
          </div>
          <div className="card-body">
            <form onSubmit={onSubmit}>
              <Grid container spacing={1}>
                <Firma setFirma={setFirma} firma={firma}/>
                <Anrede anrede={anrede} setAnrede={setAnrede} />
                <Name setName={setName} name={name}/>
                <Adresse setAdresse={setAdresse} adresse={adresse}/>
                <Steuern setSteuern={setSteuern} steuern={steuern}/>
                <Lohn setLohn={setLohn} lohn={lohn}/>
              </Grid>
              <SchnittHaufen setPreise={setPreise} preise={preise}/>
              <hr/>
              <Button type="submit" color="primary" variant="contained">Rechnung erstellen</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
