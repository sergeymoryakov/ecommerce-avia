export let backupInstance = {
    usersData: [
        {
            docId: "eff81b76-d962-4f8f-99f6-abb605762c2e",
            userName: "Mattew Yampolski",
            userEmail: "matt.y@aerosupplyplus.aero",
            userPhone: "+1 898 9289289",
            userId: "1001",
            userAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
            userActive: true,
            custId: "c001",
            transDate: "20230815",
            transId: "jkjur-tewvn-00001",
            userAdmin: true,
        },
    ],
    customersData: [
        {
            docId: "5480d75f-2b41-486f-bace-b55dcfd4c15d",
            active: true,
            custKycDate: "20230812",
            custKycChecked: "true",
            custId: "c001",
            custAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
            custOrders: "",
            custLegalName: "AeroSupplyPlus LLC",
            paymentMethod: "card",
            custContactId: "1001",
            custBillToAddress: "2023, Cactus Road, Springdale, FL, 33761 USA",
            custHandlingFee: 0.015,
            custCode: "aespl",
            paymentTerms: "wire,card,net30",
            custEmail: "supply@aerosupplyplus.aero",
            custPhone: "+1 898 9289289",
            transId: "jkjur-tewvn-00002",
            transDate: "20230812",
        },
    ],
    cartsData: [
        {
            docId: "44c6f807-7717-4685-b6fa-456d4ba86c84",
            qty: 2,
            userId: "1001",
            itemId: "2a4bfab0-556e-45e4-bdf6-91fc7bf99f59",
        },
        {
            docId: "77360d9c-ab6b-4148-b0f2-b355c70f2596",
            qty: 2,
            userId: "1001",
            itemId: "60a05264-8d0b-4fb4-a3be-fc9602d25913",
        },
        {
            docId: "dcc5f94e-e442-4fda-88a5-20a228c6ba8a",
            itemId: "4c4d2d95-3dc3-40da-b6ef-3a24bca843d3",
            qty: 2,
            userId: "1001",
        },
        {
            docId: "dee7073e-39e0-4367-8aef-5951e6b0bd83",
            itemId: "1d50f558-7df3-4f6d-9a09-724a2839a0da",
            userId: "1001",
            qty: 1,
        },
    ],
    ordersData: [
        {
            docId: "2f609735-177f-4a46-890b-29d1d35b8f8f",
            orderPaymentDeadline: "20230829",
            orderId: "100005",
            transId: "jkjur-tewvn-00013",
            custId: "c001",
            orderPaymentMethod: "card",
            orderDatePlaced: "20230828",
            orderPriceHandling: 378,
            orderCurrency: "$",
            userId: "1001",
            orderPriceItems: 1374982,
            orderPaymentDone: "20230828",
            orderDateCompleted: "20230829",
            orderDateReady: "20230828",
            orderPriceTotal: 1375360,
            transDate: "20230828",
        },
        {
            docId: "561b39ec-4e8e-458d-8eea-f7ece828aa24",
            orderPriceHandling: 378,
            custId: "c001",
            orderPaymentDone: "20230828",
            orderPriceItems: 1374982,
            orderCurrency: "$",
            orderDateCompleted: "20230829",
            orderId: "100001",
            orderDateReady: "20230828",
            orderPaymentDeadline: "20230829",
            orderPaymentMethod: "card",
            userId: "1001",
            transDate: "20230828",
            transId: "jkjur-tewvn-00013",
            orderPriceTotal: 1375360,
            orderDatePlaced: "20230828",
        },
        {
            docId: "7bd041ab-953f-4d25-8f1e-1ad55d465249",
            transId: "jkjur-tewvn-00013",
            orderCurrency: "$",
            orderPriceItems: 1374982,
            orderDateCompleted: "20230829",
            orderDateReady: "20230828",
            orderPaymentDeadline: "20230829",
            orderId: "100004",
            orderPriceTotal: 1375360,
            custId: "c001",
            orderPaymentMethod: "card",
            orderDatePlaced: "20230828",
            orderPriceHandling: 378,
            orderPaymentDone: "20230828",
            userId: "1001",
            transDate: "20230828",
        },
        {
            docId: "a491193e-012a-402d-9209-4c2313226c85",
            orderDateReady: "20230828",
            custId: "c001",
            orderPaymentDeadline: "20230829",
            userId: "1001",
            orderPriceTotal: 1375360,
            orderDateCompleted: "20230829",
            orderPaymentDone: "20230828",
            transId: "jkjur-tewvn-00013",
            orderPriceHandling: 378,
            orderPaymentMethod: "card",
            orderId: "100002",
            orderPriceItems: 1374982,
            orderDatePlaced: "20230828",
            transDate: "20230828",
            orderCurrency: "$",
        },
        {
            docId: "ce89ecfa-66fb-41c0-98a0-7ef5f310c0ae",
            transId: "jkjur-tewvn-00013",
            orderDatePlaced: "20230828",
            orderPriceTotal: 1375360,
            orderCurrency: "$",
            orderId: "100003",
            orderPaymentDone: "20230828",
            orderPriceItems: 1374982,
            orderDateCompleted: "20230829",
            custId: "c001",
            orderPaymentMethod: "card",
            orderPaymentDeadline: "20230829",
            orderPriceHandling: 378,
            orderDateReady: "20230828",
            userId: "1001",
            transDate: "20230828",
        },
    ],
    orderItemsData: [
        {
            docId: "5237269d-ab38-4058-bca5-3503f46ddef0",
            reserved: "",
            qty: 2,
            orderId: "100001",
            itemId: "0032-0001-000",
        },
    ],
    productItems: [
        {
            docId: "0597a6cb-471f-4894-bc87-49a2626c0efd",
            itemId: "0597a6cb-471f-4894-bc87-49a2626c0efd",
            itemCondition: "New",
            itemCurrency: "$",
            itemPN: "EGT-1B-28",
            transId: "jkjur-tewvn-00003",
            itemPrice: "17500000",
            itemCat: "engine",
            itemImg: "img_eng_07.jpeg",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemName: "Engine Gas Turbine",
            itemSN: "various",
            itemQty: "1",
            itemCertification: "EASA, FAA, UK CAA, CAAC",
            transDate: "20230812",
            itemLeadTime: "quote",
        },
        {
            docId: "1d50f558-7df3-4f6d-9a09-724a2839a0da",
            itemName: "Wheel Nose",
            itemLeadTime: "on stock",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            transId: "jkjur-tewvn-00003",
            itemQty: "10",
            itemPrice: "9130",
            itemSN: "various",
            itemCat: "component",
            itemCondition: "New",
            itemCertification: "EASA, FAA, CAAC",
            itemId: "1d50f558-7df3-4f6d-9a09-724a2839a0da",
            itemCurrency: "$",
            itemPN: "HON-3240-737-051",
            itemImg: "img_wheel_main_2.jpeg",
            transDate: "20230812",
        },
        {
            docId: "1f6489f8-cbe0-46ca-b90b-aab230f7aa50",
            itemCertification: "N/A",
            itemCurrency: "$",
            itemName: "Operation Manual for VIP and Charter Flights",
            transDate: "20230812",
            transId: "jkjur-tewvn-00003",
            itemId: "1f6489f8-cbe0-46ca-b90b-aab230f7aa50",
            itemCondition: "New",
            itemCat: "manual",
            itemSN: "various",
            itemImg: "img_book_02.jpeg",
            itemLeadTime: "on stock",
            itemPrice: "117",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemPN: "001-VIP-777123-0",
            itemQty: "100",
        },
        {
            docId: "2a4bfab0-556e-45e4-bdf6-91fc7bf99f59",
            itemQty: "50",
            itemCurrency: "$",
            itemPN: "100-737MAX-987456-0",
            itemCertification: "N/A",
            itemLeadTime: "on stock",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            transId: "jkjur-tewvn-00003",
            itemPrice: "117",
            itemCondition: "New",
            itemId: "2a4bfab0-556e-45e4-bdf6-91fc7bf99f59",
            itemName: "Operation Manual 737MAX",
            itemSN: "various",
            itemCat: "manual",
            transDate: "20230812",
            itemImg: "img_book_03.jpeg",
        },
        {
            docId: "2e9f088b-fc0d-435e-bdd6-c09dfba6f062",
            itemQty: 10,
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            transId: "jkjur-tewvn-00003",
            itemPN: "HON-17-974-575",
            itemName: "Altimeter STBY",
            transDate: "20230812",
            itemPrice: 9130,
            itemImg: "img_cockpit_altimeter_1.jpeg",
            itemCertification: "EASA, FAA, CAAC",
            itemCurrency: "$",
            itemSN: "various",
            itemCat: "component",
            itemId: "2b336406-f54c-422b-a249-7507ab8975dc",
            itemCondition: "New",
            itemLeadTime: "on stock",
        },
        {
            docId: "60a05264-8d0b-4fb4-a3be-fc9602d25913",
            itemCat: "manual",
            itemId: "60a05264-8d0b-4fb4-a3be-fc9602d25913",
            itemQty: "100",
            itemCurrency: "$",
            transId: "jkjur-tewvn-00003",
            itemSN: "various",
            itemImg: "img_book_04.jpeg",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemLeadTime: "on stock",
            itemPrice: "117",
            itemPN: "012-737MAX-125965-0",
            itemName: "Manual Illustrative Tools and Equipment Boeing 737MAX",
            transDate: "20230812",
            itemCertification: "N/A",
            itemCondition: "New",
        },
        {
            docId: "6e9098eb-caef-40bd-9755-eb83bce17089",
            itemPN: "012-737MAX-3254P184",
            itemLeadTime: "on stock",
            itemCat: "manual",
            itemCurrency: "$",
            itemQty: "100",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemPrice: "117",
            transId: "jkjur-tewvn-00003",
            itemCondition: "New",
            itemImg: "img_book_01.jpeg",
            itemCertification: "N/A",
            itemId: "6e9098eb-caef-40bd-9755-eb83bce17089",
            transDate: "20230812",
            itemName: "Manual Ground Handling Boeing 737MAX",
            itemSN: "various",
        },
        {
            docId: "80e088cf-09d3-4f96-9447-923a29ba5d44",
            itemPrice: 15750,
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemImg: "img_cabin_seat_business_01.jpeg",
            itemName: "Seat Solo Business Class",
            itemId: "55690c40-939e-4c92-b916-d329376a5a31",
            itemCat: "component",
            itemLeadTime: "on stock",
            itemCertification: "EASA, FAA, CAAC",
            transDate: "20230812",
            itemSN: "various",
            itemCurrency: "$",
            itemCondition: "New",
            itemQty: 52,
            itemPN: "025-BCS-1-217",
            transId: "jkjur-tewvn-00003",
        },
        {
            docId: "b21a23e9-7981-4f88-aa04-b63567722e86",
            itemCat: "aircraft",
            itemName: "Bell 5X VIP",
            itemPN: "B5X-VIP-100",
            itemPrice: 7500000,
            itemCertification: "EASA, FAA, CAAC",
            itemSN: "various",
            itemId: "0333afc6-cc1b-4d5f-80b4-e7a2e43e3fe5",
            itemCondition: "New",
            transDate: "20230812",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemImg: "img_ac_heli_2.jpeg",
            itemCurrency: "$",
            itemQty: 1,
            itemLeadTime: "quote",
            transId: "jkjur-tewvn-00003",
        },
        {
            docId: "ba21d7f9-3f7e-4928-a955-d7794975a8ac",
            itemCurrency: "$",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemCondition: "New",
            itemLeadTime: "on stock",
            transDate: "20230812",
            itemSN: "various",
            itemQty: "50",
            itemId: "4c4d2d95-3dc3-40da-b6ef-3a24bca843d3",
            itemCat: "manual",
            itemPN: "070-EFM-ALL-2023",
            itemName: "Manual Engine Fleet Management",
            itemImg: "img_book_00.jpeg",
            transId: "jkjur-tewvn-00003",
            itemCertification: "N/A",
            itemPrice: "117",
        },
        {
            docId: "bb50757f-94a6-4962-9070-de90b99b7353",
            itemLeadTime: "on stock",
            itemCertification: "EASA, FAA, CAAC",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemQty: "10",
            itemCat: "component",
            itemImg: "img_wheel_main_3.jpeg",
            itemPN: "HON-3240-737-005",
            transDate: "20230812",
            itemCurrency: "$",
            itemCondition: "New",
            itemSN: "various",
            itemPrice: "19540",
            itemName: "Wheel Main",
            transId: "jkjur-tewvn-00003",
            itemId: "bb50757f-94a6-4962-9070-de90b99b7353",
        },
        {
            docId: "e576ae9b-10e2-4c7a-bd76-54ae2e5e69f2",
            transId: "jkjur-tewvn-00003",
            itemPrice: "19130",
            itemLeadTime: "on stock",
            itemCurrency: "$",
            itemPN: "HON-3240-737-001",
            itemImg: "img_wheel_main_1.jpeg",
            itemCondition: "New",
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemId: "e576ae9b-10e2-4c7a-bd76-54ae2e5e69f2",
            itemSN: "various",
            transDate: "20230812",
            itemCertification: "EASA, FAA, CAAC",
            itemName: "Wheel Main",
            itemCat: "component",
            itemQty: "10",
        },
        {
            docId: "ef7a0a83-274b-478c-8c33-0dc1acb41b5f",
            itemPrice: 67500000,
            itemDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ab debitis quos autem? Soluta ut aut ab debitis nulla vel voluptates molestias at. Porro recusandae impedit inventore quo sunt delectus cumque, repellat similique mollitia, officiis, esse saepe? Praesentium dolores corporis sapiente cupiditate, aliquid nulla? Nisi, doloremque cum inventore exercitationem nulla quasi labore recusandae rem sed ipsam magnam quos est accusantium sint adipisci voluptas reiciendis natus ut dicta.",
            itemCondition: "New",
            itemCurrency: "$",
            transId: "jkjur-tewvn-00003",
            itemCat: "aircraft",
            itemImg: "img_ac_737.jpeg",
            itemSN: "various",
            itemId: "5b9f30c3-3b5e-466a-be00-7ce5098c230e",
            itemName: "Boeing 737-8 BBJ",
            itemLeadTime: "quote",
            transDate: "20230812",
            itemPN: "737-BBJ-824",
            itemCertification: "EASA, FAA, UK CAA, CAAC",
            itemQty: 1,
        },
    ],
};
