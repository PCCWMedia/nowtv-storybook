import{P as g}from"./PackOverlay-CnY34sUO.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-8ksLe4uj.js";import"./channels-CGdtLMlJ.js";import"./Button-DVW-pBY9.js";const y={title:"Components/Overlay/PackOverlay",component:g,parameters:{},tags:["autodocs"],argTypes:{image:{control:"text"},title:{control:"text"},packDescription:{control:"text"},channels:{control:"object"},ondemands:{control:"object"},onClose:{action:"closed"}}},r={image:"https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",title:"Pack Title",packDescription:"Draft Pack Description. This is a draft description for the pack. It includes all the necessary details about the pack.",channels:[],ondemands:[],onClose:()=>{}},n={args:{...r,isOnDemand:!0,ondemands:["L00754","L00601"].map(e=>({id:e})),channels:["611","621","622"].map(e=>({id:e}))}},a={args:{...r,channels:["621","631","622","623","624","625","626","102","105","115","320"].map(e=>({id:e}))}},s={args:{...r,ondemands:["L00754","L00601"].map(e=>({id:e})),isOnDemand:!0}};var o,t,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    isOnDemand: true,
    ondemands: ['L00754', 'L00601'].map(id => ({
      id
    })),
    channels: ['611', '621', '622'].map(id => ({
      id
    }))
  }
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,d,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    channels: ['621', '631', '622', '623', '624', '625', '626', '102', '105', '115', '320'].map(id => ({
      id
    }))
  }
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...baseArgs,
    ondemands: ['L00754', 'L00601'].map(id => ({
      id
    })),
    isOnDemand: true
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const b=["Default","ChannelsOnly","OnDemendOnly"];export{a as ChannelsOnly,n as Default,s as OnDemendOnly,b as __namedExportsOrder,y as default};
