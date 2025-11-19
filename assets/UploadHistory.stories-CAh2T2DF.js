import{U as n}from"./index-Bq2aSNq9.js";import"./iframe-BnhDRzsz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8retmPz.js";import"./Box-DsEETO47.js";import"./jsx-runtime-CAa97x5m.js";import"./index-DVyvgj4P.js";import"./Select-By66KAcz.js";import"./index-Dcsvbe5F.js";import"./Button-BtpHCBih.js";const y={title:"Pages/ItineraryManagement/AddItineraries/UploadHistory",component:n,parameters:{layout:"fullscreen"},tags:["autodocs"]},d=[{id:"upload-1",fileName:"itineraries-oct-2025.csv",uploadedAt:new Date("2025-10-15T14:30:00"),totalCount:250,validCount:247,invalidCount:3,status:"completed"},{id:"upload-2",fileName:"q3-travel-data.csv",uploadedAt:new Date("2025-09-28T09:15:00"),totalCount:180,validCount:180,invalidCount:0,status:"completed"},{id:"upload-3",fileName:"employee-trips.csv",uploadedAt:new Date("2025-09-15T16:45:00"),totalCount:45,validCount:40,invalidCount:5,status:"completed"},{id:"upload-4",fileName:"failed-upload.csv",uploadedAt:new Date("2025-09-10T11:20:00"),totalCount:100,validCount:0,invalidCount:100,status:"failed"},{id:"upload-5",fileName:"processing-data.csv",uploadedAt:new Date("2025-10-20T10:00:00"),totalCount:75,validCount:0,invalidCount:0,status:"processing"}],t={args:{uploadHistory:d,onViewUpload:o=>console.log("View upload:",o)}},e={args:{uploadHistory:[],onViewUpload:o=>console.log("View upload:",o)}},l={args:{uploadHistory:[d[0]],onViewUpload:o=>console.log("View upload:",o)}},r={args:{uploadHistory:Array.from({length:50},(o,a)=>({id:`upload-${a+1}`,fileName:`itineraries-batch-${a+1}.csv`,uploadedAt:new Date(Date.now()-a*24*60*60*1e3),totalCount:Math.floor(Math.random()*300)+50,validCount:Math.floor(Math.random()*280)+40,invalidCount:Math.floor(Math.random()*20),status:["completed","failed","processing"][a%3]})),onViewUpload:o=>console.log("View upload:",o)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    uploadHistory: mockUploadHistory,
    onViewUpload: (uploadId: string) => console.log('View upload:', uploadId)
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    uploadHistory: [],
    onViewUpload: (uploadId: string) => console.log('View upload:', uploadId)
  }
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    uploadHistory: [mockUploadHistory[0]],
    onViewUpload: (uploadId: string) => console.log('View upload:', uploadId)
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    uploadHistory: Array.from({
      length: 50
    }, (_, i) => ({
      id: \`upload-\${i + 1}\`,
      fileName: \`itineraries-batch-\${i + 1}.csv\`,
      uploadedAt: new Date(Date.now() - i * 24 * 60 * 60 * 1000),
      totalCount: Math.floor(Math.random() * 300) + 50,
      validCount: Math.floor(Math.random() * 280) + 40,
      invalidCount: Math.floor(Math.random() * 20),
      status: ['completed', 'failed', 'processing'][i % 3] as 'completed' | 'failed' | 'processing'
    })),
    onViewUpload: (uploadId: string) => console.log('View upload:', uploadId)
  }
}`,...r.parameters?.docs?.source}}};const C=["Default","Empty","SingleUpload","LargeHistory"];export{t as Default,e as Empty,r as LargeHistory,l as SingleUpload,C as __namedExportsOrder,y as default};
