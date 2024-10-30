export const id=3395;export const ids=[3395];export const modules={33395:(e,t,o)=>{var i=o(36312),n=o(68689),a=(o(253),o(94438),o(50289)),s=o(29818),r=o(94100),d=o(34897),c=(o(68690),o(13292),o(26790),o(13082),o(88725),o(37679),o(85323));(0,i.A)([(0,s.EM)("ha-faded")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,s.MZ)({type:Number,attribute:"faded-height"})],key:"fadedHeight",value:()=>102},{kind:"field",decorators:[(0,s.wk)()],key:"_contentShown",value:()=>!1},{kind:"method",key:"render",value:function(){return a.qy` <div class="container ${(0,c.H)({faded:!this._contentShown})}" style="${this._contentShown?"":`max-height: ${this.fadedHeight}px`}" @click="${this._showContent}"> <slot @content-resize="${this._setShowContent}"></slot> </div> `}},{kind:"get",key:"_slottedHeight",value:function(){return(this.shadowRoot.querySelector(".container")?.firstElementChild).assignedElements().reduce(((e,t)=>e+t.offsetHeight),0)||0}},{kind:"method",key:"_setShowContent",value:function(){const e=this._slottedHeight;this._contentShown=0!==e&&e<=this.fadedHeight+50}},{kind:"method",key:"firstUpdated",value:function(e){(0,n.A)(o,"firstUpdated",this,3)([e]),this._setShowContent()}},{kind:"method",key:"_showContent",value:function(){this._contentShown=!0}},{kind:"get",static:!0,key:"styles",value:function(){return a.AH`.container{display:block;height:auto;cursor:default}.faded{cursor:pointer;-webkit-mask-image:linear-gradient(to bottom,black 25%,transparent 100%);mask-image:linear-gradient(to bottom,black 25%,transparent 100%);overflow-y:hidden}`}}]}}),a.WF);o(4169),o(56124),o(24640),o(88400),o(59588);var l=o(28584),h=o(26025),u=o(37266),p=o(15066),v=o(582),m=o(6121),y=o(55321),k=o(66232);const f={core:"Home Assistant Core",os:"Home Assistant Operating System",supervisor:"Home Assistant Supervisor"};(0,i.A)([(0,s.EM)("update-available-card")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"supervisor",value:void 0},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"route",value:void 0},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({attribute:!1})],key:"addonSlug",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_updateType",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_changelogContent",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_addonInfo",value:void 0},{kind:"field",decorators:[(0,s.wk)()],key:"_updating",value:()=>!1},{kind:"field",decorators:[(0,s.wk)()],key:"_error",value:void 0},{kind:"field",key:"_addonStoreInfo",value:()=>(0,r.A)(((e,t)=>t.find((t=>t.slug===e))))},{kind:"method",key:"render",value:function(){if(!this._updateType||"addon"===this._updateType&&!this._addonInfo)return a.s6;const e=((e,t)=>{if("addon"!==e)return"core"===e?t.includes("dev")?"https://github.com/home-assistant/core/commits/dev":t.includes("b")?"https://next.home-assistant.io/latest-release-notes/":"https://www.home-assistant.io/latest-release-notes/":"os"===e?t.includes("dev")?"https://github.com/home-assistant/operating-system/commits/dev":`https://github.com/home-assistant/operating-system/releases/tag/${t}`:"supervisor"===e?t.includes("dev")?"https://github.com/home-assistant/supervisor/commits/main":`https://github.com/home-assistant/supervisor/releases/tag/${t}`:void 0})(this._updateType,this._version_latest);return a.qy` <ha-card outlined .header="${this.supervisor.localize("update_available.update_name",{name:this._name})}"> <div class="card-content"> ${this._error?a.qy`<ha-alert alert-type="error">${this._error}</ha-alert>`:""} ${this._version===this._version_latest?a.qy`<p> ${this.supervisor.localize("update_available.no_update",{name:this._name})} </p>`:this._updating?a.qy`<ha-circular-progress aria-label="Updating" size="large" indeterminate> </ha-circular-progress> <p class="progress-text"> ${this.supervisor.localize("update_available.updating",{name:this._name,version:this._version_latest})} </p>`:a.qy` ${this._changelogContent?a.qy` <ha-faded> <ha-markdown .content="${this._changelogContent}"> </ha-markdown> </ha-faded> `:a.s6} <div class="versions"> <p> ${this.supervisor.localize("update_available.description",{name:this._name,version:this._version,newest_version:this._version_latest})} </p> </div> ${["core","addon"].includes(this._updateType)?a.qy` <hr> <ha-settings-row> <span slot="heading"> ${this.supervisor.localize("update_available.create_backup")} </span> <ha-switch id="create_backup" checked="checked"></ha-switch> </ha-settings-row> `:a.s6} `} </div> ${this._version===this._version_latest||this._updating?a.s6:a.qy` <div class="card-actions"> ${e?a.qy` <a href="${e}" target="_blank" rel="noreferrer"> <ha-button .label="${this.supervisor.localize("update_available.open_release_notes")}"> </ha-button> </a> `:a.s6} <span></span> <ha-progress-button @click="${this._update}"> ${this.supervisor.localize("common.update")} </ha-progress-button> </div> `} </ha-card> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,n.A)(o,"firstUpdated",this,3)([e]);const t=this.route?.path.substring(1,this.route.path.length),i=["core","os","supervisor"].includes(t)?t:"addon";switch(this._updateType=i,i){case"addon":this.addonSlug||(this.addonSlug=t),this._loadAddonData();break;case"core":this._loadCoreData();break;case"supervisor":this._loadSupervisorData();break;case"os":this._loadOsData()}}},{kind:"get",key:"_shouldCreateBackup",value:function(){if(this._updateType&&!["core","addon"].includes(this._updateType))return!1;const e=this.shadowRoot?.getElementById("create-backup");return!e||e.checked}},{kind:"get",key:"_version",value:function(){return this._updateType?"addon"===this._updateType?this._addonInfo.version:this.supervisor[this._updateType]?.version||"":""}},{kind:"get",key:"_version_latest",value:function(){return this._updateType?"addon"===this._updateType?this._addonInfo.version_latest:this.supervisor[this._updateType]?.version_latest||"":""}},{kind:"get",key:"_name",value:function(){return this._updateType?"addon"===this._updateType?this._addonInfo.name:f[this._updateType]:""}},{kind:"method",key:"_loadAddonData",value:async function(){try{this._addonInfo=await(0,l.wj)(this.hass,this.addonSlug)}catch(e){return void(0,m.K$)(this,{title:this._updateType,text:(0,h.VR)(e)})}const e=this._addonInfo.detached||this._addonInfo.available?void 0:this._addonStoreInfo(this._addonInfo.slug,this.supervisor.store.addons);if(this._addonInfo.changelog)try{const e=await(0,l.qH)(this.hass,this.addonSlug);this._changelogContent=(0,k.C)(this._addonInfo,e)}catch(e){return void(this._error=(0,h.VR)(e))}!this._addonInfo.available&&e&&((0,k.H)(this.supervisor.info.supported_arch,this._addonInfo.arch)?this._error=this.supervisor.localize("addon.dashboard.not_available_version",{core_version_installed:this.supervisor.core.version,core_version_needed:e.homeassistant}):this._error=this.supervisor.localize("addon.dashboard.not_available_arch"))}},{kind:"method",key:"_loadSupervisorData",value:async function(){try{const e=await(0,p.GM)(this.hass);(0,d.r)(this,"supervisor-update",{supervisor:e})}catch(e){(0,m.K$)(this,{title:this._updateType,text:(0,h.VR)(e)})}}},{kind:"method",key:"_loadCoreData",value:async function(){try{const e=await(0,p.n8)(this.hass);(0,d.r)(this,"supervisor-update",{core:e})}catch(e){(0,m.K$)(this,{title:this._updateType,text:(0,h.VR)(e)})}}},{kind:"method",key:"_loadOsData",value:async function(){try{const e=await(0,u.PB)(this.hass);(0,d.r)(this,"supervisor-update",{os:e})}catch(e){(0,m.K$)(this,{title:this._updateType,text:(0,h.VR)(e)})}}},{kind:"method",key:"_update",value:async function(){if(this._shouldCreateBackup&&"freeze"===this.supervisor.info.state)this._error=this.supervisor.localize("backup.backup_already_running");else{this._error=void 0,this._updating=!0;try{"addon"===this._updateType?await(0,l.$9)(this.hass,this.addonSlug,this._shouldCreateBackup):"core"===this._updateType?await(0,v.J)(this.hass,this._shouldCreateBackup):"os"===this._updateType?await(0,u.cO)(this.hass):"supervisor"===this._updateType&&await(0,p.I8)(this.hass)}catch(e){if(this.hass.connection.connected&&!(0,h.Tv)(e))return this._error=(0,h.VR)(e),void(this._updating=!1)}(0,d.r)(this,"update-complete"),this._updating=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return[y.RF,a.AH`:host{display:block}ha-card{margin:auto}a{text-decoration:none;color:var(--primary-text-color)}.card-actions{display:flex;justify-content:space-between}ha-circular-progress{display:block;margin:32px;text-align:center}.progress-text{text-align:center}ha-markdown{padding-bottom:8px}ha-settings-row{padding:0;margin-bottom:-16px}hr{border-color:var(--divider-color);border-bottom:none;margin:16px 0 0 0}`]}}]}}),a.WF)},66232:(e,t,o)=>{o.d(t,{C:()=>n,H:()=>i});o(253),o(4525);const i=(0,o(94100).A)(((e,t)=>t.some((t=>e.includes(t))))),n=(e,t)=>{if(t.startsWith("# Changelog")&&(t=t.substr(12,t.length)),t.includes(`# ${e.version}`)&&t.includes(`# ${e.version_latest}`)){const o=t.split(`# ${e.version}`)[0];o.includes(`# ${e.version_latest}`)&&(t=o)}return t}},68690:(e,t,o)=>{var i=o(36312),n=(o(72606),o(50289)),a=o(29818);o(32885),o(88400);(0,i.A)([(0,a.EM)("ha-progress-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"progress",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"raised",value:()=>!1},{kind:"field",decorators:[(0,a.wk)()],key:"_result",value:void 0},{kind:"method",key:"render",value:function(){const e=this._result||this.progress;return n.qy` <mwc-button ?raised="${this.raised}" .disabled="${this.disabled||this.progress}" @click="${this._buttonTapped}" class="${this._result||""}"> <slot></slot> </mwc-button> ${e?n.qy` <div class="progress"> ${"success"===this._result?n.qy`<ha-svg-icon .path="${"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"}"></ha-svg-icon>`:"error"===this._result?n.qy`<ha-svg-icon .path="${"M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M13,17V15H11V17H13M13,13V7H11V13H13Z"}"></ha-svg-icon>`:this.progress?n.qy` <ha-circular-progress size="small" indeterminate></ha-circular-progress> `:""} </div> `:n.s6} `}},{kind:"method",key:"actionSuccess",value:function(){this._setResult("success")}},{kind:"method",key:"actionError",value:function(){this._setResult("error")}},{kind:"method",key:"_setResult",value:function(e){this._result=e,setTimeout((()=>{this._result=void 0}),2e3)}},{kind:"method",key:"_buttonTapped",value:function(e){this.progress&&e.stopPropagation()}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`:host{outline:0;display:inline-block;position:relative}mwc-button{transition:all 1s}mwc-button.success{--mdc-theme-primary:white;background-color:var(--success-color);transition:none;border-radius:4px;pointer-events:none}mwc-button[raised].success{--mdc-theme-primary:var(--success-color);--mdc-theme-on-primary:white}mwc-button.error{--mdc-theme-primary:white;background-color:var(--error-color);transition:none;border-radius:4px;pointer-events:none}mwc-button[raised].error{--mdc-theme-primary:var(--error-color);--mdc-theme-on-primary:white}.progress{bottom:4px;position:absolute;text-align:center;top:4px;width:100%}ha-svg-icon{color:#fff}mwc-button.error slot,mwc-button.success slot{visibility:hidden}`}}]}}),n.WF)},26790:(e,t,o)=>{var i=o(36312),n=o(68689),a=(o(253),o(54846),o(29654),o(50289)),s=o(29818),r=o(542),d=o(9600);(0,i.A)([(0,s.EM)("ha-button-menu")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",key:d.Xr,value:void 0},{kind:"field",decorators:[(0,s.MZ)()],key:"corner",value:()=>"BOTTOM_START"},{kind:"field",decorators:[(0,s.MZ)()],key:"menuCorner",value:()=>"START"},{kind:"field",decorators:[(0,s.MZ)({type:Number})],key:"x",value:()=>null},{kind:"field",decorators:[(0,s.MZ)({type:Number})],key:"y",value:()=>null},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"multi",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"activatable",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"fixed",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value:()=>!1},{kind:"field",decorators:[(0,s.P)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){return this._menu?.items}},{kind:"get",key:"selected",value:function(){return this._menu?.selected}},{kind:"method",key:"focus",value:function(){this._menu?.open?this._menu.focusItemAtIndex(0):this._triggerButton?.focus()}},{kind:"method",key:"render",value:function(){return a.qy` <div @click="${this._handleClick}"> <slot name="trigger" @slotchange="${this._setTriggerAria}"></slot> </div> <mwc-menu .corner="${this.corner}" .menuCorner="${this.menuCorner}" .fixed="${this.fixed}" .multi="${this.multi}" .activatable="${this.activatable}" .y="${this.y}" .x="${this.x}"> <slot></slot> </mwc-menu> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,n.A)(o,"firstUpdated",this,3)([e]),"rtl"===r.G.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return a.AH`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`}}]}}),a.WF)},88725:(e,t,o)=>{var i=o(36312),n=o(41204),a=o(15565),s=o(50289),r=o(29818);(0,i.A)([(0,r.EM)("ha-checkbox")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[a.R,s.AH`:host{--mdc-theme-secondary:var(--primary-color)}`]}]}}),n.L)},56124:(e,t,o)=>{var i=o(36312),n=o(50289),a=o(29818),s=o(68689),r=(o(253),o(2075),o(16891),o(37679),o(34897)),d=(o(74860),o(71011),o(71174),o(36575));let c;const l={reType:/(?<input>(\[!(?<type>caution|important|note|tip|warning)\])(?:\s|\\n)?)/i,typeToHaAlert:{caution:"error",important:"info",note:"info",tip:"success",warning:"warning"}};(0,i.A)([(0,a.EM)("ha-markdown-element")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,a.MZ)()],key:"content",value:void 0},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"breaks",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:()=>!1},{kind:"method",key:"createRenderRoot",value:function(){return this}},{kind:"method",key:"update",value:function(e){(0,s.A)(i,"update",this,3)([e]),void 0!==this.content&&this._render()}},{kind:"method",key:"_render",value:async function(){this.innerHTML=await(async(e,t,i)=>(c||(c=(0,d.LV)(new Worker(new URL(o.p+o.u(7131),o.b),{type:"module"}))),c.renderMarkdown(e,t,i)))(String(this.content),{breaks:this.breaks,gfm:!0},{allowSvg:this.allowSvg}),this._resize();const e=document.createTreeWalker(this,NodeFilter.SHOW_ELEMENT,null);for(;e.nextNode();){const t=e.currentNode;if(t instanceof HTMLAnchorElement&&t.host!==document.location.host)t.target="_blank",t.rel="noreferrer noopener";else if(t instanceof HTMLImageElement)this.lazyImages&&(t.loading="lazy"),t.addEventListener("load",this._resize);else if(t instanceof HTMLQuoteElement){const o=t.firstElementChild?.firstChild?.textContent&&l.reType.exec(t.firstElementChild.firstChild.textContent);if(o){const{type:i}=o.groups,n=document.createElement("ha-alert");n.alertType=l.typeToHaAlert[i.toLowerCase()],n.append(...Array.from(t.childNodes).map((e=>{const t=Array.from(e.childNodes);if(!this.breaks&&t.length){const e=t[0];e.nodeType===Node.TEXT_NODE&&e.textContent===o.input&&e.textContent?.includes("\n")&&(e.textContent=e.textContent.split("\n").slice(1).join("\n"))}return t})).reduce(((e,t)=>e.concat(t)),[]).filter((e=>e.textContent&&e.textContent!==o.input))),e.parentNode().replaceChild(n,t)}}else t instanceof HTMLElement&&["ha-alert","ha-qr-code","ha-icon","ha-svg-icon"].includes(t.localName)&&o(75402)(`./${t.localName}`)}}},{kind:"field",key:"_resize",value(){return()=>(0,r.r)(this,"content-resize")}}]}}),n.mN),(0,i.A)([(0,a.EM)("ha-markdown")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.MZ)()],key:"content",value:void 0},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"allowSvg",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean})],key:"breaks",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean,attribute:"lazy-images"})],key:"lazyImages",value:()=>!1},{kind:"method",key:"render",value:function(){return this.content?n.qy`<ha-markdown-element .content="${this.content}" .allowSvg="${this.allowSvg}" .breaks="${this.breaks}" .lazyImages="${this.lazyImages}"></ha-markdown-element>`:n.s6}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`:host{display:block}ha-markdown-element{-ms-user-select:text;-webkit-user-select:text;-moz-user-select:text}ha-markdown-element>:first-child{margin-top:0}ha-markdown-element>:last-child{margin-bottom:0}ha-alert{display:block;margin:4px 0}a{color:var(--primary-color)}img{max-width:100%}code,pre{background-color:var(--markdown-code-background-color,none);border-radius:3px}svg{background-color:var(--markdown-svg-background-color,none);color:var(--markdown-svg-color,none)}code{font-size:85%;padding:.2em .4em}pre code{padding:0}pre{padding:16px;overflow:auto;line-height:1.45;font-family:var(--code-font-family, monospace)}h1,h2,h3,h4,h5,h6{line-height:initial}h2{font-size:1.5em;font-weight:700}hr{border-color:var(--divider-color);border-bottom:none;margin:16px 0}`}}]}}),n.WF)},24640:(e,t,o)=>{var i=o(36312),n=o(50289),a=o(29818);(0,i.A)([(0,a.EM)("ha-settings-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,a.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean,attribute:"three-line"})],key:"threeLine",value:()=>!1},{kind:"field",decorators:[(0,a.MZ)({type:Boolean,attribute:"wrap-heading",reflect:!0})],key:"wrapHeading",value:()=>!1},{kind:"method",key:"render",value:function(){return n.qy` <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="${!this.threeLine}" ?three-line="${this.threeLine}"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> `}},{kind:"get",static:!0,key:"styles",value:function(){return n.AH`:host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding-top:8px;padding-bottom:8px;padding-left:0;padding-inline-start:0;padding-right:16px;padding-inline-end:16px;overflow:hidden;display:var(--layout-vertical_-_display,flex);flex-direction:var(--layout-vertical_-_flex-direction,column);justify-content:var(--layout-center-justified_-_justify-content,center);flex:var(--layout-flex_-_flex,1);flex-basis:var(--layout-flex_-_flex-basis,0.000000001px)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}:host(:not([wrap-heading])) body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(
          --mdc-typography-body2-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size, .875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}`}}]}}),n.WF)},59588:(e,t,o)=>{var i=o(36312),n=o(68689),a=o(71204),s=o(15031),r=o(50289),d=o(29818),c=o(39914);(0,i.A)([(0,d.EM)("ha-switch")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"haptic",value:()=>!1},{kind:"method",key:"firstUpdated",value:function(){(0,n.A)(o,"firstUpdated",this,3)([]),this.addEventListener("change",(()=>{this.haptic&&(0,c.j)("light")}))}},{kind:"field",static:!0,key:"styles",value:()=>[s.R,r.AH`:host{--mdc-theme-secondary:var(--switch-checked-color)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:var(--switch-checked-button-color);border-color:var(--switch-checked-button-color)}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:var(--switch-checked-track-color);border-color:var(--switch-checked-track-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:var(--switch-unchecked-button-color);border-color:var(--switch-unchecked-button-color)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:var(--switch-unchecked-track-color);border-color:var(--switch-unchecked-track-color)}`]}]}}),a.U)},39914:(e,t,o)=>{o.d(t,{j:()=>n});var i=o(34897);const n=e=>{(0,i.r)(window,"haptic",e)}},582:(e,t,o)=>{o.d(t,{J:()=>a,f:()=>n});var i=o(95266);const n=async e=>{await e.callService("homeassistant","restart")},a=async(e,t)=>{(0,i.v)(e.config.version,2021,2,4)?await e.callWS({type:"supervisor/api",endpoint:"/core/update",method:"post",timeout:null,data:{backup:t}}):await e.callApi("POST","hassio/core/update",{backup:t})}},75402:(e,t,o)=>{var i={"./ha-alert":[13292],"./ha-alert.ts":[13292],"./ha-icon":[58797,8797],"./ha-icon-button":[4169],"./ha-icon-button-arrow-next":[99682,9682],"./ha-icon-button-arrow-next.ts":[99682,9682],"./ha-icon-button-arrow-prev":[45346],"./ha-icon-button-arrow-prev.ts":[45346],"./ha-icon-button-group":[56252,6252],"./ha-icon-button-group.ts":[56252,6252],"./ha-icon-button-next":[63606,3606],"./ha-icon-button-next.ts":[63606,3606],"./ha-icon-button-prev":[40462,462],"./ha-icon-button-prev.ts":[40462,462],"./ha-icon-button-toggle":[28803,8803],"./ha-icon-button-toggle.ts":[28803,8803],"./ha-icon-button.ts":[4169],"./ha-icon-next":[46163,6163],"./ha-icon-next.ts":[46163,6163],"./ha-icon-overflow-menu":[16850,6850],"./ha-icon-overflow-menu.ts":[16850,6850],"./ha-icon-picker":[85288,5288],"./ha-icon-picker.ts":[85288,5288],"./ha-icon-prev":[36119,6119],"./ha-icon-prev.ts":[36119,6119],"./ha-icon.ts":[58797,8797],"./ha-qr-code":[33209,1060,240,3209],"./ha-qr-code.ts":[33209,1060,240,3209],"./ha-svg-icon":[88400],"./ha-svg-icon.ts":[88400]};function n(e){if(!o.o(i,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],n=t[0];return Promise.all(t.slice(1).map(o.e)).then((()=>o(n)))}n.keys=()=>Object.keys(i),n.id=75402,e.exports=n}};
//# sourceMappingURL=3395.nPqyWnnwarQ.js.map