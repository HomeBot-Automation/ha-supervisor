export const id=5113;export const ids=[5113];export const modules={88725:(e,t,i)=>{var a=i(36312),s=i(41204),n=i(15565),o=i(50289),r=i(29818);(0,a.A)([(0,r.EM)("ha-checkbox")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[n.R,o.AH`:host{--mdc-theme-secondary:var(--primary-color)}`]}]}}),s.L)},95113:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(36312),s=(i(89655),i(24545),i(51855),i(82130),i(31743),i(22328),i(4959),i(62435),i(253),i(2075),i(54846),i(16891),i(4525),i(50289)),n=i(29818),o=i(94100),r=i(21863),l=i(34897),d=i(213),c=i(59780),h=i(42496),u=i(46092),v=i(29829),p=i(84976),y=(i(88725),i(4169),i(9421),i(5348)),f=(i(24640),i(57641),i(66457)),k=e([y,f]);[y,f]=k.then?(await k)():k;const _="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z",g=(e,t)=>"object"==typeof t?!!Array.isArray(t)&&t.some((t=>e.includes(t))):e.includes(t),m=e=>e.selector&&!e.required&&!("boolean"in e.selector&&e.default);(0,a.A)([(0,n.EM)("ha-service-control")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"value",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"showAdvanced",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,reflect:!0})],key:"hidePicker",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"hideDescription",value:()=>!1},{kind:"field",decorators:[(0,n.wk)()],key:"_value",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_checkedKeys",value:()=>new Set},{kind:"field",decorators:[(0,n.wk)()],key:"_manifest",value:void 0},{kind:"field",decorators:[(0,n.P)("ha-yaml-editor")],key:"_yamlEditor",value:void 0},{kind:"method",key:"willUpdate",value:function(e){if(this.hasUpdated||(this.hass.loadBackendTranslation("services"),this.hass.loadBackendTranslation("selector")),!e.has("value"))return;const t=e.get("value");t?.action!==this.value?.action&&(this._checkedKeys=new Set);const i=this._getServiceInfo(this.value?.action,this.hass.services);if(this.value?.action?t?.action&&(0,d.m)(this.value.action)===(0,d.m)(t.action)||this._fetchManifest((0,d.m)(this.value?.action)):this._manifest=void 0,i&&"target"in i&&(this.value?.data?.entity_id||this.value?.data?.area_id||this.value?.data?.device_id)){const e={...this.value.target};this.value.data.entity_id&&!this.value.target?.entity_id&&(e.entity_id=this.value.data.entity_id),this.value.data.area_id&&!this.value.target?.area_id&&(e.area_id=this.value.data.area_id),this.value.data.device_id&&!this.value.target?.device_id&&(e.device_id=this.value.data.device_id),this._value={...this.value,target:e,data:{...this.value.data}},delete this._value.data.entity_id,delete this._value.data.device_id,delete this._value.data.area_id}else this._value=this.value;if(t?.action!==this.value?.action){let e=!1;if(this._value&&i){const t=this.value&&!("data"in this.value);this._value.data||(this._value.data={}),i.flatFields.forEach((i=>{i.selector&&i.required&&void 0===i.default&&"boolean"in i.selector&&void 0===this._value.data[i.key]&&(e=!0,this._value.data[i.key]=!1),t&&i.selector&&void 0!==i.default&&void 0===this._value.data[i.key]&&(e=!0,this._value.data[i.key]=i.default)}))}e&&(0,l.r)(this,"value-changed",{value:{...this._value}})}if(this._value?.data){const e=this._yamlEditor;e&&e.value!==this._value.data&&e.setValue(this._value.data)}}},{kind:"field",key:"_getServiceInfo",value:()=>(0,o.A)(((e,t)=>{if(!e||!t)return;const i=(0,d.m)(e),a=(0,c.Y)(e);if(!(i in t))return;if(!(a in t[i]))return;const s=Object.entries(t[i][a].fields).map((([e,t])=>({key:e,...t,selector:t.selector}))),n=[],o=[];return s.forEach((e=>{e.fields?Object.entries(e.fields).forEach((([e,t])=>{n.push({...t,key:e}),t.selector&&o.push(e)})):(n.push(e),e.selector&&o.push(e.key))})),{...t[i][a],fields:s,flatFields:n,hasSelector:o}}))},{kind:"field",key:"_getTargetedEntities",value(){return(0,o.A)(((e,t)=>{const i=e?{target:e}:{target:{}},a=(0,r.e)(t?.target?.entity_id||t?.data?.entity_id)?.slice()||[],s=(0,r.e)(t?.target?.device_id||t?.data?.device_id)?.slice()||[],n=(0,r.e)(t?.target?.area_id||t?.data?.area_id)?.slice()||[],o=(0,r.e)(t?.target?.floor_id||t?.data?.floor_id)?.slice(),l=(0,r.e)(t?.target?.label_id||t?.data?.label_id)?.slice();return l&&l.forEach((e=>{const t=(0,v.m0)(this.hass,e,this.hass.areas,this.hass.devices,this.hass.entities,i);s.push(...t.devices),a.push(...t.entities),n.push(...t.areas)})),o&&o.forEach((e=>{const t=(0,v.MH)(this.hass,e,this.hass.areas,i);n.push(...t.areas)})),n.length&&n.forEach((e=>{const t=(0,v.bZ)(this.hass,e,this.hass.devices,this.hass.entities,i);a.push(...t.entities),s.push(...t.devices)})),s.length&&s.forEach((e=>{a.push(...(0,v._7)(this.hass,e,this.hass.entities,i).entities)})),a}))}},{kind:"method",key:"_filterField",value:function(e,t){return!!t.length&&!!t.some((t=>{const i=this.hass.states[t];return!!i&&(!!e.supported_features?.some((e=>(0,h.$)(i,e)))||!(!e.attribute||!Object.entries(e.attribute).some((([e,t])=>e in i.attributes&&g(t,i.attributes[e])))))}))}},{kind:"field",key:"_targetSelector",value:()=>(0,o.A)((e=>e?{target:{...e}}:{target:{}}))},{kind:"method",key:"render",value:function(){const e=this._getServiceInfo(this._value?.action,this.hass.services),t=e?.fields.length&&!e.hasSelector.length||e&&Object.keys(this._value?.data||{}).some((t=>!e.hasSelector.includes(t))),i=t&&e?.fields.find((e=>"entity_id"===e.key)),a=Boolean(!t&&e?.flatFields.some((e=>m(e)))),n=this._getTargetedEntities(e?.target,this._value),o=this._value?.action?(0,d.m)(this._value.action):void 0,r=this._value?.action?(0,c.Y)(this._value.action):void 0,l=r&&this.hass.localize(`component.${o}.services.${r}.description`)||e?.description;return s.qy`${this.hidePicker?s.s6:s.qy`<ha-service-picker .hass="${this.hass}" .value="${this._value?.action}" .disabled="${this.disabled}" @value-changed="${this._serviceChanged}"></ha-service-picker>`} ${this.hideDescription?s.s6:s.qy` <div class="description"> ${l?s.qy`<p>${l}</p>`:""} ${this._manifest?s.qy` <a href="${this._manifest.is_built_in?(0,p.o)(this.hass,`/integrations/${this._manifest.domain}`):this._manifest.documentation}" title="${this.hass.localize("ui.components.service-control.integration_doc")}" target="_blank" rel="noreferrer"> <ha-icon-button .path="${_}" class="help-icon"></ha-icon-button> </a>`:s.s6} </div> `} ${e&&"target"in e?s.qy`<ha-settings-row .narrow="${this.narrow}"> ${a?s.qy`<div slot="prefix" class="checkbox-spacer"></div>`:""} <span slot="heading">${this.hass.localize("ui.components.service-control.target")}</span> <span slot="description">${this.hass.localize("ui.components.service-control.target_secondary")}</span><ha-selector .hass="${this.hass}" .selector="${this._targetSelector(e.target)}" .disabled="${this.disabled}" @value-changed="${this._targetChanged}" .value="${this._value?.target}"></ha-selector></ha-settings-row>`:i?s.qy`<ha-entity-picker .hass="${this.hass}" .disabled="${this.disabled}" .value="${this._value?.data?.entity_id}" .label="${this.hass.localize(`component.${o}.services.${r}.fields.entity_id.description`)||i.description}" @value-changed="${this._entityPicked}" allow-custom-entity></ha-entity-picker>`:""} ${t?s.qy`<ha-yaml-editor .hass="${this.hass}" .label="${this.hass.localize("ui.components.service-control.action_data")}" .name="${"data"}" .readOnly="${this.disabled}" .defaultValue="${this._value?.data}" @value-changed="${this._dataChanged}"></ha-yaml-editor>`:e?.fields.map((e=>{if(!e.fields)return this._renderField(e,a,o,r,n);const t=Object.entries(e.fields).map((([e,t])=>({key:e,...t})));return t.length&&this._hasFilteredFields(t,n)?s.qy`<ha-expansion-panel leftChevron .expanded="${!e.collapsed}" .header="${this.hass.localize(`component.${o}.services.${r}.sections.${e.key}.name`)||e.name||e.key}" .secondary="${this._getSectionDescription(e,o,r)}"> <ha-service-section-icon slot="icons" .hass="${this.hass}" .service="${this._value.action}" .section="${e.key}"></ha-service-section-icon> ${Object.entries(e.fields).map((([e,t])=>this._renderField({key:e,...t},a,o,r,n)))} </ha-expansion-panel>`:s.s6}))} `}},{kind:"method",key:"_getSectionDescription",value:function(e,t,i){return this.hass.localize(`component.${t}.services.${i}.sections.${e.key}.description`)}},{kind:"method",key:"_hasFilteredFields",value:function(e,t){return e.some((e=>!e.filter||this._filterField(e.filter,t)))}},{kind:"field",key:"_renderField",value(){return(e,t,i,a,n)=>{if(e.filter&&!this._filterField(e.filter,n))return s.s6;const o=e?.selector??{text:void 0},r=m(e);return e.selector&&(!e.advanced||this.showAdvanced||this._value?.data&&void 0!==this._value.data[e.key])?s.qy`<ha-settings-row .narrow="${this.narrow}"> ${r?s.qy`<ha-checkbox .key="${e.key}" .checked="${this._checkedKeys.has(e.key)||this._value?.data&&void 0!==this._value.data[e.key]}" .disabled="${this.disabled}" @change="${this._checkboxChanged}" slot="prefix"></ha-checkbox>`:t?s.qy`<div slot="prefix" class="checkbox-spacer"></div>`:""} <span slot="heading">${this.hass.localize(`component.${i}.services.${a}.fields.${e.key}.name`)||e.name||e.key}</span> <span slot="description">${this.hass.localize(`component.${i}.services.${a}.fields.${e.key}.description`)||e?.description}</span> <ha-selector .disabled="${this.disabled||r&&!this._checkedKeys.has(e.key)&&(!this._value?.data||void 0===this._value.data[e.key])}" .hass="${this.hass}" .selector="${o}" .key="${e.key}" @value-changed="${this._serviceDataChanged}" .value="${this._value?.data?this._value.data[e.key]:void 0}" .placeholder="${e.default}" .localizeValue="${this._localizeValueCallback}"></ha-selector> </ha-settings-row>`:""}}},{kind:"field",key:"_localizeValueCallback",value(){return e=>this._value?.action?this.hass.localize(`component.${(0,d.m)(this._value.action)}.selector.${e}`):""}},{kind:"method",key:"_checkboxChanged",value:function(e){const t=e.currentTarget.checked,i=e.currentTarget.key;let a;if(t){this._checkedKeys.add(i);const e=this._getServiceInfo(this._value?.action,this.hass.services)?.flatFields.find((e=>e.key===i));let t=e?.default;null==t&&e?.selector&&"constant"in e.selector&&(t=e.selector.constant?.value),null==t&&e?.selector&&"boolean"in e.selector&&(t=!1),null!=t&&(a={...this._value?.data,[i]:t})}else this._checkedKeys.delete(i),a={...this._value?.data},delete a[i];a&&(0,l.r)(this,"value-changed",{value:{...this._value,data:a}}),this.requestUpdate("_checkedKeys")}},{kind:"method",key:"_serviceChanged",value:function(e){if(e.stopPropagation(),e.detail.value===this._value?.action)return;const t=e.detail.value||"";let i;if(t){const e=this._getServiceInfo(t,this.hass.services),a=this._value?.target;if(a&&e?.target){const t={target:{...e.target}};let s=(0,r.e)(a.entity_id||this._value.data?.entity_id)?.slice()||[],n=(0,r.e)(a.device_id||this._value.data?.device_id)?.slice()||[],o=(0,r.e)(a.area_id||this._value.data?.area_id)?.slice()||[];o.length&&(o=o.filter((e=>(0,v.Qz)(this.hass,this.hass.entities,this.hass.devices,e,t)))),n.length&&(n=n.filter((e=>(0,v.DF)(this.hass,Object.values(this.hass.entities),this.hass.devices[e],t)))),s.length&&(s=s.filter((e=>(0,v.MM)(this.hass.states[e],t)))),i={...s.length?{entity_id:s}:{},...n.length?{device_id:n}:{},...o.length?{area_id:o}:{}}}}const a={action:t,target:i};(0,l.r)(this,"value-changed",{value:a})}},{kind:"method",key:"_entityPicked",value:function(e){e.stopPropagation();const t=e.detail.value;if(this._value?.data?.entity_id===t)return;let i;!t&&this._value?.data?(i={...this._value},delete i.data.entity_id):i={...this._value,data:{...this._value?.data,entity_id:e.detail.value}},(0,l.r)(this,"value-changed",{value:i})}},{kind:"method",key:"_targetChanged",value:function(e){e.stopPropagation();const t=e.detail.value;if(this._value?.target===t)return;let i;t?i={...this._value,target:e.detail.value}:(i={...this._value},delete i.target),(0,l.r)(this,"value-changed",{value:i})}},{kind:"method",key:"_serviceDataChanged",value:function(e){e.stopPropagation();const t=e.currentTarget.key,i=e.detail.value;if(!(this._value?.data?.[t]!==i&&(this._value?.data&&t in this._value.data||""!==i&&void 0!==i)))return;const a={...this._value?.data,[t]:i};""!==i&&void 0!==i||delete a[t],(0,l.r)(this,"value-changed",{value:{...this._value,data:a}})}},{kind:"method",key:"_dataChanged",value:function(e){e.stopPropagation(),e.detail.isValid&&(0,l.r)(this,"value-changed",{value:{...this._value,data:e.detail.value}})}},{kind:"method",key:"_fetchManifest",value:async function(e){this._manifest=void 0;try{this._manifest=await(0,u.QC)(this.hass,e)}catch(e){}}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`ha-settings-row{padding:var(--service-control-padding,0 16px)}ha-settings-row{--paper-time-input-justify-content:flex-end;--settings-row-content-width:100%;--settings-row-prefix-display:contents;border-top:var(--service-control-items-border-top,1px solid var(--divider-color))}ha-entity-picker,ha-service-picker,ha-yaml-editor{display:block;margin:var(--service-control-padding,0 16px)}ha-yaml-editor{padding:16px 0}p{margin:var(--service-control-padding,0 16px);padding:16px 0}:host([hidePicker]) p{padding-top:0}.checkbox-spacer{width:32px}ha-checkbox{margin-left:-16px;margin-inline-start:-16px;margin-inline-end:initial}.help-icon{color:var(--secondary-text-color)}.description{justify-content:space-between;display:flex;align-items:center;padding-right:2px;padding-inline-end:2px;padding-inline-start:initial}.description p{direction:ltr}ha-expansion-panel{--ha-card-border-radius:0;--expansion-panel-summary-padding:0 16px;--expansion-panel-content-padding:0}`}}]}}),s.WF);t()}catch(e){t(e)}}))},9871:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(36312),s=i(50289),n=i(29818),o=i(10296),r=i(94872),l=i(213),d=i(20040),c=(i(88400),e([d]));d=(c.then?(await c)():c)[0];(0,a.A)([(0,n.EM)("ha-service-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"service",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){if(this.icon)return s.qy`<ha-icon .icon="${this.icon}"></ha-icon>`;if(!this.service)return s.s6;if(!this.hass)return this._renderFallback();const e=(0,d.f$)(this.hass,this.service).then((e=>e?s.qy`<ha-icon .icon="${e}"></ha-icon>`:this._renderFallback()));return s.qy`${(0,o.T)(e)}`}},{kind:"method",key:"_renderFallback",value:function(){const e=(0,l.m)(this.service);return s.qy` <ha-svg-icon .path="${r.n_[e]||r.Gn}"></ha-svg-icon> `}}]}}),s.WF);t()}catch(e){t(e)}}))},5348:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(36312),s=(i(89655),i(253),i(5186),i(2075),i(54846),i(50289)),n=i(29818),o=i(94100),r=i(34897),l=i(46092),d=(i(43536),i(13830),i(9871)),c=i(20040),h=e([d,c]);[d,c]=h.then?(await h)():h;(0,a.A)([(0,n.EM)("ha-service-picker")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)()],key:"value",value:void 0},{kind:"field",decorators:[(0,n.wk)()],key:"_filter",value:void 0},{kind:"method",key:"willUpdate",value:function(){this.hasUpdated||(this.hass.loadBackendTranslation("services"),(0,c.Yd)(this.hass))}},{kind:"field",key:"_rowRenderer",value(){return e=>s.qy`<ha-list-item twoline graphic="icon"> <ha-service-icon slot="graphic" .hass="${this.hass}" .service="${e.service}"></ha-service-icon> <span>${e.name}</span> <span slot="secondary">${e.name===e.service?"":e.service}</span> </ha-list-item>`}},{kind:"method",key:"render",value:function(){return s.qy` <ha-combo-box .hass="${this.hass}" .label="${this.hass.localize("ui.components.service-picker.action")}" .filteredItems="${this._filteredServices(this.hass.localize,this.hass.services,this._filter)}" .value="${this.value}" .disabled="${this.disabled}" .renderer="${this._rowRenderer}" item-value-path="service" item-label-path="name" allow-custom-value @filter-changed="${this._filterChanged}" @value-changed="${this._valueChanged}"></ha-combo-box> `}},{kind:"field",key:"_services",value(){return(0,o.A)(((e,t)=>{if(!t)return[];const i=[];return Object.keys(t).sort().forEach((a=>{const s=Object.keys(t[a]).sort();for(const n of s)i.push({service:`${a}.${n}`,name:`${(0,l.p$)(e,a)}: ${this.hass.localize(`component.${a}.services.${n}.name`)||t[a][n].name||n}`})})),i}))}},{kind:"field",key:"_filteredServices",value(){return(0,o.A)(((e,t,i)=>{if(!t)return[];const a=this._services(e,t);if(!i)return a;const s=i.split(" ");return a.filter((e=>{const t=e.name.toLowerCase(),i=e.service.toLowerCase();return s.every((e=>t.includes(e)||i.includes(e)))}))}))}},{kind:"method",key:"_filterChanged",value:function(e){this._filter=e.detail.value.toLowerCase()}},{kind:"method",key:"_valueChanged",value:function(e){this.value=e.detail.value,(0,r.r)(this,"change"),(0,r.r)(this,"value-changed",{value:this.value})}}]}}),s.WF);t()}catch(e){t(e)}}))},66457:(e,t,i)=>{i.a(e,(async(e,t)=>{try{var a=i(36312),s=i(50289),n=i(29818),o=i(10296),r=(i(88400),i(20040)),l=e([r]);r=(l.then?(await l)():l)[0];(0,a.A)([(0,n.EM)("ha-service-section-icon")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"service",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"section",value:void 0},{kind:"field",decorators:[(0,n.MZ)()],key:"icon",value:void 0},{kind:"method",key:"render",value:function(){if(this.icon)return s.qy`<ha-icon .icon="${this.icon}"></ha-icon>`;if(!this.service||!this.section)return s.s6;if(!this.hass)return this._renderFallback();const e=(0,r.Yw)(this.hass,this.service,this.section).then((e=>e?s.qy`<ha-icon .icon="${e}"></ha-icon>`:this._renderFallback()));return s.qy`${(0,o.T)(e)}`}},{kind:"method",key:"_renderFallback",value:function(){return s.s6}}]}}),s.WF);t()}catch(e){t(e)}}))},24640:(e,t,i)=>{var a=i(36312),s=i(50289),n=i(29818);(0,a.A)([(0,n.EM)("ha-settings-row")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,n.MZ)({type:Boolean,reflect:!0})],key:"narrow",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,reflect:!0})],key:"slim",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"three-line"})],key:"threeLine",value:()=>!1},{kind:"field",decorators:[(0,n.MZ)({type:Boolean,attribute:"wrap-heading",reflect:!0})],key:"wrapHeading",value:()=>!1},{kind:"method",key:"render",value:function(){return s.qy` <div class="prefix-wrap"> <slot name="prefix"></slot> <div class="body" ?two-line="${!this.threeLine}" ?three-line="${this.threeLine}"> <slot name="heading"></slot> <div class="secondary"><slot name="description"></slot></div> </div> </div> <div class="content"><slot></slot></div> `}},{kind:"get",static:!0,key:"styles",value:function(){return s.AH`:host{display:flex;padding:0 16px;align-content:normal;align-self:auto;align-items:center}.body{padding-top:8px;padding-bottom:8px;padding-left:0;padding-inline-start:0;padding-right:16px;padding-inline-end:16px;overflow:hidden;display:var(--layout-vertical_-_display,flex);flex-direction:var(--layout-vertical_-_flex-direction,column);justify-content:var(--layout-center-justified_-_justify-content,center);flex:var(--layout-flex_-_flex,1);flex-basis:var(--layout-flex_-_flex-basis,0.000000001px)}.body[three-line]{min-height:var(--paper-item-body-three-line-min-height,88px)}:host(:not([wrap-heading])) body>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.body>.secondary{display:block;padding-top:4px;font-family:var(
          --mdc-typography-body2-font-family,
          var(--mdc-typography-font-family, Roboto, sans-serif)
        );-webkit-font-smoothing:antialiased;font-size:var(--mdc-typography-body2-font-size, .875rem);font-weight:var(--mdc-typography-body2-font-weight,400);line-height:normal;color:var(--secondary-text-color)}.body[two-line]{min-height:calc(var(--paper-item-body-two-line-min-height,72px) - 16px);flex:1}.content{display:contents}:host(:not([narrow])) .content{display:var(--settings-row-content-display,flex);justify-content:flex-end;flex:1;padding:16px 0}.content ::slotted(*){width:var(--settings-row-content-width)}:host([narrow]){align-items:normal;flex-direction:column;border-top:1px solid var(--divider-color);padding-bottom:8px}::slotted(ha-switch){padding:16px 0}.secondary{white-space:normal}.prefix-wrap{display:var(--settings-row-prefix-display)}:host([narrow]) .prefix-wrap{display:flex;align-items:center}:host([slim]),:host([slim]) .content,:host([slim]) ::slotted(ha-switch){padding:0}:host([slim]) .body{min-height:0}`}}]}}),s.WF)},84976:(e,t,i)=>{i.d(t,{o:()=>a});const a=(e,t)=>`https://${e.config.version.includes("b")?"rc":e.config.version.includes("dev")?"next":"www"}.home-assistant.io${t}`}};
//# sourceMappingURL=5113.y6KBubgmb0Q.js.map