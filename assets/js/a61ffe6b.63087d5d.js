"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(g,a(a({ref:n},l),{},{components:t})):r.createElement(g,a({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37257:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const o={},a=void 0,s={unversionedId:"api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useInfiniteList",slug:"/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useInfiniteList/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683641442,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{}},c={},p=[],l={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/categories previewHeight=300px",live:!0,url:"http://localhost:3000/categories",previewHeight:"300px"},'import React from "react";\nimport { Refine } from "@pankod/refine-core";\n\nsetInitialRoutes(["/posts"]);\n// visible-block-start\nimport React from "react";\nimport { useInfiniteList } from "@pankod/refine-core";\n\nconst PostList = () => {\n    const {\n        data,\n        isError,\n        isLoading,\n        hasNextPage,\n        fetchNextPage,\n        isFetchingNextPage,\n    } = useInfiniteList({\n        resource: "categories",\n        config: {\n            pagination: {\n                pageSize: 4\n            }\n        }\n    });\n\n    if (isLoading) {\n        return <p>Loading</p>;\n    }\n    if (isError) {\n        return <p>Something went wrong</p>;\n    }\n\n    const allPages = [].concat(...(data?.pages ?? []).map((page) => page.data));\n\n    return (\n        <div>\n            <ul>\n                {allPages.map(({ id, title }) => (\n                    <li key={id}>\n                        {id}.{title}\n                    </li>\n                ))}\n            </ul>\n            {\n                hasNextPage && (\n                    <button\n                        onClick={() => fetchNextPage()}\n                        disabled={isFetchingNextPage}\n                    >\n                        {isFetchingNextPage ? "Loading more..." : "Load More" }\n                    </button>\n                )\n            }\n        </div>\n    );\n}\n// visible-block-end\n\nsetRefineProps({\n    // Layout: (props: LayoutProps) => <Layout {...props} />,\n    resources: [\n        {\n            name: "posts",\n            list: PostList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}u.isMDXComponent=!0}}]);