!function(){let e=[{id:"c001",custCode:"aespl",custSetDate:"20230812",custLegalName:"AeroSupplyPlus LLC",custAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero",custContactId:"1001",custKycChecked:!0,custKycDate:"20230812",custPaymentTerms:["wire","card","net30"],custPaymentMethod:"card",custHandlingFee:.015,custActive:!0,custOrders:["100001","100002","100003"]}],t="customersData",i="productItems",a="usersData",s="ordersData",r=document.getElementById("containerLeft"),o=document.getElementById("containerRight");console.log("Module linked succesfully"),console.log(e);let l=()=>{o.innerHTML=""},n=e=>{let t=document.createElement("tr"),i=document.createElement("th");i.classList="db-section__table_cell",t.appendChild(i);let a=document.createElement("th");for(let[i,s]of(a.classList="db-section__table_cell",t.appendChild(a),Object.entries(e))){let e=document.createElement("th");e.classList="db-section__table_cell",e.innerText=`${i}`,t.appendChild(e)}let s=document.createElement("th");return s.classList="db-section__table_cell",t.appendChild(s),t},d=(e,t)=>{let i=document.createElement("tr"),a=document.createElement("td");a.classList="db-section__table_cell";let s=document.createElement("button");s.classList="db-section__table_button",s.innerText="+",a.appendChild(s),i.appendChild(a);let r=document.createElement("td");r.classList="db-section__table_cell";let o=document.createElement("button");for(let[a,s]of(o.classList="db-section__table_button",o.innerText="u",r.appendChild(o),i.appendChild(r),Object.entries(e))){let r=document.createElement("td");r.classList="db-section__table_cell",r.id=`${t}_${e.id}_${a}`;let o=document.createElement("input");o.type="text",o.id=`${t}_${e.id}_${a}_input`,o.value=`${s}`,r.appendChild(o),i.appendChild(r)}let l=document.createElement("td");l.classList="db-section__table_cell";let n=document.createElement("button");return n.classList="db-section__table_button",n.innerText="-",l.appendChild(n),i.appendChild(l),i},u=(e,t)=>{let i=document.createElement("table"),a=n(e[0]);for(let s of(i.appendChild(a),e)){let e=d(s,t);i.appendChild(e)}return i},m=(e,t)=>{let i=document.createElement("div");i.classList="db-section";let a=document.createElement("h2");a.classList="db-section__title",a.id=`${t}`,a.innerText=t;let s=u(e,t);s.classList="db-section__table",i.appendChild(a),i.appendChild(s),console.log(i),r.appendChild(i)},c=e=>{let t=document.createElement("li");t.classList="menu-btn-wrapper";let i=document.createElement("a");return i.classList="menu-btn",i.href=`#${e}`,i.innerText=`${e}`,t.appendChild(i),t},p=()=>{let e=document.createElement("div");e.classList="menu-section";let r=document.createElement("h2");r.classList="menu-title",r.innerText="Tables",e.appendChild(r);let o=document.createElement("ul"),l=c(a);o.appendChild(l);let n=c(t);o.appendChild(n);let d=c(i);o.appendChild(d);let u=c(s);return o.appendChild(u),e.appendChild(o),e},C=(e,t)=>{idParts=e.split("_");let i=idParts[0],a=idParts[2],s=idParts[3];return{arrayName:i,objectId:a,key:s,value:t}};document.addEventListener("input",function(e){if("INPUT"===e.target.tagName){let t=e.target.id,i=e.target.value,a=C(t,i);console.log(a)}}),r.innerHTML="",m([{id:"1001",custId:"c001",userName:"Mattew Yampolski",userSetDate:"20230815",userAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",userPhone:"+1 898 9289289",userEmail:"matt.y@aerosupplyplus.aero",userActive:!0,userAdmin:!0}],a),m(e,t),m([{id:"0032-0001-000",itemSetDate:"20230812",itemName:"Wheel Main Assy",itemCat:"component",itemImg:"",itemPN:"BS30-737NG-3254",itemSN:"various",itemPrice:18130,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"on stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0032-0002-000",itemSetDate:"20230812",itemName:"Wheel Nose Assy",itemCat:"component",itemImg:"",itemPN:"BS30-737NG-3390",itemSN:"various",itemPrice:10680,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0032-0001-100",itemSetDate:"20230825",itemName:"Wheel Main Assy",itemCat:"component",itemImg:"",itemPN:"GY30-737NG-9001",itemSN:"various",itemPrice:18630,itemQty:1,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0079-0001-000",itemSetDate:"20230815",itemName:"Filter Assy Oil",itemCat:"component",itemImg:"",itemPN:"123-98418-2752",itemSN:"various",itemPrice:12690,itemQty:5,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0079-0002-000",itemSetDate:"20230815",itemName:"Filter Element",itemCat:"part",itemImg:"",itemPN:"123-98418-9999",itemSN:"various",itemPrice:650,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0025-0001-000",itemSetDate:"20230816",itemName:"Seat Block Assy",itemCat:"component",itemImg:"",itemPN:"SA7428-777-3000",itemSN:"various",itemPrice:27490,itemQty:500,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC","UK CAA"],itemLeadTime:"60 Days",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"1000-0001-000",itemSetDate:"20230820",itemName:"Handbook, Aviation Maintenance Technician - General",itemCat:"manual",itemImg:"",itemPN:"FAA-H-8083-30-ATB",itemSN:"not applicable",itemPrice:97,itemQty:50,itemCurrency:"$",itemCondition:"Serviceable",itemCertification:["FAA"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."}],i),m([{id:"100001",orderCustId:"c001",orderUserId:"1001",orderDateSet:"20230828",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderBillTo:{custLegalName:"AeroSupplyPlus LLC",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custContactName:"Mattew Yampolski",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero"},orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderCart:[{itemId:"",itemPrice:"",qty:""}],orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$"},{id:"100002",orderCustId:"c001",orderUserId:"1001",orderDateSet:"20230828",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderBillTo:{custLegalName:"AeroSupplyPlus LLC",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custContactName:"Mattew Yampolski",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero"},orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderCart:[{itemId:"",itemPrice:"",qty:""}],orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$"},{id:"100003",orderCustId:"c001",orderUserId:"1001",orderDateSet:"20230828",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderBillTo:{custLegalName:"AeroSupplyPlus LLC",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custContactName:"Mattew Yampolski",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero"},orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderCart:[{itemId:"",itemPrice:"",qty:""}],orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$"}],s),(()=>{l();let e=p();o.appendChild(e)})()}();
//# sourceMappingURL=superadmin.6e5e2f18.js.map