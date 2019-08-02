<template>
  <div class='homeBox'>
    <router-view></router-view> 
   <div class='footer'>
     <router-link to="/home/shou">配送到家</router-link>
     <router-link to="/home/classify">分类</router-link>
     <router-link to="/home/bos">会员</router-link>
     <router-link to="/home/car">购物车</router-link>
     <router-link to="/home/my">我的</router-link>
  </div>
  </div>
</template>
<script>
export default {
  props:{

  },
  components:{

  },
  data(){
    return {

    }
  },
  computed:{

  },
  methods:{

  },
  created(){

  },
  mounted(){

  }
}
</script>
<style scoped lang="">
.footer{
  width: 100%;
  height: 45px;
  display: flex;
  border-top:1px solid #ccc;
  justify-content: space-around;
  align-items: center;
}
</style>