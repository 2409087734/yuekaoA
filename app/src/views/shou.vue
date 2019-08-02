<template>
    <div class='pages'>
          <p>八维学校-小篮球场</p>
          <div class='headerTabs'>
              <router-link to="/home/shou/duodian">多点超市</router-link>
              <router-link to="/home/shou/quanqiu">全球精选</router-link>
          </div>
          <div>
              <router-view></router-view>
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
.pages{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
p{
    width: 100%;
    height: 40px;
    border-bottom:1px solid #ccc;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size:14px;
}
.headerTabs{
    width: 100%;
    height: 40px;
    background: #f90;
    line-height: 40px;
    box-sizing: border-box;
}
.headerTabs a{
    padding: 0 15px;
}
</style>