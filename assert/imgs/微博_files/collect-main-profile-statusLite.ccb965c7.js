(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["collect-main-profile-statusLite"],{"0322":function(t,e,i){"use strict";var s=i("383a"),o={methods:{gomore:function(t){var e=this,i={text:"举报",method:function(){window.location.href="https://service.account.weibo.com/reportspamobile?rid=".concat(t.id,"&type=1&from=20000")}},o={text:"删除",method:function(){s["a"].$emit("mvMsgbox",{title:"确定要删除这条微博吗？",type:"confirm"},(function(){e.$http.post("profile/delMyblog",{mid:t.id}).then((function(i){if(s["a"].$emit("mvMsgbox",!1),!(i.data&&i.data.ok>0))throw new Error(i.data);var o=e,a="deleteWeibo";while(o)"function"===typeof o[a]?(o[a](t.id),o=null):o=o.$parent;s["a"].$emit("mvToast",{type:"warn",text:"删除成功"})})).catch((function(t){s["a"].$emit("mvMsgbox",!1),s["a"].$emit("mvToast",{type:"error",text:t.msg||"操作失败"})}))}))}},a={text:"分享",method:function(){window.navigator.share({title:t.status_title||"微博",text:"来自 ".concat(t.user.screen_name," 的微博"),url:"https://m.weibo.cn/detail/".concat(t.id)}).then((function(){s["a"].$emit("mvToast",{type:"ok",text:"分享成功"})}))}},r={text:"复制链接",method:function(){var e="https://m.weibo.cn/detail/".concat(t.id),i=document.createElement("input");i.setAttribute("readonly","readonly"),i.setAttribute("value",e),document.body.appendChild(i),i.select(),i.setSelectionRange(0,9999),document.execCommand("copy")?(document.execCommand("copy"),s["a"].$emit("mvToast",{type:"ok",backdrop:!1,text:"复制成功"})):s["a"].$emit("mvToast",{type:"error",backdrop:!1,text:"复制失败"}),document.body.removeChild(i)}},n={text:"编辑微博",method:function(){if(t.retweeted_status)e.$router.push({name:"repost",query:{id:t.retweeted_status.id,editId:t.id}});else{var i={editId:t.id},s=t.pic_ids.join(",");s&&(i.pids=s),e.$router.push({name:"composer",query:i})}}},c={text:"查看编辑记录",method:function(){e.$router.push({path:"/p/231440_-_".concat(t.id,"?title=编辑记录")})}},m={text:t.favorited?"取消收藏":"收藏",method:function(){var i="mblogDeal/".concat(t.favorited?"delFavMblog":"addFavMblog");e.$http.post(i,{id:t.id}).then((function(e){if(!e.data||!e.data.ok)throw new Error;t.favorited=!t.favorited,s["a"].$emit("mvToast",{type:"ok",text:e.data.msg})}),(function(t){s["a"].$emit("mvToast",{type:"error",text:t.msg||"请求失败"})}))}},l=[],u=this.$store.state.config.config;if(u.login&&(l.push(m),parseInt(u.uid,10)===t.user.id?l.push(o):l.push(i)),document.queryCommandSupported("copy")){var d=document.createElement("input");d.setAttribute("value","test"),d.setSelectionRange(0,9999),document.execCommand("copy")&&l.push(r)}t.can_edit&&l.push(n),t.edit_count&&l.push(c),window.navigator.share&&l.push(a),s["a"].$emit("mvActionSheet",l,"取消")}}};e["a"]=o},"117b":function(t,e,i){"use strict";var s=i("f85a"),o=i.n(s);o.a},"3dcc":function(t,e,i){t.exports=i.p+"img/tips_error.4a1f9900.svg"},a020:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"f-footer-ctrl"},[t.showRt?i("div",{directives:[{name:"mactive",rawName:"v-mactive"}],staticClass:"m-diy-btn m-box-center-a",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.repost(e)}}},[t.showRt?i("i",{staticClass:"lite-iconf lite-iconf-report"}):t._e(),i("h4",[t._v("\n      "+t._s(t._f("numFormat")(0===t.item.reposts_count?"转发":t.item.reposts_count))+"\n    ")])]):t._e(),i("div",{directives:[{name:"mactive",rawName:"v-mactive"}],staticClass:"m-diy-btn m-box-center-a",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.comment(e)}}},[i("i",{staticClass:"lite-iconf lite-iconf-comments"}),i("h4",[t._v("\n      "+t._s(t._f("numFormat")(0===t.item.comments_count?"评论":t.item.comments_count))+"\n    ")])]),i("div",{directives:[{name:"mactive",rawName:"v-mactive"}],staticClass:"m-diy-btn m-box-center-a",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.like(e)}}},[i("i",{staticClass:"lite-iconf",class:{"lite-iconf-liked":t.liked,"lite-iconf-like":!t.liked}}),i("h4",[t._v(t._s(t._f("numFormat")(0===t.like_counts?"赞":t.like_counts)))])]),t.showTriangle?i("aside",{directives:[{name:"mactive",rawName:"v-mactive"}],on:{click:function(e){return t.gomore(t.item)}}},[i("i",{staticClass:"m-font m-font-dot-more"})]):t._e()])},o=[],a=(i("8e6e"),i("ac6a"),i("cadf"),i("456d"),i("bd86")),r=i("2f62"),n=i("383a"),c=i("0322");function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var u={mixins:[c["a"]],data:function(){return{liked:!1,like_counts:0}},props:["item","showTriangle"],created:function(){this.liked=this.item.liked,this.like_counts=this.item.attitudes_count},watch:{item:function(){this.liked=this.item.liked,this.like_counts=this.item.attitudes_count}},methods:l({},Object(r["b"])(["setCurWeiboData"]),{repost:function(){this.setCurWeiboData(this.item),this.$router.push({name:"repost",query:{id:this.item.id}})},comment:function(){this.item.comments_count?(this.setCurWeiboData(this.item),this.$router.push({name:"detail",params:{id:this.item.id}})):this.$router.push({name:"comment",query:{id:this.item.id}})},like:function(){var t=this,e=this.liked?"api/attitudes/destroy":"api/attitudes/create";this.$http.post(e,{id:this.item.id,attitude:"heart"}).then((function(e){e.data&&e.data.ok>0?(t.liked?(t.like_counts-=1,t.liked=!1):(t.like_counts+=1,t.liked=!0),t.item.attitudes_count=t.like_counts,t.item.liked=t.liked):e.data.msg&&n["a"].$emit("mvToast",{type:"error",text:e.data.msg})}),(function(t){throw new Error(t)}))},showRt:function(){return!(this.item.visible&&this.item.visible.type>0)}})},d=u,p=i("0c7c"),f=Object(p["a"])(d,s,o,!1,null,null,null);e["default"]=f.exports},cef8:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.item.id?s("div",{staticClass:"card m-panel card9 f-weibo"},[s("div",{staticClass:"card-wrap"},[t.item.title&&t.item.title.text?s("div",{staticClass:"card-title f-card-title"},[s("div",{staticClass:"m-ctrl-box"},[s("div",{staticClass:"m-diy-btn m-box-col m-box-center m-box-center-a"},[t.item.title.icon_url?[t.hidImg?s("img",{attrs:{"data-img":t.item.title.icon_url}}):s("img",{attrs:{src:t.item.title.icon_url}})]:t._e(),t.noveltyScheme?s("a",{directives:[{name:"mvlink",rawName:"v-mvlink",value:t.noveltyScheme,expression:"noveltyScheme"}],domProps:{innerHTML:t._s(t.item.title.text)}}):s("h4",{domProps:{innerHTML:t._s(t.item.title.text)}})],2)])]):t._e(),s("header",{directives:[{name:"mvlink",rawName:"v-mvlink"}],staticClass:"weibo-top m-box"},[t.item.user?s("div",{staticClass:"m-avatar-box m-box-center"},[s("router-link",{staticClass:"m-img-box",attrs:{to:"/profile/"+t.item.user.id}},[t.hidImg?s("img",{attrs:{"data-img":t.item.user.profile_image_url}}):s("img",{attrs:{src:t.item.user.profile_image_url}}),s("weibo-verified",{attrs:{user:t.item.user}})],1)],1):t._e(),s("div",{staticClass:"m-box-dir m-box-col m-box-center"},[t.item.user?s("div",{staticClass:"m-text-box"},[s("router-link",{attrs:{to:"/profile/"+t.item.user.id}},[s("h3",{staticClass:"m-text-cut"},[t._v("\n              "+t._s(t.item.user.screen_name)+"\n              "),t.item.user.remark?s("span",{staticClass:"c-text-remark"},[t._v("("+t._s(t.item.user.remark)+")")]):t._e(),s("weibo-icon",{attrs:{user:t.item.user}})],1)]),s("h4",{staticClass:"m-text-cut"},[s("span",{staticClass:"time"},[t._v(t._s(t._f("fromNow")(t.item.created_at)))]),t.item.source?s("span",{staticClass:"from",domProps:{innerHTML:t._s(" 来自 "+t.item.source)}}):t._e(),t.item.edit_count&&t.item.edit_count>0?s("span",{staticClass:"time"},[t._v("\n              已编辑")]):t._e()])],1):t._e()]),t.followBtn?s("btnFollowUser",{attrs:{btn:t.followBtn},on:{changeSubType:t.follow}}):0+t.item.reads==t.item.reads?s("span",{staticClass:"m-add-box lite-reads",on:{mouseenter:function(e){e.stopPropagation(),e.preventDefault(),t.showAllReadNum=!0},touchstart:function(e){e.stopPropagation(),e.preventDefault(),t.showAllReadNum=!0},mouseleave:function(e){e.stopPropagation(),e.preventDefault(),t.showAllReadNum=!1},touchend:function(e){e.stopPropagation(),e.preventDefault(),t.showAllReadNum=!1},touchcancel:function(e){e.stopPropagation(),e.preventDefault(),t.showAllReadNum=!1}}},[t.showAllReadNum?[s("h4",[t._v(t._s(t.item.reads))])]:[s("h4",[t._v(t._s(t._f("numFormat")(t.item.reads)))]),s("h4",[t._v("阅读")])]],2):t._e()],1)]),s("article",{staticClass:"weibo-main"},[s("div",{staticClass:"card-wrap"},[t.item.report_info?s("div",{staticClass:"m-tips tips-pos",class:{"m-tips-ltyellow":"yellow"===t.tipsColor(t.item.mlevel),"m-tips-ltblue":"blue"===t.tipsColor(t.item.mlevel)},on:{click:function(e){return e.stopPropagation(),t.toTips(t.item.report_info.url)}}},["yellow"===t.tipsColor(t.item.mlevel)?s("img",{staticClass:"tip-icon",attrs:{src:i("3dcc")}}):t._e(),"blue"===t.tipsColor(t.item.mlevel)?s("img",{staticClass:"tip-icon",attrs:{src:i("dd25")}}):t._e(),t._v(t._s(t.item.report_info.text)+"\n      ")]):t._e(),s("div",{staticClass:"weibo-og",on:{click:function(e){return t.getBlogLink(t.item,e)}}},[s("div",{directives:[{name:"ahref",rawName:"v-ahref"}],staticClass:"weibo-text",domProps:{innerHTML:t._s(t.item.text)}}),s("weibo-media",{attrs:{item:t.item,hidImg:t.hidImg}})],1)]),t.item.retweeted_status?s("div",{staticClass:"weibo-rp",on:{click:function(e){return t.getBlogLink(t.item.retweeted_status,e)}}},[s("div",{staticClass:"card-wrap"},[t.item.retweeted_status.report_info?s("div",{staticClass:"m-tips tips-pos",class:{"m-tips-ltyellow":"yellow"===t.tipsColor(t.item.retweeted_status.mlevel),"m-tips-ltblue":"blue"===t.tipsColor(t.item.retweeted_status.mlevel)},on:{click:function(e){return e.stopPropagation(),t.toTips(t.item.retweeted_status.report_info.url)}}},["yellow"===t.tipsColor(t.item.retweeted_status.mlevel)?s("img",{staticClass:"tip-icon",attrs:{src:i("3dcc")}}):t._e(),"blue"===t.tipsColor(t.item.retweeted_status.mlevel)?s("img",{staticClass:"tip-icon",attrs:{src:i("dd25")}}):t._e(),t._v(t._s(t.item.retweeted_status.report_info.text)+"\n        ")]):t._e(),t.item.user?s("div",{staticClass:"weibo-text"},[!t.item.retweeted_status.deleted&&t.item.retweeted_status.user?s("span",[s("router-link",{attrs:{to:"/profile/"+t.item.retweeted_status.user.id}},[t._v("\n              @"+t._s(t.item.retweeted_status.user.screen_name))]),t._v(":\n          ")],1):t._e(),s("span",{directives:[{name:"ahref",rawName:"v-ahref"}],domProps:{innerHTML:t._s(t.item.retweeted_status.text)}})]):t._e(),s("weibo-media",{attrs:{item:t.item.retweeted_status,hidImg:t.hidImg}})],1),t.showRpRCL?s("weiboRCL",{attrs:{item:t.item.retweeted_status}}):t._e()],1):t._e()]),t.showOgRCL?s("weiboRCL",{attrs:{item:t.item,showTriangle:t.showTriangle}}):t._e()],1):t._e()},o=[],a=(i("8e6e"),i("ac6a"),i("cadf"),i("456d"),i("f751"),i("4917"),i("28a5"),i("a481"),i("bd86")),r=i("2f62");function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){Object(a["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var m={data:function(){return{liked:!1,like_counts:0,showAllReadNum:!1}},props:["item","hidImg","showTriangle","showOgRCL","showRpRCL"],computed:c({},Object(r["c"])(["followerInfo"]),{cover:function(){var t=this.item.cardid,e=t.replace(/[^0-9]/gi,"");if(t){if(e>=492&&e<700||e>=730)return{"background-image":"url(//vip.storage.weibo.com/feed_cover/".concat(t,"_mobile_new.png)"),"background-size":"auto 2.5rem","background-position":"90.53% top"};if(e<492||e>=700&&e<=729)return{"background-image":"url(//imgs.t.sinajs.cn/t6/skin/public/feed_cover/".concat(t,"_os7_d6p.png)")}}return""},followBtn:function(){return this.item.buttons&&this.item.buttons.length?this.item.buttons.filter((function(t){return"follow"===t.type}))[0]:null},noveltyScheme:function(){var t=this.item.title;if(t.structs&&t.structs[0]&&t.structs[0].scheme){var e=t.structs[0].scheme;return{scheme:e}}return!1}}),methods:c({},Object(r["b"])(["setCurWeiboData","setFollowerInfo"]),{mapPath:function(t,e){var i=t.split("://");if(i&&i[1]){var s=i[1].substring(i[1].indexOf("/")),o=this.$router.match(s);if(o.matched.length>0){e.preventDefault();var a=o.params||{};o.params.topic&&(a=Object.assign(o.query,{type:"topic",value:o.params.topic})),this.$router.push({path:o.path,params:a,query:o.query})}}},getBlogLink:function(t,e){var i=this,s=window.navigator.userAgent.toLowerCase(),o="sinaweibo://detail?mblogid=".concat(t.id),a="".concat(i.$http.defaults.baseURL,"/detail/").concat(t.id),r=s.indexOf("weibo")>-1?o:a,n=e.target;if((n&&(n.className&&n.className.indexOf("weibo-text")>-1||n.className.indexOf("m-auto-list")>-1||n.className.indexOf("weibo-media-wraps")>-1)||n.parentNode&&n.parentNode.className&&n.nodeName&&"weibo-text"===n.parentNode.className&&"a"!==n.nodeName.toLocaleLowerCase()||"weibo-rp"===n.parentNode.className&&"a"!==n.nodeName.toLocaleLowerCase()||"weibo-og"===n.parentNode.className&&"a"!==n.nodeName.toLocaleLowerCase())&&i.$route.params.id!==t.id&&!t.deleted&&t.user){var c=n;while("weibo-og"!==c.className&&"weibo-rp"!==c.className)c=c.parentNode;c.classList.add("m-active"),setTimeout((function(){c.classList.remove("m-active"),/micromessenger/.test(s)||s.indexOf("qq/")>-1||s.indexOf("qzone")>-1||s.indexOf("weibo")>-1?window.location.href=r:(i.setCurWeiboData(t),i.$router.push({name:"detail",params:{id:t.id}}))}),100)}},follow:function(){this.item.buttons=null,this.setFollowerInfo(this.item.user)},toTips:function(t){t&&(window.location.href=t)},tipsColor:function(t){return 1===t||128===t?"yellow":1024===t?"blue":void 0}}),beforeDestroy:function(){this.followerInfo&&this.setFollowerInfo(null)},components:{weiboVerified:i("21a9").default,weiboIcon:i("a2a3").default,weiboMedia:i("fea8").default,weiboRCL:i("a020").default,btnFollowUser:i("3b25").default}},l=m,u=(i("117b"),i("0c7c")),d=Object(u["a"])(l,s,o,!1,null,null,null);e["default"]=d.exports},dd25:function(t,e,i){t.exports=i.p+"img/tips_warn.29c04275.svg"},e78a:function(t,e,i){},f80c:function(t,e,i){"use strict";var s=i("e78a"),o=i.n(s);o.a},f85a:function(t,e,i){},fea8:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.item.pics?i("div",{staticClass:"weibo-media-wraps weibo-media f-media",class:"media-"+t.type},[t.item.pics.length>0?i("ul",{staticClass:"m-auto-list"},t._l(t.item.pics,(function(e,s){return i("li",{key:s,class:"m-auto-box"+t.cols},[i("div",{staticClass:"m-img-box m-imghold-4-3"},[e.videoSrc?i("span",{staticClass:"feed-mark live-mark"},[i("i",{staticClass:"lite-iconf lite-iconf-live"})]):t.isLongImg(e)||t.isAniImg(e.url)?i("span",{staticClass:"feed-mark"},[t._v(t._s(t.isAniImg(e.url)?"动图":"长图"))]):t._e(),t.hidImg?i("img",{staticClass:"f-bg-img",attrs:{"data-img":e.url},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.thumbnails(e,s,t.item.pics)}}}):i("img",{staticClass:"f-bg-img",attrs:{src:e.url},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.thumbnails(e,s,t.item.pics)}}}),t.item.mblog_vip_type>0&&(s>0&&t.payType()>0||1==t.item.pics.length&&t.payType()>0)?i("span",{staticClass:"pay-icon"},[i("img",{attrs:{src:"https://h5.sinaimg.cn/upload/1087/691/2018/05/04/timeline_card_v.png"}})]):t._e()])])})),0):t._e()]):t.item.page_info?i("div",{staticClass:"weibo-media f-media"},[i("small-page",{attrs:{item:t.item.page_info,hidImg:t.hidImg,vipType:t.item.mblog_vip_type}})],1):t._e(),"detail"===t.$route.name&&t.item.tag_info?i("div",{staticClass:"weibo-media f-media"},[i("small-page",{attrs:{item:t.item.tag_info,vipType:t.item.mblog_vip_type}})],1):t._e()])},o=[],a=(i("6b54"),i("f751"),i("0928")),r=i.n(a),n=i("383a"),c={data:function(){return{}},props:["item","hidImg"],computed:{type:function(){return"b"},cols:function(){return!this.item.pics||1!==this.item.pics.length&&2!==this.item.pics.length&&4!==this.item.pics.length?"3":"2"},styles:function(){var t=150,e=this.item.pics[0].geo.width,i=this.item.pics[0].geo.height;return{singleImg:{width:"".concat(e>t?t/16:e/16,"rem"),height:"".concat(e>t?t*i/e/16:i/16,"rem")}}}},components:{"small-page":i("2e47").default},methods:{isLongImg:function(t){var e=t.geo.width,i=t.geo.height;return i>3*e||i>100&&e>4*i},isAniImg:function(t){var e=new URL(t);return/\.gif$/.test(e.pathname)},thumbnails:function(t,e,i){var s="sinaweibo://detail?mblogid=".concat(this.item.id,"&luicode=20000061");if(this.item.mblog_vip_type>0&&1===this.item.mblog_vip_type)r.a.start({scheme:s});else{var o=t.target||t.srcElement,a=this.formatThumbItem(o,i);n["a"].$emit("mvGallery",e,a)}},formatThumbItem:function(t,e){var i=this.closest(t,(function(t){return t.classList.contains("weibo-media")})),s=e.map((function(t,e){var s={src:t.large.url,w:t.large.geo.width||500,h:t.large.geo.height||500,msrc:t.url,el:i.getElementsByClassName("f-bg-img")[e]};return t.videoSrc&&Object.assign(s,{videoSrc:t.videoSrc}),s}));return s},closest:function(t,e){return t&&(e(t)?t:this.closest(t.parentNode,e))},payType:function(){var t=this.item.mblog_vip_type,e=parseInt(t,10).toString(2).length;return parseInt(t,10).toString(2)[e-1]}}},m=c,l=(i("f80c"),i("0c7c")),u=Object(l["a"])(m,s,o,!1,null,"cf635c06",null);e["default"]=u.exports}}]);
//# sourceMappingURL=collect-main-profile-statusLite.ccb965c7.js.map