"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94461],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36713:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=n(31783),l=["components"],s={id:"auth0",title:"Auth0 Login"},u=void 0,d={unversionedId:"guides-and-concepts/auth/auth0",id:"version-1.0.xx/guides-and-concepts/auth/auth0",isDocsHomePage:!1,title:"Auth0 Login",description:"Auth0 is a flexible, drop-in solution for adding authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users. You can check the Auth0 document for details.",source:"@site/versioned_docs/version-1.0.xx/guides-and-concepts/auth/auth0.md",sourceDirName:"guides-and-concepts/auth",slug:"/guides-and-concepts/auth/auth0",permalink:"/docs/1.0.xx/guides-and-concepts/auth/auth0",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/guides-and-concepts/auth/auth0.md",tags:[],version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"auth0",title:"Auth0 Login"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"Base64 Upload",permalink:"/docs/1.0.xx/guides-and-concepts/upload/base64-upload"},next:{title:"Search",permalink:"/docs/1.0.xx/guides-and-concepts/search/search"}},c=[{value:"Installation",id:"installation",children:[{value:"Configure the Auth0Provider component",id:"configure-the-auth0provider-component",children:[],level:4}],level:3},{value:"Override login page",id:"override-login-page",children:[],level:3},{value:"Auth Provider",id:"auth-provider",children:[{value:"login",id:"login",children:[],level:4},{value:"logout",id:"logout",children:[],level:4},{value:"checkError &amp; getPermissions",id:"checkerror--getpermissions",children:[],level:4},{value:"checkAuth",id:"checkauth",children:[],level:4},{value:"getUserIdentity",id:"getuseridentity",children:[],level:4}],level:3},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/"},"Auth0")," is a flexible, drop-in solution for adding authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users. You can check the ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/docs"},"Auth0 document")," for details."),(0,i.kt)("p",null,"We will show you how to use Auth0 with refine"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Run the following command within your project directory to install the Auth0 React SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @auth0/auth0-react\n")),(0,i.kt)("h4",{id:"configure-the-auth0provider-component"},"Configure the Auth0Provider component"),(0,i.kt)("p",null,"Wrap your root component with an Auth0Provider that you can import from the SDK."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.tsx" {4, 10-16}',title:'"index.tsx"',"{4,":!0,"10-16}":!0},'import React from "react";\nimport ReactDOM from "react-dom";\n\nimport { Auth0Provider } from "@auth0/auth0-react";\n\nimport App from "./App";\n\nReactDOM.render(\n    <React.StrictMode>\n        <Auth0Provider\n            domain="YOUR_DOMAIN"\n            clientId="YOUR_CLIENT_ID"\n            redirectUri={window.location.origin}\n        >\n            <App />\n        </Auth0Provider>\n    </React.StrictMode>,\n    document.getElementById("root"),\n);\n')),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/docs/quickstart/spa/react#configure-auth0"},(0,i.kt)("strong",{parentName:"a"},"Auth0 docs"))," for detailed configuration."))),(0,i.kt)("h3",{id:"override-login-page"},"Override login page"),(0,i.kt)("p",null,"First, we need to override the ",(0,i.kt)("strong",{parentName:"p"},"refine")," login page. In this way, we will redirect it to the Auth0 login page. We create a ",(0,i.kt)("inlineCode",{parentName:"p"},"login.tsx")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/pages")," folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/pages/login.tsx" {8, 12, 53}',title:'"/pages/login.tsx"',"{8,":!0,"12,":!0,"53}":!0},'import { \n    Row,\n    Col,\n    AntdLayout,\n    Card,\n    Typography,\n    Button,\n    useLogin\n} from "@pankod/refine";\n\nexport const Login: React.FC = () => {\n    const { mutate: login } = useLogin();\n\n    const CardTitle = (\n        <div\n            style={{\n                display: "flex",\n                alignItems: "center",\n                justifyContent: "center",\n                height: "60px",\n            }}\n        >\n            <img src="./refine.svg" alt="Logo" />\n        </div>\n    );\n\n    return (\n        <AntdLayout\n            style={{\n                backgroundColor: "#eff7f7",\n            }}\n        >\n            <Row\n                justify="center"\n                align="middle"\n                style={{\n                    height: "100vh",\n                }}\n            >\n                <Col xs={22}>\n                    <Card\n                        style={{\n                            maxWidth: "400px",\n                            margin: "auto",\n                        }}\n                        title={CardTitle}\n                    >\n                        <Button\n                            type="primary"\n                            size="large"\n                            htmlType="submit"\n                            block\n                            onClick={() => login({})}\n                        >\n                            Login\n                        </Button>\n                        <br />\n                        <br />\n                        <div\n                            style={{ textAlign: "center", padding: "10px 0px" }}\n                        >\n                            <Typography.Text>\n                                Still no account? Please go to\n                                <a href="#"> Sign up</a>\n                            </Typography.Text>\n                        </div>\n                    </Card>\n                </Col>\n            </Row>\n        </AntdLayout>\n    );\n};\n')),(0,i.kt)("p",null,"After clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Login")," button, you will be directed to the auth0 login screen."),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:a.Z,alt:"auth0-login"})),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"auth-provider"},"Auth Provider"),(0,i.kt)("p",null,"In refine, authentication and authorization processes are performed with the auth provider. Let's write a provider for Auth0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport { useAuth0 } from "@auth0/auth0-react";\n\nimport { Login } from "pages/login";\n\nimport axios from "axios";\n\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App = () => {\n    const {\n        isLoading,\n        loginWithRedirect,\n        isAuthenticated,\n        user,\n        logout,\n        getIdTokenClaims,\n    } = useAuth0();\n\n    if (isLoading) {\n        return <span>loading...</span>;\n    }\n\n    const authProvider: AuthProvider = {\n        login: () => {\n            loginWithRedirect();\n            return Promise.resolve();\n        },\n        logout: () => {\n            logout({ returnTo: window.location.origin });\n            return Promise.resolve("/");\n        },\n        checkError: () => Promise.resolve(),\n        checkAuth: () => {\n            if (isAuthenticated) {\n                return Promise.resolve();\n            }\n\n            return Promise.reject();\n        },\n        getPermissions: () => Promise.resolve(),\n        getUserIdentity: () => {\n            if (user) {\n                return Promise.resolve({\n                    ...user,\n                    avatar: user.picture,\n                });\n            }\n        },\n    };\n\n    getIdTokenClaims().then((token) => {\n        if (token) {\n            axios.defaults.headers.common = {\n                Authorization: `Bearer ${token.__raw}`,\n            };\n        }\n    });\n\n    return (\n        <Refine\n            LoginPage={Login}\n            authProvider={authProvider}\n            dataProvider={dataProvider(API_URL, axios)}\n        >\n            ...\n        </Refine>\n    );\n};\n\nexport default App;\n')),(0,i.kt)("h4",{id:"login"},"login"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"loginWithRedirect")," method comes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,i.kt)("h4",{id:"logout"},"logout"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"logout")," method comes from the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,i.kt)("h4",{id:"checkerror--getpermissions"},"checkError & getPermissions"),(0,i.kt)("p",null,"We revert to empty promise because Auth0 does not support it."),(0,i.kt)("h4",{id:"checkauth"},"checkAuth"),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"isAuthenticated")," method, which returns the authentication status of the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,i.kt)("h4",{id:"getuseridentity"},"getUserIdentity"),(0,i.kt)("p",null,"We can use it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"useAuth0")," hook."),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("p",null,"Auth0 example doesn't work in codesandbox embed mode. With ",(0,i.kt)("a",{parentName:"p",href:"https://ussft.csb.app/"},"this")," link, you can open the example in the browser and try it."),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-auth0-example-ussft?autoresize=1&fontsize=14&module=%2Fsrc%2FApp.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-auth0-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}h.isMDXComponent=!0},31783:function(e,t,n){t.Z=n.p+"assets/images/auth0-login-f693a3bc68fbf5b7698e2088b4743b51.gif"}}]);