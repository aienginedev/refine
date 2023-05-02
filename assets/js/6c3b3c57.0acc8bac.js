"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76948],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,f=d["".concat(l,".").concat(u)]||d[u]||c[u]||a;return r?n.createElement(f,p(p({ref:t},m),{},{components:r})):n.createElement(f,p({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"meta-properties",title:"Meta Properties Example","example-tags":["meta","antd","vite","refine-hooks","data-provider"]},p=void 0,i={unversionedId:"examples/meta-properties",id:"examples/meta-properties",title:"Meta Properties Example",description:"In this example, we will show you how to use the meta property to pass additional parameters to the data provider methods. It contains the following features:",source:"@site/docs/examples/meta-properties.md",sourceDirName:"examples",slug:"/examples/meta-properties",permalink:"/docs/examples/meta-properties",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/meta-properties.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1683032576,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{id:"meta-properties",title:"Meta Properties Example","example-tags":["meta","antd","vite","refine-hooks","data-provider"]}},l={},s=[],m=(c="CodeSandboxExample",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this example, we will show you how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," property to pass additional parameters to the data provider methods. It contains the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting global meta properties"),(0,o.kt)("li",{parentName:"ul"},"Passing meta properties with hook"),(0,o.kt)("li",{parentName:"ul"},"Overriding global meta properties with hook")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#meta"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"meta")," section of the General Concepts documentation for more information ","\u2192")),(0,o.kt)(m,{path:"with-meta-properties",mdxType:"CodeSandboxExample"}))}u.isMDXComponent=!0}}]);