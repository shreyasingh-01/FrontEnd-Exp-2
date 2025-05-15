var data = [
    {
      id: "6146286840",
      properties: {
        amount: "50",
        closedate: null,
        createdate: "2022-12-08T07:58:52.062Z",
        dealname: "AMM Demo Projekt",
        dealstage: "158094276",
        hs_lastmodifieddate: "2023-03-22T16:38:22.890Z",
        hs_object_id: "6146286840",
        pipeline: "66099656",
      },
      createdAt: "2022-12-08T07:58:52.062Z",
      updatedAt: "2023-03-22T16:38:22.890Z",
      archived: false,
      associations: {
        contacts: {
          results: [
            {
              id: "187251",
              type: "deal_to_contact",
            },
            {
              id: "498274",
              type: "deal_to_contact",
            },
            {
              id: "741044",
              type: "deal_to_contact",
            },
            {
              id: "970647",
              type: "deal_to_contact",
            },
            {
              id: "498274",
              type: "salesperson_sky-frame",
            },
            {
              id: "741044",
              type: "verkäufer_partner_|_salesperson_partner",
            },
            {
              id: "187251",
              type: "project_manager_sf",
            },
            {
              id: "970647",
              type: "pl_partner",
            },
          ],
        },
      },
    },
    {
      id: "6146286820",
      properties: {
        amount: "50",
        closedate: null,
        createdate: "2022-12-08T08:58:52.062Z",
        dealname: "AMOO Demo Projekt",
        dealstage: "1580942766",
        hs_lastmodifieddate: "2023-03-22T16:38:22.890Z",
        hs_object_id: "6146286840",
        pipeline: "66099656",
      },
      createdAt: "2022-12-08T07:58:52.062Z",
      updatedAt: "2023-03-22T16:38:22.890Z",
      archived: false,
      associations: {
        contacts: {
          results: [
            {
              id: "187251",
              type: "deal_to_contact",
            },
            {
              id: "498274",
              type: "deal_to_contact",
            },
            {
              id: "741044",
              type: "deal_to_contact",
            },
            {
              id: "970647",
              type: "deal_to_contact",
            },
            {
              id: "498274",
              type: "salesperson_sky-frame",
            },
            {
              id: "741044",
              type: "verkäufer_partner_|_salesperson_partner",
            },
            {
              id: "187251",
              type: "project_manager_sf",
            },
            {
              id: "970647",
              type: "pl_partner",
            },
          ],
        },
      },
    },
  
    {
      id: "6146285670",
      properties: {
        amount: "500",
        closedate: null,
        createdate: "2022-12-08T09:58:52.062Z",
        dealname: "AMM Demo Projekt",
        dealstage: "158094276",
        hs_lastmodifieddate: "2023-03-22T16:38:22.890Z",
        hs_object_id: "6146286840",
        pipeline: "66099656",
      },
      createdAt: "2022-12-08T07:58:52.062Z",
      updatedAt: "2023-03-22T16:38:22.890Z",
      archived: false,
      associations: {
        contacts: {
          results: [
            {
              id: "187251",
              type: "deal_to_contact",
            },
            {
              id: "498274",
              type: "deal_to_contact",
            },
            {
              id: "741044",
              type: "deal_to_contact",
            },
            {
              id: "970647",
              type: "deal_to_contact",
            },
            {
              id: "498274",
              type: "salesperson_sky-frame",
            },
            {
              id: "741044",
              type: "verkäufer_partner_|_salesperson_partner",
            },
            {
              id: "187251",
              type: "project_manager_sf",
            },
            {
              id: "970647",
              type: "pl_partner",
            },
          ],
        },
      },
    },
  ];
  var call=document.querySelector(".main")
  data.forEach((item)=>{
    call.innerHTML +=`
    <div class="container">
    <div class="left">
        <div class="left1"><h1> ID </h1><br>${item.id}</div>
        <div class="left2"><h1> Amount  </h1><br>${item.properties.amount}</div>
    </div>
    
    <div class="right">
        <div class="header"><h1> Association </h1></div>
        <div class="right-down">
            <div class="right1">${item.associations.contacts.results[0].id}</div>
            <div class="right2">${item.associations.contacts.results[0].type}</div>
        </div>
        <div class="right-down">
            <div class="right1">${item.associations.contacts.results[1].id}</div>
            <div class="right2">${item.associations.contacts.results[1].type}</div>
        </div>
        <div class="right-down">
            <div class="right1">${item.associations.contacts.results[2].id}</div>
            <div class="right2">${item.associations.contacts.results[2].type}</div>
        </div>
        
    </div>
</div>
   `
  })
   
