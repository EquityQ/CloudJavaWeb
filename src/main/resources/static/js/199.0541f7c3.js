"use strict";(self["webpackChunkmy_cloud_javaweb_project"]=self["webpackChunkmy_cloud_javaweb_project"]||[]).push([[199],{1764:function(e,t){const o={baseUrl:"http://localhost:8081",api:{captcha:"/captcha",login:"/user/login",register:"/user/register",logout:"/user/logout",getUserInfo:"/user/getinfo",authToken:"/user/token-auth",ip:"/ip",ShopInfo:"/element/info",code:"/user/code",selectUser:"/user/select-info",deleteUser:"/user/delete",updateUser:"/user/change",deleteShop:"/element/delete",uploadImg:"/img/base64",updateShop:"/element/change",insertShop:"/element/insert",getOrders:"/order/getall",payInsert:"/pay/top-up",payMyinfo:"/pay/get",payEx:"/pay/exchange"},apiUrl:"/api"};t.A=o},199:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var a=o(6768);const r={class:"auth-container"},s={class:"auth-form"};function i(e,t,o,i,n,u){const l=(0,a.g2)("el-input"),h=(0,a.g2)("el-button");return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.Lk)("div",s,[t[2]||(t[2]=(0,a.Lk)("h2",null,"输入提权码",-1)),(0,a.bF)(l,{modelValue:n.authorizationCode,"onUpdate:modelValue":t[0]||(t[0]=e=>n.authorizationCode=e),placeholder:"默认提权码为EquityQ",clearable:""},null,8,["modelValue"]),(0,a.bF)(h,{type:"primary",onClick:u.submitAuthorizationCode},{default:(0,a.k6)((()=>t[1]||(t[1]=[(0,a.eW)("提交")]))),_:1},8,["onClick"])])])}o(4114);var n=o(1219),u=o(1764),l={name:"AuthoriZation",data(){return{authorizationCode:""}},methods:{submitAuthorizationCode(){if(""!==this.authorizationCode)if(/[^\u4e00-\u9fa5a-zA-Z0-9]/.test(this.authorizationCode))n.nk.error("提权码中不能包含中文或其他非法字符");else{var e=this.$cookies.get("token");if(null==e||""===e)return n.nk.error("未检测到登录态"),this.$cookies.remove("token"),void this.$router.push("/user/login");var t=this.$cookies.get("permission");"admin"!==t?this.$axios.post(u.A.baseUrl+u.A.apiUrl+u.A.api.code,{},{headers:{token:this.$cookies.get("token"),code:this.authorizationCode}}).then((e=>{this.$message.success(e.data.Response),this.$message.success("正在将数据更新至DashBoard"),setTimeout((()=>{this.$router.push("/dashboard")}),1e3)})):n.nk.error("您已拥有管理员权限，无需再次申请")}else n.nk.error("请输入提权码")}}},h=o(1241);const c=(0,h.A)(l,[["render",i],["__scopeId","data-v-6256e97c"]]);var d=c}}]);
//# sourceMappingURL=199.0541f7c3.js.map