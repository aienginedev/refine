"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[79231],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={id:"useLogList",title:"useLogList"},i=void 0,l={unversionedId:"api-reference/core/hooks/audit-log/useLogList",id:"version-3.xx.xx/api-reference/core/hooks/audit-log/useLogList",title:"useLogList",description:"Overview",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/audit-log/useLogList.md",sourceDirName:"api-reference/core/hooks/audit-log",slug:"/api-reference/core/hooks/audit-log/useLogList",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLogList",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/audit-log/useLogList.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683641442,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{id:"useLogList",title:"useLogList"},sidebar:"someSidebar",previous:{title:"useLog",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog"},next:{title:"useBreadcrumb",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useBreadcrumb"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3}],s={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"If you need to list audit log events ",(0,n.kt)("strong",{parentName:"p"},"refine")," provides the ",(0,n.kt)("inlineCode",{parentName:"p"},"useLogList")," hook for it, It uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/audit-log-provider#get"},(0,n.kt)("inlineCode",{parentName:"a"},"auditLogProvider"))," under the hood."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.kt)("inlineCode",{parentName:"p"},"auditLogProvider"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," method is provided.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogList } from "@pankod/refine-core";\n\nconst postAuditLogResults = useLogList({\n    resource: "posts",\n});\n')),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{className:"required-block"},(0,n.kt)("div",null,"resource")," ",(0,n.kt)("div",{className:" required"},"Required"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Action that it reads from route")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"author"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"meta"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Record<string, any>")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metaData"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#metadataquery"},(0,n.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"UseQueryOptions<TData, TError>")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,n.kt)("h3",{id:"return-values"},"Return values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,n.kt)("inlineCode",{parentName:"td"},"react-query"),"'s ",(0,n.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"UseQueryResult<{ data: TData; }>")))))))}u.isMDXComponent=!0}}]);