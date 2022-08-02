(self["webpackChunkspidertech_website"]=self["webpackChunkspidertech_website"]||[]).push([[443],{4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,s,i,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),m=n(8880),g=n(8052),p=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),_=n(9711),I=n(9909),E=I.enforce,x=I.get,T=c.Int8Array,S=T&&T.prototype,D=c.Uint8ClampedArray,C=D&&D.prototype,k=T&&v(T),A=S&&v(S),N=Object.prototype,L=c.TypeError,O=b("toStringTag"),V=_("TYPED_ARRAY_TAG"),R="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),F=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},U=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(P,t)||h(B,t)},q=function(e){var t=v(e);if(l(t)){var n=x(t);return n&&h(n,R)?n[R]:q(t)}},$=function(e){if(!l(e))return!1;var t=d(e);return h(P,t)||h(B,t)},j=function(e){if($(e))return e;throw L("Target is not a typed array")},W=function(e){if(u(e)&&(!w||y(k,e)))return e;throw L(f(e)+" is not a typed array constructor")},G=function(e,t,n,r){if(a){if(n)for(var s in P){var i=c[s];if(i&&h(i.prototype,e))try{delete i.prototype[e]}catch(o){try{i.prototype[e]=t}catch(u){}}}A[e]&&!n||g(A,e,n?t:M&&S[e]||t,r)}},K=function(e,t,n){var r,s;if(a){if(w){if(n)for(r in P)if(s=c[r],s&&h(s,e))try{delete s[e]}catch(i){}if(k[e]&&!n)return;try{return g(k,e,n?t:M&&k[e]||t)}catch(i){}}for(r in P)s=c[r],!s||s[e]&&!n||g(s,e,t)}};for(r in P)s=c[r],i=s&&s.prototype,i?E(i)[R]=s:M=!1;for(r in B)s=c[r],i=s&&s.prototype,i&&(E(i)[R]=s);if((!M||!u(k)||k===Function.prototype)&&(k=function(){throw L("Incorrect invocation")},M))for(r in P)c[r]&&w(c[r],k);if((!M||!A||A===N)&&(A=k.prototype,M))for(r in P)c[r]&&w(c[r].prototype,A);if(M&&v(C)!==A&&w(C,A),a&&!h(A,O))for(r in F=!0,p(A,O,{get:function(){return l(this)?this[V]:void 0}}),P)c[r]&&m(c[r],V,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&V,aTypedArray:j,aTypedArrayConstructor:W,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:q,isView:U,isTypedArray:$,TypedArray:k,TypedArrayPrototype:A}},712:function(e,t,n){var r=n(9974),s=n(8361),i=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,c){var u,l,h=i(n),d=s(h),f=r(a,c),m=o(d);while(m-- >0)if(u=d[m],l=f(u,m,h),l)switch(e){case 0:return u;case 1:return m}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},9974:function(e,t,n){var r=n(1702),s=n(9662),i=n(4374),o=r(r.bind);e.exports=function(e,t){return s(e),void 0===t?e:i?o(e,t):function(){return e.apply(t,arguments)}}},9518:function(e,t,n){var r=n(2597),s=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=i(e);if(r(t,c))return t[c];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},4590:function(e,t,n){var r=n(3002),s=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw s("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),s=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw s("The argument can't be less than 0");return t}},8675:function(e,t,n){"use strict";var r=n(260),s=n(6244),i=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=s(t),r=i(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},2958:function(e,t,n){"use strict";var r=n(260),s=n(712).findLastIndex,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return s(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),s=n(712).findLast,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return s(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),s=n(6916),i=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,m=i.aTypedArray,g=i.exportTypedArrayMethod,p=!u((function(){var e=new Uint8ClampedArray(2);return s(f,e,{length:1,0:3},1),3!==e[1]})),y=p&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));g("set",(function(e){m(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=c(e);if(p)return s(f,this,n,t);var r=this.length,i=o(n),u=0;if(i+t>r)throw l("Wrong length");while(u<i)this[t+u]=n[u++]}),!p||y)},1118:function(e,t,n){n(2958)},7380:function(e,t,n){n(3408)},9832:function(e,t,n){"use strict";n.r(t)},1302:function(e,t,n){"use strict";n.r(t)},2225:function(e,t,n){"use strict";t["Z"]={blog_list:[{post_id:"0",read_time:"5 Min Read",author_name:"Rima Banchhor",author_img:n(4324),date:"25 July 2022",title:"How SEO Service In India Can Help Your Business?",img_url:"https://cdn.pixabay.com/photo/2017/10/15/22/18/seo-2855554_1280.jpg",items:[{type:"img",url:"https://cdn.pixabay.com/photo/2017/10/15/22/18/seo-2855554_1280.jpg",caption:"Photo by <a href='https://pixabay.com/users/xtendo-1194315/' target='_blank'>Xtendo</a> on  <a href='https://pixabay.com/photos/seo-beach-sand-2855554/'  target='_blank'>Pixabay</a>",class_name:"text-right",m_class_name:"text-right"},{type:"heading",title:"How SEO Service In India Can Help Your Business?",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"",text:"Search engine optimization is what helps users find your site—web design is what keeps them there. These two critical digital marketing elements combine to create a strong platform for your online business to grow and find success.<br><br>Website design enhancement administrations are site improvement administrations presented by an office, specialist, or advisor that streamline your webpage for SEO so you can catch additional traffic and income from search. Most SEO plans will remember for page, off-page, and specialized SEO, however some emphasis on unambiguous regions, as off-page SEO. <br><br>In a cutthroat business climate, you really want a methodology that will give you the high ground. By fitting your items, administrations and showcasing procedures around your clients and online clients, you will actually want to contact a more extensive crowd. This is definitively the thing SEO does.\n <br><br>Web optimization administrations in India are an unquestionable requirement for sites to get seen in the in any case rushing about of online space. We're occupied with drawing in guests by producing designated traffic to the site through exposure, income and openness, and making drawing in happy that addresses even the relaxed guests and allows them to tap on the site.\n",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"<br>Developing Your Business with SEO",text:"<br>3.5 billion searches are made every day on Google alone, and with so many competing for top spots in the search results, gaining visibility is key. But it’s through expert keyword research and SEO refinement that your business will earn the visibility it deserves to effectively add to your bottom line. <br><br>By collaborating with a SEO supplier, you have a full group of specialists making progress toward your computerized achievement. So anything that your objective is — driving traffic, producing leads, augmenting deals, expanding brand mindfulness — they take care of you. <br><br>Strategic planning, streamlined execution, and a result-driven approach are the three pillars that helps to discover untapped opportunities for business growth. <br><br> <span class='font-italic fw-450'> Thanks for reading !!</span>",class_name:"",m_class_name:""}]},{post_id:"1",read_time:"5 Min Read",author_name:"Rima Banchhor",author_img:n(4324),date:"25 July 2022",title:"5 Keys to Expert Web Design",img_url:"https://cdn.pixabay.com/photo/2016/07/10/19/19/interior-design-1508276_1280.jpg",items:[{type:"img",url:"https://cdn.pixabay.com/photo/2016/07/10/19/19/interior-design-1508276_1280.jpg",caption:"Photo by <a href='https://pixabay.com/users/martynaszulist-1055898/?tab=most-relevant'  target='_blank'>martynaszulist</a> on  <a href='https://pixabay.com/'  target='_blank'>pixabay</a>",class_name:"text-right",m_class_name:"text-right"},{type:"heading",title:"5 Keys to Expert Web Design",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"",text:"Your web composition and advancement fundamentally characterizes your internet based presence. Indeed, even the most essential enhancements in your site can have broad impacts on your progress in the commercial center",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"<br>5 keys to master in website architecture:",text:"<br><b>1. Visual Appeal</b> <br><br> You just have a single opportunity to establish an incredible first connection. Are your site guests saying WOW! or on the other hand OW!? when they see your site interestingly? Individuals arrive at prompt conclusions about the validity of your organization, image and items when they see your site.<br><br><b>2. Convenience</b> <br><br>In the event that your site won't be quickly explored and your significant substance won't be quickly found, then, at that point, your clients will go somewhere else. Try not to let this be the situation. At Thrive, we make a solid effort to plan and fabricate natural, basic and simple to explore sites. We maintain that our clients should feel like everything is correct where they anticipate that it should be.<br><br><b>3. Top caliber, Optimized Content</b> <br><br>Putting resources into lovely web composition and dismissing the substance resembles purchasing a vehicle without a motor. A predominant site has convincing and succinct substance with clear CTAs. At the point when you work with us, our web composition specialists work intimately with you to guarantee your website content is elegantly composed, web search tool streamlined and made considering clear business targets.<br><br><b>4. Change of Visitors into Customers</b> <br><br>From the beginning in the arranging system, we figure out what a \"change\" or CTA looks like for your site. It very well may be to present a lead structure, settle on a telephone decision or buy an item. We then, at that point, remember that objective for the whole interaction, from plan and coding to content composition. We maintain that your site should be the essential apparatus for development in your organization.<br><br><b>5. Traffic Growth Over Time</b> <br><br>At Thrive, we need to see your new site ascend to a higher level. That's what to do, we want bunches of value traffic.\n<br><br>Whether you require an imaginative site to create prospective customers, a web based business online store to sell your items or essentially burnt out on your old site, we are generally accessible to help and develop your business.<br><br> <span class='font-italic fw-450'> Thanks for reading !!</span>",class_name:"",m_class_name:""}]},{post_id:"2",read_time:"4 Min Read",author_name:"Amit Kumar Sahu",author_img:n(6761),date:"29 July 2022",title:"5 Reasons Why Startups Fail",img_url:"https://cdn.pixabay.com/photo/2017/01/09/12/49/mistake-1966448_1280.jpg",items:[{type:"img",url:"https://cdn.pixabay.com/photo/2017/01/09/12/49/mistake-1966448_1280.jpg",caption:"Photo by <a href='https://pixabay.com/users/tumisu-148124/'  target='_blank'>Tumisu</a> on  <a href='https://pixabay.com/'  target='_blank'>pixabay</a>",class_name:"text-right",m_class_name:"text-right"},{type:"heading",title:"5 Reasons Why Startups Fail",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"",text:"Startups are inherently riskier than established businesses. According to <a href='https://www.cbinsights.com/research/startup-failure-post-mortem/'  target='_blank'>CB Insights</a>, about 70% of startups fail usually within 20 months of raising finance.<br/><br/>With a failure rate this high, it’s important for you as an entrepreneur to know the most common reasons why startups fail, so you can try to avoid them.<br/><br/>While a reason is easy to define, it’ll be hard for you to notice it before it’s too late. So along with the reasons, we’ll also try to decode the patterns that lead to such startup failures.",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"1. Cash Crunch",text:"Money is the lifeblood of any business, especially startups. It is the key resource that is needed to keep the business running and to help it grow<br/><br/>If a startup doesn’t have enough money, it will quickly run into trouble.And cash crunch is one of the most common reasons why startups fail.<br/><br/>A startup can run out of cash because of the following reasons: <ul class='ml-8 mt-2'><li>   Failure to raise new capital</li><li>  Bad allocation of resources </li> <li>  Mismanagement of funds </li> <li> Too much spending </li> <li> Lack of revenue</li><li> Investors pull out their money</li></ul>",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"2. Legal Challenges",text:"Legalities play a big role in business. Startups have to ensure they’re adhering to all the laws and regulations in their industry, as well as any tariffs, zoning, and environmental protections that may apply to them.<br/><br/>One company that ran into legal trouble was Coolest Cooler. Even though this Kickstarter campaign raised more than $13 million, the company couldn’t keep up with the increased tariff by the US government on products imported from China. This led to major production delays and a lot of unhappy customers.<br/><br/>It’s important to clearly understand the legal landscape before starting your business. Hire or consult a lawyer and a CA to help you figure out what permits, licenses, and insurance you need.",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"3. Team And Internal Problems",text:"An incompetent team is one story; a toxic team is another.\n<br/><br/>No matter how talented and skilled individuals are, it’s all for nothing if they can’t work together.\n<br/><br/>Startups are built by teams, and if the team members don’t get along, it will have a negative impact on the company culture, productivity, and morale.\n<br/><br/>This was the case with the startup Housing.com.\n<br/><br/>The co-founder and CEO, Rahul Yadav, was known for his abrasive and arrogant behaviour. He wanted to take the company to a different direction it was originally supposed to go and he didn’t hesitate to voice his opinion, no matter how controversial it was.\n<br/><br/>This created a lot of tension within the team and the investors which eventually led to him being ousted from the company.\n<br/><br/>Team synergy is essential for a startup because it’s a small company and everyone needs to be on the same page in order to achieve the common goal.",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"4. Mistimed Product",text:"Launching too early or too late can be detrimental to your business. You need to ensure that there is a demand for your product or service and that you have the right team to execute your vision.\n<br/><br/>Around 10% of startup failures are due to a mistimed product launch. But most times, mistimed products can be corrected by pivoting your business model or finding a new market. This process, however, takes time, money, and a lot of effort.\n<br/><br/>In fact, Java was a mistimed product. It was originally designed for interactive television, but the market wasn’t ready for it. As a result, the team had to pivot and focus on creating a web browser that could run Java applets.",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"4. Mistimed Product",text:"Launching too early or too late can be detrimental to your business. You need to ensure that there is a demand for your product or service and that you have the right team to execute your vision.\n<br/><br/>Around 10% of startup failures are due to a mistimed product launch. But most times, mistimed products can be corrected by pivoting your business model or finding a new market. This process, however, takes time, money, and a lot of effort.\n<br/><br/>In fact, Java was a mistimed product. It was originally designed for interactive television, but the market wasn’t ready for it. As a result, the team had to pivot and focus on creating a web browser that could run Java applets.",class_name:"",m_class_name:""},{type:"paragraph",paragraph_title:"5. No Market Need",text:"Evidently, the most common reason for startup failure is simply no market need for the product or service they’re offering.\n<br/><br/>This startup failure reason can be credited to the reverse process that most entrepreneurs follow while starting up.\n<br/><br/>Instead of –\n<br/><br/><b>Identifying the problem -> finding the solution -> building a product -> monetising it</b><br/><br/>Entrepreneurs choose to follow this –\n<br/><br/><b>Building a product -> identifying a problem related to the product -> aligning the solution -> monetising it </b><br/><br/>The problem with this process is that the entrepreneur might build something that no one needs or worse, something that already exists in the market.\n<br/><br/>Take this for example – when Google Glass was released, it was an innovative product that no one had seen before. However, even though the product was new and different, there wasn’t a large enough market for it. People didn’t want to wear glasses with a screen in them and it quickly became apparent that Google Glass would not be a successful product.\n<br/><br/>As a result, Google Glass failed.\n<br/><br/>To prevent this from happening, it’s important to ensure a market for the product or service before investing time and money into developing it.",class_name:"",m_class_name:""}]}]}},5422:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(3396),s=n(652),i=n(870),o=n(1114);const a=(0,o.J)("v-card-title");var c=n(4075),u=n(8694),l=n(3824);const h=e=>((0,r.dD)("data-v-b3826c50"),e=e(),(0,r.Cn)(),e),d={class:"blog-card-wrapper"},f={class:"post-preview-content h-100 py-1"},m={class:"px-3 pb-1"},g={class:"px-3 pb-1 pt-2 text-right"},p=h((()=>(0,r._)("span",{class:"text-white"},"Read more",-1)));function y(e,t,n,o,h,y){const v=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(u.f,{class:"align-end text-left blog-card-img","aspect-ratio":"1",src:n.blog.img_url,cover:""},{default:(0,r.w5)((()=>[(0,r._)("div",f,[(0,r._)("div",m,[(0,r.Wm)(a,{class:"text-h6 text-white",innerHTML:n.blog.title},null,8,["innerHTML"])]),(0,r.Wm)(c.J,{color:"rgb(var(--v-theme-surface),0.4)",class:""}),(0,r._)("div",g,[(0,r.Wm)(v,{class:"router-link",to:{name:"blog_feed",params:{id:n.blog.post_id}}},{default:(0,r.w5)((()=>[(0,r.wy)(((0,r.wg)(),(0,r.j4)(i.T,{variant:"text",size:"small",class:"px-0"},{default:(0,r.w5)((()=>[p])),_:1})),[[l.H,!1]])])),_:1},8,["to"]),(0,r.Wm)(s.V,{class:"float-left",size:"30"},{default:(0,r.w5)((()=>[(0,r.Wm)(u.f,{alt:"Avatar",src:n.blog.author_img},null,8,["src"])])),_:1})])])])),_:1},8,["src"])])}var v={name:"BlogCardTemplate",props:["blog"],components:{},data(){return{}},mounted(){},methods:{}},w=n(89);const b=(0,w.Z)(v,[["render",y],["__scopeId","data-v-b3826c50"]]);var _=b},198:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(3396);function s(e,t,n,s,i,o){return(0,r.wg)(),(0,r.iD)("div",null," About Us ")}var i={name:" AboutUs",components:{},data(){return{}},beforeMount(){this.toggleLoading()},mounted(){},methods:{}},o=n(89);const a=(0,o.Z)(i,[["render",s]]);var c=a},8278:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var r=n(3396),s=n(7139),i=n(652),o=n(870),a=n(4075),c=n(6824),u=n(8521),l=n(8694);const h={class:"app-padding my-5"},d={class:"d-flex align-center"},f={class:"d-inline-block"},m={class:"d-inline-block align-center ml-2"},g={class:"text-body-1 fw-450 text-theme-stroke-3"},p={class:"text-subtitle-2"},y={class:"float-right text-subtitle-2"},v={key:0},w=["innerHTML"],b={key:1},_=["innerHTML"],I=["innerHTML"],E={key:2},x=["innerHTML"],T={key:3},S={key:4},D=["innerHTML"],C={class:"text-right my-5"},k=(0,r.Uk)(" Read More");function A(e,t,n,A,N,L){const O=(0,r.up)("router-link"),V=(0,r.up)("blog-card-template");return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("div",d,[(0,r._)("div",f,[(0,r.Wm)(i.V,{size:"50"},{default:(0,r.w5)((()=>[(0,r.Wm)(l.f,{src:N.blog_data.author_img,alt:"John"},null,8,["src"])])),_:1})]),(0,r._)("div",m,[(0,r._)("p",g,(0,s.zw)(N.blog_data.author_name),1),(0,r.Wm)(a.J),(0,r._)("p",p,(0,s.zw)(N.blog_data.date),1)])]),(0,r._)("span",y,(0,s.zw)(N.blog_data.read_time),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(N.blog_data.items,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{key:n,class:"my-7"},["heading"==t.type?((0,r.wg)(),(0,r.iD)("div",v,[t.title?((0,r.wg)(),(0,r.iD)("h1",{key:0,class:(0,s.C_)([e.$vuetify.display.mobile?t.m_class_name||"text-h5":t.class_name||"text-h4","font-weight-bold text-left text-theme-stroke-3"]),innerHTML:t.title},null,10,w)):(0,r.kq)("",!0)])):(0,r.kq)("",!0),"paragraph"==t.type?((0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",{class:(0,s.C_)([e.$vuetify.display.mobile?N.blog_data.m_class_name||"text-h6":N.blog_data.class_name||"text-h5","mb-3 font-weight-bold text-theme-stroke-3"]),innerHTML:t.paragraph_title},null,10,_),(0,r._)("p",{class:(0,s.C_)(["paragraph-text",t.class_name]),innerHTML:t.text},null,10,I)])):"img"==t.type?((0,r.wg)(),(0,r.iD)("div",E,[(0,r._)("figure",null,[t.url?((0,r.wg)(),(0,r.j4)(l.f,{key:0,class:"align-end blog-card-img","aspect-ratio":"1","max-height":e.$vuetify.display.mobile?t.m_height||200:t.height||400,src:t.url,cover:""},null,8,["max-height","src"])):(0,r.kq)("",!0),(0,r._)("p",{innerHTML:t.caption,class:(0,s.C_)(["text-caption",t.class_name])},null,10,x)])])):"code"==t.type?((0,r.wg)(),(0,r.iD)("div",T)):"html"==t.type?((0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("div",{innerHTML:t.html},null,8,D)])):(0,r.kq)("",!0)])))),128)),(0,r._)("div",C,[(0,r.Wm)(O,{class:"router-link",to:{name:"blogs"}},{default:(0,r.w5)((()=>[(0,r.Wm)(o.T,{color:"theme-stroke-12",variant:"outlined",rounded:""},{default:(0,r.w5)((()=>[k])),_:1})])),_:1})]),(0,r.Wm)(a.J),(0,r.Wm)(c.o,{align:"center",justify:"center",class:"my-6"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(N.suggestions,((e,t)=>((0,r.wg)(),(0,r.j4)(u.D,{sm:"4",cols:"12",class:"text-right",key:t},{default:(0,r.w5)((()=>[(0,r.Wm)(V,{blog:e},null,8,["blog"])])),_:2},1024)))),128))])),_:1})])}var N=n(2225),L=n(5422),O={name:"BlogFeed",components:{BlogCardTemplate:L.Z},data(){return{blog_data:[],suggestions:[]}},watch:{$route(e,t){e!==t&&location.reload()}},beforeMount(){this.toggleLoading()},mounted(){this.blog_data=N.Z.blog_list[this.$route.params.id||0],this.suggestions=N.Z.blog_list.slice(0,3),console.log(this.suggestions)},methods:{}},V=n(89);const R=(0,V.Z)(O,[["render",A],["__scopeId","data-v-56bb6d5a"]]);var M=R},3105:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(3396),s=n(7139),i=n(652),o=n(870),a=n(6824),c=n(8521),u=n(8694),l=n(3824);const h={class:"app-padding py-10"},d={class:"pa-4"},f=["innerHTML"],m={class:"px-3 pb-1 pt-2 mt-4 text-left"},g=(0,r.Uk)("Read more"),p={class:"pl-2"};function y(e,t,n,y,v,w){const b=(0,r.up)("router-link"),_=(0,r.up)("blog-card-template");return(0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(a.o,(0,r.dG)({align:"center",justify:"center",class:"blog-card-wrapper mb-8 elevation-1","no-gutters":""},e.props),{default:(0,r.w5)((()=>[(0,r.Wm)(c.D,{sm:"6",cols:"12",class:"text-right overflow-hidden"},{default:(0,r.w5)((()=>[(0,r.Wm)(u.f,{class:"align-end text-left blog-card-img","aspect-ratio":"1",src:v.recentBlog.img_url,"max-height":"400",cover:""},null,8,["src"])])),_:1}),(0,r.Wm)(c.D,{sm:"6",cols:"12",class:(0,s.C_)(["justify-center",e.$vuetify.display.mobile?"text-center ":" text-left"])},{default:(0,r.w5)((()=>[(0,r._)("div",d,[(0,r._)("p",{class:(0,s.C_)(["font-weight-bold text-theme-stroke-12 opacity-7",e.$vuetify.display.mobile?"text-h4 ":"text-h2"]),innerHTML:v.recentBlog.title},null,10,f),(0,r._)("div",m,[(0,r.Wm)(b,{class:"router-link",to:{name:"blog_feed",params:{id:v.recentBlog.post_id}}},{default:(0,r.w5)((()=>[(0,r.wy)(((0,r.wg)(),(0,r.j4)(o.T,{rounded:"",variant:"text",class:"float-right",size:"default"},{default:(0,r.w5)((()=>[g])),_:1})),[[l.H,!1]])])),_:1},8,["to"]),(0,r.Wm)(i.V,{size:"30"},{default:(0,r.w5)((()=>[(0,r.Wm)(u.f,{alt:"Avatar",src:v.recentBlog.author_img},null,8,["src"])])),_:1}),(0,r._)("span",p,(0,s.zw)(v.recentBlog.author_name),1)])])])),_:1},8,["class"])])),_:1},16),(0,r.Wm)(a.o,{align:"center",justify:"center"},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(v.blog_list,((e,t)=>((0,r.wg)(),(0,r.j4)(c.D,{sm:"4",cols:"12",class:"text-right",key:t},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{blog:e},null,8,["blog"])])),_:2},1024)))),128))])),_:1})])}var v=n(2225),w=n(5422),b={name:"BlogHome",components:{BlogCardTemplate:w.Z},data(){return{blog_list:v.Z.blog_list,recentBlog:v.Z.blog_list[0]}},beforeMount(){this.toggleLoading()},mounted(){},methods:{}},_=n(89);const I=(0,_.Z)(b,[["render",y],["__scopeId","data-v-57661238"]]);var E=I},8842:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(3396);function s(e,t,n,s,i,o){return(0,r.wg)(),(0,r.iD)("div",null," Contact Us ")}var i={name:"ContactUs",components:{},data(){return{}},beforeMount(){this.toggleLoading()},methods:{}},o=n(89);const a=(0,o.Z)(i,[["render",s]]);var c=a},3785:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K_}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return yt},SDK_VERSION:function(){return rr},_DEFAULT_ENTRY_NAME:function(){return Wn},_addComponent:function(){return Hn},_addOrOverwriteComponent:function(){return Qn},_apps:function(){return Kn},_clearComponents:function(){return Zn},_components:function(){return zn},_getProvider:function(){return Xn},_registerComponent:function(){return Yn},_removeServiceInstance:function(){return Jn},deleteApp:function(){return ar},getApp:function(){return ir},getApps:function(){return or},initializeApp:function(){return sr},onLog:function(){return ur},registerVersion:function(){return cr},setLogLevel:function(){return lr}});var s=n(3396);function i(e,t,n,r,i,o){const a=(0,s.up)("home-screen"),c=(0,s.up)("our-domain"),u=(0,s.up)("what-we-do"),l=(0,s.up)("tech-stack"),h=(0,s.up)("lets-talk"),d=(0,s.up)("customer-testimonial");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(a,{class:"bg-theme-fill-1"}),(0,s.Wm)(c),(0,s.Wm)(u),(0,s.Wm)(l),(0,s.Wm)(h),(0,s.Wm)(d)])}var o=n(7139),a=n(870),c=n(6824),u=n(8521);const l=e=>((0,s.dD)("data-v-51118d10"),e=e(),(0,s.Cn)(),e),h={class:"pb-5"},d=(0,s.Uk)(" Scale your business with "),f=l((()=>(0,s._)("br",null,null,-1))),m=(0,s.Uk)(" our great products "),g=[d,f,m],p=l((()=>(0,s._)("span",{class:"text-theme-stroke-2 font-weight-bold text-subtitle-1"},"Let's Talk",-1))),y=["src"];function v(e,t,r,i,l,d){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["app-padding d-flex align-center",e.$vuetify.display.mobile?"pt-5":"text-h6"]),id:"landing-screen",style:(0,o.j5)(l.style)},[(0,s.Wm)(c.o,{align:"center",justify:"center","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(u.D,{sm:"6",cols:"12",class:(0,o.C_)(["justify-center",e.$vuetify.display.mobile?"text-center ":" text-left"])},{default:(0,s.w5)((()=>[(0,s._)("div",h,[(0,s._)("h1",{class:(0,o.C_)(["font-weight-bold text-theme-stroke-1",e.$vuetify.display.mobile?"text-h4 ":"text-h2"])}," We build digital products for your success ",2),(0,s._)("p",{class:(0,o.C_)(["text-theme-stroke-2",e.$vuetify.display.mobile?"text-subtitle-1 mb-5 mt-4":"text-h6 my-6"])},g,2),(0,s.Wm)(a.T,{color:"theme-stroke-2",variant:"outlined",rounded:"",width:"210",height:"50",class:(0,o.C_)(["lets-talk-btn",e.$vuetify.display.mobile?"mt-4":"mt-6"]),onClick:t[0]||(t[0]=t=>e.onLinkClick("lets-talk"))},{default:(0,s.w5)((()=>[p])),_:1},8,["class"])])])),_:1},8,["class"]),(0,s.Wm)(u.D,{sm:"6",cols:"12",class:"text-right"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:n(2662)("./"+this.$vuetify.theme.global.name+"/home-iluustration.svg"),alt:"img",class:"w-100"},null,8,y)])),_:1})])),_:1})],6)}var w={name:"LandingPageVue",components:{},data(){return{style:{height:screen.height-150+"px"}}},mounted(){this.style={height:screen.height-150+"px"}},methods:{}},b=n(89);const _=(0,b.Z)(w,[["render",v],["__scopeId","data-v-51118d10"]]);var I=_;const E={class:"py-15 app-padding our-domain-section"},x={"data-aos":"fade-up","data-aos-offset":"100","data-aos-delay":"10","data-aos-duration":"400","data-aos-easing":"ease-in-out","data-aos-mirror":"true"},T={class:"text-center"},S=["src"],D={class:"text-theme-stroke-3 text-subtitle-1 fw-450 mt-2"};function C(e,t,r,i,a,l){return(0,s.wg)(),(0,s.iD)("div",E,[(0,s._)("div",x,[(0,s.Wm)(c.o,{align:"center",justify:"center",class:"mb-8 my-5","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(u.D,{sm:"12",cols:"13",class:"justify-center text-center"},{default:(0,s.w5)((()=>[(0,s._)("p",{class:(0,o.C_)(["font-weight-bold text-theme-stroke-12 px-10",e.$vuetify.display.mobile?"text-h5 ":"text-h4"])}," Have a idea in mind? We can help you build it ! ",2),(0,s._)("p",{class:(0,o.C_)(["mt-5 text-black",e.$vuetify.display.mobile?"text-subtitle-1 ":" text-subtitle-1"])}," We design products that cater to your brand and scale your business through increased productivity and optimal performance.We can help you, no matter what is your domain or how big or small your business is! ",2)])),_:1})])),_:1}),(0,s._)("div",T,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.domain_list,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)([this.$vuetify.display.mobile?"mx-3":"mx-10","d-inline-block pa-5"]),key:t},[(0,s._)("img",{src:n(7173)("./"+this.$vuetify.theme.global.name+"/"+e.img_name),alt:"img",width:"70",height:"70"},null,8,S),(0,s._)("p",D,(0,o.zw)(e.name),1)],2)))),128))])])])}var k={name:"OverDomain",components:{},data(){return{domain_list:[{img_name:"account.svg",name:"Account"},{img_name:"Education.svg",name:"Education"},{img_name:"hospitality.svg",name:"Hospitality"},{img_name:"e-commerce.svg",name:"e-commerce"}]}},mounted(){},methods:{}};const A=(0,b.Z)(k,[["render",C],["__scopeId","data-v-e330239e"]]);var N=A;const L=e=>((0,s.dD)("data-v-55c8a591"),e=e(),(0,s.Cn)(),e),O={class:"bg-theme-fill-1",id:"what-we-do"},V={key:0,class:"py-7"},R=["src"],M=["innerHTML"],F=L((()=>(0,s._)("div",{class:"line-style d-inline-block"},null,-1))),P=[F],B={key:1,class:"py-5"},U=["src"],q=L((()=>(0,s._)("div",{class:"line-style d-inline-block"},null,-1))),$=[q],j=["src"],W=["src"];function G(e,t,r,i,a,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",O,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.service_list,((t,r)=>((0,s.wg)(),(0,s.iD)("div",{key:r,class:(0,o.C_)(["app-padding",e.$vuetify.display.mobile?"no-bg":t.class]),style:(0,o.j5)([{"margin-top":"-1px"},t.bg_img?{backgroundImage:"url("+n(7173)("./"+this.$vuetify.theme.global.name+"/"+t.bg_img)+")"}:""]),"data-aos":"fade-up","data-aos-offset":"150","data-aos-delay":"10","data-aos-duration":"400","data-aos-easing":"ease-in-out","data-aos-mirror":"true"},[r%2==0?((0,s.wg)(),(0,s.iD)("div",V,[(0,s.Wm)(c.o,{align:"center",justify:"center","no-gutters":"",class:(0,o.C_)(e.$vuetify.display.mobile?"text-center":"py-15 text-left")},{default:(0,s.w5)((()=>[(0,s.Wm)(u.D,{sm:"6",cols:"13"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:n(7173)("./"+this.$vuetify.theme.global.name+"/"+t.img_name),alt:"img",class:"mw-100"},null,8,R)])),_:2},1024),(0,s.Wm)(u.D,{sm:"6",cols:"12",class:(0,o.C_)(["justify-center py-10",e.$vuetify.display.mobile?" text-center ":"  text-right"])},{default:(0,s.w5)((()=>[(0,s._)("p",{class:(0,o.C_)(["font-weight-bold text-theme-stroke-1",e.$vuetify.display.mobile?"text-h5 ":" text-h3"]),innerHTML:t.title},null,10,M),(0,s._)("p",{class:(0,o.C_)(["mt-6 text-theme-stroke-2",e.$vuetify.display.mobile?"text-subtitle-1 ":" text-h6"])},(0,o.zw)(t.description),3),(0,s._)("div",{class:(0,o.C_)(e.$vuetify.display.mobile?" text-center ":"  text-right")},P,2)])),_:2},1032,["class"])])),_:2},1032,["class"])])):((0,s.wg)(),(0,s.iD)("div",B,[(0,s.Wm)(c.o,{align:"center",justify:"center","no-gutters":"",class:(0,o.C_)(e.$vuetify.display.mobile?"text-center":"py-15 text-right")},{default:(0,s.w5)((()=>[e.$vuetify.display.mobile?((0,s.wg)(),(0,s.j4)(u.D,{key:0,sm:"6",cols:"13",class:"text-center"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:n(7173)("./"+this.$vuetify.theme.global.name+"/"+t.img_name),alt:"img",class:"mw-100"},null,8,U)])),_:2},1024)):(0,s.kq)("",!0),(0,s.Wm)(u.D,{sm:"6",cols:"12",class:(0,o.C_)(["justify-center py-10",e.$vuetify.display.mobile?" text-center ":"  text-left"])},{default:(0,s.w5)((()=>[(0,s._)("p",{class:(0,o.C_)(["font-weight-bold text-theme-stroke-1",e.$vuetify.display.mobile?"text-h5 ":" text-h3"])},(0,o.zw)(t.title),3),(0,s._)("p",{class:(0,o.C_)(["mt-6 text-theme-stroke-2",e.$vuetify.display.mobile?"text-subtitle-1 ":" text-h6"])},(0,o.zw)(t.description),3),(0,s._)("div",{class:(0,o.C_)(e.$vuetify.display.mobile?" text-center ":"text-left")},$,2)])),_:2},1032,["class"]),e.$vuetify.display.mobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u.D,{key:1,sm:"6",cols:"13",class:"text-right"},{default:(0,s.w5)((()=>[(0,s._)("img",{src:n(7173)("./"+this.$vuetify.theme.global.name+"/"+t.img_name),alt:"img",class:"mw-100"},null,8,j)])),_:2},1024))])),_:2},1032,["class"])]))],6)))),128))]),e.$vuetify.display.mobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("img",{key:0,src:n(2965)("./"+this.$vuetify.theme.global.name+"/solar-system.svg"),alt:"img",class:"solar-img"},null,8,W))],64)}var K={name:"WhatWeDo",components:{},data(){return{background_image:"",service_list:[{title:"Website design & development",description:"We build beautiful websites that your users will love. A responsive design makes your website accessible to all users, regardless of their device",img_name:"illustration-3.svg",bg_img:"rectangelbg-1.png",class:"background-top-left"},{title:"UI/UX research and development",description:"Our design team do a customer analysis & work on Pen & Paper sketches Wireframing, User Interface designing & Prototyping. ",img_name:"illustration-2.svg"},{title:"Product development",description:"We analyse your requirement and your target audience & build a great product for you which helps you to grow your business",img_name:"illustration-1.svg",bg_img:"rectangelbg-2.png",class:"background-bottom-right"}]}},mounted(){},methods:{getImgPath(e){let t="@/assets/"+this.$vuetify.theme.global.name+"/"+e;return console.log(t),n(3064)(t)}}};const z=(0,b.Z)(K,[["render",G],["__scopeId","data-v-55c8a591"]]);var H=z,Q=n(9242),Y=n(1114);const X=(0,Y.J)("v-card-text");var J=n(4870),Z=n(8717),ee=n(3766),te=n(6033);const ne=Symbol.for("vuetify:form"),re=(0,ee.U)({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null}});function se(e){const t=(0,Z.z)(e,"modelValue"),n=(0,s.Fl)((()=>e.disabled)),r=(0,s.Fl)((()=>e.readonly)),i=(0,J.iH)(!1),o=(0,J.iH)([]),a=(0,J.iH)([]);async function c(){const t=[];let n=!0;a.value=[],i.value=!0;for(const r of o.value){const s=await r.validate();if(s.length>0&&(n=!1,t.push({id:r.id,errorMessages:s})),!n&&e.fastFail)break}return a.value=t,i.value=!1,{valid:n,errors:a.value}}function u(){o.value.forEach((e=>e.reset())),t.value=null}function l(){o.value.forEach((e=>e.resetValidation())),a.value=[],t.value=null}return(0,s.YP)(o,(()=>{let e=null;o.value.some((e=>!1===e.isValid))?e=!1:o.value.every((e=>!0===e.isValid))&&(e=!0),t.value=e}),{deep:!0}),(0,s.JJ)(ne,{register:(e,t,n,r,s)=>{o.value.some((t=>t.id===e))&&(0,te.Kd)(`Duplicate input name "${e}"`),o.value.push({id:e,validate:t,reset:n,resetValidation:r,isValid:s})},unregister:e=>{o.value=o.value.filter((t=>t.id!==e))},isDisabled:n,isReadonly:r,isValidating:i,items:o}),{errors:a,isDisabled:n,isReadonly:r,isValidating:i,items:o,validate:c,reset:u,resetValidation:l}}function ie(){return(0,s.f3)(ne,null)}var oe=n(6199),ae=n(1107),ce=n(9888);const ue=(0,ae.a)({name:"VForm",props:{...re()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:r}=t;const i=se(e),o=(0,J.iH)();function a(e){e.preventDefault(),i.reset()}function c(e){const t=e,n=i.validate();t.then=n.then.bind(n),t.catch=n.catch.bind(n),t.finally=n.finally.bind(n),r("submit",t),t.defaultPrevented||n.then((e=>{let{valid:t}=e;var n;t&&(null==(n=o.value)||n.submit())})),t.preventDefault()}return(0,ce.L)((()=>{var e;return(0,s.Wm)("form",{ref:o,class:"v-form",novalidate:!0,onReset:a,onSubmit:c},[null==(e=n.default)?void 0:e.call(n,i)])})),(0,oe.Z)(i,o)}});n(6699);function le(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return(0,ae.a)({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(t,n){let{slots:r}=n;return()=>{const n=t.group?Q.W3:Q.uT;return(0,s.h)(n,{name:e,mode:t.mode,onBeforeEnter(e){e.style.transformOrigin=t.origin},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:s}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${n}px`,e.style.width=`${r}px`,e.style.height=`${s}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&null!=e&&e._transitionInitialStyles){const{position:t,top:n,left:r,width:s,height:i}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=r||"",e.style.width=s||"",e.style.height=i||""}}},r.default)}}})}function he(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,ae.a)({name:e,props:{mode:{type:String,default:n}},setup(n,r){let{slots:i}=r;return()=>(0,s.h)(Q.uT,{name:e,...t},i.default)}})}function de(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=t?"width":"height",r=(0,o._A)(`offset-${n}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},onEnter(t){const s=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const i=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=s.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=i}))},onAfterEnter:i,onEnterCancelled:i,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},onAfterLeave:s,onLeaveCancelled:s};function s(t){e&&t._parent&&t._parent.classList.remove(e),i(t)}function i(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}le("fab-transition","center center","out-in"),le("dialog-bottom-transition"),le("dialog-top-transition"),le("fade-transition"),le("scale-transition"),le("scroll-x-transition"),le("scroll-x-reverse-transition"),le("scroll-y-transition"),le("scroll-y-reverse-transition"),le("slide-x-transition"),le("slide-x-reverse-transition");const fe=le("slide-y-transition"),me=(le("slide-y-reverse-transition"),he("expand-transition",de()),he("expand-x-transition",de("",!0)));var ge=n(7041);const pe=(0,ae.a)({name:"VLabel",props:{text:String,...(0,ge.x$)()},setup(e,t){let{slots:n}=t;return(0,ce.L)((()=>{var t;return(0,s.Wm)("label",{class:"v-label"},[e.text,null==(t=n.default)?void 0:t.call(n)])})),{}}}),ye=(0,ae.a)({name:"VFieldLabel",props:{floating:Boolean},setup(e,t){let{slots:n}=t;return(0,ce.L)((()=>(0,s.Wm)(pe,{class:["v-field-label",{"v-field-label--floating":e.floating}],"aria-hidden":e.floating||void 0},n))),{}}});var ve=n(3289),we=n(4960),be=n(1710),_e=n(7514);const Ie=(0,ee.U)({focused:Boolean},"focus");function Ee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,_e.BL)();const n=(0,Z.z)(e,"focused"),r=(0,s.Fl)((()=>({[`${t}--focused`]:n.value})));function i(){n.value=!0}function o(){n.value=!1}return{focusClasses:r,isFocused:n,focus:i,blur:o}}var xe=n(2370),Te=n(3122),Se=n(131),De=n(8587);const Ce=["underlined","outlined","filled","solo","plain"],ke=(0,ee.U)({appendInnerIcon:we.lE,bgColor:String,clearable:Boolean,clearIcon:{type:we.lE,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:we.lE,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ce.includes(e)},...(0,ge.x$)(),...(0,be.fF)()},"v-field"),Ae=(0,ae.e)()({name:"VField",inheritAttrs:!1,props:{id:String,...Ie(),...ke()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:i}=t;const{themeClasses:o}=(0,ge.ER)(e),{loaderClasses:a}=(0,be.U2)(e),{focusClasses:c,isFocused:u,focus:l,blur:h}=Ee(e),d=(0,s.Fl)((()=>e.dirty||e.active)),f=(0,s.Fl)((()=>!e.singleLine&&!(!e.label&&!i.label))),m=(0,_e.sq)(),g=(0,s.Fl)((()=>e.id||`input-${m}`)),p=(0,J.iH)(),y=(0,J.iH)(),v=(0,J.iH)(),{backgroundColorClasses:w,backgroundColorStyles:b}=(0,xe.Y5)((0,J.Vh)(e,"bgColor")),{textColorClasses:_,textColorStyles:I}=(0,xe.rY)((0,s.Fl)((()=>d.value&&u.value&&!e.error&&!e.disabled?e.color:void 0)));(0,s.YP)(d,(e=>{if(f.value){const t=p.value.$el,n=y.value.$el,r=(0,Te.G)(t),s=n.getBoundingClientRect(),i=s.x-r.x,o=s.y-r.y-(r.height/2-s.height/2),a=s.width/.75,c=Math.abs(a-r.width)>1?{maxWidth:(0,Se.kb)(a)}:void 0,u=1e3*parseFloat(getComputedStyle(t).transitionDuration),l=parseFloat(getComputedStyle(n).getPropertyValue("--v-field-label-scale"));t.style.visibility="visible",n.style.visibility="hidden",t.animate([{transform:"translate(0)"},{transform:`translate(${i}px, ${o}px) scale(${l})`,...c}],{duration:u,easing:De.Ly,direction:e?"normal":"reverse"}).finished.then((()=>{t.style.removeProperty("visibility"),n.style.removeProperty("visibility")}))}}),{flush:"post"});const E=(0,s.Fl)((()=>({isActive:d,isFocused:u,controlRef:v,blur:h,focus:l})));function x(e){e.target!==document.activeElement&&e.preventDefault(),r("click:control",e)}return(0,ce.L)((()=>{var t,u,m;const v="outlined"===e.variant,T=i["prepend-inner"]||e.prependInnerIcon,S=!(!e.clearable&&!i.clear),D=!!(i["append-inner"]||e.appendInnerIcon||S),C=i.label?i.label({label:e.label,props:{for:g.value}}):e.label;return(0,s.Wm)("div",(0,s.dG)({class:["v-field",{"v-field--active":d.value,"v-field--appended":D,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":T,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--has-label":!!C,[`v-field--variant-${e.variant}`]:!0},o.value,w.value,c.value,a.value],style:[b.value,I.value],onClick:x},n),[(0,s.Wm)("div",{class:"v-field__overlay"},null),(0,s.Wm)(be.rD,{name:"v-field",active:e.loading,color:e.error?"error":e.color},{default:i.loader}),T&&(0,s.Wm)("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&(0,s.Wm)(ve.t,{key:"prepend-icon",onClick:n["onClick:prependInner"],icon:e.prependInnerIcon},null),null==(t=i["prepend-inner"])?void 0:t.call(i,E.value)]),(0,s.Wm)("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(e.variant)&&f.value&&(0,s.Wm)(ye,{key:"floating-label",ref:y,class:[_.value],floating:!0},{default:()=>[C]}),(0,s.Wm)(ye,{ref:p,for:g.value},{default:()=>[C]}),null==(u=i.default)?void 0:u.call(i,{...E.value,props:{id:g.value,class:"v-field__input"},focus:l,blur:h})]),S&&(0,s.Wm)(me,{key:"clear"},{default:()=>[(0,s.wy)((0,s.Wm)("div",{class:"v-field__clearable"},[i.clear?i.clear():(0,s.Wm)(ve.t,{onClick:e=>r("click:clear",e),icon:e.clearIcon},null)]),[[Q.F8,e.dirty]])]}),D&&(0,s.Wm)("div",{key:"append",class:"v-field__append-inner"},[null==(m=i["append-inner"])?void 0:m.call(i,E.value),e.appendInnerIcon&&(0,s.Wm)(ve.t,{key:"append-icon",onClick:n["onClick:appendInner"],icon:e.appendInnerIcon},null)]),(0,s.Wm)("div",{class:["v-field__outline",_.value]},[v&&(0,s.Wm)(s.HY,null,[(0,s.Wm)("div",{class:"v-field__outline__start"},null),f.value&&(0,s.Wm)("div",{class:"v-field__outline__notch"},[(0,s.Wm)(ye,{ref:y,floating:!0},{default:()=>[C]})]),(0,s.Wm)("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&f.value&&(0,s.Wm)(ye,{ref:y,floating:!0},{default:()=>[C]})])])})),{controlRef:v}}});function Ne(e){return(0,Se.ei)(e,Object.keys(Ae.props))}var Le=n(4906);const Oe=(0,ae.a)({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...(0,Le.X)({transition:{component:fe,leaveAbsolute:!0,group:!0}})},setup(e,t){let{slots:n}=t;const r=(0,s.Fl)((()=>(0,Se.FT)(e.messages))),{textColorClasses:i,textColorStyles:o}=(0,xe.rY)((0,s.Fl)((()=>e.color)));return(0,ce.L)((()=>(0,s.Wm)(Le.J,{transition:e.transition,tag:"div",class:["v-messages",i.value],style:o.value},{default:()=>[e.active&&r.value.map(((e,t)=>(0,s.Wm)("div",{class:"v-messages__message",key:`${t}-${r.value}`},[n.message?n.message({message:e}):e])))]}))),{}}});var Ve=n(9694);const Re=(0,ee.U)({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validationValue:null});function Me(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,_e.BL)(),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,_e.sq)();const r=(0,Z.z)(e,"modelValue"),i=(0,s.Fl)((()=>{var t;return null!=(t=e.validationValue)?t:r.value})),o=ie(),a=(0,J.iH)([]),c=(0,J.iH)(!0),u=(0,s.Fl)((()=>!(!(0,Se.FT)(""===r.value?null:r.value).length&&!(0,Se.FT)(""===i.value?null:i.value).length))),l=(0,s.Fl)((()=>!!(e.disabled||null!=o&&o.isDisabled.value))),h=(0,s.Fl)((()=>!!(e.readonly||null!=o&&o.isReadonly.value))),d=(0,s.Fl)((()=>e.errorMessages.length?(0,Se.FT)(e.errorMessages):a.value)),f=(0,s.Fl)((()=>!e.error&&!d.value.length&&(!e.rules.length||(!c.value||null)))),m=(0,J.iH)(!1),g=(0,s.Fl)((()=>({[`${t}--error`]:!1===f.value,[`${t}--dirty`]:u.value,[`${t}--disabled`]:l.value,[`${t}--readonly`]:h.value}))),p=(0,s.Fl)((()=>{var t;return null!=(t=e.name)?t:(0,J.SU)(n)}));function y(){v(),r.value=null}function v(){c.value=!0,a.value=[]}async function w(){const t=[];m.value=!0;for(const n of e.rules){if(t.length>=(e.maxErrors||1))break;const r="function"===typeof n?n:()=>n,s=await r(i.value);!0!==s&&("string"===typeof s?t.push(s):console.warn(`${s} is not a valid value. Rule functions must return boolean true or a string.`))}return a.value=t,m.value=!1,c.value=!1,a.value}return(0,s.wF)((()=>{null==o||o.register(p.value,w,y,v,f)})),(0,s.Jd)((()=>{null==o||o.unregister(p.value)})),(0,s.YP)(i,(()=>{null!=i.value&&w()})),{errorMessages:d,isDirty:u,isDisabled:l,isReadonly:h,isPristine:c,isValid:f,isValidating:m,reset:y,resetValidation:v,validate:w,validationClasses:g}}const Fe=(0,ee.U)({id:String,appendIcon:we.lE,prependIcon:we.lE,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},...(0,Ve.f)(),...Re()}),Pe=(0,ae.e)()({name:"VInput",props:{...Fe()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:r,emit:i}=t;const{densityClasses:o}=(0,Ve.t)(e),a=(0,_e.sq)(),c=(0,s.Fl)((()=>e.id||`input-${a}`)),{errorMessages:u,isDirty:l,isDisabled:h,isReadonly:d,isPristine:f,isValid:m,isValidating:g,reset:p,resetValidation:y,validate:v,validationClasses:w}=Me(e,"v-input",c),b=(0,s.Fl)((()=>({id:c,isDirty:l,isDisabled:h,isReadonly:d,isPristine:f,isValid:m,isValidating:g,reset:p,resetValidation:y,validate:v})));return(0,ce.L)((()=>{var t,i,a,c,l;const h=!(!r.prepend&&!e.prependIcon),d=!(!r.append&&!e.appendIcon),f=!!(null!=(t=e.messages)&&t.length||u.value.length),m=!e.hideDetails||"auto"===e.hideDetails&&(f||!!r.details);return(0,s.Wm)("div",{class:["v-input",`v-input--${e.direction}`,o.value,w.value]},[h&&(0,s.Wm)("div",{key:"prepend",class:"v-input__prepend"},[e.prependIcon&&(0,s.Wm)(ve.t,{key:"prepend-icon",onClick:n["onClick:prepend"],icon:e.prependIcon},null),null==(i=r.prepend)?void 0:i.call(r,b.value)]),r.default&&(0,s.Wm)("div",{class:"v-input__control"},[null==(a=r.default)?void 0:a.call(r,b.value)]),d&&(0,s.Wm)("div",{key:"append",class:"v-input__append"},[null==(c=r.append)?void 0:c.call(r,b.value),e.appendIcon&&(0,s.Wm)(ve.t,{key:"append-icon",onClick:n["onClick:append"],icon:e.appendIcon},null)]),m&&(0,s.Wm)("div",{class:"v-input__details"},[(0,s.Wm)(Oe,{active:f,messages:u.value.length>0?u.value:e.messages},{message:r.message}),null==(l=r.details)?void 0:l.call(r,b.value)])])})),{reset:p,resetValidation:y,validate:v}}});function Be(e){return(0,Se.ei)(e,Object.keys(Pe.props))}const Ue=(0,ae.a)({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...(0,Le.X)({transition:{component:fe}})},setup(e,t){let{slots:n}=t;const r=(0,s.Fl)((()=>e.max?`${e.value} / ${e.max}`:String(e.value)));return(0,ce.L)((()=>(0,s.Wm)(Le.J,{transition:e.transition},{default:()=>[(0,s.wy)((0,s.Wm)("div",{class:"v-counter"},[n.default?n.default({counter:r.value,max:e.max,value:e.value}):r.value]),[[Q.F8,e.active]])]}))),{}}});var qe=n(7052);const $e=["color","file","time","date","datetime-local","week","month"],je=(0,ae.e)()({name:"VTextField",directives:{Intersect:qe.Z},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...Fe(),...ke()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"click:input":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:i}=t;const o=(0,Z.z)(e,"modelValue"),a=(0,s.Fl)((()=>{var t;return"function"===typeof e.counterValue?e.counterValue(o.value):(null!=(t=o.value)?t:"").toString().length})),c=(0,s.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function u(t,n){var r,s;e.autofocus&&t&&(null==(r=n[0].target)||null==(s=r.focus)||s.call(r))}const l=(0,J.iH)(),h=(0,J.iH)(),d=(0,J.iH)(!1),f=(0,J.iH)(),m=(0,s.Fl)((()=>$e.includes(e.type)||e.persistentPlaceholder||d.value)),g=(0,s.Fl)((()=>e.messages.length?e.messages:d.value||e.persistentHint?e.hint:""));function p(){var e;f.value!==document.activeElement&&(null==(e=f.value)||e.focus());d.value||(d.value=!0)}function y(e){p(),r("click:control",e)}function v(e){e.stopPropagation(),p(),(0,s.Y3)((()=>{o.value="",r("click:clear",e)}))}function w(e){o.value=e.target.value}return(0,ce.L)((()=>{const t=!!(i.counter||e.counter||e.counterValue),b=!(!t&&!i.details),[_,I]=(0,Se.An)(n),[{modelValue:E,...x}]=Be(e),[T]=Ne(e);return(0,s.Wm)(Pe,(0,s.dG)({ref:l,modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":n["onClick:prepend"],"onClick:append":n["onClick:append"]},_,x,{messages:g.value}),{...i,default:t=>{let{id:a,isDisabled:c,isDirty:l,isReadonly:g,isValid:b}=t;return(0,s.Wm)(Ae,(0,s.dG)({ref:h,onMousedown:e=>{e.target!==f.value&&e.preventDefault()},"onClick:control":y,"onClick:clear":v,"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"],role:"textbox"},T,{id:a.value,active:m.value||l.value,dirty:l.value||e.dirty,focused:d.value,error:!1===b.value}),{...i,default:t=>{var n;let{props:{class:a,...l}}=t;return(0,s.Wm)(s.HY,null,[e.prefix&&(0,s.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,s.Wm)("div",{class:a,onClick:e=>r("click:input",e),"data-no-activator":""},[null==(n=i.default)?void 0:n.call(i),(0,s.wy)((0,s.Wm)("input",(0,s.dG)({ref:f,value:o.value,onInput:w,autofocus:e.autofocus,readonly:g.value,disabled:c.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:p,onBlur:()=>d.value=!1},l,I),null),[[(0,s.Q2)("intersect"),{handler:u},null,{once:!0}]])]),e.suffix&&(0,s.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:b?n=>{var r;return(0,s.Wm)(s.HY,null,[null==(r=i.details)?void 0:r.call(i,n),t&&(0,s.Wm)(s.HY,null,[(0,s.Wm)("span",null,null),(0,s.Wm)(Ue,{active:e.persistentCounter||d.value,value:a.value,max:c.value},i.counter)])])}:void 0})})),(0,oe.Z)({},l,h,f)}}),We=(0,ae.a)({name:"VTextarea",directives:{Intersect:qe.Z},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...Fe(),...ke()},emits:{"click:clear":e=>!0,"click:control":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:r,slots:i}=t;const o=(0,Z.z)(e,"modelValue"),a=(0,s.Fl)((()=>"function"===typeof e.counterValue?e.counterValue(o.value):(o.value||"").toString().length)),c=(0,s.Fl)((()=>n.maxlength?n.maxlength:!e.counter||"number"!==typeof e.counter&&"string"!==typeof e.counter?void 0:e.counter));function u(t,n){var r,s;e.autofocus&&t&&(null==(r=n[0].target)||null==(s=r.focus)||s.call(r))}const l=(0,J.iH)(),h=(0,J.iH)(),d=(0,J.iH)(!1),f=(0,J.iH)("auto"),m=(0,J.iH)(),g=(0,s.Fl)((()=>d.value||e.persistentPlaceholder)),p=(0,s.Fl)((()=>e.messages.length?e.messages:g.value||e.persistentHint?e.hint:""));function y(){var e;m.value!==document.activeElement&&(null==(e=m.value)||e.focus());d.value||(d.value=!0)}function v(e){y(),r("click:control",e)}function w(e){e.stopPropagation(),y(),(0,s.Y3)((()=>{o.value="",r("click:clear",e)}))}function b(e){o.value=e.target.value}const _=(0,J.iH)();function I(){e.autoGrow&&(0,s.Y3)((()=>{if(!_.value)return;const t=getComputedStyle(_.value),n=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),r=_.value.scrollHeight,s=parseFloat(t.lineHeight),i=parseFloat(e.rows)*s+n,o=parseFloat(e.maxRows)*s+n||1/0;f.value=(0,Se.kb)(Math.min(o,Math.max(i,null!=r?r:0)))}))}let E;return(0,s.bv)(I),(0,s.YP)(o,I),(0,s.YP)((()=>e.rows),I),(0,s.YP)((()=>e.maxRows),I),(0,s.YP)(_,(e=>{var t;e?(E=new ResizeObserver(I),E.observe(_.value)):null==(t=E)||t.disconnect()})),(0,s.Jd)((()=>{var e;null==(e=E)||e.disconnect()})),(0,ce.L)((()=>{const t=!!(i.counter||e.counter||e.counterValue),r=!(!t&&!i.details),[l,h]=(0,Se.An)(n),[{modelValue:I,...E}]=Be(e),[x]=Ne(e);return(0,s.Wm)(Pe,(0,s.dG)({modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-textarea",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow}]},l,E,{messages:p.value}),{...i,default:t=>{let{isDisabled:n,isDirty:r,isReadonly:a,isValid:c}=t;return(0,s.Wm)(Ae,(0,s.dG)({style:{"--v-input-control-height":f.value},"onClick:control":v,"onClick:clear":w,role:"textbox"},x,{active:g.value||r.value,dirty:r.value||e.dirty,focused:d.value,error:!1===c.value}),{...i,default:t=>{let{props:{class:r,...i}}=t;return(0,s.Wm)(s.HY,null,[e.prefix&&(0,s.Wm)("span",{class:"v-text-field__prefix"},[e.prefix]),(0,s.wy)((0,s.Wm)("textarea",(0,s.dG)({ref:m,class:r,value:o.value,onInput:b,autofocus:e.autofocus,readonly:a.value,disabled:n.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:y,onBlur:()=>d.value=!1},i,h),null),[[(0,s.Q2)("intersect"),{handler:u},null,{once:!0}]]),e.autoGrow&&(0,s.wy)((0,s.Wm)("textarea",{class:[r,"v-textarea__sizer"],"onUpdate:modelValue":e=>o.value=e,ref:_,readonly:!0,"aria-hidden":"true"},null),[[Q.nr,o.value]]),e.suffix&&(0,s.Wm)("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:r?n=>{var r;return(0,s.Wm)(s.HY,null,[null==(r=i.details)?void 0:r.call(i,n),t&&(0,s.Wm)(s.HY,null,[(0,s.Wm)("span",null,null),(0,s.Wm)(Ue,{active:e.persistentCounter||d.value,value:a.value,max:c.value},i.counter)])])}:void 0})})),(0,oe.Z)({},l,h,m)}}),Ge=e=>((0,s.dD)("data-v-664e9194"),e=e(),(0,s.Cn)(),e),Ke=["data-aos"],ze=Ge((()=>(0,s._)("span",{class:"text-white font-weight-bold text-subtitle-1"},"Send",-1)));function He(e,t,n,r,i,l){const h=(0,s.up)("center");return(0,s.wg)(),(0,s.iD)("div",{id:"lets-talk",class:"py-15 app-padding contact-section",style:(0,o.j5)({backgroundImage:"url("+e.background_image+")"})},[(0,s.Wm)(c.o,{align:"center",justify:"center",class:"my-10","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(u.D,{sm:"6",cols:"13",class:(0,o.C_)(e.$vuetify.display.mobile?"text-center":"text-right")},{default:(0,s.w5)((()=>[(0,s._)("p",{class:(0,o.C_)(["font-weight-bold mb-5 text-theme-stroke-3",e.$vuetify.display.mobile?"text-subtitle-1":"text-h6"])}," Want to build your digital Product?",2),(0,s._)("h1",{class:(0,o.C_)(["font-weight-bold text-theme-stroke-12",e.$vuetify.display.mobile?"text-h4 ":"text-h2"])}," Let's Talk ",2),(0,s._)("p",{class:(0,o.C_)(["mt-2 text-theme-stroke-12 fw-450 opacity-7 mb-5",e.$vuetify.display.mobile?"text-subtitle-1":"text-h6"])}," Whether you need a full product, consultation, tech investments or an extended team, our expert will help you find the best solutions. ",2)])),_:1},8,["class"]),(0,s.Wm)(u.D,{sm:"6",cols:"13",class:"text-right"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"mx-auto contact-card","max-width":"400","data-aos":e.$vuetify.display.mobile?"fade-up":"fade-left","data-aos-offset":"100","data-aos-delay":"50","data-aos-duration":"800","data-aos-easing":"ease-in-out","data-aos-mirror":"true"},[(0,s.Wm)(X,{class:(0,o.C_)(e.$vuetify.display.mobile?"px-6 py-8":"px-10 py-8")},{default:(0,s.w5)((()=>[(0,s.Wm)(ue,{ref:"contact_form",modelValue:e.valid,"onUpdate:modelValue":t[4]||(t[4]=t=>e.valid=t),"lazy-validation":"",onSubmit:t[5]||(t[5]=(0,Q.iM)((t=>e.submitQueryForm()),["prevent"]))},{default:(0,s.w5)((()=>[(0,s.Wm)(je,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t),color:"rgb(var(--v-theme-theme-stroke-3),0.7)",label:"Your Name",density:"comfortable",rules:[e.$rules.REQUIRED_FIELD("Name")]},null,8,["modelValue","rules"]),(0,s.Wm)(je,{modelValue:e.mobile,"onUpdate:modelValue":t[1]||(t[1]=t=>e.mobile=t),color:"rgb(var(--v-theme-theme-stroke-3),0.7)",maxlength:"10",label:"Mobile",density:"comfortable",rules:e.$rules.MOBILE},null,8,["modelValue","rules"]),(0,s.Wm)(je,{color:"rgb(var(--v-theme-theme-stroke-3),0.7)",maxlength:"320",modelValue:e.email,"onUpdate:modelValue":t[2]||(t[2]=t=>e.email=t),label:"Email",density:"comfortable",rules:e.$rules.EMAIL},null,8,["modelValue","rules"]),(0,s.Wm)(We,{color:"rgb(var(--v-theme-theme-stroke-3),0.7)",modelValue:e.description,"onUpdate:modelValue":t[3]||(t[3]=t=>e.description=t),label:"Description",density:"comfortable",rows:"2",rules:[e.$rules.REQUIRED_FIELD("Description")]},null,8,["modelValue","rules"]),(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(a.T,{color:"theme-stroke-3",rounded:"",width:"210",height:"50",class:"send-btn",type:"submit"},{default:(0,s.w5)((()=>[ze])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["class"])],8,Ke)])),_:1})])),_:1})],4)}n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Ye=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},Xe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ye(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const u=s<e.length,l=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Je=function(e){const t=Qe(e);return Xe.encodeByteArray(t,!0)},Ze=function(e){return Je(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&tt(n)&&(e[n]=et(e[n],t[n]));return e}function tt(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Ze(JSON.stringify(n)),Ze(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function it(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function ot(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function at(){return"object"===typeof self&&self.self===self}function ct(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function ut(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function lt(){return st().indexOf("Electron/")>=0}function ht(){const e=st();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function dt(){return st().indexOf("MSAppHost/")>=0}function ft(){return!ot()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mt(){return"object"===typeof indexedDB}function gt(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pt="FirebaseError";class yt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=pt,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?wt(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new yt(r,o,n);return a}}function wt(e,t){return e.replace(bt,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const bt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function It(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(Et(n)&&Et(i)){if(!It(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Et(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){const n=new Tt(e,t);return n.subscribe.bind(n)}class Tt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=St(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Dt),void 0===r.error&&(r.error=Dt),void 0===r.complete&&(r.complete=Dt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function St(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Dt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(e){return e&&e._delegate?e._delegate:e}class kt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new nt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(Ot(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(ev){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Lt(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(ev){}return n||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function Lt(e){return e===At?void 0:e}function Ot(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt=[];var Mt;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(Mt||(Mt={}));const Ft={debug:Mt.DEBUG,verbose:Mt.VERBOSE,info:Mt.INFO,warn:Mt.WARN,error:Mt.ERROR,silent:Mt.SILENT},Pt=Mt.INFO,Bt={[Mt.DEBUG]:"log",[Mt.VERBOSE]:"log",[Mt.INFO]:"info",[Mt.WARN]:"warn",[Mt.ERROR]:"error"},Ut=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=Bt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class qt{constructor(e){this.name=e,this._logLevel=Pt,this._logHandler=Ut,this._userLogHandler=null,Rt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Mt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?Ft[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Mt.DEBUG,...e),this._logHandler(this,Mt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Mt.VERBOSE,...e),this._logHandler(this,Mt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Mt.INFO,...e),this._logHandler(this,Mt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Mt.WARN,...e),this._logHandler(this,Mt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Mt.ERROR,...e),this._logHandler(this,Mt.ERROR,...e)}}function $t(e){Rt.forEach((t=>{t.setLogLevel(e)}))}function jt(e,t){for(const n of Rt){let r=null;t&&t.level&&(r=Ft[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const i=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:Mt[n].toLowerCase(),message:i,args:s,type:t.name})}}}const Wt=(e,t)=>t.some((t=>e instanceof t));let Gt,Kt;function zt(){return Gt||(Gt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ht(){return Kt||(Kt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qt=new WeakMap,Yt=new WeakMap,Xt=new WeakMap,Jt=new WeakMap,Zt=new WeakMap;function en(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(an(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Qt.set(t,e)})).catch((()=>{})),Zt.set(t,e),t}function tn(e){if(Yt.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));Yt.set(e,t)}let nn={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Yt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Xt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function rn(e){nn=e(nn)}function sn(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Ht().includes(e)?function(...t){return e.apply(cn(this),t),an(Qt.get(this))}:function(...t){return an(e.apply(cn(this),t))}:function(t,...n){const r=e.call(cn(this),t,...n);return Xt.set(r,t.sort?t.sort():[t]),an(r)}}function on(e){return"function"===typeof e?sn(e):(e instanceof IDBTransaction&&tn(e),Wt(e,zt())?new Proxy(e,nn):e)}function an(e){if(e instanceof IDBRequest)return en(e);if(Jt.has(e))return Jt.get(e);const t=on(e);return t!==e&&(Jt.set(e,t),Zt.set(t,e)),t}const cn=e=>Zt.get(e);function un(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=an(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(an(o.result),e.oldVersion,e.newVersion,an(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const ln=["get","getKey","getAll","getAllKeys","count"],hn=["put","add","delete","clear"],dn=new Map;function fn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(dn.get(t))return dn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=hn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!ln.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return dn.set(t,i),i}rn((e=>({...e,get:(t,n,r)=>fn(t,n)||e.get(t,n,r),has:(t,n)=>!!fn(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(gn(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function gn(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const pn="@firebase/app",yn="0.7.29",vn=new qt("@firebase/app"),wn="@firebase/app-compat",bn="@firebase/analytics-compat",_n="@firebase/analytics",In="@firebase/app-check-compat",En="@firebase/app-check",xn="@firebase/auth",Tn="@firebase/auth-compat",Sn="@firebase/database",Dn="@firebase/database-compat",Cn="@firebase/functions",kn="@firebase/functions-compat",An="@firebase/installations",Nn="@firebase/installations-compat",Ln="@firebase/messaging",On="@firebase/messaging-compat",Vn="@firebase/performance",Rn="@firebase/performance-compat",Mn="@firebase/remote-config",Fn="@firebase/remote-config-compat",Pn="@firebase/storage",Bn="@firebase/storage-compat",Un="@firebase/firestore",qn="@firebase/firestore-compat",$n="firebase",jn="9.9.1",Wn="[DEFAULT]",Gn={[pn]:"fire-core",[wn]:"fire-core-compat",[_n]:"fire-analytics",[bn]:"fire-analytics-compat",[En]:"fire-app-check",[In]:"fire-app-check-compat",[xn]:"fire-auth",[Tn]:"fire-auth-compat",[Sn]:"fire-rtdb",[Dn]:"fire-rtdb-compat",[Cn]:"fire-fn",[kn]:"fire-fn-compat",[An]:"fire-iid",[Nn]:"fire-iid-compat",[Ln]:"fire-fcm",[On]:"fire-fcm-compat",[Vn]:"fire-perf",[Rn]:"fire-perf-compat",[Mn]:"fire-rc",[Fn]:"fire-rc-compat",[Pn]:"fire-gcs",[Bn]:"fire-gcs-compat",[Un]:"fire-fst",[qn]:"fire-fst-compat","fire-js":"fire-js",[$n]:"fire-js-all"},Kn=new Map,zn=new Map;function Hn(e,t){try{e.container.addComponent(t)}catch(n){vn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qn(e,t){e.container.addOrOverwriteComponent(t)}function Yn(e){const t=e.name;if(zn.has(t))return vn.debug(`There were multiple attempts to register component ${t}.`),!1;zn.set(t,e);for(const n of Kn.values())Hn(n,e);return!0}function Xn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Jn(e,t,n=Wn){Xn(e,t).clearInstance(n)}function Zn(){zn.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},tr=new vt("app","Firebase",er);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new kt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=jn;function sr(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:Wn,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw tr.create("bad-app-name",{appName:String(r)});const s=Kn.get(r);if(s){if(It(e,s.options)&&It(n,s.config))return s;throw tr.create("duplicate-app",{appName:r})}const i=new Vt(r);for(const a of zn.values())i.addComponent(a);const o=new nr(e,n,i);return Kn.set(r,o),o}function ir(e=Wn){const t=Kn.get(e);if(!t)throw tr.create("no-app",{appName:e});return t}function or(){return Array.from(Kn.values())}async function ar(e){const t=e.name;Kn.has(t)&&(Kn.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function cr(e,t,n){var r;let s=null!==(r=Gn[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void vn.warn(e.join(" "))}Yn(new kt(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function ur(e,t){if(null!==e&&"function"!==typeof e)throw tr.create("invalid-log-argument");jt(e,t)}function lr(e){$t(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="firebase-heartbeat-database",dr=1,fr="firebase-heartbeat-store";let mr=null;function gr(){return mr||(mr=un(hr,dr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fr)}}}).catch((e=>{throw tr.create("storage-open",{originalErrorMessage:e.message})}))),mr}async function pr(e){var t;try{const t=await gr();return t.transaction(fr).objectStore(fr).get(vr(e))}catch(n){throw tr.create("storage-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}async function yr(e,t){var n;try{const n=await gr(),r=n.transaction(fr,"readwrite"),s=r.objectStore(fr);return await s.put(t,vr(e)),r.done}catch(r){throw tr.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function vr(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=1024,br=2592e6;class _r{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xr(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ir();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=br})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ir(),{heartbeatsToSend:t,unsentEntries:n}=Er(this._heartbeatsCache.heartbeats),r=Ze(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ir(){const e=new Date;return e.toISOString().substring(0,10)}function Er(e,t=wr){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Tr(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Tr(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!mt()&&gt().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await pr(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return yr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return yr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Tr(e){return Ze(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(e){Yn(new kt("platform-logger",(e=>new mn(e)),"PRIVATE")),Yn(new kt("heartbeat",(e=>new _r(e)),"PRIVATE")),cr(pn,yn,e),cr(pn,yn,"esm2017"),cr("fire-js","")}Sr("");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dr{constructor(e,t){this._delegate=e,this.firebase=t,Hn(e,new kt("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),ar(this._delegate))))}_getService(e,t=Wn){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Wn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Hn(this._delegate,e)}_addOrOverwriteComponent(e){Qn(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},kr=new vt("app-compat","Firebase",Cr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ar(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:cr,setLogLevel:lr,onLog:ur,apps:null,SDK_VERSION:rr,INTERNAL:{registerComponent:c,removeApp:s,useAsService:u,modularAPIs:r}};function s(e){delete t[e]}function i(e){if(e=e||Wn,!_t(t,e))throw kr.create("no-app",{appName:e});return t[e]}function o(r,s={}){const i=sr(r,s);if(_t(t,i.name))return t[i.name];const o=new e(i,n);return t[i.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function c(t){const r=t.name,s=r.replace("-compat","");if(Yn(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!==typeof e[s])throw kr.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&et(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),i["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){const e=Ar(Dr);function t(t){et(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Nr,extendNamespace:t,createSubscribe:xt,ErrorFactory:vt,deepExtend:et}),e}const Lr=Nr(),Or=new qt("@firebase/app-compat"),Vr="@firebase/app-compat",Rr="0.1.30";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mr(e){cr(Vr,Rr,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(at()&&void 0!==self.firebase){Or.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Or.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const Fr=Lr;Mr();var Pr="firebase",Br="9.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fr.registerVersion(Pr,Br,"app-compat");n(8675),n(3462),n(7380),n(1118),n(2262),n(4506);var Ur,qr="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},$r={},jr=jr||{},Wr=qr||self;function Gr(){}function Kr(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function zr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function Hr(e){return Object.prototype.hasOwnProperty.call(e,Qr)&&e[Qr]||(e[Qr]=++Yr)}var Qr="closure_uid_"+(1e9*Math.random()>>>0),Yr=0;function Xr(e,t,n){return e.call.apply(e.bind,arguments)}function Jr(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Zr(e,t,n){return Zr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xr:Jr,Zr.apply(null,arguments)}function es(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function ts(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function ns(){this.s=this.s,this.o=this.o}var rs=0,ss={};ns.prototype.s=!1,ns.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=rs)){var e=Hr(this);delete ss[e]}},ns.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const is=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},os=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"===typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function as(e){e:{var t=Ta;const n=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function cs(e){return Array.prototype.concat.apply([],arguments)}function us(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ls(e){return/^[\s\xa0]*$/.test(e)}var hs,ds=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function fs(e,t){return-1!=e.indexOf(t)}function ms(e,t){return e<t?-1:e>t?1:0}e:{var gs=Wr.navigator;if(gs){var ps=gs.userAgent;if(ps){hs=ps;break e}}hs=""}function ys(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function vs(e){const t={};for(const n in e)t[n]=e[n];return t}var ws="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bs(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<ws.length;t++)n=ws[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function _s(e){return _s[" "](e),e}function Is(e){var t=Rs;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}_s[" "]=Gr;var Es,xs=fs(hs,"Opera"),Ts=fs(hs,"Trident")||fs(hs,"MSIE"),Ss=fs(hs,"Edge"),Ds=Ss||Ts,Cs=fs(hs,"Gecko")&&!(fs(hs.toLowerCase(),"webkit")&&!fs(hs,"Edge"))&&!(fs(hs,"Trident")||fs(hs,"MSIE"))&&!fs(hs,"Edge"),ks=fs(hs.toLowerCase(),"webkit")&&!fs(hs,"Edge");function As(){var e=Wr.document;return e?e.documentMode:void 0}e:{var Ns="",Ls=function(){var e=hs;return Cs?/rv:([^\);]+)(\)|;)/.exec(e):Ss?/Edge\/([\d\.]+)/.exec(e):Ts?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):ks?/WebKit\/(\S+)/.exec(e):xs?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Ls&&(Ns=Ls?Ls[1]:""),Ts){var Os=As();if(null!=Os&&Os>parseFloat(Ns)){Es=String(Os);break e}}Es=Ns}var Vs,Rs={};function Ms(){return Is((function(){let e=0;const t=ds(String(Es)).split("."),n=ds("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=ms(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||ms(0==s[2].length,0==i[2].length)||ms(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(Wr.document&&Ts){var Fs=As();Vs=Fs||(parseInt(Es,10)||void 0)}else Vs=void 0;var Ps=Vs,Bs=function(){if(!Wr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Wr.addEventListener("test",Gr,t),Wr.removeEventListener("test",Gr,t)}catch(n){}return e}();function Us(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function qs(e,t){if(Us.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Cs){e:{try{_s(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:$s[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&qs.Z.h.call(this)}}Us.prototype.h=function(){this.defaultPrevented=!0},ts(qs,Us);var $s={2:"touch",3:"pen",4:"mouse"};qs.prototype.h=function(){qs.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),Ws=0;function Gs(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++Ws,this.ca=this.fa=!1}function Ks(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function zs(e){this.src=e,this.g={},this.h=0}function Hs(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=is(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ks(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Qs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}zs.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Qs(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Gs(t,this.src,i,!!r,s),t.fa=n,e.push(t)),t};var Ys="closure_lm_"+(1e6*Math.random()|0),Xs={};function Js(e,t,n,r,s){if(r&&r.once)return ti(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Js(e,t[i],n,r,s);return null}return n=ci(n),e&&e[js]?e.N(t,n,zr(r)?!!r.capture:!!r,s):Zs(e,t,n,!1,r,s)}function Zs(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=zr(s)?!!s.capture:!!s,a=oi(e);if(a||(e[Ys]=a=new zs(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=ei(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Bs||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(si(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ei(){function e(n){return t.call(e.src,e.listener,n)}var t=ii;return e}function ti(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)ti(e,t[i],n,r,s);return null}return n=ci(n),e&&e[js]?e.O(t,n,zr(r)?!!r.capture:!!r,s):Zs(e,t,n,!0,r,s)}function ni(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ni(e,t[i],n,r,s);else r=zr(r)?!!r.capture:!!r,n=ci(n),e&&e[js]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Qs(i,n,r,s),-1<n&&(Ks(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=oi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Qs(t,n,r,s)),(n=-1<e?t[e]:null)&&ri(n))}function ri(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[js])Hs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(si(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=oi(t))?(Hs(n,e),0==n.h&&(n.src=null,t[Ys]=null)):Ks(e)}}}function si(e){return e in Xs?Xs[e]:Xs[e]="on"+e}function ii(e,t){if(e.ca)e=!0;else{t=new qs(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ri(e),e=n.call(r,t)}return e}function oi(e){return e=e[Ys],e instanceof zs?e:null}var ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function ci(e){return"function"===typeof e?e:(e[ai]||(e[ai]=function(t){return e.handleEvent(t)}),e[ai])}function ui(){ns.call(this),this.i=new zs(this),this.P=this,this.I=null}function li(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new Us(t,e);else if(t instanceof Us)t.target=t.target||e;else{var s=t;t=new Us(r,e),bs(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=hi(o,r,!0,t)&&s}if(o=t.g=e,s=hi(o,r,!0,t)&&s,s=hi(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=hi(o,r,!1,t)&&s}function hi(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Hs(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}ts(ui,ns),ui.prototype[js]=!0,ui.prototype.removeEventListener=function(e,t,n,r){ni(this,e,t,n,r)},ui.prototype.M=function(){if(ui.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ks(n[r]);delete t.g[e],t.h--}}this.I=null},ui.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ui.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var di=Wr.JSON.stringify;function fi(){var e=Ii;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class mi{constructor(){this.h=this.g=null}add(e,t){const n=pi.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var gi,pi=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new yi),(e=>e.reset()));class yi{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function vi(e){Wr.setTimeout((()=>{throw e}),0)}function wi(e,t){gi||bi(),_i||(gi(),_i=!0),Ii.add(e,t)}function bi(){var e=Wr.Promise.resolve(void 0);gi=function(){e.then(Ei)}}var _i=!1,Ii=new mi;function Ei(){for(var e;e=fi();){try{e.h.call(e.g)}catch(n){vi(n)}var t=pi;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_i=!1}function xi(e,t){ui.call(this),this.h=e||1,this.g=t||Wr,this.j=Zr(this.kb,this),this.l=Date.now()}function Ti(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Si(e,t,n){if("function"===typeof e)n&&(e=Zr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Zr(e.handleEvent,e)}return 2147483647<Number(t)?-1:Wr.setTimeout(e,t||0)}function Di(e){e.g=Si((()=>{e.g=null,e.i&&(e.i=!1,Di(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}ts(xi,ui),Ur=xi.prototype,Ur.da=!1,Ur.S=null,Ur.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),li(this,"tick"),this.da&&(Ti(this),this.start()))}},Ur.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ur.M=function(){xi.Z.M.call(this),Ti(this),delete this.g};class Ci extends ns{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Di(this)}M(){super.M(),this.g&&(Wr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(e){ns.call(this),this.h=e,this.g={}}ts(ki,ns);var Ai=[];function Ni(e,t,n,r){Array.isArray(n)||(n&&(Ai[0]=n.toString()),n=Ai);for(var s=0;s<n.length;s++){var i=Js(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Li(e){ys(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ri(e)}),e),e.g={}}function Oi(){this.g=!0}function Vi(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function Ri(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function Mi(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Pi(e,n)+(r?" "+r:"")}))}function Fi(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Pi(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return di(n)}catch(a){return t}}ki.prototype.M=function(){ki.Z.M.call(this),Li(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Oi.prototype.Aa=function(){this.g=!1},Oi.prototype.info=function(){};var Bi={},Ui=null;function qi(){return Ui=Ui||new ui}function $i(e){Us.call(this,Bi.Ma,e)}function ji(e){const t=qi();li(t,new $i(t,e))}function Wi(e,t){Us.call(this,Bi.STAT_EVENT,e),this.stat=t}function Gi(e){const t=qi();li(t,new Wi(t,e))}function Ki(e,t){Us.call(this,Bi.Na,e),this.size=t}function zi(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return Wr.setTimeout((function(){e()}),t)}Bi.Ma="serverreachability",ts($i,Us),Bi.STAT_EVENT="statevent",ts(Wi,Us),Bi.Na="timingevent",ts(Ki,Us);var Hi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Qi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Yi(){}function Xi(e){return e.h||(e.h=e.i())}function Ji(){}Yi.prototype.h=null;var Zi,eo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function to(){Us.call(this,"d")}function no(){Us.call(this,"c")}function ro(){}function so(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new ki(this),this.P=oo,e=Ds?125:void 0,this.W=new xi(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new io}function io(){this.i=null,this.g="",this.h=!1}ts(to,Us),ts(no,Us),ts(ro,Yi),ro.prototype.g=function(){return new XMLHttpRequest},ro.prototype.i=function(){return{}},Zi=new ro;var oo=45e3,ao={},co={};function uo(e,t,n){e.K=1,e.v=Ro(ko(t)),e.s=n,e.U=!0,lo(e,null)}function lo(e,t){e.F=Date.now(),go(e),e.A=ko(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Yo(n.h,"t",r),e.C=0,n=e.l.H,e.h=new io,e.g=nc(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ci(Zr(e.Ia,e,e.g),e.O)),Ni(e.V,e.g,"readystatechange",e.gb),t=e.H?vs(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ji(1),Vi(e.j,e.u,e.A,e.m,e.X,e.s)}function ho(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function fo(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=mo(e,n),r==co){4==t&&(e.o=4,Gi(14),s=!1),Mi(e.j,e.m,null,"[Incomplete Response]");break}if(r==ao){e.o=4,Gi(15),Mi(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Mi(e.j,e.m,r,null),bo(e,r)}ho(e)&&r!=co&&r!=ao&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Gi(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ha(t),t.L=!0,Gi(11))):(Mi(e.j,e.m,n,"[Invalid Chunked Response]"),wo(e),vo(e))}function mo(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?co:(n=Number(t.substring(n,r)),isNaN(n)?ao:(r+=1,r+n>t.length?co:(t=t.substr(r,n),e.C=r+n,t)))}function go(e){e.Y=Date.now()+e.P,po(e,e.P)}function po(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=zi(Zr(e.eb,e),t)}function yo(e){e.B&&(Wr.clearTimeout(e.B),e.B=null)}function vo(e){0==e.l.G||e.I||Xa(e.l,e)}function wo(e){yo(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ti(e.W),Li(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function bo(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||sa(n.i,e)))if(n.I=e.N,!e.J&&sa(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Ya(n),Pa(n)}za(n),Gi(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=zi(Zr(n.ab,n),6e3));if(1>=ra(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Za(n,11)}else if((e.J||n.g==e)&&Ya(n),!ls(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(fs(e,"spdy")||fs(e,"quic")||fs(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(ia(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Vo(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=tc(r,r.H?r.la:null,r.W),o.J){oa(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(yo(a),go(a)),r.g=o}else Ka(r);0<n.l.length&&qa(n)}else"stop"!=u[0]&&"close"!=u[0]||Za(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Za(n,7):Fa(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ji(4)}catch(u){}}function _o(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(Kr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Io(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Kr(e)||"string"===typeof e)os(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Kr(e)||"string"===typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=_o(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function Eo(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Eo)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function xo(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];To(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)r=e.g[t],To(s,r)||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function To(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Ur=so.prototype,Ur.setTimeout=function(e){this.P=e},Ur.gb=function(e){e=e.target;const t=this.L;t&&3==Na(e)?t.l():this.Ia(e)},Ur.Ia=function(e){try{if(e==this.g)e:{const l=Na(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Ds||this.g&&(this.h.h||this.g.ga()||La(this.g)))){this.I||4!=l||7==t||ji(8==t||0>=h?3:2),yo(this);var n=this.g.ba();this.N=n;t:if(ho(this)){var r=La(this.g);e="";var s=r.length,i=4==Na(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){wo(this),vo(this);var o="";break t}this.h.i=new Wr.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Ri(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ls(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Gi(12),wo(this),vo(this);break e}Mi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,bo(this,n)}this.U?(fo(this,l,o),Ds&&this.i&&3==l&&(Ni(this.V,this.W,"tick",this.fb),this.W.start())):(Mi(this.j,this.m,o,null),bo(this,o)),4==l&&wo(this),this.i&&!this.I&&(4==l?Xa(this.l,this):(this.i=!1,go(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Gi(12)):(this.o=0,Gi(13)),wo(this),vo(this)}}}catch(l){}},Ur.fb=function(){if(this.g){var e=Na(this.g),t=this.g.ga();this.C<t.length&&(yo(this),fo(this,e,t),this.i&&4!=e&&go(this))}},Ur.cancel=function(){this.I=!0,wo(this)},Ur.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Fi(this.j,this.A),2!=this.K&&(ji(3),Gi(17)),wo(this),this.o=2,vo(this)):po(this,this.Y-e)},Ur=Eo.prototype,Ur.R=function(){xo(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Ur.T=function(){return xo(this),this.g.concat()},Ur.get=function(e,t){return To(this.h,e)?this.h[e]:t},Ur.set=function(e,t){To(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Ur.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var So=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Do(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Co(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Co){this.g=void 0!==t?t:e.g,Ao(this,e.j),this.s=e.s,No(this,e.i),Lo(this,e.m),this.l=e.l,t=e.h;var n=new Ko;n.i=t.i,t.g&&(n.g=new Eo(t.g),n.h=t.h),Oo(this,n),this.o=e.o}else e&&(n=String(e).match(So))?(this.g=!!t,Ao(this,n[1]||"",!0),this.s=Po(n[2]||""),No(this,n[3]||"",!0),Lo(this,n[4]),this.l=Po(n[5]||"",!0),Oo(this,n[6]||"",!0),this.o=Po(n[7]||"")):(this.g=!!t,this.h=new Ko(null,this.g))}function ko(e){return new Co(e)}function Ao(e,t,n){e.j=n?Po(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function No(e,t,n){e.i=n?Po(t,!0):t}function Lo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Oo(e,t,n){t instanceof Ko?(e.h=t,Jo(e.h,e.g)):(n||(t=Bo(t,Wo)),e.h=new Ko(t,e.g))}function Vo(e,t,n){e.h.set(t,n)}function Ro(e){return Vo(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Mo(e){return e instanceof Co?ko(e):new Co(e,void 0)}function Fo(e,t,n,r){var s=new Co(null,void 0);return e&&Ao(s,e),t&&No(s,t),n&&Lo(s,n),r&&(s.l=r),s}function Po(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Bo(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Uo),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Uo(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Co.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Bo(t,qo,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Bo(t,qo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Bo(n,"/"==n.charAt(0)?jo:$o,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Bo(n,Go)),e.join("")};var qo=/[#\/\?@]/g,$o=/[#\?:]/g,jo=/[#\?]/g,Wo=/[#\?@]/g,Go=/#/g;function Ko(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zo(e){e.g||(e.g=new Eo,e.h=0,e.i&&Do(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ho(e,t){zo(e),t=Xo(e,t),To(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,To(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&xo(e)))}function Qo(e,t){return zo(e),t=Xo(e,t),To(e.g.h,t)}function Yo(e,t,n){Ho(e,t),0<n.length&&(e.i=null,e.g.set(Xo(e,t),us(n)),e.h+=n.length)}function Xo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Jo(e,t){t&&!e.j&&(zo(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ho(this,t),Yo(this,n,e))}),e)),e.j=t}Ur=Ko.prototype,Ur.add=function(e,t){zo(this),this.i=null,e=Xo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Ur.forEach=function(e,t){zo(this),this.g.forEach((function(n,r){os(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Ur.T=function(){zo(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},Ur.R=function(e){zo(this);var t=[];if("string"===typeof e)Qo(this,e)&&(t=cs(t,this.g.get(Xo(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=cs(t,e[n])}return t},Ur.set=function(e,t){return zo(this),this.i=null,e=Xo(this,e),Qo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Ur.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},Ur.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};var Zo=class{constructor(e,t){this.h=e,this.g=t}};function ea(e){this.l=e||ta,Wr.PerformanceNavigationTiming?(e=Wr.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(Wr.g&&Wr.g.Ea&&Wr.g.Ea()&&Wr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ta=10;function na(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ra(e){return e.h?1:e.g?e.g.size:0}function sa(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ia(e,t){e.g?e.g.add(t):e.h=t}function oa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function aa(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return us(e.i)}function ca(){}function ua(){this.g=new ca}function la(e,t,n){const r=n||"";try{Io(e,(function(e,n){let s=e;zr(e)&&(s=di(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function ha(e,t){const n=new Oi;if(Wr.Image){const r=new Image;r.onload=es(da,n,r,"TestLoadImage: loaded",!0,t),r.onerror=es(da,n,r,"TestLoadImage: error",!1,t),r.onabort=es(da,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=es(da,n,r,"TestLoadImage: timeout",!1,t),Wr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function da(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function fa(e){this.l=e.$b||null,this.j=e.ib||!1}function ma(e,t){ui.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ga,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ea.prototype.cancel=function(){if(this.i=aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ca.prototype.stringify=function(e){return Wr.JSON.stringify(e,void 0)},ca.prototype.parse=function(e){return Wr.JSON.parse(e,void 0)},ts(fa,Yi),fa.prototype.g=function(){return new ma(this.l,this.j)},fa.prototype.i=function(e){return function(){return e}}({}),ts(ma,ui);var ga=0;function pa(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function ya(e){e.readyState=4,e.l=null,e.j=null,e.A=null,va(e)}function va(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Ur=ma.prototype,Ur.open=function(e,t){if(this.readyState!=ga)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,va(this)},Ur.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Wr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Ur.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ya(this)),this.readyState=ga},Ur.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Wr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;pa(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Ur.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ya(this):va(this),3==this.readyState&&pa(this)}},Ur.Ua=function(e){this.g&&(this.response=this.responseText=e,ya(this))},Ur.Ta=function(e){this.g&&(this.response=e,ya(this))},Ur.ha=function(){this.g&&ya(this)},Ur.setRequestHeader=function(e,t){this.v.append(e,t)},Ur.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Ur.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ma.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var wa=Wr.JSON.parse;function ba(e){ui.call(this),this.headers=new Eo,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_a,this.K=this.L=!1}ts(ba,ui);var _a="",Ia=/^https?$/i,Ea=["POST","PUT"];function xa(e){return Ts&&Ms()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Ta(e){return"content-type"==e.toLowerCase()}function Sa(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Da(e),ka(e)}function Da(e){e.D||(e.D=!0,li(e,"complete"),li(e,"error"))}function Ca(e){if(e.h&&"undefined"!=typeof jr&&(!e.C[1]||4!=Na(e)||2!=e.ba()))if(e.v&&4==Na(e))Si(e.Fa,0,e);else if(li(e,"readystatechange"),4==Na(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(So)[1]||null;if(!s&&Wr.self&&Wr.self.location){var i=Wr.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ia.test(s?s.toLowerCase():"")}n=r}if(n)li(e,"complete"),li(e,"success");else{e.m=6;try{var o=2<Na(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Da(e)}}finally{ka(e)}}}function ka(e,t){if(e.g){Aa(e);const r=e.g,s=e.C[0]?Gr:null;e.g=null,e.C=null,t||li(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Aa(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Wr.clearTimeout(e.A),e.A=null)}function Na(e){return e.g?e.g.readyState:0}function La(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case _a:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Oa(e){let t="";return ys(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Va(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Oa(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Vo(e,t,n))}function Ra(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ma(e){this.za=0,this.l=[],this.h=new Oi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ra("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ra("baseRetryDelayMs",5e3,e),this.$a=Ra("retryDelaySeedMs",1e4,e),this.Ya=Ra("forwardChannelMaxRetries",2,e),this.ra=Ra("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ea(e&&e.concurrentRequestLimit),this.Ca=new ua,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Fa(e){if(Ba(e),3==e.G){var t=e.V++,n=ko(e.F);Vo(n,"SID",e.J),Vo(n,"RID",t),Vo(n,"TYPE","terminate"),Wa(e,n),t=new so(e,e.h,t,void 0),t.K=2,t.v=Ro(ko(n)),n=!1,Wr.navigator&&Wr.navigator.sendBeacon&&(n=Wr.navigator.sendBeacon(t.v.toString(),"")),!n&&Wr.Image&&((new Image).src=t.v,n=!0),n||(t.g=nc(t.l,null),t.g.ea(t.v)),t.F=Date.now(),go(t)}ec(e)}function Pa(e){e.g&&(Ha(e),e.g.cancel(),e.g=null)}function Ba(e){Pa(e),e.u&&(Wr.clearTimeout(e.u),e.u=null),Ya(e),e.i.cancel(),e.m&&("number"===typeof e.m&&Wr.clearTimeout(e.m),e.m=null)}function Ua(e,t){e.l.push(new Zo(e.Za++,t)),3==e.G&&qa(e)}function qa(e){na(e.i)||e.m||(e.m=!0,wi(e.Ha,e),e.C=0)}function $a(e,t){return!(ra(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=zi(Zr(e.Ha,e,t),Ja(e,e.C)),e.C++,!0))}function ja(e,t){var n;n=t?t.m:e.V++;const r=ko(e.F);Vo(r,"SID",e.J),Vo(r,"RID",n),Vo(r,"AID",e.U),Wa(e,r),e.o&&e.s&&Va(r,e.o,e.s),n=new so(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Ga(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),ia(e.i,n),uo(n,r,t)}function Wa(e,t){e.j&&Io({},(function(e,n){Vo(t,n,e)}))}function Ga(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Zr(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{la(a,e,"req"+n+"_")}catch(Lc){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Ka(e){e.g||e.u||(e.Y=1,wi(e.Ga,e),e.A=0)}function za(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=zi(Zr(e.Ga,e),Ja(e,e.A)),e.A++,!0)}function Ha(e){null!=e.B&&(Wr.clearTimeout(e.B),e.B=null)}function Qa(e){e.g=new so(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=ko(e.oa);Vo(t,"RID","rpc"),Vo(t,"SID",e.J),Vo(t,"CI",e.N?"0":"1"),Vo(t,"AID",e.U),Wa(e,t),Vo(t,"TYPE","xmlhttp"),e.o&&e.s&&Va(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Ro(ko(t)),n.s=null,n.U=!0,lo(n,e)}function Ya(e){null!=e.v&&(Wr.clearTimeout(e.v),e.v=null)}function Xa(e,t){var n=null;if(e.g==t){Ya(e),Ha(e),e.g=null;var r=2}else{if(!sa(e.i,t))return;n=t.D,oa(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=qi(),li(r,new Ki(r,n,t,s)),qa(e)}else Ka(e);else if(s=t.o,3==s||0==s&&0<e.I||!(1==r&&$a(e,t)||2==r&&za(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Za(e,5);break;case 4:Za(e,10);break;case 3:Za(e,6);break;default:Za(e,2)}}function Ja(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Za(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Zr(e.jb,e);n||(n=new Co("//www.google.com/images/cleardot.gif"),Wr.location&&"http"==Wr.location.protocol||Ao(n,"https"),Ro(n)),ha(n.toString(),r)}else Gi(2);e.G=0,e.j&&e.j.va(t),ec(e),Ba(e)}function ec(e){e.G=0,e.I=-1,e.j&&(0==aa(e.i).length&&0==e.l.length||(e.i.i.length=0,us(e.l),e.l.length=0),e.j.ua())}function tc(e,t,n){let r=Mo(n);if(""!=r.i)t&&No(r,t+"."+r.i),Lo(r,r.m);else{const e=Wr.location;r=Fo(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&ys(e.aa,(function(e,t){Vo(r,t,e)})),t=e.D,n=e.sa,t&&n&&Vo(r,t,n),Vo(r,"VER",e.ma),Wa(e,r),r}function nc(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new ba(new fa({ib:!0})):new ba(e.qa),t.L=e.H,t}function rc(){}function sc(){if(Ts&&!(10<=Number(Ps)))throw Error("Environmental error: no available transport.")}function ic(e,t){ui.call(this),this.g=new Ma(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!ls(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ls(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new cc(this)}function oc(e){to.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ac(){no.call(this),this.status=1}function cc(e){this.g=e}Ur=ba.prototype,Ur.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zi.g(),this.C=this.u?Xi(this.u):Xi(Zi),this.g.onreadystatechange=Zr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Sa(this,i)}e=n||"";const s=new Eo(this.headers);r&&Io(r,(function(e,t){s.set(t,e)})),r=as(s.T()),n=Wr.FormData&&e instanceof Wr.FormData,!(0<=is(Ea,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Aa(this),0<this.B&&((this.K=xa(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Zr(this.pa,this)):this.A=Si(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Sa(this,i)}},Ur.pa=function(){"undefined"!=typeof jr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,li(this,"timeout"),this.abort(8))},Ur.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,li(this,"complete"),li(this,"abort"),ka(this))},Ur.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ka(this,!0)),ba.Z.M.call(this)},Ur.Fa=function(){this.s||(this.F||this.v||this.l?Ca(this):this.cb())},Ur.cb=function(){Ca(this)},Ur.ba=function(){try{return 2<Na(this)?this.g.status:-1}catch(e){return-1}},Ur.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Ur.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),wa(t)}},Ur.Da=function(){return this.m},Ur.La=function(){return"string"===typeof this.j?this.j:String(this.j)},Ur=Ma.prototype,Ur.ma=8,Ur.G=1,Ur.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},Ur.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new so(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=vs(i),bs(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ga(this,s,t),n=ko(this.F),Vo(n,"RID",e),Vo(n,"CVER",22),this.D&&Vo(n,"X-HTTP-Session-Id",this.D),Wa(this,n),this.o&&i&&Va(n,this.o,i),ia(this.i,s),this.Ra&&Vo(n,"TYPE","init"),this.ja?(Vo(n,"$req",t),Vo(n,"SID","null"),s.$=!0,uo(s,n,null)):uo(s,n,t),this.G=2}}else 3==this.G&&(e?ja(this,e):0==this.l.length||na(this.i)||ja(this))},Ur.Ga=function(){if(this.u=null,Qa(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=zi(Zr(this.bb,this),e)}},Ur.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Gi(10),Pa(this),Qa(this))},Ur.ab=function(){null!=this.v&&(this.v=null,Pa(this),za(this),Gi(19))},Ur.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Gi(2)):(this.h.info("Failed to ping google.com"),Gi(1))},Ur=rc.prototype,Ur.xa=function(){},Ur.wa=function(){},Ur.va=function(){},Ur.ua=function(){},Ur.Oa=function(){},sc.prototype.g=function(e,t){return new ic(e,t)},ts(ic,ui),ic.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),wi(Zr(e.hb,e,t))),Gi(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=tc(e,null,e.W),qa(e)},ic.prototype.close=function(){Fa(this.g)},ic.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,Ua(this.g,t)}else this.v?(t={},t.__data__=di(e),Ua(this.g,t)):Ua(this.g,e)},ic.prototype.M=function(){this.g.j=null,delete this.j,Fa(this.g),delete this.g,ic.Z.M.call(this)},ts(oc,to),ts(ac,no),ts(cc,rc),cc.prototype.xa=function(){li(this.g,"a")},cc.prototype.wa=function(e){li(this.g,new oc(e))},cc.prototype.va=function(e){li(this.g,new ac(e))},cc.prototype.ua=function(){li(this.g,"b")},sc.prototype.createWebChannel=sc.prototype.g,ic.prototype.send=ic.prototype.u,ic.prototype.open=ic.prototype.m,ic.prototype.close=ic.prototype.close,Hi.NO_ERROR=0,Hi.TIMEOUT=8,Hi.HTTP_ERROR=6,Qi.COMPLETE="complete",Ji.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",ui.prototype.listen=ui.prototype.N,ba.prototype.listenOnce=ba.prototype.O,ba.prototype.getLastError=ba.prototype.La,ba.prototype.getLastErrorCode=ba.prototype.Da,ba.prototype.getStatus=ba.prototype.ba,ba.prototype.getResponseJson=ba.prototype.Qa,ba.prototype.getResponseText=ba.prototype.ga,ba.prototype.send=ba.prototype.ea;var uc=$r.createWebChannelTransport=function(){return new sc},lc=$r.getStatEventTarget=function(){return qi()},hc=$r.ErrorCode=Hi,dc=$r.EventType=Qi,fc=$r.Event=Bi,mc=$r.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},gc=$r.FetchXmlHttpFactory=fa,pc=$r.WebChannel=Ji,yc=$r.XhrIo=ba;const vc="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wc.UNAUTHENTICATED=new wc(null),wc.GOOGLE_CREDENTIALS=new wc("google-credentials-uid"),wc.FIRST_PARTY=new wc("first-party-uid"),wc.MOCK_USER=new wc("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let bc="9.9.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new qt("@firebase/firestore");function Ic(){return _c.logLevel}function Ec(e){_c.setLogLevel(e)}function xc(e,...t){if(_c.logLevel<=Mt.DEBUG){const n=t.map(Dc);_c.debug(`Firestore (${bc}): ${e}`,...n)}}function Tc(e,...t){if(_c.logLevel<=Mt.ERROR){const n=t.map(Dc);_c.error(`Firestore (${bc}): ${e}`,...n)}}function Sc(e,...t){if(_c.logLevel<=Mt.WARN){const n=t.map(Dc);_c.warn(`Firestore (${bc}): ${e}`,...n)}}function Dc(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(e="Unexpected state"){const t=`FIRESTORE (${bc}) INTERNAL ASSERTION FAILED: `+e;throw Tc(t),new Error(t)}function kc(e,t){e||Cc()}function Ac(e,t){e||Cc()}function Nc(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Oc extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(wc.UNAUTHENTICATED)))}shutdown(){}}class Fc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Pc{constructor(e){this.t=e,this.currentUser=wc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Vc;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vc,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{xc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(xc("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vc)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(xc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(kc("string"==typeof t.accessToken),new Rc(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return kc(null===e||"string"==typeof e),new wc(e)}}class Bc{constructor(e,t,n){this.type="FirstParty",this.user=wc.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Uc{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Bc(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(wc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $c{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&xc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,xc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{xc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):xc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(kc("string"==typeof e.token),this.p=e.token,new qc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=jc(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function Gc(e,t){return e<t?-1:e>t?1:0}function Kc(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function zc(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Oc(Lc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Oc(Lc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Oc(Lc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Oc(Lc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Hc.fromMillis(Date.now())}static fromDate(e){return Hc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Hc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Gc(this.nanoseconds,e.nanoseconds):Gc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Qc(e)}static min(){return new Qc(new Hc(0,0))}static max(){return new Qc(new Hc(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,n){void 0===t?t=0:t>e.length&&Cc(),void 0===n?n=e.length-t:n>e.length-t&&Cc(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Yc.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Yc?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Xc extends Yc{construct(e,t,n){return new Xc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Oc(Lc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Xc(t)}static emptyPath(){return new Xc([])}}const Jc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zc extends Yc{construct(e,t,n){return new Zc(e,t,n)}static isValidIdentifier(e){return Jc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Zc(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Oc(Lc.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Oc(Lc.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Oc(Lc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Oc(Lc.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zc(t)}static emptyPath(){return new Zc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.path=e}static fromPath(e){return new eu(Xc.fromString(e))}static fromName(e){return new eu(Xc.fromString(e).popFirst(5))}static empty(){return new eu(Xc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Xc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Xc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new eu(new Xc(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function nu(e){return e.fields.find((e=>2===e.kind))}function ru(e){return e.fields.filter((e=>2!==e.kind))}tu.UNKNOWN_ID=-1;class su{constructor(e,t){this.fieldPath=e,this.kind=t}}class iu{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new iu(0,cu.min())}}function ou(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=Qc.fromTimestamp(1e9===r?new Hc(n+1,0):new Hc(n,r));return new cu(s,eu.empty(),t)}function au(e){return new cu(e.readTime,e.key,-1)}class cu{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new cu(Qc.min(),eu.empty(),-1)}static max(){return new cu(Qc.max(),eu.empty(),-1)}}function uu(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=eu.comparator(e.documentKey,t.documentKey),0!==n?n:Gc(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(e){if(e.code!==Lc.FAILED_PRECONDITION||e.message!==lu)throw e;xc("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Cc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new fu(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof fu?t:fu.resolve(t)}catch(e){return fu.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):fu.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):fu.reject(t)}static resolve(e){return new fu(((t,n)=>{t(e)}))}static reject(e){return new fu(((t,n)=>{n(e)}))}static waitFor(e){return new fu(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=fu.resolve(!1);for(const n of e)t=t.next((e=>e?fu.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new fu(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new fu(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new Vc,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new yu(e,t.error)):this.T.resolve()},this.transaction.onerror=t=>{const n=Iu(t.target.error);this.T.reject(new yu(e,n))}}static open(e,t,n,r){try{return new mu(t,e.transaction(r,n))}catch(e){throw new yu(t,e)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(xc("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new wu(t)}}class gu{constructor(e,t,n){this.name=e,this.version=t,this.P=n,12.2===gu.v(st())&&Tc("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return xc("SimpleDb","Removing database:",e),bu(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!mt())return!1;if(gu.S())return!0;const e=st(),t=gu.v(e),n=0<t&&t<10,r=gu.D(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static S(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.C)}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(e){return this.db||(xc("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new yu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new Oc(Lc.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new Oc(Lc.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new yu(e,r))},r.onupgradeneeded=e=>{xc("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.P.O(t,r.transaction,e.oldVersion,this.version).next((()=>{xc("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.M&&(this.db.onversionchange=e=>this.M(e)),this.db}F(e){this.M=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.k(e);const t=mu.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next((e=>(t.R(),e))).catch((e=>(t.abort(e),fu.reject(e)))).toPromise();return i.catch((()=>{})),await t.A,i}catch(e){const t=e,n="FirebaseError"!==t.name&&i<3;if(xc("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class pu{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return bu(this.$.delete())}}class yu extends Oc{constructor(e,t){super(Lc.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function vu(e){return"IndexedDbTransactionError"===e.name}class wu{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(xc("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(xc("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),bu(n)}add(e){return xc("SimpleDb","ADD",this.store.name,e,e),bu(this.store.add(e))}get(e){return bu(this.store.get(e)).next((t=>(void 0===t&&(t=null),xc("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return xc("SimpleDb","DELETE",this.store.name,e),bu(this.store.delete(e))}count(){return xc("SimpleDb","COUNT",this.store.name),bu(this.store.count())}K(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new fu(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new fu(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}W(e,t){xc("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Y(e){const t=this.cursor({});return new fu(((n,r)=>{t.onerror=e=>{const t=Iu(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new fu(((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new pu(s),o=t(s.primaryKey,s.value,i);if(o instanceof fu){const e=o.catch((e=>(i.done(),fu.reject(e))));n.push(e)}i.isDone?r():null===i.U?s.continue():s.continue(i.U)}})).next((()=>fu.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function bu(e){return new fu(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Iu(e.target.error);n(t)}}))}let _u=!1;function Iu(e){const t=gu.v(st());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new Oc("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return _u||(_u=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Eu{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(e){xc("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{xc("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(e){vu(e)?xc("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await du(e)}await this.Z(1)}))}}class xu{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.et(t,e)))}et(e,t){const n=new Set;let r=t,s=!0;return fu.doWhile((()=>!0===s&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return xc("IndexBackiller",`Processing collection: ${t}`),this.nt(e,t,r).next((e=>{r-=e,n.add(t)}));s=!1})))).next((()=>t-r))}nt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next((()=>this.st(r,n))).next((n=>(xc("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>s.size))}))))}st(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=au(t);uu(r,n)>0&&(n=r)})),new cu(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Du(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Cu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tu.ot=-1;class ku{constructor(e,t){this.comparator=e,this.root=t||Nu.EMPTY}insert(e,t){return new ku(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Nu.BLACK,null,null))}remove(e){return new ku(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nu.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Au(this.root,e,this.comparator,!1)}getReverseIterator(){return new Au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Au(this.root,e,this.comparator,!0)}}class Au{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nu{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Nu.RED,this.left=null!=r?r:Nu.EMPTY,this.right=null!=s?s:Nu.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Nu(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Nu.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Nu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Cc();if(this.right.isRed())throw Cc();const e=this.left.check();if(e!==this.right.check())throw Cc();return e+(this.isRed()?0:1)}}Nu.EMPTY=null,Nu.RED=!0,Nu.BLACK=!1,Nu.EMPTY=new class{constructor(){this.size=0}get key(){throw Cc()}get value(){throw Cc()}get color(){throw Cc()}get left(){throw Cc()}get right(){throw Cc()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Nu(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(e){this.comparator=e,this.data=new ku(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ou(this.data.getIterator())}getIteratorFrom(e){return new Ou(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Lu))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Lu(this.comparator);return t.data=e,t}}class Ou{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Vu(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.fields=e,e.sort(Zc.comparator)}static empty(){return new Ru([])}unionWith(e){let t=new Lu(Zc.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ru(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Kc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Fu(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Fu(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Gc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fu.EMPTY_BYTE_STRING=new Fu("");const Pu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bu(e){if(kc(!!e),"string"==typeof e){let t=0;const n=Pu.exec(e);if(kc(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Uu(e.seconds),nanos:Uu(e.nanos)}}function Uu(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function qu(e){return"string"==typeof e?Fu.fromBase64String(e):Fu.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ju(e){const t=e.mapValue.fields.__previous_value__;return $u(t)?ju(t):t}function Wu(e){const t=Bu(e.mapValue.fields.__local_write_time__.timestampValue);return new Hc(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ku{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ku("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ku&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(e){return null==e}function Hu(e){return 0===e&&1/e==-1/0}function Qu(e){return"number"==typeof e&&Number.isInteger(e)&&!Hu(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Xu={nullValue:"NULL_VALUE"};function Ju(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$u(e)?4:dl(e)?9007199254740991:10:Cc()}function Zu(e,t){if(e===t)return!0;const n=Ju(e);if(n!==Ju(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Wu(e).isEqual(Wu(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Bu(e.timestampValue),r=Bu(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return qu(e.bytesValue).isEqual(qu(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Uu(e.geoPointValue.latitude)===Uu(t.geoPointValue.latitude)&&Uu(e.geoPointValue.longitude)===Uu(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Uu(e.integerValue)===Uu(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Uu(e.doubleValue),r=Uu(t.doubleValue);return n===r?Hu(n)===Hu(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Kc(e.arrayValue.values||[],t.arrayValue.values||[],Zu);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Su(n)!==Su(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Zu(n[s],r[s])))return!1;return!0}(e,t);default:return Cc()}}function el(e,t){return void 0!==(e.values||[]).find((e=>Zu(e,t)))}function tl(e,t){if(e===t)return 0;const n=Ju(e),r=Ju(t);if(n!==r)return Gc(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Gc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Uu(e.integerValue||e.doubleValue),r=Uu(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return nl(e.timestampValue,t.timestampValue);case 4:return nl(Wu(e),Wu(t));case 5:return Gc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=qu(e),r=qu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=Gc(n[s],r[s]);if(0!==e)return e}return Gc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Gc(Uu(e.latitude),Uu(t.latitude));return 0!==n?n:Gc(Uu(e.longitude),Uu(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=tl(n[s],r[s]);if(e)return e}return Gc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Yu.mapValue&&t===Yu.mapValue)return 0;if(e===Yu.mapValue)return 1;if(t===Yu.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=Gc(r[o],i[o]);if(0!==e)return e;const t=tl(n[r[o]],s[i[o]]);if(0!==t)return t}return Gc(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Cc()}}function nl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Gc(e,t);const n=Bu(e),r=Bu(t),s=Gc(n.seconds,r.seconds);return 0!==s?s:Gc(n.nanos,r.nanos)}function rl(e){return sl(e)}function sl(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Bu(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?qu(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,eu.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=sl(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${sl(e.fields[s])}`;return n+"}"}(e.mapValue):Cc();var t,n}function il(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function ol(e){return!!e&&"integerValue"in e}function al(e){return!!e&&"arrayValue"in e}function cl(e){return!!e&&"nullValue"in e}function ul(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ll(e){return!!e&&"mapValue"in e}function hl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Du(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=hl(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=hl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function dl(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function fl(e){return"nullValue"in e?Xu:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?il(Ku.empty(),eu.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Cc()}function ml(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?il(Ku.empty(),eu.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?Yu:Cc()}function gl(e,t){const n=tl(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function pl(e,t){const n=tl(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.value=e}static empty(){return new yl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ll(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hl(t)}setAll(e){let t=Zc.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=hl(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());ll(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ll(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Du(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new yl(hl(this.value))}}function vl(e){const t=[];return Du(e.fields,((e,n)=>{const r=new Zc([e]);if(ll(n)){const e=vl(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Ru(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wl{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new wl(e,0,Qc.min(),Qc.min(),yl.empty(),0)}static newFoundDocument(e,t,n){return new wl(e,1,t,Qc.min(),n,0)}static newNoDocument(e,t){return new wl(e,2,t,Qc.min(),yl.empty(),0)}static newUnknownDocument(e,t){return new wl(e,3,t,Qc.min(),yl.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof wl&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wl(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function _l(e,t=null,n=[],r=[],s=null,i=null,o=null){return new bl(e,t,n,r,s,i,o)}function Il(e){const t=Nc(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+rl(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),zu(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>rl(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>rl(e))).join(",")),t.ut=e}return t.ut}function El(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${rl(t.value)}`;var t})).join(", ")}]`),zu(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>rl(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>rl(e))).join(",")),`Target(${t})`}function xl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!Ul(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Zu(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!$l(e.startAt,t.startAt)&&$l(e.endAt,t.endAt)}function Tl(e){return eu.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Sl(e,t){return e.filters.filter((e=>e instanceof kl&&e.field.isEqual(t)))}function Dl(e,t,n){let r=Xu,s=!0;for(const i of Sl(e,t)){let e=Xu,t=!0;switch(i.op){case"<":case"<=":e=fl(i.value);break;case"==":case"in":case">=":e=i.value;break;case">":e=i.value,t=!1;break;case"!=":case"not-in":e=Xu}gl({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];gl({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function Cl(e,t,n){let r=Yu,s=!0;for(const i of Sl(e,t)){let e=Yu,t=!0;switch(i.op){case">=":case">":e=ml(i.value),t=!1;break;case"==":case"in":case"<=":e=i.value;break;case"<":e=i.value,t=!1;break;case"!=":case"not-in":e=Yu}pl({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];pl({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}class kl extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new Al(e,t,n):"array-contains"===t?new Vl(e,n):"in"===t?new Rl(e,n):"not-in"===t?new Ml(e,n):"array-contains-any"===t?new Fl(e,n):new kl(e,t,n)}static ct(e,t,n){return"in"===t?new Nl(e,n):new Ll(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(tl(t,this.value)):null!==t&&Ju(this.value)===Ju(t)&&this.at(tl(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Cc()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Al extends kl{constructor(e,t,n){super(e,t,n),this.key=eu.fromName(n.referenceValue)}matches(e){const t=eu.comparator(e.key,this.key);return this.at(t)}}class Nl extends kl{constructor(e,t){super(e,"in",t),this.keys=Ol("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ll extends kl{constructor(e,t){super(e,"not-in",t),this.keys=Ol("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ol(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>eu.fromName(e.referenceValue)))}class Vl extends kl{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return al(t)&&el(t.arrayValue,this.value)}}class Rl extends kl{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&el(this.value.arrayValue,t)}}class Ml extends kl{constructor(e,t){super(e,"not-in",t)}matches(e){if(el(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!el(this.value.arrayValue,t)}}class Fl extends kl{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!al(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>el(this.value.arrayValue,e)))}}class Pl{constructor(e,t){this.position=e,this.inclusive=t}}class Bl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ul(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ql(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?eu.comparator(eu.fromName(o.referenceValue),n.key):tl(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function $l(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Zu(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Wl(e,t,n,r,s,i,o,a){return new jl(e,t,n,r,s,i,o,a)}function Gl(e){return new jl(e)}function Kl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function zl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Hl(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Ql(e){return null!==e.collectionGroup}function Yl(e){const t=Nc(e);if(null===t.lt){t.lt=[];const e=Hl(t),n=zl(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new Bl(e)),t.lt.push(new Bl(Zc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Bl(Zc.keyField(),e))}}}return t.lt}function Xl(e){const t=Nc(e);if(!t.ft)if("F"===t.limitType)t.ft=_l(t.path,t.collectionGroup,Yl(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of Yl(t)){const t="desc"===s.dir?"asc":"desc";e.push(new Bl(s.field,t))}const n=t.endAt?new Pl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Pl(t.startAt.position,t.startAt.inclusive):null;t.ft=_l(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function Jl(e,t,n){return new jl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zl(e,t){return xl(Xl(e),Xl(t))&&e.limitType===t.limitType}function eh(e){return`${Il(Xl(e))}|lt:${e.limitType}`}function th(e){return`Query(target=${El(Xl(e))}; limitType=${e.limitType})`}function nh(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):eu.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=ql(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Yl(e),t))&&!(e.endAt&&!function(e,t,n){const r=ql(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Yl(e),t))}(e,t)}function rh(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function sh(e){return(t,n)=>{let r=!1;for(const s of Yl(e)){const e=ih(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function ih(e,t,n){const r=e.field.isKeyField()?eu.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?tl(r,s):Cc()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Cc()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hu(t)?"-0":t}}function ah(e){return{integerValue:""+e}}function ch(e,t){return Qu(t)?ah(t):oh(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function lh(e,t,n){return e instanceof fh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof mh?gh(e,t):e instanceof ph?yh(e,t):function(e,t){const n=dh(e,t),r=wh(n)+wh(e._t);return ol(n)&&ol(e._t)?ah(r):oh(e.wt,r)}(e,t)}function hh(e,t,n){return e instanceof mh?gh(e,t):e instanceof ph?yh(e,t):n}function dh(e,t){return e instanceof vh?ol(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class fh extends uh{}class mh extends uh{constructor(e){super(),this.elements=e}}function gh(e,t){const n=bh(t);for(const r of e.elements)n.some((e=>Zu(e,r)))||n.push(r);return{arrayValue:{values:n}}}class ph extends uh{constructor(e){super(),this.elements=e}}function yh(e,t){let n=bh(t);for(const r of e.elements)n=n.filter((e=>!Zu(e,r)));return{arrayValue:{values:n}}}class vh extends uh{constructor(e,t){super(),this.wt=e,this._t=t}}function wh(e){return Uu(e.integerValue||e.doubleValue)}function bh(e){return al(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.field=e,this.transform=t}}function Ih(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof mh&&t instanceof mh||e instanceof ph&&t instanceof ph?Kc(e.elements,t.elements,Zu):e instanceof vh&&t instanceof vh?Zu(e._t,t._t):e instanceof fh&&t instanceof fh}(e.transform,t.transform)}class Eh{constructor(e,t){this.version=e,this.transformResults=t}}class xh{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xh}static exists(e){return new xh(void 0,e)}static updateTime(e){return new xh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Th(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Sh{}function Dh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Fh(e.key,xh.none()):new Lh(e.key,e.data,xh.none());{const n=e.data,r=yl.empty();let s=new Lu(Zc.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Oh(e.key,r,new Ru(s.toArray()),xh.none())}}function Ch(e,t,n){e instanceof Lh?function(e,t,n){const r=e.value.clone(),s=Rh(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Oh?function(e,t,n){if(!Th(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Rh(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Vh(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function kh(e,t,n,r){return e instanceof Lh?function(e,t,n,r){if(!Th(e.precondition,t))return n;const s=e.value.clone(),i=Mh(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Oh?function(e,t,n,r){if(!Th(e.precondition,t))return n;const s=Mh(e.fieldTransforms,r,t),i=t.data;return i.setAll(Vh(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Th(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Ah(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=dh(r.transform,e||null);null!=s&&(null===n&&(n=yl.empty()),n.set(r.field,s))}return n||null}function Nh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Kc(e,t,((e,t)=>Ih(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Lh extends Sh{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Oh extends Sh{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Vh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Rh(e,t,n){const r=new Map;kc(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,hh(o,a,n[s]))}return r}function Mh(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,lh(e,i,t))}return r}class Fh extends Sh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ph extends Sh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Uh,qh;function $h(e){switch(e){default:return Cc();case Lc.CANCELLED:case Lc.UNKNOWN:case Lc.DEADLINE_EXCEEDED:case Lc.RESOURCE_EXHAUSTED:case Lc.INTERNAL:case Lc.UNAVAILABLE:case Lc.UNAUTHENTICATED:return!1;case Lc.INVALID_ARGUMENT:case Lc.NOT_FOUND:case Lc.ALREADY_EXISTS:case Lc.PERMISSION_DENIED:case Lc.FAILED_PRECONDITION:case Lc.ABORTED:case Lc.OUT_OF_RANGE:case Lc.UNIMPLEMENTED:case Lc.DATA_LOSS:return!0}}function jh(e){if(void 0===e)return Tc("GRPC error has no .code"),Lc.UNKNOWN;switch(e){case Uh.OK:return Lc.OK;case Uh.CANCELLED:return Lc.CANCELLED;case Uh.UNKNOWN:return Lc.UNKNOWN;case Uh.DEADLINE_EXCEEDED:return Lc.DEADLINE_EXCEEDED;case Uh.RESOURCE_EXHAUSTED:return Lc.RESOURCE_EXHAUSTED;case Uh.INTERNAL:return Lc.INTERNAL;case Uh.UNAVAILABLE:return Lc.UNAVAILABLE;case Uh.UNAUTHENTICATED:return Lc.UNAUTHENTICATED;case Uh.INVALID_ARGUMENT:return Lc.INVALID_ARGUMENT;case Uh.NOT_FOUND:return Lc.NOT_FOUND;case Uh.ALREADY_EXISTS:return Lc.ALREADY_EXISTS;case Uh.PERMISSION_DENIED:return Lc.PERMISSION_DENIED;case Uh.FAILED_PRECONDITION:return Lc.FAILED_PRECONDITION;case Uh.ABORTED:return Lc.ABORTED;case Uh.OUT_OF_RANGE:return Lc.OUT_OF_RANGE;case Uh.UNIMPLEMENTED:return Lc.UNIMPLEMENTED;case Uh.DATA_LOSS:return Lc.DATA_LOSS;default:return Cc()}}(qh=Uh||(Uh={}))[qh.OK=0]="OK",qh[qh.CANCELLED=1]="CANCELLED",qh[qh.UNKNOWN=2]="UNKNOWN",qh[qh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qh[qh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qh[qh.NOT_FOUND=5]="NOT_FOUND",qh[qh.ALREADY_EXISTS=6]="ALREADY_EXISTS",qh[qh.PERMISSION_DENIED=7]="PERMISSION_DENIED",qh[qh.UNAUTHENTICATED=16]="UNAUTHENTICATED",qh[qh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qh[qh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qh[qh.ABORTED=10]="ABORTED",qh[qh.OUT_OF_RANGE=11]="OUT_OF_RANGE",qh[qh.UNIMPLEMENTED=12]="UNIMPLEMENTED",qh[qh.INTERNAL=13]="INTERNAL",qh[qh.UNAVAILABLE=14]="UNAVAILABLE",qh[qh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wh{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Du(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return Cu(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new ku(eu.comparator);function Kh(){return Gh}const zh=new ku(eu.comparator);function Hh(...e){let t=zh;for(const n of e)t=t.insert(n.key,n);return t}function Qh(e){let t=zh;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Yh(){return Jh()}function Xh(){return Jh()}function Jh(){return new Wh((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Zh=new ku(eu.comparator),ed=new Lu(eu.comparator);function td(...e){let t=ed;for(const n of e)t=t.add(n);return t}const nd=new Lu(Gc);function rd(){return nd}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,id.createSynthesizedTargetChangeForCurrentChange(e,t)),new sd(Qc.min(),n,rd(),Kh(),td())}}class id{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new id(Fu.EMPTY_BYTE_STRING,t,td(),td(),td())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class ad{constructor(e,t){this.targetId=e,this.It=t}}class cd{constructor(e,t,n=Fu.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ud{constructor(){this.Tt=0,this.Et=dd(),this.At=Fu.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=td(),t=td(),n=td();return this.Et.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Cc()}})),new id(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=dd()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class ld{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=Kh(),this.Bt=hd(),this.Lt=new Lu(Gc)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Ot(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:Cc()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(Tl(e))if(0===n){const n=new eu(e.path);this.Kt(t,n,wl.newNoDocument(n,Qc.min()))}else kc(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&Tl(s.target)){const t=new eu(s.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,wl.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=td();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new sd(e,t,this.Lt,this.$t,n);return this.$t=Kh(),this.Bt=hd(),this.Lt=new Lu(Gc),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new ud,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new Lu(Gc),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||xc("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new ud),this.Mt.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Mt.getRemoteKeysForTarget(e).has(t)}}function hd(){return new ku(eu.comparator)}function dd(){return new ku(eu.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),md=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class gd{constructor(e,t){this.databaseId=e,this.dt=t}}function pd(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yd(e,t){return e.dt?t.toBase64():t.toUint8Array()}function vd(e,t){return pd(e,t.toTimestamp())}function wd(e){return kc(!!e),Qc.fromTimestamp(function(e){const t=Bu(e);return new Hc(t.seconds,t.nanos)}(e))}function bd(e,t){return function(e){return new Xc(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function _d(e){const t=Xc.fromString(e);return kc(zd(t)),t}function Id(e,t){return bd(e.databaseId,t.path)}function Ed(e,t){const n=_d(t);if(n.get(1)!==e.databaseId.projectId)throw new Oc(Lc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Oc(Lc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new eu(Dd(n))}function xd(e,t){return bd(e.databaseId,t)}function Td(e){const t=_d(e);return 4===t.length?Xc.emptyPath():Dd(t)}function Sd(e){return new Xc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Dd(e){return kc(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Cd(e,t,n){return{name:Id(e,t),fields:n.value.mapValue.fields}}function kd(e,t,n){const r=Ed(e,t.name),s=wd(t.updateTime),i=new yl({mapValue:{fields:t.fields}}),o=wl.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ad(e,t){return"found"in t?function(e,t){kc(!!t.found),t.found.name,t.found.updateTime;const n=Ed(e,t.found.name),r=wd(t.found.updateTime),s=new yl({mapValue:{fields:t.found.fields}});return wl.newFoundDocument(n,r,s)}(e,t):"missing"in t?function(e,t){kc(!!t.missing),kc(!!t.readTime);const n=Ed(e,t.missing),r=wd(t.readTime);return wl.newNoDocument(n,r)}(e,t):Cc()}function Nd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Cc()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.dt?(kc(void 0===t||"string"==typeof t),Fu.fromBase64String(t||"")):(kc(void 0===t||t instanceof Uint8Array),Fu.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Lc.UNKNOWN:jh(e.code);return new Oc(t,e.message||"")}(o);n=new cd(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ed(e,r.document.name),i=wd(r.document.updateTime),o=new yl({mapValue:{fields:r.document.fields}}),a=wl.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new od(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Ed(e,r.document),i=r.readTime?wd(r.readTime):Qc.min(),o=wl.newNoDocument(s,i),a=r.removedTargetIds||[];n=new od([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Ed(e,r.document),i=r.removedTargetIds||[];n=new od([],i,s,null)}else{if(!("filter"in t))return Cc();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new Bh(r),i=e.targetId;n=new ad(i,s)}}return n}function Ld(e,t){let n;if(t instanceof Lh)n={update:Cd(e,t.key,t.value)};else if(t instanceof Fh)n={delete:Id(e,t.key)};else if(t instanceof Oh)n={update:Cd(e,t.key,t.data),updateMask:Kd(t.fieldMask)};else{if(!(t instanceof Ph))return Cc();n={verify:Id(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof fh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof mh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ph)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof vh)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Cc()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:vd(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Cc()}(e,t.precondition)),n}function Od(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?xh.updateTime(wd(e.updateTime)):void 0!==e.exists?xh.exists(e.exists):xh.none()}(t.currentDocument):xh.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)kc("REQUEST_TIME"===t.setToServerValue),n=new fh;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new mh(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new ph(e)}else"increment"in t?n=new vh(e,t.increment):Cc();const r=Zc.fromServerFormat(t.fieldPath);return new _h(r,n)}(e,t))):[];if(t.update){t.update.name;const s=Ed(e,t.update.name),i=new yl({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Ru(t.map((e=>Zc.fromServerFormat(e))))}(t.updateMask);return new Oh(s,i,e,n,r)}return new Lh(s,i,n,r)}if(t.delete){const r=Ed(e,t.delete);return new Fh(r,n)}if(t.verify){const r=Ed(e,t.verify);return new Ph(r,n)}return Cc()}function Vd(e,t){return e&&e.length>0?(kc(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?wd(e.updateTime):wd(t);return n.isEqual(Qc.min())&&(n=wd(t)),new Eh(n,e.transformResults||[])}(e,t)))):[]}function Rd(e,t){return{documents:[xd(e,t.path)]}}function Md(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=xd(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=xd(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ul(e.value))return{unaryFilter:{field:$d(e.field),op:"IS_NAN"}};if(cl(e.value))return{unaryFilter:{field:$d(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ul(e.value))return{unaryFilter:{field:$d(e.field),op:"IS_NOT_NAN"}};if(cl(e.value))return{unaryFilter:{field:$d(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$d(e.field),op:qd(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:$d(e.field),direction:Ud(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.dt||zu(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Fd(e){let t=Td(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){kc(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Bd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Bl(jd(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,zu(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Pl(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Pl(n,t)}(n.endAt)),Wl(t,s,o,i,a,"F",c,u)}function Pd(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Cc()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Bd(e){return e?void 0!==e.unaryFilter?[Gd(e)]:void 0!==e.fieldFilter?[Wd(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Bd(e))).reduce(((e,t)=>e.concat(t))):Cc():[]}function Ud(e){return fd[e]}function qd(e){return md[e]}function $d(e){return{fieldPath:e.canonicalString()}}function jd(e){return Zc.fromServerFormat(e.fieldPath)}function Wd(e){return kl.create(jd(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Cc()}}(e.fieldFilter.op),e.fieldFilter.value)}function Gd(e){switch(e.unaryFilter.op){case"IS_NAN":const t=jd(e.unaryFilter.field);return kl.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=jd(e.unaryFilter.field);return kl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=jd(e.unaryFilter.field);return kl.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=jd(e.unaryFilter.field);return kl.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Cc()}}function Kd(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function zd(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Yd(t)),t=Qd(e.get(n),t);return Yd(t)}function Qd(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Yd(e){return e+""}function Xd(e){const t=e.length;if(kc(t>=2),2===t)return kc(""===e.charAt(0)&&""===e.charAt(1)),Xc.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf("",i);switch((t<0||t>n)&&Cc(),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:Cc()}i=t+2}return new Xc(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(e,t){return[e,Hd(t)]}function ef(e,t,n){return[e,Hd(t),n]}const tf={},nf=["prefixPath","collectionGroup","readTime","documentId"],rf=["prefixPath","collectionGroup","documentId"],sf=["collectionGroup","readTime","prefixPath","documentId"],of=["canonicalId","targetId"],af=["targetId","path"],cf=["path","targetId"],uf=["collectionId","parent"],lf=["indexId","uid"],hf=["uid","sequenceNumber"],df=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],ff=["indexId","uid","orderedDocumentKey"],mf=["userId","collectionPath","documentId"],gf=["userId","collectionPath","largestBatchId"],pf=["userId","collectionGroup","largestBatchId"],yf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vf=[...yf,"documentOverlays"],wf=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],bf=wf,_f=[...bf,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If extends hu{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function Ef(e,t){const n=Nc(e);return gu.N(n.ee,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ch(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=kh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=kh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Xh();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Dh(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Qc.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),td())}isEqual(e){return this.batchId===e.batchId&&Kc(this.mutations,e.mutations,((e,t)=>Nh(e,t)))&&Kc(this.baseMutations,e.baseMutations,((e,t)=>Nh(e,t)))}}class Tf{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){kc(e.mutations.length===n.length);let r=Zh;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Tf(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t,n,r,s=Qc.min(),i=Qc.min(),o=Fu.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new Df(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Df(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Df(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.ne=e}}function kf(e,t){let n;if(t.document)n=kd(e.ne,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=eu.fromSegments(t.noDocument.path),r=Of(t.noDocument.readTime);n=wl.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Cc();{const e=eu.fromSegments(t.unknownDocument.path),r=Of(t.unknownDocument.version);n=wl.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Hc(e[0],e[1]);return Qc.fromTimestamp(t)}(t.readTime)),n}function Af(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Nf(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Id(e,t.key),fields:t.data.value.mapValue.fields,updateTime:pd(e,t.version.toTimestamp())}}(e.ne,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Lf(t.version)};else{if(!t.isUnknownDocument())return Cc();r.unknownDocument={path:n.path.toArray(),version:Lf(t.version)}}return r}function Nf(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Lf(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Of(e){const t=new Hc(e.seconds,e.nanoseconds);return Qc.fromTimestamp(t)}function Vf(e,t){const n=(t.baseMutations||[]).map((t=>Od(e.ne,t)));for(let i=0;i<t.mutations.length-1;++i){const e=t.mutations[i];if(i+1<t.mutations.length&&void 0!==t.mutations[i+1].transform){const n=t.mutations[i+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const r=t.mutations.map((t=>Od(e.ne,t))),s=Hc.fromMillis(t.localWriteTimeMs);return new xf(t.batchId,s,n,r)}function Rf(e){const t=Of(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Of(e.lastLimboFreeSnapshotVersion):Qc.min();let r;var s;return void 0!==e.query.documents?(kc(1===(s=e.query).documents.length),r=Xl(Gl(Td(s.documents[0])))):r=function(e){return Xl(Fd(e))}(e.query),new Df(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Fu.fromBase64String(e.resumeToken))}function Mf(e,t){const n=Lf(t.snapshotVersion),r=Lf(t.lastLimboFreeSnapshotVersion);let s;s=Tl(t.target)?Rd(e.ne,t.target):Md(e.ne,t.target);const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Il(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Ff(e){const t=Fd({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Jl(t,t.limit,"L"):t}function Pf(e,t){return new Sf(t.largestBatchId,Od(e.ne,t.overlayMutation))}function Bf(e,t){const n=t.path.lastSegment();return[e,Hd(t.path.popLast()),n]}function Uf(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Lf(r.readTime),documentKey:Hd(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{getBundleMetadata(e,t){return $f(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:Of(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return $f(e).put({bundleId:(n=t).id,createTime:Lf(wd(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return jf(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Ff(t.bundledQuery),readTime:Of(t.readTime)};var t}))}saveNamedQuery(e,t){return jf(e).put(function(e){return{name:e.name,readTime:Lf(wd(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function $f(e){return Ef(e,"bundles")}function jf(e){return Ef(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const n=t.uid||"";return new Wf(e,n)}getOverlay(e,t){return Gf(e).get(Bf(this.userId,t)).next((e=>e?Pf(this.wt,e):null))}getOverlays(e,t){const n=Yh();return fu.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,s)=>{const i=new Sf(t,s);r.push(this.ie(e,i))})),fu.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Hd(e.getCollectionPath()))));const s=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(Gf(e).W("collectionPathOverlayIndex",r))})),fu.waitFor(s)}getOverlaysForCollection(e,t,n){const r=Yh(),s=Hd(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Gf(e).K("collectionPathOverlayIndex",i).next((e=>{for(const t of e){const e=Pf(this.wt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const s=Yh();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Gf(e).J({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Pf(this.wt,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}ie(e,t){return Gf(e).put(function(e,t,n){const[r,s,i]=Bf(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Ld(e.ne,n.mutation)}}(this.wt,this.userId,t))}}function Gf(e){return Ef(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(Uu(e.integerValue));else if("doubleValue"in e){const n=Uu(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),Hu(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(qu(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?dl(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):Cc()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const r of Object.keys(n))this.le(r,t),this.oe(n[r],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const r of n)this.oe(r,t)}_e(e,t){this.ce(t,37),eu.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}function zf(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Hf(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=zf(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Kf.ye=new Kf;class Qf{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ie(n.value),n=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ie(e);else if(e<2048)this.Ie(960|e>>>6),this.Ie(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ie(480|e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e);else{const e=t.codePointAt(0);this.Ie(240|e>>>18),this.Ie(128|63&e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e)}}this.Te()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}ve(e){const t=this.Ve(e),n=Hf(t);this.Se(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}De(e){const t=this.Ve(e),n=Hf(t);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Oe(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ie(e){const t=255&e;0===t?(this.xe(0),this.xe(255)):255===t?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class Yf{constructor(e){this.Me=e}de(e){this.Me.pe(e)}he(e){this.Me.be(e)}ae(e){this.Me.ve(e)}ue(){this.Me.Ce()}}class Xf{constructor(e){this.Me=e}de(e){this.Me.Ee(e)}he(e){this.Me.Pe(e)}ae(e){this.Me.De(e)}ue(){this.Me.Ne()}}class Jf{constructor(){this.Me=new Qf,this.Fe=new Yf(this.Me),this.$e=new Xf(this.Me)}seed(e){this.Me.seed(e)}Be(e){return 0===e?this.Fe:this.$e}Oe(){return this.Me.Oe()}reset(){this.Me.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Le(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Zf(this.indexId,this.documentKey,this.arrayValue,n)}}function em(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=tm(e.arrayValue,t.arrayValue),0!==n?n:(n=tm(e.directionalValue,t.directionalValue),0!==n?n:eu.comparator(e.documentKey,t.documentKey)))}function tm(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const e=t;e.ht()?this.Ke=e:this.qe.push(e)}}Ge(e){const t=nu(e);if(void 0!==t&&!this.Qe(t))return!1;const n=ru(e);let r=0,s=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const e=n[r];if(!this.je(this.Ke,e)||!this.We(this.Ue[s++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(s>=this.Ue.length||!this.We(this.Ue[s++],e))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.ze=new sm}addToCollectionParentIndex(e,t){return this.ze.add(t),fu.resolve()}getCollectionParents(e,t){return fu.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return fu.resolve()}deleteFieldIndex(e,t){return fu.resolve()}getDocumentsMatchingTarget(e,t){return fu.resolve(null)}getIndexType(e,t){return fu.resolve(0)}getFieldIndexes(e,t){return fu.resolve([])}getNextCollectionGroupToUpdate(e){return fu.resolve(null)}getMinOffset(e,t){return fu.resolve(cu.min())}getMinOffsetFromCollectionGroup(e,t){return fu.resolve(cu.min())}updateCollectionGroup(e,t,n){return fu.resolve()}updateIndexEntries(e,t){return fu.resolve()}}class sm{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Lu(Xc.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Lu(Xc.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im=new Uint8Array(0);class om{constructor(e,t){this.user=e,this.databaseId=t,this.He=new sm,this.Je=new Wh((e=>Il(e)),((e,t)=>xl(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.He.add(t)}));const s={collectionId:n,parent:Hd(r)};return am(e).put(s)}return fu.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[zc(t),""],!1,!0);return am(e).K(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Xd(r.parent))}return n}))}addFieldIndex(e,t){const n=um(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const s=n.add(r);if(t.indexState){const n=lm(e);return s.next((e=>{n.put(Uf(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=um(e),r=lm(e),s=cm(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=cm(e);let r=!0;const s=new Map;return fu.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{r&&(r=!!e),s.set(t,e)})))).next((()=>{if(r){let e=td();const r=[];return fu.forEach(s,((s,i)=>{var o;xc("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Il(t)}`);const a=function(e,t){const n=nu(t);if(void 0===n)return null;for(const r of Sl(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(e,t){const n=new Map;for(const r of ru(t))for(const t of Sl(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),u=function(e,t){const n=[];let r=!0;for(const s of ru(t)){const t=0===s.kind?Dl(e,s.fieldPath,e.startAt):Cl(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Pl(n,r)}(i,s),l=function(e,t){const n=[];let r=!0;for(const s of ru(t)){const t=0===s.kind?Cl(e,s.fieldPath,e.endAt):Dl(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Pl(n,r)}(i,s),h=this.Ze(s,i,u),d=this.Ze(s,i,l),f=this.tn(s,i,c),m=this.en(s.indexId,a,h,u.inclusive,d,l.inclusive,f);return fu.forEach(m,(s=>n.j(s,t.limit).next((t=>{t.forEach((t=>{const n=eu.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return fu.resolve(null)}))}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.nn(t[l/c]):im,h=this.sn(e,a,n[l%c],r),d=this.rn(e,a,s[l%c],i),f=o.map((t=>this.sn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}sn(e,t,n,r){const s=new Zf(e,eu.empty(),t,n);return r?s:s.Le()}rn(e,t,n,r){const s=new Zf(e,eu.empty(),t,n);return r?s.Le():s}Xe(e,t){const n=new nm(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ge(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return fu.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Lu(Zc.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}on(e,t){const n=new Jf;for(const r of ru(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.Be(r.kind);Kf.ye.re(e,s)}return n.Oe()}nn(e){const t=new Jf;return Kf.ye.re(e,t.Be(0)),t.Oe()}un(e,t){const n=new Jf;return Kf.ye.re(il(this.databaseId,t),n.Be(function(e){const t=ru(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Oe()}tn(e,t,n){if(null===n)return[];let r=[];r.push(new Jf);let s=0;for(const i of ru(e)){const e=n[s++];for(const n of r)if(this.cn(t,i.fieldPath)&&al(e))r=this.an(r,i,e);else{const t=n.Be(i.kind);Kf.ye.re(e,t)}}return this.hn(r)}Ze(e,t,n){return this.tn(e,t,n.position)}hn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Oe();return t}an(e,t,n){const r=[...e],s=[];for(const i of n.arrayValue.values||[])for(const e of r){const n=new Jf;n.seed(e.Oe()),Kf.ye.re(i,n.Be(t.kind)),s.push(n)}return s}cn(e,t){return!!e.filters.find((e=>e instanceof kl&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=um(e),r=lm(e);return(t?n.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.K()).next((e=>{const t=[];return fu.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new iu(t.sequenceNumber,new cu(Of(t.readTime),new eu(Xd(t.documentKey)),t.largestBatchId)):iu.empty(),r=e.fields.map((([e,t])=>new su(Zc.fromServerFormat(e),t)));return new tu(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Gc(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=um(e),s=lm(e);return this.ln(e).next((e=>r.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>fu.forEach(t,(t=>s.put(Uf(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return fu.forEach(t,((t,r)=>{const s=n.get(t.collectionGroup);return(s?fu.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next((s=>(n.set(t.collectionGroup,s),fu.forEach(s,(n=>this.fn(e,t,n).next((t=>{const s=this.dn(r,n);return t.isEqual(s)?fu.resolve():this._n(e,r,n,t,s)})))))))}))}wn(e,t,n,r){return cm(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,t.key),documentKey:t.key.path.toArray()})}mn(e,t,n,r){return cm(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,t.key),t.key.path.toArray()])}fn(e,t,n){const r=cm(e);let s=new Lu(em);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,t)])},((e,r)=>{s=s.add(new Zf(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>s))}dn(e,t){let n=new Lu(em);const r=this.on(t,e);if(null==r)return n;const s=nu(t);if(null!=s){const i=e.data.field(s.fieldPath);if(al(i))for(const s of i.arrayValue.values||[])n=n.add(new Zf(t.indexId,e.key,this.nn(s),r))}else n=n.add(new Zf(t.indexId,e.key,im,r));return n}_n(e,t,n,r,s){xc("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=Vu(i),c=Vu(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Vu(o)):t?(s(a),a=Vu(i)):(a=Vu(i),c=Vu(o))}}(r,s,em,(r=>{i.push(this.wn(e,t,n,r))}),(r=>{i.push(this.mn(e,t,n,r))})),fu.waitFor(i)}ln(e){let t=1;return lm(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>em(e,t))).filter(((e,t,n)=>!t||0!==em(e,n[t-1])));const r=[];r.push(e);for(const i of n){const n=em(i,e),s=em(i,t);if(0===n)r[0]=e.Le();else if(n>0&&s<0)r.push(i),r.push(i.Le());else if(s>0)break}r.push(t);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,im,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,im,[]]));return s}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(hm)}getMinOffset(e,t){return fu.mapArray(this.Ye(t),(t=>this.Xe(e,t).next((e=>e||Cc())))).next(hm)}}function am(e){return Ef(e,"collectionParents")}function cm(e){return Ef(e,"indexEntries")}function um(e){return Ef(e,"indexConfiguration")}function lm(e){return Ef(e,"indexState")}function hm(e){kc(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;uu(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new cu(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class fm{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new fm(e,fm.DEFAULT_COLLECTION_PERCENTILE,fm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(e,t,n){const r=e.store("mutations"),s=e.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((e,t,n)=>(a++,n.delete())));i.push(c.next((()=>{kc(1===a)})));const u=[];for(const l of n.mutations){const e=ef(t,l.key.path,n.batchId);i.push(s.delete(e)),u.push(l.key)}return fu.waitFor(i).next((()=>u))}function gm(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Cc();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fm.DEFAULT_COLLECTION_PERCENTILE=10,fm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fm.DEFAULT=new fm(41943040,fm.DEFAULT_COLLECTION_PERCENTILE,fm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fm.DISABLED=new fm(-1,0,0);class pm{constructor(e,t,n,r){this.userId=e,this.wt=t,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(e,t,n,r){kc(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new pm(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return vm(e).J({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const s=wm(e),i=vm(e);return i.add({}).next((o=>{kc("number"==typeof o);const a=new xf(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Ld(e.ne,t))),s=n.mutations.map((t=>Ld(e.ne,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.wt,this.userId,a),u=[];let l=new Lu(((e,t)=>Gc(e.canonicalString(),t.canonicalString())));for(const e of r){const t=ef(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(i.put(c)),u.push(s.put(t,tf))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),fu.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return vm(e).get(t).next((e=>e?(kc(e.userId===this.userId),Vf(this.wt,e)):null))}yn(e,t){return this.gn[t]?fu.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.gn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return vm(e).J({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(kc(t.batchId>=n),s=Vf(this.wt,t)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return vm(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return vm(e).K("userMutationsIndex",t).next((e=>e.map((e=>Vf(this.wt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Zd(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return wm(e).J({range:r},((n,r,i)=>{const[o,a,c]=n,u=Xd(a);if(o===this.userId&&t.path.isEqual(u))return vm(e).get(c).next((e=>{if(!e)throw Cc();kc(e.userId===this.userId),s.push(Vf(this.wt,e))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Lu(Gc);const r=[];return t.forEach((t=>{const s=Zd(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=wm(e).J({range:i},((e,r,s)=>{const[i,o,a]=e,c=Xd(o);i===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),fu.waitFor(r).next((()=>this.pn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=Zd(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new Lu(Gc);return wm(e).J({range:i},((e,t,s)=>{const[i,a,c]=e,u=Xd(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.pn(e,o)))}pn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(vm(e).get(t).next((e=>{if(null===e)throw Cc();kc(e.userId===this.userId),n.push(Vf(this.wt,e))})))})),fu.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return mm(e.ee,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.In(t.batchId)})),fu.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return fu.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return wm(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Xd(e[1]);r.push(t)}else n.done()})).next((()=>{kc(0===r.length)}))}))}containsKey(e,t){return ym(e,this.userId,t)}Tn(e){return bm(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function ym(e,t,n){const r=Zd(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return wm(e).J({range:i,H:!0},((e,n,r)=>{const[i,a,c]=e;i===t&&a===s&&(o=!0),r.done()})).next((()=>o))}function vm(e){return Ef(e,"mutations")}function wm(e){return Ef(e,"documentMutations")}function bm(e){return Ef(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new _m(0)}static Rn(){return new _m(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next((t=>{const n=new _m(t.highestTargetId);return t.highestTargetId=n.next(),this.Pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.bn(e).next((e=>Qc.fromTimestamp(new Hc(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.bn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.bn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Pn(e,r))))}addTargetData(e,t){return this.vn(e,t).next((()=>this.bn(e).next((n=>(n.targetCount+=1,this.Vn(t,n),this.Pn(e,n))))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Em(e).delete(t.targetId))).next((()=>this.bn(e))).next((t=>(kc(t.targetCount>0),t.targetCount-=1,this.Pn(e,t))))}removeTargets(e,t,n){let r=0;const s=[];return Em(e).J(((i,o)=>{const a=Rf(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))})).next((()=>fu.waitFor(s))).next((()=>r))}forEachTarget(e,t){return Em(e).J(((e,n)=>{const r=Rf(n);t(r)}))}bn(e){return xm(e).get("targetGlobalKey").next((e=>(kc(null!==e),e)))}Pn(e,t){return xm(e).put("targetGlobalKey",t)}vn(e,t){return Em(e).put(Mf(this.wt,t))}Vn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.bn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Il(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Em(e).J({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const i=Rf(n);xl(t,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(e,t,n){const r=[],s=Tm(e);return t.forEach((t=>{const i=Hd(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))})),fu.waitFor(r)}removeMatchingKeys(e,t,n){const r=Tm(e);return fu.forEach(t,(t=>{const s=Hd(t.path);return fu.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Tm(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Tm(e);let s=td();return r.J({range:n,H:!0},((e,t,n)=>{const r=Xd(e[1]),i=new eu(r);s=s.add(i)})).next((()=>s))}containsKey(e,t){const n=Hd(t.path),r=IDBKeyRange.bound([n],[zc(n)],!1,!0);let s=0;return Tm(e).J({index:"documentTargetsIndex",H:!0,range:r},(([e,t],n,r)=>{0!==e&&(s++,r.done())})).next((()=>s>0))}te(e,t){return Em(e).get(t).next((e=>e?Rf(e):null))}}function Em(e){return Ef(e,"targets")}function xm(e){return Ef(e,"targetGlobal")}function Tm(e){return Ef(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm([e,t],[n,r]){const s=Gc(e,n);return 0===s?Gc(t,r):s}class Dm{constructor(e){this.Sn=e,this.buffer=new Lu(Sm),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Sm(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Cm{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(e){xc("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){vu(e)?xc("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await du(e)}await this.kn(3e5)}))}}class km{constructor(e,t){this.On=e,this.params=t}calculateTargetCount(e,t){return this.On.Mn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return fu.resolve(Tu.ot);const n=new Dm(t);return this.On.forEachTarget(e,(e=>n.xn(e.sequenceNumber))).next((()=>this.On.Fn(e,(e=>n.xn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.On.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.On.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(xc("LruGarbageCollector","Garbage collection skipped; disabled"),fu.resolve(dm)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(xc("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dm):this.$n(e,t)))}getCacheSize(e){return this.On.getCacheSize(e)}$n(e,t){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(xc("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Ic()<=Mt.DEBUG&&xc("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),fu.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new km(e,t)}(this,t)}Mn(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Bn(e){let t=0;return this.Fn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,((e,n)=>t(n)))}addReference(e,t,n){return Nm(e,n)}removeReference(e,t,n){return Nm(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Nm(e,t)}Un(e,t){return function(e,t){let n=!1;return bm(e).Y((r=>ym(e,r,t).next((e=>(e&&(n=!0),fu.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Ln(e,((i,o)=>{if(o<=t){const t=this.Un(e,i).next((t=>{if(!t)return s++,n.getEntry(e,i).next((()=>(n.removeEntry(i,Qc.min()),Tm(e).delete([0,Hd(i.path)]))))}));r.push(t)}})).next((()=>fu.waitFor(r))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Nm(e,t)}Ln(e,t){const n=Tm(e);let r,s=Tu.ot;return n.J({index:"documentTargetsIndex"},(([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==Tu.ot&&t(new eu(Xd(r)),s),s=o,r=i):s=Tu.ot})).next((()=>{s!==Tu.ot&&t(new eu(Xd(r)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Nm(e,t){return Tm(e).put(function(e,t){return{targetId:0,path:Hd(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(){this.changes=new Wh((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,wl.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?fu.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Fm(e).put(n)}removeEntry(e,t,n){return Fm(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Nf(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.qn(e,n))))}getEntry(e,t){let n=wl.newInvalidDocument(t);return Fm(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Pm(t))},((e,r)=>{n=this.Kn(t,r)})).next((()=>n))}Gn(e,t){let n={size:0,document:wl.newInvalidDocument(t)};return Fm(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Pm(t))},((e,r)=>{n={document:this.Kn(t,r),size:gm(r)}})).next((()=>n))}getEntries(e,t){let n=Kh();return this.Qn(e,t,((e,t)=>{const r=this.Kn(e,t);n=n.insert(e,r)})).next((()=>n))}jn(e,t){let n=Kh(),r=new ku(eu.comparator);return this.Qn(e,t,((e,t)=>{const s=this.Kn(e,t);n=n.insert(e,s),r=r.insert(e,gm(t))})).next((()=>({documents:n,Wn:r})))}Qn(e,t,n){if(t.isEmpty())return fu.resolve();let r=new Lu(Um);t.forEach((e=>r=r.add(e)));const s=IDBKeyRange.bound(Pm(r.first()),Pm(r.last())),i=r.getIterator();let o=i.getNext();return Fm(e).J({index:"documentKeyIndex",range:s},((e,t,r)=>{const s=eu.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Um(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.q(Pm(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),Nf(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Fm(e).K(IDBKeyRange.bound(r,s,!0)).next((e=>{let t=Kh();for(const n of e){const e=this.Kn(eu.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let s=Kh();const i=Bm(t,n),o=Bm(t,cu.max());return Fm(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((e,t,n)=>{const i=this.Kn(eu.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(e){return new Rm(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Mm(e).get("remoteDocumentGlobalKey").next((e=>(kc(!!e),e)))}qn(e,t){return Mm(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const e=kf(this.wt,t);if(!e.isNoDocument()||!e.version.isEqual(Qc.min()))return e}return wl.newInvalidDocument(e)}}function Vm(e){return new Om(e)}class Rm extends Lm{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new Wh((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Lu(((e,t)=>Gc(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Hn.get(s);if(t.push(this.zn.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=Af(this.zn.wt,i);r=r.add(s.path.popLast());const c=gm(a);n+=c-o.size,t.push(this.zn.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=Af(this.zn.wt,i.convertToNoDocument(Qc.min()));t.push(this.zn.addEntry(e,s,n))}})),r.forEach((n=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.zn.updateMetadata(e,n)),fu.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next((e=>(this.Hn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.zn.jn(e,t).next((({documents:e,Wn:t})=>(t.forEach(((t,n)=>{this.Hn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Mm(e){return Ef(e,"remoteDocumentGlobal")}function Fm(e){return Ef(e,"remoteDocumentsV14")}function Pm(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Bm(e,t){const n=t.documentKey.path.toArray();return[e,Nf(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Um(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=Gc(n[i],r[i]),s)return s;return s=Gc(n.length,r.length),s||(s=Gc(n[n.length-2],r[r.length-2]),s||Gc(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class qm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&kh(n.mutation,e,Ru.empty(),Hc.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,td()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=td()){const r=Yh();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Hh();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Yh();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,td())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=Kh();const i=Jh(),o=Jh();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Oh)?s=s.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),kh(o.mutation,t,o.mutation.getFieldMask(),Hc.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new qm(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Jh();let r=new ku(((e,t)=>e-t)),s=td();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Ru.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||td()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Xh();c.forEach((e=>{if(!s.has(e)){const r=Dh(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return fu.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return eu.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ql(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):fu.resolve(Yh());let o=-1,a=s;return i.next((t=>fu.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?fu.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,td()))).next((e=>({batchId:o,changes:Qh(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new eu(t)).next((e=>{let t=Hh();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=Hh();return this.indexManager.getCollectionParents(e,r).next((i=>fu.forEach(i,(i=>{const o=function(e,t){return new jl(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,wl.newInvalidDocument(n)))}));let n=Hh();return r.forEach(((r,s)=>{const i=e.get(r);void 0!==i&&kh(i.mutation,s,Ru.empty(),Hc.now()),nh(t,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):fu.resolve(wl.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return fu.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:wd(n.createTime)}),fu.resolve()}getNamedQuery(e,t){return fu.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:Ff(e.bundledQuery),readTime:wd(e.readTime)}}(t)),fu.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.overlays=new ku(eu.comparator),this.Xn=new Map}getOverlay(e,t){return fu.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Yh();return fu.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),fu.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),fu.resolve()}getOverlaysForCollection(e,t,n){const r=Yh(),s=t.length+1,i=new eu(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return fu.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new ku(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Yh(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Yh(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return fu.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Sf(t,n));let s=this.Xn.get(t);void 0===s&&(s=td(),this.Xn.set(t,s)),this.Xn.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.Zn=new Lu(Km.ts),this.es=new Lu(Km.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new Km(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new Km(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new eu(new Xc([])),n=new Km(t,e),r=new Km(t,e+1),s=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),s.push(e.key)})),s}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new eu(new Xc([])),n=new Km(t,e),r=new Km(t,e+1);let s=td();return this.es.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Km(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Km{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return eu.comparator(e.key,t.key)||Gc(e.ls,t.ls)}static ns(e,t){return Gc(e.ls,t.ls)||eu.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new Lu(Km.ts)}checkEmpty(e){return fu.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new xf(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new Km(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return fu.resolve(i)}lookupMutationBatch(e,t){return fu.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),s=r<0?0:r;return fu.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return fu.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return fu.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Km(t,0),r=new Km(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);s.push(t)})),fu.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Lu(Gc);return t.forEach((e=>{const t=new Km(e,0),r=new Km(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),fu.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;eu.isDocumentKey(s)||(s=s.child(""));const i=new Km(new eu(s),0);let o=new Lu(Gc);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),i),fu.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){kc(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return fu.forEach(t.mutations,(r=>{const s=new Km(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new Km(t,0),r=this.ds.firstAfterOrEqual(n);return fu.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,fu.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.ps=e,this.docs=new ku(eu.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return fu.resolve(n?n.document.mutableCopy():wl.newInvalidDocument(t))}getEntries(e,t){let n=Kh();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():wl.newInvalidDocument(e))})),fu.resolve(n)}getAllFromCollection(e,t,n){let r=Kh();const s=new eu(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||uu(au(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return fu.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Cc()}Is(e,t){return fu.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Qm(this)}getSize(e){return fu.resolve(this.size)}}class Qm extends Lm{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),fu.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e){this.persistence=e,this.Ts=new Wh((e=>Il(e)),xl),this.lastRemoteSnapshotVersion=Qc.min(),this.highestTargetId=0,this.Es=0,this.As=new Gm,this.targetCount=0,this.Rs=_m.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),fu.resolve()}getLastRemoteSnapshotVersion(e){return fu.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return fu.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),fu.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),fu.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new _m(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,fu.resolve()}updateTargetData(e,t){return this.vn(t),fu.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,fu.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),fu.waitFor(s).next((()=>r))}getTargetCount(e){return fu.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return fu.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),fu.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),fu.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),fu.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return fu.resolve(n)}containsKey(e,t){return fu.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t){this.bs={},this.overlays={},this.Ps=new Tu(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new Ym(this),this.indexManager=new rm,this.remoteDocumentCache=function(e){return new Hm(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new Cf(t),this.Ds=new jm(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Wm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new zm(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){xc("MemoryPersistence","Starting transaction:",e);const r=new Jm(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return fu.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Jm extends hu{constructor(e){super(),this.currentSequenceNumber=e}}class Zm{constructor(e){this.persistence=e,this.ks=new Gm,this.Os=null}static Ms(e){return new Zm(e)}get Fs(){if(this.Os)return this.Os;throw Cc()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),fu.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),fu.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),fu.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Os=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return fu.forEach(this.Fs,(n=>{const r=eu.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,Qc.min())}))})).next((()=>(this.Os=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return fu.or([()=>fu.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.wt=e}O(e,t,n,r){const s=new mu("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jd,{unique:!0}),e.createObjectStore("documentMutations")}(e),tg(e),function(e){e.createObjectStore("remoteDocuments")}(e));let i=fu.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),tg(e)),i=i.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Qc.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(e,t){return t.store("mutations").K().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jd,{unique:!0});const r=t.store("mutations"),s=n.map((e=>r.put(e)));return fu.waitFor(s)}))}(e,s)))),i=i.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(i=i.next((()=>this.Bs(s)))),n<6&&r>=6&&(i=i.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(s))))),n<7&&r>=7&&(i=i.next((()=>this.Us(s)))),n<8&&r>=8&&(i=i.next((()=>this.qs(e,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(i=i.next((()=>this.Ks(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(i=i.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:mf});t.createIndex("collectionPathOverlayIndex",gf,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",pf,{unique:!1})}(e)}))),n<13&&r>=13&&(i=i.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:nf});t.createIndex("documentKeyIndex",rf),t.createIndex("collectionGroupIndex",sf)}(e))).next((()=>this.Gs(e,s))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>this.Qs(e,s)))),n<15&&r>=15&&(i=i.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:lf}).createIndex("sequenceNumberIndex",hf,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:df}).createIndex("documentKeyIndex",ff,{unique:!1})}(e)))),i}Ls(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=gm(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.K().next((t=>fu.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>fu.forEach(n,(n=>{kc(n.userId===t.userId);const r=Vf(this.wt,n);return mm(e,t.userId,r).next((()=>{}))}))))}))))}Us(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.J(((n,s)=>{const i=new Xc(n),o=function(e){return[0,Hd(e)]}(i);r.push(t.get(o).next((n=>n?fu.resolve():(n=>t.put({targetId:0,path:Hd(n),sequenceNumber:e.highestListenSequenceNumber}))(i))))})).next((()=>fu.waitFor(r)))}))}qs(e,t){e.createObjectStore("collectionParents",{keyPath:uf});const n=t.store("collectionParents"),r=new sm,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Hd(r)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new Xc(e);return s(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],r)=>{const i=Xd(t);return s(i.popLast())}))))}Ks(e){const t=e.store("targets");return t.J(((e,n)=>{const r=Rf(n),s=Mf(this.wt,r);return t.put(s)}))}Gs(e,t){const n=t.store("remoteDocuments"),r=[];return n.J(((e,n)=>{const s=t.store("remoteDocumentsV14"),i=(o=n,o.document?new eu(Xc.fromString(o.document.name).popFirst(5)):o.noDocument?eu.fromSegments(o.noDocument.path):o.unknownDocument?eu.fromSegments(o.unknownDocument.path):Cc()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>fu.waitFor(r)))}Qs(e,t){const n=t.store("mutations"),r=Vm(this.wt),s=new Xm(Zm.Ms,this.wt.ne);return n.K().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:td();Vf(this.wt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),fu.forEach(n,((e,n)=>{const i=new wc(n),o=Wf.se(this.wt,i),a=s.getIndexManager(i),c=pm.se(i,this.wt,a,s.referenceDelegate);return new $m(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new If(t,Tu.ot),e).next()}))}))}}function tg(e){e.createObjectStore("targetDocuments",{keyPath:af}).createIndex("documentTargetsIndex",cf,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",of,{unique:!0}),e.createObjectStore("targetGlobal")}const ng="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class rg{constructor(e,t,n,r,s,i,o,a,c,u,l=14){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.js=s,this.window=i,this.document=o,this.Ws=c,this.zs=u,this.Hs=l,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=e=>Promise.resolve(),!rg.V())throw new Oc(Lc.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Am(this,r),this.ei=t+"main",this.wt=new Cf(a),this.ni=new gu(this.ei,this.Hs,new eg(this.wt)),this.Vs=new Im(this.referenceDelegate,this.wt),this.remoteDocumentCache=Vm(this.wt),this.Ds=new qf,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===u&&Tc("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Oc(Lc.FAILED_PRECONDITION,ng);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Vs.getHighestSequenceNumber(e)))})).then((e=>{this.Ps=new Tu(e,this.Ws)})).then((()=>{this.vs=!0})).catch((e=>(this.ni&&this.ni.close(),Promise.reject(e))))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ig(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(e).next((e=>{e||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(e))).next((t=>this.isPrimary&&!t?this.li(e).next((()=>!1)):!!t&&this.fi(e).next((()=>!0)))))).catch((e=>{if(vu(e))return xc("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return xc("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.js.enqueueRetryable((()=>this.ti(e))),this.isPrimary=e}))}ai(e){return sg(e).get("owner").next((e=>fu.resolve(this.di(e))))}_i(e){return ig(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Ef(e,"clientMetadata");return t.K().next((e=>{const n=this.gi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return fu.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?fu.resolve(!0):sg(e).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new Oc(Lc.FAILED_PRECONDITION,ng);return!1}}return!(!this.networkEnabled||!this.inForeground)||ig(e).K().next((e=>void 0===this.gi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&xc("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new If(e,Tu.ot);return this.li(t).next((()=>this._i(t)))})),this.ni.close(),this.Ai()}gi(e,t){return e.filter((e=>this.mi(e.updateTimeMs,t)&&!this.pi(e.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(e=>ig(e).K().next((e=>this.gi(e,18e5).map((e=>e.clientId))))))}get started(){return this.vs}getMutationQueue(e,t){return pm.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new om(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return Wf.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,n){xc("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=15===(i=this.Hs)?_f:14===i?bf:13===i?wf:12===i?vf:11===i?yf:void Cc();var i;let o;return this.ni.runTransaction(e,r,s,(r=>(o=new If(r,this.Ps?this.Ps.next():Tu.ot),"readwrite-primary"===t?this.ai(o).next((e=>!!e||this.hi(o))).next((t=>{if(!t)throw Tc(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new Oc(Lc.FAILED_PRECONDITION,lu);return n(o)})).next((e=>this.fi(o).next((()=>e)))):this.bi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}bi(e){return sg(e).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)&&!this.di(e)&&!(this.zs||this.allowTabSynchronization&&e.allowTabSynchronization))throw new Oc(Lc.FAILED_PRECONDITION,ng)}))}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return sg(e).put("owner",t)}static V(){return gu.V()}li(e){const t=sg(e);return t.get("owner").next((e=>this.di(e)?(xc("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):fu.resolve()))}mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Tc(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Js=()=>{this.Ii(),ft()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const n=null!==(null===(t=this.si)||void 0===t?void 0:t.getItem(this.yi(e)));return xc("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Tc("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(ts){Tc("Failed to set zombie client id.",ts)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(ts){}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sg(e){return Ef(e,"owner")}function ig(e){return Ef(e,"clientMetadata")}function og(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ag{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}static Vi(e,t){let n=td(),r=td();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ag(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((s=>s||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){return fu.resolve(null)}xi(e,t,n,r){return Kl(t)||r.isEqual(Qc.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((s=>{const i=this.ki(t,s);return this.Oi(t,i,n,r)?this.Ni(e,t):(Ic()<=Mt.DEBUG&&xc("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),th(t)),this.Mi(e,i,t,ou(r,-1)))}))}ki(e,t){let n=new Lu(sh(e));return t.forEach(((t,r)=>{nh(e,r)&&(n=n.add(r))})),n}Oi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(e,t){return Ic()<=Mt.DEBUG&&xc("QueryEngine","Using full collection scan to execute query:",th(t)),this.Di.getDocumentsMatchingQuery(e,t,cu.min())}Mi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new ku(Gc),this.Bi=new Wh((e=>Il(e)),xl),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $m(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function lg(e,t,n,r){return new ug(e,t,n,r)}async function hg(e,t){const n=Nc(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=td();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function dg(e,t){const n=Nc(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=fu.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);kc(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=td();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function fg(e){const t=Nc(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function mg(e,t){const n=Nc(e),r=t.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Fu.EMPTY_BYTE_STRING,Qc.min()).withLastLimboFreeSnapshotVersion(Qc.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(e,u))}));let a=Kh(),c=td();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(gg(e,i,t.documentUpdates).next((e=>{a=e.Gi,c=e.Qi}))),!r.isEqual(Qc.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return fu.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.$i=s,e)))}function gg(e,t,n){let r=td(),s=td();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Kh();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Qc.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):xc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function pg(e,t){const n=Nc(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function yg(e,t){const n=Nc(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((s=>s?(r=s,fu.resolve(r)):n.Vs.allocateTargetId(e).next((s=>(r=new Df(t,s,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function vg(e,t,n){const r=Nc(e),s=r.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!vu(e))throw e;xc("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(s.target)}function wg(e,t,n){const r=Nc(e);let s=Qc.min(),i=td();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Nc(e),s=r.Bi.get(n);return void 0!==s?fu.resolve(r.$i.get(s)):r.Vs.getTargetData(t,n)}(r,e,Xl(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?s:Qc.min(),n?i:td()))).next((e=>(Ig(r,rh(t),e),{documents:e,ji:i})))))}function bg(e,t){const n=Nc(e),r=Nc(n.Vs),s=n.$i.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.te(e,t).next((e=>e?e.target:null))))}function _g(e,t){const n=Nc(e),r=n.Li.get(t)||Qc.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ui.getAllFromCollectionGroup(e,t,ou(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Ig(n,t,e),e)))}function Ig(e,t,n){let r=Qc.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}async function Eg(e,t,n,r){const s=Nc(e);let i=td(),o=Kh();for(const u of n){const e=t.Wi(u.metadata.name);u.document&&(i=i.add(e));const n=t.zi(u);n.setReadTime(t.Hi(u.metadata.readTime)),o=o.insert(e,n)}const a=s.Ui.newChangeBuffer({trackRemovals:!0}),c=await yg(s,function(e){return Xl(Gl(Xc.fromString(`__bundle__/docs/${e}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>gg(e,a,o).next((t=>(a.apply(e),t))).next((t=>s.Vs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>s.Vs.addMatchingKeys(e,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(e,t.Gi,t.Qi))).next((()=>t.Gi))))))}async function xg(e,t,n=td()){const r=await yg(e,Xl(Ff(t.bundledQuery))),s=Nc(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const i=wd(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ds.saveNamedQuery(e,t);const o=r.withResumeToken(Fu.EMPTY_BYTE_STRING,i);return s.$i=s.$i.insert(o.targetId,o),s.Vs.updateTargetData(e,o).next((()=>s.Vs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>s.Vs.addMatchingKeys(e,n,r.targetId))).next((()=>s.Ds.saveNamedQuery(e,t)))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(e,t){return`firestore_clients_${e}_${t}`}function Sg(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Dg(e,t){return`firestore_targets_${e}_${t}`}class Cg{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new Oc(r.error.code,r.error.message))),i?new Cg(e,t,r.state,s):(Tc("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kg{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new Oc(n.error.code,n.error.message))),s?new kg(e,n.state,r):(Tc("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ag{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=rd();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=Qu(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new Ag(e,s):(Tc("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Ng{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Ng(t.clientId,t.onlineState):(Tc("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Lg{constructor(){this.activeTargetIds=rd()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Og{constructor(e,t,n,r,s){this.window=e,this.js=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new ku(Gc),this.started=!1,this.ir=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=Tg(this.persistenceKey,this.tr),this.ur=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new Lg),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const n of e){if(n===this.tr)continue;const e=this.getItem(Tg(this.persistenceKey,n));if(e){const t=Ag.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Dg(this.persistenceKey,e));if(n){const r=kg.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Dg(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return xc("SharedClientState","READ",e,t),t}setItem(e,t){xc("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){xc("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(xc("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Tc("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.ar.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=Tu.ot;if(null!=e)try{const n=JSON.parse(e);kc("number"==typeof n),t=n}catch(e){Tc("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Tu.ot&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new Cg(this.currentUser,e,t,n),s=Sg(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Yi())}pr(e){const t=Sg(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=Dg(this.persistenceKey,e),s=new kg(e,t,n);this.setItem(r,s.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return Ag.Ji(n,t)}vr(e,t){const n=this.ar.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Cg.Ji(new wc(s),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return kg.Ji(r,t)}wr(e){return Ng.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);xc("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Or(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),s=this.gr(n),i=[],o=[];return s.forEach((e=>{r.has(e)||i.push(e)})),r.forEach((e=>{s.has(e)||o.push(e)})),this.syncEngine.Mr(i,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=rd();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Vg{constructor(){this.Fr=new Lg,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Lg,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){xc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){xc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,s){const i=this.oo(e,t);xc("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(e,i,o,n).then((e=>(xc("RestConnection","Received: ",e),e)),(t=>{throw Sc("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}ao(e,t,n,r,s,i){return this.ro(e,t,n,r,s)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+bc,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=Fg[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((s,i)=>{const o=new yc;o.listenOnce(dc.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case hc.NO_ERROR:const t=o.getResponseJson();xc("Connection","XHR received:",JSON.stringify(t)),s(t);break;case hc.TIMEOUT:xc("Connection",'RPC "'+e+'" timed out'),i(new Oc(Lc.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const n=o.getStatus();if(xc("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Lc).indexOf(t)>=0?t:Lc.UNKNOWN}(e.status);i(new Oc(t,e.message))}else i(new Oc(Lc.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Oc(Lc.UNAVAILABLE,"Connection failed."));break;default:Cc()}}finally{xc("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=uc(),i=lc(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new gc({})),this.uo(o.initMessageHeaders,t,n),it()||ut()||lt()||ht()||dt()||ct()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");xc("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new Pg({jr:e=>{l?xc("Connection","Not sending because WebChannel is closed:",e):(u||(xc("Connection","Opening WebChannel transport."),c.open(),u=!0),xc("Connection","WebChannel sending:",e),c.send(e))},Wr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,pc.EventType.OPEN,(()=>{l||xc("Connection","WebChannel transport opened.")})),d(c,pc.EventType.CLOSE,(()=>{l||(l=!0,xc("Connection","WebChannel transport closed"),h.eo())})),d(c,pc.EventType.ERROR,(e=>{l||(l=!0,Sc("Connection","WebChannel transport errored:",e),h.eo(new Oc(Lc.UNAVAILABLE,"The operation could not be completed")))})),d(c,pc.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];kc(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){xc("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Uh[e];if(void 0!==t)return jh(t)}(e),n=s.message;void 0===t&&(t=Lc.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),l=!0,h.eo(new Oc(t,n)),c.close()}else xc("Connection","WebChannel received:",n),h.no(n)}})),d(i,fc.STAT_EVENT,(e=>{e.stat===mc.PROXY?xc("Connection","Detected buffering proxy"):e.stat===mc.NOPROXY&&xc("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(){return"undefined"!=typeof window?window:null}function qg(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(e){return new gd(e,!0)}class jg{constructor(e,t,n=1e3,r=1.5,s=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&xc("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t,n,r,s,i,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new jg(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===Lc.RESOURCE_EXHAUSTED?(Tc(t.toString()),Tc("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===Lc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new Oc(Lc.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return xc("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(xc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gg extends Wg{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.wt=s}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=Nd(this.wt,e),n=function(e){if(!("targetChange"in e))return Qc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Qc.min():t.readTime?wd(t.readTime):Qc.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=Sd(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=Tl(r)?{documents:Rd(e,r)}:{query:Md(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=yd(e,t.resumeToken):t.snapshotVersion.compareTo(Qc.min())>0&&(n.readTime=pd(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=Pd(this.wt,e);n&&(t.labels=n),this.Mo(t)}jo(e){const t={};t.database=Sd(this.wt),t.removeTarget=e,this.Mo(t)}}class Kg extends Wg{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(kc(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=Vd(e.writeResults,e.commitTime),n=wd(e.commitTime);return this.listener.Jo(n,t)}return kc(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Sd(this.wt),this.Mo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Ld(this.wt,e)))};this.Mo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Oc(Lc.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Lc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Oc(Lc.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Lc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Oc(Lc.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class Hg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Tc(t),this.su=!1):xc("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((e=>{n.enqueueAndForget((async()=>{sp(this)&&(xc("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Nc(e);t.lu.add(4),await Xg(t),t._u.set("Unknown"),t.lu.delete(4),await Yg(t)}(this))}))})),this._u=new Hg(n,r)}}async function Yg(e){if(sp(e))for(const t of e.fu)await t(!0)}async function Xg(e){for(const t of e.fu)await t(!1)}function Jg(e,t){const n=Nc(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),rp(n)?np(n):Ip(n).Co()&&ep(n,t))}function Zg(e,t){const n=Nc(e),r=Ip(n);n.hu.delete(t),r.Co()&&tp(n,t),0===n.hu.size&&(r.Co()?r.ko():sp(n)&&n._u.set("Unknown"))}function ep(e,t){e.wu.Nt(t.targetId),Ip(e).Qo(t)}function tp(e,t){e.wu.Nt(t),Ip(e).jo(t)}function np(e){e.wu=new ld({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Ip(e).start(),e._u.iu()}function rp(e){return sp(e)&&!Ip(e).Do()&&e.hu.size>0}function sp(e){return 0===Nc(e).lu.size}function ip(e){e.wu=void 0}async function op(e){e.hu.forEach(((t,n)=>{ep(e,t)}))}async function ap(e,t){ip(e),rp(e)?(e._u.uu(t),np(e)):e._u.set("Unknown")}async function cp(e,t,n){if(e._u.set("Online"),t instanceof cd&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){xc("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await up(e,n)}else if(t instanceof od?e.wu.Ut(t):t instanceof ad?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(Qc.min()))try{const t=await fg(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.hu.get(r);s&&e.hu.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(Fu.EMPTY_BYTE_STRING,n.snapshotVersion)),tp(e,t);const r=new Df(n.target,t,1,n.sequenceNumber);ep(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){xc("RemoteStore","Failed to raise snapshot:",t),await up(e,t)}}async function up(e,t,n){if(!vu(t))throw t;e.lu.add(1),await Xg(e),e._u.set("Offline"),n||(n=()=>fg(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{xc("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Yg(e)}))}function lp(e,t){return t().catch((n=>up(e,n,t)))}async function hp(e){const t=Nc(e),n=Ep(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;dp(t);)try{const e=await pg(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,fp(t,e)}catch(e){await up(t,e)}mp(t)&&gp(t)}function dp(e){return sp(e)&&e.au.length<10}function fp(e,t){e.au.push(t);const n=Ep(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function mp(e){return sp(e)&&!Ep(e).Do()&&e.au.length>0}function gp(e){Ep(e).start()}async function pp(e){Ep(e).Xo()}async function yp(e){const t=Ep(e);for(const n of e.au)t.Ho(n.mutations)}async function vp(e,t,n){const r=e.au.shift(),s=Tf.from(r,t,n);await lp(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await hp(e)}async function wp(e,t){t&&Ep(e).zo&&await async function(e,t){if(n=t.code,$h(n)&&n!==Lc.ABORTED){const n=e.au.shift();Ep(e).No(),await lp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await hp(e)}var n}(e,t),mp(e)&&gp(e)}async function bp(e,t){const n=Nc(e);n.asyncQueue.verifyOperationInProgress(),xc("RemoteStore","RemoteStore received new credentials");const r=sp(n);n.lu.add(3),await Xg(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Yg(n)}async function _p(e,t){const n=Nc(e);t?(n.lu.delete(2),await Yg(n)):t||(n.lu.add(2),await Xg(n),n._u.set("Unknown"))}function Ip(e){return e.mu||(e.mu=function(e,t,n){const r=Nc(e);return r.tu(),new Gg(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{zr:op.bind(null,e),Jr:ap.bind(null,e),Go:cp.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),rp(e)?np(e):e._u.set("Unknown")):(await e.mu.stop(),ip(e))}))),e.mu}function Ep(e){return e.gu||(e.gu=function(e,t,n){const r=Nc(e);return r.tu(),new Kg(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:pp.bind(null,e),Jr:wp.bind(null,e),Yo:yp.bind(null,e),Jo:vp.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await hp(e)):(await e.gu.stop(),e.au.length>0&&(xc("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xp{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Vc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new xp(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Oc(Lc.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(e,t){if(Tc("AsyncQueue",`${t}: ${e}`),vu(e))return new Oc(Lc.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.comparator=e?(t,n)=>e(t,n)||eu.comparator(t.key,n.key):(e,t)=>eu.comparator(e.key,t.key),this.keyedMap=Hh(),this.sortedSet=new ku(this.comparator)}static emptySet(e){return new Sp(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sp))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Sp;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.yu=new ku(eu.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Cc():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Cp{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Cp(e,t,Sp.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(){this.Iu=void 0,this.listeners=[]}}class Ap{constructor(){this.queries=new Wh((e=>eh(e)),Zl),this.onlineState="Unknown",this.Tu=new Set}}async function Np(e,t){const n=Nc(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new kp),s)try{i.Iu=await n.onListen(r)}catch(e){const n=Tp(e,`Initialization of query '${th(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&Rp(n)}async function Lp(e,t){const n=Nc(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Op(e,t){const n=Nc(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(s)&&(r=!0);t.Iu=s}}r&&Rp(n)}function Vp(e,t,n){const r=Nc(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Rp(e){e.Tu.forEach((e=>{e.next()}))}class Mp{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Cp(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=Cp.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.wt=e}Wi(e){return Ed(this.wt,e)}zi(e){return e.metadata.exists?kd(this.wt,e.document,!1):wl.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return wd(e)}}class Bp{constructor(e,t,n){this.xu=e,this.localStore=t,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Up(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Xc.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new Pp(this.wt);for(const r of e)if(r.metadata.queries){const e=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||td()).add(e);t.set(n,r)}}return t}async complete(){const e=await Eg(this.localStore,new Pp(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await xg(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Ou:this.collectionGroups,Mu:e}}}function Up(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.key=e}}class $p{constructor(e){this.key=e}}class jp{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=td(),this.mutatedKeys=td(),this.Lu=sh(e),this.Uu=new Sp(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new Dp,r=t?t.Uu:this.Uu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=nh(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Cc()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const i=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new Cp(this.query,e.Uu,r,s,e.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Dp,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=td(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new $p(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new qp(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=td();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Cp.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Wp{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Gp{constructor(e){this.key=e,this.Xu=!1}}class Kp{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Wh((e=>eh(e)),Zl),this.ec=new Map,this.nc=new Set,this.sc=new ku(eu.comparator),this.ic=new Map,this.rc=new Gm,this.oc={},this.uc=new Map,this.cc=_m.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function zp(e,t){const n=Iy(e);let r,s;const i=n.tc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const e=await yg(n.localStore,Xl(t));n.isPrimaryClient&&Jg(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await Hp(n,t,r,"current"===i)}return s}async function Hp(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let s=t.view.Ku(n);s.Oi&&(s=await wg(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return ay(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const s=await wg(e.localStore,t,!0),i=new jp(t,s.ji),o=i.Ku(s.documents),a=id.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);ay(e,n,c.zu);const u=new Wp(t,n,i);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function Qp(e,t){const n=Nc(e),r=n.tc.get(t),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((e=>!Zl(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await vg(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Zg(n.remoteStore,r.targetId),iy(n,r.targetId)})).catch(du)):(iy(n,r.targetId),await vg(n.localStore,r.targetId,!0))}async function Yp(e,t,n){const r=Ey(e);try{const e=await function(e,t){const n=Nc(e),r=Hc.now(),s=t.reduce(((e,t)=>e.add(t.key)),td());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Kh(),c=td();return n.Ui.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=Ah(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Oh(e.key,t,vl(t.value.mapValue),xh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Qh(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new ku(Gc)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await ly(r,e.changes),await hp(r.remoteStore)}catch(e){const t=Tp(e,"Failed to persist write");n.reject(t)}}async function Xp(e,t){const n=Nc(e);try{const e=await mg(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(kc(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?kc(r.Xu):e.removedDocuments.size>0&&(kc(r.Xu),r.Xu=!1))})),await ly(n,e,t)}catch(e){await du(e)}}function Jp(e,t,n){const r=Nc(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Nc(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.Eu(t)&&(r=!0)})),r&&Rp(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Zp(e,t,n){const r=Nc(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ic.get(t),i=s&&s.key;if(i){let e=new ku(eu.comparator);e=e.insert(i,wl.newNoDocument(i,Qc.min()));const n=td().add(i),s=new sd(Qc.min(),new Map,new Lu(Gc),e,n);await Xp(r,s),r.sc=r.sc.remove(i),r.ic.delete(t),uy(r)}else await vg(r.localStore,t,!1).then((()=>iy(r,t,n))).catch(du)}async function ey(e,t){const n=Nc(e),r=t.batch.batchId;try{const e=await dg(n.localStore,t);sy(n,r,null),ry(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ly(n,e)}catch(e){await du(e)}}async function ty(e,t,n){const r=Nc(e);try{const e=await function(e,t){const n=Nc(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(kc(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);sy(r,t,n),ry(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ly(r,e)}catch(n){await du(n)}}async function ny(e,t){const n=Nc(e);sp(n.remoteStore)||xc("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Nc(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.uc.get(e)||[];r.push(t),n.uc.set(e,r)}catch(e){const n=Tp(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function ry(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function sy(e,t,n){const r=Nc(e);let s=r.oc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.oc[r.currentUser.toKey()]=s}}function iy(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||oy(e,t)}))}function oy(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(Zg(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),uy(e))}function ay(e,t,n){for(const r of n)r instanceof qp?(e.rc.addReference(r.key,t),cy(e,r)):r instanceof $p?(xc("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||oy(e,r.key)):Cc()}function cy(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(xc("SyncEngine","New document in limbo: "+n),e.nc.add(r),uy(e))}function uy(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new eu(Xc.fromString(t)),r=e.cc.next();e.ic.set(r,new Gp(n)),e.sc=e.sc.insert(n,r),Jg(e.remoteStore,new Df(Xl(Gl(n.path)),r,2,Tu.ot))}}async function ly(e,t,n){const r=Nc(e),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=ag.Vi(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(e,t){const n=Nc(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>fu.forEach(t,(t=>fu.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>fu.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!vu(e))throw e;xc("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,s)}}}(r.localStore,i))}async function hy(e,t){const n=Nc(e);if(!n.currentUser.isEqual(t)){xc("SyncEngine","User change. New user:",t.toKey());const e=await hg(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new Oc(Lc.CANCELLED,t))}))})),e.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ly(n,e.Ki)}}function dy(e,t){const n=Nc(e),r=n.ic.get(t);if(r&&r.Xu)return td().add(r.key);{let e=td();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}async function fy(e,t){const n=Nc(e),r=await wg(n.localStore,t.query,!0),s=t.view.Ju(r);return n.isPrimaryClient&&ay(n,t.targetId,s.zu),s}async function my(e,t){const n=Nc(e);return _g(n.localStore,t).then((e=>ly(n,e)))}async function gy(e,t,n,r){const s=Nc(e),i=await function(e,t){const n=Nc(e),r=Nc(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.yn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):fu.resolve(null)))))}(s.localStore,t);null!==i?("pending"===n?await hp(s.remoteStore):"acknowledged"===n||"rejected"===n?(sy(s,t,r||null),ry(s,t),function(e,t){Nc(Nc(e).mutationQueue).In(t)}(s.localStore,t)):Cc(),await ly(s,i)):xc("SyncEngine","Cannot apply mutation batch with id: "+t)}async function py(e,t){const n=Nc(e);if(Iy(n),Ey(n),!0===t&&!0!==n.ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await yy(n,e.toArray());n.ac=!0,await _p(n.remoteStore,!0);for(const r of t)Jg(n.remoteStore,r)}else if(!1===t&&!1!==n.ac){const e=[];let t=Promise.resolve();n.ec.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>(iy(n,s),vg(n.localStore,s,!0)))),Zg(n.remoteStore,s)})),await t,await yy(n,e),function(e){const t=Nc(e);t.ic.forEach(((e,n)=>{Zg(t.remoteStore,n)})),t.rc.cs(),t.ic=new Map,t.sc=new ku(eu.comparator)}(n),n.ac=!1,await _p(n.remoteStore,!1)}}async function yy(e,t,n){const r=Nc(e),s=[],i=[];for(const o of t){let e;const t=r.ec.get(o);if(t&&0!==t.length){e=await yg(r.localStore,Xl(t[0]));for(const e of t){const t=r.tc.get(e),n=await fy(r,t);n.snapshot&&i.push(n.snapshot)}}else{const t=await bg(r.localStore,o);e=await yg(r.localStore,t),await Hp(r,vy(t),o,!1)}s.push(e)}return r.Zu.Go(i),s}function vy(e){return Wl(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function wy(e){const t=Nc(e);return Nc(Nc(t.localStore).persistence).Ri()}async function by(e,t,n,r){const s=Nc(e);if(s.ac)return void xc("SyncEngine","Ignoring unexpected query state notification.");const i=s.ec.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await _g(s.localStore,rh(i[0])),r=sd.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await ly(s,e,r);break}case"rejected":await vg(s.localStore,t,!0),iy(s,t,r);break;default:Cc()}}async function _y(e,t,n){const r=Iy(e);if(r.ac){for(const e of t){if(r.ec.has(e)){xc("SyncEngine","Adding an already active target "+e);continue}const t=await bg(r.localStore,e),n=await yg(r.localStore,t);await Hp(r,vy(t),n.targetId,!1),Jg(r.remoteStore,n)}for(const e of n)r.ec.has(e)&&await vg(r.localStore,e,!1).then((()=>{Zg(r.remoteStore,e),iy(r,e)})).catch(du)}}function Iy(e){const t=Nc(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Zp.bind(null,t),t.Zu.Go=Op.bind(null,t.eventManager),t.Zu.lc=Vp.bind(null,t.eventManager),t}function Ey(e){const t=Nc(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ey.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ty.bind(null,t),t}function xy(e,t,n){const r=Nc(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Nc(e),r=wd(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Up(r));const s=new Bp(r,e.localStore,t.wt);let i=await t.fc();for(;i;){const e=await s.Nu(i);e&&n._updateProgress(e),i=await t.fc()}const o=await s.complete();return await ly(e,o.Mu,void 0),await function(e,t){const n=Nc(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ds.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Ou)}catch(e){return Sc("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Ty{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=$g(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return lg(this.persistence,new cg,e.initialUser,this.wt)}_c(e){return new Xm(Zm.Ms,this.wt)}dc(e){return new Vg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sy extends Ty{constructor(e,t,n){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await Ey(this.yc.syncEngine),await hp(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(e){return lg(this.persistence,new cg,e.initialUser,this.wt)}mc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Cm(n,e.asyncQueue,t)}gc(e,t){const n=new xu(t,this.persistence);return new Eu(e.asyncQueue,n)}_c(e){const t=og(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?fm.withCacheSize(this.cacheSizeBytes):fm.DEFAULT;return new rg(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ug(),qg(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new Vg}}class Dy extends Sy{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof Og&&(this.sharedClientState.syncEngine={kr:gy.bind(null,t),Or:by.bind(null,t),Mr:_y.bind(null,t),Ri:wy.bind(null,t),Nr:my.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci((async e=>{await py(this.yc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}dc(e){const t=Ug();if(!Og.V(t))throw new Oc(Lc.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=og(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Og(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Cy{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Jp(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=hy.bind(null,this.syncEngine),await _p(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ap}createDatastore(e){const t=$g(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Bg(r));var r;return function(e,t,n,r){return new zg(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Jp(this.syncEngine,e,0),i=Mg.V()?new Mg:new Rg,new Qg(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Kp(e,t,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Nc(e);xc("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await Xg(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new Vc,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(null===e)return null;const t=this.Ac.decode(e),n=Number(t);isNaN(n)&&this.Pc(`length string (${t}) is not valid number`);const r=await this.vc(n);return new Fp(JSON.parse(r),e.length+n)}Vc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0;)if(await this.Sc())break;if(0===this.buffer.length)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new Oc(Lc.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Nc(e),r=Sd(n.wt)+"/documents",s={documents:t.map((e=>Id(n.wt,e)))},i=await n.ao("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach((e=>{const t=Ad(n.wt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());kc(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Fh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=eu.fromPath(t);this.mutations.push(new Ph(n,this.precondition(n)))})),await async function(e,t){const n=Nc(e),r=Sd(n.wt)+"/documents",s={writes:t.map((e=>Ld(n.wt,e)))};await n.ro("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Cc();t=Qc.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Oc(Lc.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?xh.updateTime(t):xh.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Qc.min()))throw new Oc(Lc.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xh.updateTime(t)}return xh.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.Dc=n.maxAttempts,this.So=new jg(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const e=new Ly(this.datastore),t=this.xc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Nc(e)}))))})).catch((e=>{this.Nc(e)}))}))}xc(e){try{const t=this.updateFunction(e);return!zu(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(e)}kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!$h(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=wc.UNAUTHENTICATED,this.clientId=Wc.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{xc("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(xc("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Oc(Lc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Tp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Ry(e,t){e.asyncQueue.verifyOperationInProgress(),xc("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await hg(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function My(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Fy(e);xc("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>bp(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>bp(t.remoteStore,n))),e.onlineComponents=t}async function Fy(e){return e.offlineComponents||(xc("FirestoreClient","Using default OfflineComponentProvider"),await Ry(e,new Ty)),e.offlineComponents}async function Py(e){return e.onlineComponents||(xc("FirestoreClient","Using default OnlineComponentProvider"),await My(e,new Cy)),e.onlineComponents}function By(e){return Fy(e).then((e=>e.persistence))}function Uy(e){return Fy(e).then((e=>e.localStore))}function qy(e){return Py(e).then((e=>e.remoteStore))}function $y(e){return Py(e).then((e=>e.syncEngine))}async function jy(e){const t=await Py(e),n=t.eventManager;return n.onListen=zp.bind(null,t.syncEngine),n.onUnlisten=Qp.bind(null,t.syncEngine),n}function Wy(e){return e.asyncQueue.enqueue((async()=>{const t=await By(e),n=await qy(e);return t.setNetworkEnabled(!0),function(e){const t=Nc(e);return t.lu.delete(0),Yg(t)}(n)}))}function Gy(e){return e.asyncQueue.enqueue((async()=>{const t=await By(e),n=await qy(e);return t.setNetworkEnabled(!1),async function(e){const t=Nc(e);t.lu.add(0),await Xg(t),t._u.set("Offline")}(n)}))}function Ky(e,t){const n=new Vc;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Nc(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new Oc(Lc.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Tp(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Uy(e),t,n))),n.promise}function zy(e,t,n={}){const r=new Vc;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Ay({next:i=>{t.enqueueAndForget((()=>Lp(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new Oc(Lc.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new Oc(Lc.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Mp(Gl(n.path),i,{includeMetadataChanges:!0,Du:!0});return Np(e,o)}(await jy(e),e.asyncQueue,t,n,r))),r.promise}function Hy(e,t){const n=new Vc;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await wg(e,t,!0),s=new jp(t,r.ji),i=s.Ku(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=Tp(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Uy(e),t,n))),n.promise}function Qy(e,t,n={}){const r=new Vc;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Ay({next:n=>{t.enqueueAndForget((()=>Lp(e,o))),n.fromCache&&"server"===r.source?s.reject(new Oc(Lc.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Mp(n,i,{includeMetadataChanges:!0,Du:!0});return Np(e,o)}(await jy(e),e.asyncQueue,t,n,r))),r.promise}function Yy(e,t){const n=new Ay(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Nc(e).Tu.add(t),t.next()}(await jy(e),n))),()=>{n.Tc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Nc(e).Tu.delete(t)}(await jy(e),n)))}}function Xy(e,t,n){const r=new Vc;return e.asyncQueue.enqueueAndForget((async()=>{const s=await function(e){return Py(e).then((e=>e.datastore))}(e);new Oy(e.asyncQueue,s,n,t,r).run()})),r.promise}function Jy(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Ny(e,t)}(function(e,t){if(e instanceof Uint8Array)return ky(e,t);if(e instanceof ArrayBuffer)return ky(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,$g(t));e.asyncQueue.enqueueAndForget((async()=>{xy(await $y(e),s,r)}))}function Zy(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Nc(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ds.getNamedQuery(e,t)))}(await Uy(e),t)))}const ev=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(e,t,n){if(!n)throw new Oc(Lc.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nv(e,t,n,r){if(!0===t&&!0===r)throw new Oc(Lc.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function rv(e){if(!eu.isDocumentKey(e))throw new Oc(Lc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sv(e){if(eu.isDocumentKey(e))throw new Oc(Lc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function iv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Cc()}function ov(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Oc(Lc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iv(e);throw new Oc(Lc.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function av(e,t){if(t<=0)throw new Oc(Lc.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Oc(Lc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Oc(Lc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cv({}),this._settingsFrozen=!1,e instanceof Ku?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Oc(Lc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ku(e.options.projectId)}(e))}get app(){if(!this._app)throw new Oc(Lc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Oc(Lc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Mc;switch(e.type){case"gapi":const t=e.client;return kc(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Uc(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Oc(Lc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ev.get(e);t&&(xc("ComponentProvider","Removing Datastore"),ev.delete(e),t.terminate())}(this),Promise.resolve()}}function lv(e,t,n,r={}){var s;const i=(e=ov(e,uv))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&Sc("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=wc.MOCK_USER;else{t=rt(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Oc(Lc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new wc(i)}e._authCredentials=new Fc(new Rc(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fv(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hv(this.firestore,e,this._key)}}class dv{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new dv(this.firestore,e,this._query)}}class fv extends dv{constructor(e,t,n){super(e,t,Gl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hv(this.firestore,null,new eu(e))}withConverter(e){return new fv(this.firestore,e,this._path)}}function mv(e,t,...n){if(e=Ct(e),tv("collection","path",t),e instanceof uv){const r=Xc.fromString(t,...n);return sv(r),new fv(e,null,r)}{if(!(e instanceof hv||e instanceof fv))throw new Oc(Lc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Xc.fromString(t,...n));return sv(r),new fv(e.firestore,null,r)}}function gv(e,t){if(e=ov(e,uv),tv("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new Oc(Lc.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new dv(e,null,function(e){return new jl(Xc.emptyPath(),e)}(t))}function pv(e,t,...n){if(e=Ct(e),1===arguments.length&&(t=Wc.I()),tv("doc","path",t),e instanceof uv){const r=Xc.fromString(t,...n);return rv(r),new hv(e,null,new eu(r))}{if(!(e instanceof hv||e instanceof fv))throw new Oc(Lc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Xc.fromString(t,...n));return rv(r),new hv(e.firestore,e instanceof fv?e.converter:null,new eu(r))}}function yv(e,t){return e=Ct(e),t=Ct(t),(e instanceof hv||e instanceof fv)&&(t instanceof hv||t instanceof fv)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function vv(e,t){return e=Ct(e),t=Ct(t),e instanceof dv&&t instanceof dv&&e.firestore===t.firestore&&Zl(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wv{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new jg(this,"async_queue_retry"),this.Kc=()=>{const e=qg();e&&xc("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=qg();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=qg();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new Vc;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Mc.push(e),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(ts){if(!vu(ts))throw ts;xc("AsyncQueue","Operation failed with retryable error: "+ts)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Oc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Tc("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Oc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=xp.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&Cc()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Oc,await e}while(e!==this.Oc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function bv(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class _v{constructor(){this._progressObserver={},this._taskCompletionResolver=new Vc,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=-1;class Ev extends uv{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new wv,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Tv(this),this._firestoreClient.terminate()}}function xv(e){return e._firestoreClient||Tv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Tv(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Gu(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Vy(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Sv(e,t){Rv(e=ov(e,Ev));const n=xv(e),r=e._freezeSettings(),s=new Cy;return Cv(n,s,new Sy(s,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Dv(e){Rv(e=ov(e,Ev));const t=xv(e),n=e._freezeSettings(),r=new Cy;return Cv(t,r,new Dy(r,n.cacheSizeBytes))}function Cv(e,t,n){const r=new Vc;return e.asyncQueue.enqueue((async()=>{try{await Ry(e,n),await My(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===Lc.FAILED_PRECONDITION||e.code===Lc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function kv(e){if(e._initialized&&!e._terminated)throw new Oc(Lc.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Vc;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!gu.V())return Promise.resolve();const t=e+"main";await gu.delete(t)}(og(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Av(e){return function(e){const t=new Vc;return e.asyncQueue.enqueueAndForget((async()=>ny(await $y(e),t))),t.promise}(xv(e=ov(e,Ev)))}function Nv(e){return Wy(xv(e=ov(e,Ev)))}function Lv(e){return Gy(xv(e=ov(e,Ev)))}function Ov(e,t){const n=xv(e=ov(e,Ev)),r=new _v;return Jy(n,e._databaseId,t,r),r}function Vv(e,t){return Zy(xv(e=ov(e,Ev)),t).then((t=>t?new dv(e,null,t.query):null))}function Rv(e){if(e._initialized||e._terminated)throw new Oc(Lc.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Oc(Lc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fv(Fu.fromBase64String(e))}catch(e){throw new Oc(Lc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Fv(Fu.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Oc(Lc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Oc(Lc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Gc(this._lat,e._lat)||Gc(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=/^__.*__$/;class qv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Oh(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lh(e,this.data,t,this.fieldTransforms)}}class $v{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Oh(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jv(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Cc()}}class Wv{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Wv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return lw(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(jv(this.Zc)&&Uv.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Gv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||$g(e)}aa(e,t,n,r=!1){return new Wv({Zc:e,methodName:t,ca:n,path:Zc.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Kv(e){const t=e._freezeSettings(),n=$g(e._databaseId);return new Gv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function zv(e,t,n,r,s,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,s);ow("Data must be an object, but it was:",o,r);const a=sw(r,o);let c,u;if(i.merge)c=new Ru(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=aw(t,r,n);if(!o.contains(s))throw new Oc(Lc.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);hw(e,s)||e.push(s)}c=new Ru(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new qv(new yl(a),c,u)}class Hv extends Pv{_toFieldTransform(e){if(2!==e.Zc)throw 1===e.Zc?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hv}}function Qv(e,t,n){return new Wv({Zc:3,ca:t.settings.ca,methodName:e._methodName,na:n},t.databaseId,t.wt,t.ignoreUndefinedProperties)}class Yv extends Pv{_toFieldTransform(e){return new _h(e.path,new fh)}isEqual(e){return e instanceof Yv}}class Xv extends Pv{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=Qv(this,e,!0),n=this.ha.map((e=>rw(e,t))),r=new mh(n);return new _h(e.path,r)}isEqual(e){return this===e}}class Jv extends Pv{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=Qv(this,e,!0),n=this.ha.map((e=>rw(e,t))),r=new ph(n);return new _h(e.path,r)}isEqual(e){return this===e}}class Zv extends Pv{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new vh(e.wt,ch(e.wt,this.la));return new _h(e.path,t)}isEqual(e){return this===e}}function ew(e,t,n,r){const s=e.aa(1,t,n);ow("Data must be an object, but it was:",s,r);const i=[],o=yl.empty();Du(r,((e,r)=>{const a=uw(t,e,n);r=Ct(r);const c=s.ia(a);if(r instanceof Hv)i.push(a);else{const e=rw(r,c);null!=e&&(i.push(a),o.set(a,e))}}));const a=new Ru(i);return new $v(o,a,s.fieldTransforms)}function tw(e,t,n,r,s,i){const o=e.aa(1,t,n),a=[aw(t,r,n)],c=[s];if(i.length%2!=0)throw new Oc(Lc.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(aw(t,i[d])),c.push(i[d+1]);const u=[],l=yl.empty();for(let d=a.length-1;d>=0;--d)if(!hw(u,a[d])){const e=a[d];let t=c[d];t=Ct(t);const n=o.ia(e);if(t instanceof Hv)u.push(e);else{const r=rw(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new Ru(u);return new $v(l,h,o.fieldTransforms)}function nw(e,t,n,r=!1){return rw(n,e.aa(r?4:3,t))}function rw(e,t){if(iw(e=Ct(e)))return ow("Unsupported field value:",t,e),sw(e,t);if(e instanceof Pv)return function(e,t){if(!jv(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=rw(s,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Ct(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ch(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Hc.fromDate(e);return{timestampValue:pd(t.wt,n)}}if(e instanceof Hc){const n=new Hc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:pd(t.wt,n)}}if(e instanceof Bv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Fv)return{bytesValue:yd(t.wt,e._byteString)};if(e instanceof hv){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:bd(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${iv(e)}`)}(e,t)}function sw(e,t){const n={};return Cu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Du(e,((e,r)=>{const s=rw(r,t.ea(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function iw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Hc||e instanceof Bv||e instanceof Fv||e instanceof hv||e instanceof Pv)}function ow(e,t,n){if(!iw(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=iv(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function aw(e,t,n){if((t=Ct(t))instanceof Mv)return t._internalPath;if("string"==typeof t)return uw(e,t);throw lw("Field path arguments must be of type string or ",e,!1,void 0,n)}const cw=new RegExp("[~\\*/\\[\\]]");function uw(e,t,n){if(t.search(cw)>=0)throw lw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Mv(...t.split("."))._internalPath}catch(r){throw lw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lw(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Oc(Lc.INVALID_ARGUMENT,a+e+c)}function hw(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new hv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new fw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class fw extends dw{data(){return super.data()}}function mw(e,t){return"string"==typeof t?uw(e,t):t instanceof Mv?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pw extends dw{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(mw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class yw extends pw{data(e={}){return super.data(e)}}class vw{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new gw(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new yw(this._firestore,this._userDataWriter,n.key,n,new gw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Oc(Lc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new yw(e._firestore,e._userDataWriter,n.doc.key,n.doc,new gw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new yw(e._firestore,e._userDataWriter,t.doc.key,t.doc,new gw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:ww(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ww(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Cc()}}function bw(e,t){return e instanceof pw&&t instanceof pw?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof vw&&t instanceof vw&&e._firestore===t._firestore&&vv(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Oc(Lc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iw{}function Ew(e,...t){for(const n of t)e=n._apply(e);return e}class xw extends Iw{constructor(e,t,n){super(),this.fa=e,this.da=t,this._a=n,this.type="where"}_apply(e){const t=Kv(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Oc(Lc.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Bw(o,i);const t=[];for(const n of o)t.push(Pw(r,e,n));a={arrayValue:{values:t}}}else a=Pw(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Bw(o,i),a=nw(n,t,o,"in"===i||"not-in"===i);const c=kl.create(s,i,a);return function(e,t){if(t.ht()){const n=Hl(e);if(null!==n&&!n.isEqual(t.field))throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=zl(e);null!==r&&Uw(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Oc(Lc.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Oc(Lc.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new dv(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new jl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Tw(e,t,n){const r=t,s=mw("where",e);return new xw(s,r,n)}class Sw extends Iw{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Oc(Lc.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Oc(Lc.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Bl(t,n);return function(e,t){if(null===zl(e)){const n=Hl(e);null!==n&&Uw(e,n,t.field)}}(e,r),r}(e._query,this.fa,this.wa);return new dv(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new jl(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Dw(e,t="asc"){const n=t,r=mw("orderBy",e);return new Sw(r,n)}class Cw extends Iw{constructor(e,t,n){super(),this.type=e,this.ma=t,this.ga=n}_apply(e){return new dv(e.firestore,e.converter,Jl(e._query,this.ma,this.ga))}}function kw(e){return av("limit",e),new Cw("limit",e,"F")}function Aw(e){return av("limitToLast",e),new Cw("limitToLast",e,"L")}class Nw extends Iw{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=Fw(e,this.type,this.ya,this.pa);return new dv(e.firestore,e.converter,function(e,t){return new jl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Lw(...e){return new Nw("startAt",e,!0)}function Ow(...e){return new Nw("startAfter",e,!1)}class Vw extends Iw{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=Fw(e,this.type,this.ya,this.pa);return new dv(e.firestore,e.converter,function(e,t){return new jl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Rw(...e){return new Vw("endBefore",e,!1)}function Mw(...e){return new Vw("endAt",e,!0)}function Fw(e,t,n,r){if(n[0]=Ct(n[0]),n[0]instanceof dw)return function(e,t,n,r,s){if(!r)throw new Oc(Lc.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of Yl(e))if(o.field.isKeyField())i.push(il(t,r.key));else{const e=r.data.field(o.field);if($u(e))throw new Oc(Lc.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new Pl(i,s)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=Kv(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new Oc(Lc.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!Ql(e)&&-1!==i.indexOf("/"))throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=e.path.child(Xc.fromString(i));if(!eu.isDocumentKey(n))throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new eu(n);a.push(il(t,s))}else{const e=nw(n,r,i);a.push(e)}}return new Pl(a,i)}(e._query,e.firestore._databaseId,s,t,n,r)}}function Pw(e,t,n){if("string"==typeof(n=Ct(n))){if(""===n)throw new Oc(Lc.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ql(t)&&-1!==n.indexOf("/"))throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Xc.fromString(n));if(!eu.isDocumentKey(r))throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return il(e,new eu(r))}if(n instanceof hv)return il(e,n._key);throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${iv(n)}.`)}function Bw(e,t){if(!Array.isArray(e)||0===e.length)throw new Oc(Lc.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Oc(Lc.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Uw(e,t,n){if(!n.isEqual(t))throw new Oc(Lc.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{convertValue(e,t="none"){switch(Ju(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Uu(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Cc()}}convertObject(e,t){const n={};return Du(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Bv(Uu(e.latitude),Uu(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ju(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Wu(e));default:return null}}convertTimestamp(e){const t=Bu(e);return new Hc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Xc.fromString(e);kc(zd(n));const r=new Ku(n.get(1),n.get(3)),s=new eu(n.popFirst(5));return r.isEqual(t)||Tc(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Ww extends $w{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hv(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Kv(e)}set(e,t,n){this._verifyNotCommitted();const r=Kw(e,this._firestore),s=jw(r.converter,t,n),i=zv(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,xh.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=Kw(e,this._firestore);let i;return i="string"==typeof(t=Ct(t))||t instanceof Mv?tw(this._dataReader,"WriteBatch.update",s._key,t,n,r):ew(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,xh.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Kw(e,this._firestore);return this._mutations=this._mutations.concat(new Fh(t._key,xh.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Oc(Lc.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Kw(e,t){if((e=Ct(e)).firestore!==t)throw new Oc(Lc.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(e){e=ov(e,hv);const t=ov(e.firestore,Ev);return zy(xv(t),e._key).then((n=>ab(t,e,n)))}class Hw extends $w{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new hv(this.firestore,null,t)}}function Qw(e){e=ov(e,hv);const t=ov(e.firestore,Ev),n=xv(t),r=new Hw(t);return Ky(n,e._key).then((n=>new pw(t,r,e._key,n,new gw(null!==n&&n.hasLocalMutations,!0),e.converter)))}function Yw(e){e=ov(e,hv);const t=ov(e.firestore,Ev);return zy(xv(t),e._key,{source:"server"}).then((n=>ab(t,e,n)))}function Xw(e){e=ov(e,dv);const t=ov(e.firestore,Ev),n=xv(t),r=new Hw(t);return _w(e._query),Qy(n,e._query).then((n=>new vw(t,r,e,n)))}function Jw(e){e=ov(e,dv);const t=ov(e.firestore,Ev),n=xv(t),r=new Hw(t);return Hy(n,e._query).then((n=>new vw(t,r,e,n)))}function Zw(e){e=ov(e,dv);const t=ov(e.firestore,Ev),n=xv(t),r=new Hw(t);return Qy(n,e._query,{source:"server"}).then((n=>new vw(t,r,e,n)))}function eb(e,t,n){e=ov(e,hv);const r=ov(e.firestore,Ev),s=jw(e.converter,t,n);return ob(r,[zv(Kv(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,xh.none())])}function tb(e,t,n,...r){e=ov(e,hv);const s=ov(e.firestore,Ev),i=Kv(s);let o;return o="string"==typeof(t=Ct(t))||t instanceof Mv?tw(i,"updateDoc",e._key,t,n,r):ew(i,"updateDoc",e._key,t),ob(s,[o.toMutation(e._key,xh.exists(!0))])}function nb(e){return ob(ov(e.firestore,Ev),[new Fh(e._key,xh.none())])}function rb(e,t){const n=ov(e.firestore,Ev),r=pv(e),s=jw(e.converter,t);return ob(n,[zv(Kv(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,xh.exists(!1))]).then((()=>r))}function sb(e,...t){var n,r,s;e=Ct(e);let i={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||bv(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(bv(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let c,u,l;if(e instanceof hv)u=ov(e.firestore,Ev),l=Gl(e._key.path),c={next:n=>{t[o]&&t[o](ab(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=ov(e,dv);u=ov(n.firestore,Ev),l=n._query;const r=new Hw(u);c={next:e=>{t[o]&&t[o](new vw(u,r,n,e))},error:t[o+1],complete:t[o+2]},_w(e._query)}return function(e,t,n,r){const s=new Ay(r),i=new Mp(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>Np(await jy(e),i))),()=>{s.Tc(),e.asyncQueue.enqueueAndForget((async()=>Lp(await jy(e),i)))}}(xv(u),l,a,c)}function ib(e,t){return Yy(xv(e=ov(e,Ev)),bv(t)?t:{next:t})}function ob(e,t){return function(e,t){const n=new Vc;return e.asyncQueue.enqueueAndForget((async()=>Yp(await $y(e),t,n))),n.promise}(xv(e),t)}function ab(e,t,n){const r=n.docs.get(t._key),s=new Hw(e);return new pw(e,s,t._key,r,new gw(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Kv(e)}get(e){const t=Kw(e,this._firestore),n=new Ww(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Cc();const r=e[0];if(r.isFoundDocument())return new dw(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new dw(this._firestore,n,t._key,null,t.converter);throw Cc()}))}set(e,t,n){const r=Kw(e,this._firestore),s=jw(r.converter,t,n),i=zv(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=Kw(e,this._firestore);let i;return i="string"==typeof(t=Ct(t))||t instanceof Mv?tw(this._dataReader,"Transaction.update",s._key,t,n,r):ew(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=Kw(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Kw(e,this._firestore),n=new Hw(this._firestore);return super.get(e).then((e=>new pw(this._firestore,n,t._key,e._document,new gw(!1,!1),t.converter)))}}function ub(e,t,n){e=ov(e,Ev);const r=Object.assign(Object.assign({},qw),n);return function(e){if(e.maxAttempts<1)throw new Oc(Lc.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),Xy(xv(e),(n=>t(new cb(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(){return new Hv("deleteField")}function hb(){return new Yv("serverTimestamp")}function db(...e){return new Xv("arrayUnion",e)}function fb(...e){return new Jv("arrayRemove",e)}function mb(e){return new Zv("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){bc=e}(rr),Yn(new kt("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new Ev(r,new Pc(e.getProvider("auth-internal")),new $c(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),cr(vc,"3.4.13",e),cr(vc,"3.4.13","esm2017")}();const gb="@firebase/firestore-compat",pb="0.1.22";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yb(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new Oc("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(){if("undefined"===typeof Uint8Array)throw new Oc("unimplemented","Uint8Arrays are not available in this environment.")}function wb(){if(!Mu())throw new Oc("unimplemented","Blobs are unavailable in Firestore in this environment.")}class bb{constructor(e){this._delegate=e}static fromBase64String(e){return wb(),new bb(Fv.fromBase64String(e))}static fromUint8Array(e){return vb(),new bb(Fv.fromUint8Array(e))}toBase64(){return wb(),this._delegate.toBase64()}toUint8Array(){return vb(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(e){return Ib(e,["next","error","complete"])}function Ib(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{enableIndexedDbPersistence(e,t){return Sv(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Dv(e._delegate)}clearIndexedDbPersistence(e){return kv(e._delegate)}}class xb{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ku||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Sc("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){lv(this._delegate,e,t,n)}enableNetwork(){return Nv(this._delegate)}disableNetwork(){return Lv(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,nv("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Av(this._delegate)}onSnapshotsInSync(e){return ib(this._delegate,e)}get app(){if(!this._appCompat)throw new Oc("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Bb(this,mv(this._delegate,e))}catch(t){throw Nb(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ab(this,pv(this._delegate,e))}catch(t){throw Nb(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Mb(this,gv(this._delegate,e))}catch(t){throw Nb(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return ub(this._delegate,(t=>e(new Db(this,t))))}batch(){return xv(this._delegate),new Cb(new Gw(this._delegate,(e=>ob(this._delegate,e))))}loadBundle(e){return Ov(this._delegate,e)}namedQuery(e){return Vv(this._delegate,e).then((e=>e?new Mb(this,e):null))}}class Tb extends $w{constructor(e){super(),this.firestore=e}convertBytes(e){return new bb(new Fv(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ab.forKey(t,this.firestore,null)}}function Sb(e){Ec(e)}class Db{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Tb(e)}get(e){const t=Ub(e);return this._delegate.get(t).then((e=>new Vb(this._firestore,new pw(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Ub(e);return n?(yb("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=Ub(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=Ub(e);return this._delegate.delete(t),this}}class Cb{constructor(e){this._delegate=e}set(e,t,n){const r=Ub(e);return n?(yb("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=Ub(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=Ub(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class kb{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new yw(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Rb(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=kb.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let s=r.get(t);return s||(s=new kb(e,new Tb(e),t),r.set(t,s)),s}}kb.INSTANCES=new WeakMap;class Ab{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Tb(e)}static forPath(e,t,n){if(e.length%2!==0)throw new Oc("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ab(t,new hv(t._delegate,n,new eu(e)))}static forKey(e,t,n){return new Ab(t,new hv(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Bb(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Bb(this.firestore,mv(this._delegate,e))}catch(t){throw Nb(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ct(e),e instanceof hv&&yv(this._delegate,e)}set(e,t){t=yb("DocumentReference.set",t);try{return t?eb(this._delegate,e,t):eb(this._delegate,e)}catch(n){throw Nb(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?tb(this._delegate,e):tb(this._delegate,e,t,...n)}catch(r){throw Nb(r,"updateDoc()","DocumentReference.update()")}}delete(){return nb(this._delegate)}onSnapshot(...e){const t=Lb(e),n=Ob(e,(e=>new Vb(this.firestore,new pw(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return sb(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Qw(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Yw(this._delegate):zw(this._delegate),t.then((e=>new Vb(this.firestore,new pw(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Ab(this.firestore,e?this._delegate.withConverter(kb.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Nb(e,t,n){return e.message=e.message.replace(t,n),e}function Lb(e){for(const t of e)if("object"===typeof t&&!_b(t))return t;return{}}function Ob(e,t){var n,r;let s;return s=_b(e[0])?e[0]:_b(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{s.next&&s.next(t(e))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class Vb{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ab(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return bw(this._delegate,e._delegate)}}class Rb extends Vb{data(e){const t=this._delegate.data(e);return Ac(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Mb{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Tb(e)}where(e,t,n){try{return new Mb(this.firestore,Ew(this._delegate,Tw(e,t,n)))}catch(r){throw Nb(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Mb(this.firestore,Ew(this._delegate,Dw(e,t)))}catch(n){throw Nb(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Mb(this.firestore,Ew(this._delegate,kw(e)))}catch(t){throw Nb(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Mb(this.firestore,Ew(this._delegate,Aw(e)))}catch(t){throw Nb(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Mb(this.firestore,Ew(this._delegate,Lw(...e)))}catch(t){throw Nb(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Mb(this.firestore,Ew(this._delegate,Ow(...e)))}catch(t){throw Nb(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Mb(this.firestore,Ew(this._delegate,Rw(...e)))}catch(t){throw Nb(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Mb(this.firestore,Ew(this._delegate,Mw(...e)))}catch(t){throw Nb(t,"endAt()","Query.endAt()")}}isEqual(e){return vv(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Jw(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Zw(this._delegate):Xw(this._delegate),t.then((e=>new Pb(this.firestore,new vw(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Lb(e),n=Ob(e,(e=>new Pb(this.firestore,new vw(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return sb(this._delegate,t,n)}withConverter(e){return new Mb(this.firestore,e?this._delegate.withConverter(kb.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Fb{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Rb(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Pb{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Mb(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Rb(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Fb(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Rb(this._firestore,n))}))}isEqual(e){return bw(this._delegate,e._delegate)}}class Bb extends Mb{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ab(this.firestore,e):null}doc(e){try{return new Ab(this.firestore,void 0===e?pv(this._delegate):pv(this._delegate,e))}catch(t){throw Nb(t,"doc()","CollectionReference.doc()")}}add(e){return rb(this._delegate,e).then((e=>new Ab(this.firestore,e)))}isEqual(e){return yv(this._delegate,e._delegate)}withConverter(e){return new Bb(this.firestore,e?this._delegate.withConverter(kb.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ub(e){return ov(e,hv)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(...e){this._delegate=new Mv(...e)}static documentId(){return new qb(Zc.keyField().canonicalString())}isEqual(e){return e=Ct(e),e instanceof Mv&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this._delegate=e}static serverTimestamp(){const e=hb();return e._methodName="FieldValue.serverTimestamp",new $b(e)}static delete(){const e=lb();return e._methodName="FieldValue.delete",new $b(e)}static arrayUnion(...e){const t=db(...e);return t._methodName="FieldValue.arrayUnion",new $b(t)}static arrayRemove(...e){const t=fb(...e);return t._methodName="FieldValue.arrayRemove",new $b(t)}static increment(e){const t=mb(e);return t._methodName="FieldValue.increment",new $b(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb={Firestore:xb,GeoPoint:Bv,Timestamp:Hc,Blob:bb,Transaction:Db,WriteBatch:Cb,DocumentReference:Ab,DocumentSnapshot:Vb,Query:Mb,QueryDocumentSnapshot:Rb,QuerySnapshot:Pb,CollectionReference:Bb,FieldPath:qb,FieldValue:$b,setLogLevel:Sb,CACHE_SIZE_UNLIMITED:Iv};function Wb(e,t){e.INTERNAL.registerComponent(new kt("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},jb)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(e){Wb(e,((e,t)=>new xb(e,t,new Eb))),e.registerVersion(gb,pb)}Gb(Fr);const Kb={apiKey:"AIzaSyDuoWbv-liVwte7sfZMVNz-mmz-PmflNrE",authDomain:"spidertech-61552.firebaseapp.com",projectId:"spidertech-61552",storageBucket:"spidertech-61552.appspot.com",messagingSenderId:"910942759811",appId:"1:910942759811:web:80bfdf29eec637ad2e24b6",measurementId:"G-FS6GXF3SH2"},zb=Fr.initializeApp(Kb),Hb=zb.firestore(),Qb=Hb.collection("inquiry"),Yb=e=>Qb.add(e);var Xb=(0,s.aZ)({name:"LetsTalk",components:{},data(){return{name:"",mobile:"",email:"",description:"",valid:!1,background_image:""}},mounted(){this.background_image=n(5031)("./"+this.$vuetify.theme.global.name+"/wave-1.svg")},methods:{submitQueryForm(){if(this.$refs.contact_form.validate(),!this.valid)return!1;let e={name:this.name,mobile:this.mobile,email:this.email,description:this.description,date_time:new Date};Yb(e).then(function(e){this.$refs.contact_form.reset(),this.showSnakeBar("success","your response has been recorded. We will get back to you as soon as possible")}.bind(this)).catch(function(e){this.showSnakeBar("error","Something went wrong, Please try again letter.")}.bind(this))}}});const Jb=(0,b.Z)(Xb,[["render",He],["__scopeId","data-v-664e9194"]]);var Zb=Jb;const e_=e=>((0,s.dD)("data-v-19f98994"),e=e(),(0,s.Cn)(),e),t_={class:"app-padding py-15 justify-center text-center align-center"},n_=["src","width"],r_=e_((()=>(0,s._)("span",{class:"text-h5 mx-2 font-weight-light"},"|",-1))),s_={class:"tech-title"};function i_(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["tech-stack-card-wrapper",e.$vuetify.display.mobile?"":"py-15"])},[(0,s._)("div",t_,[(0,s._)("p",{class:(0,o.C_)(["text-theme-stroke-2 font-weight-bold",e.$vuetify.display.mobile?"text-h5 mb-8 ":"text-h4 mb-12"])},"We are working with",2),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.tech_stacks,((t,n)=>((0,s.wg)(),(0,s.iD)("div",{key:n,class:(0,o.C_)(["d-inline-flex tech-stack-card",e.$vuetify.display.mobile?"my-5":"my-8"])},[(0,s._)("div",{class:(0,o.C_)(["d-flex align-center justify-center elevation-1",e.$vuetify.display.mobile?" mx-2 px-3 py-1 ":" px-3 py-2 mx-4"])},[(0,s._)("img",{src:t.img,alt:"",width:t.width||40,class:""},null,8,n_),r_,(0,s._)("span",s_,(0,o.zw)(t.title),1)],2)],2)))),128))])],2)}var o_={name:"TechStack",components:{},data(){return{isHovering:!0,tech_stacks:[{title:"Python",img:n(1275)},{title:"Django",img:n(5177)},{title:"Vue js",img:n(687)},{title:"Vuetify",width:45,img:n(9317)},{title:"Javascript",img:n(4568)},{title:"Git",img:n(1073)},{title:"Jquery",img:n(4567)},{title:"HTML5",img:n(2372)},{title:"SASS",img:n(2228)},{title:"Mysql",img:n(6253)},{title:"Postgresql",img:n(5917)},{title:"AWS",img:n(7290)},{title:"Digital Ocean",img:n(5294)}]}},mounted(){},methods:{}};const a_=(0,b.Z)(o_,[["render",i_],["__scopeId","data-v-19f98994"]]);var c_=a_,u_=n(836),l_=n(7325);const h_=e=>{const{touchstartX:t,touchendX:n,touchstartY:r,touchendY:s}=e,i=.5,o=16;e.offsetX=n-t,e.offsetY=s-r,Math.abs(e.offsetY)<i*Math.abs(e.offsetX)&&(e.left&&n<t-o&&e.left(e),e.right&&n>t+o&&e.right(e)),Math.abs(e.offsetX)<i*Math.abs(e.offsetY)&&(e.up&&s<r-o&&e.up(e),e.down&&s>r+o&&e.down(e))};function d_(e,t){var n;const r=e.changedTouches[0];t.touchstartX=r.clientX,t.touchstartY=r.clientY,null==(n=t.start)||n.call(t,{originalEvent:e,...t})}function f_(e,t){var n;const r=e.changedTouches[0];t.touchendX=r.clientX,t.touchendY=r.clientY,null==(n=t.end)||n.call(t,{originalEvent:e,...t}),h_(t)}function m_(e,t){var n;const r=e.changedTouches[0];t.touchmoveX=r.clientX,t.touchmoveY=r.clientY,null==(n=t.move)||n.call(t,{originalEvent:e,...t})}function g_(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:e=>d_(e,t),touchend:e=>f_(e,t),touchmove:e=>m_(e,t)}}function p_(e,t){var n,r,s;const i=t.value,o=null!=i&&i.parent?e.parentElement:e,a=null!=(n=null==i?void 0:i.options)?n:{passive:!0},c=null==(r=t.instance)?void 0:r.$.uid;if(!o||!c)return;const u=g_(t.value);o._touchHandlers=null!=(s=o._touchHandlers)?s:Object.create(null),o._touchHandlers[c]=u,(0,Se.XP)(u).forEach((e=>{o.addEventListener(e,u[e],a)}))}function y_(e,t){var n,r;const s=null!=(n=t.value)&&n.parent?e.parentElement:e,i=null==(r=t.instance)?void 0:r.$.uid;if(null==s||!s._touchHandlers||!i)return;const o=s._touchHandlers[i];(0,Se.XP)(o).forEach((e=>{s.removeEventListener(e,o[e])})),delete s._touchHandlers[i]}const v_={mounted:p_,unmounted:y_};var w_=v_,b_=n(1138),__=n(1970),I_=n(5738),E_=n(9903);const x_=Symbol.for("vuetify:v-window"),T_=Symbol.for("vuetify:v-window-group"),S_=(0,ae.e)()({name:"VWindow",directives:{Touch:v_},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>"boolean"===typeof e||"hover"===e},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...(0,b_.Q)(),...(0,ge.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:r}=(0,ge.ER)(e),{isRtl:i}=(0,E_.Vw)(),{t:o}=(0,I_.bU)(),c=(0,__._v)(e,T_),u=(0,J.iH)(),l=(0,s.Fl)((()=>i.value?!e.reverse:e.reverse)),h=(0,J.iH)(!1),d=(0,s.Fl)((()=>{const t="vertical"===e.direction?"y":"x",n=l.value?!h.value:h.value,r=n?"-reverse":"";return`v-window-${t}${r}-transition`})),f=(0,J.iH)(0),m=(0,J.iH)(void 0),g=(0,s.Fl)((()=>c.items.value.findIndex((e=>c.selected.value.includes(e.id)))));(0,s.YP)(g,((e,t)=>{const n=c.items.value.length,r=n-1;h.value=n<=2?e<t:e===r&&0===t||(0!==e||t!==r)&&e<t})),(0,s.JJ)(x_,{transition:d,isReversed:h,transitionCount:f,transitionHeight:m,rootRef:u});const p=(0,s.Fl)((()=>e.continuous||0!==g.value)),y=(0,s.Fl)((()=>e.continuous||g.value!==c.items.value.length-1));function v(){p.value&&c.prev()}function w(){y.value&&c.next()}const b=(0,s.Fl)((()=>{const t=[],r={icon:i.value?e.nextIcon:e.prevIcon,class:"v-window__"+(l.value?"right":"left"),onClick:c.prev,ariaLabel:o("$vuetify.carousel.prev")};t.push(p.value?n.prev?n.prev({props:r}):(0,s.Wm)(a.T,r,null):(0,s.Wm)("div",null,null));const u={icon:i.value?e.prevIcon:e.nextIcon,class:"v-window__"+(l.value?"left":"right"),onClick:c.next,ariaLabel:o("$vuetify.carousel.next")};return t.push(y.value?n.next?n.next({props:u}):(0,s.Wm)(a.T,u,null):(0,s.Wm)("div",null,null)),t})),_=(0,s.Fl)((()=>{if(!1===e.touch)return e.touch;const t={left:()=>{l.value?v():w()},right:()=>{l.value?w():v()},end:e=>{let{originalEvent:t}=e;t.stopPropagation()},start:e=>{let{originalEvent:t}=e;t.stopPropagation()}};return{...t,...!0===e.touch?{}:e.touch}}));return(0,ce.L)((()=>{var t,i;return(0,s.wy)((0,s.Wm)(e.tag,{ref:u,class:["v-window",{"v-window--show-arrows-on-hover":"hover"===e.showArrows},r.value]},{default:()=>[(0,s.Wm)("div",{class:"v-window__container",style:{height:m.value}},[null==(t=n.default)?void 0:t.call(n,{group:c}),!1!==e.showArrows&&(0,s.Wm)("div",{class:"v-window__controls"},[b.value])]),null==(i=n.additional)?void 0:i.call(n,{group:c})]}),[[(0,s.Q2)("touch"),_.value]])})),{group:c}}}),D_=(0,ae.a)({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:we.lE,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>e>0},modelValue:null,progress:[Boolean,String],showArrows:{type:[Boolean,String],default:!0,validator:e=>"boolean"===typeof e||"hover"===e},verticalDelimiters:[Boolean,String]},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const r=(0,Z.z)(e,"modelValue"),{t:i}=(0,I_.bU)(),o=(0,J.iH)();let c=-1;function u(){e.cycle&&o.value&&(c=window.setTimeout(o.value.group.next,+e.interval>0?+e.interval:6e3))}function l(){window.clearTimeout(c),window.requestAnimationFrame(u)}return(0,s.YP)(r,l),(0,s.YP)((()=>e.interval),l),(0,s.YP)((()=>e.cycle),(e=>{e?l():window.clearTimeout(c)})),(0,s.bv)(u),(0,ce.L)((()=>(0,s.Wm)(S_,{ref:o,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters}],style:{height:(0,Se.kb)(e.height)},continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:n.default,additional:t=>{let{group:o}=t;return(0,s.Wm)(s.HY,null,[!e.hideDelimiters&&(0,s.Wm)("div",{class:"v-carousel__controls",style:{left:"left"===e.verticalDelimiters&&e.verticalDelimiters?0:"auto",right:"right"===e.verticalDelimiters?0:"auto"}},[o.items.value.length>0&&(0,s.Wm)(u_.z,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[o.items.value.map((e=>{const t={"aria-label":i("$vuetify.carousel.ariaLabel.delimiter"),class:[o.isSelected(e.id)&&"v-btn--selected"],onClick:()=>o.select(e.id,!0)};return n.item?n.item({props:t,item:e}):(0,s.Wm)(a.T,(0,s.dG)(e,t),null)}))]})]),e.progress&&(0,s.Wm)(l_.K,{class:"v-carousel__progress",color:"string"===typeof e.progress?e.progress:void 0,modelValue:(o.getItemIndex(r.value)+1)/o.items.value.length*100},null)])},prev:n.prev,next:n.next}))),{}}});var C_=n(8694),k_=n(1136),A_=n(1372);const N_=(0,ae.a)({name:"VWindowItem",directives:{Touch:w_},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...(0,__.YQ)(),...(0,k_.H)()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const r=(0,s.f3)(x_),i=(0,__.Yt)(e,T_),{isBooted:o}=(0,A_.u)();if(!r||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=(0,J.iH)(!1),c=(0,s.Fl)((()=>r.isReversed.value?!1!==e.reverseTransition:!1!==e.transition));function u(){a.value&&r&&(a.value=!1,r.transitionCount.value>0&&(r.transitionCount.value-=1,0===r.transitionCount.value&&(r.transitionHeight.value=void 0)))}function l(){if(!a.value&&r){var e;if(a.value=!0,0===r.transitionCount.value)r.transitionHeight.value=(0,Se.kb)(null==(e=r.rootRef.value)?void 0:e.clientHeight);r.transitionCount.value+=1}}function h(){u()}function d(e){a.value&&(0,s.Y3)((()=>{c.value&&a.value&&r&&(r.transitionHeight.value=(0,Se.kb)(e.clientHeight))}))}const f=(0,s.Fl)((()=>{const t=r.isReversed.value?e.reverseTransition:e.transition;return!!c.value&&{name:"string"!==typeof t?r.transition.value:t,onBeforeEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:l,onAfterLeave:u,onLeaveCancelled:h,onEnter:d}})),{hasContent:m}=(0,k_.l)(e,i.isSelected);return(0,ce.L)((()=>{var e;return(0,s.Wm)(Le.J,{transition:o.value&&f.value},{default:()=>[(0,s.wy)((0,s.Wm)("div",{class:["v-window-item",i.selectedClass.value]},[m.value&&(null==(e=n.default)?void 0:e.call(n))]),[[Q.F8,i.isSelected.value]])]})})),{}}}),L_=(0,ae.a)({name:"VCarouselItem",inheritAttrs:!1,props:{value:null},setup(e,t){let{slots:n,attrs:r}=t;(0,ce.L)((()=>(0,s.Wm)(N_,{class:"v-carousel-item",value:e.value},{default:()=>[(0,s.Wm)(C_.f,r,n)]})))}}),O_=["src","height","width"],V_=(0,s.Uk)(" mdi-format-quote-open "),R_={class:"text-theme-stroke-1 opacity-8 fs-20"},M_={class:"text-theme-stroke-2 text-subtitle-1 mt-3 mb-0 font-weight-bold text-right"},F_={class:"text-right mt-0 text-caption text-theme-stroke-1 opacity-8"},P_=(0,s.Uk)("mdi-chevron-left"),B_=(0,s.Uk)("mdi-chevron-right");function U_(e,t,n,r,i,l){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["app-padding pb-10 mt-n1","testimonial-bg-"+e.$vuetify.theme.global.name])},[(0,s.Wm)(c.o,{align:"center",justify:"center","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(u.D,{sm:"11",cols:"12"},{default:(0,s.w5)((()=>[(0,s.Wm)(D_,{"hide-delimiters":"",modelValue:i.carousel,"onUpdate:modelValue":t[0]||(t[0]=e=>i.carousel=e),cycle:"","show-arrows":!1,color:"transparent",class:"py-10",interval:"3000"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.testimonial_list,((t,n)=>((0,s.wg)(),(0,s.j4)(L_,{key:n,class:"bg-transparent"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.o,{align:"center",justify:"center",class:(0,o.C_)(["testimonial-card-wrapper h-100",e.$vuetify.display.mobile?"px-1":"px-10"]),"no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(u.D,{sm:"3",cols:"12",class:(0,o.C_)(e.$vuetify.display.mobile?"text-center ":"text-left")},{default:(0,s.w5)((()=>[(0,s._)("img",{src:t.img,"aspect-ratio":"1",class:(0,o.C_)(e.$vuetify.display.mobile?"img-circle mb-n10":"img-circle"),height:e.$vuetify.display.mobile?100:150,width:e.$vuetify.display.mobile?100:150},null,10,O_)])),_:2},1032,["class"]),(0,s.Wm)(u.D,{sm:"9",cols:"12",class:(0,o.C_)(["text-left",e.$vuetify.display.mobile?"mt-n15":""])},{default:(0,s.w5)((()=>[(0,s.Wm)(ve.t,{size:"100",class:(0,o.C_)(e.$vuetify.display.mobile?"mt-n15 mb-n10":"mt-n15 mb-n7"),color:"rgb(var(--v-theme-theme-stroke-2), 0.3)"},{default:(0,s.w5)((()=>[V_])),_:1},8,["class"]),(0,s._)("div",R_,[(0,s.Uk)((0,o.zw)(t.msg)+" ",1),(0,s._)("p",M_,(0,o.zw)(t.name),1),(0,s._)("p",F_,(0,o.zw)(t.designation),1)])])),_:2},1032,["class"])])),_:2},1032,["class"])])),_:2},1024)))),128))])),_:1},8,["modelValue"])])),_:1}),(0,s.Wm)(u.D,{sm:"1",cols:"12",class:(0,o.C_)(e.$vuetify.display.mobile?"text-center ":"text-right")},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(a.T,{variant:"outlined",color:"rgb(var(--v-theme-theme-stroke-2),0.8)",class:"control-btn ma-2",onClick:t[1]||(t[1]=e=>l.changeSlide("previous"))},{default:(0,s.w5)((()=>[(0,s.Wm)(ve.t,{size:"x-large"},{default:(0,s.w5)((()=>[P_])),_:1})])),_:1}),(0,s.Wm)(a.T,{variant:"outlined",color:"rgb(var(--v-theme-theme-stroke-2),0.8)",class:"control-btn ma-2",onClick:t[2]||(t[2]=e=>l.changeSlide("next"))},{default:(0,s.w5)((()=>[(0,s.Wm)(ve.t,{size:"x-large"},{default:(0,s.w5)((()=>[B_])),_:1})])),_:1})])])),_:1},8,["class"])])),_:1})],2)}var q_={data(){return{carousel:0,testimonial_list:[{img:n(2624),msg:"I would highly recommend Team Spidertech's services for Software development. The team at Spidertech worked diligently to create a website that has all of the\nfeatures we needed to run a your business online.",name:"Dr Om Vijay Sahoo",designation:"Founder of Digital ayurveda"}]}},methods:{changeSlide(e){console,this.carousel="next"==e?this.testimonial_list.length-1>this.carousel?this.carousel+1:0:this.carousel>0?this.carousel-1:this.testimonial_list.length-1}}};const $_=(0,b.Z)(q_,[["render",U_],["__scopeId","data-v-6ac1501c"]]);var j_=$_,W_={name:"LandingPageVue",components:{HomeScreen:I,OurDomain:N,WhatWeDo:H,LetsTalk:Zb,TechStack:c_,CustomerTestimonial:j_},data(){return{}},beforeMount(){this.toggleLoading()},mounted(){},methods:{}};const G_=(0,b.Z)(W_,[["render",i]]);var K_=G_},7173:function(e,t,n){var r={"./blog/authors/amit.png":6761,"./blog/authors/rima.jpeg":4324,"./css/animation.scss":9832,"./css/solar-system.png":2118,"./css/style.scss":1302,"./logo.svg":9574,"./tech-stack/amazon-web-services.svg":7290,"./tech-stack/digitalocean.svg":5294,"./tech-stack/django.svg":5177,"./tech-stack/git.svg":1073,"./tech-stack/html-5.svg":2372,"./tech-stack/javascript.svg":4568,"./tech-stack/jquery.svg":4567,"./tech-stack/mysql.svg":6253,"./tech-stack/postgresql.svg":5917,"./tech-stack/python.svg":1275,"./tech-stack/sass.svg":2228,"./tech-stack/vue-js.svg":687,"./tech-stack/vuetify.svg":9317,"./testimonial/omvijay.jpg":2624,"./theme1/Education.svg":9809,"./theme1/account.svg":7605,"./theme1/blob-1.svg":4501,"./theme1/call.svg":8757,"./theme1/codeBG.png":2535,"./theme1/color-logo.svg":5480,"./theme1/e-commerce.svg":2456,"./theme1/home-iluustration.svg":6833,"./theme1/hospitality.svg":512,"./theme1/illustration-1.svg":2649,"./theme1/illustration-2.svg":9689,"./theme1/illustration-3.svg":580,"./theme1/mail.svg":8397,"./theme1/rectangelbg-1.png":2281,"./theme1/rectangelbg-2.png":7093,"./theme1/rocket.svg":5450,"./theme1/solar-system.svg":4091,"./theme1/techbg.png":8150,"./theme1/wave-1.svg":2714,"./theme1/wave-3.svg":6430,"./theme2/Education.svg":9283,"./theme2/account.svg":2953,"./theme2/blob-1.svg":422,"./theme2/call.svg":6651,"./theme2/codeBG.png":1054,"./theme2/e-commerce.svg":3312,"./theme2/footer-logo.svg":9342,"./theme2/header-logo.svg":1797,"./theme2/home-iluustration.svg":8831,"./theme2/hospitality.svg":4210,"./theme2/illustration-1.svg":4039,"./theme2/illustration-2.svg":5980,"./theme2/illustration-3.svg":7551,"./theme2/mail.svg":8081,"./theme2/meta-logo.svg":577,"./theme2/rectangelbg-1.png":4517,"./theme2/rectangelbg-2.png":2541,"./theme2/rocket.svg":8326,"./theme2/solar-system.svg":9106,"./theme2/techbg.png":3469,"./theme2/wave-1.svg":934,"./theme2/wave-3.svg":1605};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=7173},2662:function(e,t,n){var r={"./theme1/home-iluustration.svg":6833,"./theme2/home-iluustration.svg":8831};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=2662},2965:function(e,t,n){var r={"./theme1/solar-system.svg":4091,"./theme2/solar-system.svg":9106};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=2965},5031:function(e,t,n){var r={"./theme1/wave-1.svg":2714,"./theme2/wave-1.svg":934};function s(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=i,e.exports=s,s.id=5031},3064:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=3064,e.exports=t},9574:function(e,t,n){"use strict";e.exports=n.p+"img/logo.4d6033c9.svg"},7290:function(e,t,n){"use strict";e.exports=n.p+"img/amazon-web-services.da810bec.svg"},5294:function(e,t,n){"use strict";e.exports=n.p+"img/digitalocean.8c37bb05.svg"},5177:function(e,t,n){"use strict";e.exports=n.p+"img/django.195e80f6.svg"},1073:function(e,t,n){"use strict";e.exports=n.p+"img/git.64e947ff.svg"},2372:function(e,t,n){"use strict";e.exports=n.p+"img/html-5.964cf5a7.svg"},4568:function(e,t,n){"use strict";e.exports=n.p+"img/javascript.34326cf0.svg"},4567:function(e,t,n){"use strict";e.exports=n.p+"img/jquery.27c5eafc.svg"},6253:function(e,t,n){"use strict";e.exports=n.p+"img/mysql.40f84ca0.svg"},5917:function(e,t,n){"use strict";e.exports=n.p+"img/postgresql.ff3f4681.svg"},1275:function(e,t,n){"use strict";e.exports=n.p+"img/python.110555f0.svg"},2228:function(e,t,n){"use strict";e.exports=n.p+"img/sass.658385d8.svg"},687:function(e,t,n){"use strict";e.exports=n.p+"img/vue-js.cd11e5a2.svg"},9317:function(e,t,n){"use strict";e.exports=n.p+"img/vuetify.fd3373f0.svg"},9809:function(e,t,n){"use strict";e.exports=n.p+"img/Education.792bd4e8.svg"},7605:function(e,t,n){"use strict";e.exports=n.p+"img/account.fdf3c897.svg"},4501:function(e,t,n){"use strict";e.exports=n.p+"img/blob-1.9a1ff72e.svg"},5480:function(e,t,n){"use strict";e.exports=n.p+"img/color-logo.52cc19b4.svg"},2456:function(e,t,n){"use strict";e.exports=n.p+"img/e-commerce.f07c5e73.svg"},6833:function(e,t,n){"use strict";e.exports=n.p+"img/home-iluustration.75bad94f.svg"},512:function(e,t,n){"use strict";e.exports=n.p+"img/hospitality.c937cb18.svg"},2649:function(e,t,n){"use strict";e.exports=n.p+"img/illustration-1.e4a0b32c.svg"},9689:function(e,t,n){"use strict";e.exports=n.p+"img/illustration-2.a50d279c.svg"},580:function(e,t,n){"use strict";e.exports=n.p+"img/illustration-3.e01e4a7d.svg"},5450:function(e,t,n){"use strict";e.exports=n.p+"img/rocket.8255d29e.svg"},4091:function(e,t,n){"use strict";e.exports=n.p+"img/solar-system.2cb835f1.svg"},2714:function(e,t,n){"use strict";e.exports=n.p+"img/wave-1.5e62fa91.svg"},6430:function(e,t,n){"use strict";e.exports=n.p+"img/wave-3.5b8cb1f1.svg"},9283:function(e,t,n){"use strict";e.exports=n.p+"img/Education.792bd4e8.svg"},2953:function(e,t,n){"use strict";e.exports=n.p+"img/account.fdf3c897.svg"},422:function(e,t,n){"use strict";e.exports=n.p+"img/blob-1.9a1ff72e.svg"},3312:function(e,t,n){"use strict";e.exports=n.p+"img/e-commerce.f07c5e73.svg"},8831:function(e,t,n){"use strict";e.exports=n.p+"img/home-iluustration.b650afc4.svg"},4210:function(e,t,n){"use strict";e.exports=n.p+"img/hospitality.c937cb18.svg"},4039:function(e,t,n){"use strict";e.exports=n.p+"img/illustration-1.e4a0b32c.svg"},5980:function(e,t,n){"use strict";e.exports=n.p+"img/illustration-2.eb3299b4.svg"},7551:function(e,t,n){"use strict";e.exports=n.p+"img/illustration-3.e01e4a7d.svg"},577:function(e,t,n){"use strict";e.exports=n.p+"img/meta-logo.e104b0d9.svg"},8326:function(e,t,n){"use strict";e.exports=n.p+"img/rocket.8255d29e.svg"},9106:function(e,t,n){"use strict";e.exports=n.p+"img/solar-system.2cb835f1.svg"},934:function(e,t,n){"use strict";e.exports=n.p+"img/wave-1.ed90efe1.svg"},1605:function(e,t,n){"use strict";e.exports=n.p+"img/wave-3.5b8cb1f1.svg"},6761:function(e,t,n){"use strict";e.exports=n.p+"img/amit.92d985c1.png"},4324:function(e,t,n){"use strict";e.exports=n.p+"img/rima.7a1beb60.jpeg"},2118:function(e,t,n){"use strict";e.exports=n.p+"img/solar-system.505eb989.png"},2624:function(e,t,n){"use strict";e.exports=n.p+"img/omvijay.a2b10acd.jpg"},2535:function(e,t,n){"use strict";e.exports=n.p+"img/codeBG.8da04c19.png"},2281:function(e,t,n){"use strict";e.exports=n.p+"img/rectangelbg-1.efddff90.png"},7093:function(e,t,n){"use strict";e.exports=n.p+"img/rectangelbg-2.5c1a756a.png"},8150:function(e,t,n){"use strict";e.exports=n.p+"img/techbg.07f0a2f2.png"},1054:function(e,t,n){"use strict";e.exports=n.p+"img/codeBG.8da04c19.png"},4517:function(e,t,n){"use strict";e.exports=n.p+"img/rectangelbg-1.efddff90.png"},2541:function(e,t,n){"use strict";e.exports=n.p+"img/rectangelbg-2.5c1a756a.png"},3469:function(e,t,n){"use strict";e.exports=n.p+"img/techbg.07f0a2f2.png"},652:function(e,t,n){"use strict";n.d(t,{V:function(){return y}});var r=n(3396),s=n(3289),i=n(8694),o=n(9694),a=n(4231),c=n(9374),u=n(1138),l=n(2370),h=n(4960),d=n(3766),f=n(1107),m=n(9888),g=n(4870);const p=(0,d.U)({color:String,start:Boolean,end:Boolean,icon:h.lE,image:String,...(0,o.f)(),...(0,a.I)(),...(0,c.Z)(),...(0,u.Q)()}),y=(0,f.a)({name:"VAvatar",props:p(),setup(e,t){let{slots:n}=t;const{backgroundColorClasses:u,backgroundColorStyles:h}=(0,l.Y5)((0,g.Vh)(e,"color")),{densityClasses:d}=(0,o.t)(e),{roundedClasses:f}=(0,a.b)(e),{sizeClasses:p,sizeStyles:y}=(0,c.t)(e);return(0,m.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},u.value,d.value,f.value,p.value],style:[h.value,y.value]},{default:()=>[e.image?(0,r.Wm)(i.f,{src:e.image,alt:""},null):e.icon?(0,r.Wm)(s.t,{icon:e.icon},null):null==(t=n.default)?void 0:t.call(n)]})})),{}}})},8694:function(e,t,n){"use strict";n.d(t,{f:function(){return g}});var r=n(3396),s=n(4544),i=n(1107),o=n(9888);function a(e){return{aspectStyles:(0,r.Fl)((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}const c=(0,i.a)({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...(0,s.x)()},setup(e,t){let{slots:n}=t;const{aspectStyles:i}=a(e),{dimensionStyles:c}=(0,s.$)(e);return(0,o.L)((()=>{var t;return(0,r.Wm)("div",{class:"v-responsive",style:c.value},[(0,r.Wm)("div",{class:"v-responsive__sizer",style:i.value},null),null==(t=n.additional)?void 0:t.call(n),n.default&&(0,r.Wm)("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])})),{}}});var u=n(7052),l=n(4906),h=n(4870),d=n(9242),f=n(2385),m=n(131);const g=(0,i.a)({name:"VImg",directives:{intersect:u.Z},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...(0,l.X)()},emits:["loadstart","load","error"],setup(e,t){let{emit:n,slots:s}=t;const i=(0,h.iH)(""),a=(0,h.iH)(),u=(0,h.iH)(e.eager?"loading":"idle"),g=(0,h.iH)(),p=(0,h.iH)(),y=(0,r.Fl)((()=>e.src&&"object"===typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),v=(0,r.Fl)((()=>y.value.aspect||g.value/p.value||0));function w(t){if((!e.eager||!t)&&(!f.cu||t||e.eager)){if(u.value="loading",y.value.lazySrc){const e=new Image;e.src=y.value.lazySrc,E(e,null)}y.value.src&&(0,r.Y3)((()=>{var e,t;if(n("loadstart",(null==(e=a.value)?void 0:e.currentSrc)||y.value.src),null!=(t=a.value)&&t.complete){if(a.value.naturalWidth||_(),"error"===u.value)return;v.value||E(a.value,null),b()}else v.value||E(a.value),I()}))}}function b(){var e;I(),u.value="loaded",n("load",(null==(e=a.value)?void 0:e.currentSrc)||y.value.src)}function _(){var e;u.value="error",n("error",(null==(e=a.value)?void 0:e.currentSrc)||y.value.src)}function I(){const e=a.value;e&&(i.value=e.currentSrc||e.src)}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=()=>{const{naturalHeight:r,naturalWidth:s}=e;r||s?(g.value=s,p.value=r):e.complete||"loading"!==u.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,p.value=1):setTimeout(n,t)};n()}(0,r.YP)((()=>e.src),(()=>{w("idle"!==u.value)})),(0,r.wF)((()=>w()));const x=(0,r.Fl)((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),T=(0,r.Fl)((()=>{var t;if(!y.value.src||"idle"===u.value)return;const n=(0,r.h)("img",{class:["v-img__img",x.value],src:y.value.src,srcset:y.value.srcset,sizes:e.sizes,ref:a,onLoad:b,onError:_}),i=null==(t=s.sources)?void 0:t.call(s);return(0,r.Wm)(l.J,{transition:e.transition,appear:!0},{default:()=>[(0,r.wy)(i?(0,r.Wm)("picture",{class:"v-img__picture"},[i,n]):n,[[d.F8,"loaded"===u.value]])]})})),S=(0,r.Fl)((()=>(0,r.Wm)(l.J,{transition:e.transition},{default:()=>[y.value.lazySrc&&"loaded"!==u.value&&(0,r.Wm)("img",{class:["v-img__img","v-img__img--preload",x.value],src:y.value.lazySrc,alt:""},null)]}))),D=(0,r.Fl)((()=>{if(s.placeholder)return(0,r.Wm)(l.J,{transition:e.transition,appear:!0},{default:()=>[("loading"===u.value||"error"===u.value&&!s.error)&&(0,r.Wm)("div",{class:"v-img__placeholder"},[s.placeholder()])]})})),C=(0,r.Fl)((()=>{if(s.error)return(0,r.Wm)(l.J,{transition:e.transition,appear:!0},{default:()=>["error"===u.value&&(0,r.Wm)("div",{class:"v-img__error"},[s.error()])]})})),k=(0,r.Fl)((()=>{if(e.gradient)return(0,r.Wm)("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null)})),A=(0,h.iH)(!1);{const e=(0,r.YP)(v,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{A.value=!0}))})),e())}))}return(0,o.L)((()=>(0,r.wy)((0,r.Wm)(c,{class:["v-img",{"v-img--booting":!A.value}],style:{width:(0,m.kb)("auto"===e.width?g.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>[T.value,S.value,k.value,D.value,C.value],default:s.default}),[[(0,r.Q2)("intersect"),{handler:w,options:e.options},null,{once:!0}]]))),{currentSrc:i,image:a,state:u,naturalWidth:g,naturalHeight:p}}})},7052:function(e,t,n){"use strict";var r=n(2385);function s(e,t){if(!r.cu)return;const n=t.modifiers||{},s=t.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver((function(){var r;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;const c=null==(r=e._observe)?void 0:r[t.instance.$.uid];if(!c)return;const u=s.some((e=>e.isIntersecting));!o||n.quiet&&!c.init||n.once&&!u&&!c.init||o(u,s,a),u&&n.once?i(e,t):c.init=!0}),a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:c},c.observe(e)}function i(e,t){var n;const r=null==(n=e._observe)?void 0:n[t.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const o={mounted:s,unmounted:i};t["Z"]=o},1114:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(7139),s=n(3396),i=n(1107);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,i.a)({name:null!=n?n:(0,r.kC)((0,r._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,n){let{slots:r}=n;return()=>{var n;return(0,s.h)(t.tag,{class:e},null==(n=r.default)?void 0:n.call(r))}}})}}}]);
//# sourceMappingURL=about.0e27385b.js.map