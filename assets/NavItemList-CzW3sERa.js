import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DEQmBySG.js";import{N as a}from"./NavItem-QKw-iJhe.js";const i=({items:n,className:s=""})=>r.jsx("ul",{className:`nav-item-list ${s}`,children:n.map((e,t)=>r.jsx(a,{href:e.href,label:e.label,dropdownItems:e.dropdownItems,className:e.className,buttonClass:e.buttonClass},t))});i.__docgenInfo={description:"",methods:[],displayName:"NavItemList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    href?: string;
    label: string;
    dropdownItems?: Array<{
        href: string;
        label: string;
        target?: string;
    }>;
    className?: string;
    buttonClass?: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"dropdownItems",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    href: string;
    label: string;
    target?: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"target",value:{name:"string",required:!1}}]}}],raw:`Array<{
    href: string;
    label: string;
    target?: string;
}>`,required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"buttonClass",value:{name:"string",required:!1}}]}}],raw:`Array<{
    href?: string;
    label: string;
    dropdownItems?: Array<{
        href: string;
        label: string;
        target?: string;
    }>;
    className?: string;
    buttonClass?: string;
}>`},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{i as N};
