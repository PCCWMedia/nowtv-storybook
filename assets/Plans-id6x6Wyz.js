import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-CQoWA9A0.js";import{S as C,a as B}from"./swiper-VZugXiXk.js";import{N as G}from"./navigation-B6awfUyo.js";import{P as h,p as O}from"./PlanCard-DUPPNS0q.js";import{P as V}from"./PackOverlay-m9VGO-Bh.js";import{P as y}from"./PlanOverlay-Ccsza9yd.js";import{p as j}from"./plans-ZTLoLkaF.js";/* empty css               */const I=({plans:i=[{image:"https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",imageSquare:"https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",title:"Basic Plan",description:"Perfect for individuals",planIncludes:["HD Streaming","1 Device"],price:"$9.99",notes:"No contract required",priceType:"from"},{image:"https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",imageSquare:"https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",title:"Standard Plan",description:"Great for families",planIncludes:["4K Streaming","2 Devices"],price:"$14.99",notes:"No contract required",priceType:"avg"},{image:"https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",imageSquare:"https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",title:"Premium Plan",description:"Best value for groups",planIncludes:["4K Streaming","4 Devices"],price:"$19.99",notes:"No contract required",priceType:"day"}]})=>{const p=m.useRef(null),[k,w]=m.useState(!1),[g,f]=m.useState(!1),[T,S]=m.useState(""),[u,q]=m.useState(null),[n,b]=m.useState(null),D=(e,r,a)=>{const t=O.packs.find(s=>s.name===e);t&&(S(e),q(t),w(!0))},P=e=>{const r=j.plans[e];r&&(b(r),f(!0))},N=()=>{w(!1)},v=()=>{f(!1)},d=()=>{if(!p.current)return;const r=p.current.swiper.slides;r.forEach(t=>{const s=t.querySelector(".top"),l=t.querySelector(".includes"),c=t.querySelector(".bottom-control");s&&(s.style.height="auto"),l&&(l.style.height="auto"),c&&(c.style.height="auto")});const a={top:0,includes:0,bottomControl:0};r.forEach(t=>{const s=t.querySelector(".top"),l=t.querySelector(".includes"),c=t.querySelector(".bottom-control");s&&(a.top=Math.max(a.top,s.offsetHeight)),l&&(a.includes=Math.max(a.includes,l.offsetHeight)),c&&(a.bottomControl=Math.max(a.bottomControl,c.offsetHeight))}),r.forEach(t=>{const s=t.querySelector(".top"),l=t.querySelector(".includes"),c=t.querySelector(".bottom-control");s&&(s.style.height=`${a.top}px`),l&&(l.style.height=`${a.includes}px`),c&&(c.style.height=`${a.bottomControl}px`)})};if(m.useEffect(()=>{const e=new ResizeObserver(()=>{d()});let r=null;return p.current&&p.current.swiper&&p.current.swiper.el&&(r=p.current.swiper,e.observe(r.el)),setTimeout(d,100),()=>{e.disconnect()}},[i]),i.length===1)return o.jsxs("div",{className:"plans-swiper-wrapper",children:[o.jsx(h,{...i[0],variant:"sm",buttonLabel:i[0].subNow||"See Options",onButtonClick:()=>P(i[0].title)}),g&&n&&o.jsx(y,{planName:n.planName,plans:n.plansData,remarks:n.remarks.content,remarksActive:n.remarks.active,onClose:v})]});const x=()=>{if(i.length>=4)return{breakpoints:{991:{slidesPerView:3.15,spaceBetween:8,slidesPerGroup:3},767:{slidesPerView:2.3,spaceBetween:8,slidesPerGroup:2},480:{slidesPerView:1.15,spaceBetween:8,slidesPerGroup:1},320:{slidesPerView:1.15,spaceBetween:8,slidesPerGroup:1}}};if(i.length===3)return{breakpoints:{991:{slidesPerView:3,spaceBetween:8,slidesPerGroup:3},767:{slidesPerView:2.3,spaceBetween:8,slidesPerGroup:2},480:{slidesPerView:1.15,spaceBetween:8,slidesPerGroup:1},320:{slidesPerView:1.15,spaceBetween:8,slidesPerGroup:1}}};if(i.length===2)return{breakpoints:{991:{slidesPerView:2,spaceBetween:8,slidesPerGroup:2},767:{slidesPerView:2,spaceBetween:8,slidesPerGroup:2},480:{slidesPerView:1.15,spaceBetween:8,slidesPerGroup:1},320:{slidesPerView:1.15,spaceBetween:8,slidesPerGroup:1}}}};return o.jsxs("div",{className:"plans-swiper-wrapper",children:[o.jsx(C,{ref:p,modules:[G],spaceBetween:8,slidesPerView:1,navigation:!0,...x(),onSlideChange:d,children:i.map((e,r)=>o.jsx(B,{children:o.jsx(h,{...e,variant:"sm",buttonLabel:e.subNow||"See Options",onPackClick:D,useExternalOverlay:!0,onButtonClick:()=>P(e.title)})},r))}),k&&u&&o.jsx(V,{image:u.packImage,title:u.name,packDescription:u.description,channels:u.channelsNumber.map(e=>({id:e})),ondemands:u.onDemandNumber.map(e=>({id:e})),isOnDemand:u.onDemandNumber.length>0,onClose:N}),g&&n&&o.jsx(y,{planName:n.planName,plans:n.plansData,remarks:n.remarks.content,remarksActive:n.remarks.active,onClose:v})]})};I.__docgenInfo={description:"",methods:[],displayName:"SwiperDemo",props:{plans:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  image: string;
  imageSquare?: string;
  title: string;
  description: string;
  planIncludes: string[];
  price: string;
  notes: string;
  subNow?: string;
  priceType?: 'from' | 'avg' | 'day';
}`,signature:{properties:[{key:"image",value:{name:"string",required:!0}},{key:"imageSquare",value:{name:"string",required:!1}},{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!0}},{key:"planIncludes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"price",value:{name:"string",required:!0}},{key:"notes",value:{name:"string",required:!0}},{key:"subNow",value:{name:"string",required:!1}},{key:"priceType",value:{name:"union",raw:"'from' | 'avg' | 'day'",elements:[{name:"literal",value:"'from'"},{name:"literal",value:"'avg'"},{name:"literal",value:"'day'"}],required:!1}}]}}],raw:`Array<{
  image: string;
  imageSquare?: string;
  title: string;
  description: string;
  planIncludes: string[];
  price: string;
  notes: string;
  subNow?: string;
  priceType?: 'from' | 'avg' | 'day';
}>`},description:"",defaultValue:{value:`[
  {
    image: "https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",
    imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
    title: "Basic Plan",
    description: "Perfect for individuals",
    planIncludes: ["HD Streaming", "1 Device"],
    price: "$9.99",
    notes: "No contract required",
    priceType: 'from'
  },
  {
    image: "https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",
    imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
    title: "Standard Plan",
    description: "Great for families",
    planIncludes: ["4K Streaming", "2 Devices"],
    price: "$14.99",
    notes: "No contract required",
    priceType: 'avg'
  },
  {
    image: "https://www.nowtv.now.com/media/Pack-folder/default-img-banner.png",
    imageSquare: "https://www.nowtv.now.com/media/Pack-folder/default-img-square.png",
    title: "Premium Plan",
    description: "Best value for groups",
    planIncludes: ["4K Streaming", "4 Devices"],
    price: "$19.99",
    notes: "No contract required",
    priceType: 'day'
  }
]`,computed:!1}}}};export{I as S};
