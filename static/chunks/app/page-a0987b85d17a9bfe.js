(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8427:function(e,r,t){Promise.resolve().then(t.bind(t,9022))},9022:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return N}});var o=t(7437),s=t(2265),a=t(1266),l=t(9806),n=t(1326),i=t(335),c=t(511),d=t(8608),x=t(6760),h=t(6563),g=t(2436),p=t(2420),u=t(6648),f={src:"/_next/static/media/logo-circle-green.29478a96.svg",height:40,width:40,blurWidth:0,blurHeight:0},m=()=>(0,o.jsx)(a.Z,{position:"static",sx:{boxShadow:"0 2px 4px rgba(0,0,0,0.1)",backgroundColor:"#f8f8f8",borderBottom:"2px solid #e0e0e0",padding:{xs:"0 16px",sm:"0 32px",md:"0 64px"}},children:(0,o.jsxs)(l.Z,{sx:{justifyContent:"space-between",flexWrap:"nowrap"},children:[(0,o.jsxs)(n.Z,{display:"flex",alignItems:"center",children:[(0,o.jsx)(i.Z,{edge:"start",color:"inherit","aria-label":"menu",sx:{color:"black"},children:(0,o.jsx)(x.Z,{})}),(0,o.jsx)(u.default,{src:f,alt:"Logo",height:30}),(0,o.jsxs)(n.Z,{display:"flex",alignItems:"center",ml:2,sx:{color:"black",display:{xs:"none",sm:"flex"}},children:[(0,o.jsx)(h.Z,{}),(0,o.jsx)(c.Z,{variant:"body1",ml:1,children:"Ibadan"})]})]}),(0,o.jsxs)(n.Z,{sx:{position:"relative",borderRadius:"25px",backgroundColor:"#f1f1f1",width:{xs:"100%",sm:"auto"},maxWidth:"500px",height:"40px",mt:{xs:2,sm:0},mb:{xs:2,sm:0},flexGrow:1},children:[(0,o.jsx)("div",{style:{padding:"0 10px",height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",color:"gray"},children:(0,o.jsx)(g.Z,{})}),(0,o.jsx)(d.ZP,{placeholder:"Search restaurant or food",inputProps:{"aria-label":"search"},sx:{paddingLeft:"40px",width:"100%",height:"100%",display:"flex",alignItems:"center"}})]}),(0,o.jsxs)(n.Z,{display:"flex",alignItems:"center",children:[(0,o.jsx)(i.Z,{color:"inherit",sx:{color:"black",padding:"3px 28px",borderRadius:"5px"},children:(0,o.jsx)(c.Z,{variant:"body1",children:"SIGN IN"})}),(0,o.jsxs)(n.Z,{display:"flex",alignItems:"center",bgcolor:"black",borderRadius:"25px",px:2,py:1,sx:{color:"white",marginLeft:2},children:[(0,o.jsx)(p.Z,{}),(0,o.jsx)(c.Z,{variant:"body1",sx:{marginLeft:1},children:"Cart"}),(0,o.jsx)(c.Z,{variant:"body1",sx:{marginLeft:1,marginRight:1},children:"."}),(0,o.jsx)(c.Z,{variant:"body1",sx:{marginLeft:1},children:"4"})]})]})]})}),b=t(3600),j=t(7397),y=()=>{let[e,r]=(0,s.useState)("restaurant");return(0,o.jsxs)(n.Z,{sx:{backgroundColor:"#f8f8f8",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",padding:"16px 64px",display:"flex",alignItems:"center",borderBottom:"1px solid #e0e0e0",height:"100px"},children:[(0,o.jsxs)(i.Z,{onClick:()=>r("restaurant"),sx:{display:"flex",alignItems:"center",bgcolor:"restaurant"===e?"black":"transparent",borderRadius:"40px",padding:"16px 32px",color:"restaurant"===e?"white":"black",marginRight:"16px","&:hover":{bgcolor:"black",color:"white"}},"aria-label":"Restaurant category",children:[(0,o.jsx)(b.Z,{}),(0,o.jsx)(c.Z,{variant:"body1",sx:{marginLeft:"8px"},children:"Restaurant"})]}),(0,o.jsxs)(i.Z,{onClick:()=>r("groceries"),sx:{display:"flex",alignItems:"center",bgcolor:"groceries"===e?"black":"transparent",borderRadius:"40px",padding:"16px 32px",color:"groceries"===e?"white":"black","&:hover":{bgcolor:"black",color:"white"}},"aria-label":"Groceries category",children:[(0,o.jsx)(j.Z,{}),(0,o.jsx)(c.Z,{variant:"body1",sx:{marginLeft:"8px"},children:"Groceries"})]})]})};let Z=e=>{let{category:r}=e;return(0,o.jsxs)(n.Z,{sx:{minWidth:100,height:100,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:2,backgroundColor:"white",borderRadius:1,flexShrink:0},children:[(0,o.jsx)(n.Z,{sx:{width:"100%",height:"80%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(u.default,{src:r.image,alt:r.name,layout:"intrinsic",width:60,height:60,style:{objectFit:"contain"}})}),(0,o.jsx)(c.Z,{variant:"body1",sx:{marginTop:1,textAlign:"center",color:"black",width:"100%"},children:r.name})]})};var k=()=>{let[e,r]=(0,s.useState)([]);return(0,s.useEffect)(()=>{fetch("https://heayfoodtestb.onrender.com/api/v1/category").then(e=>e.json()).then(e=>r(e)).catch(e=>console.error("Error fetching categories:",e))},[]),(0,o.jsx)(n.Z,{sx:{display:"flex",overflowX:"auto",padding:2,backgroundColor:"white","&::-webkit-scrollbar":{display:"none"}},children:e.map(e=>(0,o.jsx)(Z,{category:e},e._id))})},v=t(1225),w=t(1948);let C=["/images/image1.jpg","/images/image2.jpg","/images/image3.jpg","/images/image4.jpg"];var D=()=>{let e=(0,s.useRef)(null);return(0,o.jsxs)(n.Z,{sx:{position:"relative",display:"flex",alignItems:"center",overflow:"hidden",backgroundColor:"white",height:"calc((100vw / 3) * (100 / 220))",padding:"0 40px"},children:[(0,o.jsx)(i.Z,{onClick:()=>{e.current&&e.current.scrollBy({left:-e.current.offsetWidth,behavior:"smooth"})},sx:{position:"absolute",left:10,zIndex:1,backgroundColor:"lightgray",color:"black","&:hover":{backgroundColor:"gray"}},children:(0,o.jsx)(v.Z,{})}),(0,o.jsx)(n.Z,{ref:e,sx:{display:"flex",overflowX:"scroll",scrollSnapType:"x mandatory","&::-webkit-scrollbar":{display:"none"},gap:4,width:"100%",paddingLeft:"20px"},children:C.map((e,r)=>(0,o.jsx)(n.Z,{sx:{flex:"0 0 30%",height:"calc((100vw / 3) * (80 / 220))",borderRadius:2,overflow:"hidden",scrollSnapAlign:"center",position:"relative",cursor:"pointer"},onClick:()=>{console.log("Clicked on image ".concat(r))},children:(0,o.jsx)(u.default,{src:e,alt:"Carousel image ".concat(r+1),layout:"fill",objectFit:"cover"})},r))}),(0,o.jsx)(i.Z,{onClick:()=>{e.current&&e.current.scrollBy({left:e.current.offsetWidth,behavior:"smooth"})},sx:{position:"absolute",right:10,zIndex:1,backgroundColor:"lightgray",color:"black","&:hover":{backgroundColor:"gray"}},children:(0,o.jsx)(w.Z,{})})]})},R=t(1068),S=t(5786),I=t(8472);let E=s.createContext(),B=[{name:"FREE DRINKS",url:"https://heayfoodtestb.onrender.com/api/v1/stores"},{name:"Amala Hotspot \uD83D\uDD25",url:"https://heayfoodtestb.onrender.com/api/v1/stores?category=Amala Hotspot \uD83D\uDD25"},{name:"Hand Picked for you!\uD83D\uDE0B",url:"https://heayfoodtestb.onrender.com/api/v1/stores?category=Hand Picked for you!\uD83D\uDE0B"},{name:"Promos 4 You! \uD83D\uDE0D",url:"https://heayfoodtestb.onrender.com/api/v1/stores?category=Promos 4 You! \uD83D\uDE0D"},{name:"Finger Foods\uD83C\uDF55\uD83E\uDD6F",url:"https://heayfoodtestb.onrender.com/api/v1/stores?category=Finger Foods\uD83C\uDF55\uD83E\uDD6F"},{name:"Grocery Stores",url:"https://heayfoodtestb.onrender.com/api/v1/stores?category=Grocery Stores"},{name:"All Restaurants",url:"https://heayfoodtestb.onrender.com/api/v1/stores?category=All Restaurants"}],A=["Most Popular","Nearest","Highest rated","Newest","Most Rated"],F=e=>{let{category:r,stores:t,showAll:a,onSeeAll:l,onBack:d,scrollLeft:x,scrollRight:h}=e,g=(0,s.useRef)(null);return(0,o.jsxs)(n.Z,{sx:{marginBottom:4},children:[(0,o.jsxs)(n.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:2},children:[(0,o.jsx)(c.Z,{variant:"h6",sx:{color:"black",fontSize:{xs:"1rem",md:"1.5rem"}},children:r}),a?(0,o.jsx)(c.Z,{variant:"h6",sx:{marginRight:2,color:"black",cursor:"pointer",fontSize:{xs:"0.875rem",md:"1rem"}},onClick:d,children:"Back"}):(0,o.jsxs)(n.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,o.jsx)(c.Z,{variant:"h6",sx:{marginRight:2,color:"black",cursor:"pointer",fontSize:{xs:"0.875rem",md:"1rem"}},onClick:()=>l(r),children:"See All"}),(0,o.jsx)(i.Z,{onClick:()=>x(),sx:{backgroundColor:"#f0f0f0",color:"black",borderRadius:"50%",marginRight:1,"&:hover":{backgroundColor:"#e0e0e0"}},children:(0,o.jsx)(v.Z,{})}),(0,o.jsx)(i.Z,{onClick:()=>h(),sx:{backgroundColor:"#f0f0f0",color:"black",borderRadius:"50%","&:hover":{backgroundColor:"#e0e0e0"}},children:(0,o.jsx)(w.Z,{})})]})]}),a?(0,o.jsx)(n.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},gap:2},children:t.map(e=>(0,o.jsx)(L,{store:e},e._id))}):(0,o.jsx)(n.Z,{ref:g,sx:{display:"flex",overflowX:"scroll",scrollSnapType:"x mandatory",paddingBottom:2,gap:2},children:t.map(e=>(0,o.jsx)(L,{store:e},e._id))})]})},L=e=>{let{store:r}=e;return(0,o.jsxs)(n.Z,{sx:{position:"relative",flex:{xs:"0 0 calc(50% - 8px)",md:"0 0 calc(25% - 8px)"},height:{xs:"calc((100vw / 4) * (240 / 220))",md:"calc((100vw / 4) * (120 / 220))"},borderRadius:2,overflow:"hidden",scrollSnapAlign:"center",cursor:"pointer",marginBottom:2,marginRight:2},children:[(0,o.jsx)(u.default,{src:r.image,alt:r.name,layout:"fill",objectFit:"cover"}),(0,o.jsx)(n.Z,{sx:{position:"absolute",bottom:35,left:15,backgroundColor:"orange",color:"white",padding:"2px 8px",borderRadius:1},children:(0,o.jsx)(c.Z,{variant:"caption",children:"Opens at ".concat(r.openingTime)})}),(0,o.jsx)(c.Z,{variant:"body2",sx:{position:"absolute",bottom:0,backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",width:"100%",textAlign:"center",padding:"4px 0"},children:r.name})]})},_=e=>{let{stores:r}=e;return(0,o.jsx)(n.Z,{sx:{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",md:"repeat(4, 1fr)"},gap:2},children:r.map(e=>(0,o.jsx)(L,{store:e},e._id))})};var P=()=>{let[e,r]=(0,s.useState)([]),[t,a]=(0,s.useState)(null),[l,i]=(0,s.useState)([]),{searchTerm:d}=(0,s.useContext)(E)||{};(0,s.useEffect)(()=>{(async()=>{let e=B.map(e=>x(e));r(await Promise.all(e))})()},[]),(0,s.useEffect)(()=>{(async()=>{if(d){console.log(d);try{let e=await I.Z.get("https://heayfoodtestb.onrender.com/api/v1/stores/search/".concat(d));i(e.data)}catch(e){console.error("Error fetching search results:",e),i([])}}else i([])})()},[d]);let x=async e=>{try{let r=await I.Z.get(e.url);return{title:e.name,content:r.data}}catch(r){return console.error("Error fetching stores for ".concat(e.name,":"),r),{title:e.name,content:[]}}},h=e=>{a(e)},g=e=>{e.current&&e.current.scrollBy({left:-e.current.offsetWidth,behavior:"smooth"})},p=e=>{e.current&&e.current.scrollBy({left:e.current.offsetWidth,behavior:"smooth"})};return(0,o.jsxs)(n.Z,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},backgroundColor:"white"},children:[(0,o.jsxs)(n.Z,{sx:{display:{xs:"none",md:"block"},position:"sticky",top:0,alignSelf:"flex-start",width:"25%",padding:2,borderRight:"1px solid #ccc",backgroundColor:"white",height:"100vh",overflowY:"auto"},children:[(0,o.jsx)(c.Z,{variant:"h5",sx:{color:"black"},children:"All Stores"}),(0,o.jsxs)(c.Z,{variant:"h6",sx:{color:"black"},children:["(",e.length," Categories)"]}),(0,o.jsx)(c.Z,{variant:"h6",sx:{color:"black"},mt:2,children:"Sort"}),(0,o.jsx)(n.Z,{sx:{display:"flex",flexDirection:"column"},children:A.map(e=>(0,o.jsx)(R.Z,{control:(0,o.jsx)(S.Z,{}),label:e,sx:{color:"black"}},e))})]}),(0,o.jsx)(n.Z,{sx:{width:{xs:"100%",md:t?"100%":"75%"},padding:2,marginLeft:{xs:0,md:t?0:"10px"}},children:e.length>0?d&&l.length>0?(0,o.jsx)(_,{stores:l}):t?(0,o.jsx)(F,{category:t,stores:e.find(e=>e.title===t).content,showAll:!0,onBack:()=>a(null),scrollLeft:()=>g(scrollRef),scrollRight:()=>p(scrollRef)}):e.map((e,r)=>(0,o.jsx)(F,{category:e.title,stores:e.content,onSeeAll:h},r)):(0,o.jsx)(c.Z,{variant:"body1",sx:{color:"black"},children:"Loading..."})})]})};function N(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(m,{}),(0,o.jsx)(y,{}),(0,o.jsx)(k,{}),(0,o.jsx)(D,{}),(0,o.jsx)(P,{})]})}}},function(e){e.O(0,[632,971,23,744],function(){return e(e.s=8427)}),_N_E=e.O()}]);