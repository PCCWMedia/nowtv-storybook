import{I as b}from"./InputBox-DHShYtgv.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-D2i8ictz.js";const w={title:"Components/Form/InputBox",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","email"],description:"Type of input field"},name:{control:"text",description:"Name attribute of the input"},label:{control:"text",description:"Label text for the input"},value:{control:"text",description:"Value of the input"},placeholder:{control:"text",description:"Placeholder text"},autoComplete:{control:"select",options:["on","off"],description:"Autocomplete attribute"},onChange:{action:"changed",description:"Callback when input value changes"}}},e={args:{type:"text",name:"default",label:"Default Input",autoComplete:"off"}},t={args:{type:"password",name:"password",label:"Password",placeholder:"",autoComplete:"off"}},o={args:{type:"text",name:"withValue",label:"With Value",value:"Pre-filled value",autoComplete:"off"}},a={args:{type:"text",name:"Search",placeholder:"Search...",autoComplete:"off",submitButton:!0,submitButtonText:"Search",submitButtonIcon:!0,submitButtonIconClass:"icon-search-icon"}};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    type: 'text',
    name: 'default',
    label: 'Default Input',
    autoComplete: 'off'
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,u,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: '',
    autoComplete: 'off'
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,i,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'text',
    name: 'withValue',
    label: 'With Value',
    value: 'Pre-filled value',
    autoComplete: 'off'
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'text',
    name: 'Search',
    placeholder: 'Search...',
    autoComplete: 'off',
    submitButton: true,
    submitButtonText: 'Search',
    submitButtonIcon: true,
    submitButtonIconClass: 'icon-search-icon'
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const y=["Default","Password","WithValue","WithSubmitButton"];export{e as Default,t as Password,a as WithSubmitButton,o as WithValue,y as __namedExportsOrder,w as default};
