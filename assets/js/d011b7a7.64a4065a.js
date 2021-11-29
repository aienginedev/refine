"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[77893],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94622:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return c},default:function(){return k}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(73879),d=n(38302),l=["components"],p={id:"edit",title:"Edit"},s=void 0,m={unversionedId:"api-references/components/basic-views/edit",id:"api-references/components/basic-views/edit",isDocsHomePage:!1,title:"Edit",description:"`` provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button.",source:"@site/docs/api-references/components/basic-views/edit.md",sourceDirName:"api-references/components/basic-views",slug:"/api-references/components/basic-views/edit",permalink:"/docs/next/api-references/components/basic-views/edit",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/components/basic-views/edit.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"edit",title:"Edit"},sidebar:"someSidebar",previous:{title:"Show",permalink:"/docs/next/api-references/components/basic-views/show"},next:{title:"<Authenticated>",permalink:"/docs/next/api-references/components/auth/authenticated"}},c=[{value:"Properties",id:"properties",children:[{value:"<code>canDelete</code> and <code>deleteButtonProps</code>",id:"candelete-and-deletebuttonprops",children:[],level:3},{value:"<code>saveButtonProps</code>",id:"savebuttonprops",children:[],level:3},{value:"<code>title</code>",id:"title",children:[],level:3},{value:"<code>actionButtons</code>",id:"actionbuttons",children:[],level:3},{value:"<code>pageHeaderProps</code>",id:"pageheaderprops",children:[],level:3},{value:"<code>recordItemId</code>",id:"recorditemid",children:[],level:3},{value:"<code>mutationMode</code>",id:"mutationmode",children:[],level:3},{value:"<code>resource</code>",id:"resource",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties-1",children:[],level:3}],level:2}],u={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," provides us a layout for displaying the page. It does not contain any logic but adds extra functionalities like a refresh button."),(0,o.kt)("p",null,"We will show what ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," does using properties with examples."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"candelete-and-deletebuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"canDelete")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"deleteButtonProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"canDelete")," allows us to add the delete button inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component. If the resource has the ",(0,o.kt)("inlineCode",{parentName:"p"},"canDelete")," property,refine adds the delete button by default. If you want to customize this button you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteButtonProps")," property like the code below."),(0,o.kt)("p",null,"When clicked on, the delete button executes the ",(0,o.kt)("inlineCode",{parentName:"p"},"useDelete")," method provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataProvider"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/buttons/delete-button"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<DeleteButton>")," documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, usePermissions } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    const { data } = usePermissions<string>();\n\n    return (\n        <Edit\n            canDelete={data === "admin"}\n            deleteButtonProps={{ size: "small" }}\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/auth/usePermissions"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"usePermission")," documentation for detailed usage. ","\u2192")),(0,o.kt)("h3",{id:"savebuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"saveButtonProps")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component has a save button by default. If you want to customize this button you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," property like the code below."),(0,o.kt)("p",null,"Clicking on the save button will submit your form."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/api-references/components/buttons/save-button"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"<SaveButton>")," documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return <Edit saveButtonProps={{ size: "small" }}>...</Edit>;\n};\n')),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("p",null,"It allows adding titles inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>"),' component. if you don\'t pass title props it uses the "Edit" prefix and singular resource name by default. For example, for the "posts" resource, it will be "Edit post".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return <Edit title="Custom Title">...</Edit>;\n};\n')),(0,o.kt)("h3",{id:"actionbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"actionButtons")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/card"},(0,o.kt)("inlineCode",{parentName:"a"},"<Card>"))," component. The ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Card>")," component shows ",(0,o.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," based on your resource definition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property you pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),". If you want to use other things instead of these buttons, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"actionButton")," property like the code below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, Button } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            actionButtons={\n                <>\n                    <Button type="primary">Custom Button 1</Button>\n                    <Button size="small">Custom Button 2</Button>\n                </>\n            }\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:d.Z,alt:"actionButton Usage"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"pageheaderprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"pageHeaderProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," uses the Ant Design ",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/page-header/#API"},(0,o.kt)("inlineCode",{parentName:"a"},"<PageHeader>"))," components, which means that you can customize the properties of ",(0,o.kt)("inlineCode",{parentName:"p"},"pageHeaderProps"),".\nBy default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"extra")," property of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PageHeader>")," component shows ",(0,o.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"<ListButton>")," based on your resource definition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," property you pass to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return (\n        <Edit\n            pageHeaderProps={{\n                onBack: () => console.log("Hello, refine"),\n                subTitle: "Subtitle",\n            }}\n        >\n            ...\n        </Edit>\n    );\n};\n')),(0,o.kt)("br",null),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"pageHeaderProps Usage"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"recorditemid"},(0,o.kt)("inlineCode",{parentName:"h3"},"recordItemId")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," information from the route by default. ",(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," is used when it cannot read from the URL(when used on a custom page, modal or drawer)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit, Modal, useModalForm } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    const { modalProps, editId } = useModalForm({\n        action: "edit",\n    });\n\n    return (\n        <>\n            ...\n            <Modal {...modalProps}>\n                <Edit recordItemId={editId}>...</Edit>\n            </Modal>\n        </>\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component needs the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," information for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<RefreshButton>")," to work properly."))),(0,o.kt)("h3",{id:"mutationmode"},(0,o.kt)("inlineCode",{parentName:"h3"},"mutationMode")),(0,o.kt)("p",null,"Determines which mode mutation will have while executing ",(0,o.kt)("inlineCode",{parentName:"p"},"<DeleteButton>")," ."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/guides-and-concepts/mutation-mode"},"Refer to the mutation mode docs for further information. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Edit } from "@pankod/refine";\n\nexport const EditPage: React.FC = () => {\n    return <Edit mutationMode="undoable">...</Edit>;\n};\n')),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component in a custom page, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/next/guides-and-concepts/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Refine, Edit } from "@pankod/refine";\nimport routerProvider from "@pankod/refine-react-router";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// highlight-start\nconst CustomPage = () => {\n    return <Edit resource="posts">...</Edit>;\n};\n// highlight-end\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        exact: true,\n                        component: CustomPage,\n                        path: "/custom",\n                    },\n                ]\n                // highlight-end\n            }}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev/")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component needs the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," information for work properly so if you use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Edit>")," component in custom pages, you should pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"recordItemId")," property."))),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties-1"},"Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"canDelete"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds a delete button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},"If the resource has ",(0,o.kt)("inlineCode",{parentName:"td"},"canDelete")," prop it is ",(0,o.kt)("inlineCode",{parentName:"td"},"true")," else ",(0,o.kt)("inlineCode",{parentName:"td"},"false")," ",(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"deleteButtonProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds properties for delete button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#delete-button-props"},(0,o.kt)("inlineCode",{parentName:"a"},"DeleteButtonProps"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<DeleteButton>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds properties for create button"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading: boolean; }")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<SaveButton>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"title"),(0,o.kt)("td",{parentName:"tr",align:null},"Adds the title"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"Edit"')," prefix and singular of ",(0,o.kt)("inlineCode",{parentName:"td"},"resource.name"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"actionButtons"),(0,o.kt)("td",{parentName:"tr",align:null},"Passes properties for ",(0,o.kt)("inlineCode",{parentName:"td"},"<PageHeader>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"React.ReactNode")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<SaveButton>")," and depending on your resource configuration (",(0,o.kt)("inlineCode",{parentName:"td"},"canDelete")," prop)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pageHeaderProps"),(0,o.kt)("td",{parentName:"tr",align:null},"Passes properties for ",(0,o.kt)("inlineCode",{parentName:"td"},"<PageHeader>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://ant.design/components/page-header/#API"},"PageHeaderProps")),(0,o.kt)("td",{parentName:"tr",align:null},"{ ghost: false, ",(0,o.kt)("a",{parentName:"td",href:"#title"},"title"),", extra: ",(0,o.kt)("inlineCode",{parentName:"td"},"<ListButton>")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")," }")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recordItemId"),(0,o.kt)("td",{parentName:"tr",align:null},"The record id for ",(0,o.kt)("inlineCode",{parentName:"td"},"<RefreshButton>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/guides-and-concepts/mutation-mode"},"Determines when mutations are executed")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"resource"),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},"Resource name that it reads from the URL.")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"*"),": These properties have default values in ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on the ",(0,o.kt)("strong",{parentName:"p"},"<",(0,o.kt)("a",{parentName:"strong",href:"/docs/next/api-references/components/refine-config"},"Refine"),">")," component.")))}k.isMDXComponent=!0},38302:function(e,t,n){t.Z=n.p+"assets/images/actionButtonsUsage-bcf48b15fe78fd35447fc54bd3a2df99.png"},73879:function(e,t,n){t.Z=n.p+"assets/images/pageHeaderPropsUsage-24fb23f675f2620a2e6878a39927243b.png"}}]);