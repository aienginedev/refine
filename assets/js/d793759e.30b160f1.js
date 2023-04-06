"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[87532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,c={unversionedId:"api-reference/mui/hooks/useAutocomplete/sort-live-preview",id:"api-reference/mui/hooks/useAutocomplete/sort-live-preview",title:"sort-live-preview",description:"",source:"@site/docs/api-reference/mui/hooks/useAutocomplete/sort-live-preview.md",sourceDirName:"api-reference/mui/hooks/useAutocomplete",slug:"/api-reference/mui/hooks/useAutocomplete/sort-live-preview",permalink:"/docs/api-reference/mui/hooks/useAutocomplete/sort-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/mui/hooks/useAutocomplete/sort-live-preview.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1680823059,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000 previewHeight=300px",live:!0,url:"http://localhost:3000",previewHeight:"300px"},'setInitialRoutes(["/posts/create"]);\n// visible-block-start\nimport { useAutocomplete } from "@refinedev/mui";\nimport { Autocomplete, Button, TextField } from "@mui/material";\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\nconst PostCreate: React.FC = () => {\n    const [order, setOrder] = React.useState<"asc" | "desc">("asc");\n    const { autocompleteProps } = useAutocomplete<ICategory>({\n        resource: "categories",\n        // highlight-start\n        sorters: [\n            {\n                field: "title",\n                order,\n            },\n        ],\n        // highlight-end\n    });\n\n    return (\n        <>\n            <Autocomplete\n                {...autocompleteProps}\n                getOptionLabel={(item) => item.title}\n                isOptionEqualToValue={(option, value) =>\n                    value === undefined || option?.id?.toString() === (value?.id ?? value)?.toString()\n                }\n                placeholder="Select a category"\n                renderInput={(params) => (\n                    <TextField\n                        {...params}\n                        label="Category"\n                        margin="normal"\n                        variant="outlined"\n                        required\n                    />\n                )}\n            />\n            <Button\n                onClick={() => setOrder(order === "asc" ? "desc" : "asc")}\n                variant="contained"\n                size="small"\n            >\n                Toggle Order\n            </Button>\n        </>\n    );\n};\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "posts",\n            create: PostCreate,\n        },\n    ],\n});\nrender(<RefineMuiDemo />);\n')))}u.isMDXComponent=!0}}]);