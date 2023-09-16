!function(){let e;var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=t.parcelRequire5d32;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire5d32=o);// SET VIEW MODULE:
class a{constructor(){this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight"),// For Test - TBS only:
this.testBtnNode=document.getElementById("testBtn"),this.backupBtnNode=document.getElementById("backupBtn"),this.getServerBtnNode=document.getElementById("getServerBtn"),this.getLocalBtnNode=document.getElementById("getLocalBtn")}checkModuleLinkage=()=>{console.log("HELLO, AdminView is connected!")};clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};createHeaderRow=e=>{let t=document.createElement("tr"),i=document.createElement("th");i.classList="db-section__table_cell",t.appendChild(i);let n=document.createElement("th");n.classList="db-section__table_cell",t.appendChild(n);// Sort keys:
let o=Object.keys(e).sort();// create header cells in loop
for(let e of o){let i=document.createElement("th");i.classList="db-section__table_cell",i.innerText=`${e}`,t.appendChild(i)}// Add another empty element at the end of the row:
let a=document.createElement("th");return a.classList="db-section__table_cell",t.appendChild(a),t};// NOTE: isBackup - a backupInstancevalidator:
// 0 - dataInstance
// 1 - backupInstance
createDataRow=(e,t,i)=>{// FOR TBS ONLY:
// console.log("doc.id: ", doc.id);
// console.log("doc.docId: ", doc.docId);
let n=document.createElement("tr"),o=document.createElement("td");o.classList="db-section__table_cell";let a=document.createElement("button");a.classList="db-section__table_btn add-btn",a.id=`${i}_${t}_${e.docId}_addBtn`,a.innerText="+",o.appendChild(a),n.appendChild(o);let d=document.createElement("td");d.classList="db-section__table_cell";let s=document.createElement("button");s.classList="db-section__table_btn updt-btn",s.id=`${i}_${t}_${e.docId}_updtBtn`,s.innerText="u",d.appendChild(s),n.appendChild(d);// Sort keys
let l=Object.keys(e).sort();for(let o of l){let a=e[o],d=document.createElement("td");d.classList="db-section__table_cell",d.id=`${i}_${t}_${e.docId}_${o}`;let s=document.createElement("input");s.type="text",s.id=`${i}_${t}_${e.docId}_${o}_input`,s.value=`${a}`,d.appendChild(s),n.appendChild(d)}// Add another button element to the end of row:
let c=document.createElement("td");c.classList="db-section__table_cell";let r=document.createElement("button");return r.classList="db-section__table_btn del-btn",r.id=`${i}_${t}_${e.docId}_delBtn`,r.innerText="-",c.appendChild(r),n.appendChild(c),n};createTable=(e,t,i)=>{// Create new Table
let n=document.createElement("table"),o=this.createHeaderRow(e[0]);// create Data Rows and add to Table
for(let a of(n.appendChild(o),e)){let e=this.createDataRow(a,t,i);n.appendChild(e)}return n};renderTable=(e,t,i)=>{let n=document.createElement("div");n.classList="db-section";let o=document.createElement("h2");o.classList="db-section__title",o.id=`${i}_${t}`,o.innerText=t;let a=this.createTable(e,t,i);a.classList="db-section__table",n.appendChild(o),n.appendChild(a),this.containerLeftNode.appendChild(n)};createMenuBtn=e=>{let t=document.createElement("li");t.classList="menu-btn-wrapper";let i=document.createElement("a");return i.classList="menu-btn",i.href=`#0_${e}`,i.innerText=`${e}`,t.appendChild(i),t};createMenu=e=>{// Init menu wrapper:
let t=document.createElement("div");t.classList="menu-section";// Add menu title:
let i=document.createElement("h2");i.classList="menu-title",i.innerText="Tables",t.appendChild(i);// Create menu list:
let n=document.createElement("ul");for(let t of e){let e=this.createMenuBtn(t);n.appendChild(e)}return(// Add menu to wrapper:
t.appendChild(n),t)};renderMenu=e=>{this.clearContainerRight();let t=this.createMenu(e);this.containerRightNode.appendChild(t)}}// SET MODEL MODULE:
class d{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, AdminModel is connected!")};// New ID Generator:
generateNewId(e){return[...Array(e)].map(()=>Math.floor(36*Math.random()).toString(36).toUpperCase()).join("")}}// Import the functions you need from the SDKs you need
var s=o("ljOiA"),l=o("fkNhc"),c=o("6m2hf");let r=(0,l.initializeApp)(s.firebaseConfig),u=(0,c.getFirestore)(r);class m{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, AdminFirebase is connected!")};get=async e=>{let t=await (0,c.getDocs)((0,c.collection)(u,e)),i=[];// console.log(newCollection);
return t.forEach(e=>{// console.log(`docId: "${doc.id}"`);
let t={};t.docId=e.id;let n=e.data();for(let e in n)t[e]=n[e];i.push(t)}),i};addDocToFirestore=async(e,t)=>{try{let i=(0,c.doc)(u,e,t.docId);await (0,c.setDoc)(i,t),console.log("Item/document succesfully added with docId: ",t.docId)}catch(e){console.error("Error adding document: ",e)}};updateDocInFirestore=async(e,t)=>{try{let i=(0,c.doc)(u,e,t.docId);await (0,c.updateDoc)(i,t),console.log("Item/document succesfully updated in Firestore, docId: ",t.docId)}catch(e){console.error("Error updating document in Firestore: ",e)}};deleteDocFromFirestore=async(e,t)=>{try{await (0,c.deleteDoc)((0,c.doc)(u,e,t))}catch(e){console.error("Error deleting document: ",e)}}}let p="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var h={randomUUID:p};let b=new Uint8Array(16),g=[];for(let e=0;e<256;++e)g.push((e+256).toString(16).slice(1));var I=function(t,i,n){if(h.randomUUID&&!i&&!t)return h.randomUUID();t=t||{};let o=t.random||(t.rng||function(){// lazy load so that environments that need to polyfill have a chance to do so
if(!e&&!// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
(e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(b)})();// Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,i){n=n||0;for(let e=0;e<16;++e)i[n+e]=o[e];return i}return function(e,t=0){// Note: Be careful editing this code!  It's been tuned for performance
// and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
return g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]}(o)},s=o("ljOiA");let y={usersData:[{docId:"55EGDL6GNBL2",userPhone:"+1 898 9289289",userActive:!0,userAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",transId:"jkjur-tewvn-00001",custId:"c001",userAdmin:!0,userEmail:"matt.y@aerosupplyplus.aero",userName:"Mattew Yampolski",id:"1001",transDate:"20230815"},{docId:"76OFRV7ULWVW",custId:"c001",transDate:"20230815",userAdmin:!0,transId:"jkjur-tewvn-00001",userActive:!0,userAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",userPhone:"+1 898 9289289",userName:"Mattew Yampolski",id:"1001",userEmail:"matt.y@aerosupplyplus.aero"}],customersData:[{docId:"2X9D9SC4VWA1",custOrders:["100001","100002","100003"],custPaymentTerms:["wire","card","net30"],custLegalName:"AeroSupplyPlus LLC",custAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custHandlingFee:.015,custActive:!0,custPhone:"+1 898 9289289",custKycDate:"20230812",custCode:"aespl",transDate:"20230812",custContactId:"1001",transId:"jkjur-tewvn-00002",id:"c001",custKycChecked:!0,custEmail:"supply@aerosupplyplus.aero",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custPaymentMethod:"card"}],cartsData:[{docId:"M1EADW9GPWLS",qty:2,itemId:"0032-0001-000",id:"1001"}],ordersData:[{docId:"9UG3WA03ALRD",transDate:"20230828",id:"100003",orderDateCompleted:"20230829",orderCurrency:"$",transId:"jkjur-tewvn-00013",orderCustId:"c001",orderPaymentDone:"20230828",orderPaymentMethod:"card",orderPriceTotal:1375360,orderPaymentDeadline:"20230829",orderDatePlaced:"20230828",orderPriceHandling:378,orderDateReady:"20230828",orderPriceItems:1374982,orderUserId:"1001"}],orderItemsData:[{docId:"6OIZH5BEOT1N",orderId:"100001",itemId:"0032-0001-000",qty:2,id:"100001"}],productItems:[{docId:"4JNHU091B3U4",itemQty:"50",itemPN:"BS30-737NG-3254",itemSN:"various",itemCat:"component",itemCertification:"EASA, FAA, CAAC",transDate:"20230812",itemPrice:"18130",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",itemCondition:"New",id:"0032-0001-000",itemImg:"",itemCurrency:"$",itemLeadTime:"on stock",transId:"jkjur-tewvn-00003",itemName:"Wheel Main Assy"},{docId:"DIF5CWS50TES",itemCurrency:"$",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",itemCat:"component",id:"0032-0001-000",itemCertification:"EASA, FAA, CAAC",itemPrice:"18130",itemPN:"BS30-737NG-3254",itemImg:"",itemCondition:"New",itemQty:"50",itemName:"Wheel Main Assy",transId:"jkjur-tewvn-00003",itemLeadTime:"on stock",itemSN:"various",transDate:"20230812"},{docId:"QLKOPTEJJMBX",itemName:"Wheel Main Assy",itemCertification:"EASA, FAA, CAAC",itemQty:"50",itemSN:"various",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",itemPrice:"18130",transDate:"20230812",itemCat:"component",itemCondition:"New",id:"0032-0001-000",itemCurrency:"$",transId:"jkjur-tewvn-00003",itemLeadTime:"on stock",itemPN:"BS30-737NG-3254",itemImg:""}]},f=!1,C={},L=new class{constructor(){this.adminView=new a,this.adminModel=new d,this.adminFirebase=new m}initializeAppMain=async()=>{for(let e of(console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.adminView.checkModuleLinkage(),this.adminModel.checkModuleLinkage(),this.adminFirebase.checkModuleLinkage(),console.log("Action: Import from Firestore to dataInstance:"),s.dbCollectionNames))C[e]=await this.adminFirebase.get(e);this.displayDataInstanceTables(),this.adminView.renderMenu(s.dbCollectionNames),this.attachEventListeners()};generateUniqueId(){return I()}// NOTE: isBackup - a backupInstancevalidator:
// 0 - dataInstance
// 1 - backupInstance
displayDataInstanceTables=()=>{for(let e of(this.adminView.clearContainerLeft(),s.dbCollectionNames))this.adminView.renderTable(C[e],e,0)};displayBackupAndInstanceTables=()=>{for(let e of(this.adminView.clearContainerLeft(),s.dbCollectionNames))this.adminView.renderTable(y[e],e,1),this.adminView.renderTable(C[e],e,0)};// Functions to split elemnt ID (${isBackup}_${arrayName}_${doc.docId}_${key})
// Get Collection (array name) - [0]-th element
getInstanceFromId=e=>e.split("_")[0];// Get Collection (array name) - [0]-th element
getCollectionFromId=e=>e.split("_")[1];// Get Document ID (object) - [1]-st element
getDocFromId=e=>e.split("_")[2];// Get Field (key name) - [2]-nd element
getKeyFromId=e=>e.split("_")[3];// Add duplicate document (element/object)
cloneDocument(e,t){// Find the object by ID
let i=e.find(e=>e.docId===t);if(!i){console.log("Object with provided ID is not located.");return}//  Clone object
let n=JSON.parse(JSON.stringify(i));// return cloned objc
return(// Modify / create unique ID
// clonedObject.docId = this.adminModel.generateNewId(12);
n.docId=this.generateUniqueId(),n)}handleAddBtnClick=e=>{let t=this.getInstanceFromId(e.id),i=this.getCollectionFromId(e.id),n=this.getDocFromId(e.id);console.log(`Request to clone element in ${i}, docId: ${n}.`);let o=[],a=[];"1"===t?(o=y[i],a=C[i]):o=C[i];let d=this.cloneDocument(o,n);console.log("clonedObject: ",d),"1"===t&&a.push(d),console.log(`trying to include clonedObject: ${d} into Collection ${i}`),// try to add new doc (clonedObject) to Firestore (elementCollection):
this.adminFirebase.addDocToFirestore(i,d),o.push(d),f?this.displayBackupAndInstanceTables():this.displayDataInstanceTables()};handleUpdateBtnClick=e=>{let t=this.getInstanceFromId(e.id),i=this.getCollectionFromId(e.id),n=this.getDocFromId(e.id);console.log(`Request to update element in ${i}, docId: ${n}.`);let o=[];o="1"===t?y[i]:C[i];// Locate the object/document to update:
let a=o.find(e=>e.docId===n);if(!a){console.log("Not found element/document with docId = ",n);return}// Locate table row with clicked button
let d=e.closest("tr"),s=d.querySelectorAll("td");// Locate all input fields
s.forEach(e=>{let t=e.querySelector("input");if(t){let e=this.getKeyFromId(t.id),i=t.value;a[e]=i}}),console.log("docToUpdate: ",a),"0"===t&&(console.log(`trying to update element/doc with docId: ${n} in Collection ${i}`),// try to update doc with elementId (docId) in Firestore collection:
this.adminFirebase.updateDocInFirestore(i,a)),f?this.displayBackupAndInstanceTables():this.displayDataInstanceTables()};handleDeleteBtnClick=e=>{let t=this.getInstanceFromId(e.id),i=this.getCollectionFromId(e.id),n=this.getDocFromId(e.id),o=[];console.log(`Request to delete element in ${i}, docId: ${n}.`),"1"===t?o=y[i]:(o=C[i],// If not a backupInstance, remove document from Firestore:
console.log(`trying to delete element/doc with docId: ${n} from Collection ${i}`),// try to delete doc with elementId (docId) from Firestore collection:
this.adminFirebase.deleteDocFromFirestore(i,n));// Remove element/doc from affected array/collection using .splice() method
let a=o.findIndex(e=>e.docId===n);-1!==a?(o.splice(a,1),console.log("Deleted element/document with docId = ",n)):console.log("Not found element/document with docId = ",n),f?this.displayBackupAndInstanceTables():this.displayDataInstanceTables()};handleButtonsClick=e=>{let t=e.target;t.classList.contains("add-btn")&&this.handleAddBtnClick(t),t.classList.contains("updt-btn")&&this.handleUpdateBtnClick(t),t.classList.contains("del-btn")&&this.handleDeleteBtnClick(t)};attachEventListeners(){this.adminView.containerLeftNode.addEventListener("click",this.handleButtonsClick),this.adminView.backupBtnNode.addEventListener("click",async()=>{console.log("call backupData function"),// // FUNCTIONS: SUPPORT AND TBS
function(e){// convert array to JSON format
let t=JSON.stringify(e,null,2),i=new Blob([t],{type:"application/json"}),n=URL.createObjectURL(i),o=Date.now(),a=document.createElement("a");a.href=n,a.download=`backup-${o}.json`,// display backup file name
console.log(`data saved to file 'backup-${o}.json'`),// Trigger the download
document.body.appendChild(a),a.click(),// clean up
window.URL.revokeObjectURL(n),document.body.removeChild(a)}(C)}),this.adminView.getLocalBtnNode.addEventListener("click",async()=>{console.log("Action called: render backup and server data tables."),this.displayBackupAndInstanceTables(),f=!0}),this.adminView.getServerBtnNode.addEventListener("click",async()=>{console.log("Action called: render server data tables."),this.displayDataInstanceTables(),f=!1})}};try{L.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=admin.c23c37e2.js.map

//# sourceMappingURL=admin.c23c37e2.js.map