import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DNPgrBSQ.js";import{S as w,a as u}from"./swiper-DmrNzQii.js";import{N as d}from"./navigation-CNIuBqoI.js";import{P as g}from"./pagination-DRyA9Rjf.js";import{A as h}from"./autoplay-DF1OiTjA.js";const l=({slides:s,autoplay:i=!1,autoplayDelay:p=3e3,loop:c=!0})=>e.jsx("div",{className:"article-banner",children:e.jsx(w,{modules:[d,g,h],spaceBetween:1,grabCursor:!0,slidesPerView:1.6,centeredSlides:!0,roundLengths:!0,loop:c,navigation:!0,pagination:{clickable:!0},autoplay:i?{delay:p,disableOnInteraction:!1}:!1,breakpoints:{480:{slidesPerView:1.3},767:{slidesPerView:1.6}},children:s.map((o,m)=>e.jsx(u,{children:e.jsx("a",{href:o.href,children:e.jsx("img",{src:o.image.src,alt:o.image.alt})})},m))})});l.__docgenInfo={description:"",methods:[],displayName:"ArticleBanner",props:{slides:{required:!0,tsType:{name:"Array",elements:[{name:"ArticleSlide"}],raw:"ArticleSlide[]"},description:""},autoplay:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoplayDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},loop:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const x={title:"Components/Swiper/ArticleBanner",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{autoplayDelay:{control:{type:"number",min:1e3,max:1e4,step:500},description:"Autoplay delay in milliseconds"},autoplay:{control:"boolean",description:"Enable or disable autoplay"}}},t={args:{autoplayDelay:3e3,slides:[{href:"blog-article-type1.html",image:{src:"https://www.nowtv.now.com/wp-content/uploads/2025/02/Now-True-Exhibition-On-Screen-Cezanne-Renoir-cover.jpg",alt:"Now True Exhibition On Screen Cezanne Renoir"}},{href:"blog-article-type1.html",image:{src:"https://www.nowtv.now.com/wp-content/uploads/2025/02/top-10-korean-movies-2024-cover.jpg",alt:"Top 10 Korean Movies 2024"}},{href:"blog-article-type1.html",image:{src:"https://www.nowtv.now.com/wp-content/uploads/2025/01/Rob-N-Roll_cover.jpg",alt:"Rob N Roll"}},{href:"blog-article-type1.html",image:{src:"https://www.nowtv.now.com/wp-content/uploads/2025/01/cover-1.jpg",alt:"Article cover"}},{href:"blog-article-type1.html",image:{src:"https://www.nowtv.now.com/wp-content/uploads/2025/01/FA-Cup-cover.png",alt:"FA Cup"}}]}};var n,a,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    autoplayDelay: 3000,
    slides: [{
      href: 'blog-article-type1.html',
      image: {
        src: 'https://www.nowtv.now.com/wp-content/uploads/2025/02/Now-True-Exhibition-On-Screen-Cezanne-Renoir-cover.jpg',
        alt: 'Now True Exhibition On Screen Cezanne Renoir'
      }
    }, {
      href: 'blog-article-type1.html',
      image: {
        src: 'https://www.nowtv.now.com/wp-content/uploads/2025/02/top-10-korean-movies-2024-cover.jpg',
        alt: 'Top 10 Korean Movies 2024'
      }
    }, {
      href: 'blog-article-type1.html',
      image: {
        src: 'https://www.nowtv.now.com/wp-content/uploads/2025/01/Rob-N-Roll_cover.jpg',
        alt: 'Rob N Roll'
      }
    }, {
      href: 'blog-article-type1.html',
      image: {
        src: 'https://www.nowtv.now.com/wp-content/uploads/2025/01/cover-1.jpg',
        alt: 'Article cover'
      }
    }, {
      href: 'blog-article-type1.html',
      image: {
        src: 'https://www.nowtv.now.com/wp-content/uploads/2025/01/FA-Cup-cover.png',
        alt: 'FA Cup'
      }
    }]
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,x as default};
