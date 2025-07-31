import{N as d}from"./NavItem-B3tYxVen.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Bgd-R5Cn.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,g={title:"Components/NavigationBar/DesktopNav/NavItem",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{label:"Support",href:"#",onClick:a()}},r={args:{label:"Support",href:"#",className:"active",onClick:a()}},o={args:{label:"Subscribe",dropdownItems:[{href:"#",label:"New Customer"},{href:"#",label:"Existing Customer"},{href:"#",label:"Now E Customer"}],onClick:a()}};var n,s,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Support',
    href: '#',
    onClick: fn()
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,l,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Support',
    href: '#',
    className: 'active',
    onClick: fn()
  }
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Subscribe',
    dropdownItems: [{
      href: '#',
      label: 'New Customer'
    }, {
      href: '#',
      label: 'Existing Customer'
    }, {
      href: '#',
      label: 'Now E Customer'
    }],
    onClick: fn()
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const C=["SimpleLink","SimpleLinkActive","WithDropdown"];export{e as SimpleLink,r as SimpleLinkActive,o as WithDropdown,C as __namedExportsOrder,g as default};
