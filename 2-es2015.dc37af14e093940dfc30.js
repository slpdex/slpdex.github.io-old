(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1G5W":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("l7GE"),s=n("ZUHj");function i(t){return e=>e.lift(new o(t))}class o{constructor(t){this.notifier=t}call(t,e){const n=new a(t),r=Object(s.a)(n,this.notifier);return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n}}class a extends r.a{constructor(t){super(t),this.seenValue=!1}notifyNext(t,e,n,r,s){this.seenValue=!0,this.complete()}notifyComplete(){}}},"1Yij":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("kB5k"),s=n.n(r);class i{transform(t,e){return new s.a(t).toFixed(3)}}},AHdB:function(t,e,n){"use strict";var r=n("8Y7J");n("wIqn"),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});var s=r.lb({encapsulation:0,styles:[["[_nghost-%COMP%]{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);background:#fff;border-radius:4px;display:flex;padding:40px}[widget-sm][_nghost-%COMP%]{padding:20px}"]],data:{}});function i(t){return r.Fb(2,[r.vb(null,0)],null,null)}},Zz6J:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("Afm0");class s{constructor(t){this.domSanitizer=t}ngOnInit(){this.svgBase64=this.domSanitizer.bypassSecurityTrustHtml(Object(r.e)(this.id,this.size?this.size:void 0))}}},be9G:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{constructor(){}ngOnInit(){}}},cp0P:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n("HDdC"),s=n("DH7j"),i=n("lJxs"),o=n("XoHu"),a=n("Cfvw");function l(...t){if(1===t.length){const e=t[0];if(Object(s.a)(e))return h(e,null);if(Object(o.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return h(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return h(t=1===t.length&&Object(s.a)(t[0])?t[0]:t,null).pipe(Object(i.a)(t=>e(...t)))}return h(t,null)}function h(t,e){return new r.a(n=>{const r=t.length;if(0===r)return void n.complete();const s=new Array(r);let i=0,o=0;for(let l=0;l<r;l++){const h=Object(a.a)(t[l]);let u=!1;n.add(h.subscribe({next:t=>{u||(u=!0,o++),s[l]=t},error:t=>n.error(t),complete:()=>{++i!==r&&u||(o===r&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}},eXdp:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{}},kXT5:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{}},oWVt:function(t,e,n){"use strict";var r=n("8Y7J");n("be9G"),n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});var s=r.lb({encapsulation:0,styles:[[".button[_ngcontent-%COMP%]{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);align-items:center;background:#5ebd6d;border-radius:4px;color:#fff;cursor:pointer;display:flex;font-weight:500;justify-content:center;outline:0;padding:5px 20px;width:100%}[_nghost-%COMP%]{display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]:active, [_nghost-%COMP%]:focus{outline:0}[button-full][_nghost-%COMP%]{width:100%}[button-lg][_nghost-%COMP%]{font-size:26px;height:60px}[button-md][_nghost-%COMP%]   .button[_ngcontent-%COMP%]{font-size:18px;height:50px;padding:5px 30px}[button-sm][_nghost-%COMP%]   .button[_ngcontent-%COMP%]{font-size:12px;height:30px;padding:5px 15px}[button-white][_nghost-%COMP%]   .button[_ngcontent-%COMP%]{background:#fff;color:#5c5c5c}[button-orange][_nghost-%COMP%]   .button[_ngcontent-%COMP%]{background:#faa352;color:#fff}[button-red][_nghost-%COMP%]   .button[_ngcontent-%COMP%]{background:#da4e4e;color:#fff}[disabled=true][_nghost-%COMP%]   .button[_ngcontent-%COMP%]{background:#b3b3b3!important;color:#fff!important;cursor:default!important}"]],data:{}});function i(t){return r.Fb(2,[(t()(),r.nb(0,0,null,null,1,"div",[["class","button"]],null,null,null,null,null)),r.vb(null,0)],null,null)}},p2CB:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{}},s7LF:function(t,e,n){"use strict";n.d(e,"i",function(){return tt}),n.d(e,"j",function(){return A}),n.d(e,"d",function(){return l}),n.d(e,"a",function(){return h}),n.d(e,"b",function(){return u}),n.d(e,"e",function(){return g}),n.d(e,"f",function(){return m}),n.d(e,"g",function(){return K}),n.d(e,"h",function(){return E}),n.d(e,"c",function(){return et});var r=n("8Y7J"),s=n("cUpR"),i=n("cp0P"),o=n("Cfvw"),a=n("lJxs");const l=new r.o("NgValueAccessor"),h=new r.o("CompositionEventMode");class u{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=(t=>{}),this.onTouched=(()=>{}),this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(s.r)()?Object(s.r)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}class c{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class d extends c{get formDirective(){return null}get path(){return null}}function p(){throw new Error("unimplemented")}class g extends c{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null,this._rawValidators=[],this._rawAsyncValidators=[]}get validator(){return p()}get asyncValidator(){return p()}}class _{constructor(t){this._cd=t}get ngClassUntouched(){return!!this._cd.control&&this._cd.control.untouched}get ngClassTouched(){return!!this._cd.control&&this._cd.control.touched}get ngClassPristine(){return!!this._cd.control&&this._cd.control.pristine}get ngClassDirty(){return!!this._cd.control&&this._cd.control.dirty}get ngClassValid(){return!!this._cd.control&&this._cd.control.valid}get ngClassInvalid(){return!!this._cd.control&&this._cd.control.invalid}get ngClassPending(){return!!this._cd.control&&this._cd.control.pending}}class m extends _{constructor(t){super(t)}}function f(t){return null==t||0===t.length}const y=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;class C{static min(t){return e=>{if(f(e.value)||f(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}static max(t){return e=>{if(f(e.value)||f(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}static required(t){return f(t.value)?{required:!0}:null}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return f(t.value)?null:y.test(t.value)?null:{email:!0}}static minLength(t){return e=>{if(f(e.value))return null;const n=e.value?e.value.length:0;return n<t?{minlength:{requiredLength:t,actualLength:n}}:null}}static maxLength(t){return e=>{const n=e.value?e.value.length:0;return n>t?{maxlength:{requiredLength:t,actualLength:n}}:null}}static pattern(t){if(!t)return C.nullValidator;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(f(t.value))return null;const r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}static nullValidator(t){return null}static compose(t){if(!t)return null;const e=t.filter(v);return 0==e.length?null:function(t){return V(function(t,n){return e.map(e=>e(t))}(t))}}static composeAsync(t){if(!t)return null;const e=t.filter(v);return 0==e.length?null:function(t){const n=function(t,n){return e.map(e=>e(t))}(t).map(b);return Object(i.a)(n).pipe(Object(a.a)(V))}}}function v(t){return null!=t}function b(t){const e=Object(r.rb)(t)?Object(o.a)(t):t;if(!Object(r.qb)(e))throw new Error("Expected validator to return Promise or Observable.");return e}function V(t){const e=t.reduce((t,e)=>null!=e?Object.assign({},t,e):t,{});return 0===Object.keys(e).length?null:e}function O(t){return t.validate?e=>t.validate(e):t}function w(t){return t.validate?e=>t.validate(e):t}class E{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=(t=>{}),this.onTouched=(()=>{})}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=(e=>{t(""==e?null:parseFloat(e))})}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}}class A{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}const M={formControlName:'\n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });',formGroupName:'\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',formArrayName:'\n    <div [formGroup]="myGroup">\n      <div formArrayName="cities">\n        <div *ngFor="let city of cityArray.controls; index as i">\n          <input [formControlName]="i">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl(\'SF\')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });',ngModelGroup:'\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>',ngModelWithFormGroup:'\n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '};function S(t,e){return[...e.path,t]}function x(t,e){t||k(e,"Cannot find control with"),e.valueAccessor||k(e,"No value accessor for form control with"),t.validator=C.compose([t.validator,e.validator]),t.asyncValidator=C.composeAsync([t.asyncValidator,e.asyncValidator]),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&P(t,e)})}(t,e),function(t,e){t.registerOnChange((t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&P(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),e.valueAccessor.setDisabledState&&t.registerOnDisabledChange(t=>{e.valueAccessor.setDisabledState(t)}),e._rawValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())}),e._rawAsyncValidators.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(()=>t.updateValueAndValidity())})}function P(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function k(t,e){let n;throw n=t.path.length>1?`path: '${t.path.join(" -> ")}'`:t.path[0]?`name: '${t.path}'`:"unspecified name attribute",new Error(`${e} ${n}`)}function T(t){return null!=t?C.compose(t.map(O)):null}function D(t){return null!=t?C.composeAsync(t.map(w)):null}const N=[class{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=(t=>{}),this.onTouched=(()=>{})}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"checked",t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}},class{constructor(t,e){this._renderer=t,this._elementRef=e,this.onChange=(t=>{}),this.onTouched=(()=>{})}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",parseFloat(t))}registerOnChange(t){this.onChange=(e=>{t(""==e?null:parseFloat(e))})}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}},E,class{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=(t=>{}),this.onTouched=(()=>{}),this._compareWith=r.sb}set compareWith(t){if("function"!=typeof t)throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=function(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=(e=>{this.value=this._getOptionValue(e),t(this.value)})}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}},class{constructor(t,e){this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=(t=>{}),this.onTouched=(()=>{}),this._compareWith=r.sb}set compareWith(t){if("function"!=typeof t)throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=((t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)})}else e=((t,e)=>{t._setSelected(!1)});this._optionMap.forEach(e)}registerOnChange(t){this.onChange=(e=>{const n=[];if(e.hasOwnProperty("selectedOptions")){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const r=t.item(e),s=this._getOptionValue(r.value);n.push(s)}}else{const t=e.options;for(let e=0;e<t.length;e++){const r=t.item(e);if(r.selected){const t=this._getOptionValue(r.value);n.push(t)}}}this.value=n,t(n)})}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}},class{constructor(t,e,n,r){this._renderer=t,this._elementRef=e,this._registry=n,this._injector=r,this.onChange=(()=>{}),this.onTouched=(()=>{})}ngOnInit(){this._control=this._injector.get(g),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this._renderer.setProperty(this._elementRef.nativeElement,"checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=(()=>{t(this.value),this._registry.select(this)})}fireUncheck(t){this.writeValue(t)}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this._throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}_throwNameError(){throw new Error('\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    ')}}],G="VALID",F="INVALID",j="PENDING",I="DISABLED";function U(t){const e=$(t)?t.validators:t;return Array.isArray(e)?T(e):e||null}function R(t,e){const n=$(e)?e.asyncValidators:t;return Array.isArray(n)?D(n):n||null}function $(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class z{constructor(t,e){this.validator=t,this.asyncValidator=e,this._onCollectionChange=(()=>{}),this.pristine=!0,this.touched=!1,this._onDisabledChange=[]}get parent(){return this._parent}get valid(){return this.status===G}get invalid(){return this.status===F}get pending(){return this.status==j}get disabled(){return this.status===I}get enabled(){return this.status!==I}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this.validator=U(t)}setAsyncValidators(t){this.asyncValidator=R(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=j,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=I,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign({},t,{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign({},t,{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=G,this._forEachChild(e=>{e.enable(Object.assign({},t,{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign({},t,{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==G&&this.status!==j||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?I:G}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=j;const e=b(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>this.setErrors(e,{emitEvent:t}))}}_cancelExistingSubscription(){this._asyncValidationSubscription&&this._asyncValidationSubscription.unsubscribe()}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){return null==e?null:(e instanceof Array||(e=e.split(".")),e instanceof Array&&0===e.length?null:e.reduce((t,e)=>t instanceof J?t.controls.hasOwnProperty(e)?t.controls[e]:null:t instanceof L&&t.at(e)||null,t))}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.m,this.statusChanges=new r.m}_calculateStatus(){return this._allControlsDisabled()?I:this.errors?F:this._anyControlsHaveStatus(j)?j:this._anyControlsHaveStatus(F)?F:G}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){$(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&this._parent&&this._parent.dirty&&!this._parent._anyControlsDirty()}}class W extends z{constructor(t=null,e,n){super(U(e),R(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1}),this._initObservables()}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_clearChangeFns(){this._onChange=[],this._onDisabledChange=[],this._onCollectionChange=(()=>{})}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class J extends z{constructor(t,e,n){super(U(e),R(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof W?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>t(this.controls[e],e))}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){let e=!1;return this._forEachChild((n,r)=>{e=e||this.contains(r)&&t(n)}),e}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,r)=>{n=e(n,t,r)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class L extends z{constructor(t,e,n){super(U(e),R(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!1})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof W?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const Z=(()=>Promise.resolve(null))();class q extends d{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.m,this.form=new J({},T(t),D(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Z.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),x(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Z.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),function(e,n){const r=e.indexOf(t);r>-1&&e.splice(r,1)}(this._directives)})}addFormGroup(t){Z.then(()=>{const e=this._findContainer(t.path),n=new J({});(function(t,e){null==t&&k(e,"Cannot find control with"),t.validator=C.compose([t.validator,e.validator]),t.asyncValidator=C.composeAsync([t.asyncValidator,e.asyncValidator])})(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Z.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){Z.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,e=this._directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}class B{static modelParentException(){throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive "formControlName" instead.  Example:\n\n      ${M.formControlName}\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ${M.ngModelWithFormGroup}`)}static formGroupNameException(){throw new Error(`\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${M.formGroupName}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${M.ngModelGroup}`)}static missingNameException(){throw new Error('If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">')}static modelGroupParentException(){throw new Error(`\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${M.formGroupName}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${M.ngModelGroup}`)}static ngFormWarning(){console.warn("\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    ")}}const H=new r.o("NgFormSelectorWarning");class Y extends d{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return S(this.name,this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return T(this._validators)}get asyncValidator(){return D(this._asyncValidators)}_checkParentType(){}}class X extends Y{constructor(t,e,n){super(),this._parent=t,this._validators=e,this._asyncValidators=n}_checkParentType(){this._parent instanceof X||this._parent instanceof q||B.modelGroupParentException()}}const Q=(()=>Promise.resolve(null))();class K extends g{constructor(t,e,n,s){super(),this.control=new W,this._registered=!1,this.update=new r.m,this._parent=t,this._rawValidators=e||[],this._rawAsyncValidators=n||[],this.valueAccessor=function(t,e){if(!e)return null;Array.isArray(e)||k(t,"Value accessor was not provided as an array for form control with");let n=void 0,r=void 0,s=void 0;return e.forEach(e=>{e.constructor===u?n=e:function(t){return N.some(e=>t.constructor===e)}(e)?(r&&k(t,"More than one built-in value accessor matches form control with"),r=e):(s&&k(t,"More than one custom value accessor matches form control with"),s=e)}),s||r||n||(k(t,"No valid value accessor for form control with"),null)}(this,s)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object(r.sb)(e,n.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?S(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}get validator(){return T(this._rawValidators)}get asyncValidator(){return D(this._rawAsyncValidators)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){x(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){!(this._parent instanceof X)&&this._parent instanceof Y?B.formGroupNameException():this._parent instanceof X||this._parent instanceof q||B.modelParentException()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()||this.name||B.missingNameException()}_updateValue(t){Q.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;Q.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}class tt{}class et{static withConfig(t){return{ngModule:et,providers:[{provide:H,useValue:t.warnOnDeprecatedNgFormSelector}]}}}},sJxD:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{}},sNRQ:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{}},"v+/9":function(t,e,n){"use strict";var r=n("8Y7J"),s=n("SVse");n("Zz6J"),n("cUpR"),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a});var i=r.lb({encapsulation:0,styles:[[".jdenticon[_ngcontent-%COMP%]{align-items:center;background:#f2f2f2;border-radius:100%;display:flex;justify-content:center;padding:5px}"]],data:{}});function o(t){return r.Fb(0,[(t()(),r.nb(0,0,null,null,0,"div",[["class","jdenticon"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(t,e){t(e,0,0,e.component.svgBase64)})}function a(t){return r.Fb(2,[(t()(),r.cb(16777216,null,null,1,null,o)),r.mb(1,16384,null,0,s.k,[r.M,r.J],{ngIf:[0,"ngIf"]},null)],function(t,e){t(e,1,0,e.component.svgBase64)},null)}},wIqn:function(t,e,n){"use strict";n.d(e,"a",function(){return r});class r{constructor(){}ngOnInit(){}}}}]);