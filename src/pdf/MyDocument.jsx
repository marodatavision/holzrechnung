import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import addressConfig from './address.config';
import logo from './logo';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    paddingLeft: '25mm',
    paddingRight: '25mm',
    position: 'absolute',
    lineHeight: '1.2'
  },
  subheader: {
    position: 'absolute',
    fontSize: 10,
    top: '27mm',
  },
  gkaddress: {
    fontSize: 12,
    position: 'absolute',
    right: '-15mm',
    top: '32mm',
    textAlign: 'left',
    width: '75mm'
  },
  customerAddress: {
    position: 'absolute',
    fontSize: 12,
    top: `35mm`,
    width: '80mm'
  },
  subject: {
    position: 'absolute',
    fontSize: 20, 
    fontWeight: 'bold', 
    left: '25mm',
    top: '95mm'
  },
  greeting: {
    position: 'absolute',
    fontSize: 12,
    top: '3mm',
    fontWeight: 'normal',
    width: '120mm'
  },
  table: {
    position: 'absolute',
    top: '180mm',
    width: '170mm',
  }, 
  tableHeader: {
    marginLeft: '25mm',
    top: '20mm',
    border: '2 solid black',
    fontSize: 12,
    flexDirection: 'row',
    marginBottom: '2mm'
  },
  tableRow: {
    marginLeft: '25mm',
    border: '1 solid black',
    fontSize: 11,
    top: '20mm',
    width: '150mm',
    flexDirection: 'row',
  },
  tableLast: {
    marginLeft: '25mm',
    borderBottom: '2 double black',
    fontSize: 11,
    top: '20mm',
    left: '50mm',
    width: '100mm',
    flexDirection: 'row',
  },
  c: {
    width: '30mm',
    marginLeft: '20mm',
  },
  lastStatement: {
    marginLeft: '25mm',
    width: '150mm',
    fontSize: 12,
    top: '30mm',
  },
  bank1: {
    position: 'absolute',
    fontSize: 10,
    bottom: '15mm',
    left: '25mm',
    flexDirection: 'row', 
  },
  bank2: {
    position: 'absolute',
    fontSize: 10,
    bottom: '15mm',
    right: '25mm',
    textAlign: 'right'
  },
  logo: {
    position: 'absolute',
    right: '10mm',
    top: '6mm',
    width: '28%',
    opacity: 0.5
  },
  klausel: {
    marginBottom: '4mm'
  },
  table: {
    position: 'absolute',
    top: '120mm'
  },
  faltlinie1 : {
    position: 'absolute',
    left: '2mm',
    top: '87mm'
  },
  faltlinie2 : {
    position: 'absolute',
    left: '2mm',
    top: '192mm'
  },
  lochmarke : {
    position: 'absolute',
    left: '2mm',
    top: '148.5mm'
  },

});

const getActualDate = (invoiceNo=false) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  if(invoiceNo){
    var hours = String(today.getHours());
    var mins = String(today.getMinutes());
    var secs = String(today.getSeconds());
    today = 'GK' + dd + mm + yyyy + hours + mins + secs;
  }
  else{
    today = dd + '.' + mm + '.' + yyyy;
  }
  return today;
}

// Create Document Component
const MyDocument = (props) => {
  var gesamt = 0.0;
  const steuer = props.steuern.steuer / 100;
  const rabatt = props.steuern.rabatt / 100;
  return (
  <Document>
    <Page size="A4" style={styles.page} wrap={true}>
      <Image src={logo} style={styles.logo}/>
      <View>
        <Text style={styles.subheader}>
          {`${addressConfig.firma}, ${addressConfig.strasseMitNummer}, ${addressConfig.plzMitOrt}`}
        </Text>
        <Text style={styles.gkaddress}>
          {addressConfig.firma + "\n"
          + addressConfig.strasseMitNummer + "\n"
          + addressConfig.plzMitOrt + "\n\n"
          + "E-mail: " + addressConfig.email + "\n"
          + "Tel.: " + addressConfig.telefon + "\n"
          + (addressConfig.internet ? "Internet: " + addressConfig.internet + "\n" : "") + "\n"
          + "Rechnungsdatum: " + getActualDate() + "\n"
          + "R.-Nr.: " + getActualDate(true)}
        </Text>
        <Text style={styles.customerAddress}>
          {
            `${props.firma.firma ? props.firma.firma + '\n': ''}\
            ${props.firma.firmenzusatz ? props.firma.firmenzusatz + '\n' : ''}\
            ${props.anrede ? props.anrede : ''}
            ${props.name.vorname} ${props.name.nachname}
            ${props.adresse.adresse}
            ${props.adresse.zip}
            `
          }
        </Text>
      </View>
      <View style={styles.subject}>
        <Text>Rechnung</Text>
        <Text style={styles.greeting}>
          {
            props.anrede === "Herr"
            ? `\n\n\nSehr geehrter Herr ${props.name.nachname},\n`
            : `\n\n\nSehr geehrte Frau ${props.name.nachname},\n`
          }
          {
            `\nvielen Dank für Ihren Einkauf bei ${addressConfig.firma}.
            Wir stellen Ihnen wie folgt in Rechnung:`
          }
        </Text>
      </View>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.c}>Rechnungsart</Text>
          <Text style={styles.c}>Menge</Text>
          <Text style={styles.c}>Preis</Text>
        </View>
        {
          props.preise
          ? props.preise.map(preis => {
            var total = 0.0;
            if(preis[0] === "pauschal"){
              total = parseFloat(preis[1]);
            }
            else if(preis[0] === "Festmeter"){
              total = preis[1] * parseFloat(props.lohn.festmeterpreis)
            }
            else if(preis[0] === "Arbeitsstunden"){
              total = preis[1] * parseFloat(props.lohn.stundenlohn)
            }
            gesamt += total;
            return (
              <View style={styles.tableRow}>
                <Text style={styles.c}>{preis[0]}</Text>
                <Text style={styles.c}>{preis[0] !== "pauschal" ? preis[1] : '-'}</Text>
                <Text style={styles.c}>{total.toFixed(2)} €</Text>
              </View>
            )
          })
          : null
        }
        {
          rabatt > 0.0
          ? <View style={styles.tableRow}>
            <Text style={styles.c}></Text>
            <Text style={styles.c}>Rabatt</Text>
            <Text style={styles.c}>- {(gesamt * rabatt).toFixed(2)} €</Text>
          </View>
          : null
        }
        {
          steuer > 0.0
          ? <View style={styles.tableRow}>
            <Text style={styles.c}></Text>
            <Text style={styles.c}> inkl. MwSt.</Text>
            <Text style={styles.c}>{((rabatt ? gesamt - (gesamt * rabatt) : gesamt) / (1.0 + steuer) * steuer).toFixed(2)} €</Text>
          </View>
          : null
        }
        <View style={styles.tableLast}>
          <Text style={styles.c}>Gesamtbetrag</Text>
          <Text style={styles.c}>{rabatt ? (gesamt - (gesamt * rabatt)).toFixed(2) : gesamt.toFixed(2)} €</Text>
        </View>
        <View style={styles.lastStatement}>
          {
            addressConfig.kleinunternehmer
            ? <Text style={styles.klausel}>Es wird gemäß §19 Abs. 1 Umsatzsteuergesetz keine Umsatzsteuer erhoben.</Text>
            : null
          }
          <Text>{"Bitte überweisen Sie den Betrag auf das unten genannte Konto\n innerhalb von 14 Tagen ab Rechnungsdatum.\n\nMit freundlichen Grüßen\n\n\n" + addressConfig.firma}</Text>
        </View>
      </View>
      
        {
          addressConfig.steuerNummer
          ? <View fixed style={styles.bank1}>
            <Text style={{width: '80mm'}}>{`Bankverbindung:\n${addressConfig.bankName}\nIBAN: ${addressConfig.iban}`}</Text>
            <Text >{`\nBIC: ${addressConfig.bic}\nSteuer-Nr. ${addressConfig.steuerNummer}`}</Text>
            </View>
          : <View fixed style={styles.bank2}>
            <Text style={{width: '80mm'}}>{`Bankverbindung:\n${addressConfig.bankName}\nIBAN: ${addressConfig.iban}\nBIC: ${addressConfig.bic}`}</Text>
          </View>
        }
      <Text style={styles.faltlinie1}>_</Text>
      <Text style={styles.faltlinie2}>_</Text>
      <Text style={styles.lochmarke}>__</Text>
      
    </Page>
  </Document>
)};

export default MyDocument;