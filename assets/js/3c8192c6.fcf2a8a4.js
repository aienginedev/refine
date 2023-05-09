"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={},o=void 0,s={unversionedId:"api-reference/core/hooks/data/useInfiniteList/filtering-live-preview",id:"api-reference/core/hooks/data/useInfiniteList/filtering-live-preview",title:"filtering-live-preview",description:"",source:"@site/docs/api-reference/core/hooks/data/useInfiniteList/filtering-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useInfiniteList",slug:"/api-reference/core/hooks/data/useInfiniteList/filtering-live-preview",permalink:"/docs/api-reference/core/hooks/data/useInfiniteList/filtering-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/data/useInfiniteList/filtering-live-preview.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683641442,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{}},c={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useState } from "react";\nimport { useInfiniteList, HttpError } from "@refinedev/core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    //highlight-next-line\n    const [value, setValue] = useState("Cotton");\n\n    const {\n        data,\n        isLoading,\n        isError,\n        hasNextPage,\n        fetchNextPage,\n        isFetchingNextPage,\n    } = useInfiniteList<IProduct, HttpError>({\n        resource: "products",\n        //highlight-start\n        filters: [\n            {\n                field: "material",\n                operator: "eq",\n                value,\n            },\n        ],\n        //highlight-end\n    });\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    const allPages = [].concat(...(data?.pages ?? []).map((page) => page.data));\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <span> material: </span>\n            <select value={value} onChange={(e) => setValue(e.target.value)}>\n                {["Cotton", "Bronze", "Plastic"].map((material) => (\n                    <option key={material} value={material}>\n                        {material}\n                    </option>\n                ))}\n            </select>\n            {/* highlight-end */}\n\n            <ul>\n                {allPages.map((product) => (\n                    <li key={product.id}>\n                        {product.name} - ({product.material})\n                    </li>\n                ))}\n            </ul>\n\n            {hasNextPage && (\n                <button\n                    onClick={() => fetchNextPage()}\n                    disabled={isFetchingNextPage}\n                >\n                    {isFetchingNextPage ? "Loading more..." : "Load More"}\n                </button>\n            )}\n        </div>\n    );\n};\n\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}u.isMDXComponent=!0}}]);