(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-317dd5d2"],{3740:function(e,a,s){},"46eb":function(e,a,s){"use strict";s("3740")},"5c9c":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"SignUp"},[t("form",{on:{submit:function(a){return a.stopPropagation(),a.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("router-link",{attrs:{to:"/signin"}},[t("img",{staticClass:"logo",attrs:{src:s("a136"),height:"40px",width:"40px",alt:""}})]),t("h1",{staticClass:"title"},[e._v("建立你的帳號")]),t("div",{staticClass:"labelInputGroup"},[t("label",{staticClass:"formLabel",attrs:{for:"account"}},[e._v("帳號")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],staticClass:"formInput",class:{error:e.accountErrorMessage&&!e.account||e.account.length>50},attrs:{type:"text",name:"account",id:"account",placeholder:"請輸入帳號",required:""},domProps:{value:e.account},on:{input:function(a){a.target.composing||(e.account=a.target.value)}}}),0===e.account.length||e.account.length>50?t("div",{staticClass:"errorMessage"},[0===e.account.length?t("p",{staticClass:"errorText"},[e._v(" "+e._s(e.accountErrorMessage)+" ")]):e._e(),e.account.length>50?t("p",{staticClass:"errorText"},[e._v("字數超出上限!")]):e._e(),e.account.length>50?t("p",{staticClass:"wordsCount"},[e._v(" "+e._s(e.account.length)+"/50 ")]):e._e()]):e._e()]),t("div",{staticClass:"labelInputGroup"},[t("label",{staticClass:"formLabel",attrs:{for:"name"}},[e._v("名稱")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"formInput",class:{error:e.name.length>50},attrs:{type:"text",name:"name",id:"name",placeholder:"請輸入使用者名稱",required:""},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),e.name.length>50?t("div",{staticClass:"errorMessage"},[t("p",{staticClass:"errorText"},[e._v("字數超出上限!")]),t("p",{staticClass:"wordsCount"},[e._v(e._s(e.name.length)+"/50")])]):e._e()]),t("div",{staticClass:"labelInputGroup"},[t("label",{staticClass:"formLabel",attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"formInput",class:{error:e.emailErrorMessage&&!e.email},attrs:{type:"email",name:"email",id:"email",placeholder:"請輸入Email",required:""},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),0===e.email.length?t("div",{staticClass:"errorMessage"},[t("p",{staticClass:"errorText"},[e._v(" "+e._s(e.emailErrorMessage)+" ")])]):e._e()]),t("div",{staticClass:"labelInputGroup"},[t("label",{staticClass:"formLabel",attrs:{for:"password"}},[e._v("密碼")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"formInput",class:{error:e.passwordErrorMessage&&!e.password},attrs:{type:"password",name:"password",id:"password",placeholder:"請設定密碼",required:""},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),0===e.password.length?t("div",{staticClass:"errorMessage"},[t("p",{staticClass:"errorText"},[e._v(" "+e._s(e.passwordErrorMessage)+" ")])]):e._e()]),t("div",{staticClass:"labelInputGroup"},[t("label",{staticClass:"formLabel",attrs:{for:"password"}},[e._v("密碼確認")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"formInput",attrs:{type:"password",name:"passwordCheck",id:"passwordCheck",placeholder:"請再次輸入密碼",required:""},domProps:{value:e.passwordCheck},on:{input:function(a){a.target.composing||(e.passwordCheck=a.target.value)}}})]),t("button",{staticClass:"signUpBtn",attrs:{disabled:e.isProcessing,type:"submit"}},[e._v(" 註冊 ")]),t("button",{staticClass:"cancelBtn",attrs:{disabled:e.isProcessing},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.cancelSubmit.apply(null,arguments)}}},[e._v(" 取消 ")])],1)])},r=[],n=s("1da1"),o=(s("96cf"),s("498a"),s("b0c0"),s("d9e2"),s("dfd8")),i=s("7696"),c={data:function(){return{account:"",name:"",email:"",password:"",passwordCheck:"",isFirstTry:!0,accountErrorMessage:"",emailErrorMessage:"",passwordErrorMessage:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s,t;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e.isProcessing=!0,e.account.trim()&&e.password.trim()&&e.name.trim()&&e.email.trim()&&e.passwordCheck.trim()){a.next=6;break}return e.isProcessing=!1,o["a"].fire({icon:"warning",title:"請確實填寫每個欄位"}),a.abrupt("return");case 6:if(!(e.account.length>50)){a.next=12;break}return e.isProcessing=!1,o["a"].fire({icon:"warning",title:"帳號超出字數"}),a.abrupt("return");case 12:if(!(e.name.length>50)){a.next=16;break}return e.isProcessing=!1,o["a"].fire({icon:"warning",title:"名稱超出字數"}),a.abrupt("return");case 16:return a.next=18,i["a"].signUp({account:e.account,name:e.name,email:e.email,password:e.password,checkPassword:e.passwordCheck});case 18:if(s=a.sent,t=s.data,"success"===t.status){a.next=22;break}throw new Error(t.message);case 22:o["a"].fire({icon:"success",title:"註冊成功，跳轉至登入頁"}),e.$router.push({name:"sign-in"}),a.next=39;break;case 26:a.prev=26,a.t0=a["catch"](0),e.isFirstTry=!1,e.account="",e.name="",e.email="",e.password="",e.passwordCheck="",e.accountErrorMessage="",e.emailErrorMessage="",e.isProcessing=!1,"Error: Account already exists!"===a.t0.response.data.message?e.accountErrorMessage="帳號已有存在":"Error: Email already exists!"===a.t0.response.data.message?e.emailErrorMessage="Email已被註冊":"Error: Password do not match!"===a.t0.response.data.message&&(e.passwordErrorMessage="密碼與密碼確認不相符"),o["a"].fire({icon:"error",title:"註冊失敗"});case 39:case"end":return a.stop()}}),a,null,[[0,26]])})))()},cancelSubmit:function(){this.$router.push("/signin")}}},l=c,u=(s("46eb"),s("2877")),p=Object(u["a"])(l,t,r,!1,null,"2b1de52a",null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-317dd5d2.dc2c3616.js.map