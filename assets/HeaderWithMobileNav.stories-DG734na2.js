import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as N}from"./iframe-Cf8Fdf3r.js";import{H as M}from"./Header-CD02d-iI.js";import{M as h}from"./MobileSideNav-DEQGD55I.js";import"./Logo-D7ydNLCc.js";import"./NavItemList-8wARd5eV.js";import"./NavItem-Dqqjr1oJ.js";import"./Search-nlFEVwpu.js";import"./ProfileButton-CgSLN4Pf.js";import"./MenuList-B8LLsu1h.js";const b=({status:s,username:o,tabActive:t,onLoginClick:n})=>{const[i,l]=N.useState(!1),f=()=>{l(!0)},m=()=>{l(!1)};return e.jsxs("div",{className:"header-with-mobile-nav",children:[e.jsx(M,{status:s,username:o,tabActive:t,onLoginClick:n,onBurgerMenuClick:f}),e.jsx("div",{className:`mobile-nav-wrapper ${i?"active":""}`,children:e.jsx(h,{status:s,username:o,tabActive:t,onLoginClick:n,onClose:m})}),i&&e.jsx("div",{className:"mobile-nav-overlay",onClick:m})]})};b.__docgenInfo={description:"",methods:[],displayName:"HeaderWithMobileNav",props:{status:{required:!0,tsType:{name:"union",raw:"'normal' | 'logged-in'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'logged-in'"}]},description:""},username:{required:!1,tsType:{name:"string"},description:""},tabActive:{required:!1,tsType:{name:"boolean"},description:""},onLoginClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const _={title:"Components/HeaderWithMobileNav",component:b,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{status:{control:"select",options:["normal","logged-in"]},tabActive:{control:"boolean"}}},a={args:{status:"normal",tabActive:!1}},r={args:{status:"logged-in",username:"Now TV",tabActive:!1}};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    status: 'normal',
    tabActive: false
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: 'logged-in',
    username: 'Now TV',
    tabActive: false
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const k=["Normal","LoggedIn"];export{r as LoggedIn,a as Normal,k as __namedExportsOrder,_ as default};
