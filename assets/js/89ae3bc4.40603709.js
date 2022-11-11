"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,k=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"001 - A GitHub Action?"},o=void 0,s={unversionedId:"concepts/001",id:"concepts/001",title:"001 - A GitHub Action?",description:"- [x] What is a GitHub Action",source:"@site/docs/concepts/001.md",sourceDirName:"concepts",slug:"/concepts/001",permalink:"/github-actions/concepts/001",draft:!1,tags:[],version:"current",frontMatter:{title:"001 - A GitHub Action?"},sidebar:"concepts"},c={},l=[{value:"What is a GitHub Action",id:"what-is-a-github-action",level:2},{value:"Where can I use them?",id:"where-can-i-use-them",level:2},{value:"What are the core components?",id:"what-are-the-core-components",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"TODAY I LEARNED",type:"info"},(0,r.kt)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","What is a GitHub Action"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Where can I use them?"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","What are the core components?"))),(0,r.kt)("h2",{id:"what-is-a-github-action"},"What is a GitHub Action"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"},"GitHub Action is")," a CI/CD platform to help you ",(0,r.kt)("em",{parentName:"p"},"automate your build, test and deployment pipeline")," by defining relevant workflows in files within the ",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows")," folder."),(0,r.kt)("p",null,"Workflows can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"be triggered by relevant events on your GitHub repository"),(0,r.kt)("li",{parentName:"ul"},"perform a wide variety of jobs (build, test, modify, publish etc.)"),(0,r.kt)("li",{parentName:"ul"},"run in GitHub-hosted VMs (Linux, Windows, macOS) or in a self-hosted runner (on-premises, in-cloud).")),(0,r.kt)("h2",{id:"where-can-i-use-them"},"Where can I use them?"),(0,r.kt)("p",null,"Use GitHub actions for any job that can be ",(0,r.kt)("em",{parentName:"p"},"automated")," (executed as a defined set of steps, in a hosted runner environment) and ",(0,r.kt)("em",{parentName:"p"},"triggered")," (execution is associated with a specific event or condition in the repository), for your given repo."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace?category=&query=&type=actions&verification="},"GitHub Marketplace")," is a good place to explore examples, grouped into categories like ",(0,r.kt)("em",{parentName:"p"},"API Management"),", ",(0,r.kt)("em",{parentName:"p"},"Code Quality"),", ",(0,r.kt)("em",{parentName:"p"},"Testing")," etc. Here are some examples from different categories, to give a sense of the functionality they can support."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Code Quality")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/hashicorp-s-link-checker"},"HashiCorp's LinkChecker")," can automate checking for broken links in a repo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Code Review")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/inclusiveness-analyzer"},"Microsoft's Inclusiveness Analyzer")," checks your repo for offensive or exclusive terms"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Testing")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/azure-load-testing"},"Microsoft's Azure Load Testing")," action can simulate traffic to test diverse load conditions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Publishing")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/marketplace/actions/upload-github-pages-artifact"},"Upload GitHub Pages Artifact")," for preparing static assets for uploading to GitHub Pages.")),(0,r.kt)("h2",{id:"what-are-the-core-components"},"What are the core components?"),(0,r.kt)("p",null,"The figure below gives a high-level view of a GitHub Action - effectively a ",(0,r.kt)("strong",{parentName:"p"},"workflow")," that can be automated to run based on the occurence of trigger events."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://docs.github.com/assets/cb-25535/images/help/images/overview-actions-simple.png",alt:"Components Of An Action"})),(0,r.kt)("p",null,"The key concepts or components to know are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Workflow")," - defined in a YAML file under ",(0,r.kt)("inlineCode",{parentName:"li"},".github/workflows"),". | ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-workflows/about-workflows"},"See Docs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Triggers")," - events that make a workflow run, can be internal, external, manual or sceheduled. | ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"},"See Docs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Jobs")," - main unit of runnable work within workflow, can be run in sequence or in parallel. | ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-jobs/using-jobs-in-a-workflow"},"See Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Runners")," - machines that run ",(0,r.kt)("em",{parentName:"li"},"jobs")," in a workflow, can be self-hosted or GitHub-hosted | ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources"},"See Docs"))),(0,r.kt)("p",null,"Jobs are defined by one or more ",(0,r.kt)("inlineCode",{parentName:"p"},"steps")," where a step can be a ",(0,r.kt)("em",{parentName:"p"},"script")," (with executable commands) or a ",(0,r.kt)("em",{parentName:"p"},"reference")," (to another action)"))}u.isMDXComponent=!0}}]);