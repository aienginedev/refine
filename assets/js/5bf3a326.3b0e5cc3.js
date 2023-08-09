"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93418],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12330:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const l={title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",slug:"typescript-partial-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-10-typescript-partial/social.png",hide_table_of_contents:!1},o=void 0,p={permalink:"/blog/typescript-partial-utility-type",source:"@site/blog/2022-10-10-typescript-partial.md",title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",date:"2022-10-10T00:00:00.000Z",formattedDate:"October 10, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:4,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",slug:"typescript-partial-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-10-typescript-partial/social.png",hide_table_of_contents:!1},prevItem:{title:"Why you should prefer using pnpm over npm and yarn?",permalink:"/blog/pnpm-vs-npm-and-yarn"},nextItem:{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind"},relatedPosts:[{title:"TypeScript Decorators in Brief",description:"We'll explore four main types of TypeScript Decorators with examples from a class that resembles those in typical class based TypeScript libraries.",permalink:"/blog/typescript-decorators",formattedDate:"July 24, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.445,date:"2023-07-24T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.525,date:"2022-10-03T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.55,date:"2022-09-30T00:00:00.000Z"}],authorPosts:[{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.55,date:"2022-09-30T00:00:00.000Z"},{title:"Adding PDF Renderer",description:"We are going to add PDF renderer to our PDF Invoice Generator app that we have been building last few days. This is also where we summarize our accomplishments and wrap up the series.",permalink:"/blog/refine-react-invoice-generator-5",formattedDate:"April 14, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.835,date:"2023-04-14T00:00:00.000Z"},{title:"How to Use JavaScript Array some",description:"JavaScript some method implementation on Array with examples",permalink:"/blog/javascript-some-method",formattedDate:"October 25, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.035,date:"2022-10-25T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"Optional Registration Scenario",id:"optional-registration-scenario",level:2},{value:"Enter TypeScript <code>Partial&lt;Type&gt;</code>",id:"enter-typescript-partialtype",level:2},{value:"With Interfaces",id:"with-interfaces",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const b={toc:c};function y(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},b,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,n.kt)("inlineCode",{parentName:"p"},"Partial<>"),". This is the third part of the series titled ",(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-omit-utility-type/"},"TypeScript Utility Type Series"),"."),(0,n.kt)("p",null,"In the previous post, we went through an example where we derived a ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber")," type by omitting a property from the base type, ",(0,n.kt)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,n.kt)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,n.kt)("p",null,"In this post, we will consider an example of ",(0,n.kt)("strong",{parentName:"p"},"TypeScript ",(0,n.kt)("inlineCode",{parentName:"strong"},"Partial<>"))," by modifying our ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber")," type to assume a more realistic scenario."),(0,n.kt)("p",null,"Steps we'll cover:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#optional-registration-scenario"},"Optional Registration Scenario")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#enter-typescript-partialtype"},"Enter TypeScript ",(0,n.kt)("inlineCode",{parentName:"a"},"Partial<Type>"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#with-interfaces"},"Partial with Interfaces"))),(0,n.kt)("h2",{id:"optional-registration-scenario"},"Optional Registration Scenario"),(0,n.kt)("p",null,"For our blog, we would have ",(0,n.kt)("inlineCode",{parentName:"p"},"GuestUser"),"s who are not allowed to like or comment on a post. We would allow registered ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber"),"s to like and comment. So, the scenario goes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("inlineCode",{parentName:"li"},"GuestUser")," must register with their ",(0,n.kt)("inlineCode",{parentName:"li"},"email")," and become a ",(0,n.kt)("inlineCode",{parentName:"li"},"Subscriber"),"."),(0,n.kt)("li",{parentName:"ul"},"they receive a link to set their password in an email sent to their ",(0,n.kt)("inlineCode",{parentName:"li"},"email"),"."),(0,n.kt)("li",{parentName:"ul"},"they are able to set their ",(0,n.kt)("inlineCode",{parentName:"li"},"password"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"firstName")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"lastName")," afterwards.")),(0,n.kt)("p",null,"In such a scenario, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber")," type we derived previously, which effectively has the shape below, does not deliver our needs the way we want:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'type Subscriber = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password: string,\n  firstName: string,\n  lastName: string,\n};\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\'\n};\n\nconsole.log(subscriber);\n/*\nFrom TypeScript Error:\n"Type \'{ userId: number; macAddress: string; username: string; email: string; }\' is missing the following properties from type \'Subscriber\': password, firstName, lastName"\n\nFrom console:\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,n.kt)("p",null,"TypeScript complains about the inconformity of ",(0,n.kt)("inlineCode",{parentName:"p"},"subscriber")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber")," type. This is because it sets all the fields to be ",(0,n.kt)("strong",{parentName:"p"},"required")," by default. If we set ",(0,n.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"lastName")," to optional manually, it is happy:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'type Subscriber = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password?: string,\n  firstName?: string,\n  lastName?: string,\n};\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\'\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,n.kt)("p",null,"But this comes with the overhead of defining ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber")," manually in the first place and additionally then setting individual optional properties. In real APIs, it's not a good idea to define a shape manually."),(0,n.kt)("hr",null),(0,n.kt)(m,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"enter-typescript-partialtype"},"Enter TypeScript ",(0,n.kt)("inlineCode",{parentName:"h2"},"Partial<Type>")),(0,n.kt)("p",null,"We want to remove the hassle and do this much more comfortably from the type returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"Omit<>"),". So what we want to do is set all the properties of the returned type to be optional with ",(0,n.kt)("inlineCode",{parentName:"p"},"Partial<Type>"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"type SuperbUser = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password: string,\n  firstName: string,\n  lastName: string,\n  roles: ('Admin' | 'Editor' | 'Author')[]\n};\n\ntype Subscriber = Partial<Omit<SuperbUser, 'roles'>>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: 'a:5ub:mach1ne',\n  username: 'sub_user',\n  email: 'sub_user@gmail.com'\n};\n\nconsole.log(subscriber);\n/*\n{\n  \"userId\": 4,\n  \"macAddress\": \"a:5ub:mach1ne\",\n  \"username\": \"sub_user\",\n  \"email\": \"sub_user@gmail.com\"\n}\n*/\n")),(0,n.kt)("p",null,"No complains, which is great!"),(0,n.kt)("p",null,"So, we are now free to set values for ",(0,n.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"lastName"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'subscriber.password = \'12345678\';\nsubscriber.firstName = \'Abdullah\';\nsubscriber.lastName = \'Numan\';\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n')),(0,n.kt)("p",null,"But, like before, TypeScript complains again if we add the properties that disrupts the shape of ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"subscriber.roles = ['Reader', 'Commenter'];\n\nconsole.log(subscriber);\n// Property 'roles' does not exist on type 'Partial<Omit<SuperbUser, \"roles\">>'.\n")),(0,n.kt)("p",null,"So, the benefits of using TypeScript to derive a partial type includes its support for partial assignment of the object's properties that is allowed by JavaScript and not allowed by default TypeScript. It also warns about possible undesired assignments to the partial."),(0,n.kt)("br",null),(0,n.kt)("div",null,(0,n.kt)("a",{href:"https://discord.gg/refine"},(0,n.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,n.kt)("h2",{id:"with-interfaces"},"With Interfaces"),(0,n.kt)("p",null,"We get the same result if we use an interface for our base ",(0,n.kt)("inlineCode",{parentName:"p"},"SuperbUser")," type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: (\'Admin\' | \'Editor\' | \'Author\')[]\n};\n\ntype Subscriber = Partial<Omit<SuperbUser, \'roles\'>>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\'\n};\n\nsubscriber.password = \'12345678\';\nsubscriber.firstName = \'Abdullah\';\nsubscriber.lastName = \'Numan\';\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n')),(0,n.kt)("p",null,"We can also refactor the return type from ",(0,n.kt)("inlineCode",{parentName:"p"},"Omit<>")," into an intermediary type, ",(0,n.kt)("inlineCode",{parentName:"p"},"StrictSubscriber"),", and pass it as the argument of ",(0,n.kt)("strong",{parentName:"p"},"TypeScript Partial"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"type StrictSubscriber = Omit<SuperbUser, 'roles'>;\ntype Subscriber = Partial<StrictSubscriber>;\n")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this post, we covered partial object transformations with using the utility transformer ",(0,n.kt)("strong",{parentName:"p"},"Partial"),". We found out that it is preferable to setting certain properties of a type to optional manually, especially when dealing with types returned from APIs."))}y.isMDXComponent=!0}}]);