function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequire5d32;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequire5d32=o),o.register("d5gZm",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o("d5gZm").register(JSON.parse('{"bjFny":"index.7f7355c6.js","3XKo6":"icon-add-order.d5dcde0a.png","jyKjU":"icon-cart.dd455062.png","5WNTT":"icon-order.5ea58f4f.png","1riji":"admin.3383eef4.js"}'));var d={};d=new URL(o("d5gZm").resolve("3XKo6"),import.meta.url).toString();var i={};i=new URL(o("d5gZm").resolve("jyKjU"),import.meta.url).toString();class l{constructor(e){this.controller=e}// FOR TEST AND TBS - REMOVE FOR PROD
checkModuleLinkage=()=>{console.log("HELLO, ViewProducts is connected!")};createProductItemCard=e=>{// Create elements
let r=document.createElement("div");r.classList="product-item",r.id=`product-card_${e.itemId}`;let n=document.createElement("img");n.classList="product-item__img",n.src=this.controller.getUrlByNameLocal(e.itemImg);let a=document.createElement("div");a.classList="product-item__content";let o=document.createElement("h3");o.classList="product-item__content_desc",o.textContent=e.itemName;let d=document.createElement("p");d.classList="product-item__content_part-number",d.textContent=e.itemPN;let l=document.createElement("div");l.classList="product-item__content_price-block";let c=document.createElement("h3");c.classList="product-item__content_price",c.textContent=`$${e.itemPrice}`;let s=document.createElement("button");s.classList="product-item__content_price-btn",s.id=`product-btn_${e.itemId}`;let p=document.createElement("img");return p.classList="product-item__content_price-btn-img",p.src=/*@__PURE__*/t(i),p.alt="Select",// Append elemens to respective parents
s.appendChild(p),l.appendChild(c),l.appendChild(s),a.appendChild(o),a.appendChild(d),a.appendChild(l),r.appendChild(n),r.appendChild(a),r};// Left Container - Render product items
createProductItemsList=e=>{// Clear container
// this.controller.clearContainerLeft();
// Create product list container
let t=document.createElement("div");// Look through array to create item cards and add to products list
for(let r of(t.classList="product-list",e)){let e=this.createProductItemCard(r);t.appendChild(e)}return t};createDetailedProductCard=e=>{console.log("productObject: ",e);// Create elements
let r=document.createElement("div");r.classList="product-card",r.id=`prodCard_${e.itemId}`;let n=document.createElement("button");n.classList="goto-products-btn",n.innerText="< Back to Products";let a=document.createElement("div");a.classList="product-card__top-wrapper";let o=document.createElement("div");o.classList="product-card__img-wrapper";let i=document.createElement("img");i.classList="product-card__img",i.src=this.controller.getUrlByNameLocal(e.itemImg);let l=document.createElement("div");l.classList="product-card__summary-wrapper";let c=document.createElement("div");c.classList="product-card__summary";let s=document.createElement("h1");s.classList="product-card__product-name",s.textContent=e.itemName;let p=document.createElement("p");p.classList="product-card__support-txt",p.textContent="Part Number: ";let m=document.createElement("h3");m.classList="product-card__part-number",m.textContent=e.itemPN;let u=document.createElement("p");u.classList="product-card__support-txt",u.textContent="Price Per Unit: ";let h=document.createElement("h3");h.classList="product-card__product-price",h.textContent=`${e.itemCurrency} ${e.itemPrice}`;let C=document.createElement("p");C.classList="product-card__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="product-card__condition",g.textContent=e.itemCondition;let L=document.createElement("p");L.classList="product-card__support-txt",L.textContent="Certification: ";let E=document.createElement("h3");E.classList="product-card__certification",E.textContent=e.itemCertification;let y=document.createElement("p");y.classList="product-card__support-txt",y.textContent="Availability: ";let I=document.createElement("h3");I.classList="product-card__availability",I.textContent=e.itemLeadTime;let P=document.createElement("button");P.classList="product-card__add-to-cart-btn",P.id=`add-to-cart-btn_${e.itemId}`;let b=document.createElement("img");b.src=/*@__PURE__*/t(d),b.alt="Select";let _=document.createElement("span");_.innerText=" Add to Cart";let T=document.createElement("div");T.classList="product-card__bottom-wrapper";let f=document.createElement("h3");f.classList="product-card__description",f.textContent="Product Description";let w=document.createElement("p");// TEST-TBS REMOVE FOR PROD
// console.log("productCardMain: ", productCardMain);
return w.classList="product-card__description-text",w.textContent=e.itemDescription,// TO-DO STARTED
o.appendChild(i),c.appendChild(s),c.appendChild(p),c.appendChild(m),c.appendChild(u),c.appendChild(h),c.appendChild(C),c.appendChild(g),c.appendChild(L),c.appendChild(E),c.appendChild(y),c.appendChild(I),P.appendChild(b),P.appendChild(_),l.appendChild(c),l.appendChild(P),a.appendChild(o),a.appendChild(l),T.appendChild(f),T.appendChild(w),r.appendChild(n),r.appendChild(a),r.appendChild(T),r}}// import iconAddOrder from "../../other_assets/icon-add-order.png";
// import iconCart from "../../other_assets/icon-cart.png";
// import iconCc from "../../other_assets/icon-cc.png";
var c={};c=new URL(o("d5gZm").resolve("5WNTT"),import.meta.url).toString();class s{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewCart is connected!")};// Right Container - Create Cart Title
createCartSummaryTitle=()=>{let e=document.createElement("h2");return e.classList="cart-links-title",e.innerText="Cart",e};// Right Container - Create Cart Item Button
createCartItemButton=(e,t)=>{let r=document.createElement("button");return r.classList="cart-link-btn",r.id=`cart-link-btn_${t}`,r.style=`background-image: url(${e});`,r};// Right Container - Create Cart Products Icons Block
createCartProductItemsBlock=e=>{let t=document.createElement("div");if(t.classList="cart-links-wrapper",0===e.length){let e=document.createElement("p");e.classList="cart-links-empty-msg",e.innerText="Cart is empty",t.appendChild(e)}else // console.log("Action: Right Container - Render Cart Icons");
for(let r of e){// TEST-TBS - REMOVE IN PROD
// console.log("productObject: ", productObject);
// console.log("productObject.itemId: ", productObject.itemId);
let e=this.controller.getImageByProductId(r.itemId),n=this.controller.getUrlByNameLocal(e),a=this.createCartItemButton(n,r.itemId);t.appendChild(a)}return t};// Right Container - Create Go-To-Cart Button
createGoToCartButton=()=>{let e=document.createElement("div");e.classList="cart-goto-btn-wrapper";let r=document.createElement("button");r.classList="cart-goto-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(c),n.alt="Select";let a=document.createElement("span");return a.innerText=" Cart",// Append elemens to respective parents
r.appendChild(n),r.appendChild(a),e.appendChild(r),e};// Right Container - Create "Proceed To Checkout" button
createProceedToCheckoutBtn=()=>{let e=document.createElement("div");e.classList="cart-checkout-btn-wrapper";let r=document.createElement("button");r.classList="cart-checkout-btn";let n=document.createElement("img");n.src=/*@__PURE__*/t(c),n.alt="Checkout";let a=document.createElement("span");return a.innerText=" Checkout",// Append elemens to respective parents
r.appendChild(n),r.appendChild(a),e.appendChild(r),e};// Right Container - create total amount block
createTotalAmountBlock=e=>{let t=document.createElement("div");t.classList="cart-total-amount-wrapper";let r=document.createElement("p");return r.classList="cart-total-amount",r.id="cart-total-amount",r.innerText=`Total: $${e.priceTotal}`,t.appendChild(r),t};// Right Container - Render Cart Summaary
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
a.id=`cart-item_${e.itemId}`;let o=document.createElement("div");o.classList="cart-item__img-wrapper";let d=document.createElement("img");d.classList="cart-item__img",d.src=this.controller.getUrlByNameLocal(e.itemImg);let i=document.createElement("div");i.classList="cart-item__summary-wrapper";let l=document.createElement("div");l.classList="cart-item__summary";let c=document.createElement("div");c.classList="cart-item__element-wrapper";let s=document.createElement("h1");s.classList="cart-item__product-name",s.textContent=e.itemName;let p=document.createElement("div");p.classList="cart-item__element-wrapper";let m=document.createElement("p");m.classList="cart-item__support-txt",m.textContent="Part Number: ";let u=document.createElement("h3");u.classList="cart-item__part-number",u.textContent=e.itemPN;let h=document.createElement("div");h.classList="cart-item__element-wrapper";let C=document.createElement("p");C.classList="cart-item__support-txt",C.textContent="Condition: ";let g=document.createElement("h3");g.classList="cart-item__condition",g.textContent=e.itemCondition;let L=document.createElement("div");L.classList="cart-item__element-wrapper";let E=document.createElement("p");E.classList="cart-item__support-txt",E.textContent="Certification: ";let y=document.createElement("h3");y.classList="cart-item__certification",y.textContent=e.itemCertification;let I=document.createElement("div");I.classList="cart-item__element-wrapper";let P=document.createElement("p");P.classList="cart-item__support-txt",P.textContent="Availability: ";let b=document.createElement("h3");b.classList="cart-item__availability",b.textContent=e.itemLeadTime;let _=document.createElement("div");_.classList="cart-item__price-qty";let T=document.createElement("h3");T.classList="cart-item__product-price",T.setAttribute("data-price-qty-id",e.itemId),T.innerText=`${e.itemCurrency} ${e.itemPrice} x ${t}`;let f=document.createElement("div");f.classList="cart-element__qty-mod_wrapper",f.id=`qty-mod_${e.itemId}`;let w=document.createElement("button");w.classList="cart-element__qty-mod_deduct-btn",w.innerText=" - ",w.id=`qty-deduct-btn_${e.itemId}`;let v=document.createElement("p");v.classList="cart-element__qty-mod_qty",v.id=`qty-indicator_${e.itemId}`,v.innerText=t;let O=document.createElement("button");// console.log("productCardMain: ", productCardMain);
return O.classList="cart-element__qty-mod_add-btn",O.innerText=" + ",O.id=`qty-add-btn_${e.itemId}`,// Assembly HTML code:
o.appendChild(d),c.appendChild(s),l.appendChild(c),p.appendChild(m),p.appendChild(u),l.appendChild(p),h.appendChild(C),h.appendChild(g),l.appendChild(h),L.appendChild(E),L.appendChild(y),l.appendChild(L),I.appendChild(P),I.appendChild(b),l.appendChild(I),n&&(f.appendChild(w),f.appendChild(v),f.appendChild(O)),_.appendChild(T),_.appendChild(f),l.appendChild(_),i.appendChild(l),a.appendChild(o),a.appendChild(i),a};// Left Container - Create Cart Page
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
let t=document.getElementById("cart-total-amount");t&&(t.innerText=`Total: $${e}`)}}class p{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ViewOrders is connected!")};// Right Container - Create Orders History Title
createOrdersHistoryTitle=()=>{let e=document.createElement("h2");return e.classList="order-list-title",e.innerText="Orders",e};// Right Container - Render Order Links
createOrdersHistorySummary=e=>{let t=this.createOrdersHistoryTitle(),r=document.createElement("div");for(let t of(r.classList="orders-list",e)){let e=document.createElement("button");e.classList="order-number-btn",e.id=`order_${t.orderId}`,e.innerText=t.orderId,r.appendChild(e)}// TEST-TBS - REMOVE FO PROD
// console.log("ordersHistorySummary: ", ordersHistorySummary);
return t.appendChild(r),t};// Right Container - Create OrderSummaryContentBlock
createOrderSummaryPriceBlock=(e,t)=>{let r=document.createElement("div");r.classList="order-summary";let n=document.createElement("h3");n.classList="order-summary-title",n.innerText="Order Summary";let a=document.createElement("div");a.classList="flex-between";let o=document.createElement("p");o.innerText="Items:";let d=document.createElement("p");d.innerText=`$${e.priceItems}`;let i=document.createElement("div");i.classList="flex-between";let l=document.createElement("p");l.innerText="Handling:";let c=document.createElement("p");c.innerText=`$${e.priceHandling}`;let s=document.createElement("div");s.classList="flex-between bold";let p=document.createElement("p");p.innerText="Total:";let m=document.createElement("p");return m.innerText=`$${e.priceTotal}`,a.appendChild(o),a.appendChild(d),i.appendChild(l),i.appendChild(c),s.appendChild(p),s.appendChild(m),r.appendChild(n),r.appendChild(a),r.appendChild(i),r.appendChild(s),t&&r.appendChild(this.createPlaceOrderButtonBlock()),r};// Right Container - Create PlaceOrderButtonBlock
createPlaceOrderButtonBlock=()=>{let e=document.createElement("div");e.classList="place-order-btn-wrapper";let t=document.createElement("button");return t.classList="place-order-btn",t.innerText="Place Order",e.appendChild(t),e};// Left Container - Create createCheckOutWrapper
createCheckOutWrapper=()=>{let e=document.createElement("div");e.classList="checkout-wrapper";let t=document.createElement("button");return t.classList="goto-cart-btn",t.innerText="< Back to Cart",e.appendChild(t),e};// Left Container - Create createOrderWrapper
createOrderWrapper=e=>{let t=document.createElement("div");t.classList="order-wrapper";let r=document.createElement("button");r.classList="goto-products-btn",r.innerText="< Back to Products";let n=document.createElement("h2");return n.classList="order-number",n.innerText=`Order # ${e.orderId}`,t.appendChild(r),t.appendChild(n),t};// Left Container - Create BillToAddressContentBlock
createBillToAddressContentBlock=(e,t)=>{let r=document.createElement("div");r.classList="address-wrapper";let n=document.createElement("h3");n.classList="address-title",n.innerText="Bill to Address";let a=document.createElement("p");a.innerText=e.custLegalName;let o=document.createElement("p");o.innerText=e.custBillToAddress;let d=document.createElement("p");d.innerText=e.userName;let i=document.createElement("p");i.innerText=e.userPhone;let l=document.createElement("p");return l.innerText=e.userEmail,r.appendChild(n),r.appendChild(a),r.appendChild(o),r.appendChild(d),r.appendChild(i),r.appendChild(l),t&&r.appendChild(this.createUpdateButtonBlock()),r};// Left Container - Create PaymentMethodContentBlock
createPaymentMethodContentBlock=(e,t,r)=>{let n=document.createElement("div");n.classList="payment-method-wrapper";let a=document.createElement("h3");a.classList="payment-method-title",a.innerText="Payment Method";let o=document.createElement("p");return o.innerText=r[e.paymentMethod],n.appendChild(a),n.appendChild(o),t&&n.appendChild(this.createUpdateButtonBlock()),n};// Left Container - createCheckOutCartWrapper
createCheckOutCartWrapper=()=>{let e=document.createElement("div");e.classList="checkout-cart-wrapper";let t=document.createElement("h3");return t.classList="checkout-cart-title",t.innerText="Cart",e.appendChild(t),e};// Left Container - Create UpdateButtonBlock
createUpdateButtonBlock=()=>{let e=document.createElement("div");e.classList="update-btn-wrapper";let t=document.createElement("button");return t.classList="update-btn",t.innerText="Update",e.appendChild(t),e}}class m{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewPopup is connected!")};createPopupMessage=e=>{// Create main wrapper div
let t=document.createElement("div");t.classList.add("popup-welcome-wrapper"),// Use Object.entries to iterate over welcomeDisclamer object
e.forEach(e=>{let r=document.createElement("p");r.innerText=e,// Append para to the main wrapper
t.appendChild(r)});// Create and append AGREE button
let r=document.createElement("button");return r.classList.add("update-btn"),r.setAttribute("id","agreeBtn"),r.innerText="I Agree",t.appendChild(r),t};createPopupUpdateAddress=()=>{// Create the main wrapper div
let e=document.createElement("div");e.classList.add("popup-address"),// Loop through the array and create each input field
[{label:"Company Name",name:"custLegalName",type:"text",placeholder:"AeroSupplyPlus LLC"},{label:"Company Address",name:"custAddress",type:"text",placeholder:"Suite 2023, Cactus Road, Springdale, FL, 33761 USA"},{label:"Company Contact",name:"custContactName",type:"text",placeholder:"Matthew Yampolski"},{label:"Company Contact Phone",name:"custPhone",type:"tel",placeholder:"+1 898 928928928"},{label:"Company Contact Email",name:"custEmail",type:"email",placeholder:"supply@aerosupplyplus.aero"}].forEach(t=>{let r=document.createElement("div");r.classList.add("popup-item-wrapper");let n=document.createElement("label");n.setAttribute("for",t.name),n.innerText=t.label;let a=document.createElement("input");a.setAttribute("type",t.type),a.setAttribute("name",t.name),a.setAttribute("placeholder",t.placeholder),// Append the label and input to the item wrapper
r.appendChild(n),r.appendChild(a),// Append the item wrapper to the main wrapper
e.appendChild(r)});// Create and append the update button
let t=document.createElement("button");return t.classList.add("update-btn"),t.setAttribute("id","updateAddressBtn"),t.innerText="Update",e.appendChild(t),e};createPopupUpdatePaymentMethod=e=>{// Create the main wrapper div
let t=document.createElement("div");t.classList.add("popup-payment-method"),// Use Object.entries to iterate over paymentMethods object
Object.entries(e).forEach(([e,r],n)=>{let a=document.createElement("div"),o=document.createElement("input");o.setAttribute("type","radio"),o.setAttribute("name","method"),o.setAttribute("id",e),o.setAttribute("value",r),0===n&&(o.checked=!0);let d=document.createElement("label");d.setAttribute("for",e),d.innerText=r,// Append the input and label to the div
a.appendChild(o),a.appendChild(d),// Append the div to the main wrapper
t.appendChild(a)});// Create and append the update button
let r=document.createElement("button");return r.classList.add("update-btn"),r.setAttribute("id","updatePaymentMethodBtn"),r.innerText="Update",t.appendChild(r),t}}class u{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ViewSuperadmin is connected!")}}var h=o("keq33");class C{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelProducts is connected!")}}class g{constructor(e){this.controller=e}checkModuleLinkage=()=>{console.log("HELLO, ModelCart is connected!")}}class L{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelOrders is connected!")}}class E{constructor(){}checkModuleLinkage=()=>{console.log("HELLO, ModelUser is connected!")};getSessionIdCustomerByCustomerId=(e,t)=>{let r=t.filter(t=>t.custId===e);return r[0]}}var y=o("1ggDV");// Init database instance (dataBase):
let I={},P="",b={},_={},T=[],f=[],w={},v={};// let newOrderDetails = {
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
const O=document.createElement("div");O.innerHTML="";const k=document.createElement("div");k.innerHTML="";const B=document.createElement("div");B.innerHTML="";// Init cross-ref Map: image - url
const D=new Map,A=new class{constructor(){this.viewProducts=new l(this),this.viewCart=new s(this),this.viewOrders=new p(this),this.viewPopup=new m,this.viewSuperadmin=new u,this.modelFirebase=new h.ModelFirebase,this.modelProducts=new C,this.modelCart=new g(this),this.modelOrders=new L,this.modelUser=new E,this.bodyNode=document.querySelector("body"),this.containerLeftNode=document.getElementById("containerLeft"),this.containerRightNode=document.getElementById("containerRight"),this.containerPupupNode=document.getElementById("containerPupup"),this.popupContentNode=document.getElementById("popupContent")}initializeAppMain=async()=>{for(let e of(// TEST AND TBS - REMOVE IN PRODUCTION
console.log("HELLO! INIT CARRIED OUT SUCCESFULLY"),this.viewProducts.checkModuleLinkage(),this.viewCart.checkModuleLinkage(),this.viewOrders.checkModuleLinkage(),this.viewPopup.checkModuleLinkage(),this.viewSuperadmin.checkModuleLinkage(),this.modelFirebase.checkModuleLinkage(),this.modelProducts.checkModuleLinkage(),this.modelCart.checkModuleLinkage(),this.modelOrders.checkModuleLinkage(),this.modelUser.checkModuleLinkage(),// Get data from database (Firebase) and keep in local dataBase{}
await this.getUpdateLocalDataBase(),// Create Image Links Map:
console.log("Action: Create Image Links Map imageLinksMap{}:"),I.productItems)){let t=await this.modelFirebase.getLinkToImage(e.itemImg).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});// FOR TEST AND TBS - REMOVE IN PROD:
// console.log("imageURL: ", imageURL);
D.set(e.itemImg,t)}// RUN DISCLAIMER FIRST
this.activatePopupWelcomeDisclaimer(),console.log("Assigned to [*** sessionIdNumber ***]: ",// Assign to sessionIdNumber a userId of the first user object/document from DB (usersData[0].userId)
P=I.usersData[0].userId),console.log("[*** sessionIdUser ***] initiated: ",// Assign to sessionIdUser a first object/document from DB (usersData[0])
b=I.usersData[0]),console.log("[*** sessionIdCustomer ***] initiated: ",// Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
_=this.getSessionIdCustomerData()),// GET VALUES TO CURRENT SESSION VARIABLES
// 1. Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
f=this.getCartItemsByUserID(P),console.log(`[*** sessionIdCartItems ***] for User ID ${P}: `,f),// 2. Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
T=this.getOrdersByUserID(P),console.log(`[*** sessionIdOrders ***] for User ID ${P}: `,T),// 3. Set "sessionIdCartDetails":
v=this.getSessionIdCartDetails(),console.log(`[*** sessionIdCartDetails ***] for User ID ${P}: `,v),// Left Container - Render product items
this.renderProductItemsList(I.productItems),// Right Container - Render Cart Summary
this.renderCartAndOrdersSummary(f,T),this.attachEventListenrs()};// TO-DO: check where it is used?
askForImageUrlFromStorage=async e=>{let t=await this.modelFirebase.getLinkToImage(e).then(e=>e).catch(e=>{console.log("Error getting download URL: ",e)});console.log("imageURL: ",t)};// Generate unique ID
handleNewIdGeneration=()=>this.modelFirebase.generateUniqueId();// Clear container
clearContainerLeft=()=>{this.containerLeftNode.innerHTML=""};clearContainerRight=()=>{this.containerRightNode.innerHTML=""};// Get or Update data from Firebase and keep in local dataBase{}.
getUpdateLocalDataBase=async()=>{for(let e of(console.log("Get or Update data from Firebase and keep in local dataBase{}."),y.dbCollectionNames))I[e]=await this.modelFirebase.get(e),console.log(`[*** dataBase.${e} ***] :`,I[e])};deleteObjectFromArrayByDocId=(e,t)=>{let r=e.filter(e=>e.docId===t);return -1!==r?(e.splice(r,1),console.log("Deleted element/document with docId = ",t)):console.log("Not found element/document with docId = ",t),e};// Assign to sessionIdCustomer an object/document associated with sesstionIdUser (by userId)
getSessionIdCustomerData=()=>_=this.modelUser.getSessionIdCustomerByCustomerId(b.custId,I.customersData);// Set "sessionIdCartDetails":
getSessionIdCartDetails=()=>{let e={userId:b.userId,userName:b.userName,userEmail:b.userEmail,userPhone:b.userPhone,custId:_.custId,custLegalName:_.custLegalName,custBillToAddress:_.custBillToAddress,custHandlingFee:_.custHandlingFee,paymentMethod:_.paymentMethod};return e};// Reset Session Cart Items (when order placed)
resetSessionIdCartItems=()=>{f=[]};// Revert back from map an image URL by image name
getUrlByNameLocal=e=>D.get(e);// Set "sessionIdCartItems" by sesstion's userId (sessionIdNumber):
getCartItemsByUserID=e=>I.cartsData.filter(t=>t.userId===e);// Set "sessionIdOrders" by sesstion's userId (sessionIdNumber):
// Old version:
// getOrdersByUserID = (sessionIdNumber) => {
//     return dataBase.ordersData.filter(
//         (order) => order.userId === sessionIdNumber
//     );
// };
// New version (sorted):
getOrdersByUserID=e=>I.ordersData.filter(t=>t.userId===e).sort((e,t)=>e.orderDate-t.orderDate);// Get "orderDetailsToDisplay" by orderNumber:
getOrderDetailsToDisplay=e=>I.ordersData.filter(t=>t.orderId===e)[0];// Get "orderItemsToDisplay" by orderNumber:
getOrderItemsToDisplay=e=>I.orderItemsData.filter(t=>t.orderId===e);getImageByProductId=e=>{let t=I.productItems.filter(t=>t.itemId===e);return t[0].itemImg};getPriceByProductId=(e,t)=>{let r=e.filter(e=>e.itemId===t);return r[0].itemPrice};getProdIdFromElementId=e=>e.split("_")[1];// Get product/object from "dataBase.productItems" product ID (itemId):
getProductObjectById=e=>{// Filter product array => single object array
let t=I.productItems.filter(t=>t.itemId===e);return 0===t.length?null:t[0]};getDocIdFromArrayByItemId=(e,t)=>{let r=e.filter(e=>e.itemId===t);return(// TEST-TBS - REMOVE FOR PROD
console.log("[*** filteredArray ***]: ",r),0===r.length)?null:r[0].docId};callToUpdateCartPriceVariable=()=>{// TEST-TBD
console.log("Received command to call for Price Variable update"),this.updateCartPriceVariable(f,w,I.productItems,_.custHandlingFee)};// MIGHT BE A PART OF MODEL:
updateCartPriceVariable=(e,t,r,n)=>{let a=0,o=0;// TO-DO: CHECK, if it is required here. Delete for now:
// console.log(
//     "MODEL - [*** sessionIdCartItems ***]: ",
//     sessionIdCartItems
// );
// console.log(
//     "MODEL - [*** sessionIdCartPrice ***]: ",
//     sessionIdCartPrice
// );
// console.log(
//     "MODEL - [*** dataBase.productItems ***]: ",
//     dataBase.productItems
// );
// console.log("MODEL - [*** sessionIdCustome ***]: ", sessionIdCustomer);
for(let t of e)a+=t.qty*this.getPriceByProductId(r,t.itemId);return o=a*n/100,t.priceItems=a,t.priceHandling=o,t.priceTotal=a+o,console.log("new sessionIdCartPrice: ",t),console.log("for sessionIdCartItems: ",e),t};// Left Container - Render product items
renderProductItemsList=e=>{let t=document.createElement("div");t.innerHTML="",t.appendChild(this.viewProducts.createProductItemsList(e)),this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Order CART
renderCartSummary=e=>{let t;t=0===e.length?this.viewCart.createEmptyCartPage(e):this.viewCart.createCartPage(e),this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Left Container - Render Product Card
renderProductCard=e=>{let t=this.viewProducts.createDetailedProductCard(e);this.clearContainerLeft(),this.containerLeftNode.appendChild(t)};// Right Container - Render Cart (no price) and Orders Summaries
renderCartAndOrdersSummary=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryNoTotal(e),a=this.viewOrders.createOrdersHistorySummary(t);// TEST-TBS - REMOVE IN PROD
// console.log("cartSummaryNoTotal: ", cartItems);
// console.log("ordersHistorySummary: ", ordersHistory);
r.appendChild(n),r.appendChild(a),this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Right Container - Render Cart (with price)
renderCartSummaryWithPrice=(e,t)=>{let r=document.createElement("div");r.innerHTML="";let n=this.viewCart.createNewCartSummaryWithPrice(e,t);r.appendChild(n),// TEST-TBS - REMOVE IN PROD
// console.log("cart Summary with Total: ", cartSummaryWrapper);
this.clearContainerRight(),this.containerRightNode.appendChild(r)};// Left Container - Render Checkout Panel
renderCheckOutPanel=()=>{this.clearContainerLeft();let e=this.viewOrders.createCheckOutWrapper();// Second argument ("true") is to create "Update" button
e.appendChild(this.viewOrders.createBillToAddressContentBlock(v,!0)),// Second argument ("true") is to create "Update" button
e.appendChild(this.viewOrders.createPaymentMethodContentBlock(v,!0,y.paymentMethods));let t=this.viewOrders.createCheckOutCartWrapper(),r=document.createElement("div");for(let e of(r.classList="checkout-cart-items",f)){let t=this.getProductObjectById(e.itemId);// Third argument ("checkout-cart-item") is a classList to pass to 'div' element
// Fourth argument ("true") is for not to create a "qty update" feature
r.appendChild(this.viewCart.createProductCardForCart(t,e.qty,"checkout-cart-item",!1))}t.appendChild(r),t.appendChild(this.viewOrders.createUpdateButtonBlock()),e.appendChild(t),this.containerLeftNode.appendChild(e)};// Left Container - Render Order Panel
renderOrderPanel=(e,t)=>{this.clearContainerLeft();let r=this.viewOrders.createOrderWrapper(e);// Second argument ("false") is to DO NOT create "Update" button
r.appendChild(this.viewOrders.createBillToAddressContentBlock(e,!1)),// Second argument ("false") is to DO NOT create "Update" button
r.appendChild(this.viewOrders.createPaymentMethodContentBlock(e,!1,y.paymentMethods));let n=this.viewOrders.createCheckOutCartWrapper(),a=document.createElement("div");for(let e of(a.classList="checkout-cart-items",t)){let t=this.getProductObjectById(e.itemId);// Third argument ("checkout-cart-item") is a classList to pass to 'div' element
// Fourth argument ("true") is for not to create a "qty update" feature
a.appendChild(this.viewCart.createProductCardForCart(t,e.qty,"checkout-cart-item",!1))}n.appendChild(a),r.appendChild(n),this.containerLeftNode.appendChild(r)};// Right Container - Render Checkout Price Panel
renderCheckOutPricePanel=()=>{this.clearContainerRight(),this.containerRightNode.appendChild(this.viewOrders.createOrderSummaryPriceBlock(w,!0))};// Right Container - Render Order Price Panel
renderOrderPricePanel=e=>{this.clearContainerRight(),this.containerRightNode.appendChild(this.viewOrders.createOrderSummaryPriceBlock(e,!1))};// SUPPORT FUNCTIONS FOR BUTTON HANDLERS
// Handle click of complex element by picking it's parent element class
findAncestorByClass=(e,t)=>{let r=e;for(;r&&!r.classList.contains(t);)r=r.parentElement;return r};// "< Back to Products" button
handleGotoProductsBtn=()=>{this.renderProductItemsList(I.productItems),// TO-DO: CHECK, if it is required here. Delete for now:
this.renderCartAndOrdersSummary(f,T)};// "Add to Cart" button at detailed product card (page)
handleAddToCartBtn=e=>{// TEST-TBS REMOVE IN PROD
console.log(`TO-DO: Add product with ID ${e.id} to cart.`);// Get product/object ID (itemId) from DOM element ID (string)
let t=this.getProdIdFromElementId(e.id),r=this.getDocIdFromArrayByItemId(f,t);r?this.handleQtyChangeBtn(e,1):this.addProduct(t,P),this.renderCartAndOrdersSummary(f,T)};// "Go to Cart" button at right panel or checkout panel
handleGotoCartBtn=()=>{// TEST-TBS REMOVE IN PROD
console.log("Received command to display CART."),this.updateCartPriceVariable(f,w,I.productItems,_.custHandlingFee),this.renderCartSummary(f),this.renderCartSummaryWithPrice(f,w)};// Handle Order Placement
handleOrderPlacement=async()=>{if(// TEST-TBS REMOVE IN PROD
console.log("Received command to PLACE ORDER (HANDLER CONNECTED)."),0===w.priceTotal){this.activatePopupMessage(y.errorEmptyCart);return}// 1.A. Prepare newOrderDetails to pass to Firestore
let e=JSON.parse(JSON.stringify(this.modelFirebase.setNewOrderDetails(v,w)));// TEST-TBS REMOVE IN PROD
console.log("[*** newOrderDetails ***] set: ",e);// 1.B. Pass newOrderDetails to Firestore
try{this.handleAddDocToFirestore("ordersData",e)}catch(e){console.error("Error adding newOrderDetails to Firestore: ",e)}// 1.C. Push newOrderDetails to dataBase.ordersData
// dataBase.ordersData.push(newOrderDetails);
// 2.A. Prepare newOrderItems to pass to Firestore
let t=JSON.parse(JSON.stringify(f)),r=JSON.parse(JSON.stringify(e.orderId));for(let e in // TEST-TBS REMOVE IN PROD
console.log("[*** newOrderItems ***] set: ",t),t){t[e].orderId=r,console.log("[*** productItem ***] set: ",t[e]);// 2.B. Pass productItem to Firestore
try{this.handleAddDocToFirestore("orderItemsData",t[e])}catch(e){console.error("Error adding productItem to Firestore: ",e)}// 2.C. Push productItem to dataBase.orderItemsData
// dataBase.orderItemsData.push(newOrderItems[productItem]);
}// 3.A. Clear sessionIdCartItems from Firestore
for(let e in f){console.log("[*** sessionIdCartItems[cartItem].docId ***] to delete from cartsData: ",f[e].docId);try{this.handleDeleteDocFromFirestore("cartsData",f[e].docId)}catch(e){console.error("Error deleting sessionIdCartItems from Firestore: ",e)}}// 3.B. Reset sessionIdCartItems
this.resetSessionIdCartItems(),console.log("UPDATE LOCAL DATABASE VARIABLES HERE");try{await this.getUpdateLocalDataBase()}catch(e){console.error("Error updating local variables: ",e)}this.handleDisplayOrder(r)};// "Proceed to checkout" button at right panel
handleProceedToCheckoutBtn=()=>{console.log("Received command PROCEED TO CHECKOUT"),this.renderCheckOutPanel(),this.renderCheckOutPricePanel()};// Product card as "button" at main page
handleProductItem=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display CARD for product ID: ",e.id);let t=this.getProdIdFromElementId(e.id),r=this.getProductObjectById(t);this.renderProductCard(r)};// Display Order By Order Number
handleDisplayOrder=e=>{console.log("Received command DISPLAY ORDER:",e);// Get "orderDetailsToDisplay" by orderNumber:
let t=this.getOrderDetailsToDisplay(e);console.log("orderDetailsToDisplay: ",t);// Get "orderItemsToDisplay" by orderNumber:
let r=this.getOrderItemsToDisplay(e);console.log("orderItemsToDisplay: ",r),this.renderOrderPanel(t,r),this.renderOrderPricePanel(t)};handleDisplayHistoricalOrder=e=>{// TEST-TBS REMOVE IN PROD
console.log("Display ORDER with ID: ",e.id);let t=this.getProdIdFromElementId(e.id);this.handleDisplayOrder(t)};handleQtyChangeBtn=(e,t)=>{let r=this.getProdIdFromElementId(e.id);// TEST-TBS REMOVE IN PROD
console.log("Function: 'handleQtyChangeBtn()': update QTY of prod ID: ",e.id),console.log("'sessionIdCartItems': ",f),console.log("itemId: ",r);// product/object to update:
let n=JSON.parse(JSON.stringify(f.find(e=>e.itemId===r)));if(!n){console.log("Product/object not found");return}// remove product from array:
let a=f.filter(e=>e.itemId!==r);n.qty+t>0?(this.updateProduct(a,n,t),this.updateCartDOM(r,n)):(this.deleteProduct(a,n),this.handleGotoCartBtn())};// Update payment method if new one is selected by User
updatePaymentMethodInSession=()=>{let e=this.handleRadioButtonSelection();null!==e?v.paymentMethod!==e?(// Compare with current value
v.paymentMethod=e,console.log(`Updated paymentMethod to ${e}`)):console.log("paymentMethod is the same. No update needed."):console.log("No radio button selected. Cannot update paymentMethod.")};addProduct=(e,t)=>{let r={docId:this.handleNewIdGeneration(),itemId:e,qty:1,userId:t};console.log("MODEL: try to add to database.cartsData a [*** newProductToCart *** ]: ",r),this.handleAddDocToFirestore("cartsData",r),f.push(r),console.log("Updated [*** sessionIdCartItems ***]: ",f)};updateProduct=(e,t,r)=>{// Modify product/object
t.qty+=r,// Add product back to array
e.push(t),// Update Firestore
this.handleUpdateDocInFirestore("cartsData",t),// Update global variable
f=e};deleteProduct=(e,t)=>{// Delete product from Firestore
this.handleDeleteDocFromFirestore("cartsData",t.docId),// Update global variable
f=e};updateCartDOM=(e,t)=>{//  update/re-render 'qty' in user's cart (DOM)
this.handleViewOfPartQty(e,t.qty),//  update total price 'sessionIdCartPrice' (global variable)
this.callToUpdateCartPriceVariable(),//  update/re-render 'total price' in user's cart (DOM)
this.handleViewOfTotalPrceInCart(w.priceTotal)};// Update product QTY in CART in 2 locations: price and selector
handleViewOfPartQty=(e,t)=>{// TEST-TBS REMOVE IN PROD
console.log("Got comand to update product qty with:"),console.log("Product ID: ",e),console.log("New QTY: ",t);let r=this.getProductObjectById(e);this.viewCart.updatePartQuantity(r,t)};// Update total price (items + handling) in menu (right container)
handleViewOfTotalPrceInCart=e=>{this.viewCart.updateTotalPrice(e)};// *** POPUP SECTION FUNCTIONS ***
activatePopupWelcomeDisclaimer=()=>{// Clear Popup Content
console.log("Got comand to ACTIVATE WELCOME DISCLAIMER"),this.popupContentNode.innerHTML="";let e=this.viewPopup.createPopupMessage(y.welcomeDisclaimer);this.popupContentNode.appendChild(e),this.togglePopup()};activatePopupMessage=e=>{// Clear Popup Content
console.log("Got comand to ACTIVATE CUSTOM MESSAGE"),this.popupContentNode.innerHTML="";let t=this.viewPopup.createPopupMessage(e);this.popupContentNode.appendChild(t),this.togglePopup()};activatePopupUpdateAddress=()=>{// Clear Popup Content
console.log("Got comand to ACTIVATE POPUP"),this.popupContentNode.innerHTML="";let e=this.viewPopup.createPopupUpdateAddress();this.popupContentNode.appendChild(e),this.togglePopup()};activatePopupUpdatePaymentMethod=()=>{// Clear Popup Content
console.log("Got comand to ACTIVATE POPUP"),this.popupContentNode.innerHTML="",this.popupContentNode.appendChild(this.viewPopup.createPopupUpdatePaymentMethod(y.paymentMethods)),this.togglePopup()};togglePopup=()=>{this.bodyNode.classList.toggle("body-fixed"),this.containerPupupNode.classList.toggle("popup-container-open")};// Function to handle radio button selection in POPUP SECTION
handleRadioButtonSelection=()=>{let e=document.querySelectorAll('input[type="radio"][name="method"]'),t=null;return(e.forEach(e=>{e.checked&&(t=e.id)}),t)?(console.log("Selected radio button ID: ",t),t):(console.log("No radio button selected!"),null)};// *** BUTTON CLICK HANDLERS ***
handleButtonsClickLeft=e=>{let t=e.target;// "< Back to Products" button
if(t.classList.contains("goto-products-btn")){this.handleGotoProductsBtn();return}// "< Back to Cart" button
if(t.classList.contains("goto-cart-btn")){this.handleGotoCartBtn();return}// "Add to Cart" button at detailed product card (page)
let r=t.closest(".product-card__add-to-cart-btn");if(r){this.handleAddToCartBtn(r);return}// "Add to Cart" button at short product card (main page)
let n=this.findAncestorByClass(t,"product-item__content_price-btn");if(n){this.handleAddToCartBtn(n);return}// Product card as "button" at main page
let a=this.findAncestorByClass(t,"product-item");// Qty deduct button at Cart page
if(a&&this.handleProductItem(a),t.classList.contains("cart-element__qty-mod_deduct-btn")){this.handleQtyChangeBtn(t,-1);return}// Qty add button at Cart page
if(t.classList.contains("cart-element__qty-mod_add-btn")){this.handleQtyChangeBtn(t,1);return}// "Update" button for Bill-to-Address at checkout
let o=this.findAncestorByClass(t,"address-wrapper");o&&(console.log("Got command to UPDATE ADDRESS"),this.activatePopupUpdateAddress());// "Update" button for Payment Method at checkout
let d=this.findAncestorByClass(t,"payment-method-wrapper");d&&(console.log("Got command to UPDATE PAYMENT METHOD"),this.activatePopupUpdatePaymentMethod());// "Update" button for Cart Items at checkout
let i=this.findAncestorByClass(t,"checkout-cart-wrapper");i&&(console.log("Got command to UPDATE CHECKOUT CART ITEMS"),this.handleGotoCartBtn())};handleButtonsClickRight=e=>{let t=e.target;t.classList.contains("cart-link-btn")&&this.handleProductItem(t),t.classList.contains("order-number-btn")&&this.handleDisplayHistoricalOrder(t);// "Go to cart" button at right panel
let r=this.findAncestorByClass(t,"cart-goto-btn");r&&this.handleGotoCartBtn();// "Proceed to checkout" button at right panel
let n=this.findAncestorByClass(t,"cart-checkout-btn");n&&this.handleProceedToCheckoutBtn();// "Place Order" button at right panel
let a=this.findAncestorByClass(t,"place-order-btn");a&&(console.log("Received PLACE ORDER command."),this.handleOrderPlacement())};handleButtonsClickPupup=e=>{let t=e.target;"agreeBtn"===t.id&&(console.log("clicked element with class: ",t.classList),this.togglePopup()),"updateAddressBtn"===t.id&&(console.log("clicked element with class: ",t.classList),this.togglePopup(),this.activatePopupMessage(y.errorInsufficientPermission)),"updatePaymentMethodBtn"===t.id&&(console.log("clicked element with class: ",t.classList),this.updatePaymentMethodInSession(),console.log("Check if sessionIdCartDetails updated: ",v),this.renderCheckOutPanel(),this.togglePopup())};attachEventListenrs=()=>{this.containerLeftNode.addEventListener("click",this.handleButtonsClickLeft),this.containerRightNode.addEventListener("click",this.handleButtonsClickRight),this.containerPupupNode.addEventListener("click",this.handleButtonsClickPupup)};// DATABASE SUPPORT FUNCTIONS
handleAddDocToFirestore=(e,t)=>{console.log("Controller: got a requst to add [object]: ",t),console.log("to [collction]: ",e),this.modelFirebase.addDocToFirestore(e,t)};handleUpdateDocInFirestore=(e,t)=>{console.log("Controller: got a requst update [object]: ",t),console.log("in [collction]: ",e),this.modelFirebase.updateDocInFirestore(e,t)};handleDeleteDocFromFirestore=(e,t)=>{console.log("Controller: got a requst to delete [object]: ",t),console.log("from [collection]: ",e),this.modelFirebase.deleteDocFromFirestore(e,t)}};try{A.initializeAppMain()}catch(e){console.error("An error occured duting app initialization:",e),alert("Something went wrong. Please contact the app admin or try again later.")}//# sourceMappingURL=index.7f7355c6.js.map

//# sourceMappingURL=index.7f7355c6.js.map
