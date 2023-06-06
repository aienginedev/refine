"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/mui/add-create-page",id:"tutorial/adding-crud-pages/mui/add-create-page",title:"4. Adding Create Page",description:"Creating Create Page",source:"@site/docs/tutorial/4-adding-crud-pages/mui/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/mui",slug:"/tutorial/adding-crud-pages/mui/add-create-page",permalink:"/docs/tutorial/adding-crud-pages/mui/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/mui/add-create-page.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1686044782,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},s={},l=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Hooks and Components in Create Page",id:"hooks-and-components-in-create-page",level:3},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("Checklist"),c=d("ChecklistItem"),u={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,o.kt)("p",null,"First, we need to create our file, named ",(0,o.kt)("inlineCode",{parentName:"p"},"create.tsx"),", under the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts")," folder. We will then copy the create page code generated by Inferencer and paste it into the file; for this, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("a",{href:"http://localhost:3000/blog-posts",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts")," in your browser.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the "Create" button in the top right corner of the table to open the create page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Copy it by clicking on the "Copy" button.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste the code into the newly created ",(0,o.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,o.kt)("p",null,"You can see an example edit page generated by Inferencer below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport { MuiInferencer } from "@refinedev/inferencer/mui";\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route index element={<MuiInferencer />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<MuiInferencer />}\n                                    />\n                                    <Route\n                                        path="create"\n                                        element={<MuiInferencer />}\n                                    />\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nrender(<App />);\n')),(0,o.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,o.kt)("h3",{id:"hooks-and-components-in-create-page"},"Hooks and Components in Create Page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<Create/>")," is a ",(0,o.kt)("strong",{parentName:"p"},"refine")," component that is used for presentation purposes like showing the title of the page, save button etc."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/components/basic-views/create"},(0,o.kt)("inlineCode",{parentName:"a"},"<Create/>")," documentation","\u2192")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook is imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/mantine")," package and has been developed by using the ",(0,o.kt)("strong",{parentName:"p"},"Mantine")," ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook and ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," ",(0,o.kt)("inlineCode",{parentName:"p"},"useForm")," hook. When used in the create page, it sends the form data to ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted. It also offers ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," for the form's submit button."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/api-reference/mantine/hooks/form/useForm/"},(0,o.kt)("inlineCode",{parentName:"a"},"useForm"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://mantine.dev/form/use-form/"},(0,o.kt)("strong",{parentName:"a"},"Mantine")," documentations","\u2192")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"All other components provided by ",(0,o.kt)("strong",{parentName:"p"},"Material UI")," are used to display the form fields."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/"},(0,o.kt)("strong",{parentName:"a"},"Material UI")," documentation","\u2192"))))),(0,o.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,o.kt)("p",null,"In the create page, we may need to select a record from another resource."),(0,o.kt)("p",null,"For example, if we need to select a category from the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the blog post to the category, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook provided by ",(0,o.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the params to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"getList")," method and then returns the necessary props to be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Autocomplete/>")," component."),(0,o.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,o.kt)("inlineCode",{parentName:"p"},"useAutocomplete")," hook to select a category from the ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { selectProps: categorySelectProps } = useAutocomplete({\n    resource: "categories",\n});\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For more information, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/mui/hooks/useAutocomplete/"},(0,o.kt)("inlineCode",{parentName:"a"},"useAutocomplete"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/material-ui/react-autocomplete/"},(0,o.kt)("strong",{parentName:"a"},"Material UI")," ",(0,o.kt)("inlineCode",{parentName:"a"},"<Autocomplete/>")," documentations","\u2192"))),(0,o.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,o.kt)("p",null,"Now that we have created the create page, we can add it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"App.tsx")," file:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Import the created ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"MuiInferencer")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlogPostCreate")," component."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport {\n    ErrorComponent,\n    ThemedLayoutV2,\n    RefineThemes,\n    notificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";\n\nimport { BlogPostEdit } from "pages/blog-posts/edit";\nimport { BlogPostList } from "pages/blog-posts/list";\nimport { BlogPostShow } from "pages/blog-posts/show";\n//highlight-next-line\nimport { BlogPostCreate } from "pages/blog-posts/create";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider>\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                        resources={[\n                            {\n                                name: "blog_posts",\n                                list: "/blog-posts",\n                                show: "/blog-posts/show/:id",\n                                // highlight-next-line\n                                create: "/blog-posts/create",\n                                edit: "/blog-posts/edit/:id",\n                            },\n                        ]}\n                        options={{\n                            syncWithLocation: true,\n                            warnWhenUnsavedChanges: true,\n                        }}\n                    >\n                        <Routes>\n                            <Route\n                                element={\n                                    <ThemedLayoutV2>\n                                        <Outlet />\n                                    </ThemedLayoutV2>\n                                }\n                            >\n                                <Route\n                                    index\n                                    element={\n                                        <NavigateToResource resource="blog_posts" />\n                                    }\n                                />\n\n                                <Route path="blog-posts">\n                                    <Route index element={<BlogPostList />} />\n                                    <Route\n                                        path="show/:id"\n                                        element={<BlogPostShow />}\n                                    />\n                                    <Route\n                                        path="edit/:id"\n                                        element={<BlogPostEdit />}\n                                    />\n                                    {/* highlight-start */}\n                                    <Route\n                                        path="create"\n                                        element={<BlogPostCreate />}\n                                    />\n                                    {/* highlight-end */}\n                                </Route>\n\n                                <Route path="*" element={<ErrorComponent />} />\n                            </Route>\n                        </Routes>\n                        <UnsavedChangesNotifier />\n                    </Refine>\n                </BrowserRouter>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\nexport default App;\n')),(0,o.kt)("p",null,"Now, we can see the create page in the browser at ",(0,o.kt)("a",{href:"http://localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create")),(0,o.kt)("br",null),(0,o.kt)(m,{mdxType:"Checklist"},(0,o.kt)(c,{id:"add-create-page-mui",mdxType:"ChecklistItem"},"I have added the create page to the app."),(0,o.kt)(c,{id:"add-create-page-mui-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,o.kt)(c,{id:"add-create-page-mui-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}h.isMDXComponent=!0}}]);