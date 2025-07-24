import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-D8wewh3m.js";import{L as b}from"./Link-Ce01vlWD.js";import{B as c}from"./Button-C3YrzklG.js";const f=({href:l="#",label:a,planTitle:r,plansubTitle:i,price:o,perUnit:d,planNotes:p,isButton:n=!1,isToggle:s=!1,disableAfterToggle:m=!1})=>{const[t,g]=u.useState(!1),y=()=>{s&&!t&&g(!0)},v=()=>{g(!1)};return e.jsxs("div",{className:"item",children:[e.jsxs("h6",{children:[r,i&&e.jsx("span",{children:i})]}),e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"offer",children:[e.jsxs("div",{className:"price",children:[e.jsx("b",{children:o})," ",d]}),e.jsx("p",{children:p})]}),e.jsxs("div",{className:`button-control ${t?"active":""}`,children:[n?e.jsx(c,{label:a,className:"btn primary",isToggle:s,isSelected:t,disableAfterToggle:m,onClick:y,disabled:t&&m}):e.jsx(b,{href:l,className:"btn primary",label:a}),e.jsx(c,{label:"Remove",className:"remove",onClick:v})]})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"PlanItem",props:{href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},planTitle:{required:!0,tsType:{name:"string"},description:""},plansubTitle:{required:!1,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"string"},description:""},perUnit:{required:!0,tsType:{name:"string"},description:""},planNotes:{required:!0,tsType:{name:"string"},description:""},isButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableAfterToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const h=({planName:l,plans:a,remarks:r,remarksActive:i,onClose:o})=>{const[d,p]=u.useState(!1);return u.useEffect(()=>{requestAnimationFrame(()=>{p(!0)})},[]),e.jsx("div",{className:`modal-wrapper ${d?"show":""}`,children:e.jsx("div",{className:"modal-dialog",children:e.jsxs("div",{className:"modal-content-wrapper sm",children:[e.jsx("div",{className:"close-modal",children:e.jsx(c,{className:"close-btn",label:"Close",onClick:o})}),e.jsxs("div",{className:"plan-wrapper",children:[e.jsx("h5",{children:l}),e.jsx("div",{className:"plans-item-wrapper",children:a.map((n,s)=>e.jsx(f,{...n},s))}),i&&r&&r.length>0&&e.jsx("div",{className:"remarks",children:r.map((n,s)=>e.jsx("p",{dangerouslySetInnerHTML:{__html:n}},s))})]})]})})})};h.__docgenInfo={description:"",methods:[],displayName:"PlanOverlay",props:{planName:{required:!0,tsType:{name:"string"},description:""},plans:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    href: string;
    label: string;
    planTitle: string;
    plansubTitle?: string;
    price: string;
    perUnit: string;
    planNotes: string;
    isButton?: boolean; 
    isToggle?: boolean; 
    disableAfterToggle?: boolean; 
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"planTitle",value:{name:"string",required:!0}},{key:"plansubTitle",value:{name:"string",required:!1}},{key:"price",value:{name:"string",required:!0}},{key:"perUnit",value:{name:"string",required:!0}},{key:"planNotes",value:{name:"string",required:!0}},{key:"isButton",value:{name:"boolean",required:!1}},{key:"isToggle",value:{name:"boolean",required:!1}},{key:"disableAfterToggle",value:{name:"boolean",required:!1}}]}}],raw:`Array<{
    href: string;
    label: string;
    planTitle: string;
    plansubTitle?: string;
    price: string;
    perUnit: string;
    planNotes: string;
    isButton?: boolean; 
    isToggle?: boolean; 
    disableAfterToggle?: boolean; 
}>`},description:""},remarksActive:{required:!1,tsType:{name:"boolean"},description:""},remarks:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{h as P};
