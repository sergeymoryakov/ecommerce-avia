function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequire5d32;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var c=Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},t.parcelRequire5d32=i),i.register("d5gZm",function(t,o){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var n,i,c={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)c[t[o]]=e[t[o]]},i=function(e){var t=c[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("d5gZm").register(JSON.parse('{"bjFny":"index.066f3b84.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","bssM1":"icon-cc.1b9dfae0.png","5WNTT":"icon-order.5ea58f4f.png","3g8E4":"admin.a20d3aab.js"}')),new URL(i("d5gZm").resolve("3XKo6"),import.meta.url).toString();var c={};c=new URL(i("d5gZm").resolve("jyKjU"),import.meta.url).toString(),new URL(i("d5gZm").resolve("bssM1"),import.meta.url).toString(),new URL(i("d5gZm").resolve("5WNTT"),import.meta.url).toString();class r{constructor(e){this.controller=e,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};createProductItemCard=e=>{var t;// Create elements
let o=document.createElement("div");o.classList="product-item",o.id=e.docId;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let i=document.createElement("div");i.classList="product-item__content";let r=document.createElement("h3");r.classList="product-item__content_desc",r.textContent=e.itemName;let d=document.createElement("p");d.classList="product-item__content_part-number",d.textContent=e.itemPN;let l=document.createElement("div");l.classList="product-item__content_price-block";let s=document.createElement("h3");s.classList="product-item__content_price",s.textContent=`$${e.itemPrice}`;let a=document.createElement("button");a.classList="product-item__content_price-btn";let u=document.createElement("img");return u.classList="product-item__content_price-btn-img",u.src=(t=c)&&t.__esModule?t.default:t,u.alt="Select",// Append elemens to respective parents
a.appendChild(u),l.appendChild(s),l.appendChild(a),i.appendChild(r),i.appendChild(d),i.appendChild(l),o.appendChild(n),o.appendChild(i),o};// Left Container - Render product items
renderProductItems=e=>{// Clear container
this.clearContainerLeft();// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let o of(t.classList="product-list",e)){let e=this.createProductItemCard(o);t.appendChild(e)}// Render product list container
this.containerLeftNode.appendChild(t)}}class d{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")}}class l{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")}}class s{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class a{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var u=i("keq33");class m{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class h{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var L=i("1ggDV");// Init database instance (dataBase):
let f={};// Init cross-ref Map: image - url
const k=new Map,w=new class{constructor(){this.viewProducts=new r(this),this.viewCart=new d,this.viewOrders=new l,this.viewAdmin=new s,this.viewSuperadmin=new a,this.modelFirebase=new u.ModelFirebase,this.modelProducts=new m,this.modelCart=new g,this.modelOrders=new h,this.modelAdmin=new p}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelAdmin.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),L.dbCollectionNames))f[e]=await this.modelFirebase.get(e);for(let e of(// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("dataBase{}: ", dataBase);
// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),f.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
k.set(e.itemImg,t)}// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Check Image URLs - TEST for Images
// this.modelFirebase.checkImageUrls();
// Left Container - Render product items
this.viewProducts.renderProductItems(f.productItems);// Right Container - Render Cart Title
// Right Container - Render Cart Icons
// Right Container - Render Go-To-Cart Button
// Right Container - Render Orders Title
// Right Container - Render Order Links
// Attach Event Listeners (Products)
// Attach Event Listeners (Cart Icons)
// Attach Event Listeners (Order Links)
// Alert - Popup inform the test name usage
// TEST & TBS ITEMS
};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>k.get(e)};try{w.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.066f3b84.js.map

//# sourceMappingURL=index.066f3b84.js.map
