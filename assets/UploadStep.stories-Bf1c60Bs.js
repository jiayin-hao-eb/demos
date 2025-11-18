import{U as l}from"./index-C0t3gEKX.js";import"./iframe-B9FYqio8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsJJQnE0.js";import"./Box-BcHeFJyd.js";import"./jsx-runtime-8E0O18mK.js";import"./Button-Bdue7Ofb.js";import"./Link-DbmlrhsO.js";import"./index-C-e26k9T.js";const u={title:"Pages/ItineraryManagement/AddItineraries/UploadStep",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={args:{onFileSelected:e=>console.log("File selected:",e.name),onManualEntryClick:()=>console.log("Manual entry clicked"),onTemplateDownload:()=>console.log("Template download clicked"),isProcessing:!1}},a={args:{...n.args,isProcessing:!0}},o={args:{onFileSelected:e=>{action("onFileSelected")(e.name,e.size),alert(`File selected: ${e.name} (${(e.size/1024).toFixed(2)} KB)`)},onManualEntryClick:()=>{action("onManualEntryClick")(),alert("Opening manual entry form...")},onTemplateDownload:()=>{action("onTemplateDownload")(),alert("Downloading CSV template...")},isProcessing:!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
