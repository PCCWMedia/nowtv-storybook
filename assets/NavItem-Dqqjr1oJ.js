import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Cf8Fdf3r.js";const d=({href:s="#",label:n,dropdownItems:r,className:t="",buttonClass:i="",onClick:l})=>e.jsxs("li",{className:"nav-item",children:[e.jsx("a",{href:s,onClick:l,className:`${t} ${r?"has-dropdown":""} ${i}`,children:n}),r&&e.jsx("ul",{className:"dropDown",children:r.map((a,u)=>e.jsx("li",{children:e.jsx("a",{href:a.href,children:a.label})},u))})]});d.__docgenInfo={description:"",methods:[],displayName:"NavItem",props:{href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},dropdownItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    href: string;
    label: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:`Array<{
    href: string;
    label: string;
}>`},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},buttonClass:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{d as N};
