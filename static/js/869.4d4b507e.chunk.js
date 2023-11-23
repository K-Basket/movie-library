"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[869],{5869:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var i,o,r,a,s,c,l,p,d=t(9439),h=t(7689),f=t(1087),g=t(168),x=t(5867),m=t(3153),u=t(7764),v=x.ZP.h2(i||(i=(0,g.Z)(["\n  margin-bottom: 10px;\n  font-size: 17px;\n  line-height: calc(19 / 17);\n  font-weight: 500;\n  color: ",";\n\n  & span {\n    color: ",";\n  }\n\n  @media "," {\n    margin-bottom: 12px;\n    font-size: 21px;\n    line-height: calc(24 / 21);\n  }\n\n  @media "," {\n    margin-bottom: 15px;\n    font-size: 26px;\n    line-height: calc(30 / 26);\n  }\n"])),m.FT,m.Ag,m.Uh.tablet,m.Uh.desktop),b=x.ZP.ul(o||(o=(0,g.Z)(["\n  @media "," {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    margin-top: -","px;\n    margin-left: -","px;\n    margin-bottom: 35px;\n  }\n\n  @media "," {\n    margin-top: -","px;\n    margin-left: -","px;\n    margin-bottom: 50px;\n  }\n"])),m.Uh.tablet,23,18,m.Uh.desktop,30,20),j=x.ZP.li(r||(r=(0,g.Z)(["\n  margin-bottom: 30px;\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n    margin-bottom: 0px;\n    transition: scale ",";\n    cursor: pointer;\n\n    &:hover {\n      scale: 1.007;\n    }\n  }\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n  }\n"])),m.Uh.tablet,3,18,23,18,m.eR,m.Uh.desktop,4,20,30,20),w=x.ZP.article(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  box-shadow: ",";\n  border-radius: 10px;\n  overflow: hidden;\n"])),m.AF),k=x.ZP.div(s||(s=(0,g.Z)(["\n  position: relative;\n  & img {\n    height: 660px;\n  }\n\n  @media "," {\n    & img {\n      height: 346px;\n    }\n  }\n\n  @media "," {\n    & img {\n      height: 445px;\n    }\n  }\n"])),m.Uh.tablet,m.Uh.desktop),Z=x.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding: 10px;\n\n  & h2 {\n    font-size: 12px;\n    font-weight: 500;\n    text-transform: uppercase;\n\n    color: ",";\n\n    @media "," {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: calc(19 / 16);\n    }\n  }\n\n  & p {\n    font-size: 12px;\n    font-weight: 500;\n    line-height: calc(16 / 12);\n\n    color: ",";\n\n    @media "," {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: calc(19 / 16);\n    }\n  }\n"])),m.FT,m.Uh.desktop,m.Ag,m.Uh.desktop),P=(0,x.ZP)(u.zx)(l||(l=(0,g.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n"]))),y=t(7619),U=t(2791),z=t(184),T=function(n){var e=n.dataMovies,t=n.setPage,i=n.title,o=n.createGenres,r=n.route,a=(0,h.TH)(),s=(0,y.DH)().data,c=i.split(" "),l=c.pop(),p=(0,U.useRef)();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(v,{children:["".concat(c.join(" ")," "),(0,z.jsx)("span",{children:l})]}),(0,z.jsx)(b,{children:e&&e.map((function(n){var e=n.id,t=n.poster_path,i=n.title,c=n.release_date,l=n.genre_ids,h="https://image.tmdb.org/t/p/w500".concat(null!==t&&void 0!==t?t:"/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg"),g=c.split("-"),x=(0,d.Z)(g,1)[0],m=o(s,l);return(0,z.jsx)(j,{ref:p,children:(0,z.jsx)(f.rU,{to:"".concat(r).concat(e),state:{from:a},children:(0,z.jsxs)(w,{children:[(0,z.jsx)(k,{children:(0,z.jsx)("img",{src:h,alt:i})}),(0,z.jsxs)(Z,{children:[(0,z.jsx)("h2",{children:i}),(0,z.jsx)("p",{children:"".concat(m," | ").concat(x)})]})]})})},e)}))}),(0,z.jsx)(P,{$active:!0,onClick:function(){t((function(n){return n+1})),setTimeout((function(){var n=p.current.getBoundingClientRect().height;window.scrollBy({top:1.2*n,behavior:"smooth"})}),250)},children:"load more"})]})},A=function(n,e){if(n){var t=n.genres.filter((function(n){var t=n.id;return e.includes(t)})).map((function(n){return n.name}));return t.length?t.length>2?"".concat(t.slice(0,2).join(", ")," ..."):t.join(", "):"No genres"}},C=t(2968),F=t(7609),R=x.ZP.button(p||(p=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  bottom: 3%;\n  right: 2%;\n\n  padding: 10px;\n  border: none;\n  border-radius: 100%;\n  fill: ",";\n  background-color: ",";\n"])),m.zQ,m.Ag),W=function(){return(0,z.jsx)(R,{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:(0,z.jsx)("svg",{width:"20px",height:"20px",children:(0,z.jsx)("use",{href:"".concat(F.Z,"#icon-arrow-up2")})})})},_=function(){var n=(0,C.k)(),e=n.isActiveBtn,t=n.moviesTrendWeek,i=n.moviesTrendDay,o=n.setPageWeek,r=n.setPageDay,a=(0,U.useRef)(),s=(0,U.useState)(),c=(0,d.Z)(s,2),l=c[0],p=c[1];return(0,U.useEffect)((function(){var n=function(){var n=a.current.getBoundingClientRect().top;p(n)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),(0,z.jsxs)("div",{ref:a,children:[e&&(0,z.jsx)(T,{title:"Popular films of the Week",dataMovies:t,setPage:o,createGenres:A,route:"movies/"}),!e&&(0,z.jsx)(T,{title:"Popular films of the Day",dataMovies:i,setPage:r,createGenres:A,route:"movies/"}),l<0&&(0,z.jsx)(W,{})]})}}}]);
//# sourceMappingURL=869.4d4b507e.chunk.js.map