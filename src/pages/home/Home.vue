<template>
   <div class='home'>
      <Header/>
      <HomeSwiper/>
      <HomeIcons/>
      <Recommend/>
      <Weekend/>
   </div>
</template>

<script>
import Header from './components/Header';
import HomeSwiper from './components/HomeSwiper';
import HomeIcons from './components/HomeIcons';
import Recommend from './components/Recommend';
import Weekend from './components/Weekend'
export default{
    name:'Home',
    components:{
      Header,
      HomeSwiper,
      HomeIcons,
      Recommend,
      Weekend,
      
    }
}
</script>

<style>

</style>