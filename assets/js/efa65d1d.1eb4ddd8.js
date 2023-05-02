"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",slug:"typescript-pick-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-30-typescript-pick/social.png",hide_table_of_contents:!1},s=void 0,o={permalink:"/blog/typescript-pick-utility-type",source:"@site/blog/2022-09-30-typescript-pick.md",title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",date:"2022-09-30T00:00:00.000Z",formattedDate:"September 30, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:6.53,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Detailed Guide on TypeScript Pick Type",description:"We'll deep dive into the TypeScript Pick utility type with examples and use cases.",slug:"typescript-pick-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-30-typescript-pick/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use React Fragments?",permalink:"/blog/how-react-fragments-is-works"},nextItem:{title:"Redirect in React Router V6 with Navigate Component",permalink:"/blog/navigate-react-router-redirect"},relatedPosts:[{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.985,date:"2022-10-10T00:00:00.000Z"},{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.505,date:"2022-10-03T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:7.305,date:"2022-09-12T00:00:00.000Z"}],authorPosts:[{title:"Adding CRUD Actions and Authentication",permalink:"/blog/refine-pixels-3",formattedDate:"February 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:28.87,date:"2023-02-16T00:00:00.000Z"},{title:"Setting Up the Invoicer App",permalink:"/blog/refine-react-invoice-generator-2",formattedDate:"April 11, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:19.615,date:"2023-04-11T00:00:00.000Z"},{title:"Adding CRUD Pages",permalink:"/blog/refine-react-invoice-generator-3",formattedDate:"April 12, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:27.265,date:"2023-04-12T00:00:00.000Z"}]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is Object Type Transformation?",id:"what-is-object-type-transformation",level:2},{value:"The Scenario",id:"the-scenario",level:3},{value:"What is TypeScript Pick?",id:"what-is-typescript-pick",level:2},{value:"Picking Items with <code>Pick&lt;Type, Keys&gt;</code>",id:"picking-items-with-picktype-keys",level:3},{value:"For Types Only",id:"for-types-only",level:3},{value:"Picking from a Type",id:"picking-from-a-type",level:3},{value:"When to Avoid",id:"when-to-avoid",level:3},{value:"Conclusion",id:"conclusion",level:2}],c=(u="PromotionBanner",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var u;const m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This is a series on Object Type Transformations in TypeScript. In this series, we will first look into what object type transformations are, the situations that necessitate a transformation and how they are different from object interface extensions. Then we will closely examine various utilities that TypeScript provides to facilitate object type transformations, such as  ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Partial<>"),"."),(0,i.kt)("p",null,"We will dive into the details of commonly used utilities individually in each article in the series. In this part, we will consider how to generate a new type from an existing type by cherry-picking a few properties from a base type or interface using ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<Type, Keys>"),"."),(0,i.kt)("p",null,"But first let's understand what transforming an object type means and under what circumstances do we need one."),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-object-type-transformation"},"What is Object Type Transformation?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#the-scenario"},"The Scenario")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-typescript-pick"},"What is TypeScript Pick?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#picking-items-with-picktype-keys"},"Picking Items with ",(0,i.kt)("inlineCode",{parentName:"a"},"Pick<Type, Keys>"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#for-types-only"},"For Types Only")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#picking-from-a-type"},"Picking from a Type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#when-to-avoid"},"When to Avoid"))))),(0,i.kt)("h2",{id:"what-is-object-type-transformation"},"What is Object Type Transformation?"),(0,i.kt)("p",null,"Object Type Transformation refers to generating a modified type from an existing type or interface that represents an object. Such transformations are related to one or more properties, in other words, the shape of an object."),(0,i.kt)("p",null,"TypeScript has various utilities that allow us to implement different sorts of object type transformations, such as by picking or omitting properties from already available types."),(0,i.kt)("p",null,"Object type transformations become very handy when we need a bunch of similar object types that otherwise have to be defined individually. Instead of defining each type separately, we can leverage TypeScript's transformation utilities to generate new types from an existing type by just asking for small adjustments. This way, we are able to make our types re-usable and generate them on-the-go anywhere in our modules system."),(0,i.kt)("p",null,"Object type transformations are different from object interface extensions that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," keyword, especially because extensions are possible on ",(0,i.kt)("strong",{parentName:"p"},"object interfaces only")," and are not available for types. And although transformations can also be applied to object interfaces with the same utilities, they are generally useful for creating new object types."),(0,i.kt)("p",null,"We'll build the examples in this series based on the following scenario that involves a few different types of users. While the focus will be on object types, we will also bring interfaces into the discussion."),(0,i.kt)("h3",{id:"the-scenario"},"The Scenario"),(0,i.kt)("p",null,"Let's say we have a bunch of user entities that differ in terms of how they interact with a blog. Basically, whether they are a ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestUser"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscriber"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"Editor")," or an ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin"),", etc.  The following ERD shows how their shapes may differ in the backend:"),(0,i.kt)("div",{class:"img-container","align-items":"center"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-30-typescript-pick/ts-pick-visualize.png",alt:"TypeScript Omit Type"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Now, if we want to model these types for our frontend API calls, we can manually write a TypeScript type for each user type - which obviously violates the DRY (Don't Repeat Yourself) principle because we are repeating several common properties for each user type. We can also use interface extensions but that's not the scope of this series."),(0,i.kt)("p",null,"So, what we will do is use TypeScript's transformation utilities to generate the types we need from a base type. And in order to do the right transformations, we need to conveniently set the right base type and then pair it with the utility tool that generates our target type."),(0,i.kt)("p",null,"For example, in this article we will consider the use case for ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<Type, Keys>"),"."),(0,i.kt)("hr",null),(0,i.kt)(c,{title:"Not confident with your frontend skills?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-is-typescript-pick"},"What is TypeScript Pick?"),(0,i.kt)("h3",{id:"picking-items-with-picktype-keys"},"Picking Items with ",(0,i.kt)("inlineCode",{parentName:"h3"},"Pick<Type, Keys>")),(0,i.kt)("p",null,"For the above entities in the diagram, it makes sense to take ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser")," as our base type because it includes all properties that exists on all other user types."),(0,i.kt)("p",null,"We will first work with an ",(0,i.kt)("strong",{parentName:"p"},"interface")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ('Admin' | 'Editor' | 'Author')[]\n};\n")),(0,i.kt)("p",null,"Now, if we want to generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestUser")," type from ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser"),", we just pick ",(0,i.kt)("inlineCode",{parentName:"p"},"userId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"macAddress")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type GuestUser = Pick<SuperbUser, 'userId' | 'macAddress' | 'username'>;\n")),(0,i.kt)("p",null,"If we look closely, ",(0,i.kt)("strong",{parentName:"p"},"TypeScript Pick")," takes the base type as the first argument and a union of keys we want to pick from the base as the second."),(0,i.kt)("p",null,"Using these two types to declare actual objects gives us the objects with their respective properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const me: SuperbUser = {\n  userId: 1,\n  macAddress: 'my:5up4b:m4ch1ne',\n  username: 'supab_usa',\n  email: 'supab_usa@hotmail.com',\n  password: '12345678',\n  firstName: 'Abdullah',\n  lastName: 'Numan',\n  roles: ['Admin', 'Editor', 'Author']\n};\n\nconst guest: GuestUser = {\n  userId: 2,\n  macAddress: 'a:gu3st:m4ch1ne',\n  username: 'randomly_generated'\n};\n\nconsole.log(me.roles); // [\"Admin\", \"Editor\", \"Author\"]\nconsole.log(guest.username); // \"randomly_generated\"\nconsole.log(guest.roles); // undefined\n")),(0,i.kt)("p",null,"Notice, ",(0,i.kt)("inlineCode",{parentName:"p"},"guest.roles")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," at runtime and a lot prior to that TypeScript throws an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// Property 'roles' does not exist on type 'GuestUser'.\n")),(0,i.kt)("p",null,"Now, if we try to represent an object with any other properties added from ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser")," interface -- as a type of ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestUser"),", we get yelled at:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const anotherGuest: GuestUser = {\n  userId: 3,\n  macAddress: '4n0th4:m4ch1ne',\n  username: 'randomly_generated',\n  email: 'not_allowed_by_typescript@email.com'\n};\n// Object literal may only specify known properties, and 'email' does not exist in type 'GuestUser'.\n")),(0,i.kt)("p",null,"Here, the complain being ",(0,i.kt)("inlineCode",{parentName:"p"},"anotherGuest")," cannot be of ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestUser")," type, because ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestUser")," does not have an ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," property signature."),(0,i.kt)("h3",{id:"for-types-only"},"For Types Only"),(0,i.kt)("p",null,"Notice that we defined ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestUser")," as a type with the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," keyword, although we are using an interface as our base. This is because TypeScript ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<Type, Keys>")," can only be used to generate a ",(0,i.kt)("strong",{parentName:"p"},"type")," and not an interface."),(0,i.kt)("p",null,"If we try to define it with ",(0,i.kt)("inlineCode",{parentName:"p"},"interface"),", TypeScript throws an error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"interface GuestUser = Pick<SuperbUser, 'userId' | 'macAddress' | 'username'>;\n// 'Pick' only refers to a type, but is being used as a value here.\n")),(0,i.kt)("h3",{id:"picking-from-a-type"},"Picking from a Type"),(0,i.kt)("p",null,"Transformations are more useful for ",(0,i.kt)("strong",{parentName:"p"},"types")," rather than interfaces because we cannot extend types. If we convert our ",(0,i.kt)("inlineCode",{parentName:"p"},"SuperbUser")," interface into a type, we get the same results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"type SuperbUser = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password: string,\n  firstName: string,\n  lastName: string,\n  roles: ('Admin' | 'Editor' | 'Author')[]\n};\n\ntype GuestUser = Pick<SuperbUser, 'userId' | 'macAddress' | 'username'>;\n\nconst me: SuperbUser = {\n  userId: 1,\n  macAddress: 'my:5up4b:m4ch1ne',\n  username: 'supab_usa',\n  email: 'supab_usa@hotmail.com',\n  password: '12345678',\n  firstName: 'Abdullah',\n  lastName: 'Numan',\n  roles: ['Admin', 'Editor', 'Author']\n};\n\nconst guest: GuestUser = {\n  userId: 2,\n  macAddress: 'a:gu3st:m4ch1ne',\n  username: 'randomly_generated'\n};\n\nconsole.log(me.roles); // [\"Admin\", \"Editor\", \"Author\"]\nconsole.log(guest.username); // \"randomly_generated\"\nconsole.log(guest.roles); // undefined\n")),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.kt)("h3",{id:"when-to-avoid"},"When to Avoid"),(0,i.kt)("p",null,"Now, if we want to derive a type for our ",(0,i.kt)("inlineCode",{parentName:"p"},"Subscriber")," entity, we would want to pick all the properties except ",(0,i.kt)("inlineCode",{parentName:"p"},"roles"),". But, it doesn't make sense to list all the properties in the union type passed as the second argument:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// Poor choice of utility type\ntype Subscriber = Pick<SuperbUser, 'userId' | 'macAddress' | 'username' | 'email' | ... >;\n")),(0,i.kt)("p",null,"Instead, we can just omit ",(0,i.kt)("inlineCode",{parentName:"p"},"roles")," from the passed in utility type. As we'll see in the next post, we can do this with ",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<Type, Keys>"),"."),(0,i.kt)("p",null,"These are the cruces of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>")," transformations in TypeScript."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this post, we found out that Object Type Transformations allow us to derive similar types from a base type when we have objects that share properties. We looked at an example that uses TypeScript ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>")," to create a new type by picking a few properties from a type with larger shape. We found out that a type transformation can take both an interface as well as a type as its base, but the generated type cannot be declared as an interface."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Omit<>"),", the opposite equivalent of ",(0,i.kt)("inlineCode",{parentName:"p"},"Pick<>"),", can be used when we have more properties to pick and less to omit. We'll look at it in the next post."))}d.isMDXComponent=!0}}]);