"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const r={title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",slug:"sveltekit-crud-app-with-svelte-mui",authors:"ekekenta_clinton",tags:["svelte","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/sveltekit-crud-app-with-svelte-mui",source:"@site/blog/2022-09-02-sveltekit-crud-app.md",title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",date:"2022-09-02T00:00:00.000Z",formattedDate:"September 2, 2022",tags:[{label:"svelte",permalink:"/blog/tags/svelte"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:10.075,hasTruncateMarker:!0,authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],frontMatter:{title:"How to create a CRUD app with SvelteKit",description:"We'll build a CRUD Blog app using SvelteKit and Svelte MUI",slug:"sveltekit-crud-app-with-svelte-mui",authors:"ekekenta_clinton",tags:["svelte","tutorial"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/social.png",hide_table_of_contents:!1},prevItem:{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component"},nextItem:{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations"},relatedPosts:[{title:"How to Build a React Admin Panel with Mantine and Strapi",description:"We'll be building a simple React Admin Panel with refine and Mantine using Strapi as a backend service.",permalink:"/blog/react-admin-panel",formattedDate:"February 23, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:22.05,date:"2023-02-23T00:00:00.000Z"},{title:"How to Create Dynamic Forms in React CRUD app with Ant Design",description:"Easy way to creating dynamic forms in React CRUD apps with Ant Design",permalink:"/blog/react-crud-app-with-dynamic-form-ant-design",formattedDate:"November 17, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:25.29,date:"2022-11-17T00:00:00.000Z"},{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:12.855,date:"2022-09-22T00:00:00.000Z"}],authorPosts:[{title:"NextAuth - Google And GitHub Authentications for Nextjs",description:"How to implement Google and GitHub authentications using NextAuth.js in Next.js?",permalink:"/blog/nextauth-google-github-authentication-nextjs",formattedDate:"August 18, 2022",authors:[{name:"Ekekenta Clinton",title:"Software Engineer",url:"https://github.com/icode247",imageURL:"https://github.com/icode247.png",key:"ekekenta_clinton"}],readingTime:12.725,date:"2022-08-18T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Sveltekit",id:"what-is-sveltekit",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Sveltekit Application",id:"create-sveltekit-application",level:2},{value:"Create the App UI",id:"create-the-app-ui",level:2},{value:"Read Blogs",id:"read-blogs",level:2},{value:"Create New Blog",id:"create-new-blog",level:2},{value:"Update Blog",id:"update-blog",level:2},{value:"Delete Blog",id:"delete-blog",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Example",id:"example",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("PromotionBanner"),h=u("CodeSandboxExample"),g={toc:c};function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Because of Svelte\u2019s popularity over the years, many companies are beginning to migrate their applications or build new ones using the framework. However, developers have had difficulty implementing features such as routing in their web applications while using Svelte."),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Sveltekit")," includes the features that ",(0,a.kt)("strong",{parentName:"p"},"Svelte")," lacks, saving developers time and allowing us to create complex hybrid web applications with relative ease."),(0,a.kt)("p",null,"Steps we\u2019ll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#what-is-sveltekit"},"What is Sveltekit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-sveltekit-application"},"Create Sveltekit Application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-the-app-ui"},"Create the App UI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#read-blogs"},"Read Blogs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-new-blog"},"Create New Blog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#update-blog"},"Update Blog")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#delete-blog"},"Delete Blog"))),(0,a.kt)("h2",{id:"what-is-sveltekit"},"What is Sveltekit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SvelteKit")," is a framework for creating web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. It compiles your components into a vanilla JavaScript that is highly optimized."),(0,a.kt)("p",null,"Sveltekit helps you build web apps that are fiendishly complicated with all of the modern best practices, such as build optimizations, offline support, prefetching pages before the user initiates navigation, and generating configurable HTML pages on the server or in the browser at runtime or build-time with minimal code."),(0,a.kt)("p",null,"It uses Vite in combination with a Svelte plugin to deliver a lightning-fast and feature-rich development experience with Hot Module Replacement (HMR), in which changes to your code are instantly reflected in the browser."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To get the best out of this tutorial, prior knowledge of Svelte is required, and ensure you have Node.JS version 16 or later installed. The code for this tutorial is available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/blog/sveltekit-crud"},"Github")),(0,a.kt)("h2",{id:"create-sveltekit-application"},"Create Sveltekit Application"),(0,a.kt)("p",null,"With the above requirements met, let's create a new ",(0,a.kt)("strong",{parentName:"p"},"Sveltekit application")," by running the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm create svelte@latest crud-app\n")),(0,a.kt)("p",null,"The above command will prompt you to select the configurations for your project. Your selection should look like the one in the screenshot below."),(0,a.kt)("br",null),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/terminal.png",alt:"terminal"}),(0,a.kt)("p",null,"Now change the directory into the project folder and install the required dependencies with the command below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd crud-app\nnpm install\n")),(0,a.kt)("p",null,"The above command will install all the required dependencies to run this application."),(0,a.kt)("h2",{id:"create-the-app-ui"},"Create the App UI"),(0,a.kt)("p",null,"Now let's create the UI for this application using ",(0,a.kt)("a",{parentName:"p",href:"https://sveltematerialui.com/"},"Sveltematerialui"),". This UI framework provides us with all the components we need to create our UI. It was developed to allow you to install the component you want, keeping your application as minimal as possible. "),(0,a.kt)("p",null,"To get started, run the command below to install the components we need. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm i -D @smui/button @smui/data-table @smui/dialog @smui/textfield @smui/linear-progress @smui/card\n")),(0,a.kt)("p",null,"The above comand will install the the ",(0,a.kt)("strong",{parentName:"p"},"button"),", ",(0,a.kt)("strong",{parentName:"p"},"textfield"),", and ",(0,a.kt)("strong",{parentName:"p"},"data-table")," components."),(0,a.kt)("p",null,"Next, add the ",(0,a.kt)("strong",{parentName:"p"},"Sveltematerial")," UI CDN to the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.html")," file to use the default theme."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/bare.min.css" />\n')),(0,a.kt)("p",null,"Then create a components folder in the src folder and create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Table.svelte")," file to add a data table to display the posts we'll get from the ",(0,a.kt)("strong",{parentName:"p"},"Refine-fake-API"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Table.svelte"',title:'"Table.svelte"'},'<DataTable table$aria-label="User list" style="width: 100%;">\n    <Head>\n        <Row>\n            <Cell numeric>ID</Cell>\n            <Cell>Title</Cell>\n            <Cell>Image</Cell>\n            <Cell>Date Created</Cell>\n            <Cell>Actions</Cell>\n        </Row>\n    </Head>\n    <Body>\n        {#each items as item (item.id)}\n            <Row>\n                <Cell numeric>{item.id}</Cell>\n                <Cell>{item.title}</Cell>\n                <Cell><img width="100" src="https://refine.ams3.cdn.digitaloceanspaces.comundefined" alt="" /></Cell>\n                <Cell>{item.createdAt}</Cell>\n                <Cell>\n                    <a href={`/post/${item.id}`}>Edit</a>\n                    <Button>Delete</Button>\n                </Cell>\n            </Row>\n        {/each}\n    </Body>\n\n    <LinearProgress\n        indeterminate\n        bind:closed={loaded}\n        aria-label="Data is being loaded..."\n        slot="progress"\n    />\n</DataTable>\n\n')),(0,a.kt)("p",null,"In the above code snippet, we have DataTable that will display the data from ",(0,a.kt)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev/"},(0,a.kt)("strong",{parentName:"a"},"Refine-fake-API")),". Each of the data we'll display on the table cell will have a corresponding ",(0,a.kt)("strong",{parentName:"p"},"edit")," and ",(0,a.kt)("strong",{parentName:"p"},"delete")," button to modify the details of the data."),(0,a.kt)("p",null,"Then import the components and declare the necessary variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Table.svelte"',title:'"Table.svelte"'},"<script lang=\"ts\">\n    import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';\n    import LinearProgress from '@smui/linear-progress';\n    import Button from '@smui/button';\n  \n\n    export let items: any[] = []\n    export let loaded = false\n<\/script>\n")),(0,a.kt)("p",null,"In the above code snippet, we imported the ",(0,a.kt)("strong",{parentName:"p"},"SMUI")," components we need, and we declared the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"loaded")," variables, which will be passed as props to this component.  "),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h2",{id:"read-blogs"},"Read Blogs"),(0,a.kt)("p",null,"Now in the ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.svelte")," routes, add the code snippets below to read posts from the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://api.fake-rest.refine.dev/"},"Refine-fake-API"))," using the Javascript ",(0,a.kt)("strong",{parentName:"p"},"fetch")," API, and so they are displayed on our data table."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="+page.svelte"',title:'"+page.svelte"'},"<script lang=\"ts\">\n  import { onMount } from 'svelte';\n  import Table from \"../components/Table.svelte\"\n\n  type Post = {\n    createdAt: Date;\n    image: any;\n    content: string;\n    title: string;\n    id: number;\n   };\n\n    let items: Post[] = [];\n    let loaded = false;\n\n    onMount(() => loadThings(false))\n\n    function loadThings(wait: boolean) {\n            if (typeof fetch !== 'undefined') {\n                loaded = false;\n\n                fetch('https://api.fake-rest.refine.dev/posts')\n                    .then((response) => response.json())\n                    .then((json) =>\n                        setTimeout(\n                            () => {\n                                items = json;\n                                loaded = true;\n                            },\n                            // Simulate a long load time.\n                            wait ? 2000 : 0\n                        )\n                    );\n            }\n    }\n<\/script>\n\n<Table items={items} loaded={loaded}/>\n")),(0,a.kt)("p",null,"In the above code snippet, we created a ",(0,a.kt)("strong",{parentName:"p"},"Post")," type to tell Typescript the objects we'll be accessing from the post data."),(0,a.kt)("p",null," Then we created the items variable to be a placeholder for the posts and created a ",(0,a.kt)("inlineCode",{parentName:"p"},"loadThings")," function to fetch data from the API and update the ",(0,a.kt)("inlineCode",{parentName:"p"},"items")," variable. The ",(0,a.kt)("inlineCode",{parentName:"p"},"loadThings")," function will be called when the components mount, which are implemented in Svelte using the ",(0,a.kt)("inlineCode",{parentName:"p"},"onMount")," decorator."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/list.png",alt:"list1"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"create-new-blog"},"Create New Blog"),(0,a.kt)("p",null,"With the read blog features out of the way, let's add a UI to allow the users to create new blog posts. To do that, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dialog.svelte")," file in the ",(0,a.kt)("strong",{parentName:"p"},"components")," folder and add the code snippet below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/Dialog.svelte"',title:'"components/Dialog.svelte"'},'<script lang="ts">\n// @ts-nocheck\nimport Dialog, { Title, Content, Actions } from \'@smui/dialog\';\nimport Textfield from \'@smui/textfield\';\nimport HelperText from \'@smui/textfield/helper-text\';\nimport CharacterCounter from \'@smui/textfield/character-counter\';\nimport Card from \'@smui/card\';\nimport Button from \'@smui/button\';\n\nlet title = \'\';\nlet content = \'\';\n\nexport let open = false;\n\n<\/script>\n<Dialog bind:open selection aria-labelledby="list-title" aria-describedby="list-content">\n    <Title id="list-title">Create New Post</Title>\n    <Content id="mandatory-content">\n        <Card padded>\n            <Textfield variant="outlined" bind:value={title} label="Title">\n                <HelperText slot="Title">Helper Text</HelperText>\n            </Textfield>\n            <br />\n            <Textfield textarea input$maxlength={2500} bind:value={content} label="Content">\n                <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>\n            </Textfield>\n            <br />\n            <Button on:click={createPost}>Create</Button>\n        </Card>\n    </Content>\n    <Actions>\n        <Button action="accept">Close</Button>\n    </Actions>\n</Dialog>\n')),(0,a.kt)("p",null,"In the above code snippet, we used the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dialog")," component to hide and show a modal, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Card")," to group the ",(0,a.kt)("inlineCode",{parentName:"p"},"Textfield")," together, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," component to submit the data. "),(0,a.kt)("p",null,"In the button, we created four variables, ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," to store the initial state of the modal which will be passed as props from the root route, ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," and  ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," to store the value of the input fields by binding them to the respective inputs."),(0,a.kt)("p",null,"Then we attached an event handler that calls the ",(0,a.kt)("inlineCode",{parentName:"p"},"createPost")," function, which will be created later to send a request to the ",(0,a.kt)("strong",{parentName:"p"},"Refine-fake-API"),"."),(0,a.kt)("p",null,"Now add the code snippets below in the script tag to create ",(0,a.kt)("inlineCode",{parentName:"p"},"createPost")," function. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/Dialog.svelte"',title:'"components/Dialog.svelte"'},"async function createPost() {\n    const res = await fetch(`https://api.fake-rest.refine.dev/posts`, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            title,\n            content,\n            createdAt: Date.now()\n        })\n    }).then((res) => {\n            res.json();\n            open = false;\n    });\n}\n")),(0,a.kt)("p",null,"In the above snippet,  Then we send a POST request to the ",(0,a.kt)("strong",{parentName:"p"},"createPost")," function and pass in our JSON data in the request body."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Refine-fake-API takes more data than we specified in the payload, we only send the data we want to display to the user.")),(0,a.kt)("p",null,"Lastly, add the code snippet below to the ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.svelte")," file to add a button that will show the modal. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="+page.svelte"',title:'"+page.svelte"'},"<script>\n  ...\n// highlight-start\nimport Button from '@smui/button';\nimport Dialog from '../components/Dialog.svelte';\n// highlight-end\n  ...\n<\/script>\n\n//highlight-next-line\nlet open = false;\n\n// highlight-start\n<div style=\"display:flex; justify-content:space-between\">\n    <Button on:click={() => (open = true)}>Add New</Button>\n</div>\n<Table {items} {loaded} />\n\n<Dialog {open} />\n// highlight-end\n")),(0,a.kt)("p",null,"In the above code snippets, we attached an event handler to change the value of the open variable to show the modal."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/create.png",alt:"create"}),(0,a.kt)("br",null),(0,a.kt)("hr",null),(0,a.kt)(m,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"update-blog"},"Update Blog"),(0,a.kt)("p",null,"To update the blog post, we'll create a Sveltekit dynamic route. This route will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of each blog as a param. Sveltekit implements ",(0,a.kt)("inlineCode",{parentName:"p"},"file-system-based")," routing, which means that your application routes are defined by your directories, and version 3 requires you to have a ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.svelte")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.server")," file in each of the directories. "),(0,a.kt)("p",null,"You can learn more about the Sveltekit routing ",(0,a.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/routing"},"here"),". Now create a ",(0,a.kt)("inlineCode",{parentName:"p"},"post/[id]")," folder in the ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," for the post route. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"[id]")," folder, create an ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.svelte")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.ts")," files and add the code snippet below in the ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.ts")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/** @type {import('./$types').PageLoad} */\nexport async function load({ params }) {\n    const { id } = params\n    const data = await fetch(`https://api.fake-rest.refine.dev/posts/${id}`).then(res => res.json());\n    return data\n}\n")),(0,a.kt)("p",null,"In the above code snippet, we have a load function that will load data from the API, and the function takes the params as an object, which gives us access to the params objects to access the post id in the URL. "),(0,a.kt)("p",null,"Then we send a request to the API to get a blog post whose Id is in the requested parameter. This will apply to all the blog posts we click. The load function will return a serializable JSON value which we can access in the ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.svelte")," page through the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," object."),(0,a.kt)("p",null,"Now add the code snippet below to the ",(0,a.kt)("inlineCode",{parentName:"p"},"+page.svelte")," page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="routes/post/[id]/+page.svelte"',title:'"routes/post/[id]/+page.svelte"'},"<script>\n    import Button from '@smui/button';\n    /** @type {import('./$types').PageData} */\n    export let data;\n    import Textfield from '@smui/textfield';\n    import HelperText from '@smui/textfield/helper-text';\n    import Card, { Content } from '@smui/card';\n    import CharacterCounter from '@smui/textfield/character-counter';\n    import { goto } from '$app/navigation';\n    let valueA = data.title;\n    let value = data.content;\n\n    async function editPost() {\n        const res = await fetch(`https://api.fake-rest.refine.dev/posts/${data.id}`, {\n            method: 'PATCH',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({\n                title: valueA,\n                content: value\n            })\n        }).then((res) => {\n            res.json();\n            goto('/');\n        });\n    }\n<\/script>\n\n<div class=\"card-display\">\n    <div class=\"card-container\">\n        <Card padded>\n            <Textfield variant=\"outlined\" bind:value={valueA} label=\"Edit Title\">\n                <HelperText slot=\"Edit Title\">Helper Text</HelperText>\n            </Textfield>\n            <br />\n            <Textfield textarea input$maxlength={2500} bind:value label=\"Edit Content\">\n                <CharacterCounter slot=\"internalCounter\">0 / 100</CharacterCounter>\n            </Textfield>\n            <br />\n            <Button on:click={editPost}>Edit</Button>\n        </Card>\n    </div>\n</div>\n")),(0,a.kt)("p",null,"In the above code snippet, we imported the components to create a UI for this page with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Card"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Textfield"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," components. In each of these components, we displayed the details post data in their values so the user can only edit the part they want."),(0,a.kt)("p",null," Then we created an ",(0,a.kt)("inlineCode",{parentName:"p"},"editPost")," function which sends a Put request to the API with the data we which to update in the payload as JSON."),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-02-sveltekit-crud-app/edit.png",alt:"edit"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"delete-blog"},"Delete Blog"),(0,a.kt)("p",null,"We also need to allow the users to delete posts. We have attached a delete button to the posts in the data table in the ",(0,a.kt)("inlineCode",{parentName:"p"},"components/Table.svelte")," file. So add the code snippet below in the script tag to delete a post from the API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="components/Table.svelte"',title:'"components/Table.svelte"'},"async function deletePost(id: number) {\n    const res = await fetch(`https://api.fake-rest.refine.dev/posts/${id}`, {\n        method: 'DELETE'\n    }).then((res) => {\n        res.json();\n        location.reload();\n    });\n}\n")),(0,a.kt)("p",null,"Then update the delete button to attach the function to an on:click event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<Button on:click={() => deletePost(item.id)}>Delete</Button>\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Throughout this tutorial, we've implemented how to create a CRUD application using ",(0,a.kt)("strong",{parentName:"p"},"Sveltekit"),". We started by knowing what ",(0,a.kt)("strong",{parentName:"p"},"Sveltekit")," is all about. Then we built a blog application for the demonstration. Now that you have the knowledge you seek, how would you use ",(0,a.kt)("strong",{parentName:"p"},"Sveltekit")," in your next project? Perhaps you can learn more about Sveltekit from the ",(0,a.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/introduction"},"documentation"),". "),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(h,{path:"blog-sveltekit-crud",mdxType:"CodeSandboxExample"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,a.kt)("p",null,"Modern CRUD applications are required to consume data from many different sources from custom API\u2019s to backend services like Supabase, Hasura, Airtable and Strapi."),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine"),", if you are interested in a backend agnostic, headless framework which can connect 15+ data sources thanks to built-in providers and community plugins."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/refinedev/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is an open-source React-based framework for building CRUD applications ",(0,a.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,a.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,a.kt)("strong",{parentName:"p"},"styling"),", ",(0,a.kt)("strong",{parentName:"p"},"customization")," and ",(0,a.kt)("strong",{parentName:"p"},"project workflow.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,a.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects."))}f.isMDXComponent=!0}}]);