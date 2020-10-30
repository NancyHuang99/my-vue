<template>
  <div id="app">
      <Header />
      <div class="container"> 
        <!-- 根据不同的路径渲染不同的组件 -->
         <router-view></router-view>

      </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components:{

    Header,

  }, 


   
}
</script>
<style scoped>
.container{
  margin: 30px auto;

}
</style>