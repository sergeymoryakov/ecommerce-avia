const e=[{id:"c001",custCode:"aespl",custSetDate:"20230812",custLegalName:"AeroSupplyPlus LLC",custAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero",custContactId:"1001",custKycChecked:!0,custKycDate:"20230812",custPaymentTerms:["wire","card","net30"],custPaymentMethod:"card",custHandlingFee:.015,custActive:!0,custOrders:["100001","100002","100003"]}],t=document.getElementById("containerLeft");document.getElementById("containerRight"),console.log("Module linked succesfully"),console.log(e);const i=e=>{let t=document.createElement("tr"),i=document.createElement("th");i.classList="db-section__table_cell",t.appendChild(i);let a=document.createElement("th");for(let[i,s]of(a.classList="db-section__table_cell",t.appendChild(a),Object.entries(e))){let e=document.createElement("th");e.classList="db-section__table_cell",e.innerText=`${i}`,t.appendChild(e)}let s=document.createElement("th");return s.classList="db-section__table_cell",t.appendChild(s),t},a=(e,t)=>{let i=document.createElement("tr"),a=document.createElement("td");a.classList="db-section__table_cell";let s=document.createElement("button");s.classList="db-section__table_button",s.innerText="+",a.appendChild(s),i.appendChild(a);let o=document.createElement("td");o.classList="db-section__table_cell";let r=document.createElement("button");for(let[a,s]of(r.classList="db-section__table_button",r.innerText="u",o.appendChild(r),i.appendChild(o),Object.entries(e))){let o=document.createElement("td");o.classList="db-section__table_cell",o.id=`${t}__${e.id}_${a}`,o.innerText=`${s}`,i.appendChild(o)}let l=document.createElement("td");l.classList="db-section__table_cell";let n=document.createElement("button");return n.classList="db-section__table_button",n.innerText="-",l.appendChild(n),i.appendChild(l),i},s=(e,t)=>{let s=document.createElement("table"),o=i(e[0]);for(let i of(s.appendChild(o),e)){let e=a(i,t);s.appendChild(e)}return s},o=(e,i)=>{let a=document.createElement("div");a.classList="db-section";let o=document.createElement("h2");o.classList="db-section__title",o.innerText=i;let r=s(e,i);r.classList="db-section__table",a.appendChild(o),a.appendChild(r),console.log(a),t.appendChild(a)};t.innerHTML="",o([{id:"1001",custId:"c001",userName:"Mattew Yampolski",userSetDate:"20230815",userAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",userPhone:"+1 898 9289289",userEmail:"matt.y@aerosupplyplus.aero",userActive:!0,userAdmin:!0}],"usersData"),o(e,"customersData"),o([{id:"0032-0001-000",itemSetDate:"20230812",itemName:"Wheel Main Assy",itemCat:"component",itemImg:"",itemPN:"BS30-737NG-3254",itemSN:"various",itemPrice:18130,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"on stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0032-0002-000",itemSetDate:"20230812",itemName:"Wheel Nose Assy",itemCat:"component",itemImg:"",itemPN:"BS30-737NG-3390",itemSN:"various",itemPrice:10680,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0032-0001-100",itemSetDate:"20230825",itemName:"Wheel Main Assy",itemCat:"component",itemImg:"",itemPN:"GY30-737NG-9001",itemSN:"various",itemPrice:18630,itemQty:1,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0079-0001-000",itemSetDate:"20230815",itemName:"Filter Assy Oil",itemCat:"component",itemImg:"",itemPN:"123-98418-2752",itemSN:"various",itemPrice:12690,itemQty:5,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0079-0002-000",itemSetDate:"20230815",itemName:"Filter Element",itemCat:"part",itemImg:"",itemPN:"123-98418-9999",itemSN:"various",itemPrice:650,itemQty:50,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"0025-0001-000",itemSetDate:"20230816",itemName:"Seat Block Assy",itemCat:"component",itemImg:"",itemPN:"SA7428-777-3000",itemSN:"various",itemPrice:27490,itemQty:500,itemCurrency:"$",itemCondition:"New",itemCertification:["EASA","FAA","CAAC","UK CAA"],itemLeadTime:"60 Days",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."},{id:"1000-0001-000",itemSetDate:"20230820",itemName:"Handbook, Aviation Maintenance Technician - General",itemCat:"manual",itemImg:"",itemPN:"FAA-H-8083-30-ATB",itemSN:"not applicable",itemPrice:97,itemQty:50,itemCurrency:"$",itemCondition:"Serviceable",itemCertification:["FAA"],itemLeadTime:"On Stock",itemDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta."}],"productItems"),o([{id:"100001",orderCustId:"c001",orderUserId:"1001",orderDateSet:"20230828",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderBillTo:{custLegalName:"AeroSupplyPlus LLC",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custContactName:"Mattew Yampolski",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero"},orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderCart:[{itemId:"",itemPrice:"",qty:""}],orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$"},{id:"100002",orderCustId:"c001",orderUserId:"1001",orderDateSet:"20230828",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderBillTo:{custLegalName:"AeroSupplyPlus LLC",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custContactName:"Mattew Yampolski",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero"},orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderCart:[{itemId:"",itemPrice:"",qty:""}],orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$"},{id:"100003",orderCustId:"c001",orderUserId:"1001",orderDateSet:"20230828",orderDatePlaced:"20230828",orderDateReady:"20230828",orderDateCompleted:"20230829",orderBillTo:{custLegalName:"AeroSupplyPlus LLC",custBillToAddress:"2023, Cactus Road, Springdale, FL, 33761 USA",custContactName:"Mattew Yampolski",custPhone:"+1 898 9289289",custEmail:"supply@aerosupplyplus.aero"},orderPaymentMethod:"card",orderPaymentDeadline:"20230829",orderPaymentDone:"20230828",orderCart:[{itemId:"",itemPrice:"",qty:""}],orderPriceItems:1374982,orderPriceHandling:378,orderPriceTotal:1375360,orderCurrency:"$"}],"ordersData");
//# sourceMappingURL=admin.f7d561f5.js.map
