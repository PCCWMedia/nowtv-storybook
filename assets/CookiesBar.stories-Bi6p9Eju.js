import{C as c}from"./CookiesBar-Bc-fguUV.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-DZVqfSMv.js";import"./Button-DyfeWQQM.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,b={title:"Components/CookiesBar",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"A cookies consent bar that sticks to the bottom of the page and slides down when the accept button is clicked."}}},tags:["autodocs"],argTypes:{text:{control:"text",description:"Text content for the cookies notice (can include HTML)"},buttonLabel:{control:"text",description:"Label for the accept button"},isVisible:{control:"boolean",description:"Initial visibility state of the cookies bar"}},args:{onAccept:d()}},e={args:{isVisible:!0}},t={args:{isVisible:!1},parameters:{docs:{description:{story:"The cookies bar can start in a hidden state."}}}};var o,s,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isVisible: true
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var r,n,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isVisible: false
  },
  parameters: {
    docs: {
      description: {
        story: 'The cookies bar can start in a hidden state.'
      }
    }
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const f=["Default","InitiallyHidden"];export{e as Default,t as InitiallyHidden,f as __namedExportsOrder,b as default};
