import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as v}from"./iframe-BINhIs1_.js";import{S as m}from"./SearchTabButtons-BISF1IQz.js";import"./SelectBox-DetvB99U.js";/* empty css                     */const g=[{id:"all",label:"All",count:20},{id:"offers",label:"Offers",count:4},{id:"program",label:"Program",count:20},{id:"channels",label:"Channels & Catalogs",count:10},{id:"support",label:"Support",count:4},{id:"others",label:"Others",count:2}],C={title:"Components/SearchResult/SearchTabButtons",component:m,parameters:{layout:"centered"},decorators:[a=>s.jsx("div",{style:{width:"min(100%, 1100px)",padding:"24px",background:"#fff"},children:s.jsx(a,{})})]},e={render:a=>{const[f,T]=v.useState(a.activeTabId);return s.jsx(m,{...a,activeTabId:f,onTabChange:T})},args:{tabs:g,activeTabId:"all"}},t={args:{tabs:g,activeTabId:"program"}},r={args:{tabs:[{id:"all",label:"All",count:6},{id:"offers",label:"Offers",count:2},{id:"support",label:"Support",count:4}],activeTabId:"support"}};var o,n,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [activeTabId, setActiveTabId] = useState(args.activeTabId);
    return <SearchTabButtons {...args} activeTabId={activeTabId} onTabChange={setActiveTabId} />;
  },
  args: {
    tabs,
    activeTabId: 'all'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var l,d,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tabs,
    activeTabId: 'program'
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,u,b;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'all',
      label: 'All',
      count: 6
    }, {
      id: 'offers',
      label: 'Offers',
      count: 2
    }, {
      id: 'support',
      label: 'Support',
      count: 4
    }],
    activeTabId: 'support'
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const j=["Default","ProgramActive","CompactSet"];export{r as CompactSet,e as Default,t as ProgramActive,j as __namedExportsOrder,C as default};
