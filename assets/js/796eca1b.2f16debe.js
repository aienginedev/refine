"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={id:"useLogout",title:"useLogout",siderbar_label:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication.",source:"/packages/core/src/hooks/auth/useLogout/index.ts"},i=void 0,u={unversionedId:"api-reference/core/hooks/auth/useLogout",id:"api-reference/core/hooks/auth/useLogout",title:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication.",source:"@site/docs/api-reference/core/hooks/auth/useLogout.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useLogout",permalink:"/docs/api-reference/core/hooks/auth/useLogout",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/useLogout.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1681905484,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{id:"useLogout",title:"useLogout",siderbar_label:"useLogout",description:"useLogout data hook from refine is a modified version of react-query's useMutation for unauthentication.",source:"/packages/core/src/hooks/auth/useLogout/index.ts"},sidebar:"someSidebar",previous:{title:"useLogin",permalink:"/docs/api-reference/core/hooks/auth/useLogin"},next:{title:"usePermissions",permalink:"/docs/api-reference/core/hooks/auth/usePermissions"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after logout",id:"redirection-after-logout",level:2},{value:"Error handling",id:"error-handling",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,r.kt)("p",null,"It returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation")," which includes many properties, some of which being isSuccess and isError.\nData that is resolved from ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," will be returned as the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,r.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values ",(0,r.kt)("inlineCode",{parentName:"li"},'{ name: "useLogout Error", message: "Something went wrong during logout" }'),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"By default, Refine already provides a logout button on the sider and if you want to use this default button you won't need to handle the logout flow manually.\nIf you want to build a custom logout button instead of the default one, ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," can be used like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/customLogoutButton"',title:'"components/customLogoutButton"'},'import { useLogout } from "@refinedev/core";\n\nexport const LogoutButton = () => {\n    const { mutate: logout } = useLogout();\n\n    return <button onClick={() => logout()}>Logout</button>;\n};\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," can accept any kind of object for values since the ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.\nA type parameter for the values can be provided to ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: logout } = useLogout<{ redirectPath: string }>();\n"))),(0,r.kt)("h2",{id:"redirection-after-logout"},"Redirection after logout"),(0,r.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogin")," hook if you want to redirect yourself to a certain URL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogout } from "@refinedev/core";\n\nconst { mutate: logout } = useLogout();\n\nlogout({ redirectPath: "/custom-url" });\n')),(0,r.kt)("p",null,"Then, you can handle this URL in your ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    logout: async ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n')),(0,r.kt)("h2",{id:"error-handling"},"Error handling"),(0,r.kt)("p",null,"Since the methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," value in the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useLogout } from "@refinedev/core";\n\nconst { mutate: logout } = useLogout();\n\nlogout(\n    {\n        redirectPath: "/custom-url",\n    },\n    {\n        onSuccess: (data) => {\n            if (!data.success) {\n                // handle error\n            }\n\n            // handle success\n        },\n    },\n);\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,r.kt)("inlineCode",{parentName:"p"},"useLogout")," hook will not be called if ",(0,r.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," because the callback is triggered only when the promise is rejected. However, the methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise.")))}p.isMDXComponent=!0}}]);