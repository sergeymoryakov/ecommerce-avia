function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequire5d32;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire5d32=o),o.register("d5gZm",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o("d5gZm").register(JSON.parse('{"bjFny":"index.4b0c784d.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","5WNTT":"icon-order.5ea58f4f.png","1riji":"admin.976bcc7f.js"}'));var d={};d=new URL(o("d5gZm").resolve("3XKo6"),import.meta.url).toString();var c={};c=new URL(o("d5gZm").resolve("jyKjU"),import.meta.url).toString();class i{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.itemId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let a=document.createElement("div");a.classList="product-item__content";let o=document.createElement("h3");o.classList="product-item__content_desc",o.textContent=e.itemName;let d=document.createElement("p");d.classList="product-item__content_part-number",d.textContent=e.itemPN;let i=document.createElement("div");i.classList="product-item__content_price-block";let l=document.createElement("h3");l.classList="product-item__content_price",l.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.itemId}`;let m=document.createElement("img");return m.classList="product-item__content_price-btn-img",m.src=/*@__PURE__*/t(c),m.alt="Select",// Append elemens to respective parents
s.appendChild(m),i.appendChild(l),i.appendChild(s),a.appendChild(o),a.appendChild(d),a.appendChild(i),r.appendChild(n),r.appendChild(a),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return(// Render product list container
// this.controller.containerLeftNode.appendChild(productList);
console.log("productList: ",t),t)};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.itemId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let a=document.createElement("div");a.classList="product-card__top-wrapper";let o=document.createElement("div");o.classList="product-card__img-wrapper";let c=document.createElement("img");c.classList="product-card__img",c.src=this.controller.getUrlByNameLocal(e.itemImg);let i=document.createElement("div");i.classList="product-card__summary-wrapper";let l=document.createElement("div");l.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let m=document.createElement("p");m.classList="product-card__support-txt",m.textContent="Part Number: ";let u=document.createElement("h3");u.classList="product-card__part-number",u.textContent=e.itemPN;let p=document.createElement("p");p.classList="product-card__support-txt",p.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="product-card__condition",g.textContent=e.itemCondition;let L=document.createElement("p");L.classList="product-card__support-txt",L.textContent="Certification: ";let E=document.createElement("h3");E.classList="product-card__certification",E.textContent=e.itemCertification;let I=document.createElement("p");I.classList="product-card__support-txt",I.textContent="Availability: ";let y=document.createElement("h3");y.classList="product-card__availability",y.textContent=e.itemLeadTime;let _=document.createElement("button");_.classList="product-card__add-to-cart-btn",_.id=`add-to-cart-btn_${e.itemId}`;let P=document.createElement("img");P.src=/*@__PURE__*/t(d),P.alt="Select";let f=document.createElement("span");f.innerText=" Add to Cart";let b=document.createElement("div");b.classList="product-card__bottom-wrapper";let w=document.createElement("h3");w.classList="product-card__description",w.textContent="Product Description";let T=document.createElement("p");// TEST-TBS REMOVE FOR PROD
// console.log("productCardMain: ", productCardMain);
return T.classList="product-card__description-text",T.textContent=e.itemDescription,// TO-DO STARTED
o.appendChild(c),l.appendChild(s),l.appendChild(m),l.appendChild(u),l.appendChild(p),l.appendChild(h),l.appendChild(C),l.appendChild(g),l.appendChild(L),l.appendChild(E),l.appendChild(I),l.appendChild(y),_.appendChild(P),_.appendChild(f),i.appendChild(l),i.appendChild(_),a.appendChild(o),a.appendChild(i),b.appendChild(w),b.appendChild(T),r.appendChild(n),r.appendChild(a),r.appendChild(b),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var l={};l=new URL(o("d5gZm").resolve("5WNTT"),import.meta.url).toString();class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
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
let r=this.createCartSummaryTitle(),n=this.createCartProductItemsBlock(e),a=this.createTotalAmountBlock(t),o=this.createProceedToCheckoutBtn();// TEST-TBS - REMOVE FOR PROD
// console.log("cartSummaryBlock: ", cartSummaryBlock);
return r.appendChild(n),r.appendChild(a),r.appendChild(o),r};// Left Container - Create Product Item Card block
// Third argument ("customClassList") is a classList to pass to 'div' element
// Fourth argument ("updateBlock") is to create an "update qty" feature
createProductCardForCart=(e,t,r,n)=>{// Create elements
let a=document.createElement("div");a.classList=r,// TO-DO : verify if "itemId" is better to use instead of "docId" here:
a.id=`cart-item_${e.itemId}`;let o=document.createElement("div");o.classList="cart-item__img-wrapper";let d=document.createElement("img");d.classList="cart-item__img",d.src=this.controller.getUrlByNameLocal(e.itemImg);let c=document.createElement("div");c.classList="cart-item__summary-wrapper";let i=document.createElement("div");i.classList="cart-item__summary";let l=document.createElement("div");l.classList="cart-item__element-wrapper";let s=document.createElement("h1");s.classList="cart-item__product-name",s.textContent=e.itemName;let m=document.createElement("div");m.classList="cart-item__element-wrapper";let u=document.createElement("p");u.classList="cart-item__support-txt",u.textContent="Part Number: ";let p=document.createElement("h3");p.classList="cart-item__part-number",p.textContent=e.itemPN;let h=document.createElement("div");h.classList="cart-item__element-wrapper";let C=document.createElement("p");C.classList="cart-item__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="cart-item__condition",g.textContent=e.itemCondition;let L=document.createElement("div");L.classList="cart-item__element-wrapper";let E=document.createElement("p");E.classList="cart-item__support-txt",E.textContent="Certification: ";let I=document.createElement("h3");I.classList="cart-item__certification",I.textContent=e.itemCertification;let y=document.createElement("div");y.classList="cart-item__element-wrapper";let _=document.createElement("p");_.classList="cart-item__support-txt",_.textContent="Availability: ";let P=document.createElement("h3");P.classList="cart-item__availability",P.textContent=e.itemLeadTime;let f=document.createElement("div");f.classList="cart-item__price-qty";let b=document.createElement("h3");b.classList="cart-item__product-price",b.setAttribute("data-price-qty-id",e.itemId),b.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`;let w=document.createElement("div");w.classList="cart-element__qty-mod_wrapper",w.id=`qty-mod_${e.itemId}`;let T=document.createElement("button");T.classList="cart-element__qty-mod_deduct-btn",T.innerText=" - ",T.id=`qty-deduct-btn_${e.itemId}`;let v=document.createElement("p");v.classList="cart-element__qty-mod_qty",v.id=`qty-indicator_${e.itemId}`,v.innerText=t;let k=document.createElement("button");// console.log("productCardMain: ", productCardMain);
return k.classList="cart-element__qty-mod_add-btn",k.innerText=" + ",k.id=`qty-add-btn_${e.itemId}`,// Assembly HTML code:
o.appendChild(d),l.appendChild(s),i.appendChild(l),m.appendChild(u),m.appendChild(p),i.appendChild(m),h.appendChild(C),h.appendChild(g),i.appendChild(h),L.appendChild(E),L.appendChild(I),i.appendChild(L),y.appendChild(_),y.appendChild(P),i.appendChild(y),n&&(w.appendChild(T),w.appendChild(v),w.appendChild(k)),f.appendChild(b),f.appendChild(w),i.appendChild(f),c.appendChild(i),a.appendChild(o),a.appendChild(c),a};// Left Container - Create Cart Page
createCartPage=e=>{let t=document.createElement("div");t.classList="cart-wrapper";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");n.classList="cart-title",n.innerText="Cart";let a=document.createElement("div");for(let t of(a.classList="cart-items-wrapper",e)){// console.log(
//     "productItem to pass to getProductObjectById() function: ",
//     productItem
// );
// console.log("productItem.itemID: ", productItem.itemId);
let e=this.controller.getProductObjectById(t.itemId);// console.log("productData: ", productData);
// Third argument ("cart-item") is a classList to pass to 'div' element
// Fourth argument ("true") is to create an "update" feature
a.appendChild(this.createProductCardForCart(e,t.qty,"cart-item",!0))}return t.appendChild(r),t.appendChild(n),t.appendChild(a),t};// Left Container - Create Empty Cart Page
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
createOrderSummaryPriceBlock=(e,t)=>{let r=document.createElement("div");r.classList="order-summary";let n=document.createElement("h3");n.classList="order-summary-title",n.innerText="Order Summary";let a=document.createElement("div");a.classList="flex-between";let o=document.createElement("p");o.innerText="Items:";let d=document.createElement("p");d.innerText=`$${e.items}`;let c=document.createElement("div");c.classList="flex-between";let i=document.createElement("p");i.innerText="Handling:";let l=document.createElement("p");l.innerText=`$${e.handling}`;let s=document.createElement("div");s.classList="flex-between bold";let m=document.createElement("p");m.innerText="Total:";let u=document.createElement("p");return u.innerText=`$${e.total}`,a.appendChild(o),a.appendChild(d),c.appendChild(i),c.appendChild(l),s.appendChild(m),s.appendChild(u),r.appendChild(n),r.appendChild(a),r.appendChild(c),r.appendChild(s),t&&r.appendChild(this.createPlaceOrderButtonBlock()),r};// Right Container - Create PlaceOrderButtonBlock
createPlaceOrderButtonBlock=()=>{let e=document.createElement("div");e.classList="place-order-btn-wrapper";let t=document.createElement("button");return t.classList="place-order-btn",t.innerText="Place Order",e.appendChild(t),e};// Left Container - Create createCheckOutWrapper
createCheckOutWrapper=()=>{let e=document.createElement("div");e.classList="checkout-wrapper";let t=document.createElement("button");return t.classList="goto-cart-btn",t.innerText="< Back to Cart",e.appendChild(t),e};// Left Container - Create BillToAddressContentBlock
createBillToAddressContentBlock=(e,t)=>{let r=document.createElement("div");r.classList="address-wrapper";let n=document.createElement("h3");n.classList="address-title",n.innerText="Bill to Address";let a=document.createElement("p");a.innerText=e.custLegalName;let o=document.createElement("p");o.innerText=e.custBillToAddress;let d=document.createElement("p");d.innerText=e.userName;let c=document.createElement("p");c.innerText=e.userPhone;let i=document.createElement("p");return i.innerText=e.userEmail,r.appendChild(n),r.appendChild(a),r.appendChild(o),r.appendChild(d),r.appendChild(c),r.appendChild(i),t&&r.appendChild(this.createUpdateButtonBlock()),r};// Left Container - Create PaymentMethodContentBlock
createPaymentMethodContentBlock=(e,t)=>{let r=document.createElement("div");r.classList="payment-method-wrapper";let n=document.createElement("h3");n.classList="payment-method-title",n.innerText="Payment Method";let a=document.createElement("p");return a.innerText=e.paymentMethod,r.appendChild(n),r.appendChild(a),t&&r.appendChild(this.createUpdateButtonBlock()),r};// Left Container - createCheckOutCartWrapper
createCheckOutCartWrapper=()=>{let e=document.createElement("div");e.classList="checkout-cart-wrapper";let t=document.createElement("h3");// checkOutCartWrapper.appendChild(cartItemsWrapper);
return t.classList="checkout-cart-title",t.innerText="Cart",// const cartItemsWrapper = document.createElement("div");
// cartItemsWrapper.classList = "checkout-cart-items";
e.appendChild(t),e};// Left Container - Create UpdateButtonBlock
createUpdateButtonBlock=()=>{let e=document.createElement("div");e.classList="update-btn-wrapper";let t=document.createElement("button");return t.classList="update-btn",t.innerText="Update",e.appendChild(t),e}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewAdmin is connected!")}}class p{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=o("keq33");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class g{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class E{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelUser is connected!")};getSessionIdCustomerByCustomerId=(e,t)=>{let r=t.filter(t=>t.custId===e);return r[0]}}var I=o("1ggDV");// Init database instance (dataBase):
let y={},_="",P={},f={},b=[],w=[],T={},v={};// let newOrderDetails = {
//     // userId: "1001",
//     // userName: "Mattew Yampolski",
//     // userEmail: "matt.y@aerosupplyplus.aero",
//     // userPhone: "+1 898 9289289",
//     // custId: "c001",
//     // custLegalName: "AeroSupplyPlus LLC",
//     // custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
//     // custHandlingFee: 1,
//     // priceItems: 800000,
//     // priceHandling: 8000,
//     // priceTotal: 808000,
//     // orderCurrency: "$",
//     // paymentMethod: "card",
//     // orderId: "100005",
//     // orderDate: "20230828",
//     // paymentDate: "20230828",
//     // docId: "iuyreqouoqoiwyiuyorqwriuyqeoiuyrw",
// };
// Init HTML variables:
const k=document.createElement("div");k.innerHTML="";const O=document.createElement("div");O.innerHTML="";const B=document.createElement("div");B.innerHTML="";// Init cross-ref Map: image - url
const x=new Map,D=new class{constructor(){this.viewProducts=new i(this),this.viewCart=new s(this),this.viewOrders=new m(this),this.viewAdmin=new u,this.viewSuperadmin=new p,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new g(this),this.modelOrders=new L,this.modelUser=new E,this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewAdmin.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelUser.checkModuleLinkage(),// Get data from database (Firebase) and keep in local dataBase{}
await this.getUpdateLocalDataBase(),// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),y.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
x.set(e.itemImg,t)}console.log("Assigned to [*** sessionIdNumber ***]: ",// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageLinksMap: ", imageLinksMap);
// Assign to sessionIdNumber a userId of the first user object/document from DB (usersData[0].userId)
_=y.usersData[0].userId),console.log("[*** sessionIdUser ***] initiated: ",// Assign to sessionIdUser a first object/document from DB (usersData[0])
P=y.usersData[0]),console.log("[*** sessionIdCustomer ***] initiated: ",// Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
f=this.getSessionIdCustomerData()),// Get values to CURRENT SESSION VARIABLES
// 1. Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
w=this.getCartItemsByUserID(_),console.log(`[*** sessionIdCartItems ***] for User ID ${_}: `,w),// 2. Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
b=this.getOrdersByUserID(_),console.log(`[*** sessionIdOrders ***] for User ID ${_}: `,b),// 3. Set "sessionIdCartDetails":
v=this.getSessionIdCartDetails(),console.log(`[*** sessionIdCartDetails ***] for User ID ${_}: `,v),// ALERT - POPOUP DISCLAMER
// *** ACTION NEEDED ***: UNCOMMENT FOR PROD
// confirm(
//     `Hi there, this application was set for demonstration purpose, therefore a User ID ${sessionIdNumber} was assigned for this session. Fake Name, Lastname, and other user properties are generated for practice purpose only. Should you wish to use this application and/or customize it fo the purpose of your business please reach out to the developer at seppo.gigital@gmail.com.`
// );
// Left Container - Render product items
this.renderProductItemsList(y.productItems),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(w,b),this.attachEventListenrs();// TEST-TBS ONLY:
};// TO-DO: check where it is used?
askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};// Generate unique ID
handleNewIdGeneration=()=>this.modelFirebase.generateUniqueId();// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};// Get or Update data from Firebase and keep in local dataBase{}.
getUpdateLocalDataBase=async()=>{for(let e of(console.log("Get or Update data from Firebase and keep in local dataBase{}."),I.dbCollectionNames))y[e]=await this.modelFirebase.get(e),console.log(`[*** dataBase.${e} ***] :`,y[e])};deleteObjectFromArrayByDocId=(e,t)=>{let r=e.filter(e=>e.docId===t);return -1!==r?(e.splice(r,1),console.log("Deleted element/document with docId = ",t)):console.log("Not found element/document with docId = ",t),e};// Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
getSessionIdCustomerData=()=>f=this.modelUser.getSessionIdCustomerByCustomerId(P.custId,y.customersData);// Set "sessionIdCartDetails":
getSessionIdCartDetails=()=>{let e={userId:P.userId,userName:P.userName,userEmail:P.userEmail,userPhone:P.userPhone,custId:f.custId,custLegalName:f.custLegalName,custBillToAddress:f.custBillToAddress,custHandlingFee:f.custHandlingFee,paymentMethod:f.paymentMethod};return e};// Revert back from map an image URL by image name
getUrlByNameLocal=e=>x.get(e);// Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
getCartItemsByUserID=e=>y.cartsData.filter(t=>t.userId===e);// Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
getOrdersByUserID=e=>y.ordersData.filter(t=>t.userId===e);getImageByProductId=e=>{let t=y.productItems.filter(t=>t.itemId===e);// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject[0].itemImg: ", productObject[0].itemImg);
return t[0].itemImg};getPriceByProductId=(e,t)=>{let r=e.filter(e=>e.itemId===t);// console.log("productById: ", productById);
// console.log("productById[0]: ", productById[0]);
return r[0].itemPrice};getProdIdFromElementId=e=>e.split("_")[1];// Get product/object from "dataBase.productItems" product ID (itemId):
getProductObjectById=e=>{// Filter product array => single object array
let t=y.productItems.filter(t=>t.itemId===e);return 0===t.length?null:t[0]};getDocIdFromArrayByItemId=(e,t)=>{let r=e.filter(e=>e.itemId===t);return(// TEST-TBS - REMOVE FOR PROD
console.log("[*** filteredArray ***]: ",r),0===r.length)?null:r[0].docId};callToUpdateCartPriceVariable=()=>{console.log("Received command to call for Price Variable update"),// TEST-TBD
this.updateCartPriceVariable(w,T,y.productItems,f.custHandlingFee)};// MIGHT BE A PART OF MODEL:
updateCartPriceVariable=(e,t,r,n)=>{let a=0,o=0;for(let n of(// TO-DO: CHECK, if it is required here. Delete for now:
console.log("MODEL - [*** sessionIdCartItems ***]: ",e),console.log("MODEL - [*** sessionIdCartPrice ***]: ",t),console.log("MODEL - [*** dataBase.productItems ***]: ",y.productItems),console.log("MODEL - [*** sessionIdCustome ***]: ",f),e))a+=n.qty*this.getPriceByProductId(r,n.itemId);// TO-DO: CHECK, if it is required here. Delete for now:
// this.controller.handleViewOfTotalPrceInCart(sessionIdCartPrice.total);
return o=a*n/100,t.items=a,t.handling=o,t.total=a+o,console.log("new sessionIdCartPrice: ",t),console.log("for sessionIdCartItems: ",e),t};// Left Container - Render product items
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
e.appendChild(this.viewOrders.createBillToAddressContentBlock(v,!0)),// Second argument ("true") is to create "Update" button
e.appendChild(this.viewOrders.createPaymentMethodContentBlock(v,!0));let t=this.viewOrders.createCheckOutCartWrapper(),r=document.createElement("div");for(let e of(r.classList="checkout-cart-items",w)){let t=this.getProductObjectById(e.itemId);// Third argument ("checkout-cart-item") is a classList to pass to 'div' element
// Fourth argument ("true") is for not to create a "qty update" feature
r.appendChild(this.viewCart.createProductCardForCart(t,e.qty,"checkout-cart-item",!1))}t.appendChild(r),t.appendChild(this.viewOrders.createUpdateButtonBlock()),e.appendChild(t),this.containerLeftNode.appendChild(e)};// Left Container - Render Order Panel
renderOrderPanel=()=>{this.clearContainerLeft(),this.viewOrders.createOrderWrapper();// // Second argument ("true") is to create "Update" button
// checkOutWrapper.appendChild(
//     this.viewOrders.createBillToAddressContentBlock(
//         sessionIdCartDetails,
//         true
//     )
// );
// // Second argument ("true") is to create "Update" button
// checkOutWrapper.appendChild(
//     this.viewOrders.createPaymentMethodContentBlock(
//         sessionIdCartDetails,
//         true
//     )
// );
// const checkOutCartWrapper = this.viewOrders.createCheckOutCartWrapper();
// const cartItems = document.createElement("div");
// cartItems.classList = "checkout-cart-items";
// for (const productItem of sessionIdCartItems) {
//     const productData = this.getProductObjectById(productItem.itemId);
//     // Third argument ("checkout-cart-item") is a classList to pass to 'div' element
//     // Fourth argument ("true") is for not to create a "qty update" feature
//     cartItems.appendChild(
//         this.viewCart.createProductCardForCart(
//             productData,
//             productItem.qty,
//             "checkout-cart-item",
//             false
//         )
//     );
// }
// checkOutCartWrapper.appendChild(cartItems);
// checkOutCartWrapper.appendChild(
//     this.viewOrders.createUpdateButtonBlock()
// );
// checkOutWrapper.appendChild(checkOutCartWrapper);
// this.containerLeftNode.appendChild(checkOutWrapper);
};// Right Container - Render Checkout Price Panel
renderCheckOutPricePanel=()=>{this.clearContainerRight(),this.containerRightNode.appendChild(this.viewOrders.createOrderSummaryPriceBlock(T,!0))};// Support funtions for buttons handler:
// Handle click of complex element by picking it's parent element class
findAncestorByClass=(e,t)=>{let r=e;for(;r&&!r.classList.contains(t);)r=r.parentElement;return r};// "< Back to Products" button
handleGotoProductsBtn=()=>{this.renderProductItemsList(y.productItems),// TO-DO: CHECK, if it is required here. Delete for now:
this.renderCartAndOrdersSummary(w,b)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=e=>{// TEST-TBS REMOVE IN PROD
console.log(`TO-DO: Add product with ID ${e.id} to cart.`);// Get product/object ID (itemId) from DOM element ID (string)
let t=this.getProdIdFromElementId(e.id),r=this.getDocIdFromArrayByItemId(w,t);r?this.handleQtyChangeBtn(e,1):this.addProduct(t,_),this.renderCartAndOrdersSummary(w,b)};// "Go to Cart" button at right panel or checkout panel
handleGotoCartBtn=()=>{// TEST-TBS REMOVE IN PROD
console.log("Received command to display CART."),this.updateCartPriceVariable(w,T,y.productItems,f.custHandlingFee),this.renderCartSummary(w),this.renderCartSummaryWithPrice(w,T)};// Handle Order Placement
handleOrderPlacement=async()=>{// TEST-TBS REMOVE IN PROD
console.log("Received command to PLACE ORDER (HANDLER CONNECTED).");// 1.A. Prepare newOrderDetails to pass to Firestore
let e=JSON.parse(JSON.stringify(this.modelFirebase.setNewOrderDetails(v,T)));// TEST-TBS REMOVE IN PROD
console.log("[*** newOrderDetails ***] set: ",e);// 1.B. Pass newOrderDetails to Firestore
try{this.handleAddDocToFirestore("ordersData",e)}catch(e){console.error("Error adding newOrderDetails to Firestore: ",e)}// 1.C. Push newOrderDetails to dataBase.ordersData
// dataBase.ordersData.push(newOrderDetails);
// 2.A. Prepare newOrderItems to pass to Firestore
let t=JSON.parse(JSON.stringify(w));for(let r in // TEST-TBS REMOVE IN PROD
console.log("[*** newOrderItems ***] set: ",t),t){t[r].orderId=e.orderId,console.log("[*** productItem ***] set: ",t[r]);// 2.B. Pass productItem to Firestore
try{this.handleAddDocToFirestore("orderItemsData",t[r])}catch(e){console.error("Error adding productItem to Firestore: ",e)}// 2.C. Push productItem to dataBase.orderItemsData
// dataBase.orderItemsData.push(newOrderItems[productItem]);
}// 3.A. Clear sessionIdCartItems from Firestore
for(let e in w){console.log("[*** sessionIdCartItems[cartItem].docId ***] to delete from cartsData: ",w[e].docId);try{this.handleDeleteDocFromFirestore("cartsData",w[e].docId)}catch(e){console.error("Error deleting sessionIdCartItems from Firestore: ",e)}}console.log("UPDATE LOCAL DATABASE VARIABLES HERE");try{await this.getUpdateLocalDataBase()}catch(e){console.error("Error updating local variables: ",e)}};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT"),this.renderCheckOutPanel(),this.renderCheckOutPricePanel()};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display CARD for product ID: ",e.id);let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r)};handleDisplayHistoricalOrder=e=>{// TEST-TBS REMOVE IN PROD
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
if(t.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "< Back to Cart" button
if(t.classList.contains("goto-cart-btn")){this.handleGotoCartBtn();return}// "Add to Cart" button at detailed product card (page)
let r=t.closest(".product-card__add-to-cart-btn");if(r){this.handleAddToCartBtn(r);return}// "Add to Cart" button at short product card (main page)
let n=this.findAncestorByClass(t,"product-item__content_price-btn");if(n){this.handleAddToCartBtn(n);return}// Product card as "button" at main page
let a=this.findAncestorByClass(t,"product-item");// Qty deduct button at Cart page
if(a&&this.handleProductItem(a),t.classList.contains("cart-element__qty-mod_deduct-btn")){this.handleQtyChangeBtn(t,-1);return}// Qty add button at Cart page
if(t.classList.contains("cart-element__qty-mod_add-btn")){this.handleQtyChangeBtn(t,1);return}};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn();// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn();// "Place Order" button at right panel
let a=this.findAncestorByClass(t,"place-order-btn");a&&(// TO-DO
console.log("Received PLACE ORDER command."),this.handleOrderPlacement())};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight)};// Database support functions
handleAddDocToFirestore=(e,t)=>{console.log("Controller: got a requst to add [object]: ",t),console.log("to [collction]: ",e),this.modelFirebase.addDocToFirestore(e,t)};handleUpdateDocInFirestore=(e,t)=>{console.log("Controller: got a requst update [object]: ",t),console.log("in [collction]: ",e),this.modelFirebase.updateDocInFirestore(e,t)};handleDeleteDocFromFirestore=(e,t)=>{console.log("Controller: got a requst to delete [object]: ",t),console.log("from [collection]: ",e),this.modelFirebase.deleteDocFromFirestore(e,t)}};try{D.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.4b0c784d.js.map

//# sourceMappingURL=index.4b0c784d.js.map
