<template>
  <div>
    <el-card class="box-card" style="margin-top: 20px">
      <template #header>
        <div class="card-header">
          <span>你的订单</span>
        </div>
      </template>
      <el-table :data="cart" style="width: 100%">
        <el-table-column prop="name" label="商品名称" width="180" />
        <el-table-column prop="price" label="单价" width="180" />
        <el-table-column prop="quantity" label="数量" width="180" />
        <el-table-column prop="localtotal" label="小计" width="180" />
      </el-table>
      <div class="total">
        <strong>总价: ￥{{ total }}</strong>
      </div>
      <br>
      <div style="display: flex;justify-content: right">
        <el-button type="primary" style="min-width: 120px;" @click="processPayment">进行支付</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import config from "@/class/config";

export default {
  data() {
    return {
      cart: [],
      total: 0
    }
  },
  mounted() {
    var token = this.$cookies.get("token");
    if(token==null||token==""){
      this.$message.error("未检测到登录态,无法使用功能。");
      this.$cookies.remove("token");
      this.$router.push("/user/login");
      return;
    }
  //   验证token有效性
    this.$axios.post(config.baseUrl+config.apiUrl+config.api.authToken,{},{headers:{
      'token':token
      }}).then(res=>{
        if(res.data.Code===200){
        //   注册token并更新
          this.$cookies.set("token",token,{expires:30,path:"/"});
        }else{
          this.$message.error(res.data.Response);
          this.$cookies.remove("token");
          this.$router.push("/user/login");
          return;
        }
    })
  //   扫描所有cookie 除了token 与permission
    this.$axios.get(config.baseUrl+config.apiUrl+config.api.ShopInfo,{}).then(res=>{
      if(res.data.Code===200){
        for (var i=0;i<res.data.elements.length;i++){
          if(this.$cookies.get(res.data.elements[i].name)!=null){
            this.cart.push({ name: res.data.elements[i].name, price: res.data.elements[i].price, quantity: this.$cookies.get(res.data.elements[i].name), localtotal: res.data.elements[i].price*this.$cookies.get(res.data.elements[i].name),maxValue: res.data.elements[i].value });
            this.total += parseFloat(res.data.elements[i].price*this.$cookies.get(res.data.elements[i].name));
          }
        }
      }else{
        this.$message.error(res.data.Response);
      }
    })
  },
  methods:{
    processPayment(){
      var token = this.$cookies.get("token");
      if(token==null||token==""){
        this.$message.error("未检测到登录态,无法进行支付。");
        this.$cookies.remove("token");
        this.$router.push("/user/login");
        return;
      }
      this.$axios.post(config.baseUrl+config.apiUrl+config.api.payForOrder,{
        "items":this.cart
      },{
        headers:{
          'Token':token
        }
      }).then(res=>{
        if(res.data.Code===200){
          this.$message.success(res.data.Response);
          // 将购物车cookie清零
          for (var i=0;i<this.cart.length;i++){
            this.$cookies.remove(this.cart[i].name);
          }
          this.$router.push("/payment");
        }else{
          this.$message.error(res.data.Response);
        }
      })
    }
  }
}

</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.total {
  text-align: right;
  margin-top: 10px;
  font-size: 18px;
}
</style>
