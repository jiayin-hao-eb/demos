import{R as s}from"./index-30HfZ0iL.js";import"./iframe-B9FYqio8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C4dDurK2.js";import"./Box-BcHeFJyd.js";import"./jsx-runtime-8E0O18mK.js";import"./index-C-e26k9T.js";import"./Select-Dxz5tekb.js";import"./index-wcX7yr8C.js";import"./Link-DbmlrhsO.js";import"./Button-Bdue7Ofb.js";const N={title:"Pages/ItineraryManagement/AddItineraries/ReviewStep",component:s,parameters:{layout:"fullscreen"},tags:["autodocs"]},o=[{id:"1",itineraryName:"Business Trip to NYC",itineraryId:"IT001",pnr:"ABC123",status:"Confirmed",additionalInfo:"Team meeting",travelers:[{firstName:"John",lastName:"Doe",email:"john@example.com"},{firstName:"Jane",lastName:"Smith",email:"jane@example.com"}],segments:[{type:"Air",origin:"SFO",destination:"JFK"},{type:"Hotel",destination:"Manhattan"}],validationStatus:"valid",missingFields:[],source:"csv",uploadId:"upload-1"},{id:"2",itineraryName:"Sales Conference Miami",itineraryId:"IT002",pnr:"DEF456",status:"Pending",travelers:[{firstName:"Bob",lastName:"Wilson"}],segments:[{type:"Air",origin:"LAX",destination:"MIA"},{type:"Car",destination:"Miami Beach"}],validationStatus:"valid",missingFields:[],source:"csv",uploadId:"upload-1"},{id:"3",itineraryName:"Training Workshop",travelers:[],segments:[],validationStatus:"invalid",missingFields:["At least one traveler is required","At least one segment is required"],source:"csv",uploadId:"upload-1"},{id:"4",itineraryName:"Client Visit Boston",itineraryId:"IT004",travelers:[{firstName:"Alice",lastName:"Brown",email:"alice@example.com"}],segments:[],validationStatus:"invalid",missingFields:["At least one segment is required"],source:"csv",uploadId:"upload-1"}],a={args:{itineraries:o.filter(e=>e.validationStatus==="valid"),uploadFileName:"itineraries-valid.csv",onEdit:e=>console.log("Edit itinerary:",e),onDelete:e=>console.log("Delete itinerary:",e),onSubmit:()=>console.log("Submit itineraries"),onCancel:()=>console.log("Cancel"),isSubmitting:!1}},n={args:{itineraries:o,uploadFileName:"itineraries-oct-2025.csv",onEdit:e=>console.log("Edit itinerary:",e),onDelete:e=>console.log("Delete itinerary:",e),onSubmit:()=>console.log("Submit itineraries"),onCancel:()=>console.log("Cancel"),isSubmitting:!1}},t={args:{...a.args,isSubmitting:!0}},r={args:{itineraries:Array.from({length:50},(e,i)=>({id:`itinerary-${i+1}`,itineraryName:`Trip ${i+1} - ${["NYC","LA","Chicago","Miami","Boston"][i%5]}`,itineraryId:`IT${String(i+1).padStart(3,"0")}`,pnr:`PNR${String(i+1).padStart(4,"0")}`,status:["Confirmed","Pending","Cancelled"][i%3],travelers:[{firstName:["John","Jane","Bob","Alice"][i%4],lastName:["Doe","Smith","Wilson","Brown"][i%4],email:`user${i+1}@example.com`}],segments:[{type:["Air","Hotel","Train","Car"][i%4],origin:"SFO",destination:["NYC","LA","Chicago"][i%3]}],validationStatus:i%5===0?"invalid":"valid",missingFields:i%5===0?["Sample error"]:[],source:"csv",uploadId:"upload-large"})),uploadFileName:"itineraries-large.csv",onEdit:e=>console.log("Edit itinerary:",e),onDelete:e=>console.log("Delete itinerary:",e),onSubmit:()=>console.log("Submit itineraries"),onCancel:()=>console.log("Cancel"),isSubmitting:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    itineraries: mockItineraries.filter(i => i.validationStatus === 'valid'),
    uploadFileName: 'itineraries-valid.csv',
    onEdit: (id: string) => console.log('Edit itinerary:', id),
    onDelete: (id: string) => console.log('Delete itinerary:', id),
    onSubmit: () => console.log('Submit itineraries'),
    onCancel: () => console.log('Cancel'),
    isSubmitting: false
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    itineraries: mockItineraries,
    uploadFileName: 'itineraries-oct-2025.csv',
    onEdit: (id: string) => console.log('Edit itinerary:', id),
    onDelete: (id: string) => console.log('Delete itinerary:', id),
    onSubmit: () => console.log('Submit itineraries'),
    onCancel: () => console.log('Cancel'),
    isSubmitting: false
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...AllValid.args,
    isSubmitting: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    itineraries: Array.from({
      length: 50
    }, (_, i) => ({
      id: \`itinerary-\${i + 1}\`,
      itineraryName: \`Trip \${i + 1} - \${['NYC', 'LA', 'Chicago', 'Miami', 'Boston'][i % 5]}\`,
      itineraryId: \`IT\${String(i + 1).padStart(3, '0')}\`,
      pnr: \`PNR\${String(i + 1).padStart(4, '0')}\`,
      status: ['Confirmed', 'Pending', 'Cancelled'][i % 3],
      travelers: [{
        firstName: ['John', 'Jane', 'Bob', 'Alice'][i % 4],
        lastName: ['Doe', 'Smith', 'Wilson', 'Brown'][i % 4],
        email: \`user\${i + 1}@example.com\`
      }],
      segments: [{
        type: ['Air', 'Hotel', 'Train', 'Car'][i % 4] as 'Air' | 'Hotel' | 'Train' | 'Car',
        origin: 'SFO',
        destination: ['NYC', 'LA', 'Chicago'][i % 3]
      }],
      validationStatus: i % 5 === 0 ? 'invalid' : 'valid',
      missingFields: i % 5 === 0 ? ['Sample error'] : [],
      source: 'csv' as const,
      uploadId: 'upload-large'
    })),
    uploadFileName: 'itineraries-large.csv',
    onEdit: (id: string) => console.log('Edit itinerary:', id),
    onDelete: (id: string) => console.log('Delete itinerary:', id),
    onSubmit: () => console.log('Submit itineraries'),
    onCancel: () => console.log('Cancel'),
    isSubmitting: false
  }
}`,...r.parameters?.docs?.source}}};const b=["AllValid","WithErrors","Submitting","LargeDataset"];export{a as AllValid,r as LargeDataset,t as Submitting,n as WithErrors,b as __namedExportsOrder,N as default};
