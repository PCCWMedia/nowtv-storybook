import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-CGJfvxPA.js";import{i as f,g as T}from"./Google-Play-store-en-VseMiCTS.js";const d=({title:l="Watch on Now TV",subtitle:p="Enjoy on Now TV Boxes, Smart TVs, iOS and Android mobile devices.",deviceImage:w,appIconSrc:g,mobileLinks:v,tvLogos:h})=>{const[o,a]=t.useState("other");t.useEffect(()=>{const i=navigator.userAgent;/iPad|iPhone|iPod/.test(i)?a("ios"):/Android/.test(i)&&a("android")},[]);const u=v.filter(i=>!i.platform||o==="other"?!0:i.platform===o);return e.jsx("div",{className:"download-nowtv",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{children:l}),e.jsx("h5",{children:p}),e.jsxs("div",{className:"nowtv-apps-wrapper",children:[e.jsx("div",{className:"image",children:e.jsx("img",{src:w,alt:"Now TV devices"})}),e.jsxs("div",{className:"apps-wrapper",children:[e.jsx("div",{className:"nowtv-app",children:e.jsx("img",{src:g,alt:"Now TV app"})}),e.jsxs("div",{className:"app-labels-wrapper",children:[e.jsxs("div",{className:"download-section mobile",children:[e.jsx("h5",{children:"On Mobile Device"}),u.map((i,s)=>e.jsx("a",{href:i.href,id:i.id,target:"_blank",rel:"noreferrer",children:e.jsx("img",{src:i.imageSrc,alt:i.imageAlt})},s))]}),e.jsxs("div",{className:"download-section tv",children:[e.jsx("h5",{children:"On Smart TV"}),h.map((i,s)=>e.jsx("img",{src:i.src,alt:i.alt,className:i.className},s))]})]})]})]})]})})};d.__docgenInfo={description:"",methods:[],displayName:"DownloadApp",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Watch on Now TV'",computed:!1}},subtitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Enjoy on Now TV Boxes, Smart TVs, iOS and Android mobile devices.'",computed:!1}},deviceImage:{required:!0,tsType:{name:"string"},description:""},appIconSrc:{required:!0,tsType:{name:"string"},description:""},mobileLinks:{required:!0,tsType:{name:"Array",elements:[{name:"AppLink"}],raw:"AppLink[]"},description:""},tvLogos:{required:!0,tsType:{name:"Array",elements:[{name:"TvLogo"}],raw:"TvLogo[]"},description:""}}};const S={title:"Components/DownloadApp",component:d,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={args:{title:"Watch on Now TV",subtitle:"Enjoy on Now TV Boxes, Smart TVs, iOS and Android mobile devices.",deviceImage:"https://www.nowtv.now.com/media/Design/minisite/img/now-devices.png",appIconSrc:"https://www.nowtv.now.com/media/Design/minisite/img/icon/Now-TV-app.svg",mobileLinks:[{href:"https://apps.apple.com/hk/app/now-%E9%9A%A8%E8%BA%AB%E7%9D%87/id501956183?l=en",imageSrc:f,imageAlt:"Download on the App Store",id:"ios-link"},{href:"https://play.google.com/store/apps/details?id=com.pccw.nowplayer&hl=en",imageSrc:T,imageAlt:"Get it on Google Play",id:"android-link"}],tvLogos:[{src:"https://www.nowtv.now.com/media/Design/minisite/img/icon/samsung-tizen.svg",alt:"Samsung Tizen",className:"samsung"},{src:"https://www.nowtv.now.com/media/Design/minisite/img/icon/LG-smart-TV.png",alt:"LG Smart TV",className:"lg"},{src:"https://www.nowtv.now.com/media/Design/minisite/img/icon/androidtv-logo.svg",alt:"Android TV",className:"android"},{src:"https://www.nowtv.now.com/media/Design/minisite/img/icon/Panasonic-firetv.png",alt:"Panasonic Fire TV",className:"firetv"}]}};var r,m,c;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Watch on Now TV',
    subtitle: 'Enjoy on Now TV Boxes, Smart TVs, iOS and Android mobile devices.',
    deviceImage: 'https://www.nowtv.now.com/media/Design/minisite/img/now-devices.png',
    appIconSrc: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/Now-TV-app.svg',
    mobileLinks: [{
      href: 'https://apps.apple.com/hk/app/now-%E9%9A%A8%E8%BA%AB%E7%9D%87/id501956183?l=en',
      imageSrc: iosStoreBadge,
      imageAlt: 'Download on the App Store',
      id: 'ios-link'
    }, {
      href: 'https://play.google.com/store/apps/details?id=com.pccw.nowplayer&hl=en',
      imageSrc: googlePlayBadge,
      imageAlt: 'Get it on Google Play',
      id: 'android-link'
    }],
    tvLogos: [{
      src: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/samsung-tizen.svg',
      alt: 'Samsung Tizen',
      className: 'samsung'
    }, {
      src: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/LG-smart-TV.png',
      alt: 'LG Smart TV',
      className: 'lg'
    }, {
      src: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/androidtv-logo.svg',
      alt: 'Android TV',
      className: 'android'
    }, {
      src: 'https://www.nowtv.now.com/media/Design/minisite/img/icon/Panasonic-firetv.png',
      alt: 'Panasonic Fire TV',
      className: 'firetv'
    }]
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const V=["Default"];export{n as Default,V as __namedExportsOrder,S as default};
