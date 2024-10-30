"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[6668],{74455:function(e,a,i){var t=i(35806),r=i(71008),s=i(62193),o=i(2816),n=i(27927),l=(i(81027),i(14565)),d=i(29818);(0,n.A)([(0,d.EM)("ha-chip-set")],(function(e,a){var i=function(a){function i(){var a;(0,r.A)(this,i);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return a=(0,s.A)(this,i,[].concat(o)),e(a),a}return(0,o.A)(i,a),(0,t.A)(i)}(a);return{F:i,d:[]}}),l.Y)},24793:function(e,a,i){var t,r=i(64599),s=i(41981),o=i(35806),n=i(71008),l=i(62193),d=i(2816),c=i(27927),h=i(35890),u=(i(81027),i(82372)),v=i(50289),f=i(29818);(0,c.A)([(0,f.EM)("ha-input-chip")],(function(e,a){var i=function(a){function i(){var a;(0,n.A)(this,i);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return a=(0,l.A)(this,i,[].concat(r)),e(a),a}return(0,d.A)(i,a),(0,o.A)(i)}(a);return{F:i,d:[{kind:"field",static:!0,key:"styles",value:function(){return[].concat((0,s.A)((0,h.A)(i,"styles",this)),[(0,v.AH)(t||(t=(0,r.A)([":host{--md-sys-color-primary:var(--primary-text-color);--md-sys-color-on-surface:var(--primary-text-color);--md-sys-color-on-surface-variant:var(--primary-text-color);--md-sys-color-on-secondary-container:var(--primary-text-color);--md-input-chip-container-shape:16px;--md-input-chip-outline-color:var(--outline-color);--md-input-chip-selected-container-color:rgba(\n          var(--rgb-primary-text-color),\n          0.15\n        );--ha-input-chip-selected-container-opacity:1;--md-input-chip-label-text-font:Roboto,sans-serif}::slotted([slot=icon]){display:flex;--mdc-icon-size:var(--md-input-chip-icon-size, 18px)}.selected::before{opacity:var(--ha-input-chip-selected-container-opacity)}"])))])}}]}}),u.U)},96668:function(e,a,i){var t=i(22858).A,r=i(33994).A;i.a(e,function(){var e=t(r().mark((function e(t,s){var o,n,l,d,c,h,u,v,f,p,_,m,k,y,A,g,b,w,x,z,C,q,M,E,H,L,V,F,S,D,N,I,J,P,R,Z,j,O,T,U,W,Y,B,G,K,Q,X,$,ee,ae,ie;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.r(a),o=i(33994),n=i(22858),l=i(64599),d=i(35806),c=i(71008),h=i(62193),u=i(2816),v=i(27927),f=i(81027),p=i(13025),_=i(95737),m=i(97741),k=i(50693),y=i(29193),A=i(39790),g=i(9241),b=i(74268),w=i(24545),x=i(51855),z=i(82130),C=i(31743),q=i(22328),M=i(4959),E=i(62435),H=i(99019),L=i(79641),V=i(253),F=i(2075),S=i(16891),D=i(96858),i(72606),i(63893),N=i(50289),I=i(29818),J=i(66066),P=i(94100),R=i(34897),i(74455),i(24793),i(13292),i(6482),Z=i(3276),j=i(52992),i(24640),i(88400),i(90431),O=i(55321),T=i(47293),U=i(96915),!(W=t([j])).then){e.next=81;break}return e.next=77,W;case 77:e.t1=e.sent,e.t0=(0,e.t1)(),e.next=82;break;case 81:e.t0=W;case 82:j=e.t0[0],ie=(0,v.A)(null,(function(e,a){var i,t=function(a){function i(){var a;(0,c.A)(this,i);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return a=(0,h.A)(this,i,[].concat(r)),e(a),a}return(0,u.A)(i,a),(0,d.A)(i)}(a);return{F:t,d:[{kind:"field",decorators:[(0,I.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,I.wk)()],key:"_name",value:void 0},{kind:"field",decorators:[(0,I.wk)()],key:"_aliases",value:void 0},{kind:"field",decorators:[(0,I.wk)()],key:"_icon",value:void 0},{kind:"field",decorators:[(0,I.wk)()],key:"_level",value:void 0},{kind:"field",decorators:[(0,I.wk)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,I.wk)()],key:"_params",value:void 0},{kind:"field",decorators:[(0,I.wk)()],key:"_submitting",value:void 0},{kind:"field",decorators:[(0,I.wk)()],key:"_addedAreas",value:function(){return new Set}},{kind:"field",decorators:[(0,I.wk)()],key:"_removedAreas",value:function(){return new Set}},{kind:"method",key:"showDialog",value:function(e){var a,i,t,r;this._params=e,this._error=void 0,this._name=this._params.entry?this._params.entry.name:this._params.suggestedName||"",this._aliases=(null===(a=this._params.entry)||void 0===a?void 0:a.aliases)||[],this._icon=(null===(i=this._params.entry)||void 0===i?void 0:i.icon)||null,this._level=null!==(t=null===(r=this._params.entry)||void 0===r?void 0:r.level)&&void 0!==t?t:null,this._addedAreas.clear(),this._removedAreas.clear()}},{kind:"method",key:"closeDialog",value:function(){this._error="",this._params=void 0,this._addedAreas.clear(),this._removedAreas.clear(),(0,R.r)(this,"dialog-closed",{dialog:this.localName})}},{kind:"field",key:"_floorAreas",value:function(){return(0,P.A)((function(e,a,i,t){return Object.values(a).filter((function(a){return(a.floor_id===(null==e?void 0:e.floor_id)||i.has(a.area_id))&&!t.has(a.area_id)}))}))}},{kind:"method",key:"render",value:function(){var e,a=this,i=this._floorAreas(null===(e=this._params)||void 0===e?void 0:e.entry,this.hass.areas,this._addedAreas,this._removedAreas);if(!this._params)return N.s6;var t=this._params.entry,r=!this._isNameValid();return(0,N.qy)(Y||(Y=(0,l.A)([' <ha-dialog open @closed="','" .heading="','"> <div> ',' <div class="form"> ',' <ha-textfield .value="','" @input="','" .label="','" .validationMessage="','" required dialogInitialFocus></ha-textfield> <ha-textfield .value="','" @input="','" .label="','" type="number"></ha-textfield> <ha-icon-picker .hass="','" .value="','" @value-changed="','" .label="','"> ',' </ha-icon-picker> <h3 class="header"> ',' </h3> <p class="description"> '," </p> ",' <ha-area-picker no-add .hass="','" @value-changed="','" .excludeAreas="','" .label="','"></ha-area-picker> <h3 class="header"> ',' </h3> <p class="description"> ',' </p> <ha-aliases-editor .hass="','" .aliases="','" @value-changed="','"></ha-aliases-editor> </div> </div> <mwc-button slot="secondaryAction" @click="','"> ',' </mwc-button> <mwc-button slot="primaryAction" @click="','" .disabled="','"> '," </mwc-button> </ha-dialog> "])),this.closeDialog,(0,Z.l)(this.hass,t?this.hass.localize("ui.panel.config.floors.editor.update_floor"):this.hass.localize("ui.panel.config.floors.editor.create_floor")),this._error?(0,N.qy)(B||(B=(0,l.A)(['<ha-alert alert-type="error">',"</ha-alert>"])),this._error):"",t?(0,N.qy)(G||(G=(0,l.A)([' <ha-settings-row> <span slot="heading"> ',' </span> <span slot="description">',"</span> </ha-settings-row> "])),this.hass.localize("ui.panel.config.floors.editor.floor_id"),t.floor_id):N.s6,this._name,this._nameChanged,this.hass.localize("ui.panel.config.floors.editor.name"),this.hass.localize("ui.panel.config.floors.editor.name_required"),this._level,this._levelChanged,this.hass.localize("ui.panel.config.floors.editor.level"),this.hass,this._icon,this._iconChanged,this.hass.localize("ui.panel.config.areas.editor.icon"),this._icon?N.s6:(0,N.qy)(K||(K=(0,l.A)([' <ha-floor-icon slot="fallback" .floor="','"></ha-floor-icon> '])),{level:this._level}),this.hass.localize("ui.panel.config.floors.editor.areas_section"),this.hass.localize("ui.panel.config.floors.editor.areas_description"),i.length?(0,N.qy)(Q||(Q=(0,l.A)(["<ha-chip-set> "," </ha-chip-set>"])),(0,J.u)(i,(function(e){return e.area_id}),(function(e){return(0,N.qy)(X||(X=(0,l.A)(['<ha-input-chip .area="','" @click="','" @remove="','" .label="','"> '," </ha-input-chip>"])),e,a._openArea,a._removeArea,null==e?void 0:e.name,e.icon?(0,N.qy)($||($=(0,l.A)(['<ha-icon slot="icon" .icon="','"></ha-icon>'])),e.icon):(0,N.qy)(ee||(ee=(0,l.A)(['<ha-svg-icon slot="icon" .path="','"></ha-svg-icon>'])),"M20 2H4C2.9 2 2 2.9 2 4V20C2 21.11 2.9 22 4 22H20C21.11 22 22 21.11 22 20V4C22 2.9 21.11 2 20 2M4 6L6 4H10.9L4 10.9V6M4 13.7L13.7 4H18.6L4 18.6V13.7M20 18L18 20H13.1L20 13.1V18M20 10.3L10.3 20H5.4L20 5.4V10.3Z"))}))):N.s6,this.hass,this._addArea,i.map((function(e){return e.area_id})),this.hass.localize("ui.panel.config.floors.editor.add_area"),this.hass.localize("ui.panel.config.floors.editor.aliases_section"),this.hass.localize("ui.panel.config.floors.editor.aliases_description"),this.hass,this._aliases,this._aliasesChanged,this.closeDialog,this.hass.localize("ui.common.cancel"),this._updateEntry,r||this._submitting,t?this.hass.localize("ui.common.save"):this.hass.localize("ui.common.add"))}},{kind:"method",key:"_openArea",value:function(e){var a=this,i=e.target.area;(0,T.J)(this,{entry:i,updateEntry:function(e){return(0,U.gs)(a.hass,i.area_id,e)}})}},{kind:"method",key:"_removeArea",value:function(e){var a=e.target.area.area_id;if(this._addedAreas.has(a))return this._addedAreas.delete(a),void(this._addedAreas=new Set(this._addedAreas));this._removedAreas.add(a),this._removedAreas=new Set(this._removedAreas)}},{kind:"method",key:"_addArea",value:function(e){var a=e.detail.value;if(a){if(e.target.value="",this._removedAreas.has(a))return this._removedAreas.delete(a),void(this._removedAreas=new Set(this._removedAreas));this._addedAreas.add(a),this._addedAreas=new Set(this._addedAreas)}}},{kind:"method",key:"_isNameValid",value:function(){return""!==this._name.trim()}},{kind:"method",key:"_nameChanged",value:function(e){this._error=void 0,this._name=e.target.value}},{kind:"method",key:"_levelChanged",value:function(e){this._error=void 0,this._level=""===e.target.value?null:Number(e.target.value)}},{kind:"method",key:"_iconChanged",value:function(e){this._error=void 0,this._icon=e.detail.value}},{kind:"method",key:"_updateEntry",value:(i=(0,n.A)((0,o.A)().mark((function e(){var a,i;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._submitting=!0,a=!this._params.entry,e.prev=2,i={name:this._name.trim(),icon:this._icon||(a?void 0:null),level:this._level,aliases:this._aliases},!a){e.next=9;break}return e.next=7,this._params.createEntry(i,this._addedAreas);case 7:e.next=11;break;case 9:return e.next=11,this._params.updateEntry(i,this._addedAreas,this._removedAreas);case 11:this.closeDialog(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),this._error=e.t0.message||this.hass.localize("ui.panel.config.floors.editor.unknown_error");case 17:return e.prev=17,this._submitting=!1,e.finish(17);case 20:case"end":return e.stop()}}),e,this,[[2,14,17,20]])}))),function(){return i.apply(this,arguments)})},{kind:"method",key:"_aliasesChanged",value:function(e){this._aliases=e.detail.value}},{kind:"get",static:!0,key:"styles",value:function(){return[O.RF,O.nA,(0,N.AH)(ae||(ae=(0,l.A)(["ha-textfield{display:block;margin-bottom:16px}ha-floor-icon{color:var(--secondary-text-color)}ha-chip-set{margin-bottom:8px}"])))]}}]}}),N.WF),customElements.define("dialog-floor-registry-detail",ie),s(),e.next=92;break;case 89:e.prev=89,e.t2=e.catch(0),s(e.t2);case 92:case"end":return e.stop()}}),e,null,[[0,89]])})));return function(a,i){return e.apply(this,arguments)}}())},47293:function(e,a,i){i.d(a,{J:function(){return s}});i(95737),i(39790),i(66457),i(99019),i(96858);var t=i(34897),r=function(){return Promise.all([i.e(963),i.e(1893),i.e(1982),i.e(9923),i.e(2992),i.e(4994),i.e(2903),i.e(4194),i.e(8929)]).then(i.bind(i,38929))},s=function(e,a){(0,t.r)(e,"show-dialog",{dialogTag:"dialog-area-registry-detail",dialogImport:r,dialogParams:a})}}}]);
//# sourceMappingURL=6668.1dqzIuC1kb0.js.map