(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{403:function(t,s,a){"use strict";a.r(s);var e=a(21),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"introduction"}},[t._v("Introduction")]),t._v(" "),a("p",[t._v("Vue Dependencies badges is a small component to allow you to display which dependencies used by a project. We can find many badges project, I choose to use statics badges TODO builder of "),a("a",{attrs:{href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("shields.io")]),a("OutboundLink")],1),t._v(" and icons from "),a("a",{attrs:{href:"https://simpleicons.org/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("simpleicons.org")]),a("OutboundLink")],1),t._v(". The aim is to build static badges with label, icon, colored by techs and the version.\nI use a simple JSON file TODO to list all supported technologies by "),a("strong",[t._v("Vue Dependencies badges")]),t._v(" with label/icon/color/default version TODO. You can just indicate name of technology TODO to have a static badge with all features and default version TODO.")]),t._v(" "),a("vue-dep-badges",{attrs:{all:!0}}),t._v(" "),a("h2",{attrs:{id:"default-version"}},[t._v("Default version")]),t._v(" "),a("p",[t._v("Technologies evolve all the time, it's not possible to maintain all supported technologies up-to-date in JSON file. I often use a recent Long Time Supported version but it's not the last version. It's not a problem, you can indicate version in the prop, so you will see default version only if you use basic indication.")]),t._v(" "),a("h2",{attrs:{id:"install-it-with-yarn-or-npm"}},[t._v("Install it with Yarn or NPM")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vue-dependencies-badges\n")])])]),a("p",[a("strong",[t._v("OR")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vue-dependencies-badges --save-dev\n")])])]),a("h2",{attrs:{id:"import-vue-dependencies-badges"}},[t._v("Import Vue Dependencies badges")]),t._v(" "),a("p",[t._v("Import it in main.js, app.js or enhanceApp.js file")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Global: common JS")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" VueDependenciesBadges "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-dependencies-badges'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-dep-badges'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VueDependenciesBadges\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Global: ES6 (Vue-CLI users)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueDependenciesBadges "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-dependencies-badges'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueDependenciesBadges"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("hr"),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Optional: local")]),t._v(" "),a("p",[t._v("If you want to import the component just for a specific component")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-dep-badges")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":deps")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v('[["AndroidStudio"]]'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vue-dep-badges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VueDependenciesBadges "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-dependencies-badges'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    VueDepBadges"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" VueDependenciesBadges\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"props-list"}},[t._v("Props list")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Describe")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("deps")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[a("code",[t._v("[]")])]),t._v(" "),a("td",[t._v("List of dependencies, see syntax below")])]),t._v(" "),a("tr",[a("td",[t._v("iconsColored")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Set "),a("code",[t._v("true")]),t._v(" if you want to have colored icons")])]),t._v(" "),a("tr",[a("td",[t._v("all")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Disable "),a("code",[t._v("deps")]),t._v(" prop and list all techs supported")])])])]),t._v(" "),a("p",[t._v("You can use "),a("code",[t._v("deps")]),t._v(" prop with different ways:")]),t._v(" "),a("vue-dep-badges",{attrs:{deps:[["node.js","11.15"]]}}),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// declare version")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("deps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11.15"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'\n")])])]),a("vue-dep-badges",{attrs:{deps:[["node.js"]]}}),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// take default version")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("deps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'\n")])])]),a("h3",{attrs:{id:"list-of-supported-techs"}},[t._v("List of supported techs")]),t._v(" "),a("p",[t._v("All techs are in "),a("code",[t._v("database.json")]),t._v(", you can check it on "),a("a",{attrs:{href:"https://github.com/ewilan-riviere/vue-dependencies-badges/blob/master/lib/database.json",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("GitHub")]),a("OutboundLink")],1)]),t._v(" "),a("vue-dep-badges",{attrs:{all:!0}}),t._v(" "),a("h4",{attrs:{id:"syntax-of-label"}},[t._v("Syntax of label")]),t._v(" "),a("p",[t._v("To add a supported tech, you have to add like it")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("deps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"optionalVersion"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'\n")])])]),a("p",[t._v("But what can we add for label with space ?")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# just with spaces")]),t._v("\nlabel with spaces\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CamelCase")]),t._v("\nlabelWithSpaces\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dashes")]),t._v("\nlabel-with-spaces\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# underscores")]),t._v("\nlabel_with_spaces\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Examples")]),t._v(" "),a("p",[t._v("Basic case")]),t._v(" "),a("vue-dep-badges",{attrs:{deps:[["Visual Studio Code"]]}}),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("To have "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Visual Studio Code"')]),t._v("\n - Visual Studio Code\n - visual-studio-code\n - visual_studio_code\n - VisualStudioCode\n")])])]),a("p",[t._v("Specific case")]),t._v(" "),a("blockquote",[a("p",[t._v("For js technologies, we can find different syntaxes, so these component will check if "),a("code",[t._v("js")]),t._v(" is contain in label")])]),t._v(" "),a("vue-dep-badges",{attrs:{deps:[["NodeJS"]]}}),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("To have "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Node.js"')]),t._v("\n - nodejs\n - nodeJS\n - node-js\n - node.js\n")])])])],1),t._v(" "),a("h3",{attrs:{id:"to-add-not-supported-tech"}},[t._v("To add not supported tech")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Add definitively")]),t._v(" "),a("p",[t._v("If you use a tech on many documentation, it's could be more easily to add this tech to database.json. You have two options:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ewilan-riviere/vue-dependencies-badges/issues",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Open an issue")]),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Fork repository, update database.json and pull request")])])]),t._v(" "),a("p",[t._v("Basic")]),t._v(" "),a("vue-dep-badges",{attrs:{deps:[["My Tech","2.3"]]}}),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("deps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Tech"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'\n")])])]),a("p",[t._v("With details")]),t._v(" "),a("vue-dep-badges",{attrs:{deps:[[{label:"My Tech",version:"2.4",link:"http://my-domain.com",color:"3DDC84",colorIcon:"3DDC84",logo:"android"}]]}}),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("deps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    label"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Tech"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    version"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://my-domain.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3DDC84"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    colorIcon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3DDC84"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    logo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"android"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("'\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"import-in-any-component"}},[t._v("Import in any component")]),t._v(" "),a("p",[t._v("If "),a("strong",[t._v("Vue Dependencies badges")]),t._v(" is "),a("em",[t._v("globally")]),t._v(" imported, use it in a "),a("code",[t._v(".vue")]),t._v(" file or "),a("code",[t._v(".md")]),t._v(" file for Vuepress")]),t._v(" "),a("vue-dep-badges",{attrs:{deps:[["AndroidStudio"]]}}),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-dep-badges")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":deps")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v('[["AndroidStudio"]]'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vue-dep-badges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("vue-dep-badges",{attrs:{deps:[["visual studio code","1.4"],["visual_studio_code","1.2"],["visual-studio-code"],["nodejs"],["node-js","11.15"],["node.js","12.15"],["php"],["New tech"],["my tech","2.3"],[{label:"My new tech",version:"2.4",color:"3DDC84",logo:"android"}]]}}),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("vue-dep-badges")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":deps")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[\n        ['visual studio code', '1.4'],\n        ['visual_studio_code', '1.2'],\n        ['visual-studio-code'],\n        ['nodejs'],\n        ['node-js', '11.15'],\n        ['node.js', '12.15'],\n        ['php'],\n        ['New tech'],\n        ['my tech', '2.3'],\n        [\n          {\n            label: 'My new tech',\n            version: '2.4',\n            color: '3DDC84',\n            logo: 'android',\n          },\n        ],\n      ]"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("vue-dep-badges")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);