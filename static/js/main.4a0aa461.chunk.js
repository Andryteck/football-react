(this.webpackJsonpbelitsoftreact=this.webpackJsonpbelitsoftreact||[]).push([[0],{29:function(e,t,n){e.exports={playerWrapper:"player_playerWrapper__UbETO",player:"player_player__3gfDg"}},34:function(e,t,n){e.exports={teamWrapper:"team_teamWrapper__2Z_hY",team:"team_team__ZaEf6"}},35:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__AC4Jg",pageAvatar:"ProfileInfo_pageAvatar__2Maiq"}},50:function(e,t,n){e.exports={addBtn:"BtnAdd_addBtn__1aTgi"}},55:function(e,t,n){e.exports={wrapper:"container_wrapper__1_ssJ"}},57:function(e,t,n){e.exports={header:"Header_header__22rC9"}},58:function(e,t,n){e.exports={nav:"nav_nav__VnbBu"}},66:function(e,t,n){},91:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n(21),i=n.n(a),s=(n(66),n(28)),o=n(29),u=n.n(o),j=n(12),d=n.n(j),b=n(9),l=n(7),p=n(49),f=n.n(p).a.create(Object(l.a)({baseURL:"https://api.football-data.org/v2/"},{headers:{"X-Auth-Token":"15a24cc3edfb4c64a66c0214e356ebe7"}})),O=function(){return f.get("competitions/2017/teams")},m=function(e){return f.get("teams/".concat(e))},h={fetching:!1},x=d.a.mark(S),v=d.a.mark(R),E=d.a.mark(P),A=d.a.mark(C),T=d.a.mark(k),y=function(e){return{type:"TEAMS/FETCH_TEAMS",payload:e}},g=function(e){return{type:"TEAMS/FETCH_PLAYERS",payload:e}},_=function(e,t){return{type:"FAVOURITES/ADD_TEAM",name:e,teamId:t}},F=function(e,t){return{type:"FAVOURITES/ADD_PLAYER",name:e,playerId:t}},I=function(e,t){return{type:"FAVOURITES/REMOVE_TEAM",id:e,name:t}};function S(){var e,t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(b.b)({type:"APP/START_FETCHING"});case 2:return n.next=4,Object(b.a)(O);case 4:return e=n.sent,t=e.data.teams,n.next=8,Object(b.b)(y(t));case 8:return n.next=10,Object(b.b)({type:"APP/STOP_FETCHING"});case 10:case"end":return n.stop()}}),x)}function R(e){var t,n;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(b.b)({type:"APP/START_FETCHING"});case 2:return r.next=4,Object(b.a)(m,e.teamId);case 4:return t=r.sent,n=t.data.squad,r.next=8,Object(b.b)(g(n));case 8:return r.next=10,Object(b.b)({type:"APP/STOP_FETCHING"});case 10:case"end":return r.stop()}}),v)}function P(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.b)(_(e.name,e.teamId));case 2:case"end":return t.stop()}}),E)}function C(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.b)(F(e.name,e.playerId));case 2:case"end":return t.stop()}}),A)}function k(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.b)(I(e.id,e.name));case 2:case"end":return t.stop()}}),T)}var w=n(50),M=n.n(w),D=function(e){var t=e.onClick,n=e.title;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{onClick:t,className:M.a.addBtn,children:n})})},N=n(8),V=n(31);function U(){var e=Object(s.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: -1px;\n"]);return U=function(){return e},e}function H(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  height: 200px;\n"]);return H=function(){return e},e}var B=function(e){var t=e.name,n=e.playerId,c=Object(N.b)(),a=function(e){var t=e.charCodeAt();return t>=65&&t<=73?{background:"#F5D6D9",color:"#F38181"}:t>=74&&t<=80?{background:"#F8ECD5",color:"#F1A32F"}:t>=81&&t<=90?{background:"#DAD5F8",color:"#816CFF"}:{background:"#E9F5FF",color:"#2A86FF"}}(t[0].toUpperCase());return Object(r.jsxs)("div",{className:u.a.playerWrapper,children:[Object(r.jsx)(L,{style:{backgroundColor:a.background},children:Object(r.jsx)(W,{style:{color:a.color},children:t[0].toUpperCase()})}),Object(r.jsx)("div",{className:u.a.player,children:t}),Object(r.jsx)(D,{onClick:function(){c(function(e,t){return{type:"FAVOURITES/ADD-PLAYER",playerId:e,name:t}}(n,t))},title:"+"})]})},L=V.a.div(H()),W=V.a.p(U()),Y=n.p+"static/media/spin.7019bd74.svg",G=function(){return Object(r.jsx)("div",{className:"spin-wrapper",children:Object(r.jsx)("img",{src:Y})})},J=n(6),X=n(23),q=n.n(X),Z=n(55),z=n.n(Z),K=function(e){var t=e.children;return Object(r.jsx)("div",{className:z.a.wrapper,children:t})},Q=function(e){var t=e.fetching,n=Object(N.c)((function(e){return e.teamInfoReducer.players})),c=Object(J.f)();return Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)(G,{}),Object(r.jsx)(q.a,{right:!0,children:Object(r.jsx)(K,{children:n.map((function(e){return Object(r.jsx)(B,{name:e.name,playerId:e.id},e.id)}))})}),Object(r.jsx)("button",{className:"button",onClick:function(){c.push("/")},children:"Back"})]})},$=n(34),ee=n.n($),te=n(20),ne=function(e){var t=e.name,n=e.teamId,c=Object(N.b)();return Object(r.jsxs)("div",{className:ee.a.teamWrapper,children:[Object(r.jsx)(te.b,{to:"/players/".concat(n),style:{textDecoration:"none",color:"#666666"},children:Object(r.jsx)("img",{src:"https://crests.football-data.org/".concat(n,".svg"),alt:"team",title:"team",style:{width:200,height:200},onClick:function(){c(function(e){return{type:"TEAMS/FETCH-PLAYERS",teamId:e}}(n))}})}),Object(r.jsx)("div",{className:ee.a.team,children:t}),Object(r.jsx)(D,{onClick:function(){c(function(e,t){return{type:"FAVOURITES/ADD-TEAM",teamId:e,name:t}}(n,t))},title:"+"})]})},re=function(e){var t=e.fetching,n=Object(N.c)((function(e){return e.teamInfoReducer.teams})),a=Object(N.b)();return Object(c.useEffect)((function(){a({type:"TEAMS/FETCH-TEAMS"})}),[]),Object(r.jsxs)(r.Fragment,{children:[t&&Object(r.jsx)(G,{}),Object(r.jsx)(q.a,{right:!0,children:Object(r.jsx)(K,{children:n.map((function(e){return Object(r.jsx)(ne,{name:e.name,teamId:e.id},e.id)}))})})]})},ce=(n(91),n(11)),ae=n(60),ie=n(25),se={favoriteTeams:[],favoritePlayers:[]},oe={teams:[],players:[]},ue=n(36),je=n(56),de=n.n(je),be=Object(ce.c)({teamInfoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEAMS/FETCH_TEAMS":return Object(l.a)(Object(l.a)({},e),{},{teams:t.payload});case"TEAMS/FETCH_PLAYERS":return Object(l.a)(Object(l.a)({},e),{},{players:t.payload});default:return e}},appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/START_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{fetching:!0});case"APP/STOP_FETCHING":return Object(l.a)(Object(l.a)({},e),{},{fetching:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAVOURITES/ADD_TEAM":var n=e.favoriteTeams.filter((function(e){return e.id!==t.teamId}));return Object(l.a)(Object(l.a)({},e),{},{favoriteTeams:[].concat(Object(ie.a)(n),[{name:t.name,id:t.teamId}])});case"FAVOURITES/ADD_PLAYER":var r=e.favoritePlayers.filter((function(e){return e.id!==t.playerId}));return Object(l.a)(Object(l.a)({},e),{},{favoritePlayers:[].concat(Object(ie.a)(r),[{name:t.name,id:t.playerId}])});case"FAVOURITES/REMOVE_TEAM":return Object(l.a)(Object(l.a)({},e),{},{favoriteTeams:Object(ie.a)(e.favoriteTeams.filter((function(e){return e.id!==t.id})))});default:return e}}}),le=function(){var e=d.a.mark(s),t={key:"root",storage:de.a},n=Object(ue.a)(t,be),r=Object(ae.a)(),c=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,a=Object(ce.e)(n,c(Object(ce.a)(r))),i=Object(ue.b)(a);function s(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)("TEAMS/FETCH-TEAMS",S);case 2:return e.next=4,Object(b.c)("TEAMS/FETCH-PLAYERS",R);case 4:return e.next=6,Object(b.c)("FAVOURITES/ADD-TEAM",P);case 6:return e.next=8,Object(b.c)("FAVOURITES/ADD-PLAYER",C);case 8:return e.next=10,Object(b.c)("FAVOURITES/REMOVE-TEAM",k);case 10:case"end":return e.stop()}}),e)}return r.run(s),{persistor:i,store:a}},pe=n(24),fe=n(57),Oe=n.n(fe),me=n(58),he=n.n(me);var xe=function(e){return Object(pe.a)(e),Object(r.jsxs)("div",{className:he.a.nav,children:[Object(r.jsx)("a",{href:"#/",children:"Teams list"}),Object(r.jsx)("a",{href:"#/profile",children:"Profile"})]})};var ve=function(e){return Object(pe.a)(e),Object(r.jsx)("div",{className:Oe.a.header,children:Object(r.jsx)(xe,{})})},Ee=n(35),Ae=n.n(Ee),Te=n.p+"static/media/userImage.65de8185.jpg",ye=function(e){var t=e.name,n=e.id,c=Object(N.b)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:t}),Object(r.jsx)("button",{onClick:function(){c(function(e,t){return{type:"FAVOURITES/REMOVE-TEAM",id:e,name:t}}(n,t))},children:"Remove"})]})},ge=function(e){var t=e.teamsInfo,n=e.playersInfo;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:Ae.a.descriptionBlock,children:[Object(r.jsx)("img",{src:Te,className:Ae.a.pageAvatar}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{style:{fontWeight:"bold"},children:"Full name:"}),Object(r.jsx)("p",{children:"Andrei Kulik"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{style:{fontWeight:"bold"},children:"Favourite teams: "}),t.length?t.map((function(e){return Object(r.jsx)(ye,{name:e.name,id:e.id},e.id)})):"no favourites"]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{style:{fontWeight:"bold"},children:"Favourite players: "}),n.length?n.map((function(e){return Object(r.jsx)("p",{children:e.name},e.id)})):"no favourites"]})]})})},_e=function(e){var t=Object(N.c)((function(e){return e.profile.favoriteTeams})),n=Object(N.c)((function(e){return e.profile.favoritePlayers}));return Object(r.jsx)("div",{children:Object(r.jsx)(ge,{teamsInfo:t,playersInfo:n})})},Fe=n(59),Ie=function(){var e=Object(N.c)((function(e){return e.appReducer.fetching})),t=le().persistor;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(Fe.a,{persistor:t,children:[Object(r.jsx)(ve,{}),Object(r.jsx)(te.a,{children:Object(r.jsx)("div",{className:"app-wrapper",children:Object(r.jsxs)(J.c,{children:[Object(r.jsx)(J.a,{exact:!0,path:"/",render:function(){return Object(r.jsx)(re,{fetching:e})}}),Object(r.jsx)(J.a,{path:"/players/:number",render:function(){return Object(r.jsx)(Q,{fetching:e})}}),Object(r.jsx)(J.a,{path:"/profile",render:function(){return Object(r.jsx)(_e,{})}})]})})})]})})},Se=le(),Re=Se.store;Se.persistor;i.a.render(Object(r.jsx)(N.a,{store:Re,children:Object(r.jsx)(Ie,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.4a0aa461.chunk.js.map