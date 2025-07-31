import{P as f}from"./PlanCard-Yve81ZuZ.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DqpSBh7L.js";import"./Button-CybHHmXc.js";import"./PackOverlay-CM7aBEHZ.js";import"./channels-Ck5RfRoi.js";import"./PlanOverlay-yXxKnfmc.js";import"./Link-IUgL8sG0.js";import"./plans-ZTLoLkaF.js";import"./PriceTag-BwL_0Mok.js";const x={title:"Components/Card/PlanCard",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{image:{control:"text"},imageSquare:{control:"text"},title:{control:"text"},description:{control:"text"},planIncludes:{control:"text"},price:{control:"text"},notes:{control:"text"},priceType:{control:"select",options:["from","avg","day"],description:"Price display format"}}},o={image:"https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",title:"Super Sports & Entertainment Combo",description:"Draft Pack Description. This is a draft description for the pack. It includes all the necessary details about the pack.",planIncludes:["Now Signature Pack","Super Sports Pack Plus","Soccer Pack"],price:"$888",notes:"This is small note"},e={args:{...o,variant:"fullscreen",image:"https://nowtv-strapi-bucket.s3.ap-southeast-1.amazonaws.com/SSPP_Now_Signature_STEM_banner_12209d63f5.jpg",imageSquare:"https://www.nowtv.now.com/wp-content/uploads/2025/01/3-Pack-Soccer-Combo-Square.jpg",priceType:"avg"}},a={args:{...o,variant:"onerow",imageSquare:"https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",priceType:"avg"}},r={args:{...o,priceType:"from"}},t={args:{...o,variant:"sm",priceType:"day"}};var s,n,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'fullscreen',
    image: 'https://nowtv-strapi-bucket.s3.ap-southeast-1.amazonaws.com/SSPP_Now_Signature_STEM_banner_12209d63f5.jpg',
    imageSquare: 'https://www.nowtv.now.com/wp-content/uploads/2025/01/3-Pack-Soccer-Combo-Square.jpg',
    priceType: 'avg'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,i,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'onerow',
    imageSquare: 'https://www.nowtv.now.com/media/Pack-folder/default-img-square.png',
    priceType: 'avg'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    priceType: 'from'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,w,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    variant: 'sm',
    priceType: 'day'
  }
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const A=["FullscreenCard","OneRowCard","DefaultCard","SmallCard"];export{r as DefaultCard,e as FullscreenCard,a as OneRowCard,t as SmallCard,A as __namedExportsOrder,x as default};
