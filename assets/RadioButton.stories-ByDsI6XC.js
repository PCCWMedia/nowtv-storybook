import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./iframe-C6w_PJZu.js";const p=({name:g,options:h,defaultValue:f,onChange:s})=>{const[v,y]=b.useState(f),x=e=>{const r=e.target.value;y(r),s==null||s(r)};return a.jsx("div",{className:"radio-btn-group",children:h.map(e=>a.jsxs("label",{children:[a.jsx("input",{type:"radio",name:g,id:e.id,value:e.value,checked:v===e.value,onChange:x}),a.jsx("label",{htmlFor:e.id,children:e.label})]},e.id))})};p.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const O={title:"Components/Form/RadioButton",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Name attribute for the radio group"},options:{control:"object",description:"Array of radio options"},defaultValue:{control:"text",description:"Default selected value"},onChange:{action:"changed",description:"Callback when selection changes"}}},m=[{id:"chinese",label:"中文",value:"chinese"},{id:"english",label:"English",value:"english"}],t={args:{name:"lang",options:m,defaultValue:"chinese"}},n={args:{name:"lang",options:m}};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: 'lang',
    options: defaultOptions,
    defaultValue: 'chinese'
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'lang',
    options: defaultOptions
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const R=["Default","Unchecked"];export{t as Default,n as Unchecked,R as __namedExportsOrder,O as default};
