"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[66352],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?o.createElement(h,l(l({ref:t},p),{},{components:a})):o.createElement(h,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var d=2;d<i;d++)l[d]=a[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97808:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>c});a(67294);var o=a(3905);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const r={title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",slug:"material-ui-modal",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/social.png",hide_table_of_contents:!1},s=void 0,d={permalink:"/blog/material-ui-modal",source:"@site/blog/2023-05-09-material-ui-modal.md",title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",date:"2023-05-09T00:00:00.000Z",formattedDate:"May 9, 2023",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"}],readingTime:11.225,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",slug:"material-ui-modal",authors:"doro_onome",tags:["material-ui","react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/social.png",hide_table_of_contents:!1},prevItem:{title:"refine.new - Introducing the Fastest Way to Create refine Apps",permalink:"/blog/what-is-refine-new"},nextItem:{title:"How to implement a date picker in React",permalink:"/blog/react-date-picker"},relatedPosts:[{title:"OTP Authentication with Supabase and Twilio in React",description:"We'll implement OTP(SMS) authorization using Twilio and Supabase in React app.",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:12.855,date:"2022-09-22T00:00:00.000Z"},{title:"How to use Material UI Checkbox",description:"We'll discover the Material UI Checkbox component with examples",permalink:"/blog/material-ui-checkbox-component",formattedDate:"December 15, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.505,date:"2022-12-15T00:00:00.000Z"},{title:"Building a React Admin Dashboard with refine",description:"We will be building a Complete React CRUD application using refine and Airtable, a famous backend service to illustrate how you can power your applications with refine.",permalink:"/blog/building-react-admin-dashboard",formattedDate:"April 6, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:37.895,date:"2023-04-06T00:00:00.000Z"}],authorPosts:[{title:"Material UI Icons in React",description:"A complete guide on using Material UI Icons in a React app",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.58,date:"2022-08-24T00:00:00.000Z"},{title:"How to use Material UI Card Component",description:"We'll discover the Material UI Card component with examples",permalink:"/blog/material-ui-card",formattedDate:"January 4, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.205,date:"2023-01-04T00:00:00.000Z"},{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:12.835,date:"2022-09-18T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI?",id:"what-is-material-ui",level:2},{value:"Getting started with Material UI Modal",id:"getting-started-with-material-ui-modal",level:2},{value:"Material UI Modal props",id:"material-ui-modal-props",level:2},{value:"Customizing your Material UI Modal",id:"customizing-your-material-ui-modal",level:2},{value:"Material UI Modal Transitions",id:"material-ui-modal-transitions",level:2},{value:"Nested Modals",id:"nested-modals",level:3},{value:"Optimizing Material UI Modal performance",id:"optimizing-material-ui-modal-performance",level:3},{value:"Server-side modal",id:"server-side-modal",level:3},{value:"Material UI Modal limitations",id:"material-ui-modal-limitations",level:2},{value:"Focus Trap",id:"focus-trap",level:3},{value:"Material UI Modal Accessibility",id:"material-ui-modal-accessibility",level:2},{value:"Building an Edit form popup with React and Material UI Modal",id:"building-an-edit-form-popup-with-react-and-material-ui-modal",level:2},{value:"Conclusion",id:"conclusion",level:2}],m=(u="PromotionBanner",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const h={toc:c};function g(e){var{components:t}=e,a=l(e,["components"]);return(0,o.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),o.forEach((function(t){n(e,t,a[t])}))}return e}({},h,a),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Material UI is a popular front-end library for React that provides a comprehensive set of tools for creating user interfaces. One of the most valuable components of Material UI is the Modal, which allows developers to create a popup window that can display important information or facilitate user input. This tutorial will explain how to use the Material UI Modal and customize it to your needs. "),(0,o.kt)("h2",{id:"what-is-material-ui"},"What is Material UI?"),(0,o.kt)("p",null,"Material UI is an open-source library of UI components created and maintained by Google. It employs Google's Material Design system, a visual language developed to unify the user experience across its products and platforms. Material UI components provide users with a natural and intuitive interface, making it easier to create products that look and feel the same across all devices. Material UI components are also highly customisable and can be tailored to the specific requirements of any project."),(0,o.kt)("p",null,"Material UI comprises several components and utilities that aid web design. The Material UI Modal is one of those utilities that aid visualization in a web app.  "),(0,o.kt)("h2",{id:"getting-started-with-material-ui-modal"},"Getting started with Material UI Modal"),(0,o.kt)("p",null,"The modal component is a solid foundation for creating dialogs, popovers, light boxes, and other interactive elements. Material UI Modal is a JavaScript library that you can use to create modal dialogs and pop-ups in web applications. It is lightweight and straightforward to use, with features such as customizing the look and feel of the modal, changing the size and position, and adding animation effects."),(0,o.kt)("p",null,"To start using the Material UI Modal, include the library and its stylesheet in your HTML page. Then you can create a modal window and customize its content, size, and animation effects.  Finally, you can add the modal to the page using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mui-modal")," class. With Material UI Modal, you can easily create modal windows for user interaction and feedback in your web application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\nimport Modal from '@mui/material/Modal';\n\nconst style = {\n  position: 'absolute' as 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function BasicModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div style={{margin: '25%'}}>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"modal-modal-title\"\n        aria-describedby=\"modal-modal-description\"\n      >\n        <Box sx={style}>\n          <Typography id=\"modal-modal-title\" variant=\"h6\" component=\"h2\">\n            Modal Header\n          </Typography>\n          <Typography id=\"modal-modal-description\" sx={{ mt: 2 }}>\n            Modal content\n          </Typography>\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n\n")),(0,o.kt)("p",null,"The code above illustrates how to use a simple Material UI Modal with the provided utilities to convey a message or display an alert like this:"),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/first-min.gif",alt:"MUI Modal"}),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that"),': The term "modal" is sometimes used interchangeably with "dialog," but this is incorrect. A modal window describes various aspects of a user interface. An element is considered a modal if it prevents interaction with the rest of the application. In Material UI, Modal is a lower-level concept used by Dialog, Drawer, Popup and Menu components.'),(0,o.kt)("h2",{id:"material-ui-modal-props"},"Material UI Modal props"),(0,o.kt)("p",null,"Material UI Modals are components that are used to both display important information to the user and receive user input. Modals are useful when you want to limit user interaction with the rest of the page but still require user input.. Props such as the title, size, and backdrop allow you to tailor the modal to your specific requirements. You can also change the modal's content by passing a component as a prop."),(0,o.kt)("p",null,"The following is a list of the various props that you can use with the Material UI Modal component. We can access them and modify them according to our needs."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"open"),": This prop controls the Modal's visibility. It only accepts Boolean values."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onClose"),": A callback function that is called when the Modal is closed."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"disableEscapeKeyDown"),": You can use this prop to disable the escape key press, a keyboard shortcut for closing the Modal. It only accepts Boolean values."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fullWidth"),": This prop controls the Modal's width. It takes a Boolean value."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BackdropProps"),": This prop customizes the Modal's backdrop. It accepts a prop object."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"disableBackdropClick"),": This prop disables the backdrop click, which is the click on the Modal's outside to close it. It only accepts Boolean values\nE.t.c."),(0,o.kt)("hr",null),(0,o.kt)(m,{isDark:!0,title:"Open-source enterprise application platform for serious web developers",description:"refineNew",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/quick-start.gif",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"customizing-your-material-ui-modal"},"Customizing your Material UI Modal"),(0,o.kt)("p",null,"Customizing your Material UI Modal is a great way to make your website more user-friendly and visually appealing. With Material UI Modal, you can customize the look and feel of your website with a few simple steps. You can change the size, color, and other elements of the modal to match the overall design of your website. You can also add custom animations and transitions to the modal, making it more interactive and enjoyable for your users. With Material UI Modal, you can create an engaging and interactive experience for your website visitors. "),(0,o.kt)("h2",{id:"material-ui-modal-transitions"},"Material UI Modal Transitions"),(0,o.kt)("p",null,"Material UI Modal transitions are used to create a smooth and seamless transition within a modal or between two different modals. You can use a ",(0,o.kt)("inlineCode",{parentName:"p"},"transition")," component to animate the modal's open/close state, but under the following conditions:"),(0,o.kt)("p",null,"It must be a direct descendant of the modal\nHave an ",(0,o.kt)("inlineCode",{parentName:"p"},"in")," prop that corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"open"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"closed")," state\nCall the ",(0,o.kt)("inlineCode",{parentName:"p"},"onEnter")," callback prop when the enter transition begins\nCall the ",(0,o.kt)("inlineCode",{parentName:"p"},"onExited")," callback prop when the exit transition is completed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Backdrop from '@mui/material/Backdrop';\nimport Box from '@mui/material/Box';\nimport Modal from '@mui/material/Modal';\nimport Fade from '@mui/material/Fade';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function TransitionsModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div style={{margin: '25%'}}>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        aria-labelledby=\"transition-modal-title\"\n        aria-describedby=\"transition-modal-description\"\n        open={open}\n        onClose={handleClose}\n        closeAfterTransition\n        BackdropComponent={Backdrop}\n        BackdropProps={{\n          timeout: 500,\n        }}\n      >\n        <Fade in={open}>\n          <Box sx={style}>\n            <Typography id=\"transition-modal-title\" variant=\"h6\" component=\"h2\">\n              Modal Header\n            </Typography>\n            <Typography id=\"transition-modal-description\" sx={{ mt: 2 }}>\n              Modal Content\n            </Typography>\n          </Box>\n        </Fade>\n      </Modal>\n    </div>\n  );\n}\n\n")),(0,o.kt)("p",null,"When the modal is closed and fully transitioned, the ",(0,o.kt)("inlineCode",{parentName:"p"},"onEnter")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"onExited")," events allow it to unmount the child content like this:"),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/transition-min.gif",alt:"MUI Modal"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"nested-modals"},"Nested Modals"),(0,o.kt)("p",null,"Modal dialogs nested within other modal dialogs are known as nested modals. This feature lets users view and interact with multiple modal windows simultaneously on the same page. Nested modals can create a more complex user interface with various layers of information or simplify the user experience by providing a more efficient workflow. Nested modals can also be helpful in displaying data more understandably and providing additional context for a user's actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Modal from '@mui/material/Modal';\nimport Button from '@mui/material/Button';\n\nconst style = {\n  position: 'absolute' as 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  pt: 2,\n  px: 4,\n  pb: 3,\n};\n\nfunction ChildModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <React.Fragment>\n      <Button onClick={handleOpen}>Open Child Modal</Button>\n      <Modal\n        hideBackdrop\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"child-modal-title\"\n        aria-describedby=\"child-modal-description\"\n      >\n        <Box sx={{ ...style, width: 200 }}>\n          <h2 id=\"child-modal-title\">Child Header</h2>\n          <p id=\"child-modal-description\">\n            Child Header Content\n          </p>\n          <Button onClick={handleClose}>Close Child Modal</Button>\n        </Box>\n      </Modal>\n    </React.Fragment>\n  );\n}\n\nexport default function NestedModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"parent-modal-title\"\n        aria-describedby=\"parent-modal-description\"\n      >\n        <Box sx={{ ...style, width: 400 }}>\n          <h2 id=\"parent-modal-title\">Modal Header</h2>\n          <p id=\"parent-modal-description\">\n            Modal content\n          </p>\n          <ChildModal />\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"The code above showcases Material UI Modal components nested as two clickable modal components."),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/nested-min.gif",alt:"MUI Modal"}),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"optimizing-material-ui-modal-performance"},"Optimizing Material UI Modal performance"),(0,o.kt)("p",null,"Optimizing Material UI Modal performance is essential to ensure the best user experience. You can easily optimize your Material UI Modal by reducing the number of modal components, using the correct animation techniques, and avoiding unnecessary event listeners. Additionally, it is crucial to use progressive loading techniques, such as lazy loading, to prevent unnecessary resources from loading and impacting the overall performance. Lastly, developers should use proper caching strategies and optimize the loading order of assets to ensure that the modal is rendered as quickly as possible."),(0,o.kt)("p",null,"Additionally, if you need to make the content search engine friendly or render expensive component trees inside your modal while optimizing for interaction responsiveness, you should change the default behavior by enabling the 'keepMounted' prop, as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Modal keepMounted />\n")),(0,o.kt)("h3",{id:"server-side-modal"},"Server-side modal"),(0,o.kt)("p",null,"On the server, React does not support the createPortal() API. To display the modal, disable the portal feature using the disablePortal prop."),(0,o.kt)("h2",{id:"material-ui-modal-limitations"},"Material UI Modal limitations"),(0,o.kt)("h3",{id:"focus-trap"},"Focus Trap"),(0,o.kt)("p",null,"If the component tries to escape the modal, the Material UI Modal defaults to returning the focus to the component's body. This is done to improve accessibility. However, it may cause problems with the app's overall UX. If users need to interact with another part of the page, such as a menu or navbar, you can disable the Material UI Modal default setting as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Modal disableEnforceFocus />\n")),(0,o.kt)("h2",{id:"material-ui-modal-accessibility"},"Material UI Modal Accessibility"),(0,o.kt)("p",null,"Material UI Modal accessibility is an important feature to consider when creating a user interface. It ensures users can effectively interact with the modal, regardless of their abilities. The modal must be visible, and the user must be able to easily access the content without any difficulty. Additionally, the modal must be accessible to users with disabilities, such as those who are visually impaired. Finally, the modal must be compatible with assistive technologies, such as screen readers, to ensure users with disabilities can access the content."),(0,o.kt)("p",null,"Here are a few ways in which you can make your Material UI Modal accessible"),(0,o.kt)("p",null,"Focus Management: The WAI-ARIA best practices for managing focus within the modal dialog should be followed by Material UI modal components. When the modal dialog is opened, the focus should be set to the modal dialog, trapped within the modal dialog, and restored to the element that opened the modal dialog when it is closed."),(0,o.kt)("p",null,"Keyboard Interaction: Material UI modal components should follow the WAI-ARIA best practices for keyboard interaction. This should include providing keyboard shortcuts to open and close the modal dialog and keyboard navigation within the modal dialog. "),(0,o.kt)("p",null,"Screen Reader Support: Material UI modal components should follow the WAI-ARIA best practices for screen reader support. This should include providing roles, labels, and descriptive text for screen readers to understand and interact with the modal dialog. "),(0,o.kt)("p",null,"High Contrast: Material UI modal components should provide high contrast options to ensure that users with low vision can read the content of the modal dialog. "),(0,o.kt)("p",null,"Resizable Text: Material UI modal components should provide an option to resize the text within the modal dialog to ensure low-vision users can read the content."),(0,o.kt)("h2",{id:"building-an-edit-form-popup-with-react-and-material-ui-modal"},"Building an Edit form popup with React and Material UI Modal"),(0,o.kt)("p",null,"Using React and Material UI Modal to create an edit form popup is a great way to create an interactive and responsive form quickly. The Material UI Modal component allows for creating a popup with a few lines of code, and the React framework makes it simple to customize the form to the user's specific requirements. Developers can create a quick and simple edit form popup using the React and Material UI Modal combination like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\nimport Modal from '@mui/material/Modal';\nimport contactImage from '../Images/My Photo.jpg'\nimport EditIcon from '@mui/icons-material/Edit';\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function BasicModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div>\n\n      <section>\n      <Button onClick={handleOpen}><p style={{marginLeft: '75%'}}>Edit contact</p><EditIcon></EditIcon></Button>\n        <div class='img-div'>\n        <img src={contactImage} alt= '' />\n        </div>\n        <h2><span>Doro Onome</span></h2>\n        <h2><span>nomzykush@gmail.com</span></h2>\n        <h2><span>09015618845</span></h2>\n      </section>\n\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"modal-modal-title\"\n        aria-describedby=\"modal-modal-description\"\n      >\n        <Box sx={style}>\n          <Typography id=\"modal-modal-title\" variant=\"h6\" component=\"h2\">\n            Edit Contact Details\n          </Typography>\n          <Typography id=\"modal-modal-description\" sx={{ mt: 2 }}>\n            <div className='edit-container'>\n               <label for=\"\">Edit Contact Name</label>\n               <input type=\"text\"/>\n               <label for=\"\">Edit Contact Email</label>\n               <input type=\"text\"/>\n               <label for=\"\">Edit Contact Image</label>\n               <input type=\"file\"/>\n               </div>\n            \n                            <button class=\"edit-btn\">Save</button>\n          </Typography>\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"The code above represents a simple contact management page UI where users can easily edit contact details with the Material UI Modal. "),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-05-09-material-ui-modal/edit-form-min.gif",alt:"MUI Modal"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Material UI Modal is an excellent tool for creating a modal window with a native look and feel. It provides a great user experience with its simple and intuitive design. It is also highly customizable, allowing developers to create modal windows with their custom styles. This article thoroughly reviewed the Material UI Modal component and explored a use case in the form of an editable contact page UI.  With its responsive design and wide range of options, Material UI Modal is a great solution for web developers looking to create modal windows for their projects."))}g.isMDXComponent=!0}}]);