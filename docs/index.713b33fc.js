!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequire5d32;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequire5d32=a),a.register("4G3qk",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var n,o,a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),a.register("260Jh",function(t,r){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,o={};n=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),a("4G3qk").register(JSON.parse('{"ceDhw":"index.713b33fc.js","4M8Gf":"icon-add-order.d5dcde0a.png","kSZwU":"icon-cart.dd455062.png","8HtV0":"icon-order.5ea58f4f.png","kVJvh":"admin.4d7b58db.js"}'));var c={};c=a("260Jh").getBundleURL("ceDhw")+a("4G3qk").resolve("4M8Gf");var i={};i=a("260Jh").getBundleURL("ceDhw")+a("4G3qk").resolve("kSZwU");class d{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.itemId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let o=document.createElement("div");o.classList="product-item__content";let a=document.createElement("h3");a.classList="product-item__content_desc",a.textContent=e.itemName;let c=document.createElement("p");c.classList="product-item__content_part-number",c.textContent=e.itemPN;let d=document.createElement("div");d.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.itemId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(i),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),d.appendChild(l),d.appendChild(s),o.appendChild(a),o.appendChild(c),o.appendChild(d),r.appendChild(n),r.appendChild(o),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.itemId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let o=document.createElement("div");o.classList="product-card__top-wrapper";let a=document.createElement("div");a.classList="product-card__img-wrapper";let i=document.createElement("img");i.classList="product-card__img",i.src=this.controller.getUrlByNameLocal(e.itemImg);let d=document.createElement("div");d.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let u=document.createElement("h3");u.classList="product-card__part-number",u.textContent=e.itemPN;let p=document.createElement("p");p.classList="product-card__support-txt",p.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="product-card__condition",g.textContent=e.itemCondition;let L=document.createElement("p");L.classList="product-card__support-txt",L.textContent="Certification: ";let _=document.createElement("h3");_.classList="product-card__certification",_.textContent=e.itemCertification;let I=document.createElement("p");I.classList="product-card__support-txt",I.textContent="Availability: ";let y=document.createElement("h3");y.classList="product-card__availability",y.textContent=e.itemLeadTime;let E=document.createElement("button");E.classList="product-card__add-to-cart-btn",E.id=`add-to-cart-btn_${e.itemId}`;let f=document.createElement("img");f.src=/*@__PURE__*/t(c),f.alt="Select";let b=document.createElement("span");b.innerText=" Add to Cart";let w=document.createElement("div");w.classList="product-card__bottom-wrapper";let P=document.createElement("h3");P.classList="product-card__description",P.textContent="Product Description";let k=document.createElement("p");// TEST-TBS REMOVE FOR PROD
// console.log("productCardMain: ", productCardMain);
return k.classList="product-card__description-text",k.textContent=e.itemDescription,// TO-DO STARTED
a.appendChild(i),l.appendChild(s),l.appendChild(m),l.appendChild(u),l.appendChild(p),l.appendChild(h),l.appendChild(C),l.appendChild(g),l.appendChild(L),l.appendChild(_),l.appendChild(I),l.appendChild(y),E.appendChild(f),E.appendChild(b),d.appendChild(l),d.appendChild(E),o.appendChild(a),o.appendChild(d),w.appendChild(P),w.appendChild(k),r.appendChild(n),r.appendChild(o),r.appendChild(w),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=a("260Jh").getBundleURL("ceDhw")+a("4G3qk").resolve("8HtV0");class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let r=document.createElement("button");return r.classList="cart-link-btn",r.id=`cart-link-btn_${t}`,r.style=`background-image: url(${e});`,r};// Right Container - Create Cart Products Icons Block
createCartProductItemsBlock=e=>{let t=document.createElement("div");// Right Container - Render Cart Icons
// console.log("Action: Right Container - Render Cart Icons");
for(let r of(t.classList="cart-links-wrapper",e)){// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject.itemId: ", productObject.itemId);
let e=this.controller.getImageByProductId(r.itemId),n=this.controller.getUrlByNameLocal(e),o=this.createCartItemButton(n,r.itemId);t.appendChild(o)}return t};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let r=document.createElement("button");r.classList="cart-goto-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Select";let o=document.createElement("span");return o.innerText=" Cart",// Append elemens to respective parents
r.appendChild(n),r.appendChild(o),e.appendChild(r),e};// Right Container - Create "Proceed To Checkout" button
createProceedToCheckoutBtn=()=>{let e=document.createElement("div");e.classList="cart-checkout-btn-wrapper";let r=document.createElement("button");r.classList="cart-checkout-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Checkout";let o=document.createElement("span");return o.innerText=" Checkout",// Append elemens to respective parents
r.appendChild(n),r.appendChild(o),e.appendChild(r),e};// Right Container - create total amount block
createTotalAmountBlock=e=>{let t=document.createElement("div");t.classList="cart-total-amount-wrapper";let r=document.createElement("p");return r.classList="cart-total-amount",r.id="cart-total-amount",r.innerText=`Total: $${e.total}`,t.appendChild(r),t};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// Create "Cart" title
let t=this.createCartSummaryTitle(),r=this.createCartProductItemsBlock(e);t.appendChild(r);// Create "Go To Cart" button
let n=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(n),t};// Right Container - Render Cart Summaary
createNewCartSummaryWithPrice=(e,t)=>{// Create "Cart" title
let r=this.createCartSummaryTitle(),n=this.createCartProductItemsBlock(e),o=this.createTotalAmountBlock(t),a=this.createProceedToCheckoutBtn();// TEST-TBS - REMOVE FOR PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return r.appendChild(n),r.appendChild(o),r.appendChild(a),r};// Left Container - Create Product Item Card block
createProductCardForCart=(e,t)=>{// Create elements
let r=document.createElement("div");r.classList="cart-item",// TO-DO : verify if "itemId" is better to use instead of "docId" here:
r.id=`cart-item_${e.itemId}`;let n=document.createElement("div");n.classList="cart-item__img-wrapper";let o=document.createElement("img");o.classList="cart-item__img",o.src=this.controller.getUrlByNameLocal(e.itemImg);let a=document.createElement("div");a.classList="cart-item__summary-wrapper";let c=document.createElement("div");c.classList="cart-item__summary";let i=document.createElement("div");i.classList="cart-item__element-wrapper";let d=document.createElement("h1");d.classList="cart-item__product-name",d.textContent=e.itemName;let l=document.createElement("div");l.classList="cart-item__element-wrapper";let s=document.createElement("p");s.classList="cart-item__support-txt",s.textContent="Part Number: ";let m=document.createElement("h3");m.classList="cart-item__part-number",m.textContent=e.itemPN;let u=document.createElement("div");u.classList="cart-item__element-wrapper";let p=document.createElement("p");p.classList="cart-item__support-txt",p.textContent="Condition: ";let h=document.createElement("h3");h.classList="cart-item__condition",h.textContent=e.itemCondition;let C=document.createElement("div");C.classList="cart-item__element-wrapper";let g=document.createElement("p");g.classList="cart-item__support-txt",g.textContent="Certification: ";let L=document.createElement("h3");L.classList="cart-item__certification",L.textContent=e.itemCertification;let _=document.createElement("div");_.classList="cart-item__element-wrapper";let I=document.createElement("p");I.classList="cart-item__support-txt",I.textContent="Availability: ";let y=document.createElement("h3");y.classList="cart-item__availability",y.textContent=e.itemLeadTime;let E=document.createElement("div");E.classList="cart-item__price-qty";let f=document.createElement("h3");f.classList="cart-item__product-price",f.setAttribute("data-price-qty-id",e.itemId),f.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`;let b=document.createElement("div");b.classList="cart-element__qty-mod_wrapper",b.id=`qty-mod_${e.itemId}`;let w=document.createElement("button");w.classList="cart-element__qty-mod_deduct-btn",w.innerText=" - ",w.id=`qty-deduct-btn_${e.itemId}`;let P=document.createElement("p");P.classList="cart-element__qty-mod_qty",P.id=`qty-indicator_${e.itemId}`,P.innerText=t;let k=document.createElement("button");// console.log("productCardMain: ", productCardMain);
return k.classList="cart-element__qty-mod_add-btn",k.innerText=" + ",k.id=`qty-add-btn_${e.itemId}`,// Assembly HTML code:
n.appendChild(o),i.appendChild(d),c.appendChild(i),l.appendChild(s),l.appendChild(m),c.appendChild(l),u.appendChild(p),u.appendChild(h),c.appendChild(u),C.appendChild(g),C.appendChild(L),c.appendChild(C),_.appendChild(I),_.appendChild(y),c.appendChild(_),b.appendChild(w),b.appendChild(P),b.appendChild(k),E.appendChild(f),E.appendChild(b),c.appendChild(E),a.appendChild(c),r.appendChild(n),r.appendChild(a),r};// To-DO items:
createCartPage=e=>{let t=document.createElement("div");t.classList="product-card";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");n.innerText="Cart";let o=document.createElement("div");for(let t of(o.classList="cart-items-wrapper",e)){// console.log(
//     "productItem to pass to getProductObjectById() function: ",
//     productItem
// );
// console.log("productItem.itemID: ", productItem.itemId);
let e=this.controller.getProductObjectById(t.itemId);// console.log("productData: ", productData);
o.appendChild(this.createProductCardForCart(e,t.qty))}return t.appendChild(r),t.appendChild(n),t.appendChild(o),t};updatePartQuantity=(e,t)=>{// Find "price x qty" element by attribute:
let r=document.querySelector(`[data-price-qty-id="${e.itemId}"]`);r&&(r.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`);// Find "qty indicator" element by id:
let n=document.getElementById(`qty-indicator_${e.itemId}`);n&&(n.innerText=t)};updateTotalPrice=e=>{// Find "Total price" element by ID
let t=document.getElementById("cart-total-amount");t&&(t.innerText=`Total: $${e}`)}}class m{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=a("9zRuU");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class g{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")};getPriceByProductId=(e,t)=>{let r=e.filter(e=>e.itemId===t);// console.log("productById: ", productById);
// console.log("productById[0]: ", productById[0]);
return r[0].itemPrice};updateCartPriceVariable=(e,t,r,n)=>{let o=0,a=0;for(let t of e)o+=t.qty*this.getPriceByProductId(r,t.itemId);return a=o*n,t.items=o,t.handling=a,t.total=o+a,console.log("new sessionIdCartPrice: ",t),this.controller.handleViewOfTotalPrceInCart(t.total),t};changeQtyInCart=(e,t,r)=>{for(let n of(// TEST-TBS REMOVE IN PROD
console.log("sessionIdCart: ",e),e))if(n.itemId===t){if(n.qty+r>0)n.qty+=r,console.log(`MODEL: try to update a [*** product *** ]: ${n} in database.cartsData`),this.controller.handleAddDocToFirestore("cartsData",n),this.controller.handleViewOfPartQty(t,n.qty);else{confirm("Hi there, do you like to delete item from cart?");// Get docId by itemId
let r=this.controller.getDocIdFromArrayByItemId(e,t);console.log(`MODEL: TRY TO DELETE PRODUCT WITH DocID ${r} from database.cartsData`),this.controller.handleDeleteDocFromFirestore("cartsData",r),// Delete object element with docId from array:
e=this.controller.deleteObjectFromArrayByDocId(e,r),this.controller.renderCartSummary(e)}}return e};// Add new product to cart:
addProductToCart=(e,t,r)=>{// Check if itemId is already in cart - add qty then
let n=this.controller.getDocIdFromArrayByItemId(e,t);if(n)this.changeQtyInCart(e,t,1);else{let n={docId:this.controller.handleNewIdGeneration(),itemId:t,qty:1,userId:r};console.log(`MODEL: try to add a [*** newCartElement *** ]: ${n} to database.cartsData`),this.controller.handleAddDocToFirestore("cartsData",n),e.push(n),console.log("an updated [*** sessionIdCart ***]: ",e)}return e}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class _{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelUser is connected!")};getSessionIdCustomerByCustomerId=(e,t)=>{let r=t.filter(t=>t.custId===e);return r[0]}}var I=a("ljOiA");// Init database instance (dataBase):
let y={},E="",f={},b={},w=[],P=[],k={items:8e5,handling:8e3,total:808e3},v=document.createElement("div");v.innerHTML="";let T=document.createElement("div");T.innerHTML="";let B=document.createElement("div");B.innerHTML="";// Init cross-ref Map: image - url
let D=new Map,x=new class{constructor(){this.viewProducts=new d(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new u,this.viewSuperadmin=new p,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new g(this),this.modelOrders=new L,this.modelUser=new _,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelUser.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),I.dbCollectionNames))y[e]=await this.modelFirebase.get(e),console.log(`[*** dataBase.${e} ***] :`,y[e]);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),y.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
D.set(e.itemImg,t)}console.log("Assigned to [*** sessionIdNumber ***]: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionIdNumber a first ID from DB (usersData[0])
E=y.usersData[0].userId),console.log("[*** sessionIdUser ***] initiated: ",// Assign to sessionIdUser a first element of the usersData[0]
f=y.usersData[0]),// Get sessionIdCustomer data by customer's ID
this.getSessionIdCustomerData(),console.log("[*** sessionIdCustomer ***] initiated: ",b),// Alert - Popup inform the test name usage
// This section was updated during last commit but failed to deploy
// ACTION NEEDED: UNCOMMENT BELOW FOR PRODUCTION:
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionIdNumber} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.renderProductItemsList(y.productItems),// Get values to Sesstion Variables: 1-2
// 1. Get cart items by sesstion user ID:
P=this.getCartItemsByUserID(E),console.log(`Cart items [*** sessionIdCart ***] for User ID ${E}: `,P),// 2. Get orders list by user ID:
w=this.getOrdersByUserID(E),console.log(`Orders History [*** sessionIdOrders ***] for User ID ${E}: `,w),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(P,w),this.attachEventListenrs();// TEST-TBS ONLY:
};// Generate unique ID
handleNewIdGeneration=()=>this.modelFirebase.generateUniqueId();// Get sessionIdCustomer data by customer's ID
getSessionIdCustomerData=()=>{b=this.modelUser.getSessionIdCustomerByCustomerId(f.custId,y.customersData)};// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};deleteObjectFromArrayByDocId=(e,t)=>{let r=e.filter(e=>e.docId===t);return -1!==r?(e.splice(r,1),console.log("Deleted element/document with docId = ",t)):console.log("Not found element/document with docId = ",t),e};getUrlByNameLocal=e=>D.get(e);getCartItemsByUserID=e=>y.cartsData.filter(t=>t.userId===e);getOrdersByUserID=e=>y.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=y.productItems.filter(t=>t.itemId===e);// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject[0].itemImg: ", productObject[0].itemImg);
return t[0].itemImg};getProdIdFromElementId=e=>e.split("_")[1];getProductObjectById=e=>{// Filter product array => single object array
let t=y.productItems.filter(t=>t.itemId===e);// return object
return t[0]};getDocIdFromArrayByItemId=(e,t)=>{let r=e.filter(e=>e.itemId===t);return(// TEST-TBS - REMOVE FOR PROD
console.log("[*** filteredArray ***]: ",r),0===r.length)?null:r[0].docId};// Left Container - Render product items
renderProductItemsList=e=>{let t=document.createElement("div");t.innerHTML="",t.appendChild(this.viewProducts.createProductItemsList(e)),// TEST-TBS - REMOVE FOR PROD
// Reset global variable:
// productsList.innerHTML = "";
// productsList.appendChild(productItemsList);
// TEST-TBS - REMOVE FOR PROD
// console.log("productsList: ", productsList);
// console.log("productsList: ", productsList.innerHTML);
this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Order CART
renderCartSummary=e=>{let t=this.viewCart.createCartPage(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// TEST-TBS - REMOVE FOR PROD
// Left Container - Re-Render product Items
// returnRenderProductsList = () => {
//     // TEST-TBS - REMOVE FOR PROD
//     console.log("productsList: ", productsList.innerHTML);
//     this.clearContainerLeft();
//     this.containerLeftNode.appendChild(productsList);
// };
// Right Container - Render Cart (no price) and Orders Summaries
renderCartAndOrdersSummary=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryNoTotal(e),o=this.viewOrders.createOrdersHistorySummary(t);// TEST-TBS - REMOVE IN PROD
console.log("cartSummaryNoTotal: ",n),console.log("ordersHistorySummary: ",o),r.appendChild(n),r.appendChild(o),this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Right Container - Render Cart (with price)
renderCartSummaryWithPrice=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryWithPrice(e,t);r.appendChild(n),// TEST-TBS - REMOVE IN PROD
console.log("cart Summary with Total: ",r),this.clearContainerRight(),this.containerRightNode.appendChild(r)};renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Support funtions for buttons handler:
// Handle click of complex element by picking it's parent element class
findAncestorByClass=(e,t)=>{let r=e;for(;r&&!r.classList.contains(t);)r=r.parentElement;return r};// "< Back to Products" button
handleGotoProductsBtn=()=>{this.renderProductItemsList(y.productItems),this.renderCartAndOrdersSummary(P,w)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=e=>{let t=this.getProdIdFromElementId(e.id);console.log(`TO-DO: Add product with ID ${t} to cart.`),P=this.modelCart.addProductToCart(P,t,E),this.renderCartAndOrdersSummary(P,w)};// "Go to Cart" button at right panel
handleGotoCartBtn=()=>{console.log("Received command to display CART."),// TEST-TBD
this.modelCart.updateCartPriceVariable(P,k,y.productItems,b.custHandlingFee),this.renderCartSummary(P),this.renderCartSummaryWithPrice(P,k)};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT")};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display CARD for product ID: ",e.id);let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r),this.renderCartAndOrdersSummary(P,w)};handleDisplayHistoricalOrder=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display ORDER with ID: ",e.id)};handleQtyChangeBtn=(e,t,r)=>{// TEST-TBS REMOVE IN PROD
console.log("Deduct qty for product ID: ",e.id),console.log("sessionIdCart: ",t);let n=this.getProdIdFromElementId(e.id);// TEST-TBS REMOVE IN PROD
console.log("itemId: ",n),// TEST-TBS REMOVE IN PROD
console.log("sessionIdCart: ",t=this.modelCart.changeQtyInCart(t,n,r)),k=this.modelCart.updateCartPriceVariable(t,k,y.productItems,b.custHandlingFee)};handleViewOfPartQty=(e,t)=>{// TEST-TBS REMOVE IN PROD
console.log("Got comand to update product qty with:"),console.log("Product ID: ",e),console.log("New QTY: ",t);let r=this.getProductObjectById(e);this.viewCart.updatePartQuantity(r,t)};handleViewOfTotalPrceInCart=e=>{this.viewCart.updateTotalPrice(e)};handleButtonsClickLeft=e=>{let t=e.target;// "< Back to Products" button
if(t.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "Add to Cart" button at detailed product card (page)
let r=t.closest(".product-card__add-to-cart-btn");if(r){this.handleAddToCartBtn(r);return}// "Add to Cart" button at short product card (main page)
let n=this.findAncestorByClass(t,"product-item__content_price-btn");if(n){this.handleAddToCartBtn(n);return}// Product card as "button" at main page
let o=this.findAncestorByClass(t,"product-item");// Qty deduct button at Cart page
if(o&&this.handleProductItem(o),t.classList.contains("cart-element__qty-mod_deduct-btn")){this.handleQtyChangeBtn(t,P,-1);return}// Qty add button at Cart page
if(t.classList.contains("cart-element__qty-mod_add-btn")){this.handleQtyChangeBtn(t,P,1);return}};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn(P);// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn()};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)};// Database support functions
handleAddDocToFirestore=(e,t)=>{console.log(`Controller: got a requst to add [object]: ${t} to [collction]: ${e}`),this.modelFirebase.addDocToFirestore(e,t)};handleUpdateDocInFirestore=(e,t)=>{console.log(`Controller: got a requst update [object]: ${t} in [collction]: ${e}`),this.modelFirebase.updateDocInFirestore(e,t)};handleDeleteDocFromFirestore=(e,t)=>{console.log(`Controller: got a requst to delete [object]: ${t} from [collction]: ${e}`),this.modelFirebase.deleteDocFromFirestore(e,t)}};try{x.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}}();//# sourceMappingURL=index.713b33fc.js.map

//# sourceMappingURL=index.713b33fc.js.map
