import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import addressConfig from './address.config';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    paddingLeft: '25mm',
    paddingRight: '25mm',
    position: 'absolute',
  },
  subheader: {
    fontSize: 10,
    top: '45mm',
  },
  gkaddress: {
    fontSize: 12,
    left: '100mm',
    top: '50mm',
  },
  customerAddress: {
    fontSize: 12,
    top: `17.7mm`,
  },
  subject: {
    fontSize: 20, 
    fontWeight: 'bold', 
    top: '51.6mm'
  },
  greeting: {
    fontSize: 12,
    fontWeight: 'normal'
  },
  tableHeader: {
    border: '2 solid black',
    fontSize: 12,
    top: '60mm',
    width: '150mm',
    flexDirection: 'row',
    marginBottom: '2mm'
  },
  tableRow: {
    border: '1 solid black',
    fontSize: 11,
    top: '60mm',
    width: '150mm',
    flexDirection: 'row',
  },
  tableLast: {
    borderBottom: '2 double black',
    fontSize: 11,
    top: '60mm',
    left: '50mm',
    width: '100mm',
    flexDirection: 'row',
  },
  c: {
    width: '30mm',
    marginLeft: '20mm',
  },
  lastStatement: {
    fontSize: 12,
    top: '80mm',
  },
  bank: {
    position: 'absolute',
    fontSize: 10,
    bottom: '10mm',
    left: '25mm',
    flexDirection: 'row', 
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
  var gesamt = 0;
  const steuer = props.steuern.steuer / 100;
  return (
  <Document>
    <Page size="A4" style={styles.page} wrap={true}>
      <View>
        <Text style={styles.subheader}>
          {`${addressConfig.firma}, ${addressConfig.strasseMitNummer}, ${addressConfig.plzMitOrt}`}
        </Text>
        <Text style={styles.gkaddress}>
          {addressConfig.firma + "\n"
          + addressConfig.strasseMitNummer + "\n"
          + addressConfig.plzMitOrt + "\n"
          + "E-mail: " + addressConfig.email + "\n"
          + "Tel.: " + addressConfig.telefon + "\n"
          + "Rechnungsdatum: " + getActualDate() + "\n"
          + "R.-Nr.: " + getActualDate(true)}
        </Text>
        <Text style={styles.customerAddress}>
          {
            `${props.firma.firma ? props.firma.firma + '\n': ''}\
            ${props.firma.firmenzusatz ? props.firma.firmenzusatz + '\n' : ''}\
            ${props.anrede ? props.anrede : ''}
            ${props.name.vorname}
            ${props.name.nachname}
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
            ? `\n\n\nSehr geehrter Herr ${props.name.nachname}\n`
            : `\n\n\nSehr geehrte Frau ${props.name.nachname}\n`
          }
          {
            `\nvielen Dank f??r Ihren Einkauf bei ${addressConfig.firma}.
            Wir stellen Ihnen wie folgt in Rechnung:`
          }
        </Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.c}>Rechnungsart</Text>
        <Text style={styles.c}>Menge</Text>
        <Text style={styles.c}>Preis</Text>
      </View>
      {
        props.preise
        ? props.preise.map(preis => {
          var total = 0.0;
          if(preis[0] === "Aufwandspauschale"){
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
              <Text style={styles.c}>{preis[0] !== "Aufwandspauschale" ? preis[1] : '-'}</Text>
              <Text style={styles.c}>{total.toFixed(2)} ???</Text>
            </View>
          )
        })
        : null
      }
      <View style={styles.tableRow}>
        <Text style={styles.c}></Text>
        <Text style={styles.c}> inkl. MwSt.</Text>
        <Text style={styles.c}>{parseFloat(gesamt / (1.0 + steuer) * steuer).toFixed(2)} ???</Text>
      </View>
      <View style={styles.tableLast}>
        <Text style={styles.c}>Gesamt</Text>
        <Text style={styles.c}>{gesamt.toFixed(2)} ???</Text>
      </View>
      <View style={styles.lastStatement}>
        <Text>{"Bitte ??berweisen Sie den Betrag auf das unten genannte Konto\n innerhalb von 14 Tagen ab Rechnungsdatum.\n\nMit freundlichen Gr????en\n\n\n" + addressConfig.firma}</Text>
      </View>
      <View fixed style={styles.bank}>
        <Text style={{width: '80mm'}}>{`Bankverbindung:\n${addressConfig.bankName}\nIBAN: ${addressConfig.iban}`}</Text>
        <Text >{`\nBIC: ${addressConfig.bic}\nSteuer-Nr. ${addressConfig.steuerNummer}`}</Text>
      </View>
    </Page>
  </Document>
)};

export default MyDocument;