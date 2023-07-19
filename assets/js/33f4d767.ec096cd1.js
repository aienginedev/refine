"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33967],{78406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(53787),o=n(50551);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={id:"create-project",title:"3. Creating your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}},u=void 0,c={unversionedId:"tutorial/getting-started/mantine/create-project",id:"tutorial/getting-started/mantine/create-project",title:"3. Creating your refine project",description:"Launch the refine CLI setup",source:"@site/docs/tutorial/1-getting-started/mantine/2-create-project.md",sourceDirName:"tutorial/1-getting-started/mantine",slug:"/tutorial/getting-started/mantine/create-project",permalink:"/docs/tutorial/getting-started/mantine/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/mantine/2-create-project.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1689763953,formattedLastUpdatedAt:"Jul 19, 2023",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Creating your refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},m={},d=[{value:"Launch the refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},f=h("Checklist"),g=h("ChecklistItem"),y={toc:d};function v(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"launch-the-refine-cli-setup"},"Launch the refine CLI setup"),(0,r.kt)("p",null,"The easiest way to create a new project is using the ",(0,r.kt)("strong",{parentName:"p"},"refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Launch your terminal and type the following command using your preferred package manager:"),(0,r.kt)(a.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create refine-app@latest -- -o refine-mantine tutorial\n"))),(0,r.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create refine-app@latest -- -o refine-mantine tutorial\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create refine-app -- -o refine-mantine tutorial\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Only supports yarn@1 version."))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,r.kt)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-o refine-mantine")," flag in the command above tells the CLI to install the project with the ",(0,r.kt)("inlineCode",{parentName:"p"},"refine-mantine")," preset. This preset selects some of the options for you in accordance with this tutorial. Outside of this tutorial, you can skip this flag and select your own options.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The CLI will then ask if you agree to share your selection anonymously with the ",(0,r.kt)("strong",{parentName:"p"},"refine")," team. This is for measuring community preferences. You can learn more about it here: ",(0,r.kt)("a",{parentName:"p",href:"docs/further-readings/telemetry/"},"Telemetry"),"."))),(0,r.kt)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey."),(0,r.kt)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open VS Code and select the directory that was generated during your setup process.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,r.kt)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal."),(0,r.kt)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,r.kt)("p",null,"Previewing your project while you work on it is important. To open it as a webpage, the project must be running in development(dev) mode."),(0,r.kt)("h4",null,"Start the dev server"),(0,r.kt)("p",null,"To start the dev server, run the following command in your terminal:"),(0,r.kt)(a.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,r.kt)(o.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,r.kt)("p",null,"You should see confirmation in the terminal that the ",(0,r.kt)("strong",{parentName:"p"},"refine")," app is running in dev mode."),(0,r.kt)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,r.kt)("p",null,"Your project files contain all the code you need to run your app. To see a preview of your app in the browser:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet. We will take care of that in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages"},"Next section")))),(0,r.kt)("p",null,"Here's what you should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { Refine } from "@refinedev/core";\nimport routerBindings from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n    notificationProvider,\n    LightTheme,\n    Layout,\n    ErrorComponent,\n    WelcomePage,\n} from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\nimport { MantineProvider, Global } from "@mantine/core";\n\nconst App = () => {\n    return (\n        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <BrowserRouter>\n                    <Refine\n                        routerProvider={routerBindings}\n                        dataProvider={dataProvider(\n                            "https://api.fake-rest.refine.dev",\n                        )}\n                        notificationProvider={notificationProvider}\n                    >\n                        <Routes>\n                            <Route index element={<WelcomePage />} />\n                        </Routes>\n                    </Refine>\n                </BrowserRouter>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nrender(<App />);\n')),(0,r.kt)(f,{mdxType:"Checklist"},(0,r.kt)(g,{id:"getting-started-mantine",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,r.kt)(g,{id:"getting-started-mantine-2",mdxType:"ChecklistItem"},"I have run the dev server and previewed my app.")))}v.isMDXComponent=!0}}]);