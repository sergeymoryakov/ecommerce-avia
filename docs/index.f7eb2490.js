!function(){function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=o.parcelRequire5d32;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},o.parcelRequire5d32=i),i.register("4G3qk",function(t,o){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var r,n,i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("260Jh",function(t,o){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),i("4G3qk").register(JSON.parse('{"ceDhw":"index.f7eb2490.js","kSZwU":"icon-cart.dd455062.png","8HtV0":"icon-order.5ea58f4f.png","g125u":"admin.a26f408d.js"}'));// import iconAddOrder from "../../other_assets/icon-add-order.png";
var c={};c=i("260Jh").getBundleURL("ceDhw")+i("4G3qk").resolve("kSZwU");class s{constructor(e){this.controller=e,this.containerLeftNode=document.getElementById("containerLeft");// this.containerRightNode = document.getElementById("containerRight");
}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};createProductItemCard=e=>{// Create elements
let o=document.createElement("div");o.classList="product-item",o.id=e.docId;let r=document.createElement("img");r.classList="product-item__img",r.src=this.controller.getUrlByNameLocal(e.itemImg);let n=document.createElement("div");n.classList="product-item__content";let i=document.createElement("h3");i.classList="product-item__content_desc",i.textContent=e.itemName;let s=document.createElement("p");s.classList="product-item__content_part-number",s.textContent=e.itemPN;let a=document.createElement("div");a.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let d=document.createElement("button");d.classList="product-item__content_price-btn";let u=document.createElement("img");return u.classList="product-item__content_price-btn-img",u.src=/*@__PURE__*/t(c),u.alt="Select",// Append elemens to respective parents
d.appendChild(u),a.appendChild(l),a.appendChild(d),n.appendChild(i),n.appendChild(s),n.appendChild(a),o.appendChild(r),o.appendChild(n),o};// Left Container - Render product items
renderProductItems=e=>{// Clear container
this.clearContainerLeft();// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let o of(t.classList="product-list",e)){let e=this.createProductItemCard(o);t.appendChild(e)}// Render product list container
this.containerLeftNode.appendChild(t)}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
i("6m2hf");var a={};a=i("260Jh").getBundleURL("ceDhw")+i("4G3qk").resolve("8HtV0");class l{constructor(e){this.controller=e,this.containerRightNode=document.getElementById("containerRight")}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Clear container
clearContainerRight=()=>{this.containerRightNode.innerHTML=""};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=e=>{let t=document.createElement("button");return t.classList="cart-link-btn",t.style=`background-image: url(${e});`,t};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let o=document.createElement("button");o.classList="cart-goto-btn";// TEST-TBS :
// console.log("iconOrder: ", iconOrder);
let r=document.createElement("img");r.src=/*@__PURE__*/t(a),r.alt="Select";let n=document.createElement("span");return n.innerText=" Cart",// Append elemens to respective parents
o.appendChild(r),o.appendChild(n),e.appendChild(o),e};// Right Container - Render Cart Summaary
renderCartSummaryNoTotal=e=>{this.clearContainerRight();// Right Container - Render Cart Title
let t=this.createCartSummaryTitle(),o=document.createElement("div");for(let t of(o.classList="cart-links-wrapper",// Right Container - Render Cart Icons
console.log("Action: Right Container - Render Cart Icons"),e)){console.log("productObject: ",t),console.log("productObject.itemId: ",t.itemId);let e=this.controller.getImageByProductId(t.itemId);// FOR TEST-TBS
console.log("productImage: ",e);let r=this.controller.getUrlByNameLocal(e);// FOR TEST-TBS
console.log("imageURL: ",r);let n=this.createCartItemButton(r);o.appendChild(n)}t.appendChild(o);// Right Container - Render Go-To-Cart Button
let r=this.createGoToCartButton();t.appendChild(r),this.containerRightNode.appendChild(t)}}class d{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class m{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=i("9zRuU");class g{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class f{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelAdmin is connected!")}}var k=i("ljOiA");// Init database instance (dataBase):
let w={},C="",I={},E={},b=new Map,v=new class{constructor(){this.viewProducts=new s(this),this.viewCart=new l(this),this.viewOrders=new d,this.viewAdmin=new u,this.viewSuperadmin=new m,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new g,this.modelCart=new p,this.modelOrders=new L,this.modelAdmin=new f}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelAdmin.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),k.dbCollectionNames))w[e]=await this.modelFirebase.get(e);for(let e of(// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("dataBase{}: ", dataBase);
// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),w.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
b.set(e.itemImg,t)}console.log("Assigned to sessionId: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionId a first ID from DB
C=w.usersData[0].userId),// Alert - Popup inform the test name usage
// This section was updated during last commit but failed to deploy
confirm(`Hi there, this application was set for demonstration purpose, therefore a User ID ${C} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`),// Left Container - Render product items
this.viewProducts.renderProductItems(w.productItems),// Get cart items by sesstion user ID:
I=this.getCartItemsByUserID(C),console.log(`Cart items (sessionIdCart) for User ID ${C}: `,I),// Get orders list by user ID:
E=this.getOrdersByUserID(C),console.log(`Orders History (sesstionOrders) for User ID ${C}: `,E),// Right Container - Render Cart Summary
await this.viewCart.renderCartSummaryNoTotal(I);// Right Container - Render Cart Title
// Right Container - Render Cart Icons
// Right Container - Render Go-To-Cart Button
// Right Container - Render Orders Title
// Right Container - Render Order Links
// Attach Event Listeners (Products)
// Attach Event Listeners (Cart Icons)
// Attach Event Listeners (Order Links)
// TEST & TBS ITEMS
};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};getUrlByNameLocal=e=>b.get(e);getCartItemsByUserID=e=>w.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>w.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=w.productItems.filter(t=>t.id===e);return console.log("productObject: ",t),console.log("productObject[0].itemImg: ",t[0].itemImg),t[0].itemImg}};try{v.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=index.f7eb2490.js.map

//# sourceMappingURL=index.f7eb2490.js.map
