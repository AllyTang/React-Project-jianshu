(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(n,e,t){"use strict";var r={};t.r(r),t.d(r,"addDetail",function(){return l});var o=t(5),a=(t(56),Object(o.fromJS)({title:"",content:""})),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"detail/changeDetail":return n.merge({title:e.title,content:e.content});default:return n}},c=t(18),u=t.n(c),l=function(n){return function(e){u.a.get("/api/detail.json?id="+n).then(function(n){var t,r,o=n.data.data;e((t=o.title,r=o.content,{type:"detail/changeDetail",title:t,content:r}))})}};t.d(e,"b",function(){return i}),t.d(e,"a",function(){return r})},45:function(n,e){n.exports="data:image/png;base64,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"},56:function(n,e,t){"use strict";t.d(e,"b",function(){return u}),t.d(e,"c",function(){return l}),t.d(e,"a",function(){return s});var r=t(1),o=t(2);function a(){var n=Object(r.a)(["\n    color:#2f2f2f;\n    img{\n        width:100%\n    }\n    p{\n        margin:25px 0;\n        font-size:16px;\n        line-height:1.7;\n        font-weight:400;\n    }\n    b{\n        font-weight:bold;\n    }\n"]);return a=function(){return n},n}function i(){var n=Object(r.a)(["\n    margin:50px 0 20px 0;\n    font-size:34px;\n    line-height:1.3;\n    color:#333;\n    font-weight:700;\n    \n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n    width:620px;\n    overflow:hidden;\n    margin:0 auto;\n    padding-bottom:100px;\n"]);return c=function(){return n},n}var u=o.b.div(c()),l=o.b.div(i()),s=o.b.div(a())},58:function(n,e,t){n.exports=t(90)},90:function(n,e,t){"use strict";t.r(e);var r={};t.r(r),t.d(r,"searchFocus",function(){return O}),t.d(r,"searchBlur",function(){return j}),t.d(r,"mouseEnter",function(){return w}),t.d(r,"mouseLeave",function(){return L}),t.d(r,"changePage",function(){return k}),t.d(r,"getList",function(){return y});var o={};t.r(o),t.d(o,"login",function(){return C}),t.d(o,"logout",function(){return S});var a={};t.r(a),t.d(a,"getHomeInfo",function(){return _n}),t.d(a,"getMoreList",function(){return $n}),t.d(a,"toggleTopShow",function(){return ne});var i=t(0),c=t.n(i),u=t(22),l=t.n(u),s=t(4),f=t(17),d=t(20),p=t(8),g=t(9),b=t(11),h=t(10),m=t(12),x=t(5),v=Object(x.fromJS)({focused:!1,list:[],page:1,totalPage:1,mouseIn:!1}),A=t(18),E=t.n(A),O=function(){return{type:"header/SEARCH_FOCUS"}},j=function(){return{type:"header/SEARCH_BLUR"}},w=function(){return{type:"header/MOUSE_ENTER"}},L=function(){return{type:"header/MOUSE_LEAVE"}},k=function(n){return{type:"header/CHANGE_PAGE",page:n}},y=function(){return function(n){E.a.get("/api/headerList.json").then(function(e){var t=e.data;n(function(n){return{type:"header/CHANGE_LIST",data:Object(x.fromJS)(n),totalPage:Math.ceil(n.length/6)}}(t.data))}).catch(function(){console.log("error")})}},I=Object(x.fromJS)({login:!1}),C=function(n,e){return function(t){E.a.get("/api/login.json?account="+n+"&password="+e).then(function(n){n.data.data?t({type:"login/CHANGE_LOGIN",value:!0}):alert("failed")})}},S=function(){return{type:"login/LOGOUT",value:!1}},F=t(92),N=t(1),G=t(2),z=t(45),q=t.n(z);function U(){var n=Object(N.a)(["\n    float:left;\n     position:relative;\n    \n    .zoom{\n    position:absolute;\n    right:5px;\n    bottom:5px;\n    width:30px;\n    line-height:30px;\n    text-align:center;\n    border-radius:15px;\n    &.focused{\n        background:#777;\n        color:#fff;\n    }\n    }\n    \n    \n    \n"]);return U=function(){return n},n}function M(){var n=Object(N.a)(["\n   float:right;\n    line-height:38px;\n    margin-top:9px;\n    margin-right:20px;\n    border:1px solid #ea6f5a;\n    border-radius:19px;\n    padding:0 20px;\n    font-size:15px;\n    &.reg{\n    color:#ea6f5a;\n    }\n    &.writing{\n    background:#ea6f5a;\n    color:#fff;\n    }\n    \n    \n"]);return M=function(){return n},n}function R(){var n=Object(N.a)(["\n    position:absolute;\n    right:0;\n    top:0;\n    height:56px;\n    margin-right:100px;\n\n    \n    \n"]);return R=function(){return n},n}function T(){var n=Object(N.a)(["\n     display:inline-block;\n    margin-right:10px;\n    margin-bottom:10px;\n    float:left;\n    font-size:13px;\n    font-family:'arial';\n    color:#787878;\n    line-height:20px;\n    padding:0 5px;\n    border: 1px solid #ddd;\n    border-radius:3px;\n\n"]);return T=function(){return n},n}function H(){var n=Object(N.a)(["\n    float:right;\n    font-size:13px;\n    cursor:pointer;\n    .spin{\n        display:block;\n        float:left;\n        font-size:12px;\n        margin-right:2px;\n        transition:all .2s ease-in;\n        transform-origin:center center;\n    }\n\n"]);return H=function(){return n},n}function P(){var n=Object(N.a)(["\n    overflow:hidden;\n    padding:0 15px 20px 15px;\n\n"]);return P=function(){return n},n}function D(){var n=Object(N.a)(["\n     margin-top:20px;\n    margin-bottom:15px;\n    line-height:20px;\n    font-size:14px;\n    color:#969696;\n\n"]);return D=function(){return n},n}function B(){var n=Object(N.a)(["\n    position:absolute;\n    left:0;\n    top:56px;\n    width:240px;\n    padding:0 20px;\n    box-shadow: 0 0 8px rgba(0,0,0,.2);\n    background:#fff;\n    border-radius:4px;\n"]);return B=function(){return n},n}function W(){var n=Object(N.a)(["\n    width:160px;\n    height:38px;\n    font-size:14px;\n    margin-top:9px;\n    padding:0 40px 0 20px;\n    border:1px solid #eee;\n    outline:none;\n    border-radius:19px;\n    background:#eee;\n    color:#666;\n    &::placeholder{\n    color:#999;\n    }\n    &.focused{\n    width:240px\n    }\n     &.slide-enter{\n        transition:all .2s ease-out;\n     }\n     &.slide-enter-active{\n        width:240px;\n     }\n     &.slide-exit{\n        transition:all .2s ease-out;\n     }\n     &.slide-exit-active{\n        width:160px;\n     }\n    \n    \n"]);return W=function(){return n},n}function Z(){var n=Object(N.a)(["\n    line-height:56px;\n    font-size:17px;\n    padding:0 15px;\n    color:#333;\n    &.left{\n    float:left;\n    }\n    &.right{\n    float:right;\n    color:#969696;\n    }\n    &.active{\n    color:#ea6f5a;     \n    \n"]);return Z=function(){return n},n}function V(){var n=Object(N.a)(["\n    width:960px;\n    height:100%;\n    margin:0 auto;\n    \n    \n    \n"]);return V=function(){return n},n}function J(){var n=Object(N.a)(["\n    position:absolute;\n    top:0;\n    left:0;\n    display:inline-block;\n    width:100px;\n    height:56px;\n    margin-left:50px;\n    background:url(",");\n    background-size:contain;\n    \n"]);return J=function(){return n},n}function Q(){var n=Object(N.a)(["\n    z-index:1;\n    position:relative;\n    height:58px;\n    border-bottom:1px solid #f0f0f0;\n\n"]);return Q=function(){return n},n}var X=G.b.div(Q()),Y=G.b.div(J(),q.a),K=G.b.div(V()),_=G.b.div(Z()),$=G.b.input.attrs({placeholder:"search"})(W()),nn=G.b.div(B()),en=G.b.div(D()),tn=G.b.div(P()),rn=G.b.span(H()),on=G.b.a(T()),an=G.b.div(R()),cn=G.b.div(M()),un=G.b.div(U()),ln=function(n){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(g.a)(e,[{key:"getListArea",value:function(){var n=this,e=this.props,t=e.focused,r=e.list,o=e.page,a=e.mouseIn,i=e.totalPage,u=e.handleMouseEnter,l=e.handleMouseLeave,s=e.handleChangePage,f=[],d=r.toJS();if(d.length)for(var p=6*(o-1);p<6*o;p++)f.push(c.a.createElement(on,{key:d[p]},d[p]));return t||a?c.a.createElement(nn,{onMouseEnter:u,onMouseLeave:l},c.a.createElement(en,null,"Top Search",c.a.createElement(rn,{onClick:function(){return s(o,i,n.spinIcon)}},c.a.createElement("i",{ref:function(e){n.spinIcon=e},className:"iconfont spin"},"\ue851"),"Change")),c.a.createElement(tn,null,f)):null}},{key:"render",value:function(){var n=this.props,e=n.focused,t=n.handleInputFocus,r=n.handleInputBlur,o=n.list,a=n.login,i=n.logout;return c.a.createElement(X,null,c.a.createElement(f.b,{to:"/"},c.a.createElement(Y,null)),c.a.createElement(K,null,c.a.createElement(_,{className:"left active"},"HOME"),c.a.createElement(_,{className:"left"},"Download"),a?c.a.createElement(_,{onClick:i,className:"right"},"Log Out"):c.a.createElement(f.b,{to:"/login"},c.a.createElement(_,{className:"right"},"Log In")),c.a.createElement(_,{className:"right"},c.a.createElement("i",{className:"iconfont"},"\ue636")),c.a.createElement(un,null,c.a.createElement(F.a,{in:e,timeout:200,classNames:"slide"},c.a.createElement($,{className:e?"focused":"",onFocus:function(){return t(o)},onBlur:r})),c.a.createElement("i",{className:e?"focused iconfont zoom":"iconfont zoom"},"\ue614"),this.getListArea())),c.a.createElement(an,null,c.a.createElement(f.b,{to:"/write"},c.a.createElement(cn,{className:"writing"},c.a.createElement("i",{className:"iconfont"},"\ue615"),"Writing")),c.a.createElement(cn,{className:"reg"},"Sign Up")))}}]),e}(i.Component),sn=Object(s.b)(function(n){return{focused:n.getIn(["header","focused"]),list:n.getIn(["header","list"]),page:n.getIn(["header","page"]),mouseIn:n.getIn(["header","mouseIn"]),totalPage:n.getIn(["header","totalPage"]),login:n.getIn(["login","login"])}},function(n){return{handleInputFocus:function(e){0===e.size&&n(r.getList()),n(r.searchFocus())},handleInputBlur:function(){n(r.searchBlur())},handleMouseEnter:function(){n(r.mouseEnter())},handleMouseLeave:function(){n(r.mouseLeave())},handleChangePage:function(e,t,o){var a=o.style.transform.replace(/[^0-9]/gi,"");a=a?parseInt(a,10):0,o.style.transform="rotate("+(a+360)+"deg)",n(e<t?r.changePage(e+1):r.changePage(1))},logout:function(){n(o.logout())}}})(ln);function fn(){var n=Object(N.a)(["\n    position:fixed;\n    right:100px;\n    bottom:100px;\n    width:60px;\n    height;60px;\n    line-height:60px;\n    text-align:center;\n    border:1px solid #ccc;\n    font-size:14px;\n    \n"]);return fn=function(){return n},n}function dn(){var n=Object(N.a)(["\n    width:100%;\n    height:40px;\n    margin:30px 0;\n    line-height:40px;\n    text-align:center;\n    background:#a5a5a5;\n    border-radius:20px;\n    color:#fff;\n    cursor:pointer;\n    \n\n"]);return dn=function(){return n},n}function pn(){var n=Object(N.a)(["\n    position:absolute;\n    left:0;\n    width:278px;\n    height:34px;\n    font-size:13px;\n    padding:7px 7px 7px 12px;\n    color:#787878;\n    background:#f7f7f7;\n    border:1px solid #dcdcdc;\n    border-radius:4px;\n    text-align:center;\n    box-sizing:border-box;\n    cursor:pointer;\n    text-decoration:none;\n    \n"]);return pn=function(){return n},n}function gn(){var n=Object(N.a)(["\n    display:block;\n    float:right;\n    color:#42c02e;\n    font-size:14px;\n    margin-top:5px;\n    cursor:pointer;\n\n"]);return gn=function(){return n},n}function bn(){var n=Object(N.a)(["\n    float:left;\n    margin-left:15px;\n    .title{\n        display:block;\n        font-size:14px;\n        padding-top:10px;\n        color:#333;\n        cursor:pointer;\n        text-decoration:none;\n    }\n    .desc{\n        margin-top:5px;\n        font-size:12px;\n        color:#969696;\n\n"]);return bn=function(){return n},n}function hn(){var n=Object(N.a)(["\n    overflow:hidden;\n    margin:0 0 15px;\n    .pic{\n        display:block;\n        float:left;\n        width:48px;\n        height:48px;\n        \n    }\n\n"]);return hn=function(){return n},n}function mn(){var n=Object(N.a)(["\n    float:right;\n    font-size:14px;\n    cursor:pointer;\n\n"]);return mn=function(){return n},n}function xn(){var n=Object(N.a)(["\n    margin-top:20px;\n    margin-bottom:15px;\n    line-height:20px;\n    font-size:14px;\n    color:#969696;\n\n"]);return xn=function(){return n},n}function vn(){var n=Object(N.a)(["\n    width:280px;\n    height:300px;\n    margin:0 0 20px;\n    position:relative;\n\n"]);return vn=function(){return n},n}function An(){var n=Object(N.a)(["\n    width:280px;\n    height:50px;\n    background:url(",");\n    background-size:contain;\n    margin-bottom:6px;\n"]);return An=function(){return n},n}function En(){var n=Object(N.a)(["\n    margin:26px 0;\n    width:280px;\n\n\n"]);return En=function(){return n},n}function On(){var n=Object(N.a)(["\n    width:500px;\n    float:left;\n    .title{\n        line-height:27px;\n        font-size:18px;\n        font-weight:bold;\n        color:#333;\n    }\n    .desc{\n    font-size:13px;\n    line-height:24px;\n    color:#999;\n\n"]);return On=function(){return n},n}function jn(){var n=Object(N.a)(["\n    overflow:hidden;\n    padding:20px 0;\n    border-bottom:1px solid #dcdcdc;\n    .pic{\n        display:block;\n        width:125px;\n        height:100px;\n        float:right;\n        border-radius:10px;\n        }\n\n\n"]);return jn=function(){return n},n}function wn(){var n=Object(N.a)(["\n    float:left;\n    margin-left:18px;\n    margin-bottom:18px;\n    background:#f7f7f7;\n    height:32px;\n    line-height:32px;\n    font-size:14px;\n    color:#000;\n    border:1px solid #dcdcdc;\n    border-radius:4px;\n    padding-right:10px;\n    .topic-pic{\n    display:block;\n    float:left;\n    width:32px;\n    height:32px;\n    margin-right:10px;\n    }\n"]);return wn=function(){return n},n}function Ln(){var n=Object(N.a)(["\n    padding:20px 0 10px 0;\n    overflow:hidden;\n    margin-left:-18px;\n    border-bottom:1px solid #dcdcdc;\n    \n"]);return Ln=function(){return n},n}function kn(){var n=Object(N.a)(["\n    float:right;\n    width:280px;\n    \n"]);return kn=function(){return n},n}function yn(){var n=Object(N.a)(["\n    float:left;\n    width:625px;\n    margin-left:15px;\n    padding-top:30px;\n    .banner-img{\n    width:625px;\n    height:270px;\n    }\n"]);return yn=function(){return n},n}function In(){var n=Object(N.a)(["\n    width:960px;\n    overflow:hidden;\n    margin:0 auto;\n"]);return In=function(){return n},n}var Cn=G.b.div(In()),Sn=G.b.div(yn()),Fn=G.b.div(kn()),Nn=G.b.div(Ln()),Gn=G.b.div(wn()),zn=G.b.div(jn()),qn=G.b.div(On()),Un=G.b.div(En()),Mn=G.b.div(An(),function(n){return n.imgUrl}),Rn=G.b.div(vn()),Tn=G.b.div(xn()),Hn=G.b.span(mn()),Pn=G.b.div(hn()),Dn=G.b.div(bn()),Bn=G.b.a(gn()),Wn=G.b.a(pn()),Zn=G.b.div(dn()),Vn=G.b.div(fn()),Jn=function(n){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(g.a)(e,[{key:"render",value:function(){var n=this.props.list;return c.a.createElement(Nn,null,n.map(function(n){return c.a.createElement(Gn,{key:n.get("id")},c.a.createElement("img",{className:"topic-pic",src:n.get("imgUrl"),alt:""}),n.get("title"))}))}}]),e}(i.PureComponent),Qn=Object(s.b)(function(n){return{list:n.getIn(["home","topicList"])}},null)(Jn),Xn=function(n){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(g.a)(e,[{key:"render",value:function(){var n=this.props.list;return c.a.createElement(Un,null,n.map(function(n){return c.a.createElement(Mn,{key:n.get("id"),imgUrl:n.get("imgUrl")})}))}}]),e}(i.PureComponent),Yn=Object(s.b)(function(n){return{list:n.getIn(["home","recommendList"])}},null)(Xn),Kn=Object(x.fromJS)({topicList:[],articleList:[],recommendList:[],writerList:[],articlePage:1,showScroll:!1}),_n=function(){return function(n){E.a.get("/api/home.json").then(function(e){var t=e.data.data;n(function(n){return{type:"home/CHANGE_HOME_DATA",topicList:n.topicList,articleList:n.articleList,recommendList:n.recommendList,writerList:n.writerList}}(t))})}},$n=function(n){return function(e){E.a.get("/api/homeList.json?page"+n).then(function(t){var r,o,a=t.data.data;e((r=a,o=n+1,{type:"home/ADD_ARTICLE_LIST",list:Object(x.fromJS)(r),nextPage:o}))})}},ne=function(n){return{type:"home/TOGGLE_SCROLL_TOP",show:n}},ee=function(n){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(g.a)(e,[{key:"render",value:function(){var n=this.props,e=n.list,t=n.getMoreList,r=n.page;return c.a.createElement("div",null,e.map(function(n,e){return c.a.createElement(f.b,{key:e,to:"/detail/"+n.get("id")},c.a.createElement(zn,null,c.a.createElement("img",{className:"pic",src:n.get("imgUrl"),alt:""}),c.a.createElement(qn,null,c.a.createElement("h3",{className:"title"},n.get("title")),c.a.createElement("p",{className:"desc"},n.get("desc")))))}),c.a.createElement(Zn,{onClick:function(){return t(r)}},"More"))}}]),e}(i.PureComponent),te=Object(s.b)(function(n){return{list:n.getIn(["home","articleList"]),page:n.getIn(["home","articlePage"])}},function(n){return{getMoreList:function(e){n(a.getMoreList(e))}}})(ee),re=function(n){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(g.a)(e,[{key:"render",value:function(){var n=this.props.list;return c.a.createElement(Rn,null,c.a.createElement(Tn,null,"Writers",c.a.createElement(Hn,null,"Change")),n.map(function(n){return c.a.createElement(Pn,{key:n.get("id")},c.a.createElement("img",{className:"pic",alt:"",src:n.get("imgUrl")}),c.a.createElement(Dn,null,c.a.createElement("a",{href:"/",target:"_blank",className:"title"},n.get("title")),c.a.createElement("p",{className:"desc"},n.get("desc"))),c.a.createElement(Bn,null,"+\u5173\u6ce8"))}),c.a.createElement(Wn,{href:"/",target:"_blank"},"\u67e5\u770b\u5168\u90e8"))}}]),e}(i.PureComponent),oe=Object(s.b)(function(n){return{list:n.getIn(["home","writerList"])}},null)(re),ae=function(n){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(g.a)(e,[{key:"handleCrollTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return c.a.createElement(Cn,null,c.a.createElement(Sn,null,c.a.createElement("img",{className:"banner-img",src:"//upload.jianshu.io/admin_banners/web_images/4688/b566e8cd6e7c0b15b1cc510fdc596ac501e97a96.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",alt:""}),c.a.createElement(Qn,null),c.a.createElement(te,null)),c.a.createElement(Fn,null,c.a.createElement(Yn,null),c.a.createElement(oe,null)),this.props.showScroll?c.a.createElement(Vn,{onClick:this.handleCrollTop},"Top"):null)}},{key:"componentDidMount",value:function(){this.props.changeHomeData(),this.bindEvents()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.changeScrollTopShow)}},{key:"bindEvents",value:function(){window.addEventListener("scroll",this.props.changeScrollTopShow)}}]),e}(i.PureComponent),ie=Object(s.b)(function(n){return{showScroll:n.getIn(["home","showScroll"])}},function(n){return{changeHomeData:function(){n(a.getHomeInfo())},changeScrollTopShow:function(){document.documentElement.scrollTop>100?n(a.toggleTopShow(!0)):n(a.toggleTopShow(!1))}}})(ae),ce=t(51),ue=t.n(ce)()({loader:function(){return t.e(3).then(t.bind(null,93))},loading:function(){return c.a.createElement("div",null,"Loading")}}),le=function(){return c.a.createElement(ue,null)};function se(){var n=Object(N.a)(["\n    width:220px;\n    height:30px;\n    line-height:30px;\n    color:#fff;\n    border-radius:15px;\n    background:#3194d0;\n    margin:10px auto;\n    text-align:center;\n    cursor:pointer;\n"]);return se=function(){return n},n}function fe(){var n=Object(N.a)(["\n    display:block;\n    width:200px;\n    height:30px;\n    line-height:30px;\n    padding:0 10px;\n    margin:10px auto;\n    color:#777;\n"]);return fe=function(){return n},n}function de(){var n=Object(N.a)(["\n    width:400px;\n    height:220px;\n    margin:80px auto;\n    background:#fff;\n    padding:40px 50px 30px;\n    background:#fff;\n    border-radius:4px;\n    box-shadow:0 0 8px rgba(0,0,0,.1);\n    vertical-align:middle;\n    box-sizing:border-box;    \n    \n"]);return de=function(){return n},n}function pe(){var n=Object(N.a)(["\n    z-index:0;\n    position:absolute;\n    top:56px;\n    left:0;\n    right:0;\n    bottom:0;\n    background:#eee;\n"]);return pe=function(){return n},n}var ge=G.b.div(pe()),be=G.b.div(de()),he=G.b.input(fe()),me=G.b.div(se()),xe=function(n){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(g.a)(e,[{key:"render",value:function(){var n=this;return this.props.loginStatus?c.a.createElement(d.a,{to:"/"}):c.a.createElement(ge,null,c.a.createElement(be,null,c.a.createElement(he,{placeholder:"username",ref:function(e){n.account=e}}),c.a.createElement(he,{placeholder:"password",type:"password",ref:function(e){n.password=e}}),c.a.createElement(me,{onClick:function(){return n.props.login(n.account,n.password)}},"Log in")))}}]),e}(i.PureComponent),ve=Object(s.b)(function(n){return{loginStatus:n.getIn(["login","login"])}},function(n){return{login:function(e,t){n(o.login(e.value,t.value))}}})(xe),Ae=function(n){function e(){return Object(p.a)(this,e),Object(b.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(g.a)(e,[{key:"render",value:function(){return this.props.loginStatus?c.a.createElement("div",null,"writing"):c.a.createElement(d.a,{to:"/login"})}}]),e}(i.PureComponent),Ee=Object(s.b)(function(n){return{loginStatus:n.getIn(["login","login"])}},null)(Ae);function Oe(){var n=Object(N.a)(["\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      font-size: 100%;\n      font: inherit;\n      vertical-align: baseline;\n    }\n    /* HTML5 display-role reset for older browsers */\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n      display: block;\n    }\n    body {\n      line-height: 1;\n    }\n    ol, ul {\n      list-style: none;\n    }\n    blockquote, q {\n      quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n      content: '';\n      content: none;\n    }\n    table {\n      border-collapse: collapse;\n      border-spacing: 0;\n    }\n"]);return Oe=function(){return n},n}var je=Object(G.a)(Oe());function we(){var n=Object(N.a)(["\n@font-face {font-family: \"iconfont\";\n    src: url('./iconfont.eot?t=1565435407183'); /* IE9 */\n    src: url('./iconfont.eot?t=1565435407183#iefix') format('embedded-opentype'), /* IE6-IE8 */\n        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQ8AAsAAAAACGgAAAPvAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqECINZATYCJAMUCwwABCAFhG0HTxtkBxFVnDfIvsC20Y7duNtgdwZj689N/cVSF8VZSAYycGBDOFAEBAaIh+/3Y5375KOSJLk2n45nTQyNUAhNI6ROyYTCWsg7HK21R8wHa2KWxdvJzInvDniylsUSDSrtGxLFIokf5tG/4QAmk4lushK8LR2c/b/XGk11ynRygEdLAq1aZtf4Cql0dGmaThGoY7G4tM2lU6uNCmA4QAEqrVDyD/KgBeTdfxi7oCWeJ9BuzLw4tHHygnSFOS0Q9/Gx4ZCeUSoNmaFVaCrWFohnYNCaqtAjiHkKfj/+QVe0gqRmMOcekXUUTLzxf7hjhTQFeThA0+nBNpExj0LcVRpvY0lRcF7WrsYn20arNSjxXfKm8+FO04hSLDzKuFbt2pGU4f+8aMCUdULyrrRcGXLQRSIoqJL3QTaZ3wvC50ivoB2mvAP4GzOpI2Tpwp9MfQWC7K3MAlk9wjteG0QsHg/EyxuhqC4iV33SCYXEgu8mKeXDHm1RCSRZFQMJImuocWyoGSvKLudhXslLSBKsPuxerIls/gGNkpkfwuvha2w1AO3Bus1afZJQ5LtWFOxhtDI/DIUjbDV7CYivb6yqbxHs49NYD17FUd7NUt47+q8sDWwVM4R828aWFqRXVoiW/7vZuFaV5mjF/HwFalZgfstsA//7+EbgdM+fo0wr3WkuDF8ycXIGy6Waom9790qyuB7P3bd270GJpqE8wcnZItotqn3/nUunpkqBGIMGtBRNeD4Xfi3YJttzuZnzaE5adTLBxNUbtYiIN6HwPyazDvTakWqukirvE88RzOZoZvAU4pt1KFLyp7L5rbkW/rN3piVu1WhtIihS6RLLj+jdfCKvt3tl/9QW3YofCAmzDV/xYa8Z0PPDTqTCOQEXaxgAPzt5GzMP8DQewkXZH8v773/j5FAuNpTL6M/e2lHAFx9gyQ9x+ZGfhzqjv4w6NhUNM1W1KPWOQDFVyym3xE/F/m6Ufq/TmIfEEn1o5QhC0mIUslbj+EKeh6rDOjRa7UC7OfObOwwQkkRpw6xTAKHXGSTdPiHr9Ygv5Beohv1CozcwaHcRfHt2mIz4TEuBCqMO6h5YWuCTreHMMHMRjS1XEWksoK2ikJYHOts68pF59FFMsUBuG13MBCQCD+bAZei6AYQisFHjNpM5HGpvp6pPatMCL5bpgIAUDOmAag+waAI+8jqzzMLPL0KGLS6FaGiocq5CgmT1Djq16eiAn5f5nRpuZbC0zdCFMcKTiBDwgDmoR64VDICwepQNaVgbc4A/NKQdtaOusrblFd477oJ25h01UuQoUaNRHkLLz4xRfENXbMtzJJor2bcxpFUzUXMsPxYDAA==') format('woff2'),\n        url('./iconfont.woff?t=1565435407183') format('woff'),\n        url('./iconfont.ttf?t=1565435407183') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n        url('./iconfont.svg?t=1565435407183#iconfont') format('svg'); /* iOS 4.1- */\n}\n\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n"]);return we=function(){return n},n}var Le=Object(G.a)(we()),ke=t(23),ye=t(52),Ie=t(53),Ce=t(43),Se=Object(Ie.combineReducers)({header:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"header/SEARCH_FOCUS":return n.set("focused",!0);case"header/SEARCH_BLUR":return n.set("focused",!1);case"header/CHANGE_LIST":return n.merge({list:e.data,totalPage:e.totalPage});case"header/MOUSE_ENTER":return n.set("mouseIn",!0);case"header/MOUSE_LEAVE":return n.set("mouseIn",!1);case"header/CHANGE_PAGE":return n.set("page",e.page);default:return n}},home:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"home/CHANGE_HOME_DATA":return function(n,e){return n.merge({topicList:Object(x.fromJS)(e.topicList),articleList:Object(x.fromJS)(e.articleList),recommendList:Object(x.fromJS)(e.recommendList),writerList:Object(x.fromJS)(e.writerList)})}(n,e);case"home/ADD_ARTICLE_LIST":return function(n,e){return n.merge({articleList:n.get("articleList").concat(e.list),articlePage:e.nextPage})}(n,e);case"home/TOGGLE_SCROLL_TOP":return n.set("showScroll",e.show);default:return n}},detail:Ce.b,login:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"login/CHANGE_LOGIN":case"login/LOGOUT":return n.set("login",e.value);default:return n}}}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.c,Ne=Object(ke.d)(Se,Fe(Object(ke.a)(ye.a)));var Ge=function(){return c.a.createElement(s.a,{store:Ne},c.a.createElement(c.a.Fragment,null,c.a.createElement(je,null),c.a.createElement(Le,null),c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement(sn,null),c.a.createElement(d.b,{path:"/login",exact:!0,component:ve}),c.a.createElement(d.b,{path:"/write",exact:!0,component:Ee}),c.a.createElement(d.b,{path:"/",exact:!0,component:ie}),c.a.createElement(d.b,{path:"/detail/:id",exact:!0,component:le})))))};l.a.render(c.a.createElement(Ge,null),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.c4f97f9d.chunk.js.map