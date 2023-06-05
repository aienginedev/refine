"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90602,48883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return r?a.createElement(k,i(i({ref:t},l),{},{components:r})):a.createElement(k,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"api-reference/core/hooks/data/useOne/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useOne/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useOne/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useOne",slug:"/api-reference/core/hooks/data/useOne/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useOne/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useOne/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685956856,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{}},p={},d=[],l={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px",live:!0,url:"http://localhost:3000/products",previewHeight:"300px"},'setInitialRoutes(["/products"]);\n// visible-block-start\nimport { useState } from "react";\nimport { useOne, HttpError } from "@pankod/refine-core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    const [id, setId] = useState(1);\n\n    const { data, isLoading, isError } = useOne<IProduct, HttpError>({\n        resource: "products",\n        id,\n    });\n\n    const product = data?.data;\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            <h3>Product Details</h3>\n            <p>id: {product?.id}</p>\n            <p>name: {product?.name}</p>\n            <p>material: {product?.material}</p>\n\n            <br />\n\n            <button\n                onClick={() => setId((prev) => prev - 1)}\n                disabled={id === 1}\n            >\n                {"<"} Prev Product\n            </button>\n            <button onClick={() => setId((prev) => prev + 1)}>\n                Next Product {">"}\n            </button>\n        </div>\n    );\n};\n\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\nrender(<RefineHeadlessDemo />);\n')))}c.isMDXComponent=!0},24718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905)),o=r(62979);const i={title:"useOne",siderbar_label:"useOne",source:"packages/core/src/hooks/data/useOne.ts"},s=void 0,p={unversionedId:"api-reference/core/hooks/data/useOne/index",id:"version-3.xx.xx/api-reference/core/hooks/data/useOne/index",title:"useOne",description:"useOne is an extended version of TanStack Query's useQuery. It supports all the features of useQuery and adds some extra features.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useOne/index.md",sourceDirName:"api-reference/core/hooks/data/useOne",slug:"/api-reference/core/hooks/data/useOne/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useOne/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useOne/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685956856,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{title:"useOne",siderbar_label:"useOne",source:"packages/core/src/hooks/data/useOne.ts"},sidebar:"someSidebar",previous:{title:"useMany",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useMany/"},next:{title:"useUpdate",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useUpdate/"}},d={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>id</code> <PropTag required />",id:"id-",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>liveMode</code>",id:"livemode",level:3},{value:"<code>onLiveEvent</code>",id:"onliveevent",level:3},{value:"<code>liveParams</code>",id:"liveparams",level:3},{value:"Return Values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values-1",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=c("PropTag"),m=c("PropsTable"),k={toc:l};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," is an extended version of TanStack Query's ",(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")),". It supports all the features of ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," and adds some extra features."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It uses the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOne")," method as the ",(0,n.kt)("strong",{parentName:"p"},"query function")," from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"It uses a query key to cache the data. The ",(0,n.kt)("strong",{parentName:"p"},"query key")," is generated from the provided properties. You can see the query key by using the TanStack Query devtools."))),(0,n.kt)("p",null,"It is useful when you want to fetch a single record from the API. It will return the data and some functions to control the query."),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," hook expects a ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," property. It will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,n.kt)("p",null,"When these properties are changed, the ",(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," hook will trigger a new request."),(0,n.kt)(o.default,{mdxType:"BasicUsageLivePreview"}),(0,n.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," hook is mounted, it will call the ",(0,n.kt)("inlineCode",{parentName:"p"},"subscribe")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,n.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," etc. It is useful when you want to subscribe to live updates."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"liveProvider")," documentation for more information ","\u2192")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"resource-"},(0,n.kt)("inlineCode",{parentName:"h3"},"resource")," ",(0,n.kt)(u,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"It will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as an API endpoint path. It all depends on how to handle the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOne")," method. See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider")," section for an example of how resources are handled."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useOne({\n    resource: "categories",\n});\n')),(0,n.kt)("h3",{id:"id-"},(0,n.kt)("inlineCode",{parentName:"h3"},"id")," ",(0,n.kt)(u,{required:!0,mdxType:"PropTag"})),(0,n.kt)("p",null,"It will be passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which record to fetch."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useOne({\n    id: 123,\n});\n")),(0,n.kt)("h3",{id:"dataprovidername"},(0,n.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,n.kt)("p",null,"If there is more than one ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useOne({\n    dataProviderName: "second-data-provider",\n});\n')),(0,n.kt)("h3",{id:"queryoptions"},(0,n.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useOne({\n    queryOptions: {\n        retry: 3,\n        enabled: false,\n    },\n});\n")),(0,n.kt)("h3",{id:"metadata"},(0,n.kt)("inlineCode",{parentName:"h3"},"metaData")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#metadata"},(0,n.kt)("inlineCode",{parentName:"a"},"metaData"))," is used following two purposes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,n.kt)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,n.kt)("a",{parentName:"li",href:"/docs/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,n.kt)("p",null,"In the following example, we pass the ",(0,n.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,n.kt)("inlineCode",{parentName:"p"},"metaData")," object to the ",(0,n.kt)("inlineCode",{parentName:"p"},"create")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useOne({\n    // highlight-start\n    metaData: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    //...\n    getOne: async ({\n        resource,\n        id,\n        // highlight-next-line\n        metaData,\n    }) => {\n        // highlight-next-line\n        const headers = metaData?.headers ?? {};\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        //...\n        //...\n\n        // highlight-next-line\n        const { data } = await httpClient.get(`${url}`, { headers });\n\n        return {\n            data,\n        };\n    },\n    //...\n};\n')),(0,n.kt)("h3",{id:"successnotification"},(0,n.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"After data is fetched successfully, ",(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," can call ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useOne({\n    successNotification: (data, values, resource) => {\n        return {\n            message: `${data.title} Successfully fetched.`,\n            description: "Success with no errors",\n            type: "success",\n        };\n    },\n});\n')),(0,n.kt)("h3",{id:"errornotification"},(0,n.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"After data fetching is failed, ",(0,n.kt)("inlineCode",{parentName:"p"},"useOne")," will call the ",(0,n.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,n.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useOne({\n    errorNotification: (data, values, resource) => {\n        return {\n            message: `Something went wrong when getting ${data.id}`,\n            description: "Error",\n            type: "error",\n        };\n    },\n});\n')),(0,n.kt)("h3",{id:"livemode"},(0,n.kt)("inlineCode",{parentName:"h3"},"liveMode")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,'Determines whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.\nFor more information about live mode, please check the ',(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#livemode"},"Live / Realtime")," page."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'useOne({\n    liveMode: "auto",\n});\n')),(0,n.kt)("h3",{id:"onliveevent"},(0,n.kt)("inlineCode",{parentName:"h3"},"onLiveEvent")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"The callback function is executed when new events from a subscription have arrived."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"useOne({\n    onLiveEvent: (event) => {\n        console.log(event);\n    },\n});\n")),(0,n.kt)("h3",{id:"liveparams"},(0,n.kt)("inlineCode",{parentName:"h3"},"liveParams")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,n.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,n.kt)("p",null,"Params to pass to liveProvider's ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#subscribe"},"subscribe")," method."),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("p",null,"Returns an object with TanStack Query's ",(0,n.kt)("inlineCode",{parentName:"p"},"useQuery")," return values."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,n.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"properties-1"},"Properties"),(0,n.kt)(m,{module:"@pankod/refine-core/useOne","successNotification-default":"`false`","errorNotification-default":'"Error (status code: `statusCode`)"',mdxType:"PropsTable"}),(0,n.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Desription"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TData"),(0,n.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"TError"),(0,n.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,n.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,n.kt)("h3",{id:"return-values-1"},"Return values"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's ",(0,n.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,n.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData; }>")))))))}h.isMDXComponent=!0}}]);