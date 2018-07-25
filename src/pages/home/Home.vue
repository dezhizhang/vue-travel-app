<template>
   <div class='home'>
      <Header/>
      <HomeSwiper/>
      <HomeIcons/>
      <Recommend/>
   </div>
</template>

<script>
import Header from './components/Header';
import HomeSwiper from './components/HomeSwiper';
import HomeIcons from './components/HomeIcons';
import Recommend from './components/Recommend';
export default{
    name:'Home',
    components:{
      Header,
      HomeSwiper,
      HomeIcons,
      Recommend,
      
    }
}
</script>

<style>

</style>