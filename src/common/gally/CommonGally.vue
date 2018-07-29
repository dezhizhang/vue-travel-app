<template>
  <div class='gally' @click='handleGallyClick'>
     <div class='gally-wrap'>
        <swiper :options='swiperOptions'>
          <swiper-slide  v-for='(item,index) in imgs' :key='index'>
             <img class='gally-img' :src='item'/>
          </swiper-slide>
          <div class='swiper-pagination gallay-pagination' slot="pagination"></div>
        </swiper>
     </div>
  </div>
</template>

<script>
export default{
    name:"CommonGally",
    props:{
      imgs:{
        type:Array,
        default(){
          return ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4103060811,952122109&fm=27&gp=0.jpg']
        }
      }
    },
    data(){
      return {
        swiperOptions:{
          pagination:'.swiper-pagination',
          paginationType:'fraction',
          observeParents:true,
          observer:true

        }
      }
    },
    methods:{
      handleGallyClick(){
        this.$emit('close')
      }
    }
    
}
</script>

<style>
 .gally{
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:#000;
    z-index:6;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
 }
 .gally-wrap{
    background:#fff;
    height:0;
    width:100%;
    padding-bottom:100%;


 }

 .gally-img{
   width:100%;
   display:block;
   height:416px;
 }
 .gallay-pagination{
   color:#fff;
   z-index:9;
   overflow:hidden;
 }
</style>