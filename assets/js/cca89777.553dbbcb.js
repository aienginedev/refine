"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37666],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62193:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={id:"accessControl-provider",title:"Access Control Provider",sidebar_label:"Access Control Provider"},c=void 0,l={unversionedId:"api-references/providers/accessControl-provider",id:"version-2.xx.xx/api-references/providers/accessControl-provider",isDocsHomePage:!1,title:"Access Control Provider",description:"Access control is a broad topic where there are lots of advanced solutions that provide different set of features. refine is deliberately agnostic for its own API to be able to integrate different methods (RBAC, ABAC, ACL, etc.) and different libraries (Casbin, CASL, Cerbos, AccessControl.js). can method would be the entry point for those solutions.",source:"@site/versioned_docs/version-2.xx.xx/api-references/providers/accessControl-provider.md",sourceDirName:"api-references/providers",slug:"/api-references/providers/accessControl-provider",permalink:"/docs/api-references/providers/accessControl-provider",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/providers/accessControl-provider.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1637934058,formattedLastUpdatedAt:"11/26/2021",frontMatter:{id:"accessControl-provider",title:"Access Control Provider",sidebar_label:"Access Control Provider"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Data Provider",permalink:"/docs/api-references/providers/data-provider"},next:{title:"i18n Provider",permalink:"/docs/api-references/providers/i18n-provider"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Hooks and Components",id:"hooks-and-components",children:[{value:"<code>useCan</code>",id:"usecan",children:[],level:3},{value:"<code>&lt;CanAccess /&gt;</code>",id:"canaccess-",children:[],level:3}],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"List of Default Access Control Points",id:"list-of-default-access-control-points",children:[{value:"Routes",id:"routes",children:[],level:3},{value:"Sider",id:"sider",children:[],level:3},{value:"Buttons",id:"buttons",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Access control is a broad topic where there are lots of advanced solutions that provide different set of features. ",(0,o.kt)("strong",{parentName:"p"},"refine")," is deliberately agnostic for its own API to be able to integrate different methods (RBAC, ABAC, ACL, etc.) and different libraries (",(0,o.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,o.kt)("a",{parentName:"p",href:"https://casl.js.org/v5/en/"},"CASL"),", ",(0,o.kt)("a",{parentName:"p",href:"https://cerbos.dev/"},"Cerbos"),", ",(0,o.kt)("a",{parentName:"p",href:"https://onury.io/accesscontrol/"},"AccessControl.js"),"). ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method would be the entry point for those solutions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," provides an agnostic API via the ",(0,o.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to manage access control throughout your app."),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," must implement only one async method named ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," to be used to check if the desired access will be granted."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"can")," must have the interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type CanParams = {\n    resource: string;\n    action: string;\n    params?: any;\n};\n\ntype CanReturnType = {\n    can: boolean;\n    reason?: string;\n}\n\nconst accessControlProvider = {\n    can: ({ resource, action, params }: CanParams) => Promise<CanReturnType>;\n}\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"A basic example looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n    <Refine\n        // other providers and props\n        accessControlProvider={{\n            can: async ({ resource, action, params }) => {\n                if (resource === "posts" && action === "edit") {\n                    return Promise.resolve({\n                        can: false,\n                        reason: "Unauthorized",\n                    });\n                }\n\n                return Promise.resolve({ can: true });\n            },\n        }}\n    />;\n};\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"reason")," along with ",(0,o.kt)("inlineCode",{parentName:"p"},"can"),". It will be accessible using ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan"),". It will be shown at the tooltip of the buttons from ",(0,o.kt)("strong",{parentName:"p"},"refine")," when they are disabled."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can find access control examples made with ",(0,o.kt)("strong",{parentName:"p"},"refine")),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Casbin")," ","\u2192"," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/accessControl/casbin"},"Source Code")," - ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/access-control-casbin-react-l1ne3"},"Demo")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cerbos")," ","\u2192"," ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pankod/refine/tree/master/examples/accessControl/cerbos"},"Source Code")," - ",(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/access-control-cerbos-react-5mfkq"},"Demo"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," checks for access control in its related components and pages. ",(0,o.kt)("a",{parentName:"p",href:"#list-of-default-access-control-points"},"Refer here to see all the places ",(0,o.kt)("strong",{parentName:"a"},"refine")," checks for access control.")),(0,o.kt)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," provides a hook and a component to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method from the ",(0,o.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),"."),(0,o.kt)("h3",{id:"usecan"},(0,o.kt)("inlineCode",{parentName:"h3"},"useCan")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," as the query function for ",(0,o.kt)("strong",{parentName:"p"},"react-query"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery"),". It takes the parameters that ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," takes. It can also be configured with ",(0,o.kt)("inlineCode",{parentName:"p"},"queryOptions")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery"),". Returns the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" },\n});\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const useCan: ({\n    action,\n    resource,\n    params,\n    queryOptions,\n}: CanParams* & {\n    queryOptions?: UseQueryOptions<CanReturnType>;\n}) => UseQueryResult<CanReturnType*>\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"*"),": Too see ","\u2192"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/interfaceReferences#canparams"},(0,o.kt)("inlineCode",{parentName:"a"},"CanParams")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/interfaceReferences#canreturntype"},(0,o.kt)("inlineCode",{parentName:"a"},"CanReturnType")))),(0,o.kt)("h3",{id:"canaccess-"},(0,o.kt)("inlineCode",{parentName:"h3"},"<CanAccess />")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," is a wrapper component that uses ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," to check for access control. It takes the parameters that ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method takes and also a ",(0,o.kt)("inlineCode",{parentName:"p"},"fallback"),". It renders its children if the access control returns true and if access control returns false renders ",(0,o.kt)("inlineCode",{parentName:"p"},"fallback")," if provided."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<CanAccess\n    resource="posts"\n    action="edit"\n    params={{ id: 1 }}\n    fallback={<CustomFallback />}\n>\n    <YourComponent />\n</CanAccess>\n')),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"As the number of points that checks for access control in your app increases the performance of your app may take a hit especially if its access control involves remote endpoints. Caching the access control checks helps a great deal. Since ",(0,o.kt)("strong",{parentName:"p"},"refine")," uses react-query it can be easily done configuring ",(0,o.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,o.kt)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,o.kt)("inlineCode",{parentName:"a"},"cacheTime"))," properties."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n);\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," uses 5 minutes ",(0,o.kt)("inlineCode",{parentName:"p"},"cacheTime")," and 0 for ",(0,o.kt)("inlineCode",{parentName:"p"},"staleTime")," by default for its own access control points."),(0,o.kt)("h2",{id:"list-of-default-access-control-points"},"List of Default Access Control Points"),(0,o.kt)("h3",{id:"routes"},"Routes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-nextjs-router"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-nextjs-router")),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-react-router"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-router")),", and ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-react-location"},(0,o.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-location"))," packages integrate access control for CRUD pages at ",(0,o.kt)("inlineCode",{parentName:"p"},"[resource]/[action]")," and root routes."),(0,o.kt)("p",null,"They will check access control with parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"dashboard (",(0,o.kt)("inlineCode",{parentName:"li"},"/"),"): ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "dashboard", action: "list" }')),(0,o.kt)("li",{parentName:"ul"},"list (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/posts"),"): ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "list" }')),(0,o.kt)("li",{parentName:"ul"},"create (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/posts/create"),"): ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create" }')),(0,o.kt)("li",{parentName:"ul"},"clone (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/posts/clone/1"),"): ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { id :1 } }')),(0,o.kt)("li",{parentName:"ul"},"edit (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/posts/edit/1"),"): ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "edit", params: { id :1 } }')),(0,o.kt)("li",{parentName:"ul"},"show (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"/posts/show/1"),"): ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "show", params: { id :1 } }'))),(0,o.kt)("p",null,"In case access control returns ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," they will show ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-references/components/refine-config#catchall"},(0,o.kt)("inlineCode",{parentName:"a"},"cathcAll"))," if provided or a standard error page otherwise."),(0,o.kt)("h3",{id:"sider"},"Sider"),(0,o.kt)("p",null,"Sider is also integrated so that unaccessible resources won't appear in the sider menu."),(0,o.kt)("p",null,"Menu items will check access control with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ resource, action: "list" }')),(0,o.kt)("p",null,"For example if your app has resource ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," it will be checked with ",(0,o.kt)("inlineCode",{parentName:"p"},'{ resource: "posts", action: "list" }')),(0,o.kt)("h3",{id:"buttons"},"Buttons"),(0,o.kt)("p",null,"These buttons will check for access control.\nLet's say these buttons are rendered where ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," where applicable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-references/components/buttons/list-button"},(0,o.kt)("strong",{parentName:"a"},"List")),": ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "list" }')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-references/components/buttons/create-button"},(0,o.kt)("strong",{parentName:"a"},"Create")),": ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "create" }')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-references/components/buttons/clone-button"},(0,o.kt)("strong",{parentName:"a"},"Clone")),": ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "create", params: { id: 1 } }')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-references/components/buttons/edit-button"},(0,o.kt)("strong",{parentName:"a"},"Edit")),": ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "edit", params: { id: 1 } }')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-references/components/buttons/delete-button"},(0,o.kt)("strong",{parentName:"a"},"Delete")),": ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "delete", params: { id: 1 } }')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-references/components/buttons/show-button"},(0,o.kt)("strong",{parentName:"a"},"Show")),": ",(0,o.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "show", params: { id: 1 } }'))),(0,o.kt)("p",null,"These buttons will be disabled if access control returns ",(0,o.kt)("inlineCode",{parentName:"p"},"{ can: false }")),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/access-control-casbin-react-l1ne3?autoresize=1&fontsize=14&module=%2Fsrc%2FApp.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"access-control-casbin-react",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}m.isMDXComponent=!0}}]);