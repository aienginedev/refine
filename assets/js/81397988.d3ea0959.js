"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=o,g=h["".concat(l,".").concat(c)]||h[c]||u[c]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}},i=void 0,s={unversionedId:"tutorial/getting-started/chakra-ui/generate-crud-pages",id:"tutorial/getting-started/chakra-ui/generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/docs/tutorial/1-getting-started/chakra-ui/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/chakra-ui",slug:"/tutorial/getting-started/chakra-ui/generate-crud-pages",permalink:"/docs/tutorial/getting-started/chakra-ui/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/chakra-ui/3-generate-crud-pages.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1679984532,formattedLastUpdatedAt:"Mar 28, 2023",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generating CRUD pages automatically with Inferencer",tutorial:{prev:"tutorial/getting-started/{preferredUI}/create-project",next:"tutorial/getting-started/store-your-repository"}}},l={},p=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=d("Checklist"),h=d("ChecklistItem"),c={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inferencer"},"Inferencer"),(0,o.kt)("p",null,"Inferencer is a powerful tool in the ",(0,o.kt)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with the required forms and tables for CRUD operations."),(0,o.kt)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,o.kt)("p",null,"There are several benefits to using Inferencer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Code generated by Inferencer is also easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to it according to your needs. This allows you to quickly iterate and get your project up and running faster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using Inferencer can also help you avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,o.kt)("p",null,"Overall, using Inferencer will greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, allowing you to focus on more complex tasks instead."),(0,o.kt)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,o.kt)("p",null,"You can Learn more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/inferencer"},"how Inferencer works")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/chakra-ui/components/inferencer/"},"how to use it with Material UI")," in our documents."),(0,o.kt)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer")," package provides the ",(0,o.kt)("inlineCode",{parentName:"p"},"<ChakraUIInferencer/>")," component, which can be imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/inferencer/chakra-ui"),". It used to generate CRUD pages based on your API response with Chakra UI components."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<ChakraUIInferencer/>")," component is used for passing appropriate values to the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," prop will be explained in detail in ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-resources/index"},"Unit 4"),". For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { ChakraProvider } from "@chakra-ui/react";\nimport {\n    ErrorComponent,\n    Layout,\n    notificationProvider,\n    refineTheme,\n} from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    notificationProvider={notificationProvider()}\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            }\n                        >\n                            <Route\n                                index\n                                element={\n                                    <NavigateToResource resource="blog_posts" />\n                                }\n                            />\n                            {/* highlight-start */}\n                            <Route path="blog-posts">\n                                <Route index element={<ChakraUIInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<ChakraUIInferencer />}\n                                />\n                            </Route>\n                            {/* highlight-end */}\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"At this point, ",(0,o.kt)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response."),(0,o.kt)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,o.kt)("p",null,"So far we have added complete CRUD pages by utilizing the Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,o.kt)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,o.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,o.kt)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"How ",(0,o.kt)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider")," will be explained in ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/index"},"Unit 3"),".")),(0,o.kt)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.'),(0,o.kt)("h3",{id:"list-page"},"List Page"),(0,o.kt)("p",null,"To preview the list page, go back to your browser and go to ",(0,o.kt)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000"),"."),(0,o.kt)("p",null,"You should see the list page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,o.kt)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine/>")," component, like ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { ChakraProvider } from "@chakra-ui/react";\nimport {\n    ErrorComponent,\n    Layout,\n    notificationProvider,\n    refineTheme,\n} from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    notificationProvider={notificationProvider()}\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    //highlight-start\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    //highlight-end\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            }\n                        >\n                            {/* highlight-start */}\n                            <Route path="blog-posts">\n                                <Route index element={<ChakraUIInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<ChakraUIInferencer />}\n                                />\n                            </Route>\n                            {/* highlight-end */}\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"create-page"},"Create Page"),(0,o.kt)("p",null,"To preview the create page, go back to your browser and go to ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' or click the "Create" button on the list page.'),(0,o.kt)("p",null,"You should see the create page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { ChakraProvider } from "@chakra-ui/react";\nimport {\n    ErrorComponent,\n    Layout,\n    notificationProvider,\n    refineTheme,\n} from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    notificationProvider={notificationProvider()}\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    //highlight-start\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    //highlight-end\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            }\n                        >\n                            {/* highlight-start */}\n                            <Route path="blog-posts">\n                                <Route index element={<ChakraUIInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<ChakraUIInferencer />}\n                                />\n                            </Route>\n                            {/* highlight-end */}\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"edit-page"},"Edit Page"),(0,o.kt)("p",null,"To preview the edit page, go back to your browser and go to ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' or click the "Edit" button on the record in the list page.'),(0,o.kt)("p",null,"You should see the edit page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { ChakraProvider } from "@chakra-ui/react";\nimport {\n    ErrorComponent,\n    Layout,\n    notificationProvider,\n    refineTheme,\n} from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    notificationProvider={notificationProvider()}\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            }\n                        >\n                            {/* highlight-start */}\n                            <Route path="blog-posts">\n                                <Route index element={<ChakraUIInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<ChakraUIInferencer />}\n                                />\n                            </Route>\n                            {/* highlight-end */}\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h3",{id:"show-page"},"Show Page"),(0,o.kt)("p",null,"To preview the show page, go back to your browser and go to ",(0,o.kt)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' or click the "Show" button on the record in the list page.'),(0,o.kt)("p",null,"You should see the show page for the ",(0,o.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { ChakraProvider } from "@chakra-ui/react";\nimport {\n    ErrorComponent,\n    Layout,\n    notificationProvider,\n    refineTheme,\n} from "@refinedev/chakra-ui";\nimport { Refine } from "@refinedev/core";\nimport routerBindings, {\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n//highlight-next-line\nimport { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";\n\nconst App = () => {\n    return (\n        <ChakraProvider theme={refineTheme}>\n            <BrowserRouter>\n                <Refine\n                    notificationProvider={notificationProvider()}\n                    routerProvider={routerBindings}\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    //highlight-start\n                    resources={[\n                        {\n                            name: "blog_posts",\n                            list: "/blog-posts",\n                            show: "/blog-posts/show/:id",\n                            create: "/blog-posts/create",\n                            edit: "/blog-posts/edit/:id",\n                        },\n                    ]}\n                    //highlight-end\n                    options={{\n                        syncWithLocation: true,\n                        warnWhenUnsavedChanges: true,\n                    }}\n                >\n                    <Routes>\n                        <Route\n                            element={\n                                <Layout>\n                                    <Outlet />\n                                </Layout>\n                            }\n                        >\n                            {/* highlight-start */}\n                            <Route path="blog-posts">\n                                <Route index element={<ChakraUIInferencer />} />\n                                <Route\n                                    path="show/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="edit/:id"\n                                    element={<ChakraUIInferencer />}\n                                />\n                                <Route\n                                    path="create"\n                                    element={<ChakraUIInferencer />}\n                                />\n                            </Route>\n                            {/* highlight-end */}\n                            <Route path="*" element={<ErrorComponent />} />\n                        </Route>\n                    </Routes>\n                    <UnsavedChangesNotifier />\n                </Refine>\n            </BrowserRouter>\n        </ChakraProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"You will learn how to create CRUD pages manually using the code generated by Inferencer as a reference in ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/adding-crud-pages/chakra-ui/index"},"Unit 5"),"."),(0,o.kt)(u,{mdxType:"Checklist"},(0,o.kt)(h,{id:"generated-chakra-crud-pages",mdxType:"ChecklistItem"},"I understood what Inferencer is, how it works and how it can make my work easier."),(0,o.kt)(h,{id:"generated-chakra-crud-pages-2",mdxType:"ChecklistItem"},(0,o.kt)("p",null,"I have inspected the auto-generated ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"edit"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," pages."))))}g.isMDXComponent=!0}}]);