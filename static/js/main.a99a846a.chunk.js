(this.webpackJsonpholzrechnung=this.webpackJsonpholzrechnung||[]).push([[0],{254:function(e,t,n){},255:function(e,t,n){},266:function(e,t){},268:function(e,t){},310:function(e,t){},311:function(e,t){},403:function(e,t,n){"use strict";n.r(t);n(249);var a=n(1),r=n.n(a),c=n(26),s=n.n(c),i=(n(254),n(42)),l=(n(255),n(433)),j=n(437),d=n(446),o=n(445),u=n(448),b=n(4),m=function(e){return Object(b.jsx)(l.a,{container:!0,item:!0,xs:12,children:Object(b.jsx)(l.a,{item:!0,xs:3,children:Object(b.jsxs)(j.a,{variant:"outlined",children:[Object(b.jsx)(d.a,{id:"demo-simple-select-outlined-label",children:"Anrede"}),Object(b.jsxs)(o.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:e.anrede,onChange:function(t){e.setAnrede(t.target.value)},label:"Age",style:{width:"160%"},required:!0,children:[Object(b.jsx)(u.a,{value:"",children:Object(b.jsx)("em",{children:"--Bitte Ausw\xe4hlen"})}),Object(b.jsx)(u.a,{value:"Herr",children:"Herr"}),Object(b.jsx)(u.a,{value:"Frau",children:"Frau"})]})]})})})},h=n(440),O=n(442),x=n(443),f=n(444),g=n(225),p=n.n(g),v=n(441),S=function(e){return Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsx)(h.a,{position:"static",className:"flex",children:Object(b.jsxs)(v.a,{className:"container",children:[Object(b.jsx)(O.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(b.jsx)(p.a,{})}),Object(b.jsx)(x.a,{variant:"h6",children:"Holzrechnung"}),Object(b.jsx)(f.a,{id:"login-button",className:"float-right",color:"inherit",children:"Login"})]})})})},y=n.p+"static/media/cutting_wood.145ed0fa.mp4",w=n(239),z=n.n(w),N=n(29),X=n(449),F=function(e){return Object(b.jsxs)(l.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{onChange:function(t){e.setFirma(Object(N.a)(Object(N.a)({},e.firma),{},{firma:t.target.value}))},id:"firma",label:"Firma (Optional)",variant:"outlined"})}),Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{onChange:function(t){e.setFirma(Object(N.a)(Object(N.a)({},e.firma),{},{firmenzusatz:t.target.value}))},id:"firmenzusatz",label:"Firmazusatz (Optional)",variant:"outlined"})})]})},A=function(e){return Object(b.jsxs)(l.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{required:!0,onChange:function(t){e.setName(Object(N.a)(Object(N.a)({},e.name),{},{vorname:t.target.value}))},id:"vorname",label:"Vorname",variant:"outlined"})}),Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{required:!0,onChange:function(t){e.setName(Object(N.a)(Object(N.a)({},e.name),{},{nachname:t.target.value}))},id:"nachname",label:"Nachname",variant:"outlined"})})]})},k=function(e){return Object(b.jsxs)(l.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{required:!0,onChange:function(t){e.setAdresse(Object(N.a)(Object(N.a)({},e.adresse),{},{adresse:t.target.value}))},id:"adresse",label:"Stra\xdfe und Hausnummer",variant:"outlined"})}),Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{required:!0,onChange:function(t){e.setAdresse(Object(N.a)(Object(N.a)({},e.adresse),{},{zip:t.target.value}))},id:"plz",label:"PLZ und Wohnort",variant:"outlined"})})]})},C=function(e){return Object(b.jsxs)(l.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{required:!0,onChange:function(t){e.setSteuern(Object(N.a)(Object(N.a)({},e.steuern),{},{steuer:t.target.value}))},value:e.steuern.steuer,id:"steuer",type:"number",label:"Mehrwertsteuer in %",variant:"outlined"})}),Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{required:!0,onChange:function(t){e.setSteuern(Object(N.a)(Object(N.a)({},e.steuern),{},{rabatt:t.target.value}))},value:e.steuern.rabatt,id:"rabatt",type:"number",label:"Rabatt in %",variant:"outlined"})})]})},B=n(240),R=n(227),I=n.n(R),M=n(226),D=n.n(M),H=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(b.jsxs)(l.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsxs)(j.a,{variant:"outlined",children:[Object(b.jsx)(d.a,{id:"schnitt",children:"Art"}),Object(b.jsxs)(o.a,{labelId:"schnitt",id:"demo-simple-select-outlined",value:r,onChange:function(t){c(t.target.value),e.addItem(e.rowNum,[t.target.value,e.sh])},label:"Age",style:{width:"160%"},required:!0,children:[Object(b.jsx)(u.a,{value:"",children:Object(b.jsx)("em",{children:"--Bitte Ausw\xe4hlen"})}),Object(b.jsx)(u.a,{value:"Aufwandspauschale",children:"Pauschale"}),Object(b.jsx)(u.a,{value:"Festmeter",children:"Festmeter"}),Object(b.jsx)(u.a,{value:"Arbeitsstunden",children:"Arbeitsstunden"})]})]})}),Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{onChange:function(t){e.addItem(e.rowNum,[r,t.target.value])},step:.01,id:"menge",type:"number",label:"Pauschal"===r?"Preis":"Menge",variant:"outlined"})}),Object(b.jsx)(l.a,{item:!0,xs:1,children:Object(b.jsx)(f.a,{onClick:function(){return e.deleteItem(e.rowNum)},children:Object(b.jsx)(D.a,{style:{color:"red"}})})})]})},q=(n(261),function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=function(e,t){var n=r.map((function(n,a){return a===e?t:n}));c(n)},j=function(e){var t=r.filter((function(t,n){return n!==e}));console.log(t),c(t)};return Object(a.useEffect)((function(){e.setPreise(r)}),[JSON.stringify(r)]),Object(b.jsxs)("div",{children:[Object(b.jsx)(l.a,{container:!0,spacing:1,children:r.map((function(e,t){return Object(b.jsx)(H,{sh:e?e[1]:null,rowNum:t,addItem:s,deleteItem:j},t)}))}),Object(b.jsxs)(f.a,{className:"mt-3",variant:"contained",onClick:function(){c([].concat(Object(B.a)(r),[""]))},children:[Object(b.jsx)(I.a,{})," Hinzuf\xfcgen"]})]})}),L=function(e){return Object(b.jsxs)(l.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{required:!0,onChange:function(t){e.setLohn(Object(N.a)(Object(N.a)({},e.lohn),{},{stundenlohn:t.target.value}))},value:e.lohn.stundenlohn,type:"number",id:"stundenlohn",label:"Stundenlohn in \u20ac",variant:"outlined"})}),Object(b.jsx)(l.a,{item:!0,xs:!0,children:Object(b.jsx)(X.a,{required:!0,onChange:function(t){e.setFestmeterpreis(Object(N.a)(Object(N.a)({},e.lohn),{},{festmeterpreis:t.target.value}))},value:e.lohn.festmeterpreis,type:"number",id:"festmeterpreis",label:"Festmeterpreis in \u20ac",variant:"outlined"})})]})},P=n(20),E={firma:"G&K Holzschnitt Gbr",strasseMitNummer:"Quellengasse 9",plzMitOrt:"97797 V\xf6lkersleier",email:"stephan.koch@gmx.de",telefon:"09737 1271",bankName:"VR Bank Bad Kissingen / Bad Br\xfcckenau",iban:"DEXX XXXX XXXX XXXX XXXX XX",bic:"GENODEF1BRK",steuerNummer:"XXX|XXX|XXXXX"},G=P.d.create({page:{flexDirection:"column",paddingLeft:"25mm",paddingRight:"25mm",position:"absolute"},subheader:{fontSize:10,top:"45mm"},gkaddress:{fontSize:12,left:"100mm",top:"50mm"},customerAddress:{fontSize:12,top:"17.7mm"},subject:{fontSize:20,fontWeight:"bold",top:"51.6mm"},greeting:{fontSize:12,fontWeight:"normal"},tableHeader:{border:"2 solid black",fontSize:12,top:"60mm",width:"150mm",flexDirection:"row",marginBottom:"2mm"},tableRow:{border:"1 solid black",fontSize:11,top:"60mm",width:"150mm",flexDirection:"row"},tableLast:{borderBottom:"2 double black",fontSize:11,top:"60mm",left:"50mm",width:"100mm",flexDirection:"row"},c:{width:"30mm",marginLeft:"20mm"},lastStatement:{fontSize:12,top:"80mm"},bank:{position:"absolute",fontSize:10,bottom:"10mm",left:"25mm",flexDirection:"row"}}),K=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Date,n=String(t.getDate()).padStart(2,"0"),a=String(t.getMonth()+1).padStart(2,"0"),r=t.getFullYear();if(e){var c=String(t.getHours()),s=String(t.getMinutes()),i=String(t.getSeconds());t="GK"+n+a+r+c+s+i}else t=n+"."+a+"."+r;return t},T=function(e){var t=0,n=e.steuern.steuer/100;return Object(b.jsx)(P.a,{children:Object(b.jsxs)(P.c,{size:"A4",style:G.page,wrap:!0,children:[Object(b.jsxs)(P.f,{children:[Object(b.jsx)(P.e,{style:G.subheader,children:"".concat(E.firma,", ").concat(E.strasseMitNummer,", ").concat(E.plzMitOrt)}),Object(b.jsx)(P.e,{style:G.gkaddress,children:E.firma+"\n"+E.strasseMitNummer+"\n"+E.plzMitOrt+"\nE-mail: "+E.email+"\nTel.: "+E.telefon+"\nRechnungsdatum: "+K()+"\n          R.-Nr.: "+K(!0)}),Object(b.jsx)(P.e,{style:G.customerAddress,children:"".concat(e.firma.firma?e.firma.firma+"\n":"","            ").concat(e.firma.firmenzusatz?e.firma.firmenzusatz+"\n":"","            ").concat(e.anrede?e.anrede:"","\n            ").concat(e.name.vorname,"\n            ").concat(e.name.nachname,"\n            ").concat(e.adresse.adresse,"\n            ").concat(e.adresse.zip,"\n            ")})]}),Object(b.jsxs)(P.f,{style:G.subject,children:[Object(b.jsx)(P.e,{children:"Rechnung"}),Object(b.jsxs)(P.e,{style:G.greeting,children:["Herr"===e.anrede?"\n\n\nSehr geehrter Herr ".concat(e.name.nachname,"\n"):"\n\n\nSehr geehrte Frau ".concat(e.name.nachname,"\n"),"\nvielen Dank f\xfcr Ihren Einkauf bei ".concat(E.firma,".\n            Wir stellen Ihnen wie folgt in Rechnung:")]})]}),Object(b.jsxs)(P.f,{style:G.tableHeader,children:[Object(b.jsx)(P.e,{style:G.c,children:"Rechnungsart"}),Object(b.jsx)(P.e,{style:G.c,children:"Menge"}),Object(b.jsx)(P.e,{style:G.c,children:"Preis"})]}),e.preise?e.preise.map((function(n){var a=0;return"Aufwandspauschale"===n[0]?a=parseFloat(n[1]):"Festmeter"===n[0]?a=n[1]*parseFloat(e.lohn.festmeterpreis):"Arbeitsstunden"===n[0]&&(a=n[1]*parseFloat(e.lohn.stundenlohn)),t+=a,Object(b.jsxs)(P.f,{style:G.tableRow,children:[Object(b.jsx)(P.e,{style:G.c,children:n[0]}),Object(b.jsx)(P.e,{style:G.c,children:"Aufwandspauschale"!=n[0]?n[1]:"-"}),Object(b.jsxs)(P.e,{style:G.c,children:[a.toFixed(2)," \u20ac"]})]})})):null,Object(b.jsxs)(P.f,{style:G.tableRow,children:[Object(b.jsx)(P.e,{style:G.c}),Object(b.jsx)(P.e,{style:G.c,children:" inkl. MwSt."}),Object(b.jsxs)(P.e,{style:G.c,children:[parseFloat(t/(1+n)*n).toFixed(2)," \u20ac"]})]}),Object(b.jsxs)(P.f,{style:G.tableLast,children:[Object(b.jsx)(P.e,{style:G.c,children:"Gesamt"}),Object(b.jsxs)(P.e,{style:G.c,children:[t.toFixed(2)," \u20ac"]})]}),Object(b.jsx)(P.f,{style:G.lastStatement,children:Object(b.jsx)(P.e,{children:"Bitte \xfcberweisen Sie den Betrag auf das unten genannte Konto\n innerhalb von 14 Tagen ab Rechnungsdatum.\n\nMit freundlichen Gr\xfc\xdfen\n\n\n"+E.firma})}),Object(b.jsxs)(P.f,{fixed:!0,style:G.bank,children:[Object(b.jsx)(P.e,{style:{width:"80mm"},children:"Bankverbindung:\n".concat(E.bankName,"\nIBAN: ").concat(E.iban)}),Object(b.jsx)(P.e,{children:"\nBIC: ".concat(E.bic,"\nSteuer-Nr. ").concat(E.steuerNummer)})]})]})})},V=function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(P.b,{width:"100%",height:"900px",children:Object(b.jsx)(T,{anrede:e.anrede,firma:e.firma,name:e.name,adresse:e.adresse,steuern:e.steuern,preise:e.preise,lohn:e.lohn})})})};var W=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),j=Object(i.a)(c,2),d=j[0],o=j[1],u=Object(a.useState)({}),h=Object(i.a)(u,2),O=h[0],x=h[1],g=Object(a.useState)({}),p=Object(i.a)(g,2),v=p[0],w=p[1],N=Object(a.useState)({steuer:19,rabatt:0}),X=Object(i.a)(N,2),B=X[0],R=X[1],I=Object(a.useState)({}),M=Object(i.a)(I,2),D=M[0],H=M[1],P=Object(a.useState)({stundenlohn:50,festmeterpreis:50}),E=Object(i.a)(P,2),G=E[0],K=E[1],T=Object(a.useState)(!1),W=Object(i.a)(T,2),J=W[0],Q=W[1];return Object(a.useEffect)((function(){J&&s.a.render(Object(b.jsx)(V,{anrede:n,firma:d,name:O,adresse:v,steuern:B,preise:D,lohn:G}),document.getElementById("root"))})),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"",children:Object(b.jsx)(S,{})}),Object(b.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"myVideo",children:Object(b.jsx)("source",{src:y,type:"video/mp4"})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-header board-header",children:Object(b.jsxs)("h4",{children:["Hallo Stephan! Das ist dein Rechnungsprogramm ",Object(b.jsx)(z.a,{})]})}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Q(!0)},children:[Object(b.jsxs)(l.a,{container:!0,spacing:1,children:[Object(b.jsx)(F,{setFirma:o,firma:d}),Object(b.jsx)(m,{anrede:n,setAnrede:r}),Object(b.jsx)(A,{setName:x,name:O}),Object(b.jsx)(k,{setAdresse:w,adresse:v}),Object(b.jsx)(C,{setSteuern:R,steuern:B}),Object(b.jsx)(L,{setLohn:K,lohn:G})]}),Object(b.jsx)(q,{setPreise:H,preise:D}),Object(b.jsx)("hr",{}),Object(b.jsx)(f.a,{type:"submit",color:"primary",variant:"contained",children:"Rechnung erstellen"})]})})]})})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,450)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(W,{})}),document.getElementById("root")),J()}},[[403,1,2]]]);
//# sourceMappingURL=main.a99a846a.chunk.js.map