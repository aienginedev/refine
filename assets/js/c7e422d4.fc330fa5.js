"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71367],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});r(67294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const s={id:"useTitle",title:"useTitle"},l=void 0,c={unversionedId:"api-reference/core/hooks/refine/useTitle",id:"version-3.xx.xx/api-reference/core/hooks/refine/useTitle",title:"useTitle",description:"useTitle returns a component that calls the ` passed to the `. In this way, it becomes easier for us to access this component in various parts of the application.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/refine/useTitle.md",sourceDirName:"api-reference/core/hooks/refine",slug:"/api-reference/core/hooks/refine/useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/refine/useTitle.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1690458265,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{id:"useTitle",title:"useTitle"},sidebar:"someSidebar",previous:{title:"useNotification",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/"},next:{title:"useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource"}},p={},u=[{value:"Usage",id:"usage",level:2}],f={toc:u};function d(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useTitle")," returns a component that calls the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Title>")," passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),". In this way, it becomes easier for us to access this component in various parts of the application."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Normally refine provides a default title. If we want to build a custom title instead of default one that comes with ",(0,n.kt)("strong",{parentName:"p"},"refine"),", we need to overwrite it like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine/dist/styles.min.css";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n// highlight-start\n            Title={({ collapsed }) => (\n                <div>\n                    {collapsed && <img src="./logo" alt="Logo" />}\n                    <span>Custom Title</span>\n                </div>\n            )}\n// highlight-end\n        />\n    );\n};\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This ",(0,n.kt)("inlineCode",{parentName:"p"},"<Title>")," we created is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Sider>")," that refine provides by default.")),(0,n.kt)("br",null),(0,n.kt)("p",null,"Now ",(0,n.kt)("inlineCode",{parentName:"p"},"useTitle")," will provides us to access to the ",(0,n.kt)("inlineCode",{parentName:"p"},"<Title>")," component from various parts of the application, like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/customSider"',title:'"src/components/customSider"'},'// highlight-next-line\nimport { useTitle } from "@pankod/refine-core";\nimport { AntdLayout } from "@pankod/refine-antd";\n\nexport const CustomSider: React.FC = () => {\n    const [collapsed, setCollapsed] = React.useState(false);\n// highlight-next-line\n    const Title = useTitle();\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            breakpoint="md"\n            collapsed={collapsed}\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n        >\n// highlight-next-line\n            <Title collapsed={collapsed} />\n            ...\n        </AntdLayout.Sider>\n    );\n};\n')))}d.isMDXComponent=!0}}]);