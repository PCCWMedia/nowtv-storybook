import{r as c,e as h}from"./iframe-Fk0jeBN5.js";import{P as _}from"./Pagination-DVMd6seJ.js";import"./jsx-runtime-D_zvdyIk.js";const{fn:O}=__STORYBOOK_MODULE_TEST__,M={title:"Components/Pagination",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{totalPages:{control:"number"},currentPage:{control:"number"},maxVisiblePages:{control:"number"}},args:{totalPages:8,currentPage:1,maxVisiblePages:8,onPageChange:O()}},a={args:{currentPage:1,totalPages:8}},r={args:{currentPage:4,totalPages:8}},t={args:{currentPage:8,totalPages:8}},n={render:e=>{const[C,s]=c.useState(e.currentPage);return c.useEffect(()=>{s(e.currentPage)},[e.currentPage]),h.createElement(_,{...e,currentPage:C,onPageChange:o=>{var g;s(o),(g=e.onPageChange)==null||g.call(e,o)}})},args:{currentPage:3,totalPages:12,maxVisiblePages:7}};var P,u,m;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 8
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var i,p,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    currentPage: 4,
    totalPages: 8
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,x,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    currentPage: 8,
    totalPages: 8
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,E,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(args.currentPage);
    useEffect(() => {
      setPage(args.currentPage);
    }, [args.currentPage]);
    return React.createElement(Pagination, {
      ...args,
      currentPage: page,
      onPageChange: (nextPage: number) => {
        setPage(nextPage);
        args.onPageChange?.(nextPage);
      }
    });
  },
  args: {
    currentPage: 3,
    totalPages: 12,
    maxVisiblePages: 7
  }
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const v=["FirstPage","MiddlePage","LastPage","Interactive"];export{a as FirstPage,n as Interactive,t as LastPage,r as MiddlePage,v as __namedExportsOrder,M as default};
