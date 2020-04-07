(function(e){function t(t){for(var a,o,i=t[0],l=t[1],c=t[2],u=0,h=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},s={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/simple-syntax-highlighter/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"392c":function(e,t,n){},"437c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2d26"),n("96cf");var a=n("2b0e"),s=n("ce5b"),r=n.n(s);n("bf40");a["default"].use(r.a);var o=new r.a({icons:{iconfont:["md","fa"]},theme:{dark:!1,themes:{light:{primary:"#1b4",secondary:"#666",maintext:"#999",lightgrey:"#eee"}}}}),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}]},[n("v-container",[n("v-app-bar",{staticClass:"top-bar",class:{scrolled:e.offsetTop>104},attrs:{color:"white",dense:"",flat:"",fixed:"","align-center":""}},[n("v-toolbar-title",{staticClass:"top-bar__title"},[n("h1",{staticClass:"primary--text"},[n("a",{staticClass:"top-bar__logo-link",attrs:{href:"#top"}},[n("v-icon",{staticClass:"top-bar__logo",attrs:{color:"lightgrey"}},[e._v("fa-terminal")]),n("span",{staticClass:"code mr-3 lightgrey--text top-bar__ssh"},[e._v("SSH")]),n("div",{staticClass:"top-bar__logo-title"},[e._v("Simple Syntax Highlighter")])],1)])])],1),n("documentation")],1),n("v-footer",{staticClass:"px-2",attrs:{color:"white"}},[n("v-layout",{staticClass:"mx-auto container grey--text text--darken-1",attrs:{row:"",wrap:"","align-center":"","justify-center":""}},[n("v-flex",{staticClass:"xs12 sm6 text-center text-sm-left copyright"},[e._v("Copyright © "+e._s((new Date).getFullYear())+" Antoni André, all rights reserved.")]),n("v-flex",{staticClass:"xs12 sm6 text-center text-sm-right made-with"},[n("div",{staticClass:"mb-1"},[e._v("This documentation is made with "),n("v-icon",[e._v("fab fa-vuejs")]),e._v(", "),n("v-icon",[e._v("fab fa-html5")]),e._v(", "),n("v-icon",[e._v("fab fa-css3")]),e._v(", "),n("v-icon",[e._v("fab fa-sass")]),e._v(" & "),n("v-icon",{staticClass:"heart"},[e._v("favorite")])],1),e._v("View project on "),n("a",{attrs:{href:"https://github.com/antoniandre/simple-syntax-highlighter",target:"_blank"}},[n("v-icon",[e._v("fab fa-github")]),e._v(" Github")],1),e._v(".")])],1)],1)],1)},l=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"documentation"},[n("div",{staticClass:"mb-3 title"},[e._v("Github project")]),n("v-layout",{staticClass:"mb-5",attrs:{"align-center":"",shrink:""}},[n("v-icon",{staticClass:"pr-4 lightgrey--text",attrs:{"x-large":""}},[e._v("fab fa-github")]),n("a",{attrs:{href:"https://github.com/antoniandre/simple-syntax-highlighter",target:"_blank"}},[e._v("//github.com/antoniandre/simple-syntax-highlighter")])],1),e._m(0),e._m(1),n("h3",[e._v("Supported languages")]),e._m(2),e._m(3),e._m(4),n("h3",{staticClass:"mt-8"},[e._v("Via NPM")]),n("ssh-pre",{attrs:{language:"shell",label:"Shell"}},[e._v("npm i --S simple-syntax-highlighter")]),n("p",[e._v("Then import the component and use it:")]),n("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[e._v("// In your VueJS component.\nimport SshPre from 'simple-syntax-highlighter'\nimport 'simple-syntax-highlighter/dist/sshpre.css'\n...\n\nexport default {\n  components: { SshPre },\n  ...\n}\n")]),e._m(5),e._m(6),n("ssh-pre",{attrs:{language:"html",label:"HTML"}},[e._v('<head>\n  ...\n  <script src="https://unpkg.com/vue"><\/script>\n  <script src="https://unpkg.com/simple-syntax-highlighter"><\/script>\n  <link href="https://unpkg.com/simple-syntax-highlighter/dist/sshpre.css" rel="stylesheet">\n</head>\n')]),e._m(7),n("p",[e._v("Once included in your project, use as follows.\n")]),n("h3",{staticClass:"mt-8"},[e._v("For any other language than HTML")]),n("ssh-pre",{attrs:{language:"html-vue",label:"HTML Vue Template"}},[e._v('<ssh-pre language="js" label="Javascript">\n  // Some Javascript content.\n</ssh-pre>\n')]),n("h3",{staticClass:"mt-8"},[e._v("For XML based languages")]),n("highlight",{attrs:{type:"warning"}},[n("strong",[e._v("To use XML/HTML-like languages, you must escape the chevrons: "),n("code",[e._v("&lt;")]),e._v(" for "),n("code",[e._v("<")]),e._v(" and "),n("code",[e._v("&gt;")]),e._v(" for "),n("code",[e._v(">")])])]),n("v-layout",{attrs:{wrap:"","align-center":"","justify-center":""}},[n("ssh-pre",{staticClass:"flex",attrs:{language:"html-vue",label:"HTML"}},[e._v('<ssh-pre language="html" label="HTML Vue Template">\n  &amp;lt;html lang="en"&amp;gt;\n    &amp;lt;head&amp;gt;\n      &amp;lt;title&amp;gt;Title&amp;lt;/title&amp;gt;\n    &amp;lt;/head&amp;gt;\n    &amp;lt;body&amp;gt;\n      Some content.\n    &amp;lt;/body&amp;gt;\n  &amp;lt;/html&amp;gt;\n</ssh-pre>')]),n("div",{staticClass:"mx-4 text-center"},[n("div",[e._v("renders as:")]),n("v-icon",[e._v("arrow_right_alt")])],1),n("ssh-pre",{staticClass:"flex",attrs:{language:"html-vue",label:"HTML Vue Template"}},[e._v('<html lang="en">\n  <head>\n    <title>Title</title>\n  </head>\n  <body>\n    Some content.\n  </body>\n</html>\n')])],1),e._m(8),e._m(9),e._m(10),e._m(11),n("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[e._v("import Vue from 'vue'\nimport router from './router'\nimport Vuetify from 'vuetify'\nimport 'vuetify/dist/vuetify.min.css'\nimport '@fortawesome/fontawesome-free/css/all.css'\nimport './styles/index.scss'\n\nVue.use(Vuetify, {\n  iconfont: 'fa',\n  theme: {\n    primary: '#1b4',\n    secondary: '#666',\n    maintext: '#999',\n    lightgrey: '#eee'\n  }\n})\n\nnew Vue({ // eslint-disable-line no-new\n  el: '#app',\n  router,\n  template: require('./template.pug'),\n  data: () => ({\n    offsetTop: 0,\n    goTopHidden: true\n  }),\n  methods: {\n    onScroll (e) {\n      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop\n\n      this.goTopHidden = this.offsetTop < 200\n    }\n  }\n})\n")]),e._m(12),n("ssh-pre",{attrs:{language:"css",label:"styles.css"}},[e._v('pre.ssh-pre {\n  position: relative;\n  padding: 0.5em;\n  margin: 2.5em 0 2em;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  background-color: rgba(0, 0, 0, 0.025);\n  border-radius: 4px;\n  display: block;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.ssh-pre[data-label]:before {\n  content: attr(data-label);\n  position: absolute;\n  bottom: 100%;\n  right: 1em;\n  padding: 0.1em 0.5em;\n  background-color: #f8f8f8;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  border-bottom: none;\n  border-radius: 3px;\n  margin-bottom: -1px;\n  font-size: 11px;\n}\n\n/* Syntax highlighting */\n.ssh-pre .txt {color: #333;}\n.ssh-pre .comment {font-style: italic;color: #aaa;}\n.ssh-pre .comment * {color: #aaa !important;}\n.ssh-pre .quote {color: #c11;}\n.ssh-pre .quote * {color: #c11 !important;}\n.ssh-pre .number {color: #c11;}\n.ssh-pre .boolean {color: #c11;}\n.ssh-pre .keyword {color: #33c;font-weight: bold;}\n.ssh-pre .this {color: #c6d;font-weight: bold;}\n.ssh-pre .punctuation {color: #99f;}\n.ssh-pre .dollar,\n.ssh-pre .special {color: #f63;}\n.ssh-pre .variable {color: #29e;}\n.ssh-pre .objAttr {color: #0bc;}\n\n.ssh-pre[data-type="shell"] .keyword {color: #ff5252;}\n.ssh-pre[data-type="shell"] .param {color: #f63;}\n\n.ssh-pre[data-type="html"] .tag-name {color: #11c;}\n.ssh-pre[data-type="html"] .attribute {color: #f63;}\n\n.ssh-pre[data-type="html-vue"] .tag-name {color: #42b983;}\n.ssh-pre[data-type="html-vue"] .punctuation {color: #128953;}\n.ssh-pre[data-type="html-vue"] .attribute {color: #ff5252;}\n\n.ssh-pre[data-type="xml"] .tag-name {color: #11c;}\n.ssh-pre[data-type="xml"] .attribute {color: #f93;}\n\n.ssh-pre[data-type="css"] .selector {color: #f0d;}\n.ssh-pre[data-type="css"] .selector.class-id {color: #f0d;}\n.ssh-pre[data-type="css"] .pseudo {color: #f35;}\n.ssh-pre[data-type="css"] .selector.keyword {color: #f5f;}\n.ssh-pre[data-type="css"] .selector.keyword.vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .keyword {color: #c06;}\n.ssh-pre[data-type="css"] .attribute {color: #70d;}\n.ssh-pre[data-type="css"] .attribute.keyword {color: #e28;}\n.ssh-pre[data-type="css"] .attribute.keyword.vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .value {color: #c11;}\n.ssh-pre[data-type="css"] .value.vendor {color: #0c8;}\n.ssh-pre[data-type="css"] .color {background: #eee;padding: 0px 3px;border: 1px solid rgba(0,0,0,.1);border-radius: 3px;}\n.ssh-pre[data-type="css"] .unit {color: #0bc;}\n.ssh-pre[data-type="css"] .important {color: #f00;font-weight: bold;}\n')]),e._m(13),n("ssh-pre",{attrs:{language:"xml",label:"index.html"}},[e._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <meta http-equiv="Content-language" content="en">\n  <meta name="description" content="Some description.">\n  <meta name="keywords" content="Some keywords.">\n  <title>Title</title>\n  \x3c!-- <link href=\'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons\' rel="stylesheet"> --\x3e\n</head>\n<body>\n  <a name="top"></a>\n  <div id="app"></div>\n</body>\n</html>\n')]),e._m(14),n("ssh-pre",{attrs:{language:"json",label:"package.json"}},[e._v('{\n  "name": "",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "start": ""\n  },\n  "devDependencies": {\n    "vue": "^2.5.16",\n    "vue-loader": "^13.7.2",\n    "vuetify": "^1.1.1"\n  },\n  "repository": {\n  },\n  "dependencies": {},\n  "postcss": {\n    "plugins": {\n      "autoprefixer": {}\n    }\n  },\n  "browserslist": [\n    "last 5 version",\n    "ie 9",\n    "iOS >= 9"\n  ]\n}\n')]),e._m(15),n("ssh-pre",{attrs:{language:"php",label:"index.php"}},[e._v("<?php\n\nrequire_once __DIR__ . '/../autoload.php';\n$config = parse_ini_file('config.ini');\n\nif (!empty($_POST[\"session\"]))\n{\n    unset($_SESSION);\n    session_id($_POST[\"session\"]);\n}\n\nheader('Content-type: application/json');\n\ntry\n{\n    if (empty($_POST[\"user\"]))\n    {\n        throw new Exception(\"Bad Request:user\", 400);\n    }\n\n    if (empty($_POST[\"session\"]))\n    {\n        throw new Exception(\"Bad Request:session\", 400);\n    }\n\n    if (!$isLoggedIn)\n    {\n        throw new Exception(\"Cannot login.\");\n    }\n\n    echo json_encode(true);\n}\ncatch (Exception $e)\n{\n    if ($e->getCode() === 0)\n    {\n        header($_SERVER['SERVER_PROTOCOL'] . ' 500 Internal Server Error', true, 500);\n    }\n\n    else\n    {\n        header($_SERVER['SERVER_PROTOCOL'] . ' ' . $e->getCode() . ' ' . $e->getMessage(), true, $e->getCode());\n    }\n\n    error_log('There was an error here');\n\n    echo json_encode([\n        'exception' => [\n            'code' => $e->getCode(),\n            'message' => $e->getMessage()\n        ]\n    ]);\n}\nfinally\n{\n    // Something.\n}\n\n?>")])],1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("a",{attrs:{href:"#notes"}},[e._v("Notes")]),n("a",{attrs:{name:"notes"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("This is a lightweight yet efficient and reactive Vue JS syntax highlighter.\n"),n("br"),e._v("It reads the source code you give it and highlights it, for Humans.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("XML")]),n("li",[e._v("HTML")]),n("li",[e._v("HTML Vue JS Template")]),n("li",[e._v("Javascript")]),n("li",[e._v("JSON")]),n("li",[e._v("CSS")]),n("li",[e._v("PHP")]),n("li",[e._v("MySQL")]),n("li",[e._v("No support for nested languages")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("a",{attrs:{href:"#installation"}},[e._v("Installation")]),n("a",{attrs:{name:"installation"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You have two options: "),n("em",[e._v("NPM")]),e._v(" "),n("strong",{staticClass:"mx-2"},[e._v("or")]),e._v(" "),n("span",{staticClass:"code"},[e._v("<script>")]),e._v(" tag.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",{staticClass:"mt-8"},[e._v("Via "),n("span",{staticClass:"code"},[e._v("<script>")]),e._v(" tag")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Include the Simple Syntax Highlighter script in your document "),n("span",{staticClass:"code"},[e._v("<head>")]),e._v(" as follows:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("a",{attrs:{href:"#how-to-use"}},[e._v("How to use")]),n("a",{attrs:{name:"how-to-use"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("a",{attrs:{href:"#options"}},[e._v("options")]),n("a",{attrs:{name:"options"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("code",[e._v("label")]),n("span",{staticClass:"code cyan--text text--darken-3 mx-2"},[e._v("{String}")]),n("span",{staticClass:"code blue--text text--darken-1 mx-2"},[e._v("Default: "),n("strong",[e._v("''")])]),n("p",[e._v("A label to show on the top right of the ssh-pre box. If empty no label will show up.")])]),n("li",[n("code",[e._v("language")]),n("span",{staticClass:"code cyan--text text--darken-3 mx-2"},[e._v("{String}")]),n("span",{staticClass:"code blue--text text--darken-1 mx-2"},[e._v("Default: "),n("strong",[e._v("''")])]),n("p",[e._v("One of the supported programming languages to syntax highlight.")])]),n("li",[n("code",[e._v("reactive")]),n("span",{staticClass:"code cyan--text text--darken-3 mx-2"},[e._v("{Boolean}")]),n("span",{staticClass:"code blue--text text--darken-1 mx-2"},[e._v("Default: "),n("strong",[e._v("false")])]),n("p",[e._v("Makes this ssh-pre box reactive to variable changes.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("a",{attrs:{href:"#examples"}},[e._v("Examples of rendering with different languages")]),n("a",{attrs:{name:"examples"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("a",{attrs:{href:"#ex--javascript"}},[e._v("javascript")]),n("a",{attrs:{name:"ex--javascript"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("a",{attrs:{href:"#ex--css"}},[e._v("CSS")]),n("a",{attrs:{name:"ex--css"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("a",{attrs:{href:"#ex--html"}},[e._v("HTML")]),n("a",{attrs:{name:"ex--html"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("a",{attrs:{href:"#ex--json"}},[e._v("JSON")]),n("a",{attrs:{name:"ex--json"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("a",{attrs:{href:"#ex--php"}},[e._v("PHP")]),n("a",{attrs:{name:"ex--php"}})])}],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",{staticClass:"ssh-pre",attrs:{"data-type":e.language,"data-label":e.label},domProps:{innerHTML:e._s(e.content)}})},h=[],d=(n("99af"),n("c975"),n("a15b"),n("d81d"),n("fb6a"),n("b64b"),n("acd8"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("3835")),m={quote:/("(?:\\"|[^"])*")|('(?:\\'|[^'])*')/,comment:/(\/\/.*|\/\*[\s\S]*?\*\/)/,htmlTag:/(<([^>])*>)/,punctuation:/(!==?|(?:[[\](){}.:;,+\-?=!]|&lt;|&gt;)+|&&|\|\|)/,number:/(-?(?:\.\d+|\d+(?:\.\d+)?))/,boolean:/\b(true|false)\b/},f={shell:{quote:m.quote,comment:/(#.*?)\n/,keyword:/(?:^|\b)(npm|yarn|install|run)(?:\b|$)/,param:/( --(?:save|save-dev))(?:\s|$)/},xml:{quote:m.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-zA-Z\-:]+)(.*?)(\/?&gt;)/},html:{quote:m.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-z]\w*)(.*?)(\/?&gt;)/},"html-vue":{quote:m.quote,comment:/(&lt;!--[\s\S]*?--&gt;)/,tag:/(&lt;\/?)([a-z][a-z_-]*)((?:.|\s)*?)(\/?&gt;)/},css:{quote:m.quote,comment:/(\/\*[\s\S]*?\*\/)/,pseudo:/(:(?:hover|active|focus|visited|not|before|after|(?:first|last|nth)-child))/,"selector keyword vendor":/(@-(?:moz|o|webkit|ms)-(?=keyframes\s))/,"selector keyword":/((?:@(?:import|media|font-face|keyframes)|screen|print|and)(?=[\s({])|keyframes|\s(?:ul|ol|li|table|div|pre|p|a|img|br|hr|h[1-6]|em|strong|span|html|body|iframe|video|audio|input|button|form|label|fieldset|small|abbr|i|dd|dt)\b)/,selector:/((?:[.#-\w*+ >:,[\]="~\n]|&gt;)+)(?=\s*\{)/,"attribute keyword vendor":/(-(?:moz|o|webkit|ms)-(?=transform|transition|user-select|animation|background-size|box-shadow))/,"attribute keyword":/\b(content|float|display|position|top|left|right|bottom|(?:(?:max|min)-)?width|(?:(?:max|min|line)-)?height|font(?:-(?:family|style|size|weight|variant|stretch))?|vertical-align|color|opacity|visibility|z-index|transform(?:-(?:origin|style|delay|duration|property|timing-function))?|transition(?:-(?:delay|duration))?|animation(?:-(?:name|delay|duration|direction|fill-mode))?|backface-visibility|background(?:-(?:color|position|image|repeat|size))?|(?:padding|margin|border)(?:-(?:top|left|right|bottom))?|border(?:-(?:radius|color|width|style|spacing))|white-space|text-(?:align|transform|decoration|shadow|indent)|overflow(?:-(?:x|y))?|(?:letter|word)-spacing|word-break|box-(?:sizing|shadow)|stroke(?:-(?:width|opacity|dasharray|dashoffset|linecap|linejoin))?|fill|speak|outline|user-select|cursor|flex(?:-(?:direction|flow|grow|shrink|basis|wrap))?|(?:justify|align)-(?:content|self|items))(?=\s*:)/,"value keyword vendor":/(-(?:moz|o|webkit|ms)-(?=linear-gradient))/,"value keyword important":/( ?!important)/,"value keyword":/\b(inherit|initial|normal|none|unset|auto|inline-block|inline|block|absolute|relative|static|fixed|sticky|hidden|visible|top|left|right|bottom|center|middle|baseline|solid|dotted|dashed|line-through|(?:over|under)line|wavy|double|(?:pre-|no)?wrap|pre|break-word|(?:upper|lower)case|capitalize|italic|bold|attr\(.*?\)|linear|ease(?:-in)?(?:-out)?|all|infinite|cubic-bezier|(?:translate|rotate)(?:[X-Z]|3d)?|skew[XY]?|scale|(?:no-)?repeat|repeat(?:-x|-y)|contain|cover|url|(?:repeating-)?(?:linear|radial)-gradient|inset|pointer|flex(?:-(?:start|end))?|stretch|row(?:-reverse)?|column(?:-reverse)?)(?=\s*[,;}(]|\s+[\da-z])/,number:m.number,color:/(transparent|#(?:[\da-fA-F]{6}|[\da-fA-F]{3})|rgba?\([\d., ]*\))/,htmlentity:/(&.*?;)/,punctuation:/([:,;{}@#()!]+|&lt;|&gt;)/,attribute:/([a-zA-Z-]+)(?=\s*:)/,unit:/(px|pt|cm|%|r?em|m?s|deg|vh|vw|vmin|vmax)(?=(?:\s*[;,{}})]|\s+[-\da-z#]))/},json:{quote:m.quote,comment:m.comment,number:m.number,boolean:m["boolean"],punctuation:/([[\](){}:;,-]+)/},js:{quote:m.quote,comment:m.comment,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:m["boolean"],this:/\b(this)(?=\W)/,keyword:/\b(new|getElementsBy(?:Tag|Class|)Name|getElementById|arguments|if|else|do|return|case|default|(?:f|F)unction|typeof|instanceof|undefined|document|window|while|for|forEach|switch|in|break|continue|length|var|let|const|export|import|require|from|Number|Boolean|String|Array|Object|RegExp|Integer|Date|(?:clear|set)(?:Timeout|Interval)|parse(?:Int|Float)|Math(?=\.)|isNaN)(?=\W)/,punctuation:/(!==?|(?:[[\]!(){}:;,+\-%*/?=]|&lt;|&gt;)+|\.+(?![a-zA-Z])|&amp;&amp;|\|\|)/,variable:/(\.?[a-zA-Z_][\w\d]*)/,htmlentity:/(&.*?;)/,"external-var":/(\$|jQuery|JSON)(?=\W|$)/},php:{quote:m.quote,comment:m.comment,special:/(&lt;\?php|\?&gt;|__(?:DIR|FILE|LINE)__)/,punctuation:m.punctuation,number:m.number,boolean:m["boolean"],variable:/(\$[\w\d_]+)/,keyword:/\b(define|echo|die|exit|print_r|var_dump|if|else|elseif|do|return|case|default|function|\$this|while|foreach|for|switch|in|break|continue|empty|isset|unset|parse_ini_file|session_(?:start|destroy|id)|header|json_(?:encode|decode)|error_log|(require|include)(:?_once)?|try|throw|new|Exception|catch|finally|preg_(?:match|replace)|list|strlen|substr|str_replace|array_(?:keys|values))(?=\W|$)/},sql:{quote:m.quote,comment:m.comment,punctuation:m.punctuation,number:/\b(\d+(?:\.\d+)?|null)\b/,boolean:m["boolean"],keyword:/\b(\*|CREATE|ALL|DATABASE|TABLE|GRANT|PRIVILEGES|IDENTIFIED|FLUSH|SELECT|UPDATE|DELETE|INSERT|FROM|WHERE|(?:ORDER|GROUP) BY|LIMIT|(?:(?:LEFT|RIGHT|INNER|OUTER) |)JOIN|AS|ON|COUNT|CASE|TO|IF|WHEN|BETWEEN|AND|OR|CONCAT)(?=\W|$)/}},g={xml:/(\s*)([a-zA-Z\-:]+)=("|')(.*?)\3/g,html:/(\s*)([a-zA-Z-]+)=("|')(.*?)\3/g,"html-vue":/(\s*)(:?[a-zA-Z-]+)(?:(?:=("|')(.*?)\3)|)/g},v={name:"sshpre",props:{language:{type:String,default:""},label:{type:[String,Boolean],default:!1},reactive:{type:Boolean,default:!1}},data:function(){return{knownLanguages:Object.keys(f),content:"",slotTexts:""}},methods:{htmlize:function(e){return e.replace(/&(lt|gt|amp);/g,(function(e,t){return{lt:"<",gt:">",amp:"&"}[t]}))},unhtmlize:function(e){return e.replace(/[<>]/g,(function(e){return{"<":"&lt;",">":"&gt;"}[e]}))},isColorDark:function(e){var t,n,a,s,r,o;if(t=e.match(/rgba?\((.*),\s*(.*),\s*(.*?)(?:,\s*([^)]*))\)/))a=parseInt(t[1])<=100,s=parseInt(t[2])<=100,r=parseInt(t[3])<=100,o=parseFloat(t[4])<.3;else if(n=e.match(/#([\da-f]{3}(?:[\da-f]{3})?)/)){var i=3===n[1].length;a=parseInt(n[1][0])<=9,s=parseInt(n[1][i?1:2])<=9,r=parseInt(n[1][i?2:4])<=9}return(a&&s&&r||a&&s&&!r||!a&&s&&r)&&!o},createRegexPattern:function(){var e="",t=[];for(var n in f[this.language])t.push(n),"quote"===n&&t.push(n),["xml","html","html-vue"].indexOf(this.language)>-1&&"tag"===n&&t.push(n,n,n),e+=(e?"|":"")+f[this.language][n].source;return[e,t]},syntaxHighlightHtmlTag:function(e){var t=e.slice(3),n=function(){return"".concat(arguments[1],'<span class="attribute">').concat(arguments[2],"</span>")+(arguments[4]?'<span class="punctuation">=</span>':"")+(arguments[4]?'<span class="quote">'.concat(arguments[3]||"").concat(arguments[4]||"").concat(arguments[3]||"","</span>"):"")},a=(t[2]||"").replace(g[this.language],n);return'<span class="punctuation">'.concat(t[0],"</span>")+'<span class="tag-name">'.concat(t[1],"</span>")+a+'<span class="punctuation">'.concat(t[3],"</span>")},syntaxHighlightContent:function(e){var t=this;if(this.knownLanguages.indexOf(this.language)>-1){var n=this.createRegexPattern(),a=Object(d["a"])(n,2),s=a[0],r=a[1];e=this.unhtmlize(e).replace(new RegExp(s,"g"),(function(){for(var e,n,a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];for(var i=Array.prototype.slice.call(s,1,s.length-2),l=0;l<i.length;l++)if(i[l]){e=i[l],n=r[l];break}if("quote"===n&&(e=t.unhtmlize(s[1]||s[2])),"comment"===n&&(e=t.unhtmlize(e)),"tag"===n&&["xml","html","html-vue"].indexOf(t.language)>-1)return t.syntaxHighlightHtmlTag(i);if("variable"===n&&"."===e[0]&&"js"===t.language)return'<span class="punctuation">.</span><span class="objAttr">'.concat(e.substr(1),"</span>");var c="";return"color"===n&&"css"===t.language&&(c=' style="background-color: '.concat(e,";color: #").concat(t.isColorDark(e)?"fff":"000",'"')),'<span class="'.concat(n,'"').concat(c,">").concat(e,"</span>")}))}return e},checkSlots:function(){var e=(this.$slots["default"]||[]).map((function(e){return e.text||""})).join("");this.slotTexts!==e&&(this.slotTexts=e,this.content=this.syntaxHighlightContent(this.slotTexts))}},mounted:function(){this.checkSlots()},beforeUpdate:function(){this.reactive&&this.checkSlots()}},b=v,_=(n("efad"),n("2877")),y=Object(_["a"])(b,u,h,!1,null,null,null),x=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",class:"highlight highlight--"+e.type},[e.noIcon?e._e():n("v-icon",[e._v(e._s(e.icon))]),e._t("default")],2)},k=[],E={props:{tag:{type:String,default:"p"},type:{type:String,default:"info"},noIcon:{type:Boolean,default:!1}},computed:{icon:function(){switch(this.type){case"success":return"check";case"error":return"close";case"warning":return"priority_high";case"tips":return"wb_incandescent";case"info":default:return"priority_high"}}}},S=E,T=(n("aef5"),Object(_["a"])(S,w,k,!1,null,null,null)),C=T.exports,O={components:{sshPre:x,Highlight:C}},j=O,$=(n("c072"),Object(_["a"])(j,c,p,!1,null,null,null)),I=$.exports;a["default"].directive("scroll",{inserted:function(e,t){var n=function n(a){t.value(a,e)&&window.removeEventListener("scroll",n)};window.addEventListener("scroll",n)}});var q={name:"app",components:{documentation:I},data:function(){return{offsetTop:0,goTopHidden:!0}},methods:{onScroll:function(){this.offsetTop=window.pageYOffset||document.documentElement.scrollTop,this.goTopHidden=this.offsetTop<200}}},H=q,L=(n("6294"),Object(_["a"])(H,i,l,!1,null,null,null)),R=L.exports;a["default"].config.productionTip=!1,new a["default"]({vuetify:o,render:function(e){return e(R)}}).$mount("#app")},6294:function(e,t,n){"use strict";var a=n("437c"),s=n.n(a);s.a},aef5:function(e,t,n){"use strict";var a=n("e42b"),s=n.n(a);s.a},b39c:function(e,t,n){},c072:function(e,t,n){"use strict";var a=n("392c"),s=n.n(a);s.a},e42b:function(e,t,n){},efad:function(e,t,n){"use strict";var a=n("b39c"),s=n.n(a);s.a}});
//# sourceMappingURL=app.d4d16755.js.map