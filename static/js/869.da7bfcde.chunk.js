"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[869],{5869:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var i,o,r,a,s,c,l,d,p=t(9439),h=t(7689),g=t(1087),f=t(168),x=t(5867),m=t(3153),u=t(7764),v=x.ZP.h2(i||(i=(0,f.Z)(["\n  margin-bottom: 10px;\n  font-size: 17px;\n  line-height: calc(19 / 17);\n  font-weight: 500;\n  color: ",";\n\n  & span {\n    color: ",";\n  }\n\n  @media "," {\n    margin-bottom: 12px;\n    font-size: 21px;\n    line-height: calc(24 / 21);\n  }\n\n  @media "," {\n    margin-bottom: 15px;\n    font-size: 26px;\n    line-height: calc(30 / 26);\n  }\n"])),m.FT,m.Ag,m.Uh.tablet,m.Uh.desktop),b=x.ZP.ul(o||(o=(0,f.Z)(["\n  @media "," {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    margin-top: -","px;\n    margin-left: -","px;\n    margin-bottom: 35px;\n  }\n\n  @media "," {\n    margin-top: -","px;\n    margin-left: -","px;\n    margin-bottom: 50px;\n  }\n"])),m.Uh.tablet,23,18,m.Uh.desktop,30,20),j=x.ZP.li(r||(r=(0,f.Z)(["\n  margin-bottom: 30px;\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n    margin-bottom: 0px;\n    transition: scale ",";\n    cursor: pointer;\n\n    &:hover {\n      scale: 1.007;\n    }\n  }\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n  }\n"])),m.Uh.tablet,3,18,23,18,m.eR,m.Uh.desktop,4,20,30,20),w=x.ZP.article(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  box-shadow: ",";\n  border-radius: 10px;\n  overflow: hidden;\n"])),m.AF),k=x.ZP.div(s||(s=(0,f.Z)(["\n  position: relative;\n  & img {\n    height: 660px;\n  }\n\n  @media "," {\n    & img {\n      height: 346px;\n    }\n  }\n\n  @media "," {\n    & img {\n      height: 445px;\n    }\n  }\n"])),m.Uh.tablet,m.Uh.desktop),Z=x.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding: 10px;\n\n  & h2 {\n    font-size: 12px;\n    font-weight: 500;\n    text-transform: uppercase;\n\n    color: ",";\n\n    @media "," {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: calc(19 / 16);\n    }\n  }\n\n  & p {\n    font-size: 12px;\n    font-weight: 500;\n    line-height: calc(16 / 12);\n\n    color: ",";\n\n    @media "," {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: calc(19 / 16);\n    }\n  }\n"])),m.FT,m.Uh.desktop,m.Ag,m.Uh.desktop),y=(0,x.ZP)(u.zx)(l||(l=(0,f.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n"]))),P=t(7619),U=t(2791),T=t(184),z=function(n){var e=n.dataMovies,t=n.isLoading,i=n.error,o=n.setPage,r=n.title,a=n.createGenres,s=n.route,c=(0,h.TH)(),l=(0,P.DH)().data,d=r.split(" "),f=d.pop(),x=(0,U.useRef)();return t&&!i?(0,T.jsx)("h1",{style:{fontSize:"30px",color:"salmon"},children:"...loading..."}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(v,{children:["".concat(d.join(" ")," "),(0,T.jsx)("span",{children:f})]}),(0,T.jsx)(b,{children:e&&e.map((function(n){var e=n.id,t=n.poster_path,i=n.title,o=n.release_date,r=n.genre_ids,d="https://image.tmdb.org/t/p/w500".concat(null!==t&&void 0!==t?t:"/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg"),h=o.split("-"),f=(0,p.Z)(h,1)[0],m=a(l,r);return(0,T.jsx)(j,{ref:x,children:(0,T.jsx)(g.rU,{to:"".concat(s).concat(e),state:{from:c},children:(0,T.jsxs)(w,{children:[(0,T.jsx)(k,{children:(0,T.jsx)("img",{src:d,alt:i})}),(0,T.jsxs)(Z,{children:[(0,T.jsx)("h2",{children:i}),(0,T.jsx)("p",{children:"".concat(m," | ").concat(f)})]})]})})},e)}))}),(0,T.jsx)(y,{$active:!0,onClick:function(){o((function(n){return n+1})),setTimeout((function(){var n=x.current.getBoundingClientRect().height;window.scrollBy({top:1.2*n,behavior:"smooth"})}),250)},children:"load more"})]})},L=function(n,e){if(n){var t=n.genres.filter((function(n){var t=n.id;return e.includes(t)})).map((function(n){return n.name}));return t.length?t.length>2?"".concat(t.slice(0,2).join(", ")," ..."):t.join(", "):"No genres"}},W=t(2968),A=t(7609),C=x.ZP.button(d||(d=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  bottom: 3%;\n  right: 2%;\n\n  padding: 10px;\n  border: none;\n  border-radius: 100%;\n  fill: ",";\n  background-color: ",";\n"])),m.zQ,m.Ag),D=function(){return(0,T.jsx)(C,{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:(0,T.jsx)("svg",{width:"20px",height:"20px",children:(0,T.jsx)("use",{href:"".concat(A.Z,"#icon-arrow-up2")})})})},F=function(){var n=(0,W.k)(),e=n.isActiveBtn,t=n.moviesTrendWeek,i=n.moviesTrendDay,o=n.setPageWeek,r=n.isLoadingTrendWeek,a=n.errorTrendWeek,s=n.setPageDay,c=n.isLoadingTrendDay,l=n.errorTrendDay,d=(0,U.useRef)(),h=(0,U.useState)(),g=(0,p.Z)(h,2),f=g[0],x=g[1];return(0,U.useEffect)((function(){var n=function(){var n=d.current.getBoundingClientRect().top;x(n)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),(0,T.jsxs)("div",{ref:d,children:[e&&(0,T.jsx)(z,{title:"Popular films of the Week",dataMovies:t,isLoading:r,error:a,setPage:o,createGenres:L,route:"movies/"}),!e&&(0,T.jsx)(z,{title:"Popular films of the Day",dataMovies:i,isLoading:c,error:l,setPage:s,createGenres:L,route:"movies/"}),f<0&&(0,T.jsx)(D,{})]})}}}]);
//# sourceMappingURL=869.da7bfcde.chunk.js.map