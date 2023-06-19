"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[22365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>p});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={id:"useResource",title:"useResource"},c=void 0,u={unversionedId:"api-reference/core/hooks/resource/useResource",id:"version-3.xx.xx/api-reference/core/hooks/resource/useResource",title:"useResource",description:"useResource is used to get the resources array that you defined in `. It also returns resource object, resourceName and query params id and action`.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResource.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResource.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1687163496,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{id:"useResource",title:"useResource"},sidebar:"someSidebar",previous:{title:"useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"},next:{title:"useResourceWithRoute",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>resourceNameOrRouteName</code>",id:"resourcenameorroutename",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>resources</code>",id:"resources",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>resourceName</code>",id:"resourcename",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Return value",id:"return-value",level:3},{value:"Interfaces",id:"interfaces",level:4}],d=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:p};function k(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useResource")," is used to get the resources array that you defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),". It also returns ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," object, ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceName")," and query params ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst { resources, resource, action, id } = useResource();\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"resourcenameorroutename"},(0,r.kt)("inlineCode",{parentName:"h3"},"resourceNameOrRouteName")),(0,r.kt)("p",null,"It is used to get resource object by name or route name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine-core";\n\nconst { resource } = useResource({\n    resourceNameOrRouteName: "posts",\n});\n')),(0,r.kt)("h2",{id:"return-values"},"Return Values"),(0,r.kt)("h3",{id:"resources"},(0,r.kt)("inlineCode",{parentName:"h3"},"resources")),(0,r.kt)("p",null,"An array of resources that you defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,r.kt)("h3",{id:"resource"},(0,r.kt)("inlineCode",{parentName:"h3"},"resource")),(0,r.kt)("p",null,"Resource object."),(0,r.kt)("h3",{id:"resourcename"},(0,r.kt)("inlineCode",{parentName:"h3"},"resourceName")),(0,r.kt)("p",null,"Resource name of resource object."),(0,r.kt)("h3",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("p",null,"Query param ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("h3",{id:"action"},(0,r.kt)("inlineCode",{parentName:"h3"},"action")),(0,r.kt)("p",null,"Query param ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(d,{module:"@pankod/refine-core/useResource",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"return-value"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resources"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#interfaces"},(0,r.kt)("inlineCode",{parentName:"a"},"IResourceItem[]")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#interfaces"},(0,r.kt)("inlineCode",{parentName:"a"},"IResourceItem")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resourceName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"create"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"show"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"clone"'))))),(0,r.kt)("h4",{id:"interfaces"},"Interfaces"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type OptionsProps<TExtends = { [key: string]: any }> = TExtends & {\n    label?: string;\n    route?: string;\n    hide?: boolean;\n    auditLog?: {\n        permissions?: AuditLogPermissions[number][] | string[];\n    };\n};\n\ninterface IResourceComponentsProps<\n    TCrudData = any,\n    TOptionsPropsExtends = { [key: string]: any },\n> {\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canDelete?: boolean;\n    canShow?: boolean;\n    name?: string;\n    initialData?: TCrudData;\n    options?: OptionsProps<TOptionsPropsExtends>;\n}\n\ninterface IResourceComponents {\n    list?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    create?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    edit?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n    show?: React.FunctionComponent<IResourceComponentsProps<any, any>>;\n}\n\ninterface IResourceItem extends IResourceComponents {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n    options?: OptionsProps;\n    parentName?: string;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"canShow")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")))}k.isMDXComponent=!0}}]);