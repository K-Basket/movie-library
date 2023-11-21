"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[666],{8666:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var i,a,o,r,s,l,c,p=t(9439),h=t(7689),g=t(1087),d=t(168),m=t(5867),x=t(3153),f=t(7764),u=m.ZP.h2(i||(i=(0,d.Z)(["\n  margin-bottom: 10px;\n  font-size: 17px;\n  line-height: calc(19 / 17);\n  font-weight: 500;\n  color: ",";\n\n  & span {\n    color: ",";\n  }\n\n  @media "," {\n    margin-bottom: 12px;\n    font-size: 21px;\n    line-height: calc(24 / 21);\n  }\n\n  @media "," {\n    margin-bottom: 15px;\n    font-size: 26px;\n    line-height: calc(30 / 26);\n  }\n"])),x.FT,x.Ag,x.Uh.tablet,x.Uh.desktop),b=m.ZP.ul(a||(a=(0,d.Z)(["\n  @media "," {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    margin-top: -","px;\n    margin-left: -","px;\n    margin-bottom: 35px;\n  }\n\n  @media "," {\n    margin-top: -","px;\n    margin-left: -","px;\n    margin-bottom: 50px;\n  }\n"])),x.Uh.tablet,23,18,x.Uh.desktop,30,20),v=m.ZP.li(o||(o=(0,d.Z)(["\n  margin-bottom: 30px;\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n    margin-bottom: 0px;\n    transition: scale ",";\n    cursor: pointer;\n\n    &:hover {\n      scale: 1.007;\n    }\n  }\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n  }\n"])),x.Uh.tablet,3,18,23,18,x.eR,x.Uh.desktop,4,20,30,20),j=m.ZP.article(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  box-shadow: ",";\n  border-radius: 10px;\n  overflow: hidden;\n"])),x.AF),k=m.ZP.div(s||(s=(0,d.Z)(["\n  position: relative;\n  & img {\n    height: 660px;\n  }\n\n  @media "," {\n    & img {\n      height: 346px;\n    }\n  }\n\n  @media "," {\n    & img {\n      height: 445px;\n    }\n  }\n"])),x.Uh.tablet,x.Uh.desktop),w=m.ZP.div(l||(l=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding: 10px;\n\n  & h2 {\n    font-size: 12px;\n    font-weight: 500;\n    text-transform: uppercase;\n\n    color: ",";\n\n    @media "," {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: calc(19 / 16);\n    }\n  }\n\n  & p {\n    font-size: 12px;\n    font-weight: 500;\n    line-height: calc(16 / 12);\n\n    color: ",";\n\n    @media "," {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: calc(19 / 16);\n    }\n  }\n"])),x.FT,x.Uh.desktop,x.Ag,x.Uh.desktop),P=(0,m.ZP)(f.zx)(c||(c=(0,d.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n"]))),Z=t(7619),y=t(2791),U=t(184),z=function(n){var e=n.dataMovies,t=n.page,i=n.setPage,a=n.title,o=n.createGenres,r=(0,h.TH)(),s=(0,Z.DH)().data,l=a.split(" "),c=l.pop(),d=(0,y.useRef)();(0,y.useEffect)((function(){if(t>1){var n=d.current.getBoundingClientRect().height;window.scrollBy({top:1.2*n,behavior:"smooth"})}}),[e,t]);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(u,{children:["".concat(l.join(" ")," "),(0,U.jsx)("span",{children:c})]}),(0,U.jsx)(b,{children:e&&e.map((function(n){var e=n.id,t=n.poster_path,i=n.title,a=n.release_date,l=n.genre_ids,c="https://image.tmdb.org/t/p/w500".concat(null!==t&&void 0!==t?t:"/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg"),h=a.split("-"),m=(0,p.Z)(h,1)[0],x=o(s,l);return(0,U.jsx)(v,{ref:d,children:(0,U.jsx)(g.rU,{to:"movies/id",state:{from:r},children:(0,U.jsxs)(j,{children:[(0,U.jsx)(k,{children:(0,U.jsx)("img",{src:c,alt:i})}),(0,U.jsxs)(w,{children:[(0,U.jsx)("h2",{children:i}),(0,U.jsx)("p",{children:"".concat(x," | ").concat(m)})]})]})})},e)}))}),(0,U.jsx)(P,{$active:!0,onClick:function(){return i((function(n){return n+1}))},children:"load more"})]})},F=function(n,e){if(n){var t=n.genres.filter((function(n){var t=n.id;return e.includes(t)})).map((function(n){return n.name}));return t.length?t.length>2?"".concat(t.slice(0,2).join(", ")," ..."):t.join(", "):"No genres"}},W=t(2968),A=function(){var n=(0,W.k)(),e=n.isActiveBtn,t=n.moviesTrendWeek,i=n.moviesTrendDay,a=n.pageWeek,o=n.setPageWeek,r=n.pageDay,s=n.setPageDay;return(0,U.jsxs)(U.Fragment,{children:[e&&(0,U.jsx)(z,{title:"Popular films of the Week",dataMovies:t,page:a,setPage:o,createGenres:F}),!e&&(0,U.jsx)(z,{title:"Popular films of the Day",dataMovies:i,page:r,setPage:s,createGenres:F})]})}}}]);
//# sourceMappingURL=666.f551dcdb.chunk.js.map