(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],d=0,m=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("clientForm")},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("transition",{attrs:{name:"fade"}},[e.notification?n("div",{staticClass:"notification"},[n("p",[e._v("Клиент успешно создан")]),n("div",{staticClass:"icon",on:{click:function(t){e.notification=!1}}},[e._v("☓")])]):e._e()]),n("div",{staticClass:"card"},[n("form",{staticClass:"form",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("h2",[e._v("Личные данные:")]),n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"},{name:"type",rawName:"v-type",value:"string",expression:"'string'"}],attrs:{type:"text",placeholder:"Фамилия*"},domProps:{value:e.surname},on:{input:function(t){t.target.composing||(e.surname=t.target.value)}}}),n("p",{class:{form__checkOff:!0,form__checkOn:e.$v.surname.$dirty&!e.$v.surname.required}},[e._v("Поле обязательно для заполнения")])]),n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"type",rawName:"v-type",value:"string",expression:"'string'"}],attrs:{type:"text",placeholder:"Имя*"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("p",{class:{form__checkOff:!0,form__checkOn:e.$v.name.$dirty&!e.$v.name.required}},[e._v("Поле обязательно для заполнения")])]),n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"type",rawName:"v-type",value:"string",expression:"'string'"},{name:"model",rawName:"v-model",value:e.patronymic,expression:"patronymic"}],attrs:{type:"text",placeholder:"Отчество"},domProps:{value:e.patronymic},on:{input:function(t){t.target.composing||(e.patronymic=t.target.value)}}})]),n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",placeholder:"Дата рождения*"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}}),n("p",{class:{form__checkOff:!0,form__checkOn:e.$v.date.$dirty&!e.$v.date.required}},[e._v("Поле обязательно для заполнения")])]),n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"},{name:"mask",rawName:"v-mask"}],attrs:{type:"phone",placeholder:"Ваш номер телефона",maxlength:"16"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}}),n("p",{class:{form__checkOff:!0,form__checkOn:e.$v.phone.$dirty&!e.$v.phone.minLength}},[e._v("Номер не кооректный")])]),n("div",{staticClass:"form__label"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.male,expression:"male"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.male=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Укажите пол")]),n("option",[e._v("Мужской")]),n("option",[e._v("Женский")])])]),n("div",{staticClass:"form__label"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.doc,expression:"doc"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.doc=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Лечащий врач")]),n("option",[e._v("Иванов")]),n("option",[e._v("Захаров")]),n("option",[e._v("Чернышева")])])]),n("div",{staticClass:"form__label"},[n("p",{staticClass:"title"},[e._v("Группа клиентов*")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.group,expression:"group"}],staticClass:"selectMulti",class:{invalid:e.$v.group.$dirty&!e.$v.group.required},attrs:{multiple:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.group=t.target.multiple?n:n[0]}}},[n("option",[e._v("VIP")]),n("option",[e._v("Проблемные")]),n("option",[e._v("ОМС")])]),n("p",{class:{form__checkOff:!0,form__checkOn:e.$v.group.$dirty&!e.$v.group.required}},[e._v("Поле обязательно для заполнения")])]),n("div",{staticClass:"form__label flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sms,expression:"sms"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.sms)?e._i(e.sms,null)>-1:e.sms},on:{change:function(t){var n=e.sms,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.sms=n.concat([o])):i>-1&&(e.sms=n.slice(0,i).concat(n.slice(i+1)))}else e.sms=a}}}),n("label",{attrs:{for:"checkbox"}},[n("p",{staticClass:"title"},[e._v(e._s(e.sms?" Вам будут направляться смс":" Вам не будут направляться смс"))])])]),n("h2",[e._v("Адрес:")]),n("div",{staticClass:"adress"},[e._l(e.test,(function(t,r){return n("div",{key:r+2},[n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"type",rawName:"v-type",value:t.type,expression:"item.type"},{name:"model",rawName:"v-model",value:t.index,expression:"item.index"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.index},on:{input:function(n){n.target.composing||e.$set(t,"index",n.target.value)}}})])])})),n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"type",rawName:"v-type",value:"string",expression:"'string'"},{name:"model",rawName:"v-model",value:e.city,expression:"city"}],attrs:{type:"text",placeholder:"Город*"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}}),n("p",{class:{form__checkOff:!0,form__checkOn:e.$v.city.$dirty&!e.$v.city.required}},[e._v("Поле обязательно для заполнения")])])],2),n("h2",[e._v("Документы:")]),n("div",{staticClass:"document"},[n("div",{staticClass:"form__label"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.document,expression:"document"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.document=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:""}},[e._v("Тип документа*")]),n("option",[e._v("Паспорт")]),n("option",[e._v("Свидетельство о рождении")]),n("option",[e._v("Вод. удостоверение")])]),n("p",{class:{form__checkOff:!0,form__checkOn:e.$v.document.$dirty&!e.$v.document.required}},[e._v("Поле обязательно для заполнения")])]),n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.document_date,expression:"document_date"}],attrs:{type:"date",placeholder:"Дата выдачи*"},domProps:{value:e.document_date},on:{input:function(t){t.target.composing||(e.document_date=t.target.value)}}}),n("p",{class:{form__checkOff:!0,form__checkOn:e.$v.document_date.$dirty&!e.$v.document_date.required}},[e._v("Поле обязательно для заполнения")])]),e._l(e.documentArr,(function(t){return n("div",{key:t.model},[n("div",{staticClass:"form__label"},[n("input",{directives:[{name:"type",rawName:"v-type",value:t.type,expression:"item.type"},{name:"model",rawName:"v-model",value:t.index,expression:"item.index"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.index},on:{input:function(n){n.target.composing||e.$set(t,"index",n.target.value)}}})])])}))],2),n("button",{attrs:{type:"submit"}},[e._v("ОТПРАВИТЬ")])])])],1)},s=[],l=n("b5ae"),c={data:function(){return{notification:!1,name:"",surname:"",patronymic:"",date:"",phone:"",male:"",group:[],doc:"",sms:!1,index:"",country:"",area:"",city:"",street:"",home:"",document:"",document_series:"",document_number:"",document_organization:"",document_date:"",test:[{model:this.index,placeholder:"Индекс",type:"number"},{model:this.country,placeholder:"Страна",type:"string"},{model:this.area,placeholder:"Область",type:"string"},{model:this.street,placeholder:"Улица",type:"string"},{model:this.home,placeholder:"Дом",type:"number"}],documentArr:[{model:this.document_series,placeholder:"Серия",type:"number"},{model:this.document_number,placeholder:"Номер",type:"number"},{model:this.document_organization,placeholder:"Кем выдан",type:"string"}]}},validations:{name:{required:l["required"]},surname:{required:l["required"]},date:{required:l["required"]},group:{required:l["required"]},city:{required:l["required"]},document:{required:l["required"]},document_date:{required:l["required"]},phone:{minLength:Object(l["minLength"])(16)}},methods:{submit:function(){this.$v.$invalid?this.$v.$touch():this.notificationOpen()},notificationOpen:function(){var e=this;this.notification=!0,setTimeout((function(){e.notification=!1}),3e3)}}},u=c,d=(n("7488"),n("2877")),m=Object(d["a"])(u,i,s,!1,null,"7dab89e1",null),p=m.exports,v={name:"App",components:{clientForm:p}},f=v,_=(n("034f"),Object(d["a"])(f,a,o,!1,null,null,null)),h=_.exports,y=n("1dce"),g=n.n(y);r["a"].use(g.a);n("ac1f"),n("5319");var b={bind:function(e){e.oninput=function(){7!=this.value[0]&&this.value.length<2&&(this.value=7),this.value.length<=11&&(this.value=this.value.replace(/[^\d]/g,"").replace(/(\d{01})(\d{3})(\d{3})(\d{4})/,"$1 ($2) $3-$4"))}}},x={bind:function(e,t){e.oninput=function(){"number"==t.value?(console.log("number"),this.value=this.value.replace(/[^\d]/g,"")):"string"==t.value&&(console.log("string"),this.value=this.value.replace(/[^[A-Za-zА-яЁё]/g,""))}}};r["a"].directive("mask",b),r["a"].directive("type",x),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"5b48":function(e,t,n){},7488:function(e,t,n){"use strict";var r=n("5b48"),a=n.n(r);a.a},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.e1bf27fa.js.map