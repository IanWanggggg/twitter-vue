(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3be51be5"],{"16ab":function(e,t,r){},"1d84":function(e,t,r){},"62a9":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Comments"},e._l(e.currentRepliedTweets,(function(t){return r("div",{key:t.id,staticClass:"comment"},[r("div",{staticClass:"commentUserImage"},[r("router-link",{attrs:{to:{name:"user-other",params:{id:t.UserId||t.User.id,type:"tweets"}}}},[r("img",{attrs:{src:e._f("emptyImage")(t.userAvatar||t.User.avatar),alt:""}})])],1),r("div",{staticClass:"commentContent"},[r("div",{staticClass:"commentUserNameGroup"},[r("router-link",{staticClass:"commentUserName",attrs:{to:{name:"user-other",params:{id:t.UserId||t.User.id,type:"tweets"}}}},[e._v(e._s(t.userName||t.User.name))]),r("router-link",{staticClass:"commentUserAccount",attrs:{to:{name:"user-other",params:{id:t.UserId||t.User.id,type:"tweets"}}}},[e._v("＠"+e._s(t.userAccount||t.User.account))]),r("p",{staticClass:"commentCreatedAt"},[e._v("・"+e._s(e._f("fromNow")(t.createdAt)))])],1),r("div",{staticClass:"commentFor"},[r("p",[e._v(" 回覆 "),r("span",[e._v("@"+e._s(t.replyUserAccount||t.Tweet.User.account))])])]),r("div",{staticClass:"commentText"},[r("p",[r("router-link",{attrs:{to:{name:"tweet",params:{id:t.TweetId||t.Tweet.id}}}},[e._v(" "+e._s(t.comment)+" ")])],1)]),e._m(0,!0)])])})),0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"commentLikeBtnGroup"},[s("button",{staticClass:"commentBtn"},[s("img",{attrs:{src:r("85da"),alt:""}}),s("p",{staticClass:"commentNumber"},[e._v("0")])]),s("button",{staticClass:"likeBtn"},[s("img",{attrs:{src:r("cb66"),alt:""}}),s("p",{staticClass:"likedNumber"},[e._v("0")])])])}],i=r("e47f"),n={props:{currentRepliedTweets:{type:Array,required:!0}},mixins:[i["b"],i["a"]]},o=n,l=(r("a514"),r("2877")),c=Object(l["a"])(o,s,a,!1,null,"4aee0282",null);t["a"]=c.exports},"6d23":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"},"8f8e":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"AllTweets"},[e._l(e.initialCurrentTweets,(function(t){return s("div",{key:t.id,staticClass:"singleTweet"},[s("router-link",{attrs:{to:{name:"user-other",params:{id:t.User.id,type:"tweets"}}}},[s("img",{staticClass:"singleTweetUserImage",attrs:{src:e._f("emptyImage")(t.User.avatar),alt:""}})]),s("div",{staticClass:"singleTweetContent"},[s("div",{staticClass:"singleTweetUserNameGroup"},[s("router-link",{staticClass:"singleTweetUserName",attrs:{to:{name:"user-other",params:{id:t.User.id,type:"tweets"}}}},[e._v(e._s(t.User.name))]),s("router-link",{staticClass:"singleTweetUserAccount",attrs:{to:{name:"user-other",params:{id:t.User.id,type:"tweets"}}}},[e._v("@"+e._s(t.User.account))]),s("p",{staticClass:"singleTweetCreatedAt"},[e._v("・"+e._s(e._f("fromNow")(t.createdAt)))])],1),s("p",{staticClass:"singleTweetText"},[s("router-link",{attrs:{to:{name:"tweet",params:{id:t.id}}}},[e._v(e._s(t.description))])],1),s("div",{staticClass:"singleTweetBtnGroup"},[s("button",{staticClass:"singleTweetBtn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.openReplyTweetModal(t.id)}}},[s("img",{attrs:{src:r("85da"),alt:""}}),s("p",[e._v(e._s(t.Replies))])]),t.isLiked?s("button",{staticClass:"singleTweetBtn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.deleteLike(t.id)}}},[s("img",{attrs:{src:r("a042"),alt:""}}),s("p",[e._v(" "+e._s(t.Likes)+" ")])]):s("button",{staticClass:"singleTweetBtn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addLike(t.id)}}},[s("img",{attrs:{src:r("cb66"),alt:""}}),s("p",[e._v(" "+e._s(t.Likes)+" ")])])])])],1)})),s("div",{directives:[{name:"show",rawName:"v-show",value:e.replyTweetModalIsOpen,expression:"replyTweetModalIsOpen"}],attrs:{id:"replyTweetModal"}},[s("div",{attrs:{id:"replyTweetModalWrapper"}},[s("div",{staticClass:"replyTweetModalConnectLine"}),s("button",{staticClass:"closeReplyTweetModalBtn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closeReplyTweetModal.apply(null,arguments)}}},[e._v(" ✖ ")]),s("div",{staticClass:"replyTweetModalContent"},[s("div",{staticClass:"replyTweet"},[s("img",{staticClass:"replyTweetUserImage",attrs:{src:e._f("emptyImage")(e.replyTweetModalTweetInfo.User.avatar),alt:""}}),s("div",{staticClass:"replyTweetContent"},[s("div",{staticClass:"replyTweetUserNameGroup"},[s("router-link",{staticClass:"replyTweetUserName",attrs:{to:{name:"user-other",params:{id:e.replyTweetModalTweetInfo.User.id,type:"tweets"}}}},[e._v(e._s(e.replyTweetModalTweetInfo.User.name))]),s("router-link",{staticClass:"replyTweetUserAccount",attrs:{to:{name:"user-other",params:{id:e.replyTweetModalTweetInfo.User.id,type:"tweets"}}}},[e._v("@"+e._s(e.replyTweetModalTweetInfo.User.account))]),s("p",{staticClass:"replyTweetCreatedAt"},[e._v(" ・"+e._s(e._f("fromNow")(e.replyTweetModalTweetInfo.createdAt))+" ")])],1),s("p",{staticClass:"replyTweetText"},[e._v(" "+e._s(e.replyTweetModalTweetInfo.description)+" ")]),s("p",{staticClass:"replyTweetFor"},[e._v(" 回覆給 "),s("span",[e._v("@"+e._s(e.replyTweetModalTweetInfo.User.account))])])])]),s("div",{staticClass:"currentUserReply"},[s("img",{staticClass:"currentUserReplyUserImg",attrs:{src:e._f("emptyImage")(e.currentUser.avatar),width:"50px",height:"50px",alt:""}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.replyText,expression:"replyText"}],staticClass:"currentUserReplyText",attrs:{placeholder:"推你的回覆"},domProps:{value:e.replyText},on:{input:function(t){t.target.composing||(e.replyText=t.target.value)}}})]),s("button",{staticClass:"replyTweetModalSubmitBtn",attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.replyTweetModalSubmit.apply(null,arguments)}}},[e._v(" 回覆 ")])])])])],2)},a=[],i=r("1da1"),n=r("5530"),o=(r("498a"),r("7db0"),r("d3b7"),r("96cf"),r("dfd8")),l=r("6783"),c=r("2f62"),p=r("e47f"),d={props:{initialCurrentTweets:{type:Array,required:!0}},mixins:[p["b"],p["a"]],data:function(){return{replyTweetModalIsOpen:!1,replyTweetModalTweetInfo:{id:-1,UserId:-1,description:"",createdAt:"",updatedAt:"",Likes:-1,Replies:-1,User:{id:-1,email:"",password:"",name:"",role:"",account:"",cover:"",avatar:"",introduction:"",createdAt:"",updatedAt:""},isLiked:!1},replyText:"",isProcessing:!1}},computed:Object(n["a"])({},Object(c["b"])(["currentUser"])),methods:{openReplyTweetModal:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,l["a"].getTweet({id:e});case 4:s=r.sent,a=s.data,t.replyTweetModalTweetInfo=a,t.replyTweetModalIsOpen=!0,t.isProcessing=!1,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),t.isProcessing=!1,o["a"].fire({icon:"error",title:"推文資料取得失敗"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},closeReplyTweetModal:function(){this.isProcessing=!0,this.replyTweetModalTweetInfo={id:-1,UserId:-1,description:"",createdAt:"",updatedAt:"",Likes:-1,Replies:-1,User:{id:-1,email:"",password:"",name:"",role:"",account:"",cover:"",avatar:"",introduction:"",createdAt:"",updatedAt:""},isLiked:!1},this.replyTweetModalIsOpen=!1,this.replyText="",this.isProcessing=!1},replyTweetModalSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.replyText.trim()){t.next=7;break}return o["a"].fire({icon:"warning",title:"回覆內容不可留白"}),e.replyText="",t.abrupt("return");case 7:if(!(e.replyText.length>140)){t.next=10;break}return o["a"].fire({icon:"warning",title:"回覆內容不可超過140字"}),t.abrupt("return");case 10:return e.isProcessing=!0,t.next=13,l["a"].replyTweet({id:e.replyTweetModalTweetInfo.id,comment:e.replyText});case 13:e.replyText="",e.replyTweetModalIsOpen=!1,e.isProcessing=!1,e.$emit("replyTweetSubmit"),o["a"].fire({icon:"success",title:"回覆推文成功"}),t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](0),e.isProcessing=!1,o["a"].fire({icon:"error",title:"回復推文失敗"});case 24:case"end":return t.stop()}}),t,null,[[0,20]])})))()},addLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,l["a"].addLike({id:e});case 4:s=t.initialCurrentTweets.find((function(t){return t.id===e})),s.isLiked=!0,s.Likes++,t.isProcessing=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isProcessing=!1,o["a"].fire({icon:"error",title:"無法按讚推文"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,l["a"].deleteLike({id:e});case 4:s=t.initialCurrentTweets.find((function(t){return t.id===e})),s.isLiked=!1,s.Likes--,t.isProcessing=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isProcessing=!1,o["a"].fire({icon:"error",title:"無法取消按讚推文"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},u=d,w=(r("9394"),r("2877")),m=Object(w["a"])(u,s,a,!1,null,"1b6c1ee1",null);t["a"]=m.exports},9394:function(e,t,r){"use strict";r("16ab")},a354:function(e,t,r){},a514:function(e,t,r){"use strict";r("a354")},bad0:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"AllTweets"},[e._l(e.initialCurrentTweets,(function(t){return s("div",{key:t.id,staticClass:"singleTweet"},[s("router-link",{attrs:{to:{name:"user-other",params:{id:t.Tweet.User.id,type:"tweets"}}}},[s("img",{staticClass:"singleTweetUserImage",attrs:{src:e._f("emptyImage")(t.Tweet.User.avatar),alt:""}})]),s("div",{staticClass:"singleTweetContent"},[s("div",{staticClass:"singleTweetUserNameGroup"},[s("router-link",{staticClass:"singleTweetUserName",attrs:{to:{name:"user-other",params:{id:t.Tweet.User.id,type:"tweets"}}}},[e._v(e._s(t.Tweet.User.name))]),s("router-link",{staticClass:"singleTweetUserAccount",attrs:{to:{name:"user-other",params:{id:t.Tweet.User.id,type:"tweets"}}}},[e._v("@"+e._s(t.Tweet.User.account))]),s("p",{staticClass:"singleTweetCreatedAt"},[e._v(" ・"+e._s(e._f("fromNow")(t.Tweet.createdAt))+" ")])],1),s("p",{staticClass:"singleTweetText"},[s("router-link",{attrs:{to:{name:"tweet",params:{id:t.Tweet.id}}}},[e._v(e._s(t.Tweet.description))])],1),s("div",{staticClass:"singleTweetBtnGroup"},[s("button",{staticClass:"singleTweetBtn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.openReplyTweetModal(t.Tweet.id)}}},[s("img",{attrs:{src:r("85da"),alt:""}}),s("p",[e._v(e._s(t.Tweet.Replies.length))])]),t.isLiked?s("button",{staticClass:"singleTweetBtn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.deleteLike(t.Tweet.id)}}},[s("img",{attrs:{src:r("a042"),alt:""}}),s("p",[e._v(" "+e._s(t.Tweet.Likes.length)+" ")])]):s("button",{staticClass:"singleTweetBtn",attrs:{disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),e.addLike(t.Tweet.id)}}},[s("img",{attrs:{src:r("cb66"),alt:""}}),s("p",[e._v(" "+e._s(t.Tweet.Likes.length)+" ")])])])])],1)})),s("div",{directives:[{name:"show",rawName:"v-show",value:e.replyTweetModalIsOpen,expression:"replyTweetModalIsOpen"}],attrs:{id:"replyTweetModal"}},[s("div",{attrs:{id:"replyTweetModalWrapper"}},[s("div",{staticClass:"replyTweetModalConnectLine"}),s("button",{staticClass:"closeReplyTweetModalBtn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closeReplyTweetModal.apply(null,arguments)}}},[e._v(" ✖ ")]),s("div",{staticClass:"replyTweetModalContent"},[s("div",{staticClass:"replyTweet"},[s("img",{staticClass:"replyTweetUserImage",attrs:{src:e._f("emptyImage")(e.replyTweetModalTweetInfo.User.avatar),alt:""}}),s("div",{staticClass:"replyTweetContent"},[s("div",{staticClass:"replyTweetUserNameGroup"},[s("router-link",{staticClass:"replyTweetUserName",attrs:{to:{name:"user-other",params:{id:e.replyTweetModalTweetInfo.User.id,type:"tweets"}}}},[e._v(e._s(e.replyTweetModalTweetInfo.User.name))]),s("router-link",{staticClass:"replyTweetUserAccount",attrs:{to:{name:"user-other",params:{id:e.replyTweetModalTweetInfo.User.id,type:"tweets"}}}},[e._v("@"+e._s(e.replyTweetModalTweetInfo.User.account))]),s("p",{staticClass:"replyTweetCreatedAt"},[e._v(" ・"+e._s(e._f("fromNow")(e.replyTweetModalTweetInfo.createdAt))+" ")])],1),s("p",{staticClass:"replyTweetText"},[e._v(" "+e._s(e.replyTweetModalTweetInfo.description)+" ")]),s("p",{staticClass:"replyTweetFor"},[e._v(" 回覆給 "),s("span",[e._v("@"+e._s(e.replyTweetModalTweetInfo.User.account))])])])]),s("div",{staticClass:"currentUserReply"},[s("img",{staticClass:"currentUserReplyUserImg",attrs:{src:e._f("emptyImage")(e.currentUser.avatar),width:"50px",height:"50px",alt:""}}),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.replyText,expression:"replyText"}],staticClass:"currentUserReplyText",attrs:{placeholder:"推你的回覆"},domProps:{value:e.replyText},on:{input:function(t){t.target.composing||(e.replyText=t.target.value)}}})]),s("button",{staticClass:"replyTweetModalSubmitBtn",attrs:{disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.replyTweetModalSubmit.apply(null,arguments)}}},[e._v(" 回覆 ")])])])])],2)},a=[],i=r("1da1"),n=r("5530"),o=(r("498a"),r("7db0"),r("d3b7"),r("96cf"),r("dfd8")),l=r("6783"),c=r("2f62"),p=r("e47f"),d={props:{initialCurrentTweets:{type:Array,required:!0}},mixins:[p["b"],p["a"]],data:function(){return{replyTweetModalIsOpen:!1,replyTweetModalTweetInfo:{id:-1,UserId:-1,description:"",createdAt:"",updatedAt:"",Likes:-1,Replies:-1,User:{id:-1,email:"",password:"",name:"",role:"",account:"",cover:"",avatar:"",introduction:"",createdAt:"",updatedAt:""},isLiked:!1},replyText:"",isProcessing:!1}},computed:Object(n["a"])({},Object(c["b"])(["currentUser"])),methods:{openReplyTweetModal:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,l["a"].getTweet({id:e});case 4:s=r.sent,a=s.data,t.replyTweetModalTweetInfo=a,t.replyTweetModalIsOpen=!0,t.isProcessing=!1,r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),t.isProcessing=!1,o["a"].fire({icon:"error",title:"推文資料取得失敗"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},closeReplyTweetModal:function(){this.isProcessing=!0,this.replyTweetModalTweetInfo={id:-1,UserId:-1,description:"",createdAt:"",updatedAt:"",Likes:-1,Replies:-1,User:{id:-1,email:"",password:"",name:"",role:"",account:"",cover:"",avatar:"",introduction:"",createdAt:"",updatedAt:""},isLiked:!1},this.replyTweetModalIsOpen=!1,this.replyText="",this.isProcessing=!1},replyTweetModalSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.replyText.trim()){t.next=7;break}return o["a"].fire({icon:"warning",title:"回覆內容不可留白"}),e.replyText="",t.abrupt("return");case 7:if(!(e.replyText.length>140)){t.next=10;break}return o["a"].fire({icon:"warning",title:"回覆內容不可超過140字"}),t.abrupt("return");case 10:return e.isProcessing=!0,t.next=13,l["a"].replyTweet({id:e.replyTweetModalTweetInfo.id,comment:e.replyText});case 13:e.replyText="",e.replyTweetModalIsOpen=!1,e.isProcessing=!1,e.$emit("replyTweetSubmit"),o["a"].fire({icon:"success",title:"回覆推文成功"}),t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](0),e.isProcessing=!1,o["a"].fire({icon:"error",title:"回復推文失敗"});case 24:case"end":return t.stop()}}),t,null,[[0,20]])})))()},addLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,l["a"].addLike({id:e});case 4:s=t.initialCurrentTweets.find((function(t){return t.Tweet.id===e})),s.isLiked=!0,s.tweetLikesCount++,t.isProcessing=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isProcessing=!1,o["a"].fire({icon:"error",title:"無法按讚推文"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},deleteLike:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,l["a"].deleteLike({id:e});case 4:s=t.initialCurrentTweets.find((function(t){return t.Tweet.id===e})),s.isLiked=!1,s.tweetLikesCount--,t.isProcessing=!1,r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),t.isProcessing=!1,o["a"].fire({icon:"error",title:"無法取消按讚推文"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},u=d,w=(r("cbc4"),r("2877")),m=Object(w["a"])(u,s,a,!1,null,"f7588966",null);t["a"]=m.exports},cbc4:function(e,t,r){"use strict";r("1d84")}}]);
//# sourceMappingURL=chunk-3be51be5.5bf3b7a4.js.map