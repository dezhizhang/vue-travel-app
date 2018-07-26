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
import axios from 'axios';
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
      
    },
    mounted() {
      this.getInfo()
    },
    methods:{
      getInfo(){
        axios.get('/api/index.josn').then(res=>{
          console.log(res);
          
        })
      }
    }
    
}
</script>

<style>

</style>