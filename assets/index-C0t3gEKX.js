import{r as T,R as h}from"./iframe-B9FYqio8.js";import{I as N}from"./index-BsJJQnE0.js";import{g as D,a as j,u as z,_ as E,b as s,s as g,d as F,e as o,f as O,h as C,i as B,k as x,B as S}from"./Box-BcHeFJyd.js";import{u as w}from"./index-C-e26k9T.js";import{j as b}from"./jsx-runtime-8E0O18mK.js";function A(r){return D("MuiLinearProgress",r)}j("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const K=["className","color","value","valueBuffer","variant"];let l=r=>r,I,L,R,U,_,q;const y=4,X=x(I||(I=l`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),V=x(L||(L=l`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),W=x(R||(R=l`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),G=r=>{const{classes:e,variant:a,color:t}=r,u={root:["root",`color${o(t)}`,a],dashed:["dashed",`dashedColor${o(t)}`],bar1:["bar",`barColor${o(t)}`,(a==="indeterminate"||a==="query")&&"bar1Indeterminate",a==="determinate"&&"bar1Determinate",a==="buffer"&&"bar1Buffer"],bar2:["bar",a!=="buffer"&&`barColor${o(t)}`,a==="buffer"&&`color${o(t)}`,(a==="indeterminate"||a==="query")&&"bar2Indeterminate",a==="buffer"&&"bar2Buffer"]};return O(u,A,e)},P=(r,e)=>e==="inherit"?"currentColor":r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:r.palette.mode==="light"?B.lighten(r.palette[e].main,.62):B.darken(r.palette[e].main,.5),H=g("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.root,e[`color${o(a.color)}`],e[a.variant]]}})(({ownerState:r,theme:e})=>s({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:P(e,r.color)},r.color==="inherit"&&r.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},r.variant==="buffer"&&{backgroundColor:"transparent"},r.variant==="query"&&{transform:"rotate(180deg)"})),J=g("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.dashed,e[`dashedColor${o(a.color)}`]]}})(({ownerState:r,theme:e})=>{const a=P(e,r.color);return s({position:"absolute",marginTop:0,height:"100%",width:"100%"},r.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},C(U||(U=l`
    animation: ${0} 3s infinite linear;
  `),W)),Q=g("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${o(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar1Indeterminate,a.variant==="determinate"&&e.bar1Determinate,a.variant==="buffer"&&e.bar1Buffer]}})(({ownerState:r,theme:e})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.variant==="determinate"&&{transition:`transform .${y}s linear`},r.variant==="buffer"&&{zIndex:1,transition:`transform .${y}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&C(_||(_=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),X)),Y=g("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:a}=r;return[e.bar,e[`barColor${o(a.color)}`],(a.variant==="indeterminate"||a.variant==="query")&&e.bar2Indeterminate,a.variant==="buffer"&&e.bar2Buffer]}})(({ownerState:r,theme:e})=>s({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},r.variant!=="buffer"&&{backgroundColor:r.color==="inherit"?"currentColor":(e.vars||e).palette[r.color].main},r.color==="inherit"&&{opacity:.3},r.variant==="buffer"&&{backgroundColor:P(e,r.color),transition:`transform .${y}s linear`}),({ownerState:r})=>(r.variant==="indeterminate"||r.variant==="query")&&C(q||(q=l`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),V)),Z=T.forwardRef(function(e,a){const t=z({props:e,name:"MuiLinearProgress"}),{className:u,color:d="primary",value:v,valueBuffer:k,variant:i="indeterminate"}=t,M=E(t,K),c=s({},t,{color:d,variant:i}),f=G(c),$=w(),m={},p={bar1:{},bar2:{}};if((i==="determinate"||i==="buffer")&&v!==void 0){m["aria-valuenow"]=Math.round(v),m["aria-valuemin"]=0,m["aria-valuemax"]=100;let n=v-100;$&&(n=-n),p.bar1.transform=`translateX(${n}%)`}if(i==="buffer"&&k!==void 0){let n=(k||0)-100;$&&(n=-n),p.bar2.transform=`translateX(${n}%)`}return b.jsxs(H,s({className:F(f.root,u),ownerState:c,role:"progressbar"},m,{ref:a},M,{children:[i==="buffer"?b.jsx(J,{className:f.dashed,ownerState:c}):null,b.jsx(Q,{className:f.bar1,ownerState:c,style:p.bar1}),i==="determinate"?null:b.jsx(Y,{className:f.bar2,ownerState:c,style:p.bar2})]}))}),rr=({onFileSelected:r,onManualEntryClick:e,onTemplateDownload:a,isProcessing:t=!1})=>{const u=d=>{d.length>0&&r(d[0])};return h.createElement(S,{sx:{p:4}},t&&h.createElement(Z,{sx:{mb:2}}),h.createElement(N,{onFileSelect:u,onManualUploadClick:e,onBulkTemplateDownload:a,acceptedFileTypes:[".csv"],maxFileSizeMB:50}))};rr.__docgenInfo={description:`UploadStep - Landing page for itinerary upload

Uses existing ItineraryUpload component for file upload UI`,methods:[],displayName:"UploadStep",props:{onFileSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(file: File) => void",signature:{arguments:[{type:{name:"File"},name:"file"}],return:{name:"void"}}},description:""},onManualEntryClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onTemplateDownload:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isProcessing:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{rr as U};
