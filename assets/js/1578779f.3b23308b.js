"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41898],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,h=f["".concat(s,".").concat(m)]||f[m]||l[m]||o;return r?t.createElement(h,a(a({ref:n},p),{},{components:r})):t.createElement(h,a({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17929:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(87462),i=r(67294),o=r(3905);const a={id:"inferencer",title:"Inferencer"},d=void 0,s={unversionedId:"api-reference/antd/components/inferencer",id:"api-reference/antd/components/inferencer",title:"Inferencer",description:"You can automatically generate views for your resources using @pankod/refine-inferencer. Inferencer exports AntdListInferencer, AntdShowInferencer, AntdCreateInferencer and AntdEditInferencer components.",source:"@site/docs/api-reference/antd/components/inferencer.md",sourceDirName:"api-reference/antd/components",slug:"/api-reference/antd/components/inferencer",permalink:"/docs/api-reference/antd/components/inferencer",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/inferencer.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1669356966,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{id:"inferencer",title:"Inferencer"},sidebar:"someSidebar",previous:{title:"<AuthPage>",permalink:"/docs/api-reference/antd/components/antd-auth-page"},next:{title:"Create",permalink:"/docs/api-reference/antd/components/basic-views/create"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Views",id:"views",level:2},{value:"<code>AntdListInferencer</code>",id:"antdlistinferencer",level:3},{value:"<code>AntdShowInferencer</code>",id:"antdshowinferencer",level:3},{value:"<code>AntdCreateInferencer</code>",id:"antdcreateinferencer",level:3},{value:"<code>AntdEditInferencer</code>",id:"antdeditinferencer",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},f=l("Tabs"),m=l("TabItem"),h={toc:p};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can automatically generate views for your resources using ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer"),". Inferencer exports ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdListInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdShowInferencer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdCreateInferencer")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AntdEditInferencer")," components."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Ant Design components can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd"),". You can directly use the components in ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," component or you can use them in your custom components by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop as the resource name."),(0,o.kt)(f,{defaultValue:"resources",values:[{label:(0,o.kt)(i.Fragment,null,"In",(0,o.kt)("code",{style:{margin:"0 0.7ch"}},"resources"),"prop"),value:"resources"},{label:"In Custom Components",value:"custom"}],mdxType:"Tabs"},(0,o.kt)(m,{value:"resources",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-start\nimport {\n    AntdListInferencer,\n    AntdShowInferencer,\n    AntdCreateInferencer,\n    AntdEditInferencer,\n} from "@pankod/refine-inferencer/antd";\n// highlight-end\n\nconst App = () => {\n    return (\n        <Refine\n            resources={[\n                {\n                    name: "samples",\n                    // highlight-start\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                    create: AntdCreateInferencer,\n                    edit: AntdEditInferencer,\n                    // highlight-end\n                },\n            ]}\n        />\n    );\n};\n'))),(0,o.kt)(m,{value:"custom",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// highlight-start\nimport {\n    AntdListInferencer,\n    AntdShowInferencer,\n    AntdCreateInferencer,\n    AntdEditInferencer,\n} from "@pankod/refine-inferencer/antd";\n// highlight-end\n\nconst SampleList = () => {\n    return (\n        // highlight-next-line\n        <AntdListInferencer resource="samples" />\n    );\n};\n\nconst SampleShow = () => {\n    return (\n        // highlight-next-line\n        <AntdShowInferencer resource="samples" />\n    );\n};\n\nconst SampleCreate = () => {\n    return (\n        // highlight-next-line\n        <AntdCreateInferencer resource="samples" />\n    );\n};\n\nconst SampleEdit = () => {\n    return (\n        // highlight-next-line\n        <AntdEditInferencer resource="samples" />\n    );\n};\n')))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package, please check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"Docs"))),(0,o.kt)("h2",{id:"views"},"Views"),(0,o.kt)("h3",{id:"antdlistinferencer"},(0,o.kt)("inlineCode",{parentName:"h3"},"AntdListInferencer")),(0,o.kt)("p",null,"Generates a sample list view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"List")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Table")," components with ",(0,o.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples"},'setInitialRoutes(["/"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport {\n    // highlight-start\n    AntdListInferencer,\n    // highlight-end\n    AntdShowInferencer,\n    AntdCreateInferencer,\n    AntdEditInferencer,\n} from "@pankod/refine-inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            Layout={Layout}\n            resources={[\n                {\n                    name: "samples",\n                    // highlight-start\n                    list: AntdListInferencer,\n                    // highlight-end\n                    show: AntdShowInferencer,\n                    create: AntdCreateInferencer,\n                    edit: AntdEditInferencer,\n                    canDelete: true,\n                },\n                {\n                    name: "categories",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                },\n                {\n                    name: "tags",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"antdshowinferencer"},(0,o.kt)("inlineCode",{parentName:"h3"},"AntdShowInferencer")),(0,o.kt)("p",null,"Generates a sample show view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Show")," and field components from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"useShow")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-core"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/show/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/show/123"},'setInitialRoutes(["/samples/show/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport {\n    AntdListInferencer,\n    // highlight-start\n    AntdShowInferencer,\n    // highlight-end\n    AntdCreateInferencer,\n    AntdEditInferencer,\n} from "@pankod/refine-inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            Layout={Layout}\n            resources={[\n                {\n                    name: "samples",\n                    list: AntdListInferencer,\n                    // highlight-start\n                    show: AntdShowInferencer,\n                    // highlight-end\n                    create: AntdCreateInferencer,\n                    edit: AntdEditInferencer,\n                    canDelete: true,\n                },\n                {\n                    name: "categories",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                },\n                {\n                    name: "tags",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"antdcreateinferencer"},(0,o.kt)("inlineCode",{parentName:"h3"},"AntdCreateInferencer")),(0,o.kt)("p",null,"Generates a sample create view for your resources according to the first record in list API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Create")," component and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/create",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/create"},'setInitialRoutes(["/samples/create"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport {\n    AntdListInferencer,\n    AntdShowInferencer,\n    // highlight-start\n    AntdCreateInferencer,\n    // highlight-end\n    AntdEditInferencer,\n} from "@pankod/refine-inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            Layout={Layout}\n            resources={[\n                {\n                    name: "samples",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                    // highlight-start\n                    create: AntdCreateInferencer,\n                    // highlight-end\n                    edit: AntdEditInferencer,\n                    canDelete: true,\n                },\n                {\n                    name: "categories",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                },\n                {\n                    name: "tags",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"antdeditinferencer"},(0,o.kt)("inlineCode",{parentName:"h3"},"AntdEditInferencer")),(0,o.kt)("p",null,"Generates a sample edit view for your resources according to the API response. It uses ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," component and ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-antd"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live hideCode previewHeight=600px url=http://localhost:3000/samples/edit/123",live:!0,hideCode:!0,previewHeight:"600px",url:"http://localhost:3000/samples/edit/123"},'setInitialRoutes(["/samples/edit/123"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { Layout } from "@pankod/refine-antd";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport {\n    AntdListInferencer,\n    AntdShowInferencer,\n    AntdCreateInferencer,\n    // highlight-start\n    AntdEditInferencer,\n    // highlight-end\n} from "@pankod/refine-inferencer/antd";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider(API_URL)}\n            Layout={Layout}\n            resources={[\n                {\n                    name: "samples",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                    create: AntdCreateInferencer,\n                    // highlight-start\n                    edit: AntdEditInferencer,\n                    // highlight-end\n                    canDelete: true,\n                },\n                {\n                    name: "categories",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                },\n                {\n                    name: "tags",\n                    list: AntdListInferencer,\n                    show: AntdShowInferencer,\n                },\n            ]}\n        />\n    );\n};\n\n// visible-block-end\n\nrender(<App />);\n')),(0,o.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,o.kt)("p",null,"Below you'll find a Live StackBlitz Example displaying a fully setup ",(0,o.kt)("inlineCode",{parentName:"p"},"Refine")," app with ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/antd")," components."),(0,o.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com/github/refinedev/refine/tree/master/examples/inferencer/antd?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"Refine Inferencer with Ant Design"}))}u.isMDXComponent=!0}}]);