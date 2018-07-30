<template>
  <div class='detail'>
    <DetailBanner/>
    <DetailHeader/>
    <DetailList :list='list'/>
    <div class='content'></div>
  </div>
</template>

<script>
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/DetailHeader'
import DetailList from './components/DetailList'
import axios from 'axios';

export default{
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
      return {
        list:[],
      

      }
          
    },
    methods:{
      getInfo(){
        axios.get('/api/detail.josn',{
         
          params:{
            id:this.$route.params.id
          }
        }).then((res)=>{
          console.log(res);

        })
      }
    },

    mounted() {
      this.getInfo();
    },

}
</script>

<style scoped>
.content{
  height:50rem;
  
}

</style>