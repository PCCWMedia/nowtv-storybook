import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-DEdcsZVh.js";const k=({name:g,checked:b=!1,onChange:a,label:o,links:s=[]})=>{const[x,y]=w.useState(b),I=c=>{const e=c.target.checked;y(e),a==null||a(e)},C=()=>{if(!o&&s.length===0)return null;const c=o?o.split(/(\{link\})/g):[];let e=0;return t.jsx("p",{children:c.map((i,T)=>{if(i==="{link}"&&s[e]){const l=s[e];return e++,t.jsx("a",{href:l.href,children:l.text},T)}return i})})};return t.jsxs("div",{className:"checkbox-group",children:[t.jsx("label",{children:t.jsx("input",{type:"checkbox",name:g,checked:x,onChange:I})}),C()]})};k.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{name:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:""},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  text: string;
  href: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:`{
  text: string;
  href: string;
}[]`},description:"",defaultValue:{value:"[]",computed:!1}}}};const v={title:"Components/Form/Checkbox",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Whether the checkbox is checked"},name:{control:"text",description:"Name attribute of the checkbox"},label:{control:"text",description:"Label text for the checkbox"},onChange:{action:"changed",description:"Callback when checkbox state changes"}}},n={args:{name:"terms",checked:!1,label:"I agree to apply for Now ID. I also understand the {link} and {link} and agree to be bound by them.",links:[{text:"Terms and Conditions",href:"#"},{text:"Personal Information Collection Statement",href:"#"}]}},r={args:{name:"terms",checked:!0,label:"I agree to apply for Now ID. I also understand the {link} and {link} and agree to be bound by them.",links:[{text:"Terms and Conditions",href:"#"},{text:"Personal Information Collection Statement",href:"#"}]}};var d,m,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'terms',
    checked: false,
    label: 'I agree to apply for Now ID. I also understand the {link} and {link} and agree to be bound by them.',
    links: [{
      text: 'Terms and Conditions',
      href: '#'
    }, {
      text: 'Personal Information Collection Statement',
      href: '#'
    }]
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,p,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'terms',
    checked: true,
    label: 'I agree to apply for Now ID. I also understand the {link} and {link} and agree to be bound by them.',
    links: [{
      text: 'Terms and Conditions',
      href: '#'
    }, {
      text: 'Personal Information Collection Statement',
      href: '#'
    }]
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const N=["Default","Checked"];export{r as Checked,n as Default,N as __namedExportsOrder,v as default};
