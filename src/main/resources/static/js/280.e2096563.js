"use strict";(self["webpackChunkmy_cloud_javaweb_project"]=self["webpackChunkmy_cloud_javaweb_project"]||[]).push([[280],{1764:function(e,t){const a={baseUrl:"http://localhost:8081",api:{captcha:"/captcha",login:"/user/login",register:"/user/register",logout:"/user/logout",getUserInfo:"/user/getinfo",authToken:"/user/token-auth",ip:"/ip",ShopInfo:"/element/info",code:"/user/code",selectUser:"/user/select-info",deleteUser:"/user/delete",updateUser:"/user/change",deleteShop:"/element/delete",uploadImg:"/img/base64",updateShop:"/element/change",insertShop:"/element/insert",getOrders:"/order/getall",payInsert:"/pay/top-up",payMyinfo:"/pay/get",payEx:"/pay/exchange",payForOrder:"/pay/pay-order"},apiUrl:"/api"};t.A=a},8280:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(6768),o=a(4232);const r={class:"total"},i={style:{display:"flex","justify-content":"right"}};function l(e,t,a,l,n,p){const d=(0,s.g2)("el-table-column"),h=(0,s.g2)("el-table"),u=(0,s.g2)("el-button"),c=(0,s.g2)("el-card");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bF)(c,{class:"box-card",style:{"margin-top":"20px"}},{header:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.Lk)("div",{class:"card-header"},[(0,s.Lk)("span",null,"你的订单")],-1)]))),default:(0,s.k6)((()=>[(0,s.bF)(h,{data:n.cart,style:{width:"100%"}},{default:(0,s.k6)((()=>[(0,s.bF)(d,{prop:"name",label:"商品名称",width:"180"}),(0,s.bF)(d,{prop:"price",label:"单价",width:"180"}),(0,s.bF)(d,{prop:"quantity",label:"数量",width:"180"}),(0,s.bF)(d,{prop:"localtotal",label:"小计",width:"180"})])),_:1},8,["data"]),(0,s.Lk)("div",r,[(0,s.Lk)("strong",null,"总价: ￥"+(0,o.v_)(n.total),1)]),t[2]||(t[2]=(0,s.Lk)("br",null,null,-1)),(0,s.Lk)("div",i,[(0,s.bF)(u,{type:"primary",style:{"min-width":"120px"},onClick:p.processPayment},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("进行支付")]))),_:1},8,["onClick"])])])),_:1})])}a(4114);var n=a(1764),p={data(){return{cart:[],total:0}},mounted(){var e=this.$cookies.get("token");if(null==e||""==e)return this.$message.error("未检测到登录态,无法使用功能。"),this.$cookies.remove("token"),void this.$router.push("/user/login");this.$axios.post(n.A.baseUrl+n.A.apiUrl+n.A.api.authToken,{},{headers:{token:e}}).then((t=>{if(200!==t.data.Code)return this.$message.error(t.data.Response),this.$cookies.remove("token"),void this.$router.push("/user/login");this.$cookies.set("token",e,{expires:30,path:"/"})})),this.$axios.get(n.A.baseUrl+n.A.apiUrl+n.A.api.ShopInfo,{}).then((e=>{if(200===e.data.Code)for(var t=0;t<e.data.elements.length;t++)null!=this.$cookies.get(e.data.elements[t].name)&&(this.cart.push({name:e.data.elements[t].name,price:e.data.elements[t].price,quantity:this.$cookies.get(e.data.elements[t].name),localtotal:e.data.elements[t].price*this.$cookies.get(e.data.elements[t].name),maxValue:e.data.elements[t].value}),this.total+=parseFloat(e.data.elements[t].price*this.$cookies.get(e.data.elements[t].name)));else this.$message.error(e.data.Response)}))},methods:{processPayment(){var e=this.$cookies.get("token");if(null==e||""==e)return this.$message.error("未检测到登录态,无法进行支付。"),this.$cookies.remove("token"),void this.$router.push("/user/login");this.$axios.post(n.A.baseUrl+n.A.apiUrl+n.A.api.payForOrder,{items:this.cart},{headers:{Token:e}}).then((e=>{if(200===e.data.Code){this.$message.success(e.data.Response);for(var t=0;t<this.cart.length;t++)this.$cookies.remove(this.cart[t].name);this.$router.push("/payment")}else this.$message.error(e.data.Response)}))}}},d=a(1241);const h=(0,d.A)(p,[["render",l],["__scopeId","data-v-4780d3d7"]]);var u=h}}]);
//# sourceMappingURL=280.e2096563.js.map