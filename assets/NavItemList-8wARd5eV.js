import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Cf8Fdf3r.js";import{N as t}from"./NavItem-Dqqjr1oJ.js";const l=({items:s,className:n=""})=>r.jsx("ul",{className:`nav-item-list ${n}`,children:s.map((e,a)=>r.jsx(t,{href:e.href,label:e.label,dropdownItems:e.dropdownItems,className:e.className,buttonClass:e.buttonClass},a))});l.__docgenInfo={description:"",methods:[],displayName:"NavItemList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    href?: string;
    label: string;
    dropdownItems?: Array<{
        href: string;
        label: string;
    }>;
    className?: string;
    buttonClass?: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!0}},{key:"dropdownItems",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    href: string;
    label: string;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:`Array<{
    href: string;
    label: string;
}>`,required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"buttonClass",value:{name:"string",required:!1}}]}}],raw:`Array<{
    href?: string;
    label: string;
    dropdownItems?: Array<{
        href: string;
        label: string;
    }>;
    className?: string;
    buttonClass?: string;
}>`},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{l as N};
