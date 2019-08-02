<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.homeBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.pages{
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.footer{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size:13px;
}
.router-link-active{
  color:red;
}
</style>
