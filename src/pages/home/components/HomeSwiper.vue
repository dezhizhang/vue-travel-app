<template>
  <div class="nav">
      <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in listImg" :key="item.id">
         <img :src="item.img"/>
         <!--<img src='https://s11.mogucdn.com/mlcdn/c45406/180720_884e72jlca4ikjcibb4l7i45jk872_750x340.jpg_1300x9999.v1c7E.70.webp'/>-->
      </swiper-slide>
     <!-- <swiper-slide>
        <img src='https://s17.mogucdn.com/mlcdn/c45406/180402_34178d4id9lakh1bc38f5aja55cj8_750x340.jpg_1300x9999.v1c7E.70.webp'/>
      </swiper-slide>
      <swiper-slide>
        <img src="https://s2.mogucdn.com/mlcdn/c45406/180720_0gifb45935h3fh562d089367eg662_750x340.jpg_1300x9999.v1c7E.70.webp"/>
      </swiper-slide>
      <swiper-slide>
        <img src='https://s11.mogucdn.com/mlcdn/c45406/180720_1ic02fifbc45c5cf285cid7c3e8gc_750x340.jpg_1300x9999.v1c7E.70.webp'/>
      </swiper-slide>
      <swiper-slide>
        <img src="https://s2.mogucdn.com/mlcdn/c45406/180720_8cdb0h33681ighai84j6a88ac56ja_750x340.jpg_1300x9999.v1c7E.70.webp"/>
      </swiper-slide>
      -->
      <div class='swiper-pagination'   slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import uuid from 'uuid'
 export default{
   name:"HomeSwiper",
   data(){
     return {
       swiperOption:{
          paginatiom:'.swiper-pagination',
          loop:true, 
       },
       listImg:[
         {id:uuid(),img:'https://s11.mogucdn.com/mlcdn/c45406/180720_884e72jlca4ikjcibb4l7i45jk872_750x340.jpg_1300x9999.v1c7E.70.webp'},
         {id:uuid(),img:'https://s17.mogucdn.com/mlcdn/c45406/180402_34178d4id9lakh1bc38f5aja55cj8_750x340.jpg_1300x9999.v1c7E.70.webp'},
         {id:uuid(),img:'https://s2.mogucdn.com/mlcdn/c45406/180720_0gifb45935h3fh562d089367eg662_750x340.jpg_1300x9999.v1c7E.70.webp'},
         {id:uuid(),img:'https://s11.mogucdn.com/mlcdn/c45406/180720_1ic02fifbc45c5cf285cid7c3e8gc_750x340.jpg_1300x9999.v1c7E.70.webp'},
         {id:uuid(),img:'https://s2.mogucdn.com/mlcdn/c45406/180720_8cdb0h33681ighai84j6a88ac56ja_750x340.jpg_1300x9999.v1c7E.70.webp'}
       ]
       
     }
   }

 }
</script>

<style scoped>
 .nav>>>swiper-paginatiom-bullet-active{
   background:red!important;

 }
 .nav{
   width:100%;
   height:0;
   overflow:hidden;
   padding-bottom:44.25%;


 }
 .nav img{
    width:100%;
    height:100%;
    background-size:cover;
   

 }
</style>