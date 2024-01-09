"use strict";(self.webpackChunkmovie_library=self.webpackChunkmovie_library||[]).push([[489],{489:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var i,o,r,a,s,l,c,d,p=t(9439),h=t(2791),g=t(7689),x=t(1087),f=t(168),m=t(5867),u=t(3153),v=t(7764),b=m.ZP.h2(i||(i=(0,f.Z)(["\n  margin-bottom: 10px;\n  font-size: 17px;\n  line-height: calc(19 / 17);\n  font-weight: 500;\n  color: ",";\n\n  & span {\n    color: ",";\n  }\n\n  @media "," {\n    margin-bottom: 12px;\n    font-size: 21px;\n    line-height: calc(24 / 21);\n  }\n\n  @media "," {\n    margin-bottom: 15px;\n    font-size: 26px;\n    line-height: calc(30 / 26);\n  }\n"])),u.FT,u.Ag,u.Uh.tablet,u.Uh.desktop),j=m.ZP.ul(o||(o=(0,f.Z)(["\n  @media "," {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n\n    margin-top: -","px;\n    margin-left: -","px;\n    margin-bottom: 35px;\n  }\n\n  @media "," {\n    margin-top: -","px;\n    margin-left: -","px;\n    margin-bottom: 50px;\n  }\n"])),u.Uh.tablet,23,18,u.Uh.desktop,30,20),w=m.ZP.li(r||(r=(0,f.Z)(["\n  margin-bottom: 30px;\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n    margin-bottom: 0px;\n    transition: scale ",";\n    cursor: pointer;\n\n    &:hover {\n      scale: 1.007;\n    }\n  }\n\n  @media "," {\n    flex-basis: calc(100% / "," - ","px);\n    margin-top: ","px;\n    margin-left: ","px;\n  }\n"])),u.Uh.tablet,3,18,23,18,u.eR,u.Uh.desktop,4,20,30,20),k=m.ZP.article(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n\n  box-shadow: ",";\n  border-radius: 10px;\n  overflow: hidden;\n"])),u.AF),y=m.ZP.div(s||(s=(0,f.Z)(["\n  position: relative;\n\n  & img {\n    height: 660px;\n  }\n\n  @media "," {\n    & img {\n      height: 346px;\n    }\n  }\n\n  @media "," {\n    & img {\n      height: 445px;\n    }\n  }\n"])),u.Uh.tablet,u.Uh.desktop),Z=m.ZP.div(l||(l=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  padding: 10px;\n\n  & h2 {\n    font-size: 12px;\n    font-weight: 500;\n    text-transform: uppercase;\n\n    color: ",";\n\n    @media "," {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: calc(19 / 16);\n    }\n  }\n\n  & p {\n    font-size: 12px;\n    font-weight: 500;\n    line-height: calc(16 / 12);\n\n    color: ",";\n\n    @media "," {\n      font-size: 16px;\n      font-weight: 500;\n      line-height: calc(19 / 16);\n    }\n  }\n"])),u.FT,u.Uh.desktop,u.Ag,u.Uh.desktop),P=(0,m.ZP)(v.zx)(c||(c=(0,f.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n"]))),U=t(7619),T=t(184),z=function(n){var e=n.dataMovies,t=n.isLoading,i=n.error,o=n.setPage,r=n.title,a=n.createGenres,s=n.route,l=(0,g.TH)(),c=(0,U.DH)().data,d=(0,h.useRef)();return t&&!i?(0,T.jsx)("h1",{style:{fontSize:"30px",color:"salmon"},children:"...loading..."}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(b,{children:[r[0],(0,T.jsx)("span",{children:" ".concat(r[1])})]}),(0,T.jsx)(j,{children:e&&e.map((function(n){var e=n.id,t=n.poster_path,i=n.title,o=n.release_date,r=n.genre_ids,h="https://image.tmdb.org/t/p/w500".concat(null!==t&&void 0!==t?t:"/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg"),g=o.split("-"),f=(0,p.Z)(g,1)[0],m=a(c,r);return(0,T.jsx)(w,{ref:d,children:(0,T.jsx)(x.rU,{to:"".concat(s).concat(e),state:{from:l},children:(0,T.jsxs)(k,{children:[(0,T.jsx)(y,{children:(0,T.jsx)("img",{src:h,alt:i})}),(0,T.jsxs)(Z,{children:[(0,T.jsx)("h2",{children:i}),(0,T.jsx)("p",{children:"".concat(m," | ").concat(f)})]})]})})},e)}))}),(0,T.jsx)(P,{$active:!0,onClick:function(){o((function(n){return n+1})),setTimeout((function(){var n=d.current.getBoundingClientRect().height;window.scrollBy({top:1.2*n,behavior:"smooth"})}),250)},children:"load more"})]})},L=t(6094),W=t(2968),A=t(7609),C=m.ZP.button(d||(d=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  bottom: 3%;\n  right: 2%;\n\n  padding: 10px;\n  border: none;\n  border-radius: 100%;\n  fill: ",";\n  background-color: ",";\n"])),u.zQ,u.Ag),D=function(){return(0,T.jsx)(C,{onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:(0,T.jsx)("svg",{width:"20px",height:"20px",children:(0,T.jsx)("use",{href:"".concat(A.Z,"#icon-arrow-up2")})})})},F=function(){var n=(0,W.k)(),e=n.isActiveBtn,t=n.moviesTrendWeek,i=n.moviesTrendDay,o=n.setPageWeek,r=n.isLoadingTrendWeek,a=n.errorTrendWeek,s=n.setPageDay,l=n.isLoadingTrendDay,c=n.errorTrendDay,d=(0,h.useRef)(),g=(0,h.useState)(),x=(0,p.Z)(g,2),f=x[0],m=x[1];return(0,h.useEffect)((function(){var n=function(){var n=d.current.getBoundingClientRect().top;m(n)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]),(0,T.jsxs)("div",{ref:d,children:[(0,T.jsx)(z,{title:"Search result for your Query",dataMovies:i,isLoading:l,error:c,setPage:s,createGenres:L.e,route:"movies/"}),e&&(0,T.jsx)(z,{title:"Popular films of the Week",dataMovies:t,isLoading:r,error:a,setPage:o,createGenres:L.e,route:"movies/"}),!e&&(0,T.jsx)(z,{title:"Popular films of the Day",dataMovies:i,isLoading:l,error:c,setPage:s,createGenres:L.e,route:"movies/"}),f<0&&(0,T.jsx)(D,{})]})}}}]);
//# sourceMappingURL=489.e46aa1c2.chunk.js.map