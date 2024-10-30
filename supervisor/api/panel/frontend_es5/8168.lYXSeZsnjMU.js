"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[8168,9832],{88168:function(r,e,t){t.r(e),t.d(e,{REDIRECTS:function(){return g}});var o,i,a=t(658),n=t(64599),s=t(35806),c=t(71008),l=t(62193),u=t(2816),d=t(27927),h=t(35890),p=(t(71499),t(81027),t(99471),t(10507),t(39790),t(253),t(54846),t(66555),t(50349)),v=t(50289),f=t(29818),m=t(16312),y=t(56932),g=(t(29832),{supervisor:{redirect:"/hassio/dashboard"},supervisor_logs:{redirect:"/hassio/system"},supervisor_info:{redirect:"/hassio/system"},supervisor_snapshots:{redirect:"/hassio/backups"},supervisor_backups:{redirect:"/hassio/backups"},supervisor_store:{redirect:"/hassio/store"},supervisor_addons:{redirect:"/hassio/dashboard"},supervisor_addon:{redirect:"/hassio/addon",params:{addon:"string"},optional_params:{repository_url:"url"}},supervisor_ingress:{redirect:"/hassio/ingress",params:{addon:"string"}},supervisor_add_addon_repository:{redirect:"/hassio/store",params:{repository_url:"url"}}});(0,d.A)([(0,f.EM)("hassio-my-redirect")],(function(r,e){var t=function(e){function t(){var e;(0,c.A)(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=(0,l.A)(this,t,[].concat(i)),r(e),e}return(0,u.A)(t,e),(0,s.A)(t)}(e);return{F:t,d:[{kind:"field",decorators:[(0,f.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.MZ)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,f.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,f.wk)()],key:"_error",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,h.A)(t,"connectedCallback",this,3)([]);var r=this.route.path.substr(1),e=g[r];if(e){var i;try{i=this._createRedirectUrl(e)}catch(a){return void(this._error=this.supervisor.localize("my.error"))}(0,m.o)(i,{replace:!0})}else this._error=this.supervisor.localize("my.not_supported",{link:(0,v.qy)(o||(o=(0,n.A)(['<a target="_blank" rel="noreferrer noopener" href="https://my.home-assistant.io/faq.html#supported-pages"> '," </a>"])),this.supervisor.localize("my.faq_link"))})}},{kind:"method",key:"render",value:function(){return this._error?(0,v.qy)(i||(i=(0,n.A)(['<hass-error-screen .error="','"></hass-error-screen>'])),this._error):v.s6}},{kind:"method",key:"_createRedirectUrl",value:function(r){var e=this._createRedirectParams(r);return"".concat(r.redirect).concat(e)}},{kind:"method",key:"_createRedirectParams",value:function(r){var e=this,t=(0,y.px)();if(!r.params&&!Object.keys(t).length)return"";var o={};return Object.entries(r.params||{}).forEach((function(r){var i=(0,a.A)(r,2),n=i[0],s=i[1];if(!t[n]||!e._checkParamType(s,t[n]))throw Error();o[n]=t[n]})),Object.entries(r.optional_params||{}).forEach((function(r){var i=(0,a.A)(r,2),n=i[0],s=i[1];if(t[n]){if(!e._checkParamType(s,t[n]))throw Error();o[n]=t[n]}})),"?".concat((0,y.KH)(o))}},{kind:"method",key:"_checkParamType",value:function(r,e){return"string"===r||"url"===r&&(e&&e===(0,p.J)(e))}}]}}),v.WF)},1412:function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.BLANK_URL=e.relativeFirstCharacters=e.whitespaceEscapeCharsRegex=e.urlSchemeRegex=e.ctrlCharactersRegex=e.htmlCtrlEntityRegex=e.htmlEntitiesRegex=e.invalidProtocolRegex=void 0,e.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,e.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,e.htmlCtrlEntityRegex=/&(newline|tab);/gi,e.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,e.urlSchemeRegex=/^.+(:|&colon;)/gim,e.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,e.relativeFirstCharacters=[".","/"],e.BLANK_URL="about:blank"},50349:function(r,e,t){t(82386),t(39805),t(95737),t(39790),t(36016),t(98185),t(7760),t(36604),t(99019),t(29276),t(43037),t(79641),t(70888),t(96858),t(84341),t(15495),t(49365),t(38389),t(74860),t(71011),t(71174),e.J=void 0;var o=t(1412);function i(r){try{return decodeURIComponent(r)}catch(e){return r}}e.J=function(r){if(!r)return o.BLANK_URL;var e,t,a=i(r.trim());do{e=(a=i(a=(t=a,t.replace(o.ctrlCharactersRegex,"").replace(o.htmlEntitiesRegex,(function(r,e){return String.fromCharCode(e)}))).replace(o.htmlCtrlEntityRegex,"").replace(o.ctrlCharactersRegex,"").replace(o.whitespaceEscapeCharsRegex,"").trim())).match(o.ctrlCharactersRegex)||a.match(o.htmlEntitiesRegex)||a.match(o.htmlCtrlEntityRegex)||a.match(o.whitespaceEscapeCharsRegex)}while(e&&e.length>0);var n=a;if(!n)return o.BLANK_URL;if(function(r){return o.relativeFirstCharacters.indexOf(r[0])>-1}(n))return n;var s=n.trimStart(),c=s.match(o.urlSchemeRegex);if(!c)return n;var l=c[0].toLowerCase().trim();if(o.invalidProtocolRegex.test(l))return o.BLANK_URL;var u=s.replace(/\\/g,"/");if("mailto:"===l||l.includes("://"))return u;if("http:"===l||"https:"===l){if(!function(r){return URL.canParse(r)}(u))return o.BLANK_URL;var d=new URL(u);return d.protocol=d.protocol.toLowerCase(),d.hostname=d.hostname.toLowerCase(),d.toString()}return u}},56932:function(r,e,t){t.d(e,{KH:function(){return c},p9:function(){return s},px:function(){return n}});var o=t(658),i=t(64782),a=(t(64017),t(95737),t(99471),t(39790),t(36016),t(7760),t(99019),t(20529),t(253),t(54846),t(66555),t(96858),t(38389),t(74860),t(71011),t(71174),t(542)),n=function(){var r,e={},t=new URLSearchParams(a.G.location.search),n=(0,i.A)(t.entries());try{for(n.s();!(r=n.n()).done;){var s=(0,o.A)(r.value,2),c=s[0],l=s[1];e[c]=l}}catch(u){n.e(u)}finally{n.f()}return e},s=function(r){return new URLSearchParams(a.G.location.search).get(r)},c=function(r){var e=new URLSearchParams;return Object.entries(r).forEach((function(r){var t=(0,o.A)(r,2),i=t[0],a=t[1];e.append(i,a)})),e.toString()}},13292:function(r,e,t){t.r(e);var o,i,a,n,s=t(14842),c=t(64599),l=t(35806),u=t(71008),d=t(62193),h=t(2816),p=t(27927),v=(t(81027),t(50289)),f=t(29818),m=t(85323),y=t(34897),g=(t(4169),t(88400),{info:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z",warning:"M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16",error:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",success:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"});(0,p.A)([(0,f.EM)("ha-alert")],(function(r,e){var t=function(e){function t(){var e;(0,u.A)(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=(0,d.A)(this,t,[].concat(i)),r(e),e}return(0,h.A)(t,e),(0,l.A)(t)}(e);return{F:t,d:[{kind:"field",decorators:[(0,f.MZ)()],key:"title",value:function(){return""}},{kind:"field",decorators:[(0,f.MZ)({attribute:"alert-type"})],key:"alertType",value:function(){return"info"}},{kind:"field",decorators:[(0,f.MZ)({type:Boolean})],key:"dismissable",value:function(){return!1}},{kind:"method",key:"render",value:function(){return(0,v.qy)(o||(o=(0,c.A)([' <div class="issue-type ','" role="alert"> <div class="icon ','"> <slot name="icon"> <ha-svg-icon .path="','"></ha-svg-icon> </slot> </div> <div class="content"> <div class="main-content"> ',' <slot></slot> </div> <div class="action"> <slot name="action"> '," </slot> </div> </div> </div> "])),(0,m.H)((0,s.A)({},this.alertType,!0)),this.title?"":"no-title",g[this.alertType],this.title?(0,v.qy)(i||(i=(0,c.A)(['<div class="title">',"</div>"])),this.title):"",this.dismissable?(0,v.qy)(a||(a=(0,c.A)(['<ha-icon-button @click="','" label="Dismiss alert" .path="','"></ha-icon-button>'])),this._dismiss_clicked,"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"):"")}},{kind:"method",key:"_dismiss_clicked",value:function(){(0,y.r)(this,"alert-dismissed-clicked")}},{kind:"field",static:!0,key:"styles",value:function(){return(0,v.AH)(n||(n=(0,c.A)(['.issue-type{position:relative;padding:8px;display:flex}.issue-type::after{position:absolute;top:0;right:0;bottom:0;left:0;opacity:.12;pointer-events:none;content:"";border-radius:4px}.icon{z-index:1}.icon.no-title{align-self:center}.content{display:flex;justify-content:space-between;align-items:center;width:100%;text-align:var(--float-start)}.action{z-index:1;width:min-content;--mdc-theme-primary:var(--primary-text-color)}.main-content{overflow-wrap:anywhere;word-break:break-word;margin-left:8px;margin-right:0;margin-inline-start:8px;margin-inline-end:0}.title{margin-top:2px;font-weight:700}.action ha-icon-button,.action mwc-button{--mdc-theme-primary:var(--primary-text-color);--mdc-icon-button-size:36px}.issue-type.info>.icon{color:var(--info-color)}.issue-type.info::after{background-color:var(--info-color)}.issue-type.warning>.icon{color:var(--warning-color)}.issue-type.warning::after{background-color:var(--warning-color)}.issue-type.error>.icon{color:var(--error-color)}.issue-type.error::after{background-color:var(--error-color)}.issue-type.success>.icon{color:var(--success-color)}.issue-type.success::after{background-color:var(--success-color)}:host ::slotted(ul){margin:0;padding-inline-start:20px}'])))}}]}}),v.WF)},29832:function(r,e,t){t.r(e);var o,i,a,n,s,c=t(64599),l=t(35806),u=t(71008),d=t(62193),h=t(2816),p=t(27927),v=(t(81027),t(72606),t(50289)),f=t(29818);t(45346),t(83487),t(13292),(0,p.A)([(0,f.EM)("hass-error-screen")],(function(r,e){var t=function(e){function t(){var e;(0,u.A)(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=(0,d.A)(this,t,[].concat(i)),r(e),e}return(0,h.A)(t,e),(0,l.A)(t)}(e);return{F:t,d:[{kind:"field",decorators:[(0,f.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,f.MZ)({type:Boolean})],key:"toolbar",value:function(){return!0}},{kind:"field",decorators:[(0,f.MZ)({type:Boolean})],key:"rootnav",value:function(){return!1}},{kind:"field",decorators:[(0,f.MZ)({type:Boolean})],key:"narrow",value:function(){return!1}},{kind:"field",decorators:[(0,f.MZ)()],key:"error",value:void 0},{kind:"method",key:"render",value:function(){var r,e;return(0,v.qy)(o||(o=(0,c.A)([" ",' <div class="content"> <ha-alert alert-type="error">','</ha-alert> <slot> <mwc-button @click="','"> '," </mwc-button> </slot> </div> "])),this.toolbar?(0,v.qy)(i||(i=(0,c.A)(['<div class="toolbar"> '," </div>"])),this.rootnav||null!==(r=history.state)&&void 0!==r&&r.root?(0,v.qy)(a||(a=(0,c.A)([' <ha-menu-button .hass="','" .narrow="','"></ha-menu-button> '])),this.hass,this.narrow):(0,v.qy)(n||(n=(0,c.A)([' <ha-icon-button-arrow-prev .hass="','" @click="','"></ha-icon-button-arrow-prev> '])),this.hass,this._handleBack)):"",this.error,this._handleBack,null===(e=this.hass)||void 0===e?void 0:e.localize("ui.common.back"))}},{kind:"method",key:"_handleBack",value:function(){history.back()}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,v.AH)(s||(s=(0,c.A)([":host{display:block;height:100%;background-color:var(--primary-background-color)}.toolbar{display:flex;align-items:center;font-size:20px;height:var(--header-height);padding:8px 12px;pointer-events:none;background-color:var(--app-header-background-color);font-weight:400;color:var(--app-header-text-color,#fff);border-bottom:var(--app-header-border-bottom,none);box-sizing:border-box}@media (max-width:599px){.toolbar{padding:4px}}ha-icon-button-arrow-prev{pointer-events:auto}.content{color:var(--primary-text-color);height:calc(100% - var(--header-height));display:flex;padding:16px;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box}a{color:var(--primary-color)}ha-alert{margin-bottom:16px}"])))]}}]}}),v.WF)},37962:function(r,e,t){var o=t(38971).start,i=t(34465);r.exports=i("trimStart")?function(){return o(this)}:"".trimStart},99471:function(r,e,t){var o=t(41765),i=t(23476).entries;o({target:"Object",stat:!0},{entries:function(r){return i(r)}})},34635:function(r,e,t){var o=t(41765),i=t(37962);o({target:"String",proto:!0,name:"trimStart",forced:"".trimLeft!==i},{trimLeft:i})},70888:function(r,e,t){t(34635);var o=t(41765),i=t(37962);o({target:"String",proto:!0,name:"trimStart",forced:"".trimStart!==i},{trimStart:i})},15495:function(r,e,t){var o=t(41765),i=t(17052),a=t(26906),n=t(15805),s=t(53138),c=t(67333),l=i("URL"),u=c&&a((function(){l.canParse()})),d=a((function(){return 1!==l.canParse.length}));o({target:"URL",stat:!0,forced:!u||d},{canParse:function(r){var e=n(arguments.length,1),t=s(r),o=e<2||void 0===arguments[1]?void 0:s(arguments[1]);try{return!!new l(t,o)}catch(i){return!1}}})}}]);
//# sourceMappingURL=8168.lYXSeZsnjMU.js.map