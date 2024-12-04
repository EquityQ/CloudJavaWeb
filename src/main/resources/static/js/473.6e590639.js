"use strict";(self["webpackChunkmy_cloud_javaweb_project"]=self["webpackChunkmy_cloud_javaweb_project"]||[]).push([[473],{1764:function(e,t){const a={baseUrl:"http://localhost:8081",api:{captcha:"/captcha",login:"/user/login",register:"/user/register",logout:"/user/logout",getUserInfo:"/user/getinfo",authToken:"/user/token-auth",ip:"/ip",ShopInfo:"/element/info",code:"/user/code",selectUser:"/user/select-info",deleteUser:"/user/delete",updateUser:"/user/change",deleteShop:"/element/delete",uploadImg:"/img/base64",updateShop:"/element/change",insertShop:"/element/insert",getOrders:"/order/getall",payInsert:"/pay/top-up",payMyinfo:"/pay/get",payEx:"/pay/exchange",payForOrder:"/pay/pay-order"},apiUrl:"/api"};t.A=a},1473:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var o=a(6768);const r=["src"];function l(e,t,a,l,s,u){const d=(0,o.g2)("el-upload"),p=(0,o.g2)("el-form-item"),i=(0,o.g2)("el-input"),c=(0,o.g2)("el-button"),n=(0,o.g2)("el-form");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t[5]||(t[5]=(0,o.Lk)("h2",{style:{"text-align":"center"}},"当前正在新增商品",-1)),(0,o.bF)(n,{"label-width":"100px",model:s.product},{default:(0,o.k6)((()=>[(0,o.bF)(p,{label:"商品图片"},{default:(0,o.k6)((()=>[(0,o.bF)(d,{class:"avatar-uploader",action:u.config.baseUrl+u.config.apiUrl+u.config.api.uploadImg,"show-file-list":!1,"on-success":u.handleAvatarSuccess,"before-upload":u.beforeAvatarUpload},{default:(0,o.k6)((()=>[(0,o.Lk)("img",{src:s.product.image,class:"avatar"},null,8,r)])),_:1},8,["action","on-success","before-upload"])])),_:1}),(0,o.bF)(p,{label:"商品名称"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{modelValue:s.product.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.product.name=e),placeholder:"请输入商品名称"},null,8,["modelValue"])])),_:1}),(0,o.bF)(p,{label:"商品价格"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{modelValue:s.product.price,"onUpdate:modelValue":t[1]||(t[1]=e=>s.product.price=e),modelModifiers:{trim:!0},placeholder:"请输入商品价格"},null,8,["modelValue"])])),_:1}),(0,o.bF)(p,{label:"商品库存"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{modelValue:s.product.value,"onUpdate:modelValue":t[2]||(t[2]=e=>s.product.value=e),modelModifiers:{number:!0},placeholder:"请输入商品库存"},null,8,["modelValue"])])),_:1}),(0,o.bF)(p,{label:"商品描述"},{default:(0,o.k6)((()=>[(0,o.bF)(i,{modelValue:s.product.description,"onUpdate:modelValue":t[3]||(t[3]=e=>s.product.description=e),type:"textarea",placeholder:"请输入商品描述"},null,8,["modelValue"])])),_:1}),(0,o.bF)(p,null,{default:(0,o.k6)((()=>[(0,o.bF)(c,{type:"primary",onClick:u.handleSubmit},{default:(0,o.k6)((()=>t[4]||(t[4]=[(0,o.eW)("提交")]))),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"])],64)}a(4114);var s=a(1764),u={name:"ShopInsert",computed:{config(){return s.A}},data(){return{product:{name:"",price:"",value:"",description:"",image:"default.jpg"}}},methods:{handleSubmit(){/^[0-9]+(.[0-9]{1,2})?$/.test(this.product.price)?""!==this.product.name&&""!==this.product.price&&""!==this.product.value&&""!==this.product.description?this.$axios.post(s.A.baseUrl+s.A.apiUrl+s.A.api.insertShop,{name:this.product.name,price:this.product.price,value:this.product.value,description:this.product.description,image:this.product.image},{headers:{token:this.$cookies.get("token")}}).then((e=>{200===e.data.Code?(this.$message.success(e.data.Response),this.$router.push("/dashboard")):this.$message.error(e.data.Response)})):this.$message.error("请填写所有必填项"):this.$message.error("商品价格参数不合法")},beforeAvatarUpload(e){const t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a},handleAvatarSuccess(e){200===e.Code?(this.product.image=e.base64,this.$message.success(e.Response)):this.$message.error(e.Response)}}},d=a(1241);const p=(0,d.A)(u,[["render",l],["__scopeId","data-v-110d8c7c"]]);var i=p}}]);
//# sourceMappingURL=473.6e590639.js.map