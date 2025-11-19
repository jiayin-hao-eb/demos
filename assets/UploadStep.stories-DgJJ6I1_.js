import{U as l}from"./index-B7h41Mny.js";import"./iframe-BnhDRzsz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-sOlJHcNS.js";import"./Box-DsEETO47.js";import"./jsx-runtime-CAa97x5m.js";import"./Button-BtpHCBih.js";import"./Link-BqrcZCH6.js";import"./index-DVyvgj4P.js";const u={title:"Pages/ItineraryManagement/AddItineraries/UploadStep",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={args:{onFileSelected:e=>console.log("File selected:",e.name),onManualEntryClick:()=>console.log("Manual entry clicked"),onTemplateDownload:()=>console.log("Template download clicked"),isProcessing:!1}},a={args:{...n.args,isProcessing:!0}},o={args:{onFileSelected:e=>{action("onFileSelected")(e.name,e.size),alert(`File selected: ${e.name} (${(e.size/1024).toFixed(2)} KB)`)},onManualEntryClick:()=>{action("onManualEntryClick")(),alert("Opening manual entry form...")},onTemplateDownload:()=>{action("onTemplateDownload")(),alert("Downloading CSV template...")},isProcessing:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    onFileSelected: (file: File) => console.log('File selected:', file.name),
    onManualEntryClick: () => console.log('Manual entry clicked'),
    onTemplateDownload: () => console.log('Template download clicked'),
    isProcessing: false
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isProcessing: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onFileSelected: (file: File) => {
      action('onFileSelected')(file.name, file.size);
      alert(\`File selected: \${file.name} (\${(file.size / 1024).toFixed(2)} KB)\`);
    },
    onManualEntryClick: () => {
      action('onManualEntryClick')();
      alert('Opening manual entry form...');
    },
    onTemplateDownload: () => {
      action('onTemplateDownload')();
      alert('Downloading CSV template...');
    },
    isProcessing: false
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","Processing","WithHandlers"];export{n as Default,a as Processing,o as WithHandlers,f as __namedExportsOrder,u as default};
