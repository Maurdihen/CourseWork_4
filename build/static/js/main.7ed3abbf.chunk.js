(this.webpackJsonpskypro_python_frontend=this.webpackJsonpskypro_python_frontend||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={Movie__description:"Movie_Movie__description__2nvzP",Movie__actions:"Movie_Movie__actions__1HrlK",Movie__wrapper:"Movie_Movie__wrapper__1aGW1",Movie__selection:"Movie_Movie__selection__cFTh0",Cover:"Movie_Cover__ZkQpw",Cover__layer:"Movie_Cover__layer__93bDU",Cover__information:"Movie_Cover__information__3onLJ",Cover__title:"Movie_Cover__title__Ze48x",Cover__data:"Movie_Cover__data__27a3m"}},function(e,t,n){e.exports={Menu:"Menu_Menu__2uobS",Menu__button:"Menu_Menu__button__1imCG",Menu__back:"Menu_Menu__back__2OE0o",Menu__panel:"Menu_Menu__panel__RA3I_",Menu__link:"Menu_Menu__link__1-tGB"}},,function(e,t,n){e.exports={MovieCard:"MovieCard_MovieCard__1n563",MovieCard__image:"MovieCard_MovieCard__image__1ImTH",MovieCard__title:"MovieCard_MovieCard__title__bmHIm",MovieCard__additional:"MovieCard_MovieCard__additional__z4-Rv",MovieCard__rating:"MovieCard_MovieCard__rating__1S3LO",MovieCard__year:"MovieCard_MovieCard__year__SMDsP"}},,function(e,t,n){e.exports={Homepage:"Homepage_Homepage__1W6vB",Homepage__movieSet:"Homepage_Homepage__movieSet__pYVVF",Homepage__tagSet:"Homepage_Homepage__tagSet__2OIbM"}},function(e,t,n){e.exports={Header:"Header_Header__214zg",Header__secondary:"Header_Header__secondary__2r5ZX",Header__title:"Header_Header__title__b5jgV",Header__subtitle:"Header_Header__subtitle__q4YTR"}},function(e,t,n){e.exports={Profile:"Profile_Profile__1wblH",Profile__form:"Profile_Profile__form__3TpJo",Profile__heading:"Profile_Profile__heading__2QwS2",Profile__email:"Profile_Profile__email__1fklZ"}},,,,,,function(e,t,n){e.exports={Button:"Button_Button__ra12g",Button_type_light:"Button_Button_type_light__Vp_Hd",Button_type_dark:"Button_Button_type_dark__20pF3"}},function(e,t,n){e.exports={Register:"Register_Register__3KLDN",Register__form:"Register_Register__form__1K-yI",Register__message:"Register_Register__message__1Czhx"}},function(e,t,n){e.exports={Login:"Login_Login__1VJTA",Login__form:"Login_Login__form__3LuXA",Login__message:"Login_Login__message__Et48p"}},,function(e,t,n){e.exports={Checkbox:"Checkbox_Checkbox__37z75",Path:"Checkbox_Path__-yZUr",bounce:"Checkbox_bounce__WRjHx"}},function(e,t,n){e.exports={List:"List_List__1ZtS4",List__cards:"List_List__cards__1WNfw"}},,,,,,,,,,function(e,t,n){e.exports={Heading:"Heading_Heading__3Xje3"}},,function(e,t,n){e.exports={MovieCardSet:"MovieCardSet_MovieCardSet__23nmD"}},function(e,t,n){e.exports={Tag:"Tag_Tag__v1FAX"}},function(e,t,n){e.exports={Loader:"Loader_Loader__RZZ4L","lds-dual-ring":"Loader_lds-dual-ring__3t_NV"}},function(e,t,n){e.exports={Input:"Input_Input__1iN_Z"}},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(35),i=n.n(o),r=(n(46),n(47),n(5)),s=n(2),l=n(4),_=n.n(l),d=n(10),u=n(3),j=n(13),b=n.n(j),v=n(18),p=n(14),f=n.n(p),O=n(19),h=n.n(O),x=n(0),g=function(e){var t=e.title,n=e.subtitle,a=e.type;return Object(x.jsxs)("div",{className:h()(f.a.Header,Object(v.a)({},f.a.Header__secondary,"secondary"===a)),children:[Object(x.jsx)("div",{className:f.a.Header__title,children:t}),Object(x.jsx)("div",{className:f.a.Header__subtitle,children:n})]})},m=n(36),C=n.n(m),k=function(e){var t=e.label;return Object(x.jsx)("div",{className:C.a.Heading,children:t})},M=n(37),w=n.n(M),y=n(12);function N(e,t,n){(n=Object(y.a)({path:"/"},n)).expires&&n.expires.toUTCString&&(n.expires=n.expires.toUTCString());var a=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var c in n)if(n.hasOwnProperty(c)){a+="; "+c;var o=n[c];!0!==o&&(a+="="+o)}document.cookie=a}function L(e){var t=("; "+document.cookie).split("; "+e+"=");if(2===t.length)return t.pop().split(";").shift()}function S(e){var t=new Date;t.setTime(t.getTime()+-1),document.cookie=e+"=; expires="+t.toUTCString()+"; path=/"}var H=w.a.create({baseURL:"http://127.0.0.1:5000",headers:{Authorization:"Bearer "+L("AccessToken")}}),T=function(e){return H.get("/genres/".concat(e))},R=function(e){return H.get("/movies/".concat(e?"?"+e:""))},P=function(e){return H.get("/directors/".concat(e))},A=n(38),B=n.n(A),I=n(11),Z=n.n(I),E=function(e){var t=e.id,n=e.img,a=e.title,c=e.rating,o=e.year;return Object(x.jsxs)(r.b,{className:Z.a.MovieCard,to:"/movie/"+t,children:[Object(x.jsx)("div",{className:Z.a.MovieCard__image,children:Object(x.jsx)("img",{src:n,alt:"Movie Poster"})}),Object(x.jsx)("div",{className:Z.a.MovieCard__title,children:a}),Object(x.jsxs)("div",{className:Z.a.MovieCard__additional,children:[Object(x.jsx)("p",{className:Z.a.MovieCard__rating,children:c}),Object(x.jsx)("p",{className:Z.a.MovieCard__year,children:o})]})]})},U=function(e){var t=e.replace("https://www.youtube.com/watch?v=","");return"https://img.youtube.com/vi/".concat(t,"/0.jpg")},V=function(e){var t=e.movies,n=e.limit,a=n?t.slice(0,n):t;return Object(x.jsx)("div",{className:B.a.MovieCardSet,children:a.map((function(e){return Object(x.jsx)(E,{id:e.id,img:U(e.trailer),title:e.title,rating:e.rating,year:e.year},e.id)}))})},z=n(39),D=n.n(z),J=function(e){var t=e.id,n=e.label,a=e.type;return Object(x.jsx)(r.b,{className:D.a.Tag,to:"/".concat(a,"/").concat(t),children:n})},F=n(40),W=n.n(F),X=function(){return Object(x.jsx)("div",{className:W.a.Loader})},G=function(){var e=Object(a.useState)({loading:!0,content:[]}),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({loading:!0,content:[]}),i=Object(u.a)(o,2),r=i[0],s=i[1],l=Object(a.useState)({loading:!0,content:[]}),j=Object(u.a)(l,2),v=j[0],p=j[1];return Object(a.useEffect)((function(){Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/genres/");case 2:t=e.sent,n=t.data,c({loading:!1,content:n});case 5:case"end":return e.stop()}}),e)})))(),Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("status=new");case 2:t=e.sent,n=t.data,s({loading:!1,content:n});case 5:case"end":return e.stop()}}),e)})))(),Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.get("/directors/");case 2:t=e.sent,n=t.data,p({loading:!1,content:n});case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(x.jsxs)("div",{className:b.a.Homepage,children:[Object(x.jsx)(g,{title:"Sky movies",subtitle:"\u041a\u0438\u043d\u043e \u0432 \u043a\u0430\u0440\u043c\u0430\u0448\u043a\u0435"}),Object(x.jsxs)("div",{className:b.a.Homepage__movieSet,children:[Object(x.jsx)(k,{label:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438"}),r.loading&&Object(x.jsx)(X,{}),Object(x.jsx)(V,{movies:r.content,limit:4})]}),Object(x.jsxs)("div",{className:b.a.Homepage__tagSet,children:[Object(x.jsx)(k,{label:"\u0416\u0430\u043d\u0440\u044b"}),n.loading&&Object(x.jsx)(X,{}),n.content.map((function(e){return Object(x.jsx)(J,{id:e.id,label:e.name,type:"genre"},e.id)}))]}),Object(x.jsxs)("div",{className:b.a.Homepage__tagSet,children:[Object(x.jsx)(k,{label:"\u0420\u0435\u0436\u0438\u0441\u0441\u0451\u0440\u044b"}),v.loading&&Object(x.jsx)(X,{}),v.content.map((function(e){return Object(x.jsx)(J,{id:e.id,label:e.name,type:"director"},e.id)}))]})]})},K=n(15),Q=n.n(K),Y=n(41),q=n.n(Y),$=function(e){var t=e.value,n=e.type,a=e.placeholder,c=e.onChange;return Object(x.jsx)("div",{className:q.a.Input,children:Object(x.jsx)("input",{type:n,value:t,placeholder:a,onChange:c})})},ee=n(21),te=n.n(ee),ne=function(e){var t=e.type,n=e.label,a=e.onClick;return Object(x.jsx)("button",{className:h()(te.a.Button,"dark"===t?te.a.Button_type_dark:te.a.Button_type_light),onClick:a,children:n})},ae=function(){return H.get("/favorites/movies/")},ce=function(e){var t,n,a=L("AccessToken"),c=L("RefreshToken");401===(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.status)&&a&&c?(console.log("Trying to refresh token"),(n={access_token:a,refresh_token:c},H.put("/auth/login",n)).then((function(e){N("AccessToken",e.data.access_token,{"max-age":604800}),N("RefreshToken",e.data.refresh_token,{"max-age":604800}),document.location.reload()})).catch((function(e){console.error("Token refresh unsuccessful",e.response),window.location="/login"}))):(console.error("No tokens were founded",e.response),window.location="/login")},oe=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],s=i[1],l=Object(a.useState)(""),_=Object(u.a)(l,2),d=_[0],j=_[1],b=Object(a.useState)({old:"",new:""}),v=Object(u.a)(b,2),p=v[0],f=v[1],O=Object(a.useState)(""),h=Object(u.a)(O,2),m=h[0],C=h[1];Object(a.useEffect)((function(){H.get("/user/").then((function(e){return k(e.data)})).catch((function(e){return ce(e)}))}),[]);var k=function(e){C(e.email||""),c(e.name||""),s(e.surname||""),j(e.favourite_genre||"")};return Object(x.jsxs)("div",{className:Q.a.Profile,children:[Object(x.jsx)(g,{title:"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c",subtitle:"Sky movies",type:"secondary"}),Object(x.jsx)("div",{className:Q.a.Profile__email,children:m}),Object(x.jsxs)("div",{className:Q.a.Profile__form,children:[Object(x.jsx)($,{type:"text",value:n,placeholder:"\u0418\u043c\u044f",onChange:function(e){return c(e.target.value)}}),Object(x.jsx)($,{type:"text",value:r,placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",onChange:function(e){return s(e.target.value)}}),Object(x.jsx)($,{type:"text",value:d,placeholder:"\u041b\u044e\u0431\u0438\u043c\u044b\u0439 \u0436\u0430\u043d\u0440",onChange:function(e){return j(e.target.value)}}),Object(x.jsx)(ne,{label:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:function(){var e;(e=Object(y.a)(Object(y.a)(Object(y.a)({},n&&{name:n}),r&&{surname:r}),d&&{favourite_genre:d}),H.patch("/user/",e)).then().catch((function(e){console.log(e.response)}))}}),Object(x.jsx)("div",{className:Q.a.Profile__heading,children:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(x.jsx)($,{type:"password",value:p.old,placeholder:"\u0421\u0442\u0430\u0440\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return f({new:p.new,old:e.target.value})}}),Object(x.jsx)($,{type:"password",value:p.new,placeholder:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return f({new:e.target.value,old:p.old})}}),Object(x.jsx)(ne,{label:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:function(){var e;(e={password_1:p.new,password_2:p.new},H.put("/user/password",e)).then((function(e){return k(e.data)})).catch((function(e){console.error(e.response)}))}})]})]})},ie=n(22),re=n.n(ie),se=function(e,t,n){var a;(a={email:e,password:t},H.post("/auth/login",a)).then((function(e){N("AccessToken",e.data.access_token,{"max-age":604800}),N("RefreshToken",e.data.refresh_token,{"max-age":604800}),window.location="/"})).catch((function(e){var t,a,c,o;console.error(null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message),n(null===(c=e.response)||void 0===c||null===(o=c.data)||void 0===o?void 0:o.message)}))},le=n(25),_e=n.n(le),de=function(e){var t=e.label,n=e.onChange;return Object(x.jsxs)("label",{className:_e.a.Checkbox+" "+_e.a.Path,children:[Object(x.jsx)("input",{onChange:n,type:"checkbox"}),Object(x.jsx)("svg",{viewBox:"0 0 21 21",children:Object(x.jsx)("path",{d:"M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"})}),Object(x.jsx)("span",{children:t})]})},ue=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],s=i[1],l=Object(a.useState)(void 0),_=Object(u.a)(l,2),d=_[0],j=_[1];return Object(x.jsxs)("div",{className:re.a.Register,children:[Object(x.jsx)("h1",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(x.jsx)("span",{children:"\u041b\u043e\u0433\u0438\u043d, \u043f\u0430\u0440\u043e\u043b\u044c \u0438 \u0432\u044b \u0441 \u043d\u0430\u043c\u0438"}),Object(x.jsxs)("div",{className:re.a.Register__form,children:[d&&Object(x.jsx)("div",{className:re.a.Register__message,children:d}),Object(x.jsx)($,{type:"text",value:n,placeholder:"\u041b\u043e\u0433\u0438\u043d",onChange:function(e){j(void 0),c(e.target.value)}}),Object(x.jsx)($,{type:"password",value:r,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){j(void 0),s(e.target.value)}}),Object(x.jsx)(de,{label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"}),Object(x.jsx)(ne,{label:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onClick:function(){var e;(e={email:n,password:r},H.post("/auth/register",e)).then((function(){se(n,r,(function(e){j(e)}))})).catch((function(e){var t,n;j([null===(t=e.response)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.message])}))}})]})]})},je=n(23),be=n.n(je),ve=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],s=i[1],l=Object(a.useState)(void 0),_=Object(u.a)(l,2),d=_[0],j=_[1];return Object(x.jsxs)("div",{className:be.a.Login,children:[Object(x.jsx)("h1",{children:"\u0412\u043e\u0439\u0442\u0438"}),Object(x.jsx)("span",{children:"\u041f\u043e\u043c\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c? \u0417\u0430\u0431\u0435\u0433\u0430\u0439\u0442\u0435!"}),Object(x.jsxs)("div",{className:be.a.Login__form,children:[d&&Object(x.jsx)("div",{className:be.a.Login__message,children:d}),Object(x.jsx)($,{type:"text",value:n,placeholder:"\u041b\u043e\u0433\u0438\u043d",onChange:function(e){j(void 0),c(e.target.value)}}),Object(x.jsx)($,{type:"password",value:r,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){j(void 0),s(e.target.value)}}),Object(x.jsx)(ne,{label:"\u0412\u043e\u0439\u0442\u0438",onClick:function(){se(n,r,(function(e){j(e)}))}})]})]})},pe=n(26),fe=n.n(pe),Oe=function(e){var t=e.title,n=e.type,c=Object(s.g)().id,o=Object(a.useState)({loading:!0,content:[]}),i=Object(u.a)(o,2),r=i[0],l=i[1],j=Object(a.useState)({loading:!0,content:[]}),b=Object(u.a)(j,2),v=b[0],p=b[1];return Object(a.useEffect)((function(){switch(n){case"genre":Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(c);case 2:t=e.sent,n=t.data,l({loading:!1,content:n});case 5:case"end":return e.stop()}}),e)})))(),Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,n=t.data,p({loading:!1,content:n.filter((function(e){return e.genre.id===Number(c)}))});case 5:case"end":return e.stop()}}),e)})))();break;case"director":Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(c);case 2:t=e.sent,n=t.data,l({loading:!1,content:n});case 5:case"end":return e.stop()}}),e)})))(),Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:t=e.sent,n=t.data,p({loading:!1,content:n.filter((function(e){return e.director.id===Number(c)}))});case 5:case"end":return e.stop()}}),e)})))();break;case"favorites":Object(d.a)(_.a.mark((function e(){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:t=e.sent,n=t.data,p({loading:!1,content:n});case 5:case"end":return e.stop()}}),e)})))()}}),[c,n]),Object(x.jsxs)("div",{className:fe.a.List,children:[Object(x.jsx)(g,{title:"".concat(t).concat(r.content.name?": "+r.content.name:""),subtitle:"Sky movies",type:"secondary"}),Object(x.jsxs)("div",{className:fe.a.List__cards,children:[v.loading&&Object(x.jsx)(X,{}),v.content.length>0&&Object(x.jsx)(V,{movies:v.content})]})]})},he=n(8),xe=n.n(he),ge=function(){var e=Object(a.useState)({loading:!0,content:[]}),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)({loading:!0,content:{}}),i=Object(u.a)(o,2),r=i[0],l=i[1],_=Object(a.useState)(!1),d=Object(u.a)(_,2),j=d[0],b=d[1],v=Object(s.g)().id;Object(a.useEffect)((function(){ae().then((function(e){e.data.find((function(e){return e.id===Number(v)}))&&b(!0)})).catch((function(e){console.error(e.response)}))}),[v,j]),Object(a.useEffect)((function(){(function(e){return H.get("/movies/".concat(e))})(v).then((function(e){l({loading:!1,content:e.data})})).catch((function(e){console.log(e.response)})),R().then((function(e){c({loading:!1,content:e.data})})).catch((function(e){console.log(e.response)}))}),[v]);return Object(x.jsxs)("div",{className:xe.a.Movie,children:[Object(x.jsxs)("div",{className:xe.a.Cover,children:[Object(x.jsxs)("div",{className:xe.a.Cover__information,children:[Object(x.jsx)("div",{className:xe.a.Cover__title,children:r.content.title}),Object(x.jsxs)("div",{className:xe.a.Cover__data,children:[Object(x.jsx)("span",{children:r.content.year}),Object(x.jsx)("span",{children:r.content.rating})]})]}),Object(x.jsx)("div",{className:xe.a.Cover__layer}),r.content.trailer&&Object(x.jsx)("img",{src:U(r.content.trailer),alt:"Cover"})]}),Object(x.jsxs)("div",{className:xe.a.Movie__wrapper,children:[Object(x.jsx)("div",{className:xe.a.Movie__description,children:r.content.description}),Object(x.jsxs)("div",{className:xe.a.Movie__actions,children:[r.content.trailer&&Object(x.jsx)(ne,{label:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c",type:"dark",onClick:function(){window.open(r.content.trailer,"_blank")}}),L("AccessToken")&&Object(x.jsx)(ne,{label:j?"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",type:"dark",onClick:function(){var e;j?(e=v,H.delete("/favorites/movies/".concat(e))).then((function(){b(!1)})).catch((function(e){ce(e),console.error(e.response)})):function(e){return H.post("/favorites/movies/".concat(e))}(v).then((function(){b(!0)})).catch((function(e){ce(e),console.error(e.response)}))}})]}),Object(x.jsxs)("div",{className:xe.a.Movie__selection,children:[Object(x.jsx)(k,{label:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u044b"}),Object(x.jsx)(V,{movies:n.content.filter((function(e){return e.genre.id===r.content.genre.id})),limit:4})]})]})]})},me=n(9),Ce=n.n(me),ke=function(){var e=Object(s.f)(),t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],o=n[1],i=function(){o(!c)};return Object(x.jsxs)("div",{className:Ce.a.Menu,children:[Object(x.jsx)("div",{className:Ce.a.Menu__button,onClick:i,children:Object(x.jsx)("span",{})}),Object(x.jsx)("div",{className:Ce.a.Menu__back,onClick:function(){return e(-1)},children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",children:Object(x.jsx)("path",{d:"M16.9786 7.26392H4.80856L10.3936 1.67892L8.97856 0.263916L0.978561 8.26392L8.97856 16.2639L10.3936 14.8489L4.80856 9.26392H16.9786V7.26392Z",fill:"white"})})}),c&&Object(x.jsxs)("div",{className:Ce.a.Menu__panel,children:[Object(x.jsx)(r.b,{onClick:i,className:Ce.a.Menu__link,to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),L("AccessToken")&&Object(x.jsx)(r.b,{onClick:i,className:Ce.a.Menu__link,to:"/profile",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),L("AccessToken")&&Object(x.jsx)(r.b,{onClick:i,className:Ce.a.Menu__link,to:"/favorites",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),L("AccessToken")&&Object(x.jsx)(r.b,{onClick:function(){o(!1),S("AccessToken"),S("RefreshToken")},className:Ce.a.Menu__link,to:"/login",children:"\u0412\u044b\u0445\u043e\u0434"}),!L("AccessToken")&&Object(x.jsx)(r.b,{onClick:i,className:Ce.a.Menu__link,to:"/login",children:"\u0412\u0445\u043e\u0434"}),!L("AccessToken")&&Object(x.jsx)(r.b,{onClick:i,className:Ce.a.Menu__link,to:"/register",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})};var Me=function(){return Object(x.jsx)(r.a,{basename:"",children:Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("div",{className:"App__wrapper",children:[Object(x.jsx)(ke,{}),Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/",element:Object(x.jsx)(G,{})}),Object(x.jsx)(s.a,{path:"/login",element:Object(x.jsx)(ve,{})}),Object(x.jsx)(s.a,{path:"/register",element:Object(x.jsx)(ue,{})}),Object(x.jsx)(s.a,{path:"/profile",element:Object(x.jsx)(oe,{})}),Object(x.jsx)(s.a,{path:"/favorites",element:Object(x.jsx)(Oe,{title:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",type:"favorites"})}),Object(x.jsx)(s.a,{path:"/genre/:id",element:Object(x.jsx)(Oe,{title:"\u0416\u0430\u043d\u0440",type:"genre"})}),Object(x.jsx)(s.a,{path:"/director/:id",element:Object(x.jsx)(Oe,{title:"\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440",type:"director"})}),Object(x.jsx)(s.a,{path:"/playlist/:id",element:Object(x.jsx)(Oe,{title:"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442",type:"playlist"})}),Object(x.jsx)(s.a,{path:"/movie/:id",element:Object(x.jsx)(ge,{})})]})]})})})};i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(Me,{})}),document.getElementById("root"))}],[[68,1,2]]]);
//# sourceMappingURL=main.7ed3abbf.chunk.js.map