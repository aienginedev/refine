"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[30429],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return a?i.createElement(g,r(r({ref:t},d),{},{components:a})):i.createElement(g,r({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},66557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});a(67294);var i=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",slug:"what-is-vite-vs-webpack",authors:"victor_uma",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/what-is-vite-vs-webpack",source:"@site/blog/2023-05-15-vite-js.md",title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",date:"2023-05-15T00:00:00.000Z",formattedDate:"May 15, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:8.085,hasTruncateMarker:!1,authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],frontMatter:{title:"What is Vite? & Vite vs Webpack",description:"We will explore what is Vite.js and compare it to Webpack.",slug:"what-is-vite-vs-webpack",authors:"victor_uma",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/social.png",hide_table_of_contents:!1},prevItem:{title:"How Next.js Redirects Work",permalink:"/blog/next-js-redirect"},nextItem:{title:"git diff - Comparing Changes in Git",permalink:"/blog/git-diff-command"},relatedPosts:[{title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",permalink:"/blog/git-diff-command",formattedDate:"May 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.99,date:"2023-05-12T00:00:00.000Z"},{title:"A Detailed Guide on Docker Volumes",description:"We'll go over the fundamentals of Docker volumes, including what they are, why they're important, and how to use them.",permalink:"/blog/docker-volumes",formattedDate:"July 11, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.54,date:"2023-07-11T00:00:00.000Z"},{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",permalink:"/blog/lighthouse-google-chrome",formattedDate:"August 31, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:14.68,date:"2022-08-31T00:00:00.000Z"}],authorPosts:[{title:"Next.js 13.4's Server Actions and Data Fetching",description:"We'll delve into the Next.js alpha feature Server actions and data fetching techniques.",permalink:"/blog/next-js-server-actions-and-data-fetching",formattedDate:"May 29, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:12.12,date:"2023-05-29T00:00:00.000Z"},{title:"Bun vs. Node.js",description:"We'll go over the new Bun runtime that has created a buzz in the tech space lately.",permalink:"/blog/bun-js-vs-node",formattedDate:"June 4, 2023",authors:[{name:"Victor Uma",title:"Software Developer",imageURL:"https://github.com/uma-victor1.png",key:"victor_uma"}],readingTime:9.39,date:"2023-06-04T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Vite.js?",id:"what-is-vitejs",level:2},{value:"How does Vite.js Address Performance Challenges?",id:"how-does-vitejs-address-performance-challenges",level:3},{value:"Key Features of Vite",id:"key-features-of-vite",level:2},{value:"Vite vs Webpack",id:"vite-vs-webpack",level:2},{value:"Migrating from Vite to Webpack",id:"migrating-from-vite-to-webpack",level:2},{value:"Using Vite.js in practice",id:"using-vitejs-in-practice",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var m;const g={toc:c};function h(e){var{components:t}=e,a=r(e,["components"]);return(0,i.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),i.forEach((function(t){n(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We'll talk about the history of vite and the importance of using Vite, we'll also deep dive into developer experience with Vite and why you want to start using Vite."),(0,i.kt)("p",null,"In this section, we'll be talking about ES modules and the evolution of bundling Javascript code.\nIn the ever-evolving landscape of web development, speed and efficiency are crucial factors that can make or break a project. As developers, we constantly seek tools that can streamline our workflow and deliver optimal performance."),(0,i.kt)("p",null,"The problem of bundling has been as old as developers finding a way to organize their code in a modular fashion. ES modules which became a solution to the problem, allowed developers to have a better developer experience by allowing code to be grouped by modules and allowing module variables to be accessible to other modules if need be. "),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/"},"ES module specifications")," or webpack, which allowed ESM for unsupported browsers, soon began to pose a problem. As developers build large-scale applications, there are thousands of modules these large applications depend on, making the building process extremely slow and a pain for developers. "),(0,i.kt)("p",null,"It is this very problem that has brought about the creation of ",(0,i.kt)("strong",{parentName:"p"},"Vite!.")," ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite.js")," was created by ",(0,i.kt)("a",{parentName:"p",href:"https://evanyou.me/"},"Evan You")," the creator of ",(0,i.kt)("a",{parentName:"p",href:"https://vuejs.org/"},"Vue.js"),", a very popular Javascript framework. Vite was created as a way to both simplify and speed up the frontend development build cycle. "),(0,i.kt)("p",null,"Steps we'll cover:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#what-is-vitejs"},"What is Vite.js?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-does-vitejs-address-performance-challenges"},"How does Vite.js Address Performance Challenges?")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#key-features-of-vite"},"Key Features of Vite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#vite-vs-webpack"},"Vite vs Webpack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#migrating-from-vite-to-webpack"},"Migrating from Vite to Webpack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-vitejs-in-practice"},"Using Vite.js in practice"))),(0,i.kt)("h2",{id:"what-is-vitejs"},"What is Vite.js?"),(0,i.kt)("p",null,"Javascript build tools can be a pain to developers, especially when all you want to do is focus on development. Developers want a simplified way of building and developing their applications and ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"Vite.js")," is one of the popular tools that solves this problem. We'll be talking about Vite.js and its key features in this tutorial."),(0,i.kt)("p",null,"We'll talk about how Vite was built fundamentally and how it addresses performance challenges in web development. Fundamentally, at the core, Vite.js does two main things, and does it really well:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Serve code locally during development"),(0,i.kt)("li",{parentName:"ol"},"Bundle all your frontend assets (HTML, CSS, JS etc.) for production.")),(0,i.kt)("p",null,"Vite leverages native ES modules in the browser. This will help to load your code instantly, no matter how large your module dependencies are or how large the application code has become. Vite also uses Hot Module Replacement (HMR). HMR accounts for the fast and effective part of Vite, as it watches for state changes in the application and adds and/or removes modules while the application is running without prompting a full reload of the application. What this means for the developers is you can see the changes you make to your code instantly right in your browser as you're coding. Cool right?!."),(0,i.kt)("h3",{id:"how-does-vitejs-address-performance-challenges"},"How does Vite.js Address Performance Challenges?"),(0,i.kt)("p",null,"In this section, let's take a look at how Vite addresses some of the performance challenges in front-end web development."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Native ES Modules Support:")," Vite.js fully embraces native ES modules. Native ES modules are supported in modern browsers. Instead of bundling modules during development, Vite.js leverages the native capabilities of browsers to directly load ES modules as separate files. This adoption eliminates the need for bundling and enables faster startup times and better cacheability. It also ensures that the browser results in improved overall performance."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Blazing-Fast Build Process"),': Vite.js leverages the "esbuild" bundler, known for its exceptional speed. During the production build process, Vite.js uses "esbuild" to generate optimized and minified code bundles. The "esbuild" rapid bundling capabilities significantly reduces build times compared to traditional bundlers. This leads to improved and faster deployment and developer productivity. '),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Code Splitting and Lazy Loading"),": Vite.js supports code splitting and lazy loading out of the box. By breaking down the codebase into smaller chunks, Vite.js enables more efficient loading and execution of JavaScript. Only the necessary modules are loaded when required, reducing initial load times and improving performance. Lazy loading allows developers to load specific parts of an application on-demand, further optimizing the loading process and improving the user experience.")),(0,i.kt)("h2",{id:"key-features-of-vite"},"Key Features of Vite"),(0,i.kt)("p",null,"In this section, we'll be talking about the key features Vite has to offer and why you should get started using it. Vite.js, being a modern front-end development build tool, offers several key features that differentiate it from traditional bundlers. Here are some of the features:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Lightning-Fast Development Server"),": Vite.js introduces a highly optimized development server that leverages native ES module imports in modern browsers. It employs an on-demand compilation approach, allowing for near-instantaneous hot module replacement (HMR) and rapid page reloads. This significantly speeds up the development workflow, providing faster feedback loops and enhancing developer productivity."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Native ES Modules Support"),": Vite.js fully embraces native ES modules, which are natively supported in modern browsers. During development, Vite.js leverages the browser's ability to load ES modules as separate files without the need for bundling. This approach eliminates the overhead of bundling during development, resulting in faster startup times and better cacheability. It also allows the browser to parallelize module loading, leading to improved overall performance."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Blazing-Fast Production Builds"),': Vite.js utilizes the "esbuild" bundler, known for its exceptional speed, during the production build process. "esbuild" generates optimized and minified code bundles, resulting in significantly reduced build times compared to traditional bundlers. This swift bundling process enhances developer efficiency and allows for faster deployment cycles.'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Zero Configuration"),": Vite.js follows a zero-configuration philosophy, providing a seamless out-of-the-box experience. By minimizing the need for manual configuration, developers can quickly set up new projects without spending time on complex configuration setups. However, Vite.js also offers a flexible configuration file (vite.config.js) for advanced customization when needed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Devtool Integration"),": Vite.js seamlessly integrates with popular browser developer tools. It provides an enhanced debugging experience by mapping original source code to the browser, enabling developers to directly debug their code without any additional setup or tooling."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Plugin Ecosystem"),": Vite.js has a growing ecosystem of plugins that extend its functionality and integrate with popular frontend frameworks like Vue.js, React, and Preact. These plugins enhance the development experience and offer additional features, optimizations, and integrations with tools and libraries.")),(0,i.kt)("hr",null),(0,i.kt)(u,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"vite-vs-webpack"},"Vite vs Webpack"),(0,i.kt)("p",null,"In this section, we'll be doing a comparison between Vite and Webpack. There are similar bundling tools like ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," for example ",(0,i.kt)("a",{parentName:"p",href:"https://rollupjs.org/"},"Rollup")," and ",(0,i.kt)("a",{parentName:"p",href:"https://parceljs.org/"},"Parcel"),". The major difference between these tools is Vite uses a native ES module dev server, while webpack uses a bundle based dev server. Below is a picture of how modules are bundled with native ESM:"),(0,i.kt)("br",null),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/comparing-vite.png",alt:"vite vs webpack"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"With this setup, unnecessary bundling during development is avoided and build time is greatly reduced and significantly faster"),(0,i.kt)("p",null,"Here is an image of a typical webpack dev server:"),(0,i.kt)("br",null),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/comparing-vite-2.png",alt:"vite vs webpack"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"Vite.js follows a simplified and opinionated configuration approach. The configuration file is minimal, making it easier to set up and get started quickly.",(0,i.kt)("br",{parentName:"p"}),"\n","Vite.js has a growing ecosystem of plugins that integrate seamlessly with popular frontend frameworks such as Vue.js, React, and Preact, while webpack is known for its extensive configuration options, allowing developers to fine-tune every aspect of the bundling process. Its vast ecosystem provides a wide range of plugins and loaders, making it highly versatile and adaptable to different project requirements."),(0,i.kt)("p",null,"Here is an image of a time benchmark test between webpack and Vite:"),(0,i.kt)("br",null),(0,i.kt)("div",{className:"centered-image"},(0,i.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-15-vite-js/benchmark.png",alt:"vite vs webpack"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"From the image we can see how fast Vite is in comparison to webpack."),(0,i.kt)("h2",{id:"migrating-from-vite-to-webpack"},"Migrating from Vite to Webpack"),(0,i.kt)("p",null,"In this section we'll look at how we can migrate our application using webpack to Vite. Here are some steps and things to note: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First install Vite and all its plugins. You can check the getting started guide ",(0,i.kt)("a",{parentName:"li",href:"https://vitejs.dev/guide/"},"here")),(0,i.kt)("li",{parentName:"ul"},"Make sure your project is using ES modules. You can do that by going to your ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")," file and pasting")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'"type": "module",\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remove all webpack configuration files, like ",(0,i.kt)("inlineCode",{parentName:"li"},"webpack.config.js"),", and replace it with a ",(0,i.kt)("inlineCode",{parentName:"li"},"vite.config.js")," file. Also in your scripts, you'll need to update with this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'"build": "vite build", \n"dev": "vite serve",\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure to remove webpack loaders and plugins that are no longer in use and test your application, so everything is working as it should")),(0,i.kt)("h2",{id:"using-vitejs-in-practice"},"Using Vite.js in practice"),(0,i.kt)("p",null,"In this section, we will talk about how we can get started using Vite in practice and also demonstrate with some example code."),(0,i.kt)("p",null,"To scaffold a react project with vite, paste:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"# npm 6.x\nnpm create vite@latest my-react-app --template react\n\n# npm 7+, extra double-dash is needed:\nnpm create vite@latest my-react-app -- --template react\n")),(0,i.kt)("p",null,"You can now change into the project directory, run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," and start our development server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"cd react-vite\nnpm install\nnpm run dev\n")),(0,i.kt)("p",null,"In the scripts file we have our commands for building for production and creating a local preview."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  "scripts": {\n   "dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`\n   "build": "vite build", // build for production\n   "preview": "vite preview"// locally preview production build\n  }\n}\n')),(0,i.kt)("br",null),(0,i.kt)("div",null,(0,i.kt)("a",{href:"https://discord.gg/refine"},(0,i.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Finally, we have come to the end of the tutorial, and we have been able to learn how Vite.js revolutionizes frontend development with its lightning-fast development server, native ES modules support, and blazing-fast production builds. You can check it out for yourself. Happy coding!."))}h.isMDXComponent=!0}}]);