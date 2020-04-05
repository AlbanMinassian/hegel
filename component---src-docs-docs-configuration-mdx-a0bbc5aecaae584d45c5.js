(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{1317:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n(17),n(4),n(3),n(1),n(12),n(11),n(22);var i=n(59),a=n(65);n(36);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/configuration.mdx"}});var r={_frontmatter:l},c=a.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(c,o({},r,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"configuration"},"Configuration"),Object(i.b)("hr",null),Object(i.b)("p",null,"Hegel initialy uses default configuration, but if you want to ignore some files inside your project or say to Hegel that you have specific environment (",Object(i.b)("a",o({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js")," for example) then you need to configure Hegel manually."),Object(i.b)("p",null,"To eject default configuration run:"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-bash"}),"$ hegel init\nProject initialized.\n")),Object(i.b)("p",null,"After command will be executed ",Object(i.b)("inlineCode",{parentName:"p"},".hegelrc")," file will be created."),Object(i.b)("p",null,"By default ",Object(i.b)("inlineCode",{parentName:"p"},".hegelrc")," uses ",Object(i.b)("a",o({parentName:"p"},{href:"https://yaml.org/"}),"YAML")," format. But you have ability to choose between YAML and JSON."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},".hegelrc")," consists of 4 sections:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#environment"}),"environment")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#exclude"}),"exclude")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#include"}),"include")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"#typings"}),"typings"))),Object(i.b)("h2",{id:"environment"},"environment"),Object(i.b)("p",null,'Array of string, which defines specific environment that should be used. For now only "nodejs" and "browser" options existed. With default Hegel configuration none environment will be included.'),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"environment:\n  - browser\n  - nodejs\n")),Object(i.b)("h2",{id:"exclude"},"exclude"),Object(i.b)("p",null,"Array of ",Object(i.b)("a",o({parentName:"p"},{href:"https://commandbox.ortusbooks.com/usage/parameters/globbing-patterns"}),"glob-pattern string"),' that defines which files should be ignored for analysis. With default Hegel configuration all "node_modules" files will be excluded.'),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"exclude:\n  - ./node_modules/**\n  - ./dist/**\n  - specific.js\n")),Object(i.b)("h2",{id:"include"},"include"),Object(i.b)("p",null,"Array of ",Object(i.b)("a",o({parentName:"p"},{href:"https://commandbox.ortusbooks.com/usage/parameters/globbing-patterns"}),"glob-pattern string")," that defines which files should be analyzed. With default Hegel configuration all .js files will analyzed."),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"include:\n  - ./**/*.js\n  - ./components/*.jsx\n  - specific.mjs\n")),Object(i.b)("h2",{id:"typings"},"typings"),Object(i.b)("p",null,'Array of paths that defines folder in which Hegel should search for typings. Order is metter because Hegel will try to find typings for specific library firstly inside first defined folder, after inside second and after one by one. With default Hegel configuration Hegel will try to find firstly inside local directory "@types" and after inside "./node_modules/@types".'),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If type definitions are placed inside specific package you should not to define this package path inside this configuration section.")),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"types:\n  - ./@types\n  - ./custom-types\n  - ./node_modules/@types\n  - ./node_modules/custom-types\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Hegel firstly will try to find type definitions inside directories which are defined inside ",Object(i.b)("inlineCode",{parentName:"p"},"types")," configuration section and if type definitons will not be founded, after that Hegel will try to find it inside node_modules package directory, and if Hegel didn't find it will try to infer type of module automatically.")))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/configuration.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-configuration-mdx-a0bbc5aecaae584d45c5.js.map