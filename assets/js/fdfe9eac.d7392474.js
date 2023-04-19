"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,d(d({ref:t},p),{},{components:n})):r.createElement(f,d({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var s=2;s<o;s++)d[s]=n[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},d=void 0,i={unversionedId:"tutorial/adding-crud-pages/headless/add-delete-feature",id:"tutorial/adding-crud-pages/headless/add-delete-feature",title:"5. Adding Delete Feature",description:"useDelete is a refine hook that is used to delete a record. It returns mutation functions that can be used to delete a record, and when the mutation function is called, the parameters of the function are passed to the delete method of the data provider.",source:"@site/docs/tutorial/4-adding-crud-pages/headless/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/add-delete-feature",permalink:"/docs/tutorial/adding-crud-pages/headless/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/add-delete-feature.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681905484,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},l={},s=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("Checklist"),c=p("ChecklistItem"),m={toc:s};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useDelete")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," hook that is used to delete a record. It returns mutation functions that can be used to delete a record, and when the mutation function is called, the parameters of the function are passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," method of the data provider."),(0,a.kt)("p",null,"We will now add a delete button to the list page by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useDelete")," hook; for this, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOne } from "@refinedev/core";\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Call the ",(0,a.kt)("inlineCode",{parentName:"p"},"useDelete")," hook in the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const BlogPostList: React.FC = () => {\n    const { mutate: deleteBlogPost } = useDelete();\n};\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"You can check the parameters of the ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteBlogPost")," mutation function in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/#properties"},(0,a.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation"),"."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"<button/>")," component to the ",(0,a.kt)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n            id: "actions",\n            accessorKey: "id",\n            header: "Actions",\n            cell: function render({ getValue }) {\n                return (\n                    <div\n                        style={{\n                            display: "flex",\n                            flexDirection: "row",\n                            flexWrap: "wrap",\n                            gap: "4px",\n                        }}\n                    >\n                        <button\n                            onClick={() => {\n                                show("blog_posts", getValue() as string);\n                            }}\n                        >\n                            Show\n                        </button>\n                        <button\n                            onClick={() => {\n                                edit("blog_posts", getValue() as string);\n                            }}\n                        >\n                            Edit\n                        </button>\n                        //highlight-start\n                        <button\n                            onClick={() => {\n                                deleteBlogPost({\n                                    resource: "blog_posts",\n                                    id: getValue() as string,\n                                });\n                            }}\n                        >\n                            Delete\n                        </button>\n                        //highlight-end\n                    </div>\n                );\n            },\n        },\n')))),(0,a.kt)("p",null,"You can now delete a record from the list page by clicking on the delete button of any blog post."),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"useDelete")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine")," to delete a record."),(0,a.kt)("p",{parentName:"admonition"},"For more information, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,a.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation","\u2192"))),(0,a.kt)("br",null),(0,a.kt)(u,{mdxType:"Checklist"},(0,a.kt)(c,{id:"add-delete-feature-headless",mdxType:"ChecklistItem"},"I have added the delete feature to the list page."),(0,a.kt)(c,{id:"add-delete-feature-headless-2",mdxType:"ChecklistItem"},"I have enabled the delete feature on the show page and edit page.")))}f.isMDXComponent=!0}}]);