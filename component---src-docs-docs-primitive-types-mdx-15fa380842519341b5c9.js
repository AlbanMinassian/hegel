(this.webpackJsonp=this.webpackJsonp||[]).push([[18],{1327:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return l})),t.d(n,"default",(function(){return s}));t(17),t(4),t(3),t(1),t(12),t(11),t(22);var a=t(59),i=t(65);t(36);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/docs/primitive-types.mdx"}});var o={_frontmatter:l},b=i.a;function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(b,r({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"primitive-types"},"Primitive Types"),Object(a.b)("hr",null),Object(a.b)("p",null,"Imagine type as a Set of different values. Some of them are finite and some are not. In nowadays JavaScript has 7 primitive types:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#null-and-undefined"}),"Null")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#null-and-undefined"}),"Undefined")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#boolean"}),"Boolean")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#number"}),"Number")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#number"}),"BigInt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#string"}),"String")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"#symbol"}),"Symbol"))),Object(a.b)("p",null,"Hegel has not only the same types, but also adds several new types. Let's discover each of them:"),Object(a.b)("h2",{id:"null-and-undefined"},"Null and Undefined"),Object(a.b)("p",null,"The most primitive types in JavaScript are ",Object(a.b)("inlineCode",{parentName:"p"},"null")," and ",Object(a.b)("inlineCode",{parentName:"p"},"undefined"),", because each of them contains only one value.\nYou can define variable with this datatype in Hegel:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"let emptyValue: null = null;\nlet undefinedValue: undefined = undefined;\n")),Object(a.b)("p",null,"As you can see ",Object(a.b)("inlineCode",{parentName:"p"},"null")," and ",Object(a.b)("inlineCode",{parentName:"p"},"undefined")," types have the same name as their literals, but some datatypes do not. In Hegel you can annotate your variables/object properties with both literal value and datatype name."),Object(a.b)("h2",{id:"boolean"},"Boolean"),Object(a.b)("p",null,"The second primitive type is ",Object(a.b)("inlineCode",{parentName:"p"},"boolean"),", because it contains only two values: ",Object(a.b)("inlineCode",{parentName:"p"},"true")," and ",Object(a.b)("inlineCode",{parentName:"p"},"false"),". "),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"// Using literal as a datatype\nlet canIContain4Values: false = false;\nlet canIUseLiteralAsTypeAnnotation: true = true;\n\n// Using expressions\nlet canIUseWithExpressions: boolean = !canIContain4Values;\n")),Object(a.b)("h2",{id:"number"},"Number"),Object(a.b)("p",null,'JavaScript Number datatype presents any signed 64-bit number. JavaScript has not different datatypes for floating or unsigned numbers. -1, 2.7182 and 0xff will have the same datatype - number. Also, JavaScript has "special" identifiers: Infinity and NaN which also included in number datatype (And in JavaScript is existed ',Object(a.b)("inlineCode",{parentName:"p"},"-0"),", but this is a long story).\nIn Hegel you can annotate your variable/object property with ",Object(a.b)("inlineCode",{parentName:"p"},"number")," datatype name or with literal in different format (hexademical, binary, exponential and etc.)"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"let decimal: 6 = 6;\nlet hex: 0xf00d = 0xf00d;\nlet binary: 0b1010 = 0b1010;\nlet octal: 0o744 = 0o744;\nlet anyNumber: number = decimal + hex + binary + octal;\n")),Object(a.b)("h2",{id:"bigint"},"BigInt"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"BigInt")," was added in ES2019 and presents any integer number without bits limitations. "),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),"let realyBigNumber: bigint = 2n**255n;\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Warning"),": ",Object(a.b)("inlineCode",{parentName:"p"},"BigInt")," is not subtype or super type for ",Object(a.b)("inlineCode",{parentName:"p"},"Number")," data type. Hegel will show you an error if you try to use bigint as number or number as bigint. Also, in JavaScript you can't mix number and bigint in math operators, so, Hegel will show you an error too."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'// Error: Type "bigint" is incompatible with type "number"\nconst usageBigIntAsNumber: number = 4n + 2n;\n\n// Error: Type "number" is incompatible with type "bigint"\nconst usageNumberAsBigInt: bigint = 4 + 2;\n\n\n// Error: Type "4n" is incompatible with type "number"\n4 * 4n\n\n// Error: Type "255" is incompatible with type "bigint"\n2n**255\n')),Object(a.b)("h2",{id:"string"},"String"),Object(a.b)("p",null,"Unlinke String in other programming languages, JavaScript String has a value (not reference) behaivour. So, any characters set wrapped in single quote ('), double quote (\") or backtick/backquote (`) will be a valid JavaScript string literal. In Hegel you can annotate variable/object property with both literal or string datatype name, the same as with other datatypes."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'const firstName: "Robert" = "Robert";\nconst lastName: \'Paulson\' = "Paulson";\nconst fullName: string = firstName + " " + lastName;\nconst sentence: string = `His name is ${fullName}.`;\n')),Object(a.b)("p",null,"JavaScript implicitly converts other types of values into strings by concatenating them."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'44 + "6" // 446\n')),Object(a.b)("p",null,"Hegel implements a strong type system, so it will accept only strings when concatenating them or when template literal is used."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'const world = { toString() { return "World" } };\n\n"Hello " + "World"; // 👌!\n\n// Error: Type "42" is incompatible with type "string"\n"Hello " + 42;\n\n// Error: Type "{ toString: () => string }" is incompatible with type "string"\n"Hello " + world;\n\n// Error: Type "{ toString: () => string }" is incompatible with type "string"\n`Hello, ${world}`;\n')),Object(a.b)("p",null,"To prevent error you need explicity convert value to string:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'const world = { toString() { return "World" } };\n\n"Hello " + "World";        // 👌!\n"Hello " + String(42);     // 👌!\n"Hello " + String(world);  // 👌!\n`Hello, ${String(world)}`; // 👌!\n')),Object(a.b)("h2",{id:"symbol"},"Symbol"),Object(a.b)("p",null,'Symbol is another "new" datatype which was included in language starting from ECMAScript 2015.  Symbols are created by ',Object(a.b)("inlineCode",{parentName:"p"},"Symbol")," function invocation in JavaScript. Hegel provides ",Object(a.b)("inlineCode",{parentName:"p"},"symbol")," datatype that can be used as type annotation. "),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'const unique: symbol = Symbol("unique");\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Warning"),": Symbol datatype has not any literal, so you can not use symbol values as datatype."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-typescript"}),'// Error: Unexpected token\nconst unique: Symbol("unique") = Symbol("unique");\n')))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/docs/primitive-types.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-docs-primitive-types-mdx-15fa380842519341b5c9.js.map