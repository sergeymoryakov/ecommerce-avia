function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},d=r.parcelRequire5d32;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){a[e]=t},r.parcelRequire5d32=d),d.register("d5gZm",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,d={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)d[t[r]]=e[t[r]]},a=function(e){var t=d[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),d("d5gZm").register(JSON.parse('{"bjFny":"index.406ad07c.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","5WNTT":"icon-order.5ea58f4f.png","1riji":"admin.4e4aab7f.js"}'));var i={};i=new URL(d("d5gZm").resolve("3XKo6"),import.meta.url).toString();var c={};c=new URL(d("d5gZm").resolve("jyKjU"),import.meta.url).toString();class o{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.itemId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let a=document.createElement("div");a.classList="product-item__content";let d=document.createElement("h3");d.classList="product-item__content_desc",d.textContent=e.itemName;let i=document.createElement("p");i.classList="product-item__content_part-number",i.textContent=e.itemPN;let o=document.createElement("div");o.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.itemId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(c),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),o.appendChild(l),o.appendChild(s),a.appendChild(d),a.appendChild(i),a.appendChild(o),r.appendChild(n),r.appendChild(a),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.itemId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let a=document.createElement("div");a.classList="product-card__top-wrapper";let d=document.createElement("div");d.classList="product-card__img-wrapper";let c=document.createElement("img");c.classList="product-card__img",c.src=this.controller.getUrlByNameLocal(e.itemImg);let o=document.createElement("div");o.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let u=document.createElement("h3");u.classList="product-card__part-number",u.textContent=e.itemPN;let p=document.createElement("p");p.classList="product-card__support-txt",p.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="product-card__condition",g.textContent=e.itemCondition;let L=document.createElement("p");L.classList="product-card__support-txt",L.textContent="Certification: ";let E=document.createElement("h3");E.classList="product-card__certification",E.textContent=e.itemCertification;let I=document.createElement("p");I.classList="product-card__support-txt",I.textContent="Availability: ";let _=document.createElement("h3");_.classList="product-card__availability",_.textContent=e.itemLeadTime;let y=document.createElement("button");y.classList="product-card__add-to-cart-btn",y.id=`add-to-cart-btn_${e.itemId}`;let P=document.createElement("img");P.src=/*@__PURE__*/t(i),P.alt="Select";let f=document.createElement("span");f.innerText=" Add to Cart";let b=document.createElement("div");b.classList="product-card__bottom-wrapper";let w=document.createElement("h3");w.classList="product-card__description",w.textContent="Product Description";let T=document.createElement("p");// TEST-TBS REMOVE FOR PROD
// console.log("productCardMain: ", productCardMain);
return T.classList="product-card__description-text",T.textContent=e.itemDescription,// TO-DO STARTED
d.appendChild(c),l.appendChild(s),l.appendChild(m),l.appendChild(u),l.appendChild(p),l.appendChild(h),l.appendChild(C),l.appendChild(g),l.appendChild(L),l.appendChild(E),l.appendChild(I),l.appendChild(_),y.appendChild(P),y.appendChild(f),o.appendChild(l),o.appendChild(y),a.appendChild(d),a.appendChild(o),b.appendChild(w),b.appendChild(T),r.appendChild(n),r.appendChild(a),r.appendChild(b),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=new URL(d("d5gZm").resolve("5WNTT"),import.meta.url).toString();class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let r=document.createElement("button");return r.classList="cart-link-btn",r.id=`cart-link-btn_${t}`,r.style=`background-image: url(${e});`,r};// Right Container - Create Cart Products Icons Block
createCartProductItemsBlock=e=>{let t=document.createElement("div");if(t.classList="cart-links-wrapper",0===e.length){let e=document.createElement("p");e.classList="cart-links-empty-msg",e.innerText="Cart is empty",t.appendChild(e)}else // console.log("Action: Right Container - Render Cart Icons");
for(let r of e){// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject.itemId: ", productObject.itemId);
let e=this.controller.getImageByProductId(r.itemId),n=this.controller.getUrlByNameLocal(e),a=this.createCartItemButton(n,r.itemId);t.appendChild(a)}return t};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let r=document.createElement("button");r.classList="cart-goto-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Select";let a=document.createElement("span");return a.innerText=" Cart",// Append elemens to respective parents
r.appendChild(n),r.appendChild(a),e.appendChild(r),e};// Right Container - Create "Proceed To Checkout" button
createProceedToCheckoutBtn=()=>{let e=document.createElement("div");e.classList="cart-checkout-btn-wrapper";let r=document.createElement("button");r.classList="cart-checkout-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(l),n.alt="Checkout";let a=document.createElement("span");return a.innerText=" Checkout",// Append elemens to respective parents
r.appendChild(n),r.appendChild(a),e.appendChild(r),e};// Right Container - create total amount block
createTotalAmountBlock=e=>{let t=document.createElement("div");t.classList="cart-total-amount-wrapper";let r=document.createElement("p");return r.classList="cart-total-amount",r.id="cart-total-amount",r.innerText=`Total: $${e.total}`,t.appendChild(r),t};// Right Container - Render Cart Summaary
createNewCartSummaryNoTotal=e=>{// Create "Cart" title
let t=this.createCartSummaryTitle(),r=this.createCartProductItemsBlock(e);t.appendChild(r);// Create "Go To Cart" button
let n=this.createGoToCartButton();// TEST-TBS - REMOVE FO PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return t.appendChild(n),t};// Right Container - Render Cart Summaary
createNewCartSummaryWithPrice=(e,t)=>{// Create "Cart" title
let r=this.createCartSummaryTitle(),n=this.createCartProductItemsBlock(e),a=this.createTotalAmountBlock(t),d=this.createProceedToCheckoutBtn();// TEST-TBS - REMOVE FOR PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return r.appendChild(n),r.appendChild(a),r.appendChild(d),r};// Left Container - Create Product Item Card block
createProductCardForCart=(e,t)=>{// Create elements
let r=document.createElement("div");r.classList="cart-item",// TO-DO : verify if "itemId" is better to use instead of "docId" here:
r.id=`cart-item_${e.itemId}`;let n=document.createElement("div");n.classList="cart-item__img-wrapper";let a=document.createElement("img");a.classList="cart-item__img",a.src=this.controller.getUrlByNameLocal(e.itemImg);let d=document.createElement("div");d.classList="cart-item__summary-wrapper";let i=document.createElement("div");i.classList="cart-item__summary";let c=document.createElement("div");c.classList="cart-item__element-wrapper";let o=document.createElement("h1");o.classList="cart-item__product-name",o.textContent=e.itemName;let l=document.createElement("div");l.classList="cart-item__element-wrapper";let s=document.createElement("p");s.classList="cart-item__support-txt",s.textContent="Part Number: ";let m=document.createElement("h3");m.classList="cart-item__part-number",m.textContent=e.itemPN;let u=document.createElement("div");u.classList="cart-item__element-wrapper";let p=document.createElement("p");p.classList="cart-item__support-txt",p.textContent="Condition: ";let h=document.createElement("h3");h.classList="cart-item__condition",h.textContent=e.itemCondition;let C=document.createElement("div");C.classList="cart-item__element-wrapper";let g=document.createElement("p");g.classList="cart-item__support-txt",g.textContent="Certification: ";let L=document.createElement("h3");L.classList="cart-item__certification",L.textContent=e.itemCertification;let E=document.createElement("div");E.classList="cart-item__element-wrapper";let I=document.createElement("p");I.classList="cart-item__support-txt",I.textContent="Availability: ";let _=document.createElement("h3");_.classList="cart-item__availability",_.textContent=e.itemLeadTime;let y=document.createElement("div");y.classList="cart-item__price-qty";let P=document.createElement("h3");P.classList="cart-item__product-price",P.setAttribute("data-price-qty-id",e.itemId),P.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`;let f=document.createElement("div");f.classList="cart-element__qty-mod_wrapper",f.id=`qty-mod_${e.itemId}`;let b=document.createElement("button");b.classList="cart-element__qty-mod_deduct-btn",b.innerText=" - ",b.id=`qty-deduct-btn_${e.itemId}`;let w=document.createElement("p");w.classList="cart-element__qty-mod_qty",w.id=`qty-indicator_${e.itemId}`,w.innerText=t;let T=document.createElement("button");// console.log("productCardMain: ", productCardMain);
return T.classList="cart-element__qty-mod_add-btn",T.innerText=" + ",T.id=`qty-add-btn_${e.itemId}`,// Assembly HTML code:
n.appendChild(a),c.appendChild(o),i.appendChild(c),l.appendChild(s),l.appendChild(m),i.appendChild(l),u.appendChild(p),u.appendChild(h),i.appendChild(u),C.appendChild(g),C.appendChild(L),i.appendChild(C),E.appendChild(I),E.appendChild(_),i.appendChild(E),f.appendChild(b),f.appendChild(w),f.appendChild(T),y.appendChild(P),y.appendChild(f),i.appendChild(y),d.appendChild(i),r.appendChild(n),r.appendChild(d),r};// Left Container - Create Cart Page
createCartPage=e=>{let t=document.createElement("div");t.classList="cart-wrapper";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");n.classList="cart-title",n.innerText="Cart";let a=document.createElement("div");for(let t of(a.classList="cart-items-wrapper",e)){// console.log(
//     "productItem to pass to getProductObjectById() function: ",
//     productItem
// );
// console.log("productItem.itemID: ", productItem.itemId);
let e=this.controller.getProductObjectById(t.itemId);// console.log("productData: ", productData);
a.appendChild(this.createProductCardForCart(e,t.qty))}return t.appendChild(r),t.appendChild(n),t.appendChild(a),t};// Left Container - Create Empty Cart Page
createEmptyCartPage=()=>{let e=document.createElement("div");e.classList="cart-wrapper";let t=document.createElement("button");t.classList="goto-products-btn",t.innerText="< Back to Products";let r=document.createElement("h2");return r.classList="cart-title",r.innerText="Cart is empty",e.appendChild(t),e.appendChild(r),e};// Update total price (items + handling) in menu (right container)
updatePartQuantity=(e,t)=>{// Find "price x qty" element by attribute:
let r=document.querySelector(`[data-price-qty-id="${e.itemId}"]`);r&&(r.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`);// Find "qty indicator" element by id:
let n=document.getElementById(`qty-indicator_${e.itemId}`);n&&(n.innerText=t)};// Update total price (items + handling) in menu (right container)
updateTotalPrice=e=>{// Find "Total price" element by ID
let t=document.getElementById("cart-total-amount");t&&(t.innerText=`Total: $${e}`)}}class m{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t};// Right Container - Create OrderSummaryContentBlock
createOrderSummaryPriceBlock=(e,t)=>{let r=document.createElement("div");r.classList="order-summary";let n=document.createElement("h3");n.classList="order-summary-title",n.innerText="Order Summary";let a=document.createElement("div");a.classList="flex-between";let d=document.createElement("p");d.innerText="Items:";let i=document.createElement("p");i.innerText=`$${e.items}`;let c=document.createElement("div");c.classList="flex-between";let o=document.createElement("p");o.innerText="Handling:";let l=document.createElement("p");l.innerText=`$${e.handling}`;let s=document.createElement("div");s.classList="flex-between bold";let m=document.createElement("p");m.innerText="Total:";let u=document.createElement("p");return u.innerText=`$${e.total}`,a.appendChild(d),a.appendChild(i),c.appendChild(o),c.appendChild(l),s.appendChild(m),s.appendChild(u),n.appendChild(a),n.appendChild(c),n.appendChild(s),t&&n.appendChild(this.createPlaceOrderButtonBlock()),r.appendChild(n),r};// Right Container - Create PlaceOrderButtonBlock
createPlaceOrderButtonBlock=()=>{let e=document.createElement("div");e.classList="place-order-btn-wrapper";let t=document.createElement("button");return t.classList="place-order-btn",t.innerText="Place Order",e.appendChild(t),e};// Left Container - Create createCheckOutWrapper
createCheckOutWrapper=()=>{let e=document.createElement("div");e.classList="checkout-wrapper";let t=document.createElement("button");return t.classList="goto-cart-btn",t.innerText="< Back to Cart",e.appendChild(t),e};// Left Container - Create BillToAddressContentBlock
createBillToAddressContentBlock=(e,t)=>{let r=document.createElement("div");r.classList="address-wrapper";let n=document.createElement("h3");n.classList="address-title",n.innerText="Bill to Address";let a=document.createElement("p");a.innerText=e.custLegalName;let d=document.createElement("p");d.innerText=e.custBillToAddress;let i=document.createElement("p");i.innerText=e.userName;let c=document.createElement("p");c.innerText=e.userPhone;let o=document.createElement("p");return o.innerText=e.userEmail,n.appendChild(a),n.appendChild(d),n.appendChild(i),n.appendChild(c),n.appendChild(o),t&&n.appendChild(this.createUpdateButtonBlock()),r.appendChild(n),r};// Left Container - Create PaymentMethodContentBlock
createPaymentMethodContentBlock=(e,t)=>{let r=document.createElement("div");r.classList="payment-method-wrapper";let n=document.createElement("h3");n.classList="payment-method-title",n.innerText="Payment Method";let a=document.createElement("p");return a.innerText=e.paymentMethod,n.appendChild(a),t&&n.appendChild(this.createUpdateButtonBlock()),r.appendChild(n),r};// Left Container - Create UpdateButtonBlock
createUpdateButtonBlock=()=>{let e=document.createElement("div");e.classList="update-btn-wrapper";let t=document.createElement("button");return t.classList="update-btn",t.innerText="Update",e.appendChild(t),e};// Left Container - createCheckOutCartWrapper
createCheckOutCartWrapper=()=>{let e=document.createElement("div");e.classList="checkout-cart-wrapper";let t=document.createElement("h3");t.classList="checkout-cart-title",t.innerText="Cart";let r=document.createElement("div");return r.classList="checkout-cart-items",e.appendChild(t),e.appendChild(r),e}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=d("keq33");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class g{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class E{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelUser is connected!")};getSessionIdCustomerByCustomerId=(e,t)=>{let r=t.filter(t=>t.custId===e);return r[0]}}var I=d("1ggDV");// Init database instance (dataBase):
let _={},y="",P={},f={},b=[],w=[],T={},k={};// Init HTML variables:
const v=document.createElement("div");v.innerHTML="";const B=document.createElement("div");B.innerHTML="";const x=document.createElement("div");x.innerHTML="";// Init cross-ref Map: image - url
const O=new Map,D=new class{constructor(){this.viewProducts=new o(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new u,this.viewSuperadmin=new p,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new g(this),this.modelOrders=new L,this.modelUser=new E,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelUser.checkModuleLinkage(),// Get data from database (Firebase) and keep in dataBase{}
console.log("Action: Getdata from database (Firebase) and keep in dataBase{}."),I.dbCollectionNames))_[e]=await this.modelFirebase.get(e),console.log(`[*** dataBase.${e} ***] :`,_[e]);for(let e of(// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),_.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
O.set(e.itemImg,t)}console.log("Assigned to [*** sessionIdNumber ***]: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionIdNumber a userId of the first user object/document from DB (usersData[0].userId)
y=_.usersData[0].userId),console.log("[*** sessionIdUser ***] initiated: ",// Assign to sessionIdUser a first object/document from DB (usersData[0])
P=_.usersData[0]),console.log("[*** sessionIdCustomer ***] initiated: ",// Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
f=this.getSessionIdCustomerData()),// Get values to CURRENT SESSION VARIABLES
// 1. Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
w=this.getCartItemsByUserID(y),console.log(`[*** sessionIdCartItems ***] for User ID ${y}: `,w),// 2. Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
b=this.getOrdersByUserID(y),console.log(`[*** sessionIdOrders ***] for User ID ${y}: `,b),// 3. Set "sessionIdCartDetails":
k=this.getSessionIdCartDetails(),console.log(`[*** sessionIdCartDetails ***] for User ID ${y}: `,k),// ALERT - POPOUP DISCLAMER
// *** ACTION NEEDED ***: UNCOMMENT FOR PROD
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionIdNumber} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.renderProductItemsList(_.productItems),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(w,b),this.attachEventListenrs();// TEST-TBS ONLY:
};// TO-DO: check where it is used?
askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};// Generate unique ID
handleNewIdGeneration=()=>this.modelFirebase.generateUniqueId();// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};deleteObjectFromArrayByDocId=(e,t)=>{let r=e.filter(e=>e.docId===t);return -1!==r?(e.splice(r,1),console.log("Deleted element/document with docId = ",t)):console.log("Not found element/document with docId = ",t),e};// Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
getSessionIdCustomerData=()=>f=this.modelUser.getSessionIdCustomerByCustomerId(P.custId,_.customersData);// Set "sessionIdCartDetails":
getSessionIdCartDetails=()=>{let e={userId:P.userId,userName:P.userName,userEmail:P.userEmail,userPhone:P.userPhone,custId:f.custId,custLegalName:f.custLegalName,custBillToAddress:f.custBillToAddress,custHandlingFee:f.custHandlingFee,paymentMethod:f.paymentMethod};return e};// Revert back from map an image URL by image name
getUrlByNameLocal=e=>O.get(e);// Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
getCartItemsByUserID=e=>_.cartsData.filter(t=>t.userId===e);// Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
getOrdersByUserID=e=>_.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=_.productItems.filter(t=>t.itemId===e);// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject[0].itemImg: ", productObject[0].itemImg);
return t[0].itemImg};getPriceByProductId=(e,t)=>{let r=e.filter(e=>e.itemId===t);// console.log("productById: ", productById);
// console.log("productById[0]: ", productById[0]);
return r[0].itemPrice};getProdIdFromElementId=e=>e.split("_")[1];// Get product/object from "dataBase.productItems" product ID (itemId):
getProductObjectById=e=>{// Filter product array => single object array
let t=_.productItems.filter(t=>t.itemId===e);return 0===t.length?null:t[0]};getDocIdFromArrayByItemId=(e,t)=>{let r=e.filter(e=>e.itemId===t);return(// TEST-TBS - REMOVE FOR PROD
console.log("[*** filteredArray ***]: ",r),0===r.length)?null:r[0].docId};callToUpdateCartPriceVariable=()=>{console.log("Received command to call for Price Variable update"),// TEST-TBD
this.updateCartPriceVariable(w,T,_.productItems,f.custHandlingFee)};// MIGHT BE A PART OF MODEL:
updateCartPriceVariable=(e,t,r,n)=>{let a=0,d=0;for(let n of(// TO-DO: CHECK, if it is required here. Delete for now:
console.log("MODEL - [*** sessionIdCartItems ***]: ",e),console.log("MODEL - [*** sessionIdCartPrice ***]: ",t),console.log("MODEL - [*** dataBase.productItems ***]: ",_.productItems),console.log("MODEL - [*** sessionIdCustome ***]: ",f),e))a+=n.qty*this.getPriceByProductId(r,n.itemId);// TO-DO: CHECK, if it is required here. Delete for now:
// this.controller.handleViewOfTotalPrceInCart(sessionIdCartPrice.total);
return d=a*n,t.items=a,t.handling=d,t.total=a+d,console.log("new sessionIdCartPrice: ",t),console.log("for sessionIdCartItems: ",e),t};// Left Container - Render product items
renderProductItemsList=e=>{let t=document.createElement("div");t.innerHTML="",t.appendChild(this.viewProducts.createProductItemsList(e)),// TEST-TBS - REMOVE FOR PROD
// Reset global variable:
// productsList.innerHTML = "";
// productsList.appendChild(productItemsList);
// TEST-TBS - REMOVE FOR PROD
// console.log("productsList: ", productsList);
// console.log("productsList: ", productsList.innerHTML);
this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Order CART
renderCartSummary=e=>{let t;t=0===e.length?this.viewCart.createEmptyCartPage(e):this.viewCart.createCartPage(e),this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Product Card
renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Right Container - Render Cart (no price) and Orders Summaries
renderCartAndOrdersSummary=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryNoTotal(e),a=this.viewOrders.createOrdersHistorySummary(t);// TEST-TBS - REMOVE IN PROD
console.log("cartSummaryNoTotal: ",n),console.log("ordersHistorySummary: ",a),r.appendChild(n),r.appendChild(a),this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Right Container - Render Cart (with price)
renderCartSummaryWithPrice=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryWithPrice(e,t);r.appendChild(n),// TEST-TBS - REMOVE IN PROD
console.log("cart Summary with Total: ",r),this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Left Container - Render Checkout Panel
renderCheckOutPanel=()=>{this.clearContainerLeft();let e=this.viewOrders.createCheckOutWrapper();// Second argument ("true") is to create "Update" button
e.appendChild(this.viewOrders.createBillToAddressContentBlock(k,!0)),// Second argument ("true") is to create "Update" button
e.appendChild(this.viewOrders.createPaymentMethodContentBlock(k,!0));let t=this.viewOrders.createCheckOutCartWrapper();for(let e of w){let r=this.getProductObjectById(e.itemId);t.appendChild(this.viewCart.createProductCardForCart(r,e.qty))}t.appendChild(this.viewOrders.createUpdateButtonBlock()),e.appendChild(t),this.containerLeftNode.appendChild(e)};// Right Container - Render Checkout Price Panel
renderCheckOutPricePanel=()=>{this.clearContainerRight(),this.containerRightNode.appendChild(this.viewOrders.createOrderSummaryPriceBlock(T,!0))};// Support funtions for buttons handler:
// Handle click of complex element by picking it's parent element class
findAncestorByClass=(e,t)=>{let r=e;for(;r&&!r.classList.contains(t);)r=r.parentElement;return r};// "< Back to Products" button
handleGotoProductsBtn=()=>{this.renderProductItemsList(_.productItems),// TO-DO: CHECK, if it is required here. Delete for now:
this.renderCartAndOrdersSummary(w,b)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=e=>{// TEST-TBS REMOVE IN PROD
console.log(`TO-DO: Add product with ID ${e.id} to cart.`);// Get product/object ID (itemId) from DOM element ID (string)
let t=this.getProdIdFromElementId(e.id),r=this.getDocIdFromArrayByItemId(w,t);r?this.handleQtyChangeBtn(e,1):this.addProduct(t,y),this.renderCartAndOrdersSummary(w,b)};// "Go to Cart" button at right panel
handleGotoCartBtn=()=>{console.log("Received command to display CART."),// TEST-TBD
this.updateCartPriceVariable(w,T,_.productItems,f.custHandlingFee),this.renderCartSummary(w),this.renderCartSummaryWithPrice(w,T)};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT"),this.renderCheckOutPanel(),this.renderCheckOutPricePanel()};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display CARD for product ID: ",e.id);let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r);// TO-DO: CHECK, if it is required here. Delete for now:
// this.renderCartAndOrdersSummary(sessionIdCartItems, sessionIdOrders);
};// TO-DO: Create ORDER POP UP:
handleDisplayHistoricalOrder=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display ORDER with ID: ",e.id)};handleQtyChangeBtn=(e,t)=>{let r=this.getProdIdFromElementId(e.id);// TEST-TBS REMOVE IN PROD
console.log("Function: 'handleQtyChangeBtn()': update QTY of prod ID: ",e.id),console.log("'sessionIdCartItems': ",w),console.log("itemId: ",r);// product/object to update:
let n=JSON.parse(JSON.stringify(w.find(e=>e.itemId===r)));if(!n){console.log("Product/object not found");return}// remove product from array:
let a=w.filter(e=>e.itemId!==r);n.qty+t>0?(this.updateProduct(a,n,t),this.updateCartDOM(r,n)):(this.deleteProduct(a,n),this.handleGotoCartBtn())};addProduct=(e,t)=>{let r={docId:this.handleNewIdGeneration(),itemId:e,qty:1,userId:t};console.log("MODEL: try to add to database.cartsData a [*** newProductToCart *** ]: ",r),this.handleAddDocToFirestore("cartsData",r),w.push(r),console.log("Updated [*** sessionIdCartItems ***]: ",w)};updateProduct=(e,t,r)=>{// Modify product/object
t.qty+=r,// Add product back to array
e.push(t),// Update Firestore
this.handleUpdateDocInFirestore("cartsData",t),// Update global variable
w=e};deleteProduct=(e,t)=>{// Delete product from Firestore
this.handleDeleteDocFromFirestore("cartsData",t.docId),// Update global variable
w=e};updateCartDOM=(e,t)=>{//  update/re-render 'qty' in user's cart (DOM)
this.handleViewOfPartQty(e,t.qty),//  update total price 'sessionIdCartPrice' (global variable)
this.callToUpdateCartPriceVariable(),//  update/re-render 'total price' in user's cart (DOM)
this.handleViewOfTotalPrceInCart(T.total)};// Update product QTY in CART in 2 locations: price and selector
handleViewOfPartQty=(e,t)=>{// TEST-TBS REMOVE IN PROD
console.log("Got comand to update product qty with:"),console.log("Product ID: ",e),console.log("New QTY: ",t);let r=this.getProductObjectById(e);this.viewCart.updatePartQuantity(r,t)};// Update total price (items + handling) in menu (right container)
handleViewOfTotalPrceInCart=e=>{this.viewCart.updateTotalPrice(e)};handleButtonsClickLeft=e=>{let t=e.target;// "< Back to Products" button
if(t.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "Add to Cart" button at detailed product card (page)
let r=t.closest(".product-card__add-to-cart-btn");if(r){this.handleAddToCartBtn(r);return}// "Add to Cart" button at short product card (main page)
let n=this.findAncestorByClass(t,"product-item__content_price-btn");if(n){this.handleAddToCartBtn(n);return}// Product card as "button" at main page
let a=this.findAncestorByClass(t,"product-item");// Qty deduct button at Cart page
if(a&&this.handleProductItem(a),t.classList.contains("cart-element__qty-mod_deduct-btn")){this.handleQtyChangeBtn(t,-1);return}// Qty add button at Cart page
if(t.classList.contains("cart-element__qty-mod_add-btn")){this.handleQtyChangeBtn(t,1);return}};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn(w);// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn()};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)};// Database support functions
handleAddDocToFirestore=(e,t)=>{console.log("Controller: got a requst to add [object]: ",t),console.log("to [collction]: ",e),this.modelFirebase.addDocToFirestore(e,t)};handleUpdateDocInFirestore=(e,t)=>{console.log("Controller: got a requst update [object]: ",t),console.log("in [collction]: ",e),this.modelFirebase.updateDocInFirestore(e,t)};handleDeleteDocFromFirestore=(e,t)=>{console.log("Controller: got a requst to delete [object]: ",t),console.log("from [collection]: ",e),this.modelFirebase.deleteDocFromFirestore(e,t)}};try{D.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.406ad07c.js.map

//# sourceMappingURL=index.406ad07c.js.map
