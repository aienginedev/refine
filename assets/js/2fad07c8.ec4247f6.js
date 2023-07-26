"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[96268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=o,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},68388:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={id:"mutation-mode",title:"Mutation Mode"},s=void 0,d={unversionedId:"advanced-tutorials/mutation-mode",id:"advanced-tutorials/mutation-mode",title:"Mutation Mode",description:"Overview",source:"@site/docs/advanced-tutorials/mutation-mode.md",sourceDirName:"advanced-tutorials",slug:"/advanced-tutorials/mutation-mode",permalink:"/docs/advanced-tutorials/mutation-mode",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/mutation-mode.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1690362688,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{id:"mutation-mode",title:"Mutation Mode"},sidebar:"someSidebar",previous:{title:"Strapi-v4",permalink:"/docs/advanced-tutorials/multi-tenancy/strapi-v4"},next:{title:"List Search",permalink:"/docs/advanced-tutorials/search/list-search"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Modes",id:"modes",level:2},{value:"<code>pessimistic</code>",id:"pessimistic",level:3},{value:"<code>optimistic</code>",id:"optimistic",level:3},{value:"<code>undoable</code>",id:"undoable",level:3},{value:"Usage",id:"usage",level:2},{value:"Supported data hooks",id:"supported-data-hooks",level:3},{value:"Example",id:"example",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},m=p("Tabs"),f=p("TabItem"),k=p("CodeSandboxExample"),b={toc:c};function h(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},b,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,n.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"undoable"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Each mode corresponds to a different type of user experience."),(0,n.kt)("h2",{id:"modes"},"Modes"),(0,n.kt)("p",null,"We'll show usages of modes with editing a record examples."),(0,n.kt)("h3",{id:"pessimistic"},(0,n.kt)("inlineCode",{parentName:"h3"},"pessimistic")),(0,n.kt)("p",null,"The mutation runs immediately. Redirection and UI updates are executed after the mutation returns successfuly."),(0,n.kt)("br",null),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/pessimistic.gif",alt:"pessimistic mode"}),(0,n.kt)("br",null),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and after successful response, list page updates with newly edited record.")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"optimistic"},(0,n.kt)("inlineCode",{parentName:"h3"},"optimistic")),(0,n.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. If mutation returns with error, UI updates to show data prior to the mutation."),(0,n.kt)("br",null),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/optimistic.gif",alt:"optimistic mode"}),(0,n.kt)("br",null),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and list page updates with edited data immediately without waiting API response.")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"undoable"},(0,n.kt)("inlineCode",{parentName:"h3"},"undoable")),(0,n.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. Waits for a customizable amount of timeout period before mutation is applied. During the timeout, mutation can be cancelled from the notification with an undo button and UI will revert back accordingly."),(0,n.kt)("br",null),(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/undoable.gif",alt:"undoable mode"}),(0,n.kt)("br",null),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request isn't sent to API immediately however list page updates with edited data. It waits for a period of time while the user can cancel the mutation. If the mutation is cancelled, locally applied edit is undone.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Mutation mode can be set application-wide in ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config#mutationmode"},(0,n.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine\n    ...\n    options={{ mutationMode: "optimistic" }}\n/>\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Its default value is ",(0,n.kt)("inlineCode",{parentName:"p"},"pessimistic"),".")),(0,n.kt)("br",null),(0,n.kt)("p",null,"It can also be set in supported ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useUpdate#mutation-mode"},"data hooks")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useForm#properties"},"form hooks")," for fine-grained configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@refinedev/core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n    resource: "categories",\n    id: "2",\n    values: { title: "New Category Title" },\n    // highlight-next-line\n    mutationMode: "optimistic",\n});\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Mutation mode passed to ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>")," will be overriden by the mutation mode passed to data or form hooks and components.")),(0,n.kt)("h3",{id:"supported-data-hooks"},"Supported data hooks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useUpdate/"},(0,n.kt)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useUpdateMany/"},(0,n.kt)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useDelete/"},(0,n.kt)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/api-reference/core/hooks/data/useDeleteMany/"},(0,n.kt)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192"))),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)(m,{defaultValue:"antd",values:[{label:"Antd Design",value:"antd"},{label:"Chakra UI",value:"chakra-ui"},{label:"Mantine",value:"mantine"},{label:"Material UI",value:"material-ui"}],mdxType:"Tabs"},(0,n.kt)(f,{value:"antd",mdxType:"TabItem"},(0,n.kt)(k,{path:"form-antd-mutation-mode",mdxType:"CodeSandboxExample"})),(0,n.kt)(f,{value:"chakra-ui",mdxType:"TabItem"},(0,n.kt)(k,{path:"form-chakra-ui-mutation-mode",mdxType:"CodeSandboxExample"})),(0,n.kt)(f,{value:"mantine",mdxType:"TabItem"},(0,n.kt)(k,{path:"form-mantine-mutation-mode",mdxType:"CodeSandboxExample"})),(0,n.kt)(f,{value:"material-ui",mdxType:"TabItem"},(0,n.kt)(k,{path:"form-material-ui-mutation-mode",mdxType:"CodeSandboxExample"}))))}h.isMDXComponent=!0}}]);