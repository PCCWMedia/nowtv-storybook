import{H as w}from"./NavigationBar-Csvg2nDR.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DQzInqiw.js";import"./Logo-VcZ8ZHrE.js";import"./nowtv-logo-5ypTsksM.js";import"./NavItemList-BG0VDkAP.js";import"./NavItem-DeZLTxg1.js";import"./Search-Blp5FnjW.js";import"./InputBox-DDRvGvBo.js";import"./ProfileButton-DD3DfSld.js";const L={title:"Components/NavigationBar",component:w,parameters:{},tags:["autodocs"],argTypes:{status:{control:"select",options:["normal","subscription","logged-in"]},tabActive:{control:"boolean"}}},r={args:{status:"normal",tabActive:!1}},s={args:{status:"subscription"}},a={args:{status:"logged-in",username:"Now TV",tabActive:!0}},e={args:{status:"nowid"}};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    status: 'normal',
    tabActive: false
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,i,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    status: 'subscription'
  }
}`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: 'logged-in',
    // Replace with dynamic username if needed
    username: "Now TV",
    tabActive: true
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,l,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'nowid'
  }
}`,...(b=(l=e.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const V=["Normal","Subscription","LoggedIn","Nowid"];export{a as LoggedIn,r as Normal,e as Nowid,s as Subscription,V as __namedExportsOrder,L as default};
