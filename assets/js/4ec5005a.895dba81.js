"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49082],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>l});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(t),l=o,b=d["".concat(p,".").concat(l)]||d[l]||u[l]||a;return t?n.createElement(b,i(i({ref:r},m),{},{components:t})):n.createElement(b,i({ref:r},m))}));function l(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35706:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={id:"mui-breadcrumb",title:"Breadcrumb"},i=void 0,c={unversionedId:"api-reference/mui/components/mui-breadcrumb",id:"api-reference/mui/components/mui-breadcrumb",title:"Breadcrumb",description:"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ` component built with Material UI Breadcrumb components using the useBreadcrumb` hook.",source:"@site/docs/api-reference/mui/components/breadcrumb.md",sourceDirName:"api-reference/mui/components",slug:"/api-reference/mui/components/mui-breadcrumb",permalink:"/docs/api-reference/mui/components/mui-breadcrumb",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/components/breadcrumb.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1666206085,formattedLastUpdatedAt:"Oct 19, 2022",frontMatter:{id:"mui-breadcrumb",title:"Breadcrumb"},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/api-reference/mui/components/basic-views/show"},next:{title:"Clone",permalink:"/docs/api-reference/mui/components/buttons/clone-button"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>breadcrumbProps</code>",id:"breadcrumbprops",level:3},{value:"<code>showHome</code>",id:"showhome",level:3},{value:"<code>hideIcons</code>",id:"hideicons",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],m=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:s};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. ",(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component built with Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},"Breadcrumb")," components using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useBreadcrumb"},(0,o.kt)("inlineCode",{parentName:"a"},"useBreadcrumb"))," hook."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/packages/mui/src/components/breadcrumb/index.tsx"},"source-code")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component to see how it is built. You can also create your custom breadcrumb component inspired by the source code.")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"breadcrumbprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"breadcrumbProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Breadcrumb>")," component uses the Material UI ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-breadcrumbs/#main-content"},"Breadcrumb")," component so it can be configured with the ",(0,o.kt)("inlineCode",{parentName:"p"},"breadcrumbProps")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}>\n            ...\n        </List>\n    );\n};\n')),(0,o.kt)("h3",{id:"showhome"},(0,o.kt)("inlineCode",{parentName:"h3"},"showHome")),(0,o.kt)("p",null,"If your application has a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#dashboardpage"},"DashboardPage"),", the home button is shown to the top of the hierarchy by default. If you don't want to show the home button, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"showHome")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    return <List breadcrumb={<Breadcrumb showHome={false} />}>...</List>;\n};\n')),(0,o.kt)("h3",{id:"hideicons"},(0,o.kt)("inlineCode",{parentName:"h3"},"hideIcons")),(0,o.kt)("p",null,"If you don't want to show the resource icons on the breadcrumb, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"hideIcons")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { List, Breadcrumb } from "@pankod/refine-mui";\n\nexport const PostList: React.FC = () => {\n    return (\n        <List breadcrumb={<Breadcrumb hideIcons />}>...</List>;\n    );\n};\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)(m,{module:"@pankod/refine-mui/Breadcrumb","breadcrumbProps-type":"[BreadcrumbProps](https://mui.com/material-ui/react-breadcrumbs/#main-content)","breadcrumbProps-description":"Passes properties for [`<Breadcrumb>`](https://mui.com/material-ui/react-breadcrumbs/#api)",mdxType:"PropsTable"}))}l.isMDXComponent=!0}}]);