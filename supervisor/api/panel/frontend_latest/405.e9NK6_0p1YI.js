export const id=405;export const ids=[405];export const modules={58558:(e,t,a)=>{a.d(t,{PE:()=>r});var n=a(48248),i=a(45269);const o=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],r=e=>e.first_weekday===i.zt.language?"weekInfo"in Intl.Locale.prototype?new Intl.Locale(e.language).weekInfo.firstDay%7:(0,n.S)(e.language)%7:o.includes(e.first_weekday)?o.indexOf(e.first_weekday):1},57289:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Yq:()=>u,zB:()=>c});a(253),a(94438);var i=a(13265),o=a(94100),r=a(45269),l=a(35638),m=e([i,l]);[i,l]=m.then?(await m)():m;(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric",timeZone:(0,l.w)(e.time_zone,t)})));const u=(e,t,a)=>s(t,a.time_zone).format(e),s=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",timeZone:(0,l.w)(e.time_zone,t)}))),c=((0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",timeZone:(0,l.w)(e.time_zone,t)}))),(e,t,a)=>{const n=d(t,a.time_zone);if(t.date_format===r.ow.language||t.date_format===r.ow.system)return n.format(e);const i=n.formatToParts(e),o=i.find((e=>"literal"===e.type))?.value,l=i.find((e=>"day"===e.type))?.value,m=i.find((e=>"month"===e.type))?.value,u=i.find((e=>"year"===e.type))?.value,s=i.at(i.length-1);let c="literal"===s?.type?s?.value:"";"bg"===t.language&&t.date_format===r.ow.YMD&&(c="");return{[r.ow.DMY]:`${l}${o}${m}${o}${u}${c}`,[r.ow.MDY]:`${m}${o}${l}${o}${u}${c}`,[r.ow.YMD]:`${u}${o}${m}${o}${l}${c}`}[t.date_format]}),d=(0,o.A)(((e,t)=>{const a=e.date_format===r.ow.system?void 0:e.language;return e.date_format===r.ow.language||(e.date_format,r.ow.system),new Intl.DateTimeFormat(a,{year:"numeric",month:"numeric",day:"numeric",timeZone:(0,l.w)(e.time_zone,t)})}));(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"long",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",timeZone:(0,l.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"short",timeZone:(0,l.w)(e.time_zone,t)})));n()}catch(e){n(e)}}))},8581:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{r6:()=>c});var i=a(13265),o=a(94100),r=a(57289),l=a(41924),m=a(35638),u=a(3453),s=e([i,r,l,m]);[i,r,l,m]=s.then?(await s)():s;const c=(e,t,a)=>d(t,a.time_zone).format(e),d=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,u.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.J)(e)?"h12":"h23",timeZone:(0,m.w)(e.time_zone,t)})));(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"short",day:"numeric",hour:(0,u.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.J)(e)?"h12":"h23",timeZone:(0,m.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{month:"short",day:"numeric",hour:(0,u.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,u.J)(e)?"h12":"h23",timeZone:(0,m.w)(e.time_zone,t)}))),(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:(0,u.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,u.J)(e)?"h12":"h23",timeZone:(0,m.w)(e.time_zone,t)})));n()}catch(e){n(e)}}))},41924:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{LW:()=>y,Xs:()=>h,fU:()=>u,ie:()=>c});var i=a(13265),o=a(94100),r=a(35638),l=a(3453),m=e([i,r]);[i,r]=m.then?(await m)():m;const u=(e,t,a)=>s(t,a.time_zone).format(e),s=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hourCycle:(0,l.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),c=(e,t,a)=>d(t,a.time_zone).format(e),d=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{hour:(0,l.J)(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hourCycle:(0,l.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),h=(e,t,a)=>g(t,a.time_zone).format(e),g=(0,o.A)(((e,t)=>new Intl.DateTimeFormat(e.language,{weekday:"long",hour:(0,l.J)(e)?"numeric":"2-digit",minute:"2-digit",hourCycle:(0,l.J)(e)?"h12":"h23",timeZone:(0,r.w)(e.time_zone,t)}))),y=(e,t,a)=>v(t,a.time_zone).format(e),v=(0,o.A)(((e,t)=>new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"2-digit",hour12:!1,timeZone:(0,r.w)(e.time_zone,t)})));n()}catch(e){n(e)}}))},30125:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{K:()=>u});var i=a(13265),o=a(94100),r=a(30157),l=e([i,r]);[i,r]=l.then?(await l)():l;const m=(0,o.A)((e=>new Intl.RelativeTimeFormat(e.language,{numeric:"auto"}))),u=(e,t,a,n=!0)=>{const i=(0,r.x)(e,a,t);return n?m(t).format(i.value,i.unit):Intl.NumberFormat(t.language,{style:"unit",unit:i.unit,unitDisplay:"long"}).format(Math.abs(i.value))};n()}catch(e){n(e)}}))},35638:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{w:()=>m});var i=a(13265),o=a(45269),r=e([i]);i=(r.then?(await r)():r)[0];const l=Intl.DateTimeFormat?.().resolvedOptions?.().timeZone??"UTC",m=(e,t)=>e===o.Wj.local&&"UTC"!==l?l:t;n()}catch(e){n(e)}}))},3453:(e,t,a)=>{a.d(t,{J:()=>o});var n=a(94100),i=a(45269);const o=(0,n.A)((e=>{if(e.time_format===i.Hg.language||e.time_format===i.Hg.system){const t=e.time_format===i.Hg.language?e.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(t).includes("10")}return e.time_format===i.Hg.am_pm}))},49281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>e.charAt(0).toUpperCase()+e.slice(1)},30157:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{x:()=>c});var i=a(74312),o=a(94086),r=a(50587),l=a(58558);const m=1e3,u=60,s=60*u;function c(e,t=Date.now(),a,n={}){const c={...d,...n||{}},h=(+e-+t)/m;if(Math.abs(h)<c.second)return{value:Math.round(h),unit:"second"};const g=h/u;if(Math.abs(g)<c.minute)return{value:Math.round(g),unit:"minute"};const y=h/s;if(Math.abs(y)<c.hour)return{value:Math.round(y),unit:"hour"};const v=new Date(e),w=new Date(t);v.setHours(0,0,0,0),w.setHours(0,0,0,0);const f=(0,i.c)(v,w);if(0===f)return{value:Math.round(y),unit:"hour"};if(Math.abs(f)<c.day)return{value:f,unit:"day"};const _=(0,l.PE)(a),k=(0,o.k)(v,{weekStartsOn:_}),p=(0,o.k)(w,{weekStartsOn:_}),I=(0,r.I)(k,p);if(0===I)return{value:f,unit:"day"};if(Math.abs(I)<c.week)return{value:I,unit:"week"};const z=v.getFullYear()-w.getFullYear(),D=12*z+v.getMonth()-w.getMonth();return 0===D?{value:I,unit:"week"}:Math.abs(D)<c.month||0===z?{value:D,unit:"month"}:{value:Math.round(z),unit:"year"}}const d={second:45,minute:45,hour:22,day:5,week:4,month:11};n()}catch(h){n(h)}}))},96778:(e,t,a)=>{a.d(t,{Sn:()=>n});const n="timestamp"},18766:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var n=a(36312),i=a(68689),o=a(50289),r=a(29818),l=a(57289),m=a(8581),u=a(41924),s=a(30125),c=a(49281),d=e([l,m,u,s]);[l,m,u,s]=d.then?(await d)():d;const h={date:l.Yq,datetime:m.r6,time:u.fU},g=["relative","total"];(0,n.A)([(0,r.EM)("hui-timestamp-display")],(function(e,t){class a extends t{constructor(...t){super(...t),e(this)}}return{F:a,d:[{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.MZ)({attribute:!1})],key:"ts",value:void 0},{kind:"field",decorators:[(0,r.MZ)()],key:"format",value:void 0},{kind:"field",decorators:[(0,r.MZ)({type:Boolean})],key:"capitalize",value:()=>!1},{kind:"field",decorators:[(0,r.wk)()],key:"_relative",value:void 0},{kind:"field",key:"_connected",value:void 0},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"connectedCallback",value:function(){(0,i.A)(a,"connectedCallback",this,3)([]),this._connected=!0,this._startInterval()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,i.A)(a,"disconnectedCallback",this,3)([]),this._connected=!1,this._clearInterval()}},{kind:"method",key:"render",value:function(){if(!this.ts||!this.hass)return o.s6;if(isNaN(this.ts.getTime()))return o.qy`${this.hass.localize("ui.panel.lovelace.components.timestamp-display.invalid")}`;const e=this._format;return g.includes(e)?o.qy` ${this._relative} `:e in h?o.qy` ${h[e](this.ts,this.hass.locale,this.hass.config)} `:o.qy`${this.hass.localize("ui.panel.lovelace.components.timestamp-display.invalid_format")}`}},{kind:"method",key:"updated",value:function(e){(0,i.A)(a,"updated",this,3)([e]),e.has("format")&&this._connected&&(g.includes("relative")?this._startInterval():this._clearInterval())}},{kind:"get",key:"_format",value:function(){return this.format||"relative"}},{kind:"method",key:"_startInterval",value:function(){this._clearInterval(),this._connected&&g.includes(this._format)&&(this._updateRelative(),this._interval=window.setInterval((()=>this._updateRelative()),1e3))}},{kind:"method",key:"_clearInterval",value:function(){this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"_updateRelative",value:function(){this.ts&&this.hass?.localize&&(this._relative="relative"===this._format?(0,s.K)(this.ts,this.hass.locale):(0,s.K)(new Date,this.hass.locale,this.ts,!1),this._relative=this.capitalize?(0,c.Z)(this._relative):this._relative)}}]}}),o.WF);t()}catch(e){t(e)}}))}};
//# sourceMappingURL=405.e9NK6_0p1YI.js.map