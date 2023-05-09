"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,m=u["".concat(p,".").concat(c)]||u[c]||h[c]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={id:"add-show-page",title:"3. Adding Show Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-create-page"}},i=void 0,s={unversionedId:"tutorial/adding-crud-pages/mui/add-show-page",id:"tutorial/adding-crud-pages/mui/add-show-page",title:"3. Adding Show Page",description:"Creating the Show Page",source:"@site/docs/tutorial/4-adding-crud-pages/mui/add-show-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/add-show-page",permalink:"/docs/tutorial/adding-crud-pages/mui/add-show-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mui/add-show-page.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1683641442,formattedLastUpdatedAt:"May 9, 2023",frontMatter:{id:"add-show-page",title:"3. Adding Show Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-create-page"}}},p={},l=[{value:"Creating the Show Page",id:"creating-the-show-page",level:2},{value:"Understanding the Show Component",id:"understanding-the-show-component",level:2},{value:"Hooks and Components in Show Page",id:"hooks-and-components-in-show-page",level:3},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Show Page to the App",id:"adding-the-show-page-to-the-app",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},h=d("Checklist"),u=d("ChecklistItem"),c={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"creating-the-show-page"},"Creating the Show Page"),(0,r.kt)("p",null,"First, we need to create our file, named ",(0,r.kt)("inlineCode",{parentName:"p"},"show.tsx"),", under the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will then copy the show page code generated by Inferencer and paste it into the file; for this, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on any of the "Show" buttons in the "Actions" column of the table to open the edit page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'You can see the show page code generated by Inferencer. Copy it by clicking on the "Copy" button.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code into the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"show.tsx")," file."))),(0,r.kt)("p",null,"You can see an example show page generated by Inferencer below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)("h2",{id:"understanding-the-show-component"},"Understanding the Show Component"),(0,r.kt)("h3",{id:"hooks-and-components-in-show-page"},"Hooks and Components in Show Page"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Show/>")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," component that is used for presentation purposes like showing the title of the page, list button, etc."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/show/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Show/>")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useShow")," hook is used to get single record data by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," in the URL. It sends the parameters to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"getOne")," function and returns the result."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/show/useShow/"},(0,r.kt)("inlineCode",{parentName:"a"},"useShow")," documentation","\u2192")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All other components are ",(0,r.kt)("strong",{parentName:"p"},"Material UI")," components that are used to show the record data."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mui.com/"},(0,r.kt)("strong",{parentName:"a"},"Material UI")," documentation","\u2192"))))),(0,r.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,r.kt)("p",null,"On the show page, we have a single record, and it may have relationships with other resources."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog_posts")," resource has a relationship with the ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," resource. In this case, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine"),", which allows us to fetch single record data by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," parameters."),(0,r.kt)("p",null,"In the auto-generated show page code, Inferencer used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook to fetch the category data of the blog post record like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data: categoryData, isLoading: categoryIsLoading } = useOne({\n    resource: "categories",\n    id: record?.category?.id || "",\n});\n')),(0,r.kt)("p",null,"To ensure that the related data is fetched only after the blog post record has been successfully retrieved, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," object. By setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"enabled")," property to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," only if the record variable is truthy, we can control when the related data is fetched, just like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data: categoryData, isLoading: categoryIsLoading } = useOne({\n    resource: "categories",\n    id: record?.category?.id || "",\n    queryOptions: {\n        enabled: !!record,\n    },\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},(0,r.kt)("inlineCode",{parentName:"a"},"useOne")," documentation","\u2192"))),(0,r.kt)("h2",{id:"adding-the-show-page-to-the-app"},"Adding the Show Page to the App"),(0,r.kt)("p",null,"Now that we have created the show page, we can add it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the created ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostShow")," component.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"MuiInferencer")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostShow")," component."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostList } from "pages/blog-posts/list";\n//highlight-next-line\nimport { BlogPostShow } from "pages/blog-posts/show";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route index element={<BlogPostList />} />\n                                    {/* highlight-start */}\n                                    <Route\n                                        path="show/:id"\n                                        element={<BlogPostShow />}\n                                    />\n                                    {/* highlight-end */}\n                                    <Route\n                                        path="edit/:id"\n                                        element={<BlogPostEdit />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\nexport default App;\n')),(0,r.kt)("p",null,"Now, we can see the show page in the browser at ",(0,r.kt)("a",{href:"http://localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123")),(0,r.kt)("br",null),(0,r.kt)(h,{mdxType:"Checklist"},(0,r.kt)(u,{id:"add-show-page-mui",mdxType:"ChecklistItem"},"I have added the show page to the app."),(0,r.kt)(u,{id:"add-show-page-mui-2",mdxType:"ChecklistItem"},"I understood the show page components and hooks."),(0,r.kt)(u,{id:"add-show-page-mui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}m.isMDXComponent=!0}}]);