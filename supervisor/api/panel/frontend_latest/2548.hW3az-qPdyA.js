export const id=2548;export const ids=[2548];export const modules={79051:(e,t,i)=>{i.d(t,{d:()=>o});const o=e=>e.stopPropagation()},35743:(e,t,i)=>{i.d(t,{w:()=>a});i(253),i(37679);function o(e,t,i){return t.reduce(((e,t,o,r)=>{if(void 0!==e){if(!e[t]&&i){const i=r[o+1];e[t]=void 0===i||"number"==typeof i?[]:{}}return e[t]}}),e)}function r(e,t){const i=t.pop(),r=o(e,t);return r[i]=Array.isArray(r[i])?[...r[i]]:[r[i]],e}function a(e,t,i,a,d){let n=Array.isArray(e)?[...e]:{...e};a&&(n=r(n,[...a])),d&&(n=r(n,[...d]));const s=a?o(n,a):n,l=d?o(n,d,!0):n,c=s.splice(t,1)[0];return l.splice(i,0,c),n}},32920:(e,t,i)=>{i.d(t,{l:()=>o});const o=async e=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}},18409:(e,t,i)=>{i.d(t,{s:()=>o});const o=(e,t,i=!1)=>{let o;const r=(...r)=>{const a=i&&!o;clearTimeout(o),o=window.setTimeout((()=>{o=void 0,i||e(...r)}),t),a&&e(...r)};return r.cancel=()=>{clearTimeout(o)},r}},77372:(e,t,i)=>{var o=i(36312),r=i(72606),a=i(50289),d=i(29818),n=i(49141);(0,o.A)([(0,d.EM)("ha-button")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[n.R,a.AH`::slotted([slot=icon]){margin-inline-start:0px;margin-inline-end:8px;direction:var(--direction);display:block}.mdc-button{height:var(--button-height,36px)}.trailing-icon{display:flex}.slot-container{overflow:var(--button-slot-container-overflow,visible)}`]}]}}),r.$)},31979:(e,t,i)=>{var o=i(36312),r=i(68689),a=(i(89655),i(16891),i(50289)),d=i(29818),n=i(94100),s=i(34897),l=i(79051);const c={key:"Mod-s",run:e=>((0,s.r)(e.dom,"editor-save"),!0)},h=e=>{const t=document.createElement("ha-icon");return t.icon=e.label,t};(0,o.A)([(0,d.EM)("ha-code-editor")],(function(e,t){class o extends t{constructor(...t){super(...t),e(this)}}return{F:o,d:[{kind:"field",key:"codemirror",value:void 0},{kind:"field",decorators:[(0,d.MZ)()],key:"mode",value:()=>"yaml"},{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"autofocus",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"linewrap",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean,attribute:"autocomplete-entities"})],key:"autocompleteEntities",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean,attribute:"autocomplete-icons"})],key:"autocompleteIcons",value:()=>!1},{kind:"field",decorators:[(0,d.MZ)({type:Boolean})],key:"error",value:()=>!1},{kind:"field",decorators:[(0,d.wk)()],key:"_value",value:()=>""},{kind:"field",key:"_loadedCodeMirror",value:void 0},{kind:"field",key:"_iconList",value:void 0},{kind:"set",key:"value",value:function(e){this._value=e}},{kind:"get",key:"value",value:function(){return this.codemirror?this.codemirror.state.doc.toString():this._value}},{kind:"get",key:"hasComments",value:function(){if(!this.codemirror||!this._loadedCodeMirror)return!1;const e=this._loadedCodeMirror.highlightingFor(this.codemirror.state,[this._loadedCodeMirror.tags.comment]);return!!this.renderRoot.querySelector(`span.${e}`)}},{kind:"method",key:"connectedCallback",value:function(){(0,r.A)(o,"connectedCallback",this,3)([]),this.hasUpdated&&this.requestUpdate(),this.addEventListener("keydown",l.d),this.codemirror&&!1!==this.autofocus&&this.codemirror.focus()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,r.A)(o,"disconnectedCallback",this,3)([]),this.removeEventListener("keydown",l.d),this.updateComplete.then((()=>{this.codemirror.destroy(),delete this.codemirror}))}},{kind:"method",key:"scheduleUpdate",value:async function(){this._loadedCodeMirror??=await Promise.all([i.e(1060),i.e(3214),i.e(1449)]).then(i.bind(i,61449)),(0,r.A)(o,"scheduleUpdate",this,3)([])}},{kind:"method",key:"update",value:function(e){if((0,r.A)(o,"update",this,3)([e]),!this.codemirror)return void this._createCodeMirror();const t=[];e.has("mode")&&t.push({effects:[this._loadedCodeMirror.langCompartment.reconfigure(this._mode),this._loadedCodeMirror.foldingCompartment.reconfigure(this._getFoldingExtensions())]}),e.has("readOnly")&&t.push({effects:this._loadedCodeMirror.readonlyCompartment.reconfigure(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly))}),e.has("linewrap")&&t.push({effects:this._loadedCodeMirror.linewrapCompartment.reconfigure(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[])}),e.has("_value")&&this._value!==this.value&&t.push({changes:{from:0,to:this.codemirror.state.doc.length,insert:this._value}}),t.length>0&&this.codemirror.dispatch(...t),e.has("error")&&this.classList.toggle("error-state",this.error)}},{kind:"get",key:"_mode",value:function(){return this._loadedCodeMirror.langs[this.mode]}},{kind:"method",key:"_createCodeMirror",value:function(){if(!this._loadedCodeMirror)throw new Error("Cannot create editor before CodeMirror is loaded");const e=[this._loadedCodeMirror.lineNumbers(),this._loadedCodeMirror.history(),this._loadedCodeMirror.drawSelection(),this._loadedCodeMirror.EditorState.allowMultipleSelections.of(!0),this._loadedCodeMirror.rectangularSelection(),this._loadedCodeMirror.crosshairCursor(),this._loadedCodeMirror.highlightSelectionMatches(),this._loadedCodeMirror.highlightActiveLine(),this._loadedCodeMirror.indentationMarkers({thickness:0,activeThickness:1,colors:{activeLight:"var(--secondary-text-color)",activeDark:"var(--secondary-text-color)"}}),this._loadedCodeMirror.keymap.of([...this._loadedCodeMirror.defaultKeymap,...this._loadedCodeMirror.searchKeymap,...this._loadedCodeMirror.historyKeymap,...this._loadedCodeMirror.tabKeyBindings,c]),this._loadedCodeMirror.langCompartment.of(this._mode),this._loadedCodeMirror.haTheme,this._loadedCodeMirror.haSyntaxHighlighting,this._loadedCodeMirror.readonlyCompartment.of(this._loadedCodeMirror.EditorView.editable.of(!this.readOnly)),this._loadedCodeMirror.linewrapCompartment.of(this.linewrap?this._loadedCodeMirror.EditorView.lineWrapping:[]),this._loadedCodeMirror.EditorView.updateListener.of(this._onUpdate),this._loadedCodeMirror.foldingCompartment.of(this._getFoldingExtensions())];if(!this.readOnly){const t=[];this.autocompleteEntities&&this.hass&&t.push(this._entityCompletions.bind(this)),this.autocompleteIcons&&t.push(this._mdiCompletions.bind(this)),t.length>0&&e.push(this._loadedCodeMirror.autocompletion({override:t,maxRenderedOptions:10}))}this.codemirror=new this._loadedCodeMirror.EditorView({state:this._loadedCodeMirror.EditorState.create({doc:this._value,extensions:e}),parent:this.renderRoot})}},{kind:"field",key:"_getStates",value:()=>(0,n.A)((e=>{if(!e)return[];return Object.keys(e).map((t=>({type:"variable",label:t,detail:e[t].attributes.friendly_name,info:`State: ${e[t].state}`})))}))},{kind:"method",key:"_entityCompletions",value:function(e){const t=e.matchBefore(/[a-z_]{3,}\.\w*/);if(!t||t.from===t.to&&!e.explicit)return null;const i=this._getStates(this.hass.states);return i&&i.length?{from:Number(t.from),options:i,validFor:/^[a-z_]{3,}\.\w*$/}:null}},{kind:"field",key:"_getIconItems",value(){return async()=>{if(!this._iconList){let e;e=[],this._iconList=e.map((e=>({type:"variable",label:`mdi:${e.name}`,detail:e.keywords.join(", "),info:h})))}return this._iconList}}},{kind:"method",key:"_mdiCompletions",value:async function(e){const t=e.matchBefore(/mdi:\S*/);if(!t||t.from===t.to&&!e.explicit)return null;const i=await this._getIconItems();return{from:Number(t.from),options:i,validFor:/^mdi:\S*$/}}},{kind:"field",key:"_onUpdate",value(){return e=>{e.docChanged&&(this._value=e.state.doc.toString(),(0,s.r)(this,"value-changed",{value:this._value}))}}},{kind:"field",key:"_getFoldingExtensions",value(){return()=>"yaml"===this.mode?[this._loadedCodeMirror.foldGutter(),this._loadedCodeMirror.foldingOnIndent]:[]}},{kind:"get",static:!0,key:"styles",value:function(){return a.AH`:host(.error-state) .cm-gutters{border-color:var(--error-state-color,red)}`}}]}}),a.mN)},77312:(e,t,i)=>{var o=i(36312),r=i(68689),a=i(24500),d=i(14691),n=i(50289),s=i(29818),l=i(18409),c=i(61441);i(4169);(0,o.A)([(0,s.EM)("ha-select")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,s.MZ)({type:Boolean})],key:"icon",value:()=>!1},{kind:"field",decorators:[(0,s.MZ)({type:Boolean,reflect:!0})],key:"clearable",value:()=>!1},{kind:"method",key:"render",value:function(){return n.qy` ${(0,r.A)(i,"render",this,3)([])} ${this.clearable&&!this.required&&!this.disabled&&this.value?n.qy`<ha-icon-button label="clear" @click="${this._clearValue}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button>`:n.s6} `}},{kind:"method",key:"renderLeadingIcon",value:function(){return this.icon?n.qy`<span class="mdc-select__icon"><slot name="icon"></slot></span>`:n.s6}},{kind:"method",key:"connectedCallback",value:function(){(0,r.A)(i,"connectedCallback",this,3)([]),window.addEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"disconnectedCallback",value:function(){(0,r.A)(i,"disconnectedCallback",this,3)([]),window.removeEventListener("translations-updated",this._translationsUpdated)}},{kind:"method",key:"_clearValue",value:function(){!this.disabled&&this.value&&(this.valueSetDirectly=!0,this.select(-1),this.mdcFoundation.handleChange())}},{kind:"field",key:"_translationsUpdated",value(){return(0,l.s)((async()=>{await(0,c.E)(),this.layoutOptions()}),500)}},{kind:"field",static:!0,key:"styles",value:()=>[d.R,n.AH`:host([clearable]){position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:var(--secondary-text-color)}.mdc-select__anchor{width:var(--ha-select-min-width,200px)}.mdc-select--filled .mdc-select__anchor{height:var(--ha-select-height,56px)}.mdc-select--filled .mdc-floating-label{inset-inline-start:12px;inset-inline-end:initial;direction:var(--direction)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{inset-inline-start:48px;inset-inline-end:initial;direction:var(--direction)}.mdc-select .mdc-select__anchor{padding-inline-start:12px;padding-inline-end:0px;direction:var(--direction)}.mdc-select__anchor .mdc-floating-label--float-above{transform-origin:var(--float-start)}.mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,0px)}:host([clearable]) .mdc-select__selected-text-container{padding-inline-end:var(--select-selected-text-padding-end,12px)}ha-icon-button{position:absolute;top:10px;right:28px;--mdc-icon-button-size:36px;--mdc-icon-size:20px;color:var(--secondary-text-color);inset-inline-start:initial;inset-inline-end:28px;direction:var(--direction)}`]}]}}),a.o)},57641:(e,t,i)=>{var o=i(36312),r=i(68689),a=i(51431),d=i(50289),n=i(29818),s=i(34897),l=i(55321),c=(i(31979),i(18589)),h=i(32920);i(77372);(0,o.A)([(0,n.EM)("ha-yaml-editor")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"yamlSchema",value:()=>a.my},{kind:"field",decorators:[(0,n.MZ)()],key:"defaultValue",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"isValid",value:()=>!0},{kind:"field",decorators:[(0,n.MZ)()],key:"label",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"autoUpdate",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"readOnly",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"required",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"copyClipboard",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"hasExtraActions",value:()=>!1},{kind:"field",decorators:[(0,n.wk)()],key:"_yaml",value:()=>""},{kind:"field",decorators:[(0,n.P)("ha-code-editor")],key:"_codeEditor",value:void 0},{kind:"method",key:"setValue",value:function(e){try{this._yaml=(e=>{if("object"!=typeof e||null===e)return!1;for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0})(e)?"":(0,a.Bh)(e,{schema:this.yamlSchema,quotingType:'"',noRefs:!0})}catch(t){console.error(t,e),alert(`There was an error converting to YAML: ${t}`)}}},{kind:"method",key:"firstUpdated",value:function(){void 0!==this.defaultValue&&this.setValue(this.defaultValue)}},{kind:"method",key:"willUpdate",value:function(e){(0,r.A)(i,"willUpdate",this,3)([e]),this.autoUpdate&&e.has("value")&&this.setValue(this.value)}},{kind:"method",key:"focus",value:function(){this._codeEditor?.codemirror&&this._codeEditor?.codemirror.focus()}},{kind:"method",key:"render",value:function(){return void 0===this._yaml?d.s6:d.qy` ${this.label?d.qy`<p>${this.label}${this.required?" *":""}</p>`:d.s6} <ha-code-editor .hass="${this.hass}" .value="${this._yaml}" .readOnly="${this.readOnly}" mode="yaml" autocomplete-entities autocomplete-icons .error="${!1===this.isValid}" @value-changed="${this._onChange}" dir="ltr"></ha-code-editor> ${this.copyClipboard||this.hasExtraActions?d.qy` <div class="card-actions"> ${this.copyClipboard?d.qy` <ha-button @click="${this._copyYaml}"> ${this.hass.localize("ui.components.yaml-editor.copy_to_clipboard")} </ha-button> `:d.s6} <slot name="extra-actions"></slot> </div> `:d.s6} `}},{kind:"method",key:"_onChange",value:function(e){let t;e.stopPropagation(),this._yaml=e.detail.value;let i=!0;if(this._yaml)try{t=(0,a.Hh)(this._yaml,{schema:this.yamlSchema})}catch(e){i=!1}else t={};this.value=t,this.isValid=i,(0,s.r)(this,"value-changed",{value:t,isValid:i})}},{kind:"get",key:"yaml",value:function(){return this._yaml}},{kind:"method",key:"_copyYaml",value:async function(){this.yaml&&(await(0,h.l)(this.yaml),(0,c.P)(this,{message:this.hass.localize("ui.common.copied_clipboard")}))}},{kind:"get",static:!0,key:"styles",value:function(){return[l.RF,d.AH`.card-actions{border-radius:var(--actions-border-radius,0px 0px var(--ha-card-border-radius,12px) var(--ha-card-border-radius,12px));border:1px solid var(--divider-color);padding:5px 16px}ha-code-editor{flex-grow:1}`]}}]}}),d.WF)},18589:(e,t,i)=>{i.d(t,{P:()=>r});var o=i(34897);const r=(e,t)=>(0,o.r)(e,"hass-notification",t)}};
//# sourceMappingURL=2548.hW3az-qPdyA.js.map