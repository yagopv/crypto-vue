webpackJsonp([1],{"1uEl":function(t,e){},H317:function(t,e){},IaV6:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("NYxO"),n=a("ajw3"),i=a("bqTm"),o=a.n(i),c=a("Dd8w"),l=a.n(c),h=a("O4Lo"),u=a.n(h),d=a("ViqS"),p=a.n(d),m=function(t,e){return p()(t).format(e)},v=function(t){return t?t+"%":"0%"},_=function(t){return t.toUpperCase()},f={name:"Header",props:["inputChange","marketInfo"],data:function(){return{navBarCollapsed:!0}},methods:{subIsActive:function(t){var e=this;return(Array.isArray(t)?t:[t]).some(function(t){return 0===e.$route.path.indexOf(t)})},debounceInput:u()(function(t){this.inputChange(t.target.value)},500),toggleNavbar:function(){this.navBarCollapsed=!this.navBarCollapsed}},filters:{format:m,percentage:v}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/tickers"}},[a("b",{staticClass:"text-warning"},[t._v("Crypto-Vue")])]),t._v(" "),a("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:t.toggleNavbar}},[a("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),a("div",{staticClass:"navbar-collapse",class:{collapse:t.navBarCollapsed},attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:t.subIsActive("/tickers")},on:{click:t.toggleNavbar}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/tickers"}},[t._v("\n          Coin list\n        ")])],1),t._v(" "),a("li",{staticClass:"nav-item",class:{active:t.subIsActive("//market-cap-maps")},on:{click:t.toggleNavbar}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/market-cap-maps"}},[t._v("\n          Market Cap Maps\n        ")])],1),t._v(" "),a("li",{staticClass:"nav-item",class:{active:t.subIsActive("/about")},on:{click:t.toggleNavbar}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("\n          About\n        ")])],1)]),t._v(" "),a("transition",{attrs:{name:"slide"}},[t.subIsActive("/tickers")?a("form",{staticClass:"form-inline my-2 my-lg-0"},[a("span",{staticClass:"d-none d-xl-block"},[a("span",{staticClass:"text-light mr-2"},[t._v("Total Market:")]),t._v(" "),a("span",{staticClass:"text-success mr-2"},[t._v("\n            "+t._s(t._f("format")(t.marketInfo.total_market_cap_usd,"$0a"))+"\n          ")]),t._v(" "),a("span",{staticClass:"text-light mr-2"},[t._v("24h Vol:")]),t._v(" "),a("span",{staticClass:"text-success mr-2"},[t._v("\n            "+t._s(t._f("format")(t.marketInfo.total_24h_volume_usd,"$0a"))+"\n          ")]),t._v(" "),a("span",{staticClass:"text-light mr-2"},[t._v("BTC dominance:")]),t._v(" "),a("span",{staticClass:"text-success mr-5"},[t._v("\n            "+t._s(t._f("percentage")(t.marketInfo.bitcoin_percentage_of_market_cap))+"\n          ")])]),t._v(" "),a("input",{staticClass:"form-control mr-sm-2 text-light bg-dark",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},on:{input:t.debounceInput}})]):t._e()])],1)],1)},staticRenderFns:[]};var b=a("VU/8")(f,g,!1,function(t){a("dtqa")},"data-v-6c7cf306",null).exports,k=a("U0v6"),C={name:"Loader",props:["isLoading"],components:{FontAwesomeIcon:a.n(k).a}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return this.isLoading?e("div",{staticClass:"loader-wrapper"},[e("div",{staticClass:"loader"},[e("i",[e("font-awesome-icon",{staticStyle:{color:"#FFF"},attrs:{icon:"sync",size:"2x",spin:""}})],1)])]):this._e()},staticRenderFns:[]};var x=a("VU/8")(C,y,!1,function(t){a("VsTr")},"data-v-7a70589b",null).exports,T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert alert-dismissible fade show text-light",class:"alert-"+t.type+" bg-"+t.type,attrs:{role:"alert"}},[a("strong",[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "+t._s(t.errorMessage)+"\n  "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.dismiss}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},staticRenderFns:[]};var w=a("VU/8")({name:"Alert",props:["title","error","type","dismiss"],computed:{errorMessage:function(){return this.error&&this.error.message?this.error.message:"An error has occurred. Please try again or contact support"}}},T,!1,function(t){a("ofk1")},"data-v-78d7da6f",null).exports,E={name:"app",computed:l()({},Object(r.b)({isLoading:"isLoading",error:"getError",marketInfo:"getMarketInfo"})),created:function(){this.$store.dispatch("getGlobalMarketInfo")},methods:{search:function(t){this.$store.dispatch("searchTickers",t)},dismiss:function(){this.$store.dispatch("setError",null)}},components:{Header:b,Loader:x,Alert:w}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{"input-change":this.search,"market-info":this.marketInfo}}),this._v(" "),this.error?e("alert",{attrs:{title:"Oooops!!",error:this.error,dismiss:this.dismiss,type:"danger"}}):this._e(),this._v(" "),e("div",{attrs:{id:"page"}},[e("transition",{attrs:{name:"fade"}},[e("router-view")],1)],1),this._v(" "),e("Loader",{attrs:{"is-loading":this.isLoading}})],1)},staticRenderFns:[]};var A,S,F,B,D=a("VU/8")(E,I,!1,function(t){a("TTGg")},null,null).exports,$=a("bOdI"),L=a.n($),R=a("Xxa5"),O=a.n(R),U=a("exGp"),V=a.n(U),G=a("hiCB"),H=a.n(G),N=a("fZjL"),M=a.n(N),z="GET_TICKERS_SUCCESS",P="GET_TICKERS_FAILED",j="GET_HISTO_DATA",K="GET_HISTO_DATA_SUCCESS",q="GET_HISTO_DATA_FAILED",Y="GET_GLOBAL_MARKET_DATA",W="GET_GLOBAL_MARKET_DATA_SUCCESS",X="GET_GLOBAL_MARKET_DATA_FAILED",J=a("EXR2"),Q=a.n(J),Z="https://api.coinmarketcap.com/v1",tt="https://min-api.cryptocompare.com",et={MINUTE:"minute",HOUR:"hour",DAY:"day"},at=this,st=(A=V()(O.a.mark(function t(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get(Z+"/ticker/?limit=0",{ttl:300});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,at)})),function(){return A.apply(this,arguments)}),rt=(S=V()(O.a.mark(function t(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get(Z+"/global/",{ttl:3600});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,at)})),function(){return S.apply(this,arguments)}),nt=(F=V()(O.a.mark(function t(){var e;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get(tt+"/data/all/coinlist",{ttl:3600});case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t,at)})),function(){return F.apply(this,arguments)}),it=(B=V()(O.a.mark(function t(e,a){var s;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get(ot(e,a),{ttl:300});case 2:return s=t.sent,t.abrupt("return",s);case 4:case"end":return t.stop()}},t,at)})),function(t,e){return B.apply(this,arguments)});function ot(t,e){switch(e){case et.MINUTE:return tt+"/data/histominute?fsym="+t+"&tsym=USD&e=CCCAGG";case et.HOUR:return tt+"/data/histohour?fsym="+t+"&tsym=USD&e=CCCAGG";default:return tt+"/data/histoday?fsym="+t+"&tsym=USD&e=CCCAGG&allData=true"}}var ct,lt,ht=a("2247"),ut=a.n(ht),dt=a("g7Do"),pt=a.n(dt),mt=a("Ba3q"),vt=a.n(mt),_t=a("LqN4"),ft=a.n(_t),gt=a("RyI1"),bt=a.n(gt),kt={byId:{},global:null,sortKey:{rank:"Number"},sortOrder:"asc",searchValue:""},Ct={getTickersSortBy:function(){var t=M()(kt.sortKey)[0];return"Number"===kt.sortKey[t]?vt()(bt()(ut()(kt.byId,function(t){return t}),function(t){return kt.searchValue&&t.name.toLowerCase().includes(kt.searchValue.toLowerCase())||!kt.searchValue}),function(e){return e[t]?parseFloat(e[t]):0},[kt.sortOrder]):vt()(bt()(ut()(kt.byId,function(t){return t}),function(t){return kt.searchValue&&t.name.toLowerCase().includes(kt.searchValue.toLowerCase())||!kt.searchValue}),[t],[kt.sortOrder])},getTickerById:function(t){return function(e){return t.byId[e]}},getTickers:function(t){return t.byId},getTreemapData:function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H.a;return bt()(t.byId,function(t){var s=parseInt(t.market_cap_usd);return ft()(s,e,a)}).map(function(t,e){return{id:e,name:t.name,value:parseInt(t.market_cap_usd),ticker:t}})}}},yt={getTickers:function(t){var e=this,a=t.commit;return V()(O.a.mark(function t(){var s,r,n,i;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a("GET_TICKERS"),s=st(),r=nt(),t.next=6,s;case 6:return n=t.sent,t.next=9,r;case 9:if("Error"!==(i=t.sent).data.Response){t.next=12;break}throw new Error(i.data.ErrorsSummary);case 12:n.data&&i.data&&i.data.Data&&n.data.forEach(function(t){t.meta=i.data.Data[t.symbol],"MIOTA"===t.symbol&&(t.symbol="IOT",t.meta=i.data.Data.IOT)}),a(z,n.data),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),a(P,t.t0);case 19:case"end":return t.stop()}},t,e,[[0,16]])}))()},getGlobalMarketData:function(t){var e=this;t.commit;return V()(O.a.mark(function t(){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,e)}))()},sortBy:function(t,e){(0,t.commit)("SORT_TICKERS",{key:e.key,type:e.type})},searchTickers:function(t,e){(0,t.commit)("SET_SEARCH",e)}},xt=(ct={},L()(ct,z,function(t,e){t.byId=pt()(e,function(t){return t.id})}),L()(ct,"SORT_TICKERS",function(t,e){var a=e.key,s=e.type;t.sortKey[a]?t.sortOrder="asc"===t.sortOrder?"desc":"asc":(t.sortKey=L()({},a,s),t.sortOrder="asc")}),L()(ct,"SET_SEARCH",function(t,e){t.searchValue=e}),ct),Tt={state:kt,getters:Ct,actions:yt,mutations:xt},wt={state:{bySymbol:{}},getters:{getOhlcAndVolumes:function(t){return function(e){var a=[],s=[],r=t.bySymbol[e]&&t.bySymbol[e].Data;return r&&r.map(function(t){var e=1e3*t.time;a.push([e,t.open,t.close,t.low,t.close]),s.push([e,t.volumeto])}),{ohlc:a,volume:s}}}},actions:{getHistoData:function(t,e){var a=this,s=t.commit,r=t.dispatch,n=(t.state,t.rootState),i=e.id,o=e.interval;return V()(O.a.mark(function t(){var e,c,l;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n.tickers.byId[i]){t.next=4;break}return t.next=4,r("getTickers");case 4:return e=n.tickers.byId[i].symbol,s(j),t.next=8,it(e,o);case 8:if(c=t.sent,"Error"!==(l=c.data).Response){t.next=12;break}throw new Error(l.ErrorsSummary||l.Message);case 12:s(K,{data:l,symbol:e}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),s(q,t.t0);case 18:case"end":return t.stop()}},t,a,[[0,15]])}))()}},mutations:L()({},K,function(t,e){var a=e.data,s=e.symbol;t.bySymbol=l()({},t.bySymbol,L()({},s,a))})},Et={state:{loading:!1,error:null},getters:{isLoading:function(t){return t.loading},getError:function(t){return t.error}},actions:{setLoading:function(t,e){(0,t.commit)("SET_LOADING",e)},setError:function(t,e){(0,t.commit)("SET_ERROR",e)}},mutations:(lt={},L()(lt,"SET_LOADING",function(t,e){t.loading=e}),L()(lt,"SET_ERROR",function(t,e){t.error=e}),L()(lt,"GET_TICKERS",function(t){t.loading=!0,t.error=null}),L()(lt,z,function(t){t.loading=!1,t.error=null}),L()(lt,P,function(t,e){t.loading=!1,t.error=e}),L()(lt,j,function(t){t.loading=!0,t.error=null}),L()(lt,K,function(t,e){e.data,e.symbol;t.loading=!1,t.error=null}),L()(lt,q,function(t,e){t.loading=!1,t.error=e}),L()(lt,Y,function(t){t.loading=!0,t.error=null}),L()(lt,W,function(t,e){e.data,e.symbol;t.loading=!1,t.error=null}),L()(lt,X,function(t,e){t.loading=!1,t.error=e}),lt)},It={state:{marketInfo:{}},getters:{getMarketInfo:function(t){return t.marketInfo}},actions:{getGlobalMarketInfo:function(t){var e=this,a=t.commit;t.dispatch;return V()(O.a.mark(function t(){var s,r;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(Y),t.next=4,rt();case 4:s=t.sent,r=s.data,a(W,r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(X,t.t0);case 12:case"end":return t.stop()}},t,e,[[0,9]])}))()}},mutations:L()({},W,function(t,e){t.marketInfo=e})};a("pFYg");s.a.use(r.a);var At=new r.a.Store({modules:{tickers:Tt,histodata:wt,common:Et,global:It},strict:!1,plugins:[]}),St=a("/ocq"),Ft={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticClass:"pointer d-none d-xl-table-cell",attrs:{scope:"col"}}),t._v(" "),a("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"name",type:"String"})}}},[a("b",{staticClass:"d-lg-none"},[t._v("Coin")]),t._v(" "),a("b",{staticClass:"d-none d-lg-block"},[t._v("Coin name")])]),t._v(" "),a("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"symbol",type:"String"})}}},[a("b",[t._v("Symbol")])]),t._v(" "),a("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"price_usd",type:"Number"})}}},[a("b",[t._v("Price")])]),t._v(" "),a("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"market_cap_usd",type:"Number"})}}},[a("b",{staticClass:"d-lg-none"},[t._v("M.Cap")]),t._v(" "),a("b",{staticClass:"d-none d-lg-block"},[t._v("Market Cap")])]),t._v(" "),a("th",{staticClass:"pointer d-none d-xl-table-cell",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"available_supply",type:"Number"})}}},[a("b",[t._v("Available Supply")])]),t._v(" "),a("th",{staticClass:"pointer d-none d-xl-table-cell",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"total_supply",type:"Number"})}}},[a("b",[t._v("Total supply")])]),t._v(" "),a("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"percent_change_1h",type:"Number"})}}},[a("b",{staticClass:"d-lg-none"},[t._v("1h")]),t._v(" "),a("b",{staticClass:"d-none d-lg-block"},[t._v("Change (1h)")])]),t._v(" "),a("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"percent_change_24h",type:"Number"})}}},[a("b",{staticClass:"d-lg-none"},[t._v("24h")]),t._v(" "),a("b",{staticClass:"d-none d-lg-block"},[t._v("Change (24h)")])]),t._v(" "),a("th",{staticClass:"pointer",attrs:{scope:"col"},on:{click:function(e){t.sortBy({key:"percent_change_7d",type:"Number"})}}},[a("b",{staticClass:"d-lg-none"},[t._v("7d")]),t._v(" "),a("b",{staticClass:"d-none d-lg-block"},[t._v("Change (7d)")])])])},staticRenderFns:[]},Bt=a("VU/8")({props:["sortBy"]},Ft,!1,null,null,null).exports,Dt=function(t){return t>=0?"text-success":"text-danger"},$t=function(t){return t.meta&&t.meta.ImageUrl&&"http://cryptocompare.com"+t.meta.ImageUrl},Lt=function(t){return parseInt(t)>=0?"#28a745":"#dc3545"},Rt={name:"TickerTableRow",props:["ticker","selectTicker"],methods:{colorizePercentChange:Dt,getImageUrl:$t},filters:{format:m,percentage:v,uppercase:_}},Ot={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"pointer",on:{click:function(e){t.selectTicker(t.ticker)}}},[a("th",{staticClass:"d-none d-xl-table-cell",attrs:{scope:"row"}},[a("img",{staticClass:"img-fluid",attrs:{src:t.getImageUrl(t.ticker)}})]),t._v(" "),a("td",[a("b",[t._v("\n      "+t._s(t._f("uppercase")(t.ticker.name))+"\n    ")])]),t._v(" "),a("td",[a("b",{staticClass:"text-warning"},[t._v("\n      "+t._s(t.ticker.symbol)+"\n    ")])]),t._v(" "),a("td",[t._v(t._s(t._f("format")(t.ticker.price_usd,"$0.[000]")))]),t._v(" "),a("td",[t._v(t._s(t._f("format")(t.ticker.market_cap_usd,"$0.[000]a")))]),t._v(" "),a("td",{staticClass:"d-none d-xl-table-cell"},[t._v(t._s(t._f("format")(t.ticker.available_supply,"$0.[000]a")))]),t._v(" "),a("td",{staticClass:"d-none d-xl-table-cell"},[t._v(t._s(t._f("format")(t.ticker.total_supply,"0.[000]a")))]),t._v(" "),a("td",[a("span",{class:t.colorizePercentChange(t.ticker.percent_change_1h)},[t._v("\n      "+t._s(t._f("percentage")(t.ticker.percent_change_1h))+"\n    ")])]),t._v(" "),a("td",[a("span",{class:t.colorizePercentChange(t.ticker.percent_change_24h)},[t._v("\n      "+t._s(t._f("percentage")(t.ticker.percent_change_24h))+"\n    ")])]),t._v(" "),a("td",[a("span",{class:t.colorizePercentChange(t.ticker.percent_change_7d)},[t._v("\n      "+t._s(t._f("percentage")(t.ticker.percent_change_7d))+"\n    ")])])])},staticRenderFns:[]};var Ut=a("VU/8")(Rt,Ot,!1,function(t){a("H317")},"data-v-4c7516fc",null).exports,Vt={data:function(){return{counter:0,scheduledTask:null}},computed:l()({},Object(r.b)({tickers:"getTickersSortBy"})),methods:{selectTicker:function(t){this.$router.push({name:"TickerDetail",params:{id:t.id}})},addCoins:function(){this.counter<=this.tickers.length&&(this.counter+=100)},sortBy:function(t){var e=t.key,a=t.type;this.counter=100,this.$store.dispatch("sortBy",{key:e,type:a})}},created:function(){var t,e,a=this;this.scheduledTask=(e=6e5,(t=function(){return a.$store.dispatch("getTickers")})(),setInterval(function(){t()},e)),this.addCoins()},beforeDestroy:function(){clearInterval(this.scheduledTask)},components:{TickerTableHead:Bt,TickerTableRow:Ut}},Gt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.addCoins,expression:"addCoins"}],staticClass:"container-fluid pl-0 pr-0",attrs:{id:"ticker-table","infinite-scroll-distance":"600","infinite-scroll-throttle-delay":"50","infinite-scroll-immediate-check":"false"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover table-dark"},[a("thead",{staticClass:"thead-dark"},[a("ticker-table-head",{attrs:{"sort-by":t.sortBy}})],1),t._v(" "),a("tbody",t._l(t.tickers.slice(0,t.counter),function(e){return a("ticker-table-row",{key:e.id,attrs:{ticker:e,"select-ticker":t.selectTicker}})}))])])])])])},staticRenderFns:[]};var Ht=a("VU/8")(Vt,Gt,!1,function(t){a("IaV6")},null,null).exports,Nt=a("504h"),Mt=a.n(Nt),zt={series:[{type:"treemap",layoutAlgorithm:"squarified",allowDrillToNode:!0,layoutStartingDirection:"horizontal",turboThreshold:2e3,colorByPoint:!0,cursor:"pointer",levelIsConstant:!1,point:{events:{click:function(t){location.hash="#/ticker/"+t.point.options.ticker.id}}},tooltip:{valueDecimals:0,valuePrefix:"$",pointFormatter:function(t){console.log(this);var e=this.options.ticker;return'\n              <p style="font-weight: bold;font-size:1.05rem;">'+e.name+"</p><br/>\n              <p>Market Cap: "+m(e.market_cap_usd,"$0a")+'</p><br/>\n              <p>% Change 1h: <span style="color: '+Lt(e.percent_change_1h)+'">'+v(e.percent_change_1h)+'</span></p><br/>\n              <p>% Change 24h: <span style="color: '+Lt(e.percent_change_24h)+'">'+v(e.percent_change_24h)+'</span></p><br/>\n              <p>% Change 7d: <span style="color: '+Lt(e.percent_change_7d)+'">'+v(e.percent_change_7d)+"</span></p><br/>\n          "}},levels:[{level:1,dataLabels:{enabled:!0,color:"#FFF",font:'bold 26px "Open Sans", sans-serif'},borderWidth:3}],data:[]}],title:{text:""},chart:{height:900}},Pt={rangeSelector:{selected:1},title:{text:""},exporting:{enabled:!0},yAxis:[{labels:{align:"right",x:-3},title:{text:"OHLC"},height:"60%",lineWidth:2,resize:{enabled:!0}},{labels:{align:"right",x:-3},title:{text:"Volume"},top:"65%",height:"35%",offset:0,lineWidth:2}],tooltip:{split:!0},chart:{height:document.documentElement.clientHeight-100},plotOptions:{candlestick:{color:"#dc3545",upColor:"#28a745"}},series:[{type:"candlestick",name:"",data:[],tooltip:{valueDecimals:2,valuePrefix:"$"}},{type:"column",name:"Volume",data:[],yAxis:1}]},jt={props:["tickers","height"],data:function(){return{options:zt}},watch:{tickers:function(t){this.updateTree(t)}},methods:{updateTree:function(t){this.$refs.highcharts.chart.update({series:[{animationLimit:this.tickers.length,data:this.tickers}],chart:{height:this.height}},!0)}},mounted:function(){this.updateTree(this.tickers)}},Kt={render:function(){var t=this.$createElement;return(this._self._c||t)("highcharts",{ref:"highcharts",attrs:{options:this.options}})},staticRenderFns:[]},qt=a("VU/8")(jt,Kt,!1,null,null,null).exports,Yt={name:"TickerTreemap",data:function(){return{selectedTreemap:0,min:1e9,max:void 0,height:900}},computed:l()({},Object(r.b)({treemapData:"getTreemapData"})),methods:{update:function(t){switch(this.selectedTreemap=t,t){case 0:this.min=1e9,this.max=void 0,this.height=900;break;case 1:this.min=1e8,this.max=1e9,this.height=1200;break;case 2:this.min=1e6,this.max=1e8,this.height=2e3;break;case 3:this.min=void 0,this.max=1e6,this.height=2e3}}},created:function(){this.update(0),this.$store.dispatch("getTickers")},components:{Treemap:qt}},Wt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"treemaps"}},[a("div",{staticClass:"row mb-2 mt-5"},[a("div",{staticClass:"col"},[a("ul",{staticClass:"nav nav-pills justify-content-center"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link text-light",class:{active:0===t.selectedTreemap},attrs:{href:"#"},on:{click:function(e){t.update(0)}}},[t._v("\n              Above the billion\n          ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link text-light",class:{active:1===t.selectedTreemap},attrs:{href:"#"},on:{click:function(e){t.update(1)}}},[t._v("\n              100 million to 1 billion\n          ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link text-light",class:{active:2===t.selectedTreemap},attrs:{href:"#"},on:{click:function(e){t.update(2)}}},[t._v("\n              1 million to 100 million\n          ")])]),t._v(" "),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link text-light",class:{active:3===t.selectedTreemap},attrs:{href:"#"},on:{click:function(e){t.update(3)}}},[t._v("\n              Under 1 million\n          ")])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col pl-0 pr-0"},[a("treemap",{attrs:{tickers:t.treemapData(t.min,t.max),height:t.height}})],1)])])},staticRenderFns:[]};var Xt=a("VU/8")(Yt,Wt,!1,function(t){a("qSxU")},"data-v-d7cf3e12",null).exports,Jt={props:["ticker","ohlcData"],data:function(){return{options:Pt}},watch:{ohlcData:function(t){this.updateCandlestick(t)}},methods:{updateCandlestick:function(t){this.$refs.highstocks.chart.update({series:[{name:this.ticker.symbol,data:t.ohlc},{type:"column",name:"Volume",data:t.volume,yAxis:1}]},!0)},setChartHeight:function(t){this.$refs.highstocks.chart.setSize(null,document.documentElement.clientHeight-100)}},mounted:function(){this.updateCandlestick(this.ohlcData),this.$nextTick(function(){window.addEventListener("resize",this.setChartHeight),this.setChartHeight()})},beforeDestroy:function(){window.removeEventListener("resize",this.setChartHeight)}},Qt={render:function(){var t=this.$createElement;return(this._self._c||t)("highstock",{ref:"highstocks",attrs:{options:this.options}})},staticRenderFns:[]},Zt=a("VU/8")(Jt,Qt,!1,null,null,null).exports,te={name:"CoinInfo",props:["ticker"],methods:{colorizePercentChange:Dt,getImageUrl:$t},filters:{format:m,percentage:v,uppercase:_}},ee={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-dark"},[e("tbody",[e("tr",{staticClass:"pointer"},[e("td",{staticClass:"d-none d-xl-table-cell"},[e("img",{staticClass:"img-fluid",attrs:{src:this.getImageUrl(this.ticker)}})]),this._v(" "),e("td",[e("b",[this._v("\n            "+this._s(this._f("uppercase")(this.ticker.name))+"\n          ")])]),this._v(" "),e("td",[e("b",{staticClass:"text-warning"},[this._v("\n            "+this._s(this.ticker.symbol)+"\n          ")])]),this._v(" "),e("td",{staticClass:"text-center"},[this._m(0),this._v("\n          "+this._s(this._f("format")(this.ticker.price_usd,"$0.[000]"))+"\n        ")]),this._v(" "),e("td",{staticClass:"text-center d-none d-lg-inline-block"},[this._m(1),this._v(" "),e("span",{class:this.colorizePercentChange(this.ticker.percent_change_1h)},[this._v("\n            "+this._s(this._f("percentage")(this.ticker.percent_change_1h))+"\n          ")])]),this._v(" "),e("td",{staticClass:"text-center"},[this._m(2),this._v(" "),e("span",{class:this.colorizePercentChange(this.ticker.percent_change_24h)},[this._v("\n            "+this._s(this._f("percentage")(this.ticker.percent_change_24h))+"\n          ")])]),this._v(" "),e("td",{staticClass:"text-center"},[this._m(3),this._v(" "),e("span",{class:this.colorizePercentChange(this.ticker.percent_change_7d)},[this._v("\n            "+this._s(this._f("percentage")(this.ticker.percent_change_7d))+"\n          ")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("span",{staticClass:"d-none d-lg-inline"},[this._v("Current")]),this._v(" price: ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("span",{staticClass:"d-none d-lg-inline"},[this._v("% Change")]),this._v(" 1h: ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("span",{staticClass:"d-none d-lg-inline"},[this._v("% Change")]),this._v(" 24h: ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("b",[e("span",{staticClass:"d-none d-lg-inline"},[this._v("% Change")]),this._v(" 7d: ")])}]};var ae=a("VU/8")(te,ee,!1,function(t){a("zYLS")},"data-v-11362d2c",null).exports,se={name:"TickerDetail",computed:l()({},Object(r.b)({tickers:"tickers"}),{ticker:function(){return this.$store.getters.getTickerById(this.$route.params.id)},ohlcAndVolume:function(){var t=this.$store.getters.getTickerById(this.$route.params.id);return t?this.$store.getters.getOhlcAndVolumes(t.symbol):{ohlc:[],volume:[]}}}),created:function(){var t=this.$route.query.interval||et.DAY;this.$store.dispatch("getHistoData",{id:this.$route.params.id,interval:t})},components:{Candlestick:Zt,CoinInfo:ae}},re={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid",attrs:{id:"ticker-detail"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col pl-0 pr-0"},[this.ticker?e("coin-info",{attrs:{ticker:this.ticker}}):this._e()],1)]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col pl-0 pr-0"},[this.ohlcAndVolume.ohlc.length?e("div",[e("candlestick",{attrs:{ticker:this.ticker,ohlcData:this.ohlcAndVolume}})],1):this._e()])])])},staticRenderFns:[]},ne=a("VU/8")(se,re,!1,null,null,null).exports,ie={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"jumbotron jumbotron-fluid"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-2"},[this._v("Crypto Vue")]),this._v(" "),e("p",{staticClass:"lead"},[this._v("Get all the info you need about your favourite cryptocurrency.")])])]),this._v(" "),e("div",{staticClass:"container text-light"},[e("h1",[this._v("Main Features")]),this._v(" "),e("hr",{staticClass:"border border-light"}),this._v(" "),e("p",[this._v("This site shows information about cryptocurrencies using public APIs from:")]),this._v(" "),e("dl",{staticClass:"row"},[e("dt",{staticClass:"col-sm-2"},[this._v("Coinmarketcap")]),this._v(" "),e("dd",{staticClass:"col-sm-10"},[e("a",{staticClass:"text-warning",attrs:{href:"https://coinmarketcap.com/es/api/",target:"_blank"}},[this._v("https://coinmarketcap.com/es/api/")])]),this._v(" "),e("dt",{staticClass:"col-sm-2"},[this._v("Cryptocompare")]),this._v(" "),e("dd",{staticClass:"col-sm-10"},[e("a",{staticClass:"text-warning",attrs:{href:"https://www.cryptocompare.com/api/",target:"_blank"}},[this._v("https://www.cryptocompare.com/api/")])])]),this._v(" "),e("p",[this._v("There are 3 main sections:")]),this._v(" "),e("h4",{staticClass:"mt-3 mb-3"},[e("a",{staticClass:"text-warning",attrs:{href:"#/tickers"}},[this._v("Coin list")])]),this._v(" "),e("p",[this._v("In this table we can take a look to all the cryptocurrencies in the market retrieved from Coinmarketcap.")]),this._v(" "),e("p",[this._v("If you press in the table headers you can order the columns.")]),this._v(" "),e("p",[this._v("There is a search field in the navigation bar in order to search for coins in the table.")]),this._v(" "),e("p",[this._v("Press on a table row to go to the coin details.")]),this._v(" "),e("p",[this._v("In the navbar you can see current global market cap, change in the last 24h and the percentage of Bitcoin dominance. ")]),this._v(" "),e("h4",{staticClass:"mt-3 mb-3"},[e("a",{staticClass:"text-warning",attrs:{href:"#/market-cap-maps"}},[this._v("Maps")])]),this._v(" "),e("p",[this._v("In this page you can take a look to the coins in a fancy way using a Treemap for data visualization.")]),this._v(" "),e("p",[this._v("You can filter by several grouped market caps.")]),this._v(" "),e("p",[this._v("If you hover on the map points then you can see more info about the coin.")]),this._v(" "),e("p",[this._v("Press on a point to go to the coin details.")]),this._v(" "),e("h4",{staticClass:"mt-3 mb-3"},[e("a",{staticClass:"text-warning",attrs:{href:"#/ticker/ethereum"}},[this._v("Coin details")])]),this._v(" "),e("p",[this._v("In the coin detail section you can see a candlestick and volume chart showing all the historical data for the coin.")]),this._v(" "),e("p",[this._v("You can zoom the table using date intervals or group candles in periods. You can as well print or download an image of the chart.")]),this._v(" "),e("p",[this._v("Each candle is a day. There are another implementations using a candle per hour or per minute in order to achieve different types of visualizations.\n      You can access to this graphs adding a querystring to the url. For example "),e("a",{staticClass:"text-warning",attrs:{href:"#/ticker/ethereum?interval=minute"}},[this._v("/ticker/ethereum?interval=minute")]),this._v(".\n      You can use as intervals 'day', 'hour' or 'minute'.\n      I would like to implement a way to change between datasets reusing the chart but is not done because I couldn't get rid of a bug with the old data candles ovelapping with new ones when changig datasets, so I remove the feature.\n    ")]),this._v(" "),e("h1",{staticClass:"mt-3"},[this._v("Roadmap? ...")]),this._v(" "),e("hr",{staticClass:"border border-light"}),this._v(" "),e("p",[this._v("There are several things I would like to improve")]),this._v(" "),e("ul",[e("li",[this._v("Make ticker table fixed header and with fixed column width while maintaining the responsive behavior.")]),this._v(" "),e("li",[this._v("Allow changing in the UI between the day, hour and minute graphs. Important for intraday users.")]),this._v(" "),e("li",[this._v("Add realtime to candlestick graphs.")]),this._v(" "),e("li",[this._v("Add more data to coin details. The Cryptocompare API can return lot of useful data.")]),this._v(" "),e("li",[this._v("Improve responsive. Focus on mobile.")]),this._v(" "),e("li",[this._v("Improve global error and notifications management.")]),this._v(" "),e("li",[this._v("Add a beautiful sticky footer")]),this._v(" "),e("li",[this._v("Nice thing to have would be i18n")])])])])}]};var oe=a("VU/8")({name:"About"},ie,!1,function(t){a("1uEl")},"data-v-7aef2c70",null).exports,ce={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"jumbotron jumbotron-fluid"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"display-2"},[this._v("404")]),this._v(" "),e("p",{staticClass:"display-4"},[this._v("Page not found.")]),this._v(" "),e("p",{staticClass:"lead mt-5"},[this._v("The resource you are trying to access does not exist.")])])])}]},le=a("VU/8")({name:"NotFound"},ce,!1,null,null,null).exports;s.a.use(St.a);var he=new St.a({routes:[{path:"/",redirect:"/tickers"},{path:"/tickers",name:"Tickers",component:Ht,meta:{title:"Coin List"}},{path:"/ticker/:id",name:"TickerDetail",component:ne,meta:{title:"Ticker Detail"}},{path:"/market-cap-maps",component:Xt,meta:{title:"Market Capitalization Maps"}},{path:"/about",name:"About",component:oe,meta:{title:"About"}},{path:"*",name:"NotFound",component:le,meta:{title:"Page not found"}}],scrollBehavior:function(t,e,a){return{x:0,y:0}}});he.beforeEach(function(t,e,a){document.title=t.meta.title,a()});var ue=he,de=a("U5Gd"),pe=a.n(de),me=a("7mh/"),ve=a.n(me),_e=a("VVDx"),fe=a.n(_e),ge=a("WOHC"),be=a.n(ge),ke=a("QxPg"),Ce=a("1P+R");be()(Mt.a),pe()(Mt.a),ve()(Mt.a),fe()(Mt.a),Mt.a.theme={colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#343a40"],[1,"#343a40"]]},style:{Family:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},plotBorderColor:"#606063"},title:{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#B0B0B3"},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"}},credits:{style:{color:"#666"}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"},legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"#505053",dataLabelsColor:"#B0B0B3",textColor:"#C0C0C0",contrastTextColor:"#F0F0F3",maskColor:"rgba(255,255,255,0.3)"},Mt.a.setOptions(Mt.a.theme),ke.default.library.add(Ce.b,Ce.a,Ce.c),s.a.config.productionTip=!1,s.a.use(r.a),s.a.use(n.a,{Highcharts:Mt.a}),s.a.use(o.a),new s.a({el:"#app",router:ue,store:At,template:"<App/>",components:{App:D}})},TTGg:function(t,e){},VsTr:function(t,e){},dtqa:function(t,e){},ofk1:function(t,e){},qSxU:function(t,e){},zYLS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.75c7d48289395a64e996.js.map