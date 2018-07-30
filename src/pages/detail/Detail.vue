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
export default{
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
      return {
        list:[
          {
            title:"成人票",
            children:[
              {
                title:'成人三馆连票'
              },
              {
                title:'成人五馆连票'
              }
            ]
          },
          {
            title:"学生票"
          },
          {
            title:"儿童票"
          }
        ]
      }
    }

}
</script>

<style scoped>
.content{
  height:50rem;
  
}

</style>