import{S as u}from"./SelectBox-CNxCaBsj.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dinc0m7S.js";const x={title:"Components/Form/SelectBox",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{control:"object",description:"Array of select options"},placeholder:{control:"text",description:"Placeholder text when no option is selected"},defaultValue:{control:"text",description:"Default selected value"},onChange:{action:"changed",description:"Callback when selection changes"},name:{control:"text",description:"Name attribute for the select"}}},a=[{value:"visa",label:"Visa"},{value:"mastercard",label:"Mastercard"},{value:"amex",label:"American Express"}],e={args:{options:a,placeholder:"Select"}},o={args:{options:a,placeholder:"Select",defaultValue:"visa"}},t={args:{options:a,placeholder:"Choose payment method"}};var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    options: paymentOptions,
    placeholder: 'Select'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    options: paymentOptions,
    placeholder: 'Select',
    defaultValue: 'visa'
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,d,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options: paymentOptions,
    placeholder: 'Choose payment method'
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["Default","WithValue","CustomPlaceholder"];export{t as CustomPlaceholder,e as Default,o as WithValue,S as __namedExportsOrder,x as default};
