"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48404],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46126:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>m});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",slug:"how-to-add-darkmode-in-ant-design",authors:"vmalep",tags:["refine","react","css","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/how-to-add-darkmode-in-ant-design",source:"@site/blog/2022-02-12-implement-darkmode.md",title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",date:"2022-02-12T00:00:00.000Z",formattedDate:"February 12, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"css",permalink:"/blog/tags/css"},{label:"ant-design",permalink:"/blog/tags/ant-design"}],readingTime:5.045,hasTruncateMarker:!0,authors:[{name:"Pierre van Male",title:"Junior Fullstack Developer",url:"https://github.com/vmalep",imageURL:"https://github.com/vmalep.png",key:"vmalep"}],frontMatter:{title:"Implementing Dark Mode In Ant Design Using gulp",description:"In this article, we\u2019ll learn how to efficiently implement dark mode in a refine/Ant Design app, using gulp library and leveraging some React features like hooks",slug:"how-to-add-darkmode-in-ant-design",authors:"vmalep",tags:["refine","react","css","ant-design"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Next.js E-commerce App with Strapi and Chakra UI",permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui"},nextItem:{title:"How to Import CSV File with React",permalink:"/blog/how-to-import-csv"},relatedPosts:[{title:"Redirect in React Router V6 with Navigate Component",description:"We'll see how to redirect using Navigate Component in React Router V6",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:3.935,date:"2022-09-29T00:00:00.000Z"},{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.835,date:"2022-09-18T00:00:00.000Z"},{title:"Migrating a React-Admin Application to refine",description:"Recently, our team decided to migrate a B2B admin panel of one of our customers from React-Admin to refine to battle test our new framework and improve our productivity.",permalink:"/blog/migrating-a-react-admin-application-to-refine",formattedDate:"October 6, 2021",authors:[{name:"Umut \xd6zdemir",title:"Frontend Developer",url:"https://github.com/miyavsu-limited",imageURL:"https://github.com/miyavsu-limited.png",key:"umut"}],readingTime:5.34,date:"2021-10-06T00:00:00.000Z"}],authorPosts:[]},c={authorsImageUrls:[void 0]},m=[],u={toc:m};function g(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},u,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This post was created using version 3.x.x of ",(0,n.kt)("strong",{parentName:"p"},"refine"),". Although we plan to update it with the latest version of ",(0,n.kt)("strong",{parentName:"p"},"refine")," as soon as possible, you can still benefit from the post in the meantime."),(0,n.kt)("p",{parentName:"admonition"},"You should know that ",(0,n.kt)("strong",{parentName:"p"},"refine")," version 4.x.x is backward compatible with version 3.x.x, so there is no need to worry. If you want to see the differences between the two versions, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/migration-guide/"},"migration guide"),".")),(0,n.kt)("p",null,"In this article, we will provide an example on how to implement darkmode with ",(0,n.kt)("strong",{parentName:"p"},"refine"),". In order to switch between light and dark mode, we need 2 different styles and the possibility to switch between one and the other without restarting the application. Since the Less stylesheets with React doesn't allow variables to be modified without compilation and therefore a restart of the application. To solve this, we are going to use ",(0,n.kt)("strong",{parentName:"p"},"gulp")," that will compile the Less files into swappable CSS, directly accessible to the running application."))}g.isMDXComponent=!0}}]);