import{R as o}from"./iframe-BnhDRzsz.js";import{I as i}from"./index-sOlJHcNS.js";import{B as s}from"./Box-DsEETO47.js";import"./preload-helper-PPVm8Dsz.js";import"./jsx-runtime-CAa97x5m.js";import"./Button-BtpHCBih.js";import"./Link-BqrcZCH6.js";const y={title:"Components/ItineraryUpload",component:i,render:e=>o.createElement(s,{sx:{width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f5f5f5"}},o.createElement(i,{...e})),parameters:{docs:{description:{component:`Storybook stories for ItineraryUpload component
Note: This file can be used with Storybook when configured in the project`}}}},r={args:{onFileSelect:e=>console.log("Files selected:",e),onManualUploadClick:()=>console.log("Manual upload clicked"),onBulkTemplateDownload:()=>console.log("Template download clicked")}},n={args:{maxFileSizeMB:50}},a={args:{acceptedFileTypes:[".pdf",".xlsx"]}},t={args:{onFileSelect:e=>{console.log("Files selected:",e),alert(`Selected ${e.length} file(s):
${e.map(c=>c.name).join(`
`)}`)},onManualUploadClick:()=>{console.log("Manual upload clicked"),alert("Navigate to manual upload form")},onBulkTemplateDownload:()=>{console.log("Template download clicked"),alert("Downloading CSV template...")}}},l=()=>o.createElement(s,{sx:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",p:3,backgroundColor:"#f5f5f5"}},o.createElement(s,{sx:{mb:3}},o.createElement("h1",{style:{margin:0,fontSize:24,fontWeight:600}},"Upload Itinerary"),o.createElement("p",{style:{margin:"8px 0 0 0",color:"#666"}},"Upload your travel itinerary files or create one manually")),o.createElement(s,{sx:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}},o.createElement(i,{onFileSelect:e=>console.log("Files selected:",e),onManualUploadClick:()=>console.log("Manual upload clicked"),onBulkTemplateDownload:()=>console.log("Template download clicked")})));l.__docgenInfo={description:"In Container Example - Shows component in a full page layout",methods:[],displayName:"InContainer"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    onFileSelect: files => console.log('Files selected:', files),
    onManualUploadClick: () => console.log('Manual upload clicked'),
    onBulkTemplateDownload: () => console.log('Template download clicked')
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    maxFileSizeMB: 50
  }
}`,...n.parameters?.docs?.source},description:{story:"Custom File Size Example - 50MB limit instead of default 100MB",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    acceptedFileTypes: ['.pdf', '.xlsx']
  }
}`,...a.parameters?.docs?.source},description:{story:"Custom File Types Example - Only PDF and Excel files",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onFileSelect: files => {
      console.log('Files selected:', files);
      alert(\`Selected \${files.length} file(s):\\n\${files.map(f => f.name).join('\\n')}\`);
    },
    onManualUploadClick: () => {
      console.log('Manual upload clicked');
      alert('Navigate to manual upload form');
    },
    onBulkTemplateDownload: () => {
      console.log('Template download clicked');
      alert('Downloading CSV template...');
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"With Handlers Example - Shows alerts on user interactions",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Box sx={{
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  p: 3,
  backgroundColor: '#f5f5f5'
}}>
        <Box sx={{
    mb: 3
  }}>
            <h1 style={{
      margin: 0,
      fontSize: 24,
      fontWeight: 600
    }}>Upload Itinerary</h1>
            <p style={{
      margin: '8px 0 0 0',
      color: '#666'
    }}>
                Upload your travel itinerary files or create one manually
            </p>
        </Box>
        <Box sx={{
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
            <ItineraryUpload onFileSelect={files => console.log('Files selected:', files)} onManualUploadClick={() => console.log('Manual upload clicked')} onBulkTemplateDownload={() => console.log('Template download clicked')} />
        </Box>
    </Box>`,...l.parameters?.docs?.source},description:{story:`Interactive Example - Shows uploaded files list with state management
In Container Example - Shows component in a full page layout`,...l.parameters?.docs?.description}}};const h=["DefaultExample","WithCustomFileSize","WithCustomFileTypes","WithHandlers","InContainer"];export{r as DefaultExample,l as InContainer,n as WithCustomFileSize,a as WithCustomFileTypes,t as WithHandlers,h as __namedExportsOrder,y as default};
