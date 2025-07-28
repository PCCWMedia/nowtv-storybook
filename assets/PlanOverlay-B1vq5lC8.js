import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-Ctr359K7.js";import{L as b}from"./Link-nT3m7tOl.js";import{B as c}from"./Button-Dj7QJ2ZV.js";const f=({href:o="#",label:a,planTitle:n,plansubTitle:i,price:t,perUnit:d,planNotes:p,isButton:s=!1,isToggle:r=!1,disableAfterToggle:m=!1})=>{const[l,g]=u.useState(!1),y=()=>{r&&!l&&g(!0)},v=()=>{g(!1)};return e.jsxs("div",{className:"item",children:[e.jsxs("h6",{children:[n,i&&e.jsx("span",{children:i})]}),e.jsxs("div",{className:"details",children:[e.jsxs("div",{className:"offer",children:[e.jsxs("div",{className:"price",children:[e.jsx("b",{children:t})," ",d]}),e.jsx("p",{children:p})]}),e.jsxs("div",{className:`button-control ${l?"active":""}`,children:[s?e.jsx(c,{label:a,className:"btn primary",isToggle:r,isSelected:l,disableAfterToggle:m,onClick:y,disabled:l&&m}):e.jsx(b,{href:o,className:"btn primary",label:a}),e.jsx(c,{label:"Remove",className:"remove",onClick:v})]})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"PlanItem",props:{href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},planTitle:{required:!0,tsType:{name:"string"},description:""},plansubTitle:{required:!1,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"string"},description:""},perUnit:{required:!0,tsType:{name:"string"},description:""},planNotes:{required:!0,tsType:{name:"string"},description:""},isButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disableAfterToggle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const h=({planName:o,plans:a,remarks:n,remarksActive:i,onClose:t})=>{const[d,p]=u.useState(!1);return u.useEffect(()=>{requestAnimationFrame(()=>{p(!0)})},[]),e.jsx("div",{className:`modal-wrapper ${d?"show":""}`,onClick:t,children:e.jsx("div",{className:"modal-dialog",children:e.jsxs("div",{className:"modal-content-wrapper sm",children:[e.jsx("div",{className:"close-modal",children:e.jsx(c,{className:"close-btn",label:"Close",onClick:t})}),e.jsxs("div",{className:"plan-wrapper",onClick:s=>s.stopPropagation(),children:[e.jsx("h5",{children:o}),e.jsx("div",{className:"plans-item-wrapper",children:a.map((s,r)=>e.jsx(f,{...s},r))}),i&&n&&n.length>0&&e.jsx("div",{className:"remarks",children:n.map((s,r)=>e.jsx("p",{dangerouslySetInnerHTML:{__html:s}},r))})]})]})})})};h.__docgenInfo={description:"",methods:[],displayName:"PlanOverlay",props:{planName:{required:!0,tsType:{name:"string"},description:""},plans:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
