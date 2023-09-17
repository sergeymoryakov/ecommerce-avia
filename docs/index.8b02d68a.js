!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire5d32;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var c={id:e,exports:{}};return t[e]=c,n.call(c.exports,c,c.exports),c.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequire5d32=n);class c{constructor(e){this.controller=e,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};createProductItemCard=e=>{// Create elements
let t=document.createElement("div");t.classList="product-item",t.id=e.docId;let o=document.createElement("img");o.classList="product-item__img",o.src=this.controller.getUrlByNameLocal(e.itemImg);let n=document.createElement("div");n.classList="product-item__content";let c=document.createElement("h3");c.classList="product-item__content_desc",c.textContent=e.itemName;let i=document.createElement("p");i.classList="product-item__content_part-number",i.textContent=e.itemPN;let l=document.createElement("div");l.classList="product-item__content_price-block";let s=document.createElement("h3");s.classList="product-item__content_price",s.textContent=`$${e.itemPrice}`;let r=document.createElement("button");r.classList="product-item__content_price-btn";let a=document.createElement("img");return a.classList="product-item__content_price-btn-img",a.src="../other_assets/Icon-cart.png",a.alt="Select",// Append elemens to respective parents
r.appendChild(a),l.appendChild(s),l.appendChild(r),n.appendChild(c),n.appendChild(i),n.appendChild(l),t.appendChild(o),t.appendChild(n),t};// Left Container - Render product items
renderProductItems=e=>{// Clear container
this.clearContainerLeft();// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let o of(t.classList="product-list",e)){let e=this.createProductItemCard(o);t.appendChild(e)}// Render product list container
this.containerLeftNode.appendChild(t)}}class i{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")}}class l{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")}}class s{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class r{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var a=n("9zRuU");class d{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class m{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var h=n("ljOiA");// Initiate database instance (dataBase):
let L={},p=new Map,k=new class{constructor(){this.viewProducts=new c(this),this.viewCart=new i,this.viewOrders=new l,this.viewAdmin=new s,this.viewSuperadmin=new r,this.modelFirebase=new a.ModelFirebase,this.modelProducts=new d,this.modelCart=new m,this.modelOrders=new u,this.modelAdmin=new g}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelAdmin.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),h.dbCollectionNames))L[e]=await this.modelFirebase.get(e);for(let e of(// FOR TEST AND TBS - REMOVE IN PROD:
console.log("dataBase{}: ",L),// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),L.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t),p.set(e.itemImg,t)}// FOR TEST AND TBS - REMOVE IN PROD:
console.log("imageLinksMap: ",p),// Check Image URLs - TEST for Images
// this.modelFirebase.checkImageUrls();
// Left Container - Render product items
this.viewProducts.renderProductItems(L.productItems);// Right Container - Render Cart Title
// Right Container - Render Cart Icons
// Right Container - Render Go-To-Cart Button
// Right Container - Render Orders Title
// Right Container - Render Order Links
// Attach Event Listeners (Products)
// Attach Event Listeners (Cart Icons)
// Attach Event Listeners (Order Links)
// Alert - Popup inform the test name usage
// TEST & TBS ITEMS
let e=await this.getUrlByNameLocal(L.productItems[0].itemImg);console.log("testURL: ",e)};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>p.get(e)};try{k.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=index.8b02d68a.js.map

//# sourceMappingURL=index.8b02d68a.js.map
