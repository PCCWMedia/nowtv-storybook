import{M as l}from"./MenuList-BF7KVGxt.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-nMTwWxDm.js";const u={title:"Components/MobileSideNav/MenuList",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["normal","logged-in"],description:"User status"},tabActive:{control:"boolean",description:"Whether the tab is active"}}},e={args:{status:"normal",items:[{type:"link",title:"Home",href:"#",isActive:!0},{type:"toggle",title:"Subscribe",subItems:[{title:"New Customer",href:"#"},{title:"Existing Customer",href:"#"}]}]}},t={args:{status:"logged-in",items:[{type:"link",title:"Home",href:"#"},{type:"link",title:"Upgrade",href:"#",isActive:!0}]}};var s,r,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    status: 'normal',
    items: [{
      type: 'link',
      title: 'Home',
      href: '#',
      isActive: true
    }, {
      type: 'toggle',
      title: 'Subscribe',
      subItems: [{
        title: 'New Customer',
        href: '#'
      }, {
        title: 'Existing Customer',
        href: '#'
      }]
    }]
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var o,i,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    status: 'logged-in',
    items: [{
      type: 'link',
      title: 'Home',
      href: '#'
    }, {
      type: 'link',
      title: 'Upgrade',
      href: '#',
      isActive: true
    }]
  }
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const g=["NormalUser","LoggedInUser"];export{t as LoggedInUser,e as NormalUser,g as __namedExportsOrder,u as default};
