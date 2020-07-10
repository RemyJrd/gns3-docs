(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(184)),i={id:"qemu-system-uuid",title:"Qemu system UUID",sidebar_label:"Qemu system UUID"},s={id:"emulators/qemu-system-uuid",isDocsHomePage:!1,title:"Qemu system UUID",description:"Like any real computer, Qemu attributes a UUID to the system. This is stored in the SMBIOS:",source:"@site/docs/emulators/qemu-system-uuid.md",permalink:"/gns3-docs/docs/emulators/qemu-system-uuid",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/emulators/qemu-system-uuid.md",sidebar_label:"Qemu system UUID",sidebar:"someSidebar",previous:{title:"VPCS",permalink:"/gns3-docs/docs/emulators/vpcs"},next:{title:"Contribute to GNS3",permalink:"/gns3-docs/docs/contribute/contribute-to-gns3"}},c=[],u={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Like any real computer, Qemu attributes a UUID to the system. This is stored in the SMBIOS:"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://software.intel.com/en-us/Uniqueness-of-UUID"}),"https://software.intel.com/en-us/Uniqueness-of-UUID")),Object(a.b)("p",null,"Most of the time, you won\u2019t need to set a UUID yourself. However this information could be used by vendors (for example), to check for a valid licence."),Object(a.b)("p",null,"A UUID is generated by default for each node included in a project. This UUID is kept across machine reboots."),Object(a.b)("p",null,"To force a UUID, you will have to pass the ",Object(a.b)("inlineCode",{parentName:"p"},"-uuid")," option to the Qemu command line. This can be set in the advanced settings tab, when editing a nodes global configuration:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"../../img/qemu-system-uuid/1.jpg",alt:"screenshot"}))))}l.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),b=r,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||a;return n?o.a.createElement(d,s(s({ref:t},u),{},{components:n})):o.a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);