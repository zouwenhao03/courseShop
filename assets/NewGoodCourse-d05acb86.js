import{_ as u}from"./free-4f490bf9.js";import{_ as v,r as p,o as h,am as f,l as g,d as o,e as t,f as s,F as m,j as C,t as d,u as n,T as k,p as w,k as y}from"./index-76946c69.js";import{j as I}from"./judgeType-2d3ba1c9.js";const i=c=>(w("data-v-5d59538d"),c=c(),y(),c),N={class:"new-course"},P=k('<div class="contentTitle" data-v-5d59538d><div class="contentTitle-left" data-v-5d59538d><div class="hot" data-v-5d59538d><div class="hot-l" data-v-5d59538d>HOT</div><div class="hot-r" data-v-5d59538d></div></div><div class="txt" data-v-5d59538d><div class="txt-top" data-v-5d59538d>新上好课</div><div class="txt-bottom" data-v-5d59538d></div></div></div><div class="more" data-v-5d59538d>更 多</div></div>',1),x={class:"newCourseContent"},S=["onClick"],b={class:"courseInfo"},B={class:"courseBg"},T=["src"],M={class:"courseName"},j={class:"courseDegree"},D={key:0,class:"coursePriceZero"},G=i(()=>s("div",{class:"pricefree"},"免费学习",-1)),L=i(()=>s("img",{src:u,alt:""},null,-1)),F=[G,L],V={key:1,class:"coursePrice"},$=i(()=>s("div",{class:"courseMemberbg"},[s("span",{class:"courseMember"},"会员免费")],-1)),z={class:"price"},E={key:2,class:"coursePricePri"},H={class:"pricePri"},O={__name:"NewGoodCourse",setup(c){let r=p([]);h(()=>{f({pageNum:1,pageSize:8}).then(a=>{r.value=a.data.pageInfo.list})});const _=g(),l=a=>{_.push(`/courseInfo/${a}`)};return(a,R)=>(o(),t("div",N,[P,s("div",x,[s("ul",null,[(o(!0),t(m,null,C(n(r),e=>(o(),t("li",{class:"courseItem",key:e.id,onClick:Z=>l(e.id)},[s("div",b,[s("div",B,[s("img",{src:e.courseCover},null,8,T)]),s("div",M,d(e.courseName),1),s("div",j,d(n(I)(e.courseLevel))+" · "+d(e.purchaseCounter+e.purchaseCnt)+"人报名 ",1),e.discountPrice==0?(o(),t("div",D,F)):e.isMember==1?(o(),t("div",V,[$,s("div",z,"¥ "+d(e.discountPrice),1)])):(o(),t("div",E,[s("div",H,"¥ "+d(e.discountPrice),1)]))])],8,S))),128))])])]))}},K=v(O,[["__scopeId","data-v-5d59538d"]]);export{K as default};
