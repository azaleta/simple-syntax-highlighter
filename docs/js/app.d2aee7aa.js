(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],u=0,h=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/simple-syntax-highlighter/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"392c":function(t,e,n){},"437c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2d26"),n("96cf");var a=n("2b0e"),s=n("ce5b"),o=n.n(s);n("bf40");a["default"].use(o.a);var r=new o.a({icons:{iconfont:["md","fa"]},theme:{dark:!1,themes:{light:{primary:"#1b4",secondary:"#666",maintext:"#999",lightgrey:"#eee"}}}}),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}]},[n("v-container",[n("v-app-bar",{staticClass:"top-bar",class:{scrolled:t.offsetTop>104},attrs:{color:"white",dense:"",flat:"",fixed:"","align-center":""}},[n("v-toolbar-title",{staticClass:"top-bar__title"},[n("h1",{staticClass:"primary--text"},[n("a",{staticClass:"top-bar__logo-link",attrs:{href:"#top"}},[n("v-icon",{staticClass:"top-bar__logo",attrs:{color:"lightgrey"}},[t._v("fa-terminal")]),n("span",{staticClass:"code mr-3 lightgrey--text top-bar__ssh"},[t._v("SSH")]),n("div",{staticClass:"top-bar__logo-title"},[t._v("Simple Syntax Highlighter")])],1)])])],1),n("documentation")],1),n("v-footer",{staticClass:"px-2",attrs:{color:"white"}},[n("v-layout",{staticClass:"mx-auto container grey--text text--darken-1",attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[n("v-flex",{staticClass:"xs12 sm6 text-center text-sm-left copyright"},[t._v("Copyright © "+t._s((new Date).getFullYear())+" Antoni André, all rights reserved.")]),n("v-flex",{staticClass:"xs12 sm6 text-center text-sm-right made-with"},[n("div",{staticClass:"mb-1"},[t._v("This documentation is made with "),n("v-icon",[t._v("fab fa-vuejs")]),t._v(", "),n("v-icon",[t._v("fab fa-html5")]),t._v(", "),n("v-icon",[t._v("fab fa-css3")]),t._v(", "),n("v-icon",[t._v("fab fa-sass")]),t._v(" & "),n("v-icon",{staticClass:"heart"},[t._v("favorite")])],1),t._v("View project on "),n("a",{attrs:{href:"https://github.com/antoniandre/simple-syntax-highlighter",target:"_blank"}},[n("v-icon",[t._v("fab fa-github")]),t._v(" Github")],1),t._v(".")])],1)],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"documentation"},[n("div",{staticClass:"mb-3 title"},[t._v("Github project")]),n("v-layout",{staticClass:"mb-5",attrs:{"align-center":"",shrink:""}},[n("v-icon",{staticClass:"pr-4 lightgrey--text",attrs:{"x-large":""}},[t._v("fab fa-github")]),n("a",{attrs:{href:"https://github.com/antoniandre/simple-syntax-highlighter",target:"_blank"}},[t._v("//github.com/antoniandre/simple-syntax-highlighter")])],1),t._m(0),t._m(1),n("h3",[t._v("Supports Vue 2 & Vue 3")]),t._m(2),n("h3",[t._v("Supported languages")]),t._m(3),t._m(4),t._m(5),n("h3",{staticClass:"mt-8"},[t._v("Via NPM")]),n("ssh-pre",{attrs:{language:"shell"}},[t._v("npm i simple-syntax-highlighter # Vue 2.x.\n")]),n("ssh-pre",{attrs:{language:"shell"}},[t._v("npm i simple-syntax-highlighter@next # Vue 3.\n")]),t._m(6),n("p",{staticClass:"mt-12"},[t._v("Then import the component and use it:")]),n("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("// In your VueJS component.\nimport SshPre from 'simple-syntax-highlighter'\nimport 'simple-syntax-highlighter/dist/sshpre.css'\n...\n\nexport default {\n  components: { SshPre },\n  ...\n}")]),n("highlight",{staticClass:"mt-4"},[t._v("In some cases, like in vue-cli, you might need to preserve the white spaces in the project\nif you see a minified output from Simple Syntax Highlighter."),n("br"),t._v("\nHere is how to preserve whitespaces, add this in your vue.config.js file:"),n("ssh-pre",{staticClass:"my-1",attrs:{language:"js"}},[t._v("module.exports = {\n  chainWebpack: config => {\n    // Preserve white spaces for ssh-pre component.\n    config.module\n      .rule('vue')\n      .use('vue-loader')\n      .loader('vue-loader')\n      .tap(options => {\n        options.compilerOptions.whitespace = 'preserve'\n        return options\n      })\n  }\n}\n")]),n("div",{staticClass:"mt-4"},[t._v("Vue 3 compiler doesn't support whitespace preserving yet."),n("br"),t._v("\nCheck the status of this PR (and add a thumb-up!):"),n("a",{staticClass:"ml-2",attrs:{href:"https://github.com/vuejs/vue-next/pull/1600",target:"_blank"}},[t._v("feat(compiler-core): whitespace handling strategy")])])],1),t._m(7),t._m(8),n("ssh-pre",{attrs:{language:"html",label:"HTML"}},[t._v('<head>\n  ...\n  <script src="https://unpkg.com/vue"><\/script>\n  <script src="https://unpkg.com/simple-syntax-highlighter"><\/script>\n  <link href="https://unpkg.com/simple-syntax-highlighter/dist/sshpre.css" rel="stylesheet">\n</head>\n')]),t._m(9),n("p",[t._v("Once included in your project, use as follows.\n")]),n("h3",{staticClass:"mt-8"},[t._v("For any other language than HTML")]),n("v-layout",{attrs:{wrap:"","align-center":"","justify-center":""}},[n("ssh-pre",{staticClass:"flex",attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<ssh-pre language="js" label="Javascript">\n  const i = 3;\n  // Some more Javascript content.\n</ssh-pre>')]),n("div",{staticClass:"mx-4 text-center"},[n("div",[t._v("renders as:")]),n("v-icon",[t._v("arrow_right_alt")])],1),n("ssh-pre",{staticClass:"flex",attrs:{language:"js",label:"Javascript"}},[t._v("const i = 3;\n// Some more Javascript content.\n")])],1),n("h3",{staticClass:"mt-8"},[t._v("For XML based languages")]),n("highlight",{attrs:{type:"warning"}},[n("strong",[t._v("To use XML/HTML-like languages: you must escape the chevrons: "),n("code",[t._v("&lt;")]),t._v(" for "),n("code",[t._v("<")]),t._v(" and "),n("code",[t._v("&gt;")]),t._v(" for "),n("code",[t._v(">")]),t._v(".")]),n("br"),t._v("If you want to display an "),n("code",[t._v("&")]),t._v(" character, you need to escape it with: "),n("code",[t._v("&amp;amp;")]),t._v(".")]),n("v-layout",{attrs:{wrap:"","align-center":"","justify-center":""}},[n("ssh-pre",{staticClass:"flex",attrs:{language:"html-vue",label:"HTML"}},[t._v('<ssh-pre language="html" label="HTML Vue Template">\n  &amp;lt;html lang="en"&amp;gt;\n    &amp;lt;head&amp;gt;\n      &amp;lt;title&amp;gt;Title&amp;lt;/title&amp;gt;\n    &amp;lt;/head&amp;gt;\n    &amp;lt;body&amp;gt;\n      Some content.\n    &amp;lt;/body&amp;gt;\n  &amp;lt;/html&amp;gt;\n</ssh-pre>')]),n("div",{staticClass:"mx-4 text-center"},[n("div",[t._v("renders as:")]),n("v-icon",[t._v("arrow_right_alt")])],1),n("ssh-pre",{staticClass:"flex",attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<html lang="en">\n  <head>\n    <title>Title</title>\n  </head>\n  <body>\n    Some content.\n  </body>\n</html>\n')])],1),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),n("div",{staticClass:"layout wrap justify-center"},[n("div",{staticClass:"flex mr-4",staticStyle:{"max-width":"300px"}},[n("div",{staticClass:"subtitle-2"},[t._v("Default")]),n("ssh-pre",{attrs:{language:"html","copy-button":""}},[t._v('<body>\n  <div id="app"></div>\n</body>')])],1),n("div",{staticClass:"flex",staticStyle:{"max-width":"300px"}},[n("div",{staticClass:"subtitle-2"},[t._v("Custom button content")]),n("ssh-pre",{attrs:{language:"html","copy-button":""},scopedSlots:t._u([{key:"copy-button",fn:function(){return[n("v-icon",{attrs:{small:"",color:"primary"}},[t._v("content_copy")])]},proxy:!0}])},[t._v('<body>\n  <div id="app"></div>\n</body>')])],1)]),t._m(15),n("ssh-pre",{attrs:{language:"html-vue"}},[t._v('<ssh-pre language="html-vue" copy-button @copied="onCopiedDoSomething">\n  <template v-slot:copy-button>\n    <i class="icon material-icons">content_copy</i>\n  </template>\n  ...\n</ssh-pre>\n')]),t._m(16),t._m(17),n("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("/**\n * This is some\n * multiline comments.\n */\nimport Vue from 'vue'\nimport router from './router'\nimport Vuetify from 'vuetify'\nimport 'vuetify/dist/vuetify.min.css'\nimport '@fortawesome/fontawesome-free/css/all.css'\nimport './styles/index.scss'\n\nVue.use(Vuetify, {\n  iconfont: 'fa',\n  theme: {\n    primary: '#1b4',\n    secondary: '#666',\n    maintext: '#999',\n    lightgrey: '#eee'\n  }\n})\n\nnew Vue({ // eslint-disable-line no-new\n  el: '#app',\n  router,\n  template: require('./template.pug'),\n  data: () => ({\n    offsetTop: 0,\n    goTopHidden: true\n  }),\n  methods: {\n    onScroll (e) {\n      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop\n\n      this.goTopHidden = this.offsetTop < 200\n    }\n  }\n})\n")]),t._m(18),n("ssh-pre",{attrs:{language:"css",label:"styles.css"}},[t._v('pre.ssh-pre {\n  position: relative;\n  padding: 0.5em;\n  margin: 2.5em 0 2em;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  background-color: rgba(0, 0, 0, 0.025);\n  border-radius: 4px;\n  display: block;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.ssh-pre[data-label]:before {\n  content: attr(data-label);\n  position: absolute;\n  bottom: 100%;\n  right: 1em;\n  padding: 0.1em 0.5em;\n  background-color: #f8f8f8;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-bottom: none;\n  border-radius: 3px;\n  margin-bottom: -1px;\n  font-size: 11px;\n}\n\n/* Syntax highlighting */\n.ssh-pre .txt {color: #333;}\n.ssh-pre .comment {font-style: italic;color: #aaa;}\n.ssh-pre .comment * {color: inherit !important;}\n.ssh-pre .quote {color: #c11;}\n.ssh-pre .quote * {color: inherit !important;}\n.ssh-pre .number {color: #c11;}\n.ssh-pre .boolean {color: #c11;}\n.ssh-pre .keyword {color: #33c;font-weight: bold;}\n.ssh-pre .this {color: #c6d;font-weight: bold;}\n.ssh-pre .punctuation {color: #99f;}\n.ssh-pre .dollar,\n.ssh-pre .special {color: #f63;}\n.ssh-pre .variable {color: #29e;}\n.ssh-pre .obj-attr {color: #0bc;}\n\n.ssh-pre[data-type="shell"] .keyword {color: #ff5252;}\n.ssh-pre[data-type="shell"] .param {color: #f63;}\n\n.ssh-pre[data-type="html"] .doctype {color: #02027e;}\n.ssh-pre[data-type="html"] .tag-name {color: #11c;}\n.ssh-pre[data-type="html"] .attribute {color: #f63;}\n\n.ssh-pre[data-type="html-vue"] .doctype {color: #02027e;}\n.ssh-pre[data-type="html-vue"] .tag-name {color: #42b983;}\n.ssh-pre[data-type="html-vue"] .punctuation {color: #128953;}\n.ssh-pre[data-type="html-vue"] .attribute {color: #ff5252;}\n\n.ssh-pre[data-type="xml"] .doctype {color: #02027e;}\n.ssh-pre[data-type="xml"] .tag-name {color: #11c;}\n.ssh-pre[data-type="xml"] .attribute {color: #f93;}\n\n.ssh-pre[data-type="css"] .selector {color: #f0d;}\n.ssh-pre[data-type="css"] .class-id {color: #f0d;}\n.ssh-pre[data-type="css"] .pseudo {color: #f35;}\n.ssh-pre[data-type="css"] .keyword {color: #f5f;}\n.ssh-pre[data-type="css"] .vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .keyword {color: #c06;}\n.ssh-pre[data-type="css"] .attribute {color: #70d;}\n.ssh-pre[data-type="css"] .keyword {color: #e28;}\n.ssh-pre[data-type="css"] .vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .value {color: #c11;}\n.ssh-pre[data-type="css"] .value.vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .color {background: #eee;padding: 0px 3px;border: 1px solid rgba(0,0,0,.1);border-radius: 3px;}\n.ssh-pre[data-type="css"] .unit {color: #0bc;}\n.ssh-pre[data-type="css"] .important {color: #f00;font-weight: bold;}\n')]),t._m(19),n("ssh-pre",{attrs:{language:"xml",label:"index.html"}},[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <meta http-equiv="Content-language" content="en">\n  <meta name="description" content="Some description.">\n  <meta name="keywords" content="Some keywords.">\n  <title>Title</title>\n  \x3c!-- <link href=\'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons\' rel="stylesheet"> --\x3e\n</head>\n<body>\n  <a name="top"></a>\n  <div id="app"></div>\n</body>\n</html>\n')]),t._m(20),t._m(21),n("ssh-pre",{attrs:{language:"pug",label:"index.pug"}},[t._v('//- This is pug.\ndiv.mb-3.title Github project\n\nv-layout.mb-5(align-center shrink)\n  v-icon.pr-4.lightgrey--text(x-large) fab fa-github\n  a(href="https://github.com/antoniandre/simple-syntax-highlighter" target="_blank")\n    | //github.com/antoniandre/simple-syntax-highlighter\n\nh2\n  a(href="#notes") Notes\n  a(name="notes")\np\n  | This is a lightweight yet efficient and reactive Vue JS syntax highlighter.\n  | '),n("br"),t._v('It reads the source code you give it and highlights it, for Humans.\nh3 Supported languages\nul\n  li XML\n  li HTML\n  li HTML Vue JS Template\n  li Pug\n  li Javascript\n  li JSON\n  li CSS\n  li PHP\n  li MySQL\n  li No support for nested languages\n\nh2\n  a(href="#installation") Installation\n  a(name="installation")\np You have two options: '),n("em",[t._v("NPM")]),t._v(" "),n("strong",{staticClass:"mx-2"},[t._v("or")]),t._v(" "),n("span",{staticClass:"code"},[t._v("<script>")]),t._v(' tag.\nh3.mt-8 Via NPM\nssh-pre(language="shell" label="Shell") npm i --S simple-syntax-highlighter\n\nh2\n  a(href="#how-to-use") How to use\n  a(name="how-to-use")\np Once included in your project, use as follows.')]),t._m(22),n("ssh-pre",{attrs:{language:"json",label:"package.json"}},[t._v('{\n  "name": "",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "start": ""\n  },\n  "devDependencies": {\n    "vue": "^2.5.16",\n    "vue-loader": "^13.7.2",\n    "vuetify": "^1.1.1"\n  },\n  "repository": {\n  },\n  "dependencies": {},\n  "postcss": {\n    "plugins": {\n      "autoprefixer": {}\n    }\n  },\n  "browserslist": [\n    "last 5 version",\n    "ie 9",\n    "iOS >= 9"\n  ]\n}\n')]),t._m(23),n("ssh-pre",{attrs:{language:"php",label:"index.php"}},[t._v("<?php\n\nrequire_once __DIR__ . '/../autoload.php';\n$config = parse_ini_file('config.ini');\n\nif (!empty($_POST[\"session\"]))\n{\n    unset($_SESSION);\n    session_id($_POST[\"session\"]);\n}\n\nheader('Content-type: application/json');\n\ntry\n{\n    if (empty($_POST[\"user\"]))\n    {\n        throw new Exception(\"Bad Request:user\", 400);\n    }\n\n    if (empty($_POST[\"session\"]))\n    {\n        throw new Exception(\"Bad Request:session\", 400);\n    }\n\n    if (!$isLoggedIn)\n    {\n        throw new Exception(\"Cannot login.\");\n    }\n\n    echo json_encode(true);\n}\ncatch (Exception $e)\n{\n    if ($e->getCode() === 0)\n    {\n        header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);\n    }\n\n    else\n    {\n        header($_SERVER['SERVER_PROTOCOL'] . ' ' . $e->getCode() . ' ' . $e->getMessage(), true, $e->getCode());\n    }\n\n    error_log('There was an error here');\n\n    echo json_encode([\n        'exception' => [\n            'code' => $e->getCode(),\n            'message' => $e->getMessage()\n        ]\n    ]);\n}\nfinally\n{\n    // Something.\n}\n\n?>\n")]),t._m(24),t._m(25),n("ssh-pre",{attrs:{language:"js",label:"Javascript",dark:""}},[t._v("/**\n * This is some\n * multiline comments.\n */\nimport Vue from 'vue'\nimport router from './router'\nimport Vuetify from 'vuetify'\nimport 'vuetify/dist/vuetify.min.css'\nimport '@fortawesome/fontawesome-free/css/all.css'\nimport './styles/index.scss'\n\nVue.use(Vuetify, {\n  iconfont: 'fa',\n  theme: {\n    primary: '#1b4',\n    secondary: '#666',\n    maintext: '#999',\n    lightgrey: '#eee'\n  }\n})\n\nnew Vue({ // eslint-disable-line no-new\n  el: '#app',\n  router,\n  template: require('./template.pug'),\n  data: () => ({\n    offsetTop: 0,\n    goTopHidden: true\n  }),\n  methods: {\n    onScroll (e) {\n      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop\n\n      this.goTopHidden = this.offsetTop < 200\n    }\n  }\n})\n")]),t._m(26),n("p",[t._v("You can easily create your own color theme, as the highlighting is already done,\nyou just need to override the colors of these classes in your css:\n")]),n("ssh-pre",{attrs:{language:"css",label:"CSS"}},[t._v('.txt {color: #333;}\n.comment {color: #aaa;}\n.quote {color: #c11;}\n.number {color: #c11;}\n.boolean {color: #c11;}\n.keyword {color: #33c;}\n.this {color: #c6d;}\n.punctuation {color: #99f;}\n.external-var, .special {color: #f63;}\n.variable {color: #29e;}\n.obj-attr {color: #0bc;}\n\n[data-type="shell"] .keyword {color: #ff5252;}\n[data-type="shell"] .param {color: #f63;}\n\n[data-type="html"] .doctype {color: #02027e;}\n[data-type="html"] .tag-name {color: #11c;}\n[data-type="html"] .attribute {color: #f63;}\n\n[data-type="html-vue"] .doctype {color: #02027e;}\n[data-type="html-vue"] .tag-name {color: #42b983;}\n[data-type="html-vue"] .punctuation {color: #128953;}\n[data-type="html-vue"] .attribute {color: #ff5252;}\n\n[data-type="xml"] .doctype {color: #02027e;}\n[data-type="xml"] .tag-name {color: #11c;}\n[data-type="xml"] .attribute {color: #f93;}\n\n[data-type="css"] .selector {color: #f0d;}\n[data-type="css"] .class-id {color: #f0d;}\n[data-type="css"] .pseudo {color: #f35;}\n[data-type="css"] .keyword {color: #f5f;}\n[data-type="css"] .vendor {color: #0c8;}\n[data-type="css"] .keyword {color: #c06;}\n[data-type="css"] .attribute {color: #70d;}\n[data-type="css"] .keyword {color: #e28;}\n[data-type="css"] .vendor {color: #0c8;}\n[data-type="css"] .value {color: #c11;}\n[data-type="css"] .vendor {color: #0c8;}\n[data-type="css"] .color {background: #eee;}\n[data-type="css"] .unit {color: #0bc;}\n[data-type="css"] .important {color: #f00;}')])],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("a",{attrs:{href:"#notes"}},[t._v("Notes")]),n("a",{attrs:{name:"notes"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("This is a lightweight yet efficient and reactive Vue JS syntax highlighter."),n("br"),t._v("\nIt reads the source code you give it and highlights it, for Humans.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("All the features of Simple Syntax Highlighter are working as expected in Vue 3."),n("br"),t._v("\nbut if you use Vue CLI, Vue 3 compiler doesn't support whitespace preserving yet."),n("br"),t._v("\nCheck the status of this PR (and add a thumb-up!):"),n("a",{staticClass:"ml-2",attrs:{href:"https://github.com/vuejs/vue-next/pull/1600",target:"_blank"}},[t._v("feat(compiler-core): whitespace handling strategy")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("XML")]),n("li",[t._v("HTML")]),n("li",[t._v("HTML Vue JS Template")]),n("li",[t._v("Pug")]),n("li",[t._v("Javascript")]),n("li",[t._v("JSON")]),n("li",[t._v("CSS")]),n("li",[t._v("PHP")]),n("li",[t._v("MySQL")]),n("li",[t._v("No support for nested languages")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("a",{attrs:{href:"#installation"}},[t._v("Installation")]),n("a",{attrs:{name:"installation"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("You have two options: "),n("em",[t._v("NPM")]),t._v(" "),n("strong",{staticClass:"mx-2"},[t._v("or")]),t._v(" "),n("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-2 grey--text text--darken-1"},[t._v("Edit a working Vue 3 example on Codepen:"),n("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/jOqgoKR",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/jOqgoKR")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",{staticClass:"mt-8"},[t._v("Via "),n("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Include the Simple Syntax Highlighter script in your document "),n("span",{staticClass:"code"},[t._v("<head>")]),t._v(" as follows:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("a",{attrs:{href:"#how-to-use"}},[t._v("How to use")]),n("a",{attrs:{name:"how-to-use"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("a",{attrs:{href:"#options"}},[t._v("Options")]),n("a",{attrs:{name:"options"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("code",[t._v("label")]),n("span",{staticClass:"code cyan--text text--darken-3 mx-2"},[t._v("{String}")]),n("span",{staticClass:"code blue--text text--darken-1 mx-2"},[t._v("Default: "),n("strong",[t._v("''")])]),n("p",[t._v("A label to show on the top right of the ssh-pre box. If empty no label will show up.")])]),n("li",[n("code",[t._v("language")]),n("span",{staticClass:"code cyan--text text--darken-3 mx-2"},[t._v("{String}")]),n("span",{staticClass:"code blue--text text--darken-1 mx-2"},[t._v("Default: "),n("strong",[t._v("''")])]),n("p",[t._v("One of the supported programming languages to syntax highlight.")])]),n("li",[n("code",[t._v("reactive")]),n("span",{staticClass:"code cyan--text text--darken-3 mx-2"},[t._v("{Boolean}")]),n("span",{staticClass:"code blue--text text--darken-1 mx-2"},[t._v("Default: "),n("strong",[t._v("false")])]),n("p",[t._v("Makes this ssh-pre box reactive to variable changes.")])]),n("li",[n("code",[t._v("dark")]),n("span",{staticClass:"code cyan--text text--darken-3 mx-2"},[t._v("{Boolean}")]),n("span",{staticClass:"code blue--text text--darken-1 mx-2"},[t._v("Default: "),n("strong",[t._v("false")])]),n("p",[t._v("Switches this ssh-pre box to a dark theme.")])]),n("li",[n("code",[t._v("copy-button")]),n("span",{staticClass:"code cyan--text text--darken-3 mx-2"},[t._v("{Boolean}")]),n("span",{staticClass:"code blue--text text--darken-1 mx-2"},[t._v("Default: "),n("strong",[t._v("false")])]),n("p",[t._v("Allow copying this ssh-pre box content to the clipboard.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("a",{attrs:{href:"#copy-button"}},[t._v("Copy button")]),n("a",{attrs:{name:"copy-button"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("With the option "),n("span",{staticClass:"code"},[t._v("copy-button")]),t._v(", you can add a button that allows copying the\ncontent to the clipboard.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The button content can be customized through the "),n("span",{staticClass:"code"},[t._v("copy-button")]),t._v(" slot.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mt-4"},[t._v("On copy button press, the "),n("span",{staticClass:"code"},[t._v("copied")]),t._v(" event is emitted containing the copied text."),n("br"),t._v("\nHere is how to use the copy-button slot and the copied event.\n")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("a",{attrs:{href:"#examples"}},[t._v("Examples of rendering with different languages")]),n("a",{attrs:{name:"examples"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("a",{attrs:{href:"#ex--javascript"}},[t._v("javascript")]),n("a",{attrs:{name:"ex--javascript"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("a",{attrs:{href:"#ex--css"}},[t._v("CSS")]),n("a",{attrs:{name:"ex--css"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("a",{attrs:{href:"#ex--html"}},[t._v("HTML")]),n("a",{attrs:{name:"ex--html"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("a",{attrs:{href:"#ex--pug"}},[t._v("Pug")]),n("a",{attrs:{name:"ex--pug"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Important: to put parenthesis inside quotes, you have to escape them with: "),n("code",[t._v("&amp;#40;")]),t._v("\nfor "),n("code",[t._v("(")]),t._v(" and "),n("code",[t._v("&amp;#41;")]),t._v(" for "),n("code",[t._v(")")]),t._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("a",{attrs:{href:"#ex--json"}},[t._v("JSON")]),n("a",{attrs:{name:"ex--json"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[n("a",{attrs:{href:"#ex--php"}},[t._v("PHP")]),n("a",{attrs:{name:"ex--php"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("a",{attrs:{href:"#dark-mode"}},[t._v("Dark mode")]),n("a",{attrs:{name:"dark-mode"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("The "),n("span",{staticClass:"code"},[t._v("dark")]),t._v(" option switches the color theme to dark. Here is an example of Javascript code in dark mode.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("a",{attrs:{href:"#custom-theme"}},[t._v("Custom theme")]),n("a",{attrs:{name:"custom-theme"}})])}],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ssh-pre",class:{"ssh-pre--dark":t.dark},attrs:{"data-type":t.language,"data-label":t.label||null}},[t.copyButton?n("button",{staticClass:"ssh-pre__copy",on:{click:t.copyCode}},[t._t("copy-button",[t._v("Copy")])],2):t._e(),t._v(" "),n("pre",{ref:"code",staticClass:"ssh-pre__content",domProps:{innerHTML:t._s(t.content)}})])},h=[],d=(n("99af"),n("7db0"),n("caad"),n("c975"),n("a15b"),n("d81d"),n("fb6a"),n("b64b"),n("acd8"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("2532"),n("466d"),n("5319"),n("3835")),m={quote:/("(?:\\"|[^"])*")|('(?:\\'|[^'])*')/,comment:/(\/\/.*?\n|\/\*[\s\S]*?\*\/)/,htmlTag:/(<([^>])*>)/,punctuation:/(!==?|(?:[[\](){}.:;,+\-?=!]|&lt;|&gt;)+|&&|\|\|)/,number:/(-?(?:\.\d+|\d+(?:\.\d+)?))/,boolean:/\b(true|false)\b/},g={shell:{quote:m.quote,comment:/(#.*?)\n/,keyword:/(?:^|\b)(npm|yarn|install|run)(?:\b|$)/,param:/( --(?:save|save-dev))(?:\s|$)/},xml:{doctype:/(&lt;\!DOCTYPE.*?&gt;)/,quote:m.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-zA-Z\-:]+)([\s\S]*?)(\/?&gt;)/},html:{doctype:/(DOCTYPE)/,quote:m.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-z]\w*)([\s\S]*?)(\/?&gt;)/},"html-vue":{doctype:/(DOCTYPE)/,quote:m.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-zA-Z][\w\d-]*)((?:.|\s)*?)(\/?&gt;)/},pug:{text2:/((?:^|\n)[ \t]+|^)\|([ \t]*)([^\n]+(?=\n|$))/,quote:m.quote,comment:/(?:^|\n)([ \t]+|^)(\/\/-[ \t]*(?:[^\n]*?(?:\n\1[ \t]+[^\n]*)+|[^\n]+(?=\n|$)))/,tag:/([a-zA-Z][\w\d-]*|)([.#][a-zA-Z][-.\w\d]*|)\b(?:\(([\s\S]*?)\))?(\.?)([ \t]*)([^\n]+)?(?=\n|$)/,punctuation:/(!==?|(?:[#[\]().,+\-?=!|]|&lt;|&gt;)+)/},css:{quote:m.quote,comment:/(\/\*[\s\S]*?\*\/)/,pseudo:/(:(?:hover|active|focus|visited|not|before|after|(?:first|last|nth)-child))/,"selector keyword vendor":/(@-(?:moz|o|webkit|ms)-(?=keyframes\s))/,"selector keyword":/((?:@(?:import|media|font-face|keyframes)|screen|print|and)(?=[\s({])|keyframes|\s(?:ul|ol|li|table|div|pre|p|a|img|br|hr|h[1-6]|em|strong|span|html|body|iframe|video|audio|input|button|form|label|fieldset|small|abbr|i|dd|dt)\b)/,selector:/((?:[.#-\w*+ >:,[\]="~\n]|&gt;)+)(?=\s*\{)/,"attribute keyword vendor":/(-(?:moz|o|webkit|ms)-(?=transform|transition|user-select|animation|background-size|box-shadow))/,"attribute keyword":/\b(content|float|display|position|top|left|right|bottom|(?:(?:max|min)-)?width|(?:(?:max|min|line)-)?height|font(?:-(?:family|style|size|weight|variant|stretch))?|vertical-align|color|opacity|visibility|z-index|transform(?:-(?:origin|style|delay|duration|property|timing-function))?|transition(?:-(?:delay|duration))?|animation(?:-(?:name|delay|duration|direction|fill-mode))?|backface-visibility|background(?:-(?:color|position|image|repeat|size))?|(?:padding|margin|border)(?:-(?:top|left|right|bottom))?|border(?:-(?:radius|color|width|style|spacing))|white-space|text-(?:align|transform|decoration|shadow|indent)|overflow(?:-(?:x|y))?|(?:letter|word)-spacing|word-break|box-(?:sizing|shadow)|stroke(?:-(?:width|opacity|dasharray|dashoffset|linecap|linejoin))?|fill|speak|outline|user-select|cursor|flex(?:-(?:direction|flow|grow|shrink|basis|wrap))?|(?:justify|align)-(?:content|self|items))(?=\s*:)/,"value keyword vendor":/(-(?:moz|o|webkit|ms)-(?=linear-gradient))/,"value keyword important":/( ?!important)/,"value keyword":/\b(inherit|initial|normal|none|unset|auto|inline-block|inline|block|absolute|relative|static|fixed|sticky|hidden|visible|top|left|right|bottom|center|middle|baseline|solid|dotted|dashed|line-through|(?:over|under)line|wavy|double|(?:pre-|no)?wrap|pre|break-word|(?:upper|lower)case|capitalize|italic|bold|attr\(.*?\)|linear|ease(?:-in)?(?:-out)?|all|infinite|cubic-bezier|(?:translate|rotate)(?:[X-Z]|3d)?|skew[XY]?|scale|(?:no-)?repeat|repeat(?:-x|-y)|contain|cover|url|(?:repeating-)?(?:linear|radial)-gradient|inset|pointer|flex(?:-(?:start|end))?|stretch|row(?:-reverse)?|column(?:-reverse)?)(?=\s*[,;}(]|\s+[\da-z])/,number:m.number,color:/(transparent|#(?:[\da-fA-F]{6}|[\da-fA-F]{3})|rgba?\([\d., ]*\))/,htmlentity:/(&.*?;)/,punctuation:/([:,;{}@#()!]+|&lt;|&gt;)/,attribute:/([a-zA-Z-]+)(?=\s*:)/,unit:/(px|pt|cm|%|r?em|m?s|deg|vh|vw|vmin|vmax)(?=(?:\s*[;,{}})]|\s+[-\da-z#]))/},json:{quote:m.quote,comment:m.comment,number:m.number,boolean:m["boolean"],punctuation:/([[\](){}:;,-]+)/},js:{quote:m.quote,comment:m.comment,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:m["boolean"],this:/\b(this)(?=\W)/,keyword:/\b(new|getElementsBy(?:Tag|Class|)Name|getElementById|querySelector|querySelectorAll|arguments|if|else|do|return|case|default|(?:f|F)unction|typeof|instanceof|undefined|document|window|while|for|forEach|switch|in|break|continue|length|var|let|const|export|import|require|from|Number|Boolean|String|Array|Object|RegExp|Integer|Date|(?:clear|set)(?:Timeout|Interval)|parse(?:Int|Float)|Math(?=\.)|isNaN)(?=\W)/,punctuation:/(!==?|(?:[[\]!(){}:;,+\-%*/?=]|&lt;|&gt;)+|\.+(?![a-zA-Z])|&amp;&amp;|\|\|)/,variable:/(\.?[a-zA-Z_][\w\d]*)/,htmlentity:/(&.*?;)/,"external-var":/(\$|jQuery|JSON)(?=\W|$)/},php:{quote:m.quote,comment:m.comment,special:/(&lt;\?php|\?&gt;|__(?:DIR|FILE|LINE)__)/,punctuation:m.punctuation,number:m.number,boolean:m["boolean"],variable:/(\$[\w\d_]+)/,keyword:/\b(define|echo|die|exit|print_r|var_dump|if|else|elseif|do|return|case|default|function|\$this|while|foreach|for|switch|in|break|continue|empty|isset|unset|parse_ini_file|session_(?:start|destroy|id)|header|json_(?:encode|decode)|error_log|(require|include)(:?_once)?|try|throw|new|Exception|catch|finally|preg_(?:match|replace)|list|strlen|substr|str_replace|array_(?:keys|values))(?=\W|$)/},sql:{quote:m.quote,comment:m.comment,punctuation:m.punctuation,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:m["boolean"],keyword:/\b(\*|CREATE|ALL|DATABASE|TABLE|GRANT|PRIVILEGES|IDENTIFIED|FLUSH|SELECT|UPDATE|DELETE|INSERT|FROM|WHERE|(?:ORDER|GROUP) BY|LIMIT|(?:(?:LEFT|RIGHT|INNER|OUTER) |)JOIN|AS|ON|COUNT|CASE|TO|IF|WHEN|BETWEEN|AND|OR|CONCAT)(?=\W|$)/}},f={xml:/(\s*)([a-zA-Z\d\-:]+)=("|')([\s\S]*?)\3/g,html:/(\s*)([a-zA-Z-]+)=("|')([\s\S]*?)\3/g,"html-vue":/(\s*)([@:#]?[a-zA-Z\d-]+)(?:(?:=("|')([\s\S]*?)\3)|)/g,pug:/(\s*|,)([@:#]?[a-zA-Z\d-]+)(?:(?:=("|')([\s\S]*?)\3)|)/g},v={shell:{quote:2},xml:{quote:2,tag:4},html:{quote:2,tag:4},"html-vue":{quote:2,tag:4},pug:{quote:2,comment:2,text:4,text2:3,tag:6},json:{quote:2},php:{quote:2},sql:{quote:2},css:{quote:2},js:{quote:2}},_={name:"sshpre",props:{language:{type:String,default:""},label:{type:[String,Boolean],default:!1},reactive:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},copyButton:{type:Boolean,default:!1}},data:function(){return{knownLanguages:Object.keys(g),content:"",slotTexts:""}},methods:{htmlize:function(t){return t.replace(/&(lt|gt|amp);/g,(function(t,e){return{lt:"<",gt:">",amp:"&"}[e]}))},unhtmlize:function(t){return t.replace(/[<>]/g,(function(t){return{"<":"&lt;",">":"&gt;"}[t]}))},isColorDark:function(t){var e,n,a,s,o,r;if(e=t.match(/rgba?\((.*),\s*(.*),\s*(.*?)(?:,\s*([^)]*))\)/))a=parseInt(e[1])<=100,s=parseInt(e[2])<=100,o=parseInt(e[3])<=100,r=parseFloat(e[4])<.3;else if(n=t.match(/#([\da-f]{3}(?:[\da-f]{3})?)/)){var i=3===n[1].length;a=parseInt(n[1][0])<=9,s=parseInt(n[1][i?1:2])<=9,o=parseInt(n[1][i?2:4])<=9}return(a&&s&&o||a&&s&&!o||!a&&s&&o)&&!r},createRegexPattern:function(){var t="",e=[];for(var n in g[this.language]){for(var a=v[this.language][n]||1,s=0;s<a;s++)e.push(n);t+=(t?"|":"")+g[this.language][n].source}return[t,e]},syntaxHighlightHtmlTag:function(t){var e=function(t,e,n,a,s){return"".concat(e,'<span class="attribute">').concat(n,"</span>")+(s?'<span class="punctuation">=</span>':"")+(s?'<span class="quote">'.concat(a||"").concat(s||"").concat(a||"","</span>"):"")},n=(t[2]||"").replace(f[this.language],e);if("pug"===this.language){var a=(t[1]||"").replace(/\.[a-z\d-]+/g,(function(t){return'<span class="class">'.concat(t,"</span>")}));return n&&(n='<span class="punctuation">(</span>'+n+'<span class="punctuation">)</span>'),'<span class="tag-name">'.concat(t[0]||"","</span>")+"".concat(a).concat(n)+(t[3]?'<span class="punctuation">.</span>':"")+(t[4]||"")+"".concat(t[5]?t[5]:"")}return'<span class="punctuation">'.concat(t[0],"</span>")+'<span class="tag-name">'.concat(t[1],"</span>")+n+'<span class="punctuation">'.concat(t[3],"</span>")},syntaxHighlightContent:function(t){var e=this;if(!this.knownLanguages.includes(this.language))return t;var n=this.createRegexPattern(),a=Object(d["a"])(n,2),s=a[0],o=a[1];return this.unhtmlize(t).replace(new RegExp(s,"g"),(function(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),s=1;s<n;s++)a[s-1]=arguments[s];var r;a=a.slice(0,a.length-2);var i=a.find((function(t,e){return t&&(r=o[e])&&t}));if("quote"===r)i=e.unhtmlize(i);else if("comment"===r)i=e.unhtmlize(i);else{if("text"===r&&"pug"===e.language)return"".concat(a[0]).concat(a[1]).concat(a[2],'<span class="punctuation">.</span>\n<span class="text">').concat(a[3],"</span>");if("text2"===r&&"pug"===e.language)return"".concat(a[0],'<span class="punctuation">|</span>').concat(a[1],'<span class="text">').concat(a[2],"</span>");if("tag"===r&&["xml","html","html-vue","pug"].includes(e.language))return e.syntaxHighlightHtmlTag(a.slice(o.indexOf("tag")));if("variable"===r&&"."===i[0]&&"js"===e.language)return'<span class="punctuation">.</span><span class="obj-attr">'.concat(i.substr(1),"</span>")}var l="";return"color"===r&&"css"===e.language&&(l=' style="background-color: '.concat(i,";color: #").concat(e.isColorDark(i)?"fff":"000",'"')),r&&'<span class="'.concat(r,'"').concat(l,">").concat(i,"</span>")||""}))},checkSlots:function(){var t=(this.$slots["default"]||[]).map((function(t){return t.text||""})).join("");this.slotTexts!==t&&(this.slotTexts=t,this.content=this.syntaxHighlightContent(this.slotTexts))},copyCode:function(t){t.target.insertAdjacentHTML("afterend",'<textarea id="clipboard-textarea">'.concat(this.$refs.code.innerText,"</textarea>"));var e=document.getElementById("clipboard-textarea");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),e.remove(),this.$emit("copied",this.$refs.code.innerText)}},mounted:function(){this.checkSlots()},beforeUpdate:function(){this.reactive&&this.checkSlots()}},y=_,b=(n("efad"),n("2877")),x=Object(b["a"])(y,u,h,!1,null,null,null),w=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:"highlight highlight--"+t.type},[t.noIcon?t._e():n("v-icon",[t._v(t._s(t.icon))]),t._t("default")],2)},C=[],S={props:{tag:{type:String,default:"p"},type:{type:String,default:"info"},noIcon:{type:Boolean,default:!1}},computed:{icon:function(){switch(this.type){case"success":return"check";case"error":return"close";case"warning":return"priority_high";case"tips":return"wb_incandescent";case"info":default:return"priority_high"}}}},T=S,E=(n("aef5"),Object(b["a"])(T,k,C,!1,null,null,null)),j=E.exports,$={components:{sshPre:w,Highlight:j}},O=$,q=(n("c072"),Object(b["a"])(O,c,p,!1,null,null,null)),H=q.exports;a["default"].directive("scroll",{inserted:function(t,e){var n=function n(a){e.value(a,t)&&window.removeEventListener("scroll",n)};window.addEventListener("scroll",n)}});var I={name:"app",components:{documentation:H},data:function(){return{offsetTop:0,goTopHidden:!0}},methods:{onScroll:function(){this.offsetTop=window.pageYOffset||document.documentElement.scrollTop,this.goTopHidden=this.offsetTop<200}}},P=I,L=(n("6294"),Object(b["a"])(P,i,l,!1,null,null,null)),R=L.exports;a["default"].config.productionTip=!1,new a["default"]({vuetify:r,render:function(t){return t(R)}}).$mount("#app")},6294:function(t,e,n){"use strict";var a=n("437c"),s=n.n(a);s.a},aef5:function(t,e,n){"use strict";var a=n("e42b"),s=n.n(a);s.a},b39c:function(t,e,n){},c072:function(t,e,n){"use strict";var a=n("392c"),s=n.n(a);s.a},e42b:function(t,e,n){},efad:function(t,e,n){"use strict";var a=n("b39c"),s=n.n(a);s.a}});
//# sourceMappingURL=app.d2aee7aa.js.map