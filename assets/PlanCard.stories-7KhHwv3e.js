import{P as g}from"./PlanCard-CrHUiiy8.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-Cf8Fdf3r.js";import"./Button-Ei4vw_WB.js";import"./PackOverlay-C6hymZHe.js";import"./PlanOverlay-BSpYQrV3.js";import"./Link-DloETYBP.js";const v={title:"Components/Card/PlanCard",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{image:{control:"text"},imageSquare:{control:"text"},title:{control:"text"},description:{control:"text"},planIncludes:{control:"object"},price:{control:"text"},notes:{control:"text"},priceType:{control:"select",options:["from","avg","day"],description:"Price display format"}}},t={image:"https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",title:"Super Sports & Entertainment Combo",description:"Draft Pack Description. This is a draft description for the pack. It includes all the necessary details about the pack.",planIncludes:["Now Signature Pack","Super Sports Pack Plus","Soccer Pack"],price:"$888",notes:"This is small note"},e={args:{...t,variant:"onerow",imageSquare:"https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",priceType:"avg"}},r={args:{...t,priceType:"from"}},a={args:{...t,variant:"sm",priceType:"day"}};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'onerow',
    imageSquare: 'https://www.nowtv.now.com/media/Pack-folder/default-img-square.png',
    priceType: 'avg'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,p,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    priceType: 'from'
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,d,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'sm',
    priceType: 'day'
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const T=["OneRowCard","DefaultCard","SmallCard"];export{r as DefaultCard,e as OneRowCard,a as SmallCard,T as __namedExportsOrder,v as default};
